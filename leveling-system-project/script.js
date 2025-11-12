const exercises = document.querySelectorAll('.exercise');

const popup = document.getElementById('popup');
const title = document.getElementById('popup-title');
const desc = document.getElementById('popup-desc');
const closeBtn = document.querySelector('#close-btn');

exercises.forEach(ex => {
    ex.addEventListener('click', () => {
        const dataDiv = ex.querySelector('div[data-name][data-desc]');
        if (!dataDiv) return;
        
        title.textContent = dataDiv.dataset.name;
        desc.textContent = dataDiv.dataset.desc;
        popup.classList.add('show');
    });
});

closeBtn.addEventListener('click', () => {
    popup.classList.remove('show');
});

popup.addEventListener('click', e => {
    if (e.target === popup) {
        popup.classList.remove('show');
    }
})