// GET HOLD OF BUTTOM
const toggle = document.getElementById("hamburger");
const modal = document.getElementById("modal");

toggle.addEventListener("click", () => {
  if (
    toggle.src ===
    "https://easybank-sergiobarria.netlify.app/images/icon-close.svg"
  ) {
    document["nav-img"].src =
      "https://easybank-sergiobarria.netlify.app/images/icon-hamburger.svg";
    modal.classList.toggle("show-modal");
  } else if (
    toggle.src ===
    "https://easybank-sergiobarria.netlify.app/images/icon-hamburger.svg"
  ) {
    document["nav-img"].src =
      "https://easybank-sergiobarria.netlify.app/images/icon-close.svg";
    modal.classList.toggle("show-modal");
  }
});
