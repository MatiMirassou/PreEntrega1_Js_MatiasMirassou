// Suma del valor de todos los items del carrito de compras



function totalItems() {
    let suma = 0;
    let continuar;

    do {
        const NUMERO = parseFloat(prompt("Ingrese el valor ($) del item agregado al carro de compras."));

        if (!isNaN(NUMERO)) {
            suma += NUMERO;
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

    const IMPUESTO = suma * 0.01; // 1% de impuesto para el marketplace
    const COMISION = suma * 0.02;     // 2% de comision para el artist

    console.log("el subtotal de la compra es " + suma);
    console.log("Los impuestos son " + IMPUESTO);
    console.log("La comision es de " + COMISION)

    return (suma + IMPUESTO + COMISION).toFixed(2);
}


const TOTAL = totalItems();

if (TOTAL !== null && !isNaN(TOTAL)){
    alert("¡Felicitaciones! El total de su compra (más impuestos) es: " + TOTAL + "$.");
    console.log("El total de su compra es: " + TOTAL);
} else {
    alert("Advertencia: Ingrese solamente 'si' o 'no'. Presione F5 para volver a empezar.");
}