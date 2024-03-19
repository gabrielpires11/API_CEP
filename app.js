const cep = document.querySelector('#cep');
const addres = document.querySelector('#address');
const bairro = document.querySelector('#bairro');
const cidade = document.querySelector('#cidade');
const message = document.querySelector('#message');

cep.addEventListener('focusout', async () => {

    try {

        const onlyNumber = /^[0-9]+$/;
        const cepValid = /^[0-9]{8}$/;

        if (!onlyNumbers.test(cep.value) || !cepValid.test(cep.value)) {
            throw { cep_error: 'Cep invalid' };
        }

        const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)

        if (!response.ok) {
            throw await response.json();
        }

        const responseCep = await response.json();
         addres.value = responseCep.logradouro;
         bairro.value = responseCep.bairro;
         cidade.value = responseCep.localidade;
    } catch (error) {
        if (error?.cep_error) {
            message.textContent = error.cep_error
            setImmediate(() => {
                message.textContent = ''
            }, 5000);
        }
        console.log(error);
    }


})
