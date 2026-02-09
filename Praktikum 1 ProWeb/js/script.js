document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        const skill = this.dataset.skill;

        let message = '';
        let link = '';

        switch (skill) {
            case 'HTML':
                message = 'Mampu menyusun struktur halaman web yang rapi, semantik, dan mudah diakses. Terbiasa menggunakan elemen HTML5 untuk membangun fondasi website yang terorganisir dan SEO-friendly.';
                link = 'https://developer.mozilla.org/en-US/docs/Web/HTML';
                break;
            case 'CSS':
                message = 'Menguasai styling untuk menciptakan tampilan web yang responsif dan menarik. Terbiasa menggunakan Flexbox, Grid, dan media query untuk memastikan desain optimal di berbagai perangkat.';
                link = 'https://developer.mozilla.org/en-US/docs/Web/CSS';
                break;
            case 'JavaScript':
                message = 'Menggunakan JavaScript untuk menambahkan interaktivitas dan logika pada website. Mampu mengelola DOM, event handling, dan logika aplikasi dasar hingga menengah.';
                link = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript';
                break;
            case 'PHP':
                message = 'Menggunakan PHP untuk membangun logika backend, mengelola data, dan menghubungkan aplikasi dengan database. Terbiasa membuat fitur autentikasi dan proses server-side lainnya.';
                link = 'https://www.php.net/';
                break;
            case 'NodeJS':
                message = 'Memanfaatkan Node.js untuk membangun aplikasi backend yang efisien dan scalable. Terbiasa menggunakan konsep asynchronous dan package manager seperti npm.';
                link = 'https://nodejs.org/';
                break;
            case 'MySQL':
                message = 'Berpengalaman dalam mengelola database relasional, membuat struktur tabel, serta melakukan query CRUD. Mampu mengoptimalkan data untuk kebutuhan aplikasi web..';
                link = 'https://www.mysql.com/';
                break;
            case 'REST API':
                message = 'Mampu merancang dan mengonsumsi RESTful API untuk komunikasi antara frontend dan backend. Memahami metode HTTP, struktur response, dan pengelolaan data JSON.';
                link = 'https://restfulapi.net/';
                break;
            case 'Git':
                message = 'Menggunakan Git untuk version control dalam pengembangan proyek. Terbiasa dengan workflow commit, branch, merge, dan kolaborasi tim.';
                link = 'https://git-scm.com/';
                break;
            case 'GitHub':
                message = 'Memanfaatkan GitHub sebagai platform kolaborasi dan manajemen repository. Terbiasa melakukan push, pull request, dan dokumentasi proyek.';
                link = 'https://github.com/';
                break;
            case 'VS Code':
                message = 'Menggunakan VS Code sebagai editor utama dengan berbagai extension untuk meningkatkan produktivitas, debugging, dan efisiensi pengembangan.';
                link = 'https://code.visualstudio.com/';
                break;
            default:
                message = 'Informasi tentang skill ini tidak tersedia.';
                link = '#';
        
        }

        if (confirm(message + "\n\nKlik OK untuk membuka dokumentasi")) {
    window.open(link, "_blank");
}
    });
});

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

<script>
  function downloadCV() {
    // Ganti dengan file CV kamu
    window.open("cv.pdf", "_blank");
  }

  function goToProject() {
    // Scroll ke section project
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth"
    });
  }
</script>

<script>
  function sendMessage(event) {
    event.preventDefault();
    alert("Terima kasih! Pesan kamu berhasil dikirim.");
    event.target.reset();
  }
</script>


const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  // ganti icon
  toggle.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";

  // simpan pilihan user
  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
});

// load theme saat refresh
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light");
  toggle.textContent = "🌙";
}


