const yesButton = document.getElementById('yes');
const nobutton = document.getElementById('no');
const cta = document.querySelector('.buttons');

nobutton.addEventListener('mouseenter', () =>{
    const yesIndex = Array.from(cta.children).indexOf(yesButton);
    const noIndex = Array.from(cta.children).indexOf(nobutton);

    if (yesIndex < noIndex) {
        cta.insertBefore(nobutton, yesButton);
    } else {
        cta.insertBefore(yesButton, nobutton);
    }    

});
yesButton.addEventListener('click', () => {
    document.getElementById('responseMessage').innerText = 'Yay! I am so happy!';
});