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

    const jsSpinWraps = DOMproductList.querySelectorAll (`.js-spin_wrap`)
    const spinButtons = new SpinButtons (cart)
    jsSpinWraps.forEach (wrap => {
        const SKU = wrap.dataset.sku
        const newButton = spinButtons.newButton (wrap, SKU)
        spinButtons.newButtonListener (wrap,cart)
        
    }) 
}

const totalCart = (cart) => {
    cart.returnCart.filter (total)
}


document.addEventListener("DOMContentLoaded", () => {
    
    fetch ("https://jsonblob.com/api/jsonBlob/1200023630225727488")
    .then (response => response.json())
    .then (data => {
        ProductList (data)

    })
    .catch (error => console.log(error))
})