const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  const value = button.dataset.value;

  if (value !== undefined) {
    button.addEventListener('click', () => {
      display.value += value;
    });
  }

  if (button.classList.contains('clear')) {
    button.addEventListener('click', () => {
      display.value = '';
    });
  }

  if (button.classList.contains('equal')) {
    button.addEventListener('click', () => {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    });
  }
});