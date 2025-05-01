const correctAnswers = {
    1: 'A', 
    2: 'A', 
    3: 'B', 
    4: 'C', 
    5: 'B', 
    6: 'A', 
    7: 'A'  
};

function initQuiz() {
    console.log('Initializing quiz...'); 

    const forms = document.querySelectorAll('.quiz form');
    if (forms.length === 0) {
        console.error('No quiz forms found in the DOM.');
        return;
    }
    console.log(`Found ${forms.length} quiz forms.`); 

    const submitButton = document.querySelector('.quiz button');
    if (!submitButton) {
        console.error('Submit button not found. Ensure a button exists in the last quiz div.');
        return;
    }

    const scoreDisplay = document.querySelector('.quiz div:last-of-type');
    if (!scoreDisplay) {
        console.error('Score display element not found. Ensure a div with "Score:" exists in the last quiz div.');
        return;
    }

    submitButton.addEventListener('click', () => {
        console.log('Submit button clicked.'); 
        let score = 0;
        const totalQuestions = Object.keys(correctAnswers).length;

        forms.forEach((form, index) => {
            const input = form.querySelector('input[type="text"]');
            if (!input) {
                console.warn(`No input found for question ${index + 1}`);
                return;
            }
            const userAnswer = input.value.trim().toUpperCase();
            const questionNumber = index + 1;

            console.log(`Question ${questionNumber}: User answered ${userAnswer}, Correct answer: ${correctAnswers[questionNumber]}`);

            if (userAnswer === correctAnswers[questionNumber]) {
                score++;
            }
        });

        scoreDisplay.textContent = `Score: ${score} out of ${totalQuestions}`;
        console.log(`Final score: ${score}/${totalQuestions}`); 
    });
}

document.addEventListener('DOMContentLoaded', initQuiz);