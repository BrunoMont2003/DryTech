const formulario = document.getElementById('demo-form');
const inputs = document.querySelectorAll('#demo-form input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	company: /^[a-zA-ZÀ-ÿ0-9\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	job: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{9,9}$/ // 9 numeros.
}

const campos = {
	nombre: false,
	apellido: false,
	company: false,
	job: false,
	correo: false,
	telefono: false
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)) {
        document.querySelector(`#grupo-${campo} .invalid-feedback`).classList.remove('show')
        document.getElementById(`grupo-${campo}`).classList.remove('invalid')
		
        campos[campo] = true;
    }else{
        document.querySelector(`#grupo-${campo} .invalid-feedback`).classList.add('show')
        document.getElementById(`grupo-${campo}`).classList.add('invalid')
		
        campos[campo] = false;    

    }
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "company":
			validarCampo(expresiones.company, e.target, 'company');
		break;
		case "job":
			validarCampo(expresiones.job, e.target, 'job');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (campos.correo && campos.nombre && campos.apellido && campos.company && campos.job && campos.telefono){
		document.getElementById('message-container').classList.add('show');
		document.getElementById('message-container').classList.add('message-container-valid');
		document.getElementById('message-container').classList.remove('message-container-invalid');
		document.getElementById('message-container').innerHTML ="<span>Demo Request sent succesfully!</span>"
		formulario.reset();
		for (camp in campos){
			campos[camp] = false
		}
		setTimeout(() => {
			document.getElementById('message-container').classList.remove('show');
		}, 5000);
    }else{
        document.getElementById('message-container').classList.add('show')
		document.getElementById('message-container').classList.add('message-container-invalid');
		document.getElementById('message-container').classList.remove('message-container-valid');
		document.getElementById('message-container').innerHTML ="<span>Error! Fill correctly the fields</span>"
    }
});