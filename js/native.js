/* Показ и скрытие меню */

$( "#toggle" ).click(function() {
  $( "#main-nav__inner" ).slideToggle();
});

/* Показ и скрытие подменю "Велосипеды" */
$( "#arrow-bike" ).click(function() {
    $("#menu-bike").slideToggle();
});

/* Показ и скрытие подменю "Детские велосипеды" */
$( "#arrow-baby-bike" ).click(function() {
  $( "#submenu-bike" ).slideToggle();
});

/* Показ и скрытие подменю "Подростковые велосипеды" */
  $( "#arrow-teen-bike" ).click(function() {
    $( "#submenu-teen-bike" ).slideToggle();
  });

/* Показ и скрытие подменю "Самокаты" */
  $( "#arrow-scooter" ).click(function() {
    $( "#submenu-scooter" ).slideToggle();
});
