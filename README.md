# SisypheanWebExtension

The Sisyphean Web is a browser extension that collages a web page, removing its usability for art. The results are unique, abstract web pages with unexpected results as you scroll.
All text is scaled to ten times its original size. Images are scaled based on quantity. If there are less images, they are scaled bigger. For example, if there are between 1-5 images on a web page, they are scaled to twelve times their size. If there are more than twenty images on a web page, they are scaled to four times their size. This is to balance out the amount of large images and make scrolling through the collage more reasonable.

Files in Repository:
background.js - Background script that waits for the code to run.
extension.js - The extension itself, which collages the web page.
icon.png - The icon for the extension.
icon_ORIG.png -  The full-sized icon.
jquery-3.2.1.min.js - jQuery.
manifest.json - Properties of the extension.
