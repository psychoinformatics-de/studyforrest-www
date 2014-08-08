import sys
from mvpa2.base.hdf5 import h5load
import numpy as np

subjs = (1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20)
runs = (1,2,3,4,5,6,7,8)
rois = (11,12,17,18,19,20,23,24,41,42,43,44,45,46,57,58,59,60,61,62,71,74,77,78,79,80,85,86,89,90,91,92)

dataroot = sys.argv[1]

def get_ts_filter():
    TR=2.0
    nyquist = (1./TR) / 2.0
    wp = (1. / 100) / nyquist # pass band
    ws = (1. / 150) / nyquist # stop band
    passloss = 1.0
    stopattenuation = 30

    from scipy.signal import butter, buttord
    from mvpa2.mappers.filters import IIRFilterMapper

    ord, wn = buttord(wp, ws,
                      passloss,
                      stopattenuation,
                      analog=False)
    b, a = butter(ord, wn, btype='highpass')
    return IIRFilterMapper(b, a)

def proc_sub(dataroot, sub, mats):
    data = [h5load('%s/sub%.3i/BOLD/task001_run%.3i/atlas_timeseries_dico7Tad2grpbold7Tad_nl.hdf5'
                   % (dataroot, sub, run)) for run in runs]
    labels = open('%s/templates/grpbold7Tad/from_mni/atlas_labels.csv' % (dataroot,)).readlines()

    # yields tuples (column index, roi index)
    indices = [(i, int(n.split('(')[0]))
                    for i, n in enumerate(data[0]['column_names'])
                        if n.split('(')[1].startswith('mean') and int(n.split('(')[0]) in rois]
    col_idx = [i[0] for i in indices]
    roi_idx = [i[1] for i in indices]

    filter = get_ts_filter()

    # remove time series overlap between movie segments
    for i, d in enumerate(data):
        d['timeseries'] = filter(d['timeseries'])
        if i == 0:
            d['timeseries'] = d['timeseries'][:-4]
        elif i == len(data) - 1:
            d['timeseries'] = d['timeseries'][4:]
        else:
            d['timeseries'] = d['timeseries'][4:-4]
    # timepoint x roi
    ts = np.vstack([d['timeseries'][:, col_idx] for d in data])

    from scipy.spatial.distance import pdist
    from scipy.spatial.distance import squareform

    win_size = 30
    for win in range(0, len(ts), win_size)[:-1]:
        id_ = int(win/win_size)
        roi_cdist = squareform(1-pdist(ts[win:win+win_size].T, 'correlation'))
        if id_ in mats:
            mats[id_] += roi_cdist
        else:
            mats[id_] = roi_cdist
    return mats, labels[:1] + [l for l in labels[1:] if int(l.split(',')[0]) in roi_idx]

connect = {}
for sub in subjs:
    connect, labels = proc_sub(dataroot, sub, connect)

# convert to JSON compatible dtypes and dump to a file
import json
out = {}
for c in connect.keys():
    cmat = connect[c]
    # make average
    cmat /= len(subjs)
    cmat = np.abs(cmat)
    #cmat[cmat < 0.1] = 0
    out['%.3i' % (c,)] = [list(r) for r in cmat]

json.dump(out, open('movie_roi_connectome.json', 'w'))

labelfile = open('movie_roi_connectome_labels.csv', 'w')
labelfile.writelines(labels)
