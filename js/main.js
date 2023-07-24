const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const peso = document.getElementById('ntxt1').value;
    const altura = document.getElementById('ntxt2').value;

    const rimc = (peso / (altura * altura)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('atencao');

    document.getElementById('infos').classList.remove('hidden');

    if (rimc < 18.5) {
        description = 'Cuidado ! Abaixo do peso';
    } else if (rimc >= 18.5 && rimc <= 25) {
        value.classList.remove('atencao');
        value.classList.add('normal');
        description = 'Tudo Certo ! Voce esta em seu peso ideal'
    } else if (rimc > 25 && rimc <= 30) {
        description = 'Cuidado ! Acima do peso '
    } else if (rimc > 30 && rimc <= 35) {
        description = 'Cuidado ! Obesidade Grau I (MODERADA)'
    } else if (rimc > 35 && rimc <= 40) {
        description = 'Cuidado ! Obesidade Grau II (SEVERA)'
    } else {
        description = 'Cuidado ! Obesidade Grau III (MORBIDA)'
    }
    value.textContent = rimc.replace('.', ',');

    document.getElementById('description').textContent = description;

});

// Funcão para resetar campos ! 
const btnLimpar = document.getElementById('reset');
btnLimpar.addEventListener('click', () => {
    document.getElementById('ntxt1').value = '';
    document.getElementById('ntxt2').value = '';
    document.getElementById('value').textContent = '';
    document.getElementById('description').textContent = '';
    document.getElementById('infos').classList.add('hidden');
});

// Mascara para limitador de numeros no input
function limitador(input) {
    if (input.value.length > input.maxLength) {
        input.value = input.value.slice(0, input.maxLength);

    } else {
        input.value = input.value.replace(/[^\d.]/g, '');
    }
};

// Mascara para formatar valores de peso e altura
const inputalt = document.getElementById('ntxt2');
inputalt.addEventListener('keypress', () => {
    let alt = inputalt.value.length
    if (alt === 1) {
        inputalt.value += '.'
    }
});

const inputp = document.getElementById('ntxt1');
inputp.addEventListener('keypress', () => {
    let peso = inputp.value.length
    if (peso === 3) {
        inputp.value += '.';
    }
});