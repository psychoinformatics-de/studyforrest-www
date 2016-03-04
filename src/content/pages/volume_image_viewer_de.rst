MRT Bildbetrachter
******************

:status: hidden
:slug: volume_image_viewer
:JavaScripts: papaya.js
:Stylesheets: papaya.css
:lang: de

**Schau dir MRT-Daten im Browser an**

Wenn du in dieser Studie Versuchsperson warst, dann kannst du dieser Seite
nutzen, um dir dein eigenes Gehirn anzuschauen! Dazu braucht es nur ein paar
einfache Schritte:

1. Du musst einen relativ modernen Browser benutzen. Jede aktuelle Version von
   `Google Chrome`_ oder Firefox_ sollte funktionieren.
2. Jetzt geh' zu: http://psydata.ovgu.de/forrest_gump und finde deinen Weg zum
   Ordner mit deinen Daten. Wenn du deinen Versuchpersonen Code nicht kennst,
   dann schicke eine E-Mail an `Michael Hanke`_.
3. Lade dir ein Bild auf deinen Computer runter: zum Beispiel ein
   hoch-aufgelöstes Bild auf dem man die graue und weiße Substanz im Gehirn
   sehen kann (findest du hier: ``sub<DEINE_ID>/anatomy/highres001.nii.gz``).

   Einen Überblick zu allen verfügbaren Bildern gibt es auf der
   `Resourcen-Seite <{filename}/pages/resources.rst>`_. Interessante Bilder
   die mit diesem Betrachter angezeigt werden können sind: T1-weighted MRI,
   T2-weighted MRI, Susceptibility-weighted MRI, and an angiography.

.. _Google Chrome: http://www.google.com/chrome
.. _Firefox: http://www.mozilla.org/de/firefox
.. _Michael Hanke: mailto:michael.hanke@ovgu.de

4. Nach dem Download kannst du das Bild einfach auf den Betrachter ziehen oder
   das "File" Menu benutzen, um das Bild zu öffnen.

.. note::

   Der Betrachter läuft komplett in deinem Browser. Wenn du dir ein Bild
   ansiehst, werden keine Bild-Daten von deinem Computer zu einem Web-Server
   übertragen.

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

Mit den Schaltflächen oben rechts kann man den Bildkontrast verändern und auch
andere Farb-Schemata auswählen.
