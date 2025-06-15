document.addEventListener('DOMContentLoaded', () => {
    const bookingInfo = JSON.parse(localStorage.getItem('bookingInfo'));
    if (!bookingInfo) {
        alert('Không tìm thấy thông tin đặt phòng.');
        return;
    }

    // Cập nhật thông tin chi tiết
    document.getElementById('hotelName').textContent = bookingInfo.hotelName;
    document.getElementById('roomInfo').innerHTML = `${bookingInfo.roomType}<br>${bookingInfo.location}`;

    // Hiển thị ngày, số đêm, số khách (định dạng đẹp)
    document.getElementById('checkInDD').textContent = bookingInfo.checkIn.split("-").reverse().join("/");
    document.getElementById('checkOutDD').textContent = bookingInfo.checkOut.split("-").reverse().join("/");
    document.getElementById('nightsDD').textContent = `${bookingInfo.nights} đêm`;
    document.getElementById('guestsDD').textContent = bookingInfo.guests;

    // Tính toán & hiển thị giá
    const subtotal = bookingInfo.subtotal;
    const tax = bookingInfo.tax;
    const totalCost = subtotal + tax;

    document.getElementById('price').textContent = subtotal.toLocaleString('vi-VN') + ' ₫';
    document.getElementById('tax').textContent = tax.toLocaleString('vi-VN') + ' ₫';
    document.getElementById('totalPrice').textContent = totalCost.toLocaleString('vi-VN') + ' ₫';
});

document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Lấy giá trị từ form
    const lastName = document.getElementById('lastname').value.trim();
    const firstName = document.getElementById('firstname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Kiểm tra các trường bắt buộc
    if (!lastName || !firstName || !email || !phone) {
        alert("Vui lòng nhập đầy đủ thông tin khách hàng trước khi xác nhận đặt phòng.");
        return; // ❌ Dừng lại không gửi form
    }

    // Kiểm tra định dạng email đơn giản
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Email không hợp lệ.");
        return;
    }

    // Kiểm tra số điện thoại (ít nhất 9 chữ số)
    if (!/^\d{9,}$/.test(phone)) {
        alert("Số điện thoại không hợp lệ.");
        return;
    }

    // Nếu hợp lệ → Lưu đơn mới vào localStorage
    let existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const newBooking = JSON.parse(localStorage.getItem('bookingInfo'));
    if (newBooking) {
        existingBookings.push(newBooking);
        localStorage.setItem('bookings', JSON.stringify(existingBookings));
    }

    // Chuyển sang trang thành công
    window.location.href = 'datphongthanhcong.html';
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
document.addEventListener("click", function (event) {
  const dichVuBtn = document.getElementById("dichVuBtn");
  const dichVuDropdown = document.getElementById("dichVuDropdown");
  if (!dichVuBtn.contains(event.target) && !dichVuDropdown.contains(event.target)) {
    dichVuDropdown.style.display = "none";
  }
});
