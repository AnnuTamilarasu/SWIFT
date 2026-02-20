document.addEventListener('DOMContentLoaded', function() {
  const navbarContainer = document.getElementById('navbar-container');
  const currentUser = localStorage.getItem('currentUser');

  if (navbarContainer) {
    navbarContainer.innerHTML = `
    <div class="navbar">
      <div class="top-nav">
        
      </div>
      <div class="nav2">
        <a href = "index.html"><button>Home</button></a>
        <a href = "admissions.html"><button>Admissions</button></a>
        <a href = "teachers.html"><button>Staff</button></a>
        <a href = "projects.html"><button>Projects</button></a>
        
        <a href = "staffportal.html"><button>Staff Portal</button></a>
      </div>
    </div>`
  }
});