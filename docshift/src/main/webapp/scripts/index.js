let currentStep = 1;

document.addEventListener("DOMContentLoaded", function() {
        document.getElementById('step1').style.display = 'block';
    });


function nextStep() {
	event.preventDefault()
	document.getElementById(`step${currentStep}`).style.display = "none";
	currentStep++;
	document.getElementById(`step${currentStep}`).style.display = "block";
}

function prevStep() {
	event.preventDefault()
	document.getElementById(`step${currentStep}`).style.display = "none";
	currentStep--;
	document.getElementById(`step${currentStep}`).style.display = "block";
}

