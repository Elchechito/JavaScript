let btn = document.getElementById("btnCalcular")

btn.addEventListener('click', function calcular(e){

        e.preventDefault()

      //entradas
      let angulos = parseFloat(document.getElementById("angulos").value)
      let ing = parseInt(document.getElementById("ing").value)
      let sal = parseInt(document.getElementById("sal").value)

      console.log(angulos)
      console.log(ing)
      console.log(sal)



      var res = 0;
  
      switch(ing){
          case 1:
              
            switch(sal){

                case 1:

                    alert("Su conversión es: "+angulos);

                break;

                case 2:

                    res = 1.8 * (angulos - 273 ) + 32;

                    alert("Su conversión es: "+res);

                break;

                case 3:

                    res = angulos - 273;

                    alert("Su conversión es: "+res);

                break;

            }
  
              break;
      
          case 2:
            
            switch(sal){

                case 1:

                res = (angulos - 32) *(5/9) + 273;
                alert("Su conversión es: "+res);

            break;

            case 2:

                alert("Su conversión es: "+angulos);

            break;

            case 3:

                res = (angulos - 32 ) *(5/9);

                alert("Su conversión es: "+res);

            break;
                
            }

          break;
  
          case 3:
            switch(sal){

                case 1:

                res = (angulos + 273.15);
                alert("Su conversión es: "+res);

            break;

            case 2:

                res = (angulos * (9/5)) + 32;
                alert("Su conversión es: "+res);

            break;

            case 3:

                alert("Su conversión es: "+angulos);

            break;
                
            }
          break;
  
      }
    }

)
