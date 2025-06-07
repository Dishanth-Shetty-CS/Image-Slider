//Images array of size 10
const images_array = [
    "slider-images/slider-image-1.jpg",
    "slider-images/slider-image-2.jpg",
    "slider-images/slider-image-3.jpg",
    "slider-images/slider-image-4.jpg",
    "slider-images/slider-image-5.jpg",
    "slider-images/slider-image-6.jpg",
    "slider-images/slider-image-7.jpg",
    "slider-images/slider-image-8.jpg",
    "slider-images/slider-image-9.jpg",
    "slider-images/slider-image-10.jpg"
];

// Getting HTML elements with the help of their id's
const images_slider = document.getElementById("image_slider"); //Where the Image will shown
const previous_img_btn = document.getElementById("previous_img"); // Left arrow button
const next_img_btn = document.getElementById("next_img"); // Right arrow button

let currentIndex = 0; // It will starts from first image means index 0

// This function will display the first image in the array (currentIndex = 0)
function DisplayImage() {
    images_slider.src = images_array[currentIndex];
}

// This function will calls if user clicks "previous" button
function PreviousImg() {
    //It will go back to the previous image
    currentIndex = (currentIndex - 1 + images_array.length) % images_array.length;
    DisplayImage(); //displays the image
}

// This function will calls if user clicks "next" button
function NextImg() {
    //It will go next, if image is in last then loop back to the first image
    currentIndex = (currentIndex + 1) % images_array.length;
    DisplayImage(); //displays the image
}

//when user clicks "<(Previous) or (Next)>" icon in the font awesome icons , accordingly images will change
previous_img_btn.addEventListener('click', PreviousImg);
next_img_btn.addEventListener('click', NextImg);

//When page loads at that time the first image in the array will be displayed and changes every image in every 3 seconds - 3000ms
document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();       //It will prevent from default behavior
    DisplayImage();              // Show first image from the array
    setInterval(NextImg, 3000); // Change image every 3 seconds - 3000ms
});