// Saat halaman dimuat, cek apakah nama sudah disimpan
window.addEventListener("DOMContentLoaded", () => {
  const nama = localStorage.getItem("nama");

  if (nama) {
    // Sembunyikan popup dan tampilkan nama
    document.getElementById("popup").style.display = "none";
    document.getElementById("welcome-user").textContent = nama;
  }
});

// Tangani submit button dengan event handler
document.getElementById("submit-button").addEventListener("click", () => {
  const input = document.getElementById("popup-name").value.trim();

  if (input) {
    // Simpan ke localStorage
    localStorage.setItem("nama", input);

    // Sembunyikan popup
    document.getElementById("popup").style.display = "none";

    // Ganti teks sambutan
    document.getElementById("welcome-user").textContent = input;
  } else {
    alert("Yuk isi namanya dulu sebelum masuk~ ✨");
  }
});



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
  if (kategori === "ok-benar") {
    isi = "Yeayyy!!! Kita sama-sama Mizuki enjoyer uhuy~!<br/>٩(^ᗜ^)و";
  } else if (kategori === "ok-kurang") {
    isi = "Hmmm, mungkin kamu bisa baca dulu fakta-fakta tentang Mizuki di halaman 'Who's Akiyama Mizuki?'!<br/> Cara aksesnya tinggal klik aja kolom di bagian paling atas halaman ini, kotak yang di tengah (๑'ᵕ'๑)⸝*";
  } else if (kategori === "ok-salah") {
    isi = "Aw aw aw (˚ ˃̣̣̥⌓˂̣̣̥ )<br/> Gapapa, gapapaa, ayok kita baca-baca lagi fakta tentang Mizuki!<br/>Kamu bisa cek halaman 'Who's Akiyama Mizuki?'! Cara aksesnya tinggal klik aja kolom di bagian paling atas halaman ini, kotak yang di tengah (๑'ᵕ'๑)⸝*";
  }

  deskripsi.innerHTML = isi;
}



