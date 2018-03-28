$(function () {
    //Setando qual o templateScript vamos utilizar
    var templateScript = $("#linhas-template").html();

    //Compilando o template
    var template = Handlebars.compile(templateScript);

    //Defindo o objeto que temos nossos dados
    var context;

    $.ajax({
        "url": "http://paulibus.herokuapp.com/linhas",
        success: function(result) {
            context = result.result;
            console.log(context);

            //Passando os dados para o template
            var dados = template(context);
            
            // Adicionando o conteúdo dos dados na tela 
            $('.conteudo').html(dados);
        }
    });

});