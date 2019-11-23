
$(".panel").click(function () {
  $(this).addClass("selectedItem");
  $(".panel").not(this).removeClass("selectedItem");
});

$("#runButton").mousedown(function () {
  $(this).css("background-color","rgba(255, 48, 141, 0.84)");
});
$("#runButton").mouseup(function () {
  $(this).css("background-color","white");
});
