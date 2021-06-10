// GET HOLD OF BUTTOM
const toggle = document.getElementById("hamburger");
const modal = document.getElementById("modal");

toggle.addEventListener("click", () => {
  if (toggle.src === "http://127.0.0.1:5500/images/icon-close.svg") {
    document["nav-img"].src = "http://127.0.0.1:5500/images/icon-hamburger.svg";
    modal.classList.toggle("show-modal");
  } else if (toggle.src === "http://127.0.0.1:5500/images/icon-hamburger.svg") {
    document["nav-img"].src = "http://127.0.0.1:5500/images/icon-close.svg";
    modal.classList.toggle("show-modal");
  }
});
