document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqAnswer = button.nextElementSibling;

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            faqAnswer.style.display = 'block';
        } else {
            faqAnswer.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let counter = document.getElementById("volunteerCounter");
    let count = 0;
    let maxCount = 60;
    let interval = setInterval(function() {
        if (count < maxCount) {
            count++;
            counter.textContent = count + "+";
        } else {
            clearInterval(interval);
        }
    }, 20); 
});

document.addEventListener("DOMContentLoaded", function() {
    let counter = document.getElementById("therapistsCounter");
    let count = 0;
    let maxCount = 5;
    let interval = setInterval(function() {
        if (count < maxCount) {
            count++;
            counter.textContent = count + "+";
        } else {
            clearInterval(interval);
        }
    }, 200); 
});

document.addEventListener("DOMContentLoaded", function() {
    const logos = document.querySelectorAll('.logo-background .logo');
    
    logos.forEach(logo => {
        const randomDuration = Math.random() * 30 + 10 ; 
        const randomDelay = Math.random() * 5; 
        const randomXPosition = Math.random() * 100;
        const randomYPosition = Math.random() * 100;

        logo.style.animationDuration = `${randomDuration}s`;
        logo.style.animationDelay = `${randomDelay}s`;
        logo.style.left = `${randomXPosition}%`;
        logo.style.right = `${randomXPosition}%`;
        logo.style.right = `${randomYPosition}%`;
    });
});
