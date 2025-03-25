const firstBox = document.getElementById('first-box');
const secondBox = document.getElementById('second-box');
const imageContainer = document.getElementById('image-container');

const images = {
    'house-room': 'house-room.jpg',
    'house-box': 'house-box.jpg',
    'house-key': 'house-key.jpg',
    'room-room': 'room-room.jpg',
    'room-box': 'room-box.jpg',
    'room-key': 'room-key.jpg',
    'box-room': 'box-room.jpg',
    'box-box': 'box-box.jpg',
    'box-key': 'box-key.jpg'
};

function updateImage() {
    const key = `${firstBox.value}-${secondBox.value}`;
    imageContainer.style.backgroundImage = `url(${images[key]})`;
}

firstBox.addEventListener('change', updateImage);
secondBox.addEventListener('change', updateImage);

updateImage();
