function togglePassword(id) {
  const input = document.getElementById(id);
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}

const tabLogin = document.getElementById("tab-login");
const tabRegister = document.getElementById("tab-register");
const formLogin = document.getElementById("form-login");
const formRegister = document.getElementById("form-register");

tabLogin.addEventListener("click", () => {
  tabLogin.classList.add("active");
  tabRegister.classList.remove("active");
  formLogin.classList.remove("hidden");
  formRegister.classList.add("hidden");
});

tabRegister.addEventListener("click", () => {
  tabRegister.classList.add("active");
  tabLogin.classList.remove("active");
  formRegister.classList.remove("hidden");
  formLogin.classList.add("hidden");
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

// localStorage
// Đăng ký
document.getElementById("btnRegister").addEventListener("click", function (event) {
  event.preventDefault(); // 🚫 Ngăn reload

  const username = document.getElementById("register-username").value.trim().toLowerCase();
  const password = document.getElementById("register-password").value.trim();
  const confirmPassword = document.getElementById("confirm-password").value.trim();

  if (!username || !password || !confirmPassword) {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Mật khẩu xác nhận không khớp.");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.some(u => u.username === username)) {
    alert("Tài khoản đã tồn tại.");
    return;
  }

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Đăng ký thành công! Bạn có thể đăng nhập.");
});


// Đăng nhập
document.getElementById("btnLogin").addEventListener("click", function (event) {
  event.preventDefault(); // 🚫 Ngăn reload trang

  const username = document.getElementById("login-username").value.trim().toLowerCase();
  const password = document.getElementById("login-password").value.trim();

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const found = users.find(u => u.username === username && u.password === password);

  if (found) {
    alert("Đăng nhập thành công!");
    window.location.href = "khachsan.html"; // Chuyển sang trang Khách sạn
  } else {
    alert("Sai tài khoản hoặc mật khẩu!");
  }
});


