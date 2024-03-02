function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);
    
    if(tipo.value == 'pista'){
        comprarPista(qtd);
    } else if (tipo.value == 'inferior'){
        comprarInferior(qtd);
    }else{
        comprarSuperior(qtd);
    }
}

function comprarPista(qtd){
    if (qtd <= 0){
        alert('Quantidade inválida');
    } else{
        let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
        if (qtd > qtdPista){
            alert('Quantidade indisponível para tipo pista');
        } else{
            qtdPista = qtdPista - qtd;
            document.getElementById('qtd-pista').textContent = qtdPista;
            alert(`Compra de ${qtd} realizada com sucesso`);
            
        }
    }
    
}
function comprarInferior(qtd){
    if (qtd <= 0){
        alert('Quantidade inválida');
    } else{
        let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > qtdInferior){
        alert('Quantidade indisponível para tipo inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert(`Compra de ${qtd} realizada com sucesso`);
    }
    
    }}


function comprarSuperior(qtd){if (qtd <= 0){
    alert('Quantidade inválida');
} else{let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
if (qtd > qtdSuperior){
    alert('Quantidade indisponível para tipo superior');
} else{
    qtdSuperior = qtdSuperior - qtd;
    document.getElementById('qtd-superior').textContent = qtdSuperior;
    alert(`Compra de ${qtd} realizada com sucesso`);
}
}
}
    


