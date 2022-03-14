$(document).ready(function () {
  $("#serv").click(function (event) {
    $("#des").toggle();
    $("#hide").toggle();

  })
  $("#dev").click(function (event) {
    $("#loy").toggle();
    $("#hi").toggle();

  })
  $("#pro").click(function (event) {
    $("#product").toggle();
    $("#plan").toggle();

  })
  $("#num1").mouseover(function () {
    $(".num11").show();
  }).mouseout(function () {
    $(".num11").hide();
  });
})

$("#num2").mouseover(function () {
$(".num22").show();
}).mouseout(function () {
$(".num22").hide();
})

$("#num3").mouseover(function () {
$(".num33").show();
}).mouseout(function () {
$(".num33").hide();
});

$("#num4").mouseover(function () {
$(".num44").show();
}).mouseout(function () {
$(".num11").hide();
});

$("#num5").mouseover(function () {
$(".num55").show();
}).mouseout(function () {
$(".num55").hide();
});

$("#num6").mouseover(function () {
$(".num66").show();
}).mouseout(function () {
$(".num66").hide();
});

$("#num7").mouseover(function () {
$(".num77").show();
}).mouseout(function () {
$(".num77").hide();
});

$("#num8").mouseover(function () {
  $(".num88").show();
  }).mouseout(function () {
  $(".num88").hide();
  });



let myForm = document.querySelector("#mail")
myForm.addEventListener("submit", (e) => {
  e.preventDefault()
  let jina = myForm.jina.value;
  alert(jina + "" + " we have received your message.Thank you for reaching out to us.");
})
