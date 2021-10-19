const currentImage = document.querySelector('#image');
const images = ['images/pilt1.jpg','images/pilt2.jpg', 'images/pilt3.jpg' ];

function changeImage() {
    console.log('Hello from script file.');

    let randomNumber = Math.floor(Math.random() * images.length);

    console.log(images[randomNumber]);

    currentImage.src = images[randomNumber];
}