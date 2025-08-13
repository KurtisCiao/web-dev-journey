const button = document.getElementById("myButton");
const message = document.getElementById("message");

function handleClick() {
    console.log('Button was clicked!')
    message.classList.remove('show')
    setTimeout(() => {
        message.textContent = 'You clicked the button';
        message.classList.add('show');
    }, 50);
}

button.addEventListener('click', handleClick);