$(document).ready(function(){
    $("#serv").click(function(event){
        $("#des").toggle();
        $("#hide").toggle();

    })
})

$(document).ready(function(){
    $("#dev").click(function(event){
        $("#loy").toggle();
        $("#hi").toggle();

    })
})

$(document).ready(function(){
    $("#pro").click(function(event){
        $("#product").toggle();
        $("#plan").toggle();

    })
})

$(document).ready(function(){
    $("#num1").mouseover(function(){
      $("num11").show();
    }).mouseout(function(){
      $("#num11").hide();
    });
  });
let myForm=document.querySelector("#mail")
  myForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let jina = myForm.jina.value;
    alert(jina + "" + " we have received your message.Thank you for reaching out to us." );
})

  
