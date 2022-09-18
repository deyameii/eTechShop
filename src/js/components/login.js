const openPop = document.getElementById("login");
const closePop = document.querySelector(".pop_up_close");
const pop = document.querySelector(".pop_up");

openPop.addEventListener("click", function (e) {
  e.preventDefault();
  pop.classList.add("active");
});

closePop.addEventListener("click", () => {
  pop.classList.remove("active");
});
