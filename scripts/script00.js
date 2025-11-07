document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("cookie-popup");
  const acceptBtn = document.getElementById("accept-cookies");
  const declineBtn = document.getElementById("decline-cookies");

  const cookieChoice = localStorage.getItem("cookie-consent");

  if (cookieChoice !== "accepted") {
    showPopup();
  }

  function showPopup() {
    popup.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function hidePopup() {
    popup.classList.remove("show");
    document.body.style.overflow = "auto";
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookie-consent", "accepted");
    hidePopup();
  });

  declineBtn.addEventListener("click", () => {
    alert("Devi accettare i cookie per continuare la navigazione.");
    hidePopup();
    setTimeout(showPopup, 100);
  });
});