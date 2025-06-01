// Dữ liệu giả lập giống scriptskhachsan.js
const hotels = [
    {
        id: 1,
        name: "Khách sạn Grand Luxury",
        location: "Quận 1, Hồ Chí Minh",
        price: 1500000,
        rating: 4.8,
        ratingCount: 219,
        features: ["WiFi miễn phí", "Hồ bơi", "Gym", "Spa", "Sân tennis"],
        discount: 30,
        image: "https://pix10.agoda.net/hotelImages/10974/-1/1852cfb66add1ee8ba1f43e2a1fd4380.jpg?ce=0&s=414x232&ar=16x9"
    },
    {
        id: 2,
        name: "Resort Paradise Beach",
        location: "Phú Quốc, Kiên Giang",
        price: 2800000,
        rating: 4.9,
        ratingCount: 2127,
        features: ["Bãi biển riêng", "All-inclusive", "WiFi miễn phí", "Spa", "Trẻ em"],
        discount: 0,
        image: "https://phuquocxanh.com/vi/wp-content/uploads/2015/11/Paradise-Resort1.jpg"
    },
    {
        id: 3,
        name: "Hotel Central Business",
        location: "Ba Đình, Hà Nội",
        price: 1200000,
        rating: 4.6,
        ratingCount: 1123,
        features: ["WiFi miễn phí", "Phòng họp", "Gym", "Nhà hàng"],
        discount: 30,
        image: "https://image.vietgoing.com/hotel/02/68/vietgoing_adm2311178225.webp"
    },
    {
        id: 4,
        name: "Mountain View Hotel",
        location: "Sa Pa, Lào Cai",
        price: 800000,
        rating: 4.7,
        ratingCount: 367,
        features: ["View núi", "WiFi miễn phí", "Nhà hàng", "Tour guide"],
        discount: 0,
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/226356631.jpg?k=fbb66184d3d23583aed7cd9bdab4b6d407a138ef55e48a7d7538c3229bb1435e&o=&hp=1"
    },
    {
        id: 5,
        name: "Boutique Hotel Đà Nẵng",
        location: "Hải Châu, Đà Nẵng",
        price: 1800000,
        rating: 4.5,
        ratingCount: 1452,
        features: ["WiFi miễn phí", "Hồ bơi", "Spa", "Gần biển"],
        discount: 0,
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/ee/cb/3b/danang-boutique-hotel.jpg?w=900&h=500&s=1"
    },
    {
        id: 6,
        name: "Heritage Hotel Hội An",
        location: "Phố cổ, Hội An",
        price: 1400000,
        rating: 4.7,
        ratingCount: 922,
        features: ["WiFi miễn phí", "Xô đập", "Spa", "Nhà hàng"],
        discount: 20,
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/62/57/8f/van-loi-hotel.jpg?w=900&h=500&s=1"
    }
];

// Lấy id từ URL
const params = new URLSearchParams(window.location.search);
const hotelId = parseInt(params.get('id'));
const hotel = hotels.find(h => h.id === hotelId);

if (hotel) {
    document.querySelector('h1.fw-bold').textContent = hotel.name;
    document.querySelector('.bi-geo-alt-fill').nextSibling.textContent = hotel.location;
    document.querySelectorAll('img')[0].src = hotel.image;
    document.querySelector('.border.rounded.p-3.mb-4 p').textContent = `${hotel.name} nằm tại ${hotel.location}.`;
    document.querySelector('.btn-warning.w-100').setAttribute('onclick', `saveBookingInfo(${hotelId})`);
}

function saveBookingInfo(hotelId) {
    const selectedHotel = hotels.find(h => h.id === hotelId);
    const bookingData = {
        hotelName: selectedHotel.name,
        roomType: "Phòng Deluxe",
        location: selectedHotel.location,
        checkIn: "25/05/2024",
        checkOut: "27/05/2024",
        guests: "2 người",
        nights: 2,
        price: selectedHotel.price,
        tax: Math.round(selectedHotel.price * 0.1)
    };
    localStorage.setItem("bookingInfo", JSON.stringify(bookingData));
    window.location.href = "dondatphong.html";
}
console.log("HotelBooking page loaded");

function chooseRoom(button) {
    const roomType = button.getAttribute('data-room');
    const price = parseInt(button.getAttribute('data-price'), 10);

    const bookingData = {
        hotelName: "Khách sạn Grand Luxury",
        roomType,
        location: "Quận 1, Hồ Chí Minh",
        checkIn: "25/05/2024",
        checkOut: "27/05/2024",
        guests: "2 người",
        nights: 2,
        price,
        tax: Math.round(price * 0.1)
    };

    localStorage.setItem('bookingInfo', JSON.stringify(bookingData));
    window.location.href = "dondatphong.html";
}
