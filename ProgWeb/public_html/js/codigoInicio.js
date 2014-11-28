function CorClick (){
    $("aside button:nth-child(2)").addClass("bothover");
    $("aside button:nth-child(3)").removeClass("bothover");
}

function CorClick2 (){
    $("aside button:nth-child(3)").addClass("bothover");
    $("aside button:nth-child(2)").removeClass("bothover");
}

$(function(){
    $("aside button:nth-child(2)").click(function(){
        $("#CalculaValores").show("slow");
        $("#SimulaValores").hide("slow");
    });
    $("aside button:nth-child(3)").click(function(){
        $("#SimulaValores").show("slow");
        $("#CalculaValores").hide("slow");
    });
    });    

