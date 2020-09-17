function setPosition(box, target) {
  const targetRect = target.getBoundingClientRect();

  const targetTop = targetRect.y;
  const targetLeft = targetRect.x;
  const boxHeight = box.offsetHeight;

  // eslint-disable-next-line no-param-reassign
  box.style.top = `${targetTop + window.pageYOffset + (targetRect.height - boxHeight) / 2}px`;

  // eslint-disable-next-line no-param-reassign
  box.style.left = `${targetLeft + window.pageXOffset + targetRect.width + 10}px`;
}

function makeErrorBox(input, message) {
  const errorBox = document.createElement('DIV');
  errorBox.classList.add('error-box');
  errorBox.innerText = message;
  document.body.append(errorBox);

  setPosition(errorBox, input);
}

export default function validator(form) {
  const nameInput = form.querySelector('.good-name');
  const costInput = form.querySelector('.good-cost');
  const name = nameInput.value;
  const cost = costInput.value;

  if (!name.trim()) {
    const message = 'Поле \'Название\' должно быть заполнено!';

    nameInput.focus();
    makeErrorBox(nameInput, message);

    return false;
  }

  if (!cost.trim()) {
    const message = 'Поле \'Стоимость\' должно быть заполнено!';

    costInput.focus();
    makeErrorBox(costInput, message);

    return false;
  }

  if (!cost.match(/^-?\d+$/)) {
    const message = 'Поле \'Стоимость\' должно содержать только цифры!';

    costInput.focus();
    makeErrorBox(costInput, message);

    return false;
  }

  if (parseInt(cost, 10) < 0) {
    const message = 'Стоимость не должна быть отрицательной';

    costInput.focus();
    makeErrorBox(costInput, message);

    return false;
  }

  return true;
}
