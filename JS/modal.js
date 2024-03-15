//Creating a function to toggle form window class for opening and closing of the window and adding it on click event
$(function () {
  $(".modal-btn-open").click(function () {
    $(".backdrop").toggleClass("is-hidden");
  });

  $(".modal-btn-close").click(function () {
    $(".backdrop").toggleClass("is-hidden");
  });
});
