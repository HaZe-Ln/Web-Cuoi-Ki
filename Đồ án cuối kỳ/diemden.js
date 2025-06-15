lucide.createIcons();
    
    // Simple search functionality
    document.getElementById('searchInput').addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase();
      const cards = document.querySelectorAll('.card');
      
      cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });

    document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('accountBtn');
    var menu = btn.parentElement;
    btn.onclick = function(e) {
      e.stopPropagation();
      menu.classList.toggle('open');
    };
    document.addEventListener('click', function() {
      menu.classList.remove('open');
    });
  });

  document.getElementById("dichVuBtn").addEventListener("click", function () {
  const dropdown = document.getElementById("dichVuDropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

// Ẩn dropdown khi click ra ngoài
document.addEventListener("click", function (event) {
  const dichVuBtn = document.getElementById("dichVuBtn");
  const dichVuDropdown = document.getElementById("dichVuDropdown");
  if (!dichVuBtn.contains(event.target) && !dichVuDropdown.contains(event.target)) {
    dichVuDropdown.style.display = "none";
  }
});