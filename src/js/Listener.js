import Product from './Product';
import validator from './validator';

export default class Listeners {
  static onClick(event) {
    const { target } = event;
    const classes = target.classList;

    if (classes.contains('widget-add')) {
      this.modals.add.show();
      this.modals.add.setPosition(this.widget);
      return;
    }

    if (classes.contains('add-reset-btn')
        || classes.contains('edit-reset-btn')
        || classes.contains('delete-reset-btn')) {
      this.modals.add.hide();
      this.modals.edit.hide();
      this.modals.delete.hide();

      if (document.querySelector('.error-box')) {
        document.querySelector('.error-box').remove();
      }

      return;
    }

    if (classes.contains('add-save-btn')) {
      const addForm = this.modals.add.form;
      const isValid = validator(addForm);

      if (isValid) {
        const product = new Product(addForm);
        this.products.push(product);
        this.redrawGoods();
        this.modals.add.hide();
        return;
      }
      return;
    }

    if (classes.contains('icon-remove')) {
      this.modals.delete.show();
      this.modals.delete.setPosition(this.widget);

      const good = event.target.closest('.goods-row');
      const children = [...this.goodsList.children];

      this.deletedIndex = children.findIndex((item) => item === good);
      return;
    }

    if (classes.contains('delete-save-btn')) {
      this.products.splice(this.deletedIndex, 1);
      this.redrawGoods();
      this.modals.delete.hide();
    }

    if (classes.contains('icon-edit')) {
      const name = event.target.closest('.goods-row').children[0].innerText;
      const cost = event.target.closest('.goods-row').children[1].innerText;

      this.modals.edit.form.querySelector('.good-name').value = name;
      this.modals.edit.form.querySelector('.good-cost').value = cost;
      this.modals.edit.show();
      this.modals.edit.setPosition(this.widget);

      const good = event.target.closest('.goods-row');
      const index = [...this.goodsList.children].findIndex((item) => item === good);
      this.underEdit = this.products[index];
    }

    if (classes.contains('edit-save-btn')) {
      const editForm = this.modals.edit.form;
      const isValid = validator(editForm);

      if (isValid) {
        const prod = this.underEdit;
        const name = editForm.querySelector('.good-name').value;
        const cost = editForm.querySelector('.good-cost').value;

        prod.name = name;
        prod.cost = cost;
        prod.html = prod.createMarkup();

        this.redrawGoods();
        this.modals.edit.hide();

        this.underEdit = [];
      }
    }
  }

  static onResize() {
    const names = Object.keys(this.modals);
    const filtered = names.filter((name) => !this.modals[name].form.classList.contains('hidden'));

    if (filtered.length) {
      filtered.forEach((name) => this.modals[name].setPosition(this.widget));
    }
  }

  static onChange() {
    if (document.querySelector('.error-box')) {
      document.querySelector('.error-box').remove();
    }
  }
}
