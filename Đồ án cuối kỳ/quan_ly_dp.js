function showTab(tabId) {
  // 1. Ẩn tất cả các tab-pane
  document.querySelectorAll(".tab-pane").forEach(pane => {
    pane.classList.remove("active");
  });

  // 2. Hiển thị tab-pane được chọn
  document.getElementById(tabId).classList.add("active");

  // 3. Bỏ active ở tất cả tab
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });

  // 4. Thêm active cho tab được chọn
  const clickedButton = Array.from(document.querySelectorAll(".tab"))
    .find(btn => btn.getAttribute("onclick").includes(tabId));
  if (clickedButton) clickedButton.classList.add("active");
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

// Dropdown Dịch vụ
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