const precioOriginal = 100;
const descuento = 15;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    
    return precioConDescuento;
};

function onCLickButtonPriceDiscount() {
    var inputPrice = document.getElementById("InputPrice");
    var priceValue = inputPrice.value;

    var inputDiscount = document.getElementById("InputDiscount");
    var discountValue = inputDiscount.value;

    var precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    var resultPrice = document.getElementById("resultPrice");
    resultPrice.innerHTML = "El precio con descuento son $" + precioConDescuento;
}