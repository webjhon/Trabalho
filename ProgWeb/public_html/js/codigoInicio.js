//--------> Estilização dos Botões <-------- 
function CorClick (){
    $("aside button:nth-child(2)").addClass("bothover");
    $("aside button:nth-child(3)").removeClass("bothover");
}

function CorClick2 (){
    $("aside button:nth-child(3)").addClass("bothover");
    $("aside button:nth-child(2)").removeClass("bothover");
}
//--------> Seleção dos Formulários <-------- 
$(function(){
    $("aside button:nth-child(2)").click(function(){
        $("#CalculaValores").show("slow");
        $("#Escolha").hide("slow");
        $("#PFisica").hide("slow");
        $("#pjuridica").hide("slow");
    });
    $("aside button:nth-child(3)").click(function(){
        $("#Escolha").show("slow");
        $("#CalculaValores").hide("slow");
    });
    $("input[name=PF]").click(function(){
       $("#PFisica").show("slow");
       $("#pjuridica").hide("slow");
    });
    $("input[name=PJ]").click(function(){
       $("#pjuridica").show("slow");
       $("#PFisica").hide("slow");
    });
    });

    
//--------> Cálculo de Valores Possíveis. <-------- 
var renda;
var idade;
var result;
$(document).ready(function(){
$("input[name=calcular]").click(function(){
   renda = parseFloat($("input[name=renda]").val());
   idade = parseInt($("input[name=idade]").val());
   if(idade <40){
       result = renda*0.3;
   }
   else {
       result = renda*0.2;
   }
    document.getElementById("mostraCalcResul").innerHTML = "PRESTAÇÃO MAXIMA: R$ "+result;
    $("#mostraCalcResul").show("slow");
       
});
//--------> Simulação de Valores - Pessoa Física <-------- 
var valor_imovel;
var entrada;
var restante;
var parcela_180;
var parcela_240;
var parcela_260;

$("input[name=calcular_simula]").click(function(){
   valor_imovel = parseFloat($("input[name=valor]").val());
   entrada = valor_imovel * 0.3;
   restante = valor_imovel - entrada;
   parcela_180 = (restante+(restante*0.42))/180;
   parcela_240 = (restante+(restante*0.95))/240;
   parcela_260 = (restante+(restante*2.0))/260;
   
   document.getElementById("mostraSimulResul").innerHTML = 
        "Financiamento de 180 meses - Entrada de R$ "+entrada+",00 "+"Parcelas fixas de R$ "+parcela_180+",00"+"<br>"+
        " Financiamento de 240 meses - Entrada de R$ "+entrada+",00 "+"Parcelas fixas de R$ "+parcela_240+",00"+"<br>"+
        "Financiamento de 260 meses - Entrada de R$ "+entrada+",00 "+"Parcelas fixas de R$ "+parcela_260+",00";
   $("#mostraSimulResul").show("slow");
   });
//--------> Simulação de Valores - Pessoa Jurídica <--------    

var valor_imovel_pj;
var entrada_pj;
var restante_pj;
var parcela_180_pj;
var parcela_240_pj;
var parcela_260_pj;

$("input[name=calcular_simula_pj]").click(function(){
         valor_imovel_pj = parseFloat($("input[name=valor_pj]").val());
         entrada_pj = valor_imovel_pj * 0.3;
         restante_pj = valor_imovel_pj - entrada_pj;
         parcela_180_pj = (restante_pj+(restante_pj*0.42))/180;
         parcela_240_pj = (restante_pj+(restante_pj*0.95))/240;
         parcela_260_pj = (restante_pj+(restante_pj*2.0))/260;
         document.getElementById("mostraSimulResul_pj").innerHTML = 
            "Resultados: "+"<br><br>"+     
            "Financiamento de 180 meses - Entrada de R$ "+entrada_pj+",00 "+"Parcelas fixas de R$ "+parcela_180_pj+",00"+"<br><br>"+
            " Financiamento de 240 meses - Entrada de R$ "+entrada_pj+",00 "+"Parcelas fixas de R$ "+parcela_240_pj+",00"+"<br><br>"+
            "Financiamento de 260 meses - Entrada de R$ "+entrada_pj+",00 "+"Parcelas fixas de R$ "+parcela_260_pj+",00";
        $("#mostraSimulResul_pj").show("slow");
    });
    
//--------> Validação de Formulários (Não iniciado) <--------    

//Segundo o que consta no exercício :

//Quando  um campo tiver com o foco do usuário, 
//deverá possuir uma classe definida no css para ressaltá-lo. Quando perder o foco, 
//esta classe será removida.Ao clicar no botão “Limpar”, os campos do formulário deverão ficar em branco.  


//--------> Navegação em Foco (Não iniciado) <--------    

//Segundo o que consta no exercício:

//Todos os campos do formulário devem ser de preenchimento obrigatório, logo,
// o  formulário  só  poderá  ser  enviado  se  estiver  preenchido.



});

