export default class Product {
  constructor(form) {
    this.name = form.querySelector('.good-name').value;
    this.cost = form.querySelector('.good-cost').value;
    this.html = this.createMarkup();
  }

  createMarkup() {
    return `
      <tr class="goods-row">
        <td>${this.name}</td>
        <td>${this.cost}</td>
        <td class="motion-cell">
          <span class="goods-icon icon-edit" title="Редактировать товар"></span>
          <span class="goods-icon icon-remove" title="Удалить товар"></span>
        </td>
      </tr>
    `;
  }
}
