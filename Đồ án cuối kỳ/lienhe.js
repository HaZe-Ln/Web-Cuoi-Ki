    // Initialize Lucide icons
    lucide.createIcons();
    
    // Form submission handler
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };
      
      console.log("Contact form submitted:", formData);
      alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.");
      
      // Reset form
      document.getElementById('contactForm').reset();
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