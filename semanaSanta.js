let contenedor = document.getElementsByTagName("body")
let div = ""; let titulo = ""; let instrucciones = ""; let boton = ""

    for (let index = 0; index < 8; index++) {
        div = document.createElement("div")
        div.setAttribute("id", "p"+(index+1)) 
        contenedor[0].appendChild(div)          
    }
    function CreateElements() {
        titulo = document.createElement("h1")
        instrucciones = document.createElement("h2")
        boton = document.createElement("button")
    }

    function primerPunto(){
        let punto1 = document.getElementById("p1")
        CreateElements()

        let tituloTxt = document.createTextNode("Positivo o negativo")
        let instruccionesTxt = document.createTextNode("Ingresa el número")
        let ingresar = document.createElement("input")
        let resultado = document.createElement("p")
        let acepta = document.createTextNode("Aceptar")

        punto1.appendChild(titulo)
        titulo.appendChild(tituloTxt)
        punto1.appendChild(instrucciones)
        instrucciones.appendChild(instruccionesTxt)
        punto1.appendChild(ingresar)
        punto1.appendChild(resultado)
        punto1.appendChild(boton)
        boton.appendChild(acepta)

       boton.addEventListener("click", function numeroNegativo() {
        let numero = ingresar.value

        if (numero < 0){
            resultado.innerHTML = "El numero es negativo"
        }
        else if(numero >= 0){
            resultado.innerHTML = "El numero es positivo"
        }
        else{alert("Ingrese un numero válido")}
       })
    }
    primerPunto()

    function segundoPunto(){
        let punto2 = document.getElementById("p2")
        CreateElements()

        let nombre = ""; let edad = 0; let index = 0; let sumaEdades = 0; let promedio = 0

        let tituloTxt = document.createTextNode("Calculadora de edades")
        let instruccionesNombre = document.createElement("h2")
        let nombreTxt = document.createTextNode("Ingresa el nombre")
        let ingresarNombre = document.createElement("input")
        let instruccionesEdad = document.createElement("h2")
        let ingresarEdad = document.createElement("input")
        let edadTxt = document.createTextNode("Ingresa la edad")
        let acepta = document.createTextNode("Agregar")
        let boton2 = document.createElement("button")
        let calcular = document.createTextNode("Calcular")

        punto2.appendChild(titulo)
        titulo.appendChild(tituloTxt)
        punto2.appendChild(instruccionesNombre)
        instruccionesNombre.appendChild(nombreTxt)
        punto2.appendChild(ingresarNombre)
        punto2.appendChild(instruccionesEdad)
        instruccionesEdad.appendChild(edadTxt)
        punto2.appendChild(ingresarEdad)
        punto2.appendChild(boton)
        boton.appendChild(acepta)
        punto2.appendChild(boton2)
        boton2.appendChild(calcular)

        ingresarNombre.setAttribute("type", "text")
        ingresarEdad.setAttribute("type", "number")

        function getNombre() {
            nombre = ingresarNombre.value
            return nombre 
        }
        function getEdad() {
             edad = ingresarEdad.value
            return edad
        }
        boton.addEventListener("click", function agregar() {
            getNombre()
            getEdad()

            if (nombre=="" || edad=="") {
                alert("Rellene todos los campos")
            }
           else if ( edad > 100 || edad < 1) { 
                alert("Edad incorrecta")
            } 
            else{
                index++
                console.log("Nombre " + nombre + " Edad " + edad)
                sumaEdades = sumaEdades +parseInt(edad)
                promedio = (sumaEdades/index).toFixed(2)
                alert("Registro agregado con éxito")  
            }  
        })
        boton2.addEventListener("click", function mostrar() {
            console.log("promedio: "+sumaEdades+" / " +index)
            console.log(promedio)
            console.log("suma: "+(sumaEdades-edad) + " + " + edad)
            console.log(sumaEdades)
            alert("La suma de edades es: " + sumaEdades +" El promedio de edad es: "+promedio)      
        })
        
    }
    segundoPunto()

    function tercerPunto() {
        let punto3 = document.getElementById("p3")
        CreateElements()

        tituloTxt = document.createTextNode("Cronómetro")
        instruccionesTxt = document.createTextNode("1 Minuto")
        acepta = document.createTextNode("iniciar")
        boton2 = document.createElement("button")
        acepta2 = document.createTextNode("parar")
        reloj = document.createElement("p")

        punto3.appendChild(titulo)
        titulo.appendChild(tituloTxt)
        punto3.appendChild(instrucciones)
        instrucciones.appendChild(instruccionesTxt)
        punto3.appendChild(reloj)
        punto3.appendChild(boton)
        boton.appendChild(acepta)
        punto3.appendChild(boton2)
        boton2.appendChild(acepta2)
        

        let crono = ""
        segundos = 0
        let minutos = 0
        let horas = 0
        decimas = 0
        let aux = "0"
             
             
            if (minutos<10) {minutos = "0"+minutos}
            if (horas<10) {horas = "0"+horas}
            if (segundos<10) {segundos = "0"+segundos}


        
                crono = setInterval(function () { 
                    if (decimas<10) {decimas = "0"+decimas}
                    
               reloj.innerHTML = `${horas}:${minutos}:${segundos}:${decimas}`

                decimas++
                
                if (decimas>=10){
                    decimas = 0
                    segundos++
                }
                else if(segundos>=59){
                    segundos = 0
                    minutos++
                }
                else if(minutos==1){
                    clearInterval(crono)
                }
                else if(minutos >=60){
                    minutos = 0
                    horas++
                }
        },100)
        
      boton2.addEventListener("click", function stopTime() {
            clearInterval(crono)
        })

    }
    tercerPunto()

    function cuartoPunto() {
        
        let punto4 = document.getElementById("p4")
        CreateElements()

        let tituloTxt = document.createTextNode("Contador de vocales")
        let instruccionesTxt = document.createTextNode("Ingresa la palabra")
        let ingresar = document.createElement("input")
        let resultado = document.createElement("p")
        let acepta = document.createTextNode("Aceptar")

        punto4.appendChild(titulo)
        titulo.appendChild(tituloTxt)
        punto4.appendChild(instrucciones)
        instrucciones.appendChild(instruccionesTxt)
        punto4.appendChild(ingresar)
        punto4.appendChild(boton)
        boton.appendChild(acepta)
        punto4.appendChild(resultado)

        boton.addEventListener("click", function contarVocales() {
            let palabra = ingresar.value
            let letras = palabra.split("")
            let vocales = 0; let cons = 0; let espacios = 0

        if (palabra!="") {
            
        for (let index = 0; index < letras.length; index++) {
            switch (letras[index]) {
                case "a":
                vocales++
                    break;

                case "e":
                vocales ++
                    break;

                case "i":
                vocales ++
                    break;
                
                case "o":
                vocales ++
                    break;

                case "u":
                vocales ++
                    break;

                case " ":
                espacios ++
                    break;

                default:
                    cons++
                    break;
            }
        }
        resultado.innerHTML = `El numero de vocales es ${vocales} y el numero de consonantes es ${cons}`
    }
    else{
        alert("Inserte una palabra")
    } 
        })
        
    }
    cuartoPunto()

    function puntoCinco() {
        let punto5 = document.getElementById("p5")
        CreateElements()

        let tituloTxt = document.createTextNode("Calculadora de áreas")
        let instruccionesTxt = document.createTextNode("Escoge el area a calcular")
        let listaDesplegable = document.createElement("select")
        let item1 = document.createElement("option")
        let item2 = document.createElement("option")
        let item3 = document.createElement("option")
        let item4 = document.createElement("option")
        let item1Txt = document.createTextNode("Cuadrilatero")
        let item2Txt = document.createTextNode("Triangulo")
        let item3Txt = document.createTextNode("Circulo")
        let resultado = document.createElement("p")

        punto5.appendChild(titulo)
        titulo.appendChild(tituloTxt)
        punto5.appendChild(instrucciones)
        instrucciones.appendChild(instruccionesTxt)
        punto5.appendChild(listaDesplegable)
        listaDesplegable.appendChild(item4)
        listaDesplegable.appendChild(item1)
        listaDesplegable.appendChild(item2)
        listaDesplegable.appendChild(item3)
        item1.appendChild(item1Txt)
        item2.appendChild(item2Txt)
        item3.appendChild(item3Txt)
        
        let ingresarBase = document.createElement("input")
        let ingresarAltura = document.createElement("input")
        let ingresarRadio = document.createElement("input")
        let calcular = document.createElement("button")
        let calcularTxt = document.createTextNode("Calcular")
        
        punto5.appendChild(ingresarBase)
        punto5.appendChild(ingresarAltura)
        punto5.appendChild(ingresarRadio)
        punto5.appendChild(calcular)
        calcular.appendChild(calcularTxt)

        ingresarBase.setAttribute("placeholder","Ingresa base")
        ingresarAltura.setAttribute("placeholder","Ingresa altura")
        ingresarRadio.setAttribute("placeholder","Ingresa radio")

        ingresarRadio.style.display="none"
        ingresarBase.style.display="none" 
        ingresarAltura.style.display="none" 
        
    listaDesplegable.addEventListener("change", function calculo() {
        
        if(item1.selected == true){
            ingresarBase.style.display="block"
            ingresarAltura.style.display="block"

            if (ingresarRadio.style.display!="none") {
                ingresarRadio.style.display="none" 
            }

            calcular.addEventListener("click", function () {

                let areaCuadrado = ingresarBase.value * ingresarAltura.value
                console.log(areaCuadrado)
                resultado.innerHTML = "El área de la figura es: " +areaCuadrado
                punto5.appendChild(resultado)
            })
            
        }
        else if(item2.selected == true){

            ingresarBase.style.display="block"
            ingresarAltura.style.display="block"
            
            if (ingresarRadio.style.display!="none") {
                ingresarRadio.style.display="none" 
            }

            calcular.addEventListener("click", function () {
                
                let areaCuadrado = ingresarBase.value * ingresarAltura.value
                console.log(ingresarBase.value)
            resultado.innerHTML = "El área de la figura es: " +areaCuadrado/2
            punto5.appendChild(resultado)
            })
            
        }
        else if (item3.selected == true) {
            
            ingresarRadio.style.display="block"
            
            if (ingresarBase.style.display!="none" && ingresarAltura.style.display!="none") {
                ingresarBase.style.display="none"
                ingresarAltura.style.display="none"
            }

            calcular.addEventListener("click", function () {
                let areaCirculo = (ingresarRadio.value * ingresarRadio.value) * Math.PI
                resultado.innerHTML = "El área de la figura es: " +areaCirculo.toFixed(2)
                punto5.appendChild(resultado)
            })
        }
    })
    
    }
    puntoCinco()

    function puntoSiete() {
        let punto7 = document.getElementById("p7")
        CreateElements()

        let tituloTxt = document.createTextNode("Múltiplos de 8")
        let instruccionesTxt = document.createTextNode("Imprime tus múltiplos")
        let acepta = document.createTextNode("Aceptar")
        let index = 0
        let multiplos = []
        let i = 0

        punto7.appendChild(titulo)
        titulo.appendChild(tituloTxt)
        punto7.appendChild(instrucciones)
        instrucciones.appendChild(instruccionesTxt)
        punto7.appendChild(boton)
        boton.appendChild(acepta)

        let resultado = document.createElement("p")
        punto7.appendChild(resultado)

    boton.addEventListener("click", function imprimirMultiplos() {

        if(index<496){
            index=index+8
            multiplos.push(index)
            let texto = document.createTextNode(multiplos[i]+" ")
            i++
            resultado.appendChild(texto)
        }
        else{
            alert("Lo sentimos no existe un numero 500 que sea múltiplo de 8")
        }
    
      })
    }
    puntoSiete()

    function puntoOcho() {
        let punto8 = document.getElementById("p8")
        CreateElements()

    let tituloTxt = document.createTextNode("Impresión figuras")
    let instruccionesTxt = document.createTextNode("Escoge la figura a imprimir")
    let acepta = document.createTextNode("Figura 1")
    let boton2 = document.createElement("button")
    let acepta2 = document.createTextNode("Figura 2")
    let boton3 = document.createElement("button")
    let acepta3 = document.createTextNode("Figura 3")

    punto8.appendChild(titulo)
    titulo.appendChild(tituloTxt)
    punto8.appendChild(instrucciones)
    instrucciones.appendChild(instruccionesTxt)
    punto8.appendChild(boton)
    boton.appendChild(acepta)
    punto8.appendChild(boton2)
    boton2.appendChild(acepta2)
    punto8.appendChild(boton3)
    boton3.appendChild(acepta3)


   boton.addEventListener("click", function imprimirfigura1() {
        let asterisco = "*" 

       function createP() {
           
        let resultado = document.createElement("p")
        punto8.appendChild(resultado)
        let texto = document.createTextNode(asterisco)
        resultado.appendChild(texto)
    }
        createP()

        for (let index = 0; index < 4; index++) {

            asterisco = asterisco + "**"
            createP()  
        } 
        console.log(asterisco)
        for (let index = 4; index > 0; index--) {

            
            asterisco = asterisco.substr(0, (asterisco.length-2))
            console.log(asterisco)
            createP()  
        }   
    })
    boton2.addEventListener("click", function imprimirfigura2() {
        let asterisco = "*********" 

       function createP() {
           
        let resultado = document.createElement("p")
        punto8.appendChild(resultado)
        let texto = document.createTextNode(asterisco)
        resultado.appendChild(texto)
        }

        createP()

        for (let index = 4; index > 0; index--) {

            
            asterisco = asterisco.substr(0, (asterisco.length-2))
            createP()  
        }

        for (let index = 0; index < 4; index++) {
            
            asterisco = asterisco + "**"
            createP()  
        }    
    })
    boton3.addEventListener("click", function imprimirfigura2() {
        let asterisco = ""
        let numero = parseInt(prompt("ingrese un numero"))

       function createP() {
           
        let resultado = document.createElement("p")
        punto8.appendChild(resultado)
        let texto = document.createTextNode(asterisco)
        resultado.appendChild(texto)
        }

        for (let index = 0; index <= numero; index++) {
            
            asterisco = asterisco + "*"
            console.log(asterisco)
        } 

        for (let index = numero; index > 0; index--) {

                asterisco = asterisco.substr(0, (asterisco.length-1))
                createP()  
            }  
        })
    }
    puntoOcho()