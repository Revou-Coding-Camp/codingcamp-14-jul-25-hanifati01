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
    message = choice === "yes" ? "Betul! Mizuki sekolah di SMA Kamiyama XD" : "Kurang tepat! Sekolahnya di Kamiyama (ᵕ—ᴗ—)";
  } else if (questionId === "q3") {
    message = choice === "yes" ? "Benar! Kolaborasinya dengan Bonbonribbon 🎀" : "Bbu buu! Mizuki bukan berkolaborasi<br/>dengan My Melody (❀❛ ֊ ❛„)♡";
  }

  resultElement.innerHTML = message;
}

function tampilkanPilihan() {
  const kategori = document.getElementById("kategori").value;
  const deskripsi = document.getElementById("deskripsi-pilihan");

  let isi = "";
  if (kategori === "fashion") {
    isi = "Mizuki selalu tampil dengan fashion yang unik dan edgy. Gaya-nya sangat ekspresif dan menjadi ciri khas!";
  } else if (kategori === "musik") {
    isi = "Mizuki bergabung dengan Nightcord at 25:00 dan berkontribusi pada visualisasi musik yang emosional dan dalam.";
  } else if (kategori === "kepribadian") {
    isi = "Karakter Mizuki dikenal kompleks, tegas, dan sangat kreatif. Ia sering jadi sorotan karena aura misteriusnya.";
  }

  deskripsi.innerHTML = isi;
}



