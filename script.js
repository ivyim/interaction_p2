const firstBox = document.getElementById('first-box');
const secondBox = document.getElementById('second-box');
const submitBtn = document.getElementById('submit-btn');
const emojiContainer = document.getElementById('emoji-container');

const emojis = {
    'house-room': '🚪',
    'house-box': '📦',
    'house-key': '🗝️',
    'room-room': '🚪',
    'room-box': '📦',
    'room-key': '🗝️',
    'box-room': '🚪',
    'box-box': '🎁',
    'box-key': '🗝️'
};

submitBtn.addEventListener('click', () => {
    const key = `${firstBox.value}-${secondBox.value}`;
    emojiContainer.textContent = emojis[key] || '';
});