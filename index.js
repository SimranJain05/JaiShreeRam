
$("#temple").hover(function(){
    $("#ram_div").css("margin-top", "10%");
    $("#ram_div").css("visibility","visible");
},function(){
    $("#ram_div").css("margin-top", "30%");
    $("#ram_div").css("visibility","hidden");
});


$(".image").click(function(){

    setTimeout(function(){
        window.location.href = './new.html'
    },500);

    
});

document.getElementById("audio1").volume = 0.05;