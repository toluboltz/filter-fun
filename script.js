var originalImage = null;
var grayImage = null;
var redImage = null;
var blurImage = null;

var canvas;

function loadImage() {
    // get the id of the image
    var file = document.getElementById("imgfile");
    // initialize the original image and other filter copies
    originalImage = new SimpleImage(file);
    grayImage = new SimpleImage(file);
    redImage = new SimpleImage(file);
    blurImage = new SimpleImage(file);
    canvas = document.getElementById("canvas");
    // load original image
    originalImage.drawTo(canvas);
}

function imageIsLoaded(image) {
    if (image == null || !image.complete()) {
        alert("Image not loaded");
        return false;
    }
    return true;
}

function filterGray() {
    for (var pixel of grayImage.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
}

function doGray() {
    // check if image is loaded
    if (imageIsLoaded(grayImage)) {
        filterGray(); // run grayscale algorithm
        grayImage.drawTo(canvas); // display grayscale image
    }
}

function doRed() {
    alert("do red");
}

function doBlur() {
    alert("do blur");
}

function doReset() {
    if (imageIsLoaded(originalImage)) {
        loadImage();
    }
}