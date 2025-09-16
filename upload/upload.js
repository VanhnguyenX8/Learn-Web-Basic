const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");
const uploadBtn = document.getElementById("uploadBtn");

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  preview.innerHTML = "";

  if (file) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    preview.appendChild(img);
  } else {
    preview.innerHTML = "<p>Chưa chọn ảnh nào</p>";
  }
});

uploadBtn.addEventListener("click", () => {
  const file = fileInput.files[0];
  if (!file) {
    alert("Vui lòng chọn ảnh trước!");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  fetch("https://www.vanhnguyenx8.com/api/upload", {
    method: "POST",
    body: formData,
  })
    .then(res => res.text())
    .then(data => {
      alert("Upload thành công!");
    })
    .catch(err => {
      console.error(err);
      alert("Có lỗi khi upload!");
    });
});
