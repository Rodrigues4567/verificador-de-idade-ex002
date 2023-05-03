function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var txtano = document.querySelector('#anoid')
    var res = document.querySelector('#res')

    if (txtano.value == 0 || txtano.value > ano) {
        alert('[ERRO] Digite um ano válido.')
    }
    else {
        var idade = ano - txtano.value
        
        var sexo = document.getElementsByName('sexo')

        var genero = ''
        if (sexo[0].checked) {
            genero = 'Homem'
        }
        else {
            genero = 'Mulher'
        }

        res.innerHTML = `Temos aqui ${genero} com ${idade} anos.`

    }
}