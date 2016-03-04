MRI image viewer
****************

:status: hidden
:slug: volume_image_viewer
:JavaScripts: papaya.js
:Stylesheets: papaya.css
:lang: en

**Get to see MRI data in your browser**

If you have been a participant in this study, you can use this page to take a
look at your own brain! It only involves a few simple steps:

1. Make sure you have a reasonably modern browser. Any recent version of `Google
   Chrome`_ or Firefox_ should work.
2. Go to: http://psydata.ovgu.de/forrest_gump and navigate to the folder with
   your data. If you don't know your subject ID, please contact `Michael Hanke`_.
3. Download an image you are interested in, for example, you can use a
   high-resolution image that shows the gray and white matter of the brain. You
   can find this at: ``sub<YOUR_ID>/anatomy/highres001.nii.gz``

   You can find an overview of all available data on the
   `resource page <{filename}/pages/resources.rst>`_. Interesting images you can
   open in this viewer are: T1-weighted MRI, T2-weighted MRI,
   Susceptibility-weighted MRI, and an angiography.

   to open the file in your local disk.

.. _Google Chrome: http://www.google.com/chrome
.. _Firefox: http://www.mozilla.org/de/firefox
.. _Michael Hanke: mailto:michael.hanke@ovgu.de

4. Drag & drop the downloaded image onto the viewer, or click on the "File" menu

.. note::

   The image viewer runs completely in your own browser. You do not transfer
   any data from your local computer to a remote web server when using it.

.. raw:: html

  <script type="text/javascript">
      var params = [];
      params["worldSpace"] = false;
      params["expandable"] = true;
      params["kioskMode"] = false;
  </script>

  <div class="row">
    <div class="col-md-12">
      <div class="papaya" data-params="params"></div>
    </div><!-- /.col-md-12 -->
  </div><!-- /.row -->

With the buttons on the top-right it is possible to change the contrast of
images, or change the color-scheme.
