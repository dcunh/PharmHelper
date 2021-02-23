/* window.onload = function(){
    loadServicos();
}
async function loadServicos() {
    try {
        let servicos = await $.ajax({
            url: "/api/register",
            method: "POST",
            json: true
          
        });
        showServicos(servicos);
        
    } catch(err) {
        let elemMain = document.getElementById("listarServicos");
        console.log(err);
        elemMain.innerHTML = "<h1> Página não está disponível</h1>"+
                "<h2> Por favor tente mais tarde</h2>";
    }
} 

function submitForm(){
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
 
    $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
        }
    });
}
function formSuccess(){
    $( "#msgSubmit" ).removeClass( "hidden" );
} */

window.onload = function () {

}

var formData =

    async function submitUserData() {
        try {
            let servicos = await $.ajax({
                url: "/api/register",
                method: "POST",
                json: true,
                dataType: "json",
                data: formData

            });

            console.log(servicos)

        } catch (err) {
            let elemMain = document.getElementById("registerForm");
            console.log(err);
            elemMain.innerHTML = "<h1> Página não está disponível</h1>" +
                "<h2> Por favor tente mais tarde</h2>";
        }
    }

