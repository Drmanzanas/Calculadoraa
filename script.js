const cuenta = document.getElementById("amount");
const personas = document.getElementById("people");
const propina = document.getElementById("propina");
const $form = document.getElementsByTagName('form')[0];

const calcularTotalPorPersona = (event) => {
    event.preventDefault();
    const totalCuenta = Number(cuenta.value)
    const porcentajPropina = Number(propina.value) / 100;
    const porcentajeTotal = porcentajPropina * totalCuenta;
    const aPagarTotal = totalCuenta + porcentajeTotal;
    const cantidadPersonas = Number(personas.value);
    const valorPorPersonas = aPagarTotal / cantidadPersonas;
    
    console.log(aPagarTotal, cantidadPersonas, valorPorPersonas);

}

$form.addEventListener('submit', calcularTotalPorPersona)






