const cuenta = document.getElementById("amount");
const personas = document.getElementById("people");
const propina = document.getElementById("propina");
const $form = document.getElementsByTagName('form')[0];

const calcularTotalPorPersona = (event) => {
    event.preventDefault();

    const totalCuenta = Number(cuenta.value)
    const porcentajPropina = Number(propina.value) / 100;
    const cantidadPersonas = Number(personas.value);

    const porcentajeTotal = porcentajPropina * totalCuenta;
    const aPagarTotal = totalCuenta + porcentajeTotal;
    const valorPorPersonas = aPagarTotal / cantidadPersonas;
    const $$fieldset = document.getElementsByTagName('fieldset')[0];
    $$fieldset.innerHTML = `<div>
                <h2>Total a Pagar: ${aPagarTotal}€</h2>
                <h3>Propina: ${porcentajeTotal}€</h3>
                <h4>Por persona: ${valorPorPersonas}€</h4>
            </div>
            <button class="reset">Volver a Calcular</button>`;
    const $$reset = document.getElementsByClassName('reset')[0];
    $$reset.addEventListener('click', event => {
        event.preventDefault();
        location.reload();
    });

}

$form.addEventListener('submit', calcularTotalPorPersona);






