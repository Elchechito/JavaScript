let btn = document.getElementById("btnCalcular")

btn.addEventListener('click', function calcular(e){

        e.preventDefault()

      //entradas
      let palabra = document.getElementById("palabra").value
      let op = parseInt(document.getElementById("op").value)
  
      switch(op){
          case 1:
            alert("Resultado: " + palabra.length + " Letras");
  
              break;
      
          case 2:
            alert("Resultado: " + palabra.toUpperCase());
  
          break;
  
          case 3:
                alert("Resultado: " + palabra.toLowerCase());
          break;
  
          case 4:
            alert("Resultado: " + palabra.charAt(0));
          break;
      }
  
  }   
)
