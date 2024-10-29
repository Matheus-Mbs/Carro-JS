let carro = {
	ligado: false,
	velocidade: 0,
	marcha: 0,
	}

function darPartida(carro){
	
	if(carro.ligado == false){
		carro.ligado = true
		console.log('Carro ligado!')
	}else{
		console.log('Erro, carro já está ligado!')
	}

}

function desligar(carro){
	if(carro.ligado == true){
		carro.ligado = false
		console.log('Carro Desligando!')
	}else{
		console.log('Erro, carro já está desligado!')
	}

}

function marchaAtual(carro){
    if(carro.velocidade >= 10 && carro.velocidade <= 20){
        carro.marcha = 1
    }else if(carro.velocidade >= 21 && carro.velocidade <= 30){
        carro.marcha = 2
    }else if(carro.velocidade >= 31 && carro.velocidade <= 40){
        carro.marcha = 3
    }else if(carro.velocidade >= 41 && carro.velocidade <= 60){
        carro.marcha = 4
    }else if(carro.velocidade >= 61){
        carro.marcha = 5
    }
}

function acelerar(carro){
    if(carro.ligado == true){
		carro.velocidade += 10
        console.log('Acelerando o carro!')
        marchaAtual(carro)
	}else{
		console.log('Carro desligado!')
	}

	
}

function diminuirVelocidade(carro){
    if(carro.ligado == true){
		carro.velocidade -= 10
		console.log('Diminuindo velocidade!')
        marchaAtual(carro)
	}else{
		console.log('Carro desligado!')
	}
}

function desligarCarro(carro){
	if(carro.ligado == true){
		carro.ligado = false
		console.log('Carro sendo desligado!')
	}else{
		console.log('Carro já desligado!')
	}
}

function estadoAtual(carro){
    console.log(`Velocidade atual: ${carro.velocidade} Km/h`)
    console.log(`Marcha atual: ${carro.marcha}`)
}

function menu(){
    let op
    op = parseInt(prompt('1- Ligar carro\n2- Acelerar\n3- Freiar\n4- Estado atual\n5- Desligar\n99- Sair\nSelecione um: '))
    return op
}

let option = 0

while(option != 99){
    option = menu()

    switch(option){
        case 1:
            darPartida(carro)
            break
        case 2:
            acelerar(carro)
            break
        case 3:
            diminuirVelocidade(carro)
            break
        case 4:
            estadoAtual(carro)
            break
        case 5:
            desligar(carro)
            break
        default:
            break
    }
}