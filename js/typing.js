document.addEventListener("DOMContentLoaded", function () {
    const texts = [
        "MSc Health Data Science @ Uni of Liverpool",
        "1st Class BSc (Hons) Nursing @ Uni of Herts"
    ];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    function type() {
        if (count === texts.length) {
            count = 0; // Reset to loop the text array
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.querySelector('.typing-effect').textContent = letter;
        
        if (letter.length === currentText.length) {
            // Pause for a moment before erasing
            setTimeout(() => {
                index = 0; // Reset index for new text
                count++; // Move to the next text in array
                type(); // Start typing the next text
            }, 2000); // Pause before switching to next text
        } else {
            setTimeout(type, 100); // Continue typing current text
        }
    }

    type();
});


