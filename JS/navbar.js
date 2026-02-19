document.addEventListener('DOMContentLoaded', function() {
  const navbarContainer = document.getElementById('navbar-container');
  const currentUser = localStorage.getItem('currentUser');

  if (navbarContainer) {
    navbarContainer.innerHTML = `
    <div class="navbar">
      <nav class="top-nav">
        <a href = "staffportal.html"<Button>Staff Portal</Button></a>
      </nav>
      <nav class="nav">
        <a href = "index.html"><button>Home</button></a>
        <a href = "admissions.html"><button>Admissions</button></a>
        <a href = "teachers.html"><button>Staff</button></a>
        <a href = "projects.html"><button>Projects</button></a>

      </nav>
    </div>`
  }
});