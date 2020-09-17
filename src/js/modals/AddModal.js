import Modal from './Modal';

export default class AddModal extends Modal {
  // eslint-disable-next-line  no-useless-constructor
  constructor() {
    super();
  }

  init() {
    super.init();
    this.form = document.querySelector('.add-form-modal');
  }

  bindToDom() {
    document.body.insertAdjacentHTML('beforeend', this.createMarkup());
  }

  // eslint-disable-next-line class-methods-use-this
  createMarkup() {
    return `
      <form class="modal add-form-modal hidden" novalidate>
        <div class="form-title">Добавление товара</div>
        
        <div class="row name-row">
          <label for="good-name-field">Название</label>
          <input type="text" class="good-name" id="good-name-field" name="good-name">          
        </div> 

        <div class="row cost-row">
          <label for="good-cost-field">Стоимость</label>
          <input type="text" class="good-cost" id="good-cost-field" name="good-name">          
        </div>        

        <div class="row btns-row">
          <button type="button" class="btn add-save-btn">Сохранить</button>
          <button type="button" class="btn add-reset-btn">Отмена</button>
        </div>       
      </form>
    `;
  }
}
