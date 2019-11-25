
$(".panel").click(function () {
  $(this).addClass("selectedItem");
  $(".panel").not(this).removeClass("selectedItem");
  if($(this).attr("id")==="cssPanel"){
    $("#css").css("display","block");
    $("#html").css("display","none");
    $("#javascript").css("display","none");
  }
  else if ($(this).attr("id")==="javascriptPanel") {
    $("#javascript").css("display","block");
    $("#html").css("display","none");
    $("#css").css("display","none");
  }
  else{
    $("#html").css("display","block");
    $("#javascript").css("display","none");
    $("#css").css("display","none");
  }
});

$("#runButton").mousedown(function () {
  $(this).css("background-color","rgba(255, 48, 141, 0.84)");
});
$("#runButton").mouseup(function () {
  $(this).css("background-color","white");
});

//function to enable the TAB key
var textareas = document.getElementsByTagName('textarea');
var count = textareas.length;
for(var i=0;i<count;i++){
    textareas[i].onkeydown = function(e){
        if(e.keyCode==9 || e.which==9){
            e.preventDefault();
            var s = this.selectionStart;
            this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
            this.selectionEnd = s+1;
        }
    }
}

//Changing iframe content
$("#runButton").click(function(){
  $("iframe").contents().find("html").html($("#html textarea").val());
  $("iframe").contents().find("html").find("head").append("<style type='text/css'></style>");
  $("iframe").contents().find("html").find("head").find("style").append($("#css textarea").val());
  document.getElementById('output').children[0].contentWindow.eval($("#javascript textarea").val());

});
