import Modal from './Modal';

export default class DeleteModal extends Modal {
  // eslint-disable-next-line  no-useless-constructor
  constructor() {
    super();
  }

  init() {
    super.init();
    this.form = document.querySelector('.delete-form-modal');
  }

  bindToDom() {
    document.body.insertAdjacentHTML('beforeend', this.createMarkup());
  }

  // eslint-disable-next-line class-methods-use-this
  createMarkup() {
    return `
      <form class="modal delete-form-modal hidden" novalidate>
        <div class="form-title">Удаление товара</div> 

        <p>Удалить товар из списка?</p>       

        <div class="row btns-row">
          <button type="button" class="btn delete-save-btn">Удалить</button>
          <button type="button" class="btn delete-reset-btn">Отмена</button>
        </div>       
      </form>
    `;
  }
}
