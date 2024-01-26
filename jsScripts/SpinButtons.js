class SpinButtons {
    #cart
    constructor (cart) {
        this.#cart = cart.returnCart()

    }
    newButton (wrap , SKU) {
        wrap.innerHTML =`<button class="btn btn-transparent" data-btn="remove">-</button><input type="number" min="1" max="9" step="1" disabled><button class="btn btn-transparent" data-btn="add">+</button>`
    }

    newButtonListener (wrap, cart) {
        wrap.addEventListener ("click", (e) => {
        const buttonInput = {operation: e.target.dataset.btn, SKU: e.currentTarget.dataset.sku, cart : cart, wrap: wrap}
        this.buttonClickHandler(buttonInput);
        const productTotal = document.querySelector(`.js-product_total[data-sku='${buttonInput.SKU}']`)
        productTotal.innerText = `${cart.returnCartProduct(buttonInput.SKU).total} ${cart.returnCurrency()}`
        totalCart()
        })
    }

    buttonClickHandler ({operation, SKU, cart, wrap}) {
        cart.update (SKU, operation)
        const input = wrap.querySelector ("input")
        input.valueAsNumber  = cart.returnCartProduct(SKU).qty
    }
}