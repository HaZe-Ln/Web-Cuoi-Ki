document.addEventListener('DOMContentLoaded', () => {
    const bookingInfo = JSON.parse(localStorage.getItem('bookingInfo'));
    if (!bookingInfo) return;

    // Cập nhật các phần trong "Chi tiết đặt phòng"
    document.getElementById('hotelName').textContent = bookingInfo.hotelName;
    document.getElementById('roomInfo').innerHTML = `${bookingInfo.roomType}<br>${bookingInfo.location}`;
    document.getElementById('checkInDate').textContent = bookingInfo.checkIn;
    document.getElementById('checkOutDate').textContent = bookingInfo.checkOut;
    document.getElementById('nightCount').textContent = bookingInfo.nights + ' đêm';
    document.getElementById('guestCount').textContent = bookingInfo.guests;
    document.getElementById('price').textContent = bookingInfo.price.toLocaleString('vi-VN') + ' ₫';
    document.getElementById('tax').textContent = bookingInfo.tax.toLocaleString('vi-VN') + ' ₫';
    const total = bookingInfo.price + bookingInfo.tax;
    document.getElementById('total').textContent = total.toLocaleString('vi-VN') + ' ₫';
    // Cập nhật nhãn ở phần yêu cầu đặc biệt
    document.getElementById('specialLabel').innerHTML = `Yêu cầu đặc biệt<br><strong>${bookingInfo.roomType}</strong><br>${bookingInfo.location}`;
});
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const bookingInfo = {
        hotelName: document.getElementById('hotelName')?.textContent.trim() || 'Khách sạn Grand Luxury',
        roomType: document.getElementById('roomInfo')?.textContent.split('\n')[0] || 'Phòng Superior',
        location: document.getElementById('roomInfo')?.textContent.split('\n')[1] || 'Quận 1, Hồ Chí Minh',
        checkIn: '25/05/2024',
        checkOut: '27/05/2024',
        nights: 2,
        guests: '2 người, 1 phòng',
        price: 3000000,
        tax: 300000
    };
    localStorage.setItem('bookingInfo', JSON.stringify(bookingInfo));
    window.location.href = 'datphongthanhcong.html';
});
document.querySelector('.card .text-muted').innerHTML = `${bookingInfo.roomType}<br>${bookingInfo.location}`;
document.getElementById('specialLabel').innerHTML = `Yêu cầu đặc biệt<br><strong>${bookingInfo.roomType}</strong><br>${bookingInfo.location}`;
