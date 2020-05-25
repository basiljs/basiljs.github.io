function toggle(ele) {
  if (window.getComputedStyle(ele).display === "block") {
    ele.style.display = "none";
  } else {
    ele.style.display = "block";
  }
}
export default function mobileNav() {
  const mainmenu = document.querySelector(".main-menu");
  const navmeter = document.querySelector(".nav-o-meter");
  navmeter.addEventListener("click", () => {
    navmeter.classList.toggle("opened");
    toggle(mainmenu);
    const links = document.querySelectorAll(".menu-link");
    [...links].forEach((ele) => {
      ele.addEventListener("click", () => {
        if (ele.classList.contains("opened")) {
          navmeter.classList.toggle("opened");
          toggle(mainmenu);
        }
      });
    });
  });

  // $('.nav-o-meter').on('click', function() {
  //   $(this).toggleClass('opened');
  //   $('.main-menu').toggle();
  //   $('.main-menu').find('li a').bind('click', function() {
  //     if ($('.nav-o-meter').hasClass('opened')) {
  //       $('.nav-o-meter').toggleClass('opened');
  //       $('.main_menu').toggle();
  //     }
  //   });
  // });
}
