// Función encargada del pintado de la tabla principal del carro
const ProductList = (data) => {
    const DOMproductList = document.querySelector("#DOMproductsList")
    let productsList = "" 
    cart = new Cart (data)
    cart.init()
    const currency = cart.returnCurrency ()
    cart.returnCart().forEach (product => {
        const {SKU , title, price} = product
        productsList = productsList + `<tr><td><p class="productList-name"></p>${title}<p class="productList-sku">${SKU}</p></td><td class="product_qty js-spin_wrap" data-sku=${SKU}></td><td><p class="js-product_price">${price} ${currency}</p></td><td><p class="js-product_total" data-sku=${SKU}></p></td></tr>`;
    })
    DOMproductList.innerHTML = productsList

    // Bloque para el input de la cantidad
    const jsSpinWraps = DOMproductList.querySelectorAll (`.js-spin_wrap`)
    const spinButtons = new SpinButtons (cart)
    jsSpinWraps.forEach (wrap => {
        const SKU = wrap.dataset.sku
        spinButtons.newButton (wrap, SKU)
        const productTotal = document.querySelector(`.js-product_total[data-sku='${wrap.dataset.sku}']`)
        spinButtons.newButtonListener (wrap,cart,productTotal)
        
    }) 
}

// Función encargada del pintado del resumen del carrito
const totalCart = (cart) => {
    currentCart = cart.returnCart().filter (product => product.qty > 0)
    DOMcurrentCart = document.querySelector (".js-cart-list")
    let text =""
    currentCart.forEach (product => {
        text = text + `<tr> <td>${product.title}</td><td>${product.total} ${cart.returnCurrency()}</td></tr>`
        })
    DOMcurrentCart.innerHTML = text
    const totalCart = document.createElement ("tr")
    totalCart.classList = "cart-total"
    totalCart.innerHTML = `<td class="">TOTAL</td><td>${cart.totalCart()} ${cart.returnCurrency()}</td>`
    DOMcurrentCart.append (totalCart)
}


document.addEventListener("DOMContentLoaded", () => {
    
    fetch ("https://jsonblob.com/api/jsonBlob/1200023630225727488")
    .then (response => response.json())
    .then (data => {
        ProductList (data)

    })
    .catch (error => console.log(error))
})