function submitName() {
    const name = document.getElementById("popup-name").value;
    if (name !== "") {
        document.getElementById("welcome-user").innerHTML = name;
        document.getElementById("popup").style.display = "none";
    } else {
        alert("Nama belum diisi!");
    }
}


function showSection(sectionId) {
  const allSections = document.querySelectorAll("section");
  allSections.forEach(sec => sec.style.display = "none");

  const activeSection = document.getElementById(sectionId);
  if (activeSection) activeSection.style.display = "block";
}

function handleChoice(answer) {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => sec.classList.add("hidden"));

  if (answer === "yes") {
    document.getElementById("quiz").classList.remove("hidden");
  } else if (answer === "no") {
    document.getElementById("trivia").classList.remove("hidden");
  }
}
function showSection(sectionId) {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => sec.classList.add("hidden"));

  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.remove("hidden");
  }
}

function handleAnswer(questionId, choice) {
  const resultElement = document.getElementById(`quiz-result-${questionId}`);

  let message = "";
  if (questionId === "q1") {
    message = choice === "yes" ? "Benar! Mizuki adalah animator📹" : "Oops, salah! Mizuki bukan ilustrator🎨";
  } else if (questionId === "q2") {
    message = choice === "yes" ? "Betul! Mizuki sekolah di SMA Kamiyama 🏫" : "Kurang tepat! Sekolahnya di Kamiyama (ᵕ—ᴗ—)";
  } else if (questionId === "q3") {
    message = choice === "yes" ? "Benar! Kolaborasinya dengan Bonbonribbon 🎀" : "Bbu buu! Mizuki nggak berkolaborasi dengan My Melody (❀❛ ֊ ❛„)♡";
  }

  resultElement.innerHTML = message;
}




