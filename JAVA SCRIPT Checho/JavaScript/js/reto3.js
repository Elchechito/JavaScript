let btn = document.getElementById("btnCalcular")

btn.addEventListener('click', function calcular(e){

        e.preventDefault()

      //entradas
      let lado1 = parseFloat(document.getElementById("lado1").value)
      let lado2 = parseFloat(document.getElementById("lado2").value)
      let lado3 = parseFloat(document.getElementById("lado3").value)

      console.log(lado1)
      console.log(lado2)
      console.log(lado3)
  
        if (lado1 == lado2 && lado2 == lado3){

                alert("El triangulo es Equilatero")
        }else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
            alert("El triangulo es Isosceles")
        }else{
            alert("El triangulo es Escaleno")
        }
  
  }   
)
