// Clase encargada de la creación de bloques input con botones add y remove
class SpinButtons {
    #cart
    constructor (cart) {
        this.#cart = cart.returnCart()

    }
    // Metodo para la creación del bloque
    newButton (wrap , SKU) {
        wrap.innerHTML =`<button class="btn btn-transparent" data-btn="remove">-</button><input type="number" min="1" max="9" step="1" disabled><button class="btn btn-transparent" data-btn="add">+</button>`
    }
    // Metodo para creación del listener
    newButtonListener (wrap, cart,productTotal) {
        wrap.addEventListener ("click", (e) => {
        const buttonInput = {operation: e.target.dataset.btn, SKU: e.currentTarget.dataset.sku, cart : cart, wrap: wrap}
        this.buttonClickHandler(buttonInput);
        productTotal.innerText = `${cart.returnCartProduct(buttonInput.SKU).total} ${cart.returnCurrency()}`
        totalCart(cart)
        })
    }
    // actualizador de la cantidad representada en el input
    buttonClickHandler ({operation, SKU, cart, wrap}) {
        cart.update (SKU, operation)
        const input = wrap.querySelector ("input")
        input.valueAsNumber  = cart.returnCartProduct(SKU).qty
    }
}