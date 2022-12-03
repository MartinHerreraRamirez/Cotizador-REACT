export function diferenciaYear(year){
    return new Date().getFullYear() - year    
}

export function aumentoMarca(marca){
    switch(marca){
        case 'americano':
            return 1.15
        case 'europeo':
            return 1.3
        case 'asiatico':
            return 1.05
        default:
            break;
    }
}

export function aumentoPlan(plan){
    
    if(plan==='basico'){
        return 1.2
    } else {
        return 1.5
    }
}

export function primeraMayuscula(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1)
}