      const btn = document.getElementById('op1');
        function clicked(){
          
            let btn = document.getElementById("btnCalcular")

            btn.addEventListener('click', function calcular(e){

                e.preventDefault()

                let altura = document.getElementById("altura").value
                let base = parseInt(document.getElementById("base").value)

                  let res = (altura*base) / 2

                  alert("Resultado: " + res);

            }

            )      

          console.log("CLICKED");
        }

        const btn2 = document.getElementById('op11');
        function clicked1(){
          
            let btn2 = document.getElementById("btnCalcular1")

            btn2.addEventListener('click', function calcular1(e){

                e.preventDefault()

                lado1 = parseFloat(document.getElementById("lado1").value)
                lado2 = parseFloat(document.getElementById("lado2").value)
                lado3 = parseFloat(document.getElementById("lado3").value)

                  let res1 = lado1 + lado2 + lado3

                  alert("Resultado: " + res1);

            }

            )      

          console.log("CLICKED");
        }

        const btn33 = document.getElementById('op22');
        function clicked22(){
          
            let btn33 = document.getElementById("btnCalcular33")

            btn33.addEventListener('click', function calcular22(e){

                e.preventDefault()

                radio = parseFloat(document.getElementById("radio").value)

                  let res2 = 2

                  alert("Resultado: " + res2);

            }

            )      

          console.log("CLICKED");
        }


