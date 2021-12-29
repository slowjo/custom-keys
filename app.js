const boardsContainer = document.querySelector('.boards-container');
const keyboard = document.querySelector('#board1');
const keyboard2 = document.querySelector('#board2');
const keyboard3 = document.querySelector('#board3');

const inputField = document.querySelector('.input-field');

const output = document.querySelector('.output');
const outputField = document.querySelector('.output-field');

let textInput = '';

let shift = true;

boardsContainer.addEventListener('click', (e) => {
    handleClick(e);
})

function handleClick (e) {
    console.log(e.target.id);
    if (e.target.classList.value.includes('key')) {
        e.target.classList.add('touched');
            setTimeout(() => {
                e.target.classList.remove('touched');
            }, 150);
        if (e.target.id === 'shift' || e.target.id === 'shift-2') {
            shift = !shift;
            if (shift) {
                keyboard2.classList.add('no-show');
                keyboard.classList.remove('no-show');
            } else {
                keyboard2.classList.remove('no-show');
                keyboard.classList.add('no-show');
            }
        } else if (e.target.id === '?123' || e.target.id === '?123-2') {
            if (shift) {
                keyboard.classList.add('no-show');
            } else {
                keyboard2.classList.add('no-show');
            }
            keyboard3.classList.remove('no-show');
        } else if (e.target.id === 'ABC') {
            keyboard3.classList.add('no-show');
            if (shift) {
                keyboard.classList.remove('no-show');
            } else {
                keyboard2.classList.remove('no-show');
            }
        } else if (e.target.id === 'space' || e.target.id === 'space-2' || e.target.id === 'space-3') {
            textInput += ' ';
            inputField.textContent = textInput;
        } else if (e.target.id === 'backs' || e.target.id === 'backs-2' || e.target.id === 'backs-3') {
            textInput = textInput.slice(0, textInput.length - 1);
            inputField.textContent = textInput;
        } else if (e.target.id === 'enter' || e.target.id === 'enter-2' || e.target.id === 'enter-3') {
            output.classList.add('show');
            outputField.textContent = textInput; 
            textInput = '';
            inputField.textContent = textInput;
        } else {
            textInput += e.target.id;
            inputField.textContent = textInput; 
        }
    }
}