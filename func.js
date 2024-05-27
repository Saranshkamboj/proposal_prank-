document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');
    const cta = document.querySelector('.buttons');

    // Log to verify elements are selected
    console.log('yesButton:', yesButton);
    console.log('noButton:', noButton);
    console.log('cta:', cta);

    noButton.addEventListener('mouseenter', () => {
        const yesIndex = Array.from(cta.children).indexOf(yesButton);
        const noIndex = Array.from(cta.children).indexOf(noButton);

        console.log('Mouse entered "no" button');
        console.log('yesIndex:', yesIndex, 'noIndex:', noIndex);

        if (yesIndex < noIndex) {
            cta.insertBefore(noButton, yesButton);
        } else {
            cta.insertBefore(yesButton, noButton);
        }    
    });

    yesButton.addEventListener('click', () => {
        console.log('"yes" button clicked');
        document.getElementById('responseMessage').innerText = 'Yay! I am so happy!';
    });
});
