document.addEventListener('DOMContentLoaded', () => {
    const pianoKeys = document.querySelectorAll('.key');

    pianoKeys.forEach(key => {
        key.addEventListener('click', () => playSound(key.dataset.note));
    });

    function playSound(note) {
        const audio = new Audio(`/static/notes/${note}.mp3`);
        audio.play();
    }
});
