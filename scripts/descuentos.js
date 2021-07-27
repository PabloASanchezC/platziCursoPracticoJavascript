// (precio * (100 - descuento))/100
// const precio = 100; 
// const descuento = 15;
// const precioDescuento = (precio * (100 - descuento))/100;

function descuento(precio, rebaja) {
    return (precio * (100 - rebaja))/100;
}

function descuentoAplicado() {
    const InputPrice = document.getElementById("InputPrice");
    const PriceValue = Number(InputPrice.value);
    const InputDiscount = document.getElementById("InputDiscount");
    const DiscountValue = Number(InputDiscount.value);
    const precioDescuento = descuento(PriceValue, DiscountValue);
    const PriceP = document.getElementById("PriceP");
    PriceP.innerText = "El precio con descuento es $" + precioDescuento;
}