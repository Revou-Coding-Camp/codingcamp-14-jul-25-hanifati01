function validateForm() {
    const nameInput = document.getElementById('name-input');

    if (nameInput.value === '') {
        alert('Please enter your name.');
    } else {
        document.getElementById('welcome-user').innerHTML = nameInput.value;
        document.getElementById('message-output').innerHTML = `Thank you, ${nameInput.value}, for your message!`;
        nameInput.value = ''; // Kosongkan input setelah pesan terkirim
    }
}

function showSection(sectionId) {
  const allSections = document.querySelectorAll("section");
  allSections.forEach(sec => sec.style.display = "none");

  const activeSection = document.getElementById(sectionId);
  if (activeSection) activeSection.style.display = "block";
}
