import Listener from './Listener';
import AddModal from './modals/AddModal';
import EditModal from './modals/EditModal';
import DeleteModal from './modals/DeleteModal';

export default class GoodsWidget {
  constructor(container) {
    this.container = container;
    this.products = [];
    this.underEdit = [];
    this.errors = document.getElementsByClassName('error-box');

    this.init();
  }

  init() {
    this.bindToDom();
    this.registerListener();
    this.initModals();
  }

  // eslint-disable-next-line class-methods-use-this
  createMurkup() {
    return `
    <div class="goods-widget">      
      <div class="widget-ribbon">
        <div class="ribbon-spans">
          <span class="ribbon-span"></span>
          <span class="ribbon-span"></span>
          <span class="ribbon-span"></span>
        </div>
        <div>GoodsManager v.1.0</div>
      </div>

      <header class="widget-header">
        <span class="widget-title">Товары</span>
        <span class="widget-add" title="Добавить товар">+</span>
      </header>

      <table class="goods-table">
        <thead>
          <tr>
            <th>Название</th>
            <th>Стоимость</th>
            <th>Дествия</th>
          </tr>
        </thead>

        <tbody class="goods-list">
        </tbody>

        <tfoot>
          <tr>
            <td>Итого:</td>
            <td>0</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    `;
  }

  bindToDom() {
    this.container.insertAdjacentHTML('beforeend', this.createMurkup());
    this.widget = document.querySelector('.goods-widget');
    this.goodsList = document.querySelector('.goods-list');
  }

  registerListener() {
    this.container.addEventListener('click', (event) => this.onClick(event));
    this.container.addEventListener('change', () => this.onChange());
    window.addEventListener('resize', (event) => this.onResize(event));
  }

  initModals() {
    this.modals = {
      add: new AddModal(),
      edit: new EditModal(),
      delete: new DeleteModal(),
    };
  }

  onClick(event) {
    Listener.onClick.call(this, event);
  }

  onResize(event) {
    Listener.onResize.call(this, event);
  }

  onChange(event) {
    Listener.onChange.call(this, event);
  }

  redrawGoods() {
    this.goodsList.innerHTML = '';

    this.products.forEach((product) => {
      this.goodsList.insertAdjacentHTML('beforeend', product.html);
    });
  }
}
