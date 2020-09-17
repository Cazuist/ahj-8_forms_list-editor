export default class Modal {
  constructor() {
    this.init();
  }

  init() {
    this.bindToDom();
  }

  show() {
    this.form.classList.remove('hidden');
  }

  hide() {
    this.form.classList.add('hidden');
    this.form.reset();
  }

  setPosition(target) {
    const targetRect = target.getBoundingClientRect();

    const targetTop = targetRect.y;
    const targetLeft = targetRect.x;
    const modWidth = this.form.offsetWidth;

    this.form.style.top = `${targetTop + window.pageYOffset - 20}px`;
    this.form.style.left = `${targetLeft + window.pageXOffset - (modWidth - targetRect.width) / 2}px`;
  }
}
