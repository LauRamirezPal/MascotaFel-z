// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }else{
            RegistrarMascota();
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

function RegistrarMascota(){
    let nombre = document.querySelector("#txtNombre").value;
    let foto = document.querySelector("#txtFoto").value;
    let estado = document.querySelector("#txtEstado").value;
    let especie = document.querySelector("#txtEspecie").value;
    let comentario = document.querySelector("#txtComentario").value;

    let url = `http://localhost:3000/mascotas`;
    let datos = {
        nombre: nombre,
        foto: foto,
        estado: estado,
        especie: especie,
        comentario: comentario
    };

    fetch(url,{
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type':'application/json'
        }
    }).then(res => res.json())
    .then(mensaje => {
        console.log(mensaje)
    })
}