window.onload = function () {
    loadLocalidades();
}

async function loadLocalidades() {
    try {
        let localidades = await $.ajax({
            url: "/api/localidades",
            method: "get",
            dataType: "json"
        });
        showLocalidades(localidades);

    } catch (err) {
        let elemMain = document.getElementById("listarLocalizacao");
        console.log(err);
        elemMain.innerHTML = "<h1> Página não está disponível</h1><h2> Por favor tente mais tarde</h2>";
    }
}

// Mostra a lista de localidades sem numeros.
function showLocalidades(localidades) {
    let elemMain = document.getElementById("listarLocalizacao");
    let html = '<select type="text" class="form-control search-slt" name="listarLocalizacao" placeholder="Localizacao">';
    html += '<option value="/index.html" selected disabled hidden>Localização</option>'
    for (let localidade of localidades) {
        html += "<option>" + localidade.Localidade + "</option>";
    }
    html += "</select>";
    elemMain.innerHTML = html;
}

function showLocalidade(idLocalidades) {
    sessionStorage.setItem("idLocalidades", idLocalidades);
    window.location = "views/produtos/produto.html";
}
