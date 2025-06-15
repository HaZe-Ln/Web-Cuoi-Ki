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

const btnDatPhong = document.getElementById('btnDatPhong');
if (btnDatPhong) {
    btnDatPhong.addEventListener('click', function () {
        // Lấy dữ liệu từ form
        let booking = {
            hotelName: document.getElementById('hotelName').value,
            roomType: document.getElementById('roomType').value,
            checkIn: document.getElementById('checkIn').value,
            checkOut: document.getElementById('checkOut').value,
            guests: document.getElementById('guests').value,
            price: document.getElementById('price').value,
            image: document.getElementById('hotelImage').src
        };

        // Lưu vào LocalStorage
        let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        bookings.push(booking);
        localStorage.setItem('bookings', JSON.stringify(bookings));

        // Chuyển sang trang "Đặt phòng thành công"
        window.location.href = 'datphongthanhcong.html';
    });
}


document.addEventListener('DOMContentLoaded', function () {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const container = document.getElementById('booking-list');

    if (!container) {
        console.warn("Không tìm thấy phần tử #booking-list");
        return;
    }

    if (bookings.length === 0) {
        container.innerHTML = "<p>Bạn chưa có đơn đặt phòng nào.</p>";
    } else {
        console.log(">>> BOOKINGS:", bookings); // Debug xem dữ liệu có chưa

        container.innerHTML = '';
        bookings.forEach(booking => {
            const total = (booking.subtotal || 0) + (booking.tax || 0); // ✅ Tổng sau thuế

            const html = `
                <div class="border rounded p-3 mb-3 bg-light shadow-sm">
                    <h5 class="fw-bold text-primary mb-1">${booking.hotelName || "Tên khách sạn"}</h5>
                    <p class="mb-1">
                        🛏 ${booking.roomType || "Loại phòng"} - 👥 ${booking.guests || "Số khách"}
                    </p>
                    <p class="mb-1">
                        📅 ${booking.checkIn || "?"} → ${booking.checkOut || "?"}
                    </p>
                    <p class="fw-bold text-success fs-5 mb-0">
                        💰 ${total.toLocaleString('vi-VN')} đ
                    </p>
                </div>
            `;
            container.innerHTML += html;
        });
    }
});


