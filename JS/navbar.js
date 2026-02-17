document.addEventListener('DOMContentLoaded', function() {
  const navbarContainer = document.getElementById('navbar-container');
  const currentUser = localStorage.getItem('currentUser');

  if (navbarContainer) {
    navbarContainer.innerHTML = `
      <nav class="nav">
        <a href = "index.html"><button>Home</button></a>
        <a href = "help.html"><button>Help</button></a>
      </nav>`}
});