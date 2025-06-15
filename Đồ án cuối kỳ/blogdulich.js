    // Initialize Lucide icons
    lucide.createIcons();
    
    // Filter posts by category
    function filterPosts(category) {
      const posts = document.querySelectorAll('#posts-container .card');
      const buttons = document.querySelectorAll('.flex-wrap .button');
      
      // Update active button
      buttons.forEach(button => {
        if (button.textContent.trim().toLowerCase() === (category === 'all' ? 'tất cả' : category)) {
          button.classList.remove('button-outline');
          button.classList.add('button-default');
        } else {
          button.classList.remove('button-default');
          button.classList.add('button-outline');
        }
      });
      
      // Show/hide posts
      posts.forEach(post => {
        if (category === 'all' || post.dataset.category === category) {
          post.style.display = 'block';
        } else {
          post.style.display = 'none';
        }
      });
    }

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