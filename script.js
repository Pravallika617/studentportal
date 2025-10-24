// Registration
const registerForm = document.getElementById('registerForm');
const studentSection = document.getElementById('studentSection');
const studentName = document.getElementById('studentName');
const studentEmail = document.getElementById('studentEmail');

registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Display student info and show project submission
    studentName.textContent = name;
    studentEmail.textContent = email;
    studentSection.style.display = 'block';

    // Hide registration form
    registerForm.parentElement.style.display = 'none';
});

// Project Submission
const projectForm = document.getElementById('projectForm');
const projectList = document.getElementById('projectList');

projectForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('projectTitle').value;
    const abstract = document.getElementById('projectAbstract').value;
    const fileInput = document.getElementById('projectFile');
    const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : 'No file';

    // Add to project list
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${title}</strong> - ${abstract} <em>(${fileName})</em>`;
    projectList.appendChild(listItem);

    // Reset project form
    projectForm.reset();
});
