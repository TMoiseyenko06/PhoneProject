const studentInput = document.getElementById('student-input');
const changeColorButton = document.getElementById('change-color-button');
const circles = document.querySelectorAll('.circle');

let currentIndex = 0;

changeColorButton.addEventListener('click', () => {
    const studentName = studentInput.value.trim();

    if (studentName === '') {
        alert('Please enter a student name.');
        return;
    }

    if (currentIndex >= circles.length) {
        alert('All circles are red.');
        return;
    }

    if (circles[currentIndex].style.backgroundColor !== 'red') {
        circles[currentIndex].style.backgroundColor = 'red';
    } else {
        currentIndex++;
        if (currentIndex < circles.length) {
            circles[currentIndex].style.backgroundColor = 'red';
        } else {
            alert('All circles are red.');
        }
    }
});