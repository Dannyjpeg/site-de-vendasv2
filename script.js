function changeImage(imageSrc) {
    document.getElementById('mainImage').src = imageSrc;
}
function changeImage(image) {
    const mainImage = document.getElementById("mainImage");
    mainImage.src = image;
}

function changeColor() {
    const colorSelect = document.getElementById("color");
    const selectedColor = colorSelect.value;
    
    // Atualizar a imagem com base na cor selecionada
    switch (selectedColor) {
        case "azul":
            changeImage("camisa azul.png");
            break;
        case "branco":
            changeImage("camisa branca.png");
            break;
        case "preto":
            changeImage("camisa preta.png");
            break;
        case "cinza":
            changeImage("camisa cinza.png");
            break;
        case "vermelho":
            changeImage("camisa vermelha.png");
            break;
        case "rosa":
            changeImage("camisa rosa.png");
            break;
    }
}
