// total del valor de todos los items del carrito de compras



function totalItems() {
    let total = 0;
    let continuar;

    do {
        const NUMERO = parseFloat(prompt("Obras de arte digital disponibles: \n- Chanchitos by MM $250, \n- Flamengos by MM $175, \n- Patitos de goma by MM $120 \n\nIngrese el valor ($) del item agregado al carro de compras."));

        if (!isNaN(NUMERO)) {
            total += NUMERO;
            continuar = prompt("¿Quiere agregar otro item al carro de compras? (si o no)").toLowerCase();
        
        }else {
            alert("Ingrese un número válido.");
            continuar = "si"; 
        }
    } while (continuar === "si");

    if (continuar !== "si" && continuar !== "no") {
        // alert("Advertencia: Ingrese solamente 'si' o 'no'.");
        return null; 
    }

    const IMPUESTO = total * 0.01; // 1% de impuesto para el marketplace
    const COMISION = total * 0.02;     // 2% de comision para el artist

    console.log("el subtotal de la compra es " + total);
    console.log("Los impuestos del marketplace son " + IMPUESTO);
    console.log("La comision para el artista es de " + COMISION)

    return (total + IMPUESTO + COMISION).toFixed(2);
}


const TOTALMASIMPUESTOS = totalItems();

if (OTALMASIMPUESTOS !== null && !isNaN(TOTALMASIMPUESTOS)){
    alert("¡Felicitaciones! El total de su compra (más impuestos) es: " + TOTALMASIMPUESTOS + "$.");
    console.log("El total de su compra es: " + TOTALMASIMPUESTOS);
} else {
    alert("Advertencia: Ingrese solamente 'si' o 'no'. Presione F5 para volver a empezar.");
}