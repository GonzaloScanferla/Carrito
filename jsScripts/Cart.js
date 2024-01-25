class Cart {
  #currency;
  #products;
  #cart;
  constructor(data) {
    this.#currency = data.currency;
    this.#products = data.products;
    this.#cart = [];
  }
  init() {
    this.#products.forEach((product) => {
      const { SKU, title, price } = product;
      this.#cart.push({
        SKU: SKU,
        title: title,
        price: price,
        qty: 0,
        total: 0,
      });
    });
  }
  returnCart() {
    return this.#cart;
  }

  returnCartProduct(SKU) {
    return this.#cart.find((product) => product.SKU == SKU);
  }

  update(SKU, operation) {
    const currentProduct = this.returnCartProduct(SKU);
    if (operation === "add") {
      currentProduct.qty = currentProduct.qty + 1;
    } else if (operation === "remove") {
      currentProduct.qty = currentProduct.qty > 0 ? currentProduct.qty - 1 : 0;
    }
    currentProduct.total = (currentProduct.qty * currentProduct.price).toFixed(
      2
    );
    return currentProduct.qty;
  }

  totalCart() {
    let totalCart = 0;
    this.#cart.forEach((product) => {
      totalCart = (Number(totalCart) + Number(product.total)).toFixed(2);
    });
    return totalCart;
  }
}
