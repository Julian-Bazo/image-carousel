# image-carousel

A re-usable function to create image carousels on websites.

How to use:

1. Import createGallery from createGallery.js
2. Create an Array of images
   Example : const gallery = [imgONE, imgTWO, imgTHREE];
3. Use the createGallery() function which allows THREE parameters

Parameters:
(imageArray, gallerySize, title)

Example:
createGallery(gallery, "30rem", "Favorite Salads");

This will create an image gallery from the images in gallery that will have an image width of 30rems and a h1 labeled `Favorite Salads`.

Note: When adding photos it is best to import like this:

import imgONE from "./img/anna-pelzer-IGfIGP5ONV0-unsplash.jpg";

Then just slot them in:

const gallery = [imgONE];

Current bugs:
Adding too many images while ALSO having a small gallery can create issues. Play nice with sizing if you want a very small gallery it would be better to use another library.
