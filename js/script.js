const getInput = document.querySelector('#input-value');
const buttonValue = document.querySelector('.button-85');
const img = document.querySelector('#imgCode');
const containerBox = document.querySelector('.container');

let valueDefault;

/*  https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example  */ 

buttonValue.addEventListener('click',()=>{
    let qrCodeValue = getInput.value.trim();
    if(!qrCodeValue || qrCodeValue === valueDefault) return;
    valueDefault = qrCodeValue
    buttonValue.innerText = "Generating QR Code..."
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueDefault}`
    img.addEventListener('load',()=>{
        containerBox.classList.add('active')
        buttonValue.innerText = "Generate QR code"
    })
})