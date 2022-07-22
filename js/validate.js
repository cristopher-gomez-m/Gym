const validate = () => {
    validateText("Debe escribir un nombre","nombre","errorNombre")
    validateText("Debe escribir un apellido","apellido","errorApellido")
    validateSelect("Debe seleccionar estado civil","estadoC","selectError")
    validateAllCheckBox("Debe seleccionar uno","sus","errorCondiciones")
    validateOneCheckBox("Acepte los términos y condiciones","condiciones","errorCondicion")
    validateRadioBtn("Seleccione una opción","gen","errorRadioBtn")
};

const mensaje = (cadenaMensaje, elemento,className) => {
	elemento.focus();
	let nodoPadre = elemento.parentNode;
	var nodoMensaje = document.createElement("p");
	nodoMensaje.textContent = cadenaMensaje;
	nodoMensaje.style.color = "red";
	nodoMensaje.display = "block";
	nodoMensaje.setAttribute("class",className);
	nodoPadre.appendChild(nodoMensaje);
};

const validateText=(mensajes,id,className)=>{
    const input = document.querySelector("#"+id)
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    document.addEventListener("submit", (e) =>{
        e.preventDefault()
        if(input.value === "") {
            if(document.querySelector("."+className)){
                return
            }
            mensaje(mensajes,input,className)
        }else if(!regexName .test(input.value)){
            if(document.querySelector("."+className)){
                return
            }
            mensaje(mensajes,input,className)
        }
        else{
            if(!document.querySelector("."+className)){
                return
            }
            let nodoHijo = document.querySelector("."+className)
            let nodoPadre = input.parentNode;
            nodoPadre.removeChild(nodoHijo)
        }
    });
}

const validateSelect=(mensajes,id,className)=>{
    let selectEstado = document.querySelector("#"+id);
	document.addEventListener("submit", (e) => {
        e.preventDefault()
		if (selectEstado.value === null || selectEstado.value === "0") {
            if(document.querySelector("."+className)){
                return
            }
			mensaje(mensajes,selectEstado,className);
		}else{
            if(!document.querySelector("."+className)){
                return
            }
            let nodoHijo = document.querySelector("."+className)
            let nodoPadre = selectEstado.parentNode;
            nodoPadre.removeChild(nodoHijo)
        }
	});
}

const validateOneCheckBox=(mensajes,id,className)=>{
    const chkSuscrip = document.querySelector("#"+id);
    document.addEventListener("submit",(e)=>{
        e.preventDefault()
        if(!chkSuscrip.checked){
            if(document.querySelector("."+className)){
                return
            }
            mensaje(mensajes,chkSuscrip,className);
         }else{
            if(!document.querySelector("."+className)){
                return
            }
            let nodoHijo = document.querySelector("."+className)
            let nodoPadre = chkSuscrip.parentNode;
            nodoPadre.removeChild(nodoHijo)
        }
    });
}

const validateAllCheckBox=(mensajes,id,className)=>{
    const chkSuscrip = document.querySelectorAll("."+id);
    document.addEventListener("submit",(e)=>{
        sel = false;  
    for (let i = 0; i < chkSuscrip.length; i++) {
        if (chkSuscrip[i].checked) {
            sel = true;
        }
    }
    if (!sel) {
        if(document.querySelector("."+className)){
            return
        }
        mensaje(mensajes,chkSuscrip[1],className);
    }else{
        if(!document.querySelector("."+className)){
            return
        }
        let nodoHijo = document.querySelector("."+className)
        let nodoPadre = chkSuscrip[1].parentNode;
        nodoPadre.removeChild(nodoHijo)
    }
    });
}



const validateRadioBtn=(mensajes,id,className)=>{
    const radiosGenero = document.querySelectorAll("."+id);
    document.addEventListener("submit",(e)=>{
        let sel = false;
        for (let i = 0; i < radiosGenero.length; i++) {
            if (radiosGenero[i].checked) {
                sel = true;
                let res=radiosGenero[i].value;  // obtener el value        
                break;
            }
        }
        if (!sel) {
            if(document.querySelector("."+className)){
                return
            }
            valido = false;
            mensaje(mensajes,radiosGenero[2],className);
        }else{
            if(!document.querySelector("."+className)){
                return
            }
            let nodoHijo = document.querySelector("."+className)
            let nodoPadre = radiosGenero[2].parentNode;
            nodoPadre.removeChild(nodoHijo)
        }
    });
}

validate()
