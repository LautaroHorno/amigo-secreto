// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//nombres de los amigos ingresados. 
let amigos = []

function agregarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let amigoNombre = amigoInput.value.trim();

    if (amigoNombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(amigoNombre);
    amigoInput.value = '';
}


