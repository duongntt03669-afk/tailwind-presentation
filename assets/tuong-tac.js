// Chỉ ví dụ trên trang chủ cần JavaScript. Các liên kết và mục mở/đóng dùng HTML.
const colorSelect = document.querySelector("#mau-nen");
const exampleLink = document.querySelector("#nut-mau");
const classOutput = document.querySelector("#class-hien-tai");

if (colorSelect && exampleLink && classOutput) {
  const colors = ["bg-blue-600", "bg-teal-700", "bg-violet-700"];
  function updateColor() {
    exampleLink.classList.remove(...colors);
    exampleLink.classList.add(colorSelect.value);
    classOutput.textContent = colorSelect.value + " text-white rounded-lg";
  }
  colorSelect.addEventListener("change", updateColor);
  updateColor();
}
