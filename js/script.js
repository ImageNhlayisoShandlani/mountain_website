//display the mobile menu
document
  .getElementsByClassName("menu-icon")[0]
  .addEventListener("click", function () {
    document.getElementsByClassName("mobile-hidden-menu")[0].style.display =
      "block";
  });

//display the mobile menu
document
  .getElementsByClassName("menu-icon")[1]
  .addEventListener("click", function () {
    document.getElementsByClassName("mobile-hidden-menu")[0].style.display =
      "block";
  });

//listen to scroll and the sticky navigation
window.addEventListener("scroll", function () {
  stick = document.getElementById("stick-nav");
  if (window.scrollY > 580) {
    stick.classList.add("mobile-sticky");
  } else {
    stick.classList.remove("mobile-sticky");
  }
});

//kill the mobile menu when you press the close button
document.querySelector(".top button").addEventListener("click", function () {
  document.getElementsByClassName("mobile-hidden-menu")[0].style.display =
    "none";
});

//history pictures changes
function change(number) {
  if (number == 1) {
    document.getElementsByClassName("pics")[0].classList.add("pic-active");
    document.getElementsByClassName("pics")[1].classList.remove("pic-active");
    document.getElementsByClassName("pics")[2].classList.remove("pic-active");
    document.getElementsByClassName("pics")[3].classList.remove("pic-active");

    document.getElementsByClassName("rounds")[0].classList.add("round-active");
    document
      .getElementsByClassName("rounds")[1]
      .classList.remove("round-active");
    document
      .getElementsByClassName("rounds")[3]
      .classList.remove("round-active");
    document
      .getElementsByClassName("rounds")[2]
      .classList.remove("round-active");
  } else if (number == 2) {
    document.getElementsByClassName("pics")[1].classList.add("pic-active");
    document.getElementsByClassName("pics")[0].classList.remove("pic-active");
    document.getElementsByClassName("pics")[2].classList.remove("pic-active");
    document.getElementsByClassName("pics")[3].classList.remove("pic-active");

    document.getElementsByClassName("rounds")[1].classList.add("round-active");
    document
      .getElementsByClassName("rounds")[0]
      .classList.remove("round-active");
    document
      .getElementsByClassName("rounds")[3]
      .classList.remove("round-active");
    document
      .getElementsByClassName("rounds")[2]
      .classList.remove("round-active");
  } else if (number == 3) {
    document.getElementsByClassName("pics")[2].classList.add("pic-active");
    document.getElementsByClassName("pics")[0].classList.remove("pic-active");
    document.getElementsByClassName("pics")[1].classList.remove("pic-active");
    document.getElementsByClassName("pics")[3].classList.remove("pic-active");

    document.getElementsByClassName("rounds")[2].classList.add("round-active");
    document
      .getElementsByClassName("rounds")[0]
      .classList.remove("round-active");
    document
      .getElementsByClassName("rounds")[1]
      .classList.remove("round-active");
    document
      .getElementsByClassName("rounds")[3]
      .classList.remove("round-active");
  } else if (number == 4) {
    document.getElementsByClassName("pics")[3].classList.add("pic-active");
    document.getElementsByClassName("pics")[0].classList.remove("pic-active");
    document.getElementsByClassName("pics")[2].classList.remove("pic-active");
    document.getElementsByClassName("pics")[1].classList.remove("pic-active");

    document.getElementsByClassName("rounds")[3].classList.add("round-active");
    document
      .getElementsByClassName("rounds")[0]
      .classList.remove("round-active");
    document
      .getElementsByClassName("rounds")[1]
      .classList.remove("round-active");
    document
      .getElementsByClassName("rounds")[2]
      .classList.remove("round-active");
  }
}

//Remove mobile after onclick
function eraseMenu() {
  document.getElementsByClassName("mobile-hidden-menu")[0].style.display =
    "none";
}
