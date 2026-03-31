function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >0 && hora < 12) {
    //Bom Dia!
    document.body.style.background = '#e3d94c'
    img.src = 'fotomanhã_2.png'
} else if (hora >= 12 && hora <18) {
    //Boa Tarde!
    img.src = 'fototarde_3.png'
    document.body.style.background = '#e883dc'
} else {
    //Boa noite
    img.src = 'fotonoite_1.png'
    document.body.style.background = '#454549'

}
}
