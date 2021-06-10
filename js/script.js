// GET HOLD OF BUTTOM
const toggle = document.getElementById("mobile-nav-icon");
const modal = document.getElementById("modal");

toggle.addEventListener("click", () => {
  if (
    toggle.src ===
    "https://easybank-sergiobarria.netlify.app/images/icon-close.svg"
  ) {
    document["mobile-nav-icon"].src =
      "https://easybank-sergiobarria.netlify.app/images/icon-hamburger.svg";
    modal.classList.toggle("show-modal");
  } else if (
    toggle.src ===
    "https://easybank-sergiobarria.netlify.app/images/icon-hamburger.svg"
  ) {
    document["mobile-nav-icon"].src =
      "https://easybank-sergiobarria.netlify.app/images/icon-close.svg";
    modal.classList.toggle("show-modal");
  }
});
