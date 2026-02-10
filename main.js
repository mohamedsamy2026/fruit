// كود القائمة المستجيبة (بدون تغيير)
const navbar = document.querySelector(".navbar");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const humburgerMenu = document.querySelector(".humburger");

humburgerMenu.addEventListener("click", () => {
  bars.classList.toggle("active");
  xmark.classList.toggle("active");
  navbar.classList.toggle("active");
});

document.querySelectorAll(".navbar ul li a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        bars.classList.add("active");     
        xmark.classList.remove("active");  
    });
});