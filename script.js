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
    // set the RGB values to the average of the 3 values
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

function filterRed() {
    for (var pixel of redImage.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        if (avg < 128) {
            pixel.setRed(2 * avg);
            pixel.setGreen(0);
            pixel.setBlue(0);
        }
        else {
            pixel.setRed(255);
            pixel.setGreen((2 * avg) - 255);
            pixel.setBlue((2 * avg) - 255);
        }
    }
}

function doRed() {
    // check if image is loaded
    if (imageIsLoaded(redImage)) {
        filterRed();
        redImage.drawTo(canvas);
    }
}

function doBlur() {
    alert("do blur");
}

function doReset() {
    if (imageIsLoaded(originalImage)) {
        loadImage();
    }
}