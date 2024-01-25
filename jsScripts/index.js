class Products {
    #SKU;
    #title;
    #price;
    constructor({SKU, title, price}) {
      this.#SKU = SKU;
      this.#title = title;
      this.#price = price;
    }
    
    returnInfo() {
      return {
        SKU: `${this.#SKU}`,
        title: `${this.#title}`,
        price: `${this.#price}`,
      };
    }
} 

buttonClickHandler = (SKU, operation, target) => {
    const input = target.querySelector("input");
    // actualizo el carrito y el valor del input
    const currentQty = cart.update(SKU, operation);
    input.value = currentQty;
}



const ProductList = (data) => {
    const DOMproductList = document.querySelector("#DOMproductsList")
    let productsList = "" 
    data.products.forEach (product => {
        product = new Products (product)
        SKU = product.returnInfo().SKU
        title = product.returnInfo().title
        price = product.returnInfo().price
        productsList = productsList + `<tr><td><p class="productList-name"></p>${title}<p class="productList-sku">${SKU}</p></td><td class="product_qty js-product_qty" data-SKU="${SKU}"><button class="btn btn-transparent" data-btn="remove">-</button><input type="number" min="1" max="9" step="1" disabled><button class="btn btn-transparent" data-btn="add">+</button></td><td><p class="js-product_price">${price}</p></td><td><p class="js-product_total"></p></td></tr>`;
    })
    DOMproductList.innerHTML = productsList

    const buttons = document.querySelectorAll (".js-product_qty")
    console.log (buttons)
    buttons.forEach (button => {
        button.addEventListener ("click", (e) => {
        const operation = e.target.dataset.btn;
        this.buttonClickHandler(productInfo.SKU, operation, e.currentTarget);
        })
    })
}








document.addEventListener("DOMContentLoaded", () => {
    
    fetch ("https://jsonblob.com/api/jsonBlob/%7Bblob_id%7D/1200017574896459776")
    .then (response => response.json())
    .then ((data) => {
        ProductList (data)
        
        // Instancio el carrito
        //   const cart = new Cart(productInstances);
        //   cart.init();
        
        //   initializeTable (productInstances)
    })
})