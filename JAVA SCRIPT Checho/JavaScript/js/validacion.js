//1. Acceder al formulario
let form=document.getElementById("frmvalidacion")
let fe1=document.querySelector("#camponmDoc .feedback")
let fe2=document.querySelector("#campoNombre .feedback")
let fe3=document.querySelector("#campoApellido .feedback")
let fe4=document.querySelector("#campoCelular .feedback")
let fe5=document.querySelector("#campoCorreo .feedback")


//2. Establecer las reglas de validacion
const $number=/^[0-9]{1,15}/
const $textos=/^[A-Za-zñÑaA]{10,50}/

//3. Validacion antes de enviar el formulario

//campo de documento
form.noDoc.addEventListener ('input',(e)=>{
    e.preventDefault();
    //console.log(e.target.value)
    if($number.test(e.target.value)){
        form.noDoc.setAttribute("class","success")
        fe1.style.setProperty("visibility","hidden")
        fe1.style.setProperty("opacity","0")
    }
    else{
        form.noDoc.setAttribute("class","error")
        fe1.textContent="Solo puede digitar valores numericos y la longitud debe ser de minimo de 1"
        fe1.style.setProperty("visibility","visible")
        fe1.style.setProperty("opacity","1")
    }    
})

// campo de nombre

form.nombre.addEventListener ('input',(i)=>{
    i.preventDefault();
    //console.log(e.target.value)
    if($textos.test(i.target.value)){
        form.nombre.setAttribute("class","success")
        fe2.style.setProperty("visibility","hidden")
        fe2.style.setProperty("opacity","0")
    }
    else{
        form.nombre.setAttribute("class","error")
        fe2.textContent="Solo puede digitar valores Alfabeticos y la longitud debe ser de mas de 10"
        fe2.style.setProperty("visibility","visible")
        fe2.style.setProperty("opacity","1")
    }    
})

//campo Apellido
form.apellido.addEventListener ('input',(i)=>{
    i.preventDefault();
    //console.log(e.target.value)
    if($textos.test(i.target.value)){
        form.apellido.setAttribute("class","success")
        fe3.style.setProperty("visibility","hidden")
        fe3.style.setProperty("opacity","0")
    }
    else{
        form.apellido.setAttribute("class","error")
        fe3.textContent="Solo puede digitar valores Alfabeticos y la longitud debe ser de mas de 10"
        fe3.style.setProperty("visibility","visible")
        fe3.style.setProperty("opacity","1")
    }    
})

//campo celular

form.celular.addEventListener ('input',(e)=>{
    e.preventDefault();
    //console.log(e.target.value)
    if($number.test(e.target.value)){
        form.celular.setAttribute("class","success")
        fe4.style.setProperty("visibility","hidden")
        fe4.style.setProperty("opacity","0")
    }
    else{
        form.celular.setAttribute("class","error")
        fe4.textContent="Solo puede digitar valores numericos y la longitud debe ser de minimo de 1"
        fe4.style.setProperty("visibility","visible")
        fe4.style.setProperty("opacity","1")
    }    
})

//campo correo

form.email.addEventListener ('input',(i)=>{
    i.preventDefault();
    //console.log(e.target.value)
    if($textos.test(i.target.value)){
        form.email.setAttribute("class","success")
        fe5.style.setProperty("visibility","hidden")
        fe5.style.setProperty("opacity","0")
    }
    else{
        form.email.setAttribute("class","error")
        fe5.textContent="Solo puede digitar valores Alfabeticos y la longitud debe ser de mas de 10"
        fe5.style.setProperty("visibility","visible")
        fe5.style.setProperty("opacity","1")
    }    
})

 //.4 Validacion de campos vacios

 form.addEventListener("submit",(e)=>{
    e.preventDefault()//detener propagacion
    
    const noDoc=form.noDoc.value;
    const nombre=form.nombre.value;
    const apellido=form.apellido.value;
    const celular=form.celular.value;
    const email=form.noDoc.value;

    if(noDoc==null || noDoc==0){
        alert("Debe ingresar un numero de documento")
        form.noDoc.focus()
        form.noDoc.setAttribute("class","error")
    }

    else if(nombre==null || nombre==0){
        alert("Debe ingresar un nombre")
        form.nombre.focus()
        form.nombre.setAttribute("class","error")
    }
    else if(apellido==null || apellido==0){
        alert("Debe ingresar un apellido")
        form.nombre.focus()
        form.nombre.setAttribute("class","error")
    }
    else if(celular==null || celular==0){
        alert("Debe ingresar un numero de celular")
        form.nombre.focus()
        form.nombre.setAttribute("class","error")
    }
    else if(email==null || email==0){
        alert("Debe ingresar un email")
        form.nombre.focus()
        form.nombre.setAttribute("class","error")
    }

    else{
        form.submit() //reanudar el envio del formulario
        alert("datos enviados")
    }
}
)