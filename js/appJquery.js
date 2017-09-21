if (window.innerWidth < 768) {
  /*------------Mobile-----------------*/

  /* Показ и скрытие меню */
  $("#toggle").click(function() {
    $("#main-nav__inner").slideToggle();
  });

  /* Показ и скрытие подменю "Велосипеды" */
  $("#arrow-bike").click(function() {
    $("#menu-bike").slideToggle();
  });

  /* Показ и скрытие подменю "Детские велосипеды" */
  $("#arrow-baby-bike").click(function() {
    $("#submenu-bike").slideToggle();
  });

  /* Показ и скрытие подменю "Подростковые велосипеды" */
  $("#arrow-teen-bike").click(function() {
    $("#submenu-teen-bike").slideToggle();
  });

  /* Показ и скрытие подменю "Самокаты" */
  $("#arrow-scooter").click(function() {
    $("#submenu-scooter").slideToggle();
  });
} else {
  /*---------------Desktop----------------------*/

  /* Показ и скрытие подменю "Велосипеды" */
  $("#title-bike").mouseenter(function() {
    $("#menu-bike").fadeIn("slow");
    $("#menu-bike").css("display", "flex");
  });
  $("#title-bike").mouseleave(function() {
    $("#menu-bike").css("display", "none");
  });

  /* Показ и скрытие подменю "Детские велосипеды" */
  $("#title-baby-bike").mouseenter(function() {
    $("#submenu-bike").fadeIn("slow");
  });
  $("#title-baby-bike").mouseleave(function() {
    $("#submenu-bike").fadeOut("slow");
  });

  /* Показ и скрытие подменю "Подростковые велосипеды" */
  $("#title-teen-bike").mouseenter(function() {
    $("#submenu-teen-bike").fadeIn("slow");
  });
  $("#title-teen-bike").mouseleave(function() {
    $("#submenu-teen-bike").fadeOut("slow");
  });

  /* Показ и скрытие подменю "Самокаты" */
  $("#title-scooter").mouseenter(function() {
    $("#submenu-scooter").fadeIn("slow");
  });
  $("#title-scooter").mouseleave(function() {
    $("#submenu-scooter").fadeOut("slow");
  });

}
