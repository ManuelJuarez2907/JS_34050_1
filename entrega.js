let user="pepe";
let pass="1234";
let humano=false;

function pedirDatos(){
    humano=false;
    do{
        let usuario= prompt("Ingrese su usuario");
        let contra= prompt("Ingrese su contra");

        if(usuario === user && contra === pass){
            alert("Bienvenido podes calcular");
            let numero1 = parseInt(prompt("Ingrese el numero 1"));
            let operacion = prompt("Ingrese el tipo de operacion");
            let numero2 = parseInt(prompt("Ingrese el numero 2"));
            let resultado = null;
            switch(operacion){
                case "+": 
                    resultado= numero1 + numero2;
                    break;
                case "-": 
                    resultado= numero1 - numero2;
                    break;
                case "*": 
                    resultado= numero1 * numero2;
                    break;
                case "/": 
                    resultado= numero1 / numero2;
                    break;
                default: 
                    resultado= null;
                    break;
            }
            if (resultado != null){
                alert("El resultado de la operacion es: " + resultado);
            }else{
                alert("Ingresaste valores no permitidos")
            }
        }else{
            alert("No podes usar mi calcu");
            alert("Sos humano? VEAMOS");
            sosHumano();
        }
    }while(humano);

    function sosHumano(){
        let numero3 = 6;
        let numero4 = 2;
        
        let resultado= parseInt(prompt("Cuantos es el resto de: " + numero3 + "/" + numero4));
        if (resultado == 0){
            alert("Bien aprobaste matematicas con 10");
            humano=true;
            return;
        }else{
            alert("No sabes matematicas, no sos humano");
            humano=false;
            return;
        }
    }
}


pedirDatos();