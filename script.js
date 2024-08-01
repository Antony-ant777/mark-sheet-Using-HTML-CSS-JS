document.addEventListener('DOMContentLoaded', function () {
    function calculateTotal(subjectId) {
        let theory = parseFloat(document.getElementById(`theory${subjectId}`).value) || 0;
        let practical = parseFloat(document.getElementById(`practical${subjectId}`).value) || 0;
        let total = theory + practical;

        if (total > 100) {
            alert("Invalid Marks entered");
            return false;
        }

        document.getElementById(`total${subjectId}`).innerText = total;
        updateGrandTotal();
    }

    function updateGrandTotal() {
        let grandTotal = 0;
        document.querySelectorAll('.to').forEach(function (element) {
            let total = parseFloat(element.innerText) || 0;
            grandTotal += total;
        });

        let maxMarks = 500; // Total maximum marks for all subjects combined
        let percentage = (grandTotal / maxMarks) * 100;
        let result = percentage >= 40 ? "PASS" : "FAIL";
        let grade = getGrade(percentage);

        document.querySelector('#totalall').innerText = grandTotal;
        document.querySelector('#Percentage').innerText = percentage.toFixed(2) + '%';
        document.querySelector('#pass').innerText = result;
        document.querySelector('#grade').innerText = grade;
    }

    function getGrade(percentage) {
        if (percentage >= 90) {
            return 'A';
        } else if (percentage >= 80) {
            return 'B';
        } else if (percentage >= 65) {
            return 'C';
        } else if (percentage >= 50) {
            return 'D';
        } else {
            return 'F';
        }
    }
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`theory${i}`).addEventListener('input', function () {
            calculateTotal(i);
        });
        document.getElementById(`practical${i}`).addEventListener('input', function () {
            calculateTotal(i);
        });
    }
});

