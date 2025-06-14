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
