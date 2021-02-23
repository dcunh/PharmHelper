window.onload = function () {
    loadServicos();

}

async function loadServicos() {
    try {
        let servicos = await $.ajax({
            url: "/api/servicos",
            method: "get",
            dataType: "json"
        });
        showServicos(servicos);

    } catch (err) {
        let elemMain = document.getElementById("listarServicos");
        console.log(err);
        elemMain.innerHTML = "<h1> Página não está disponível</h1><h2> Por favor tente mais tarde</h2>";
    }
}

/*function searchServicos(servicoID, cityID) {
    try {
         $.ajax({
            url: "/api/servicos/" + servicoID + cityID,
            method: "get",
            dataType: "json"
        });
        searchServicos(servicos);

    } catch(err) {
        let elemMain = document.getElementById("listarServicos");
        console.log(err);
        elemMain.innerHTML = "<h1> Página não está disponível</h1><h2> Por favor tente mais tarde</h2>";
    }
} 
*/

// Mostra a lista de serviços sem numeros.
function showServicos(servicos) {
    let elemMain = document.getElementById("listarServicos");
    let html = '<select type="text" class="form-control search-slt" id="serviceList" placeholder="Serviços">';
    html += "<option selected disabled hidden>Serviços</option>"
    for (let servico of servicos) {
        html += "<option>" + servico.Nome + "</option>";
    }
    html += "</select>";
    elemMain.innerHTML = html;
}

// Função para abrir outra pagina 
/**
 function searchServico(servicoID , cityID) {
    let produto = document.getElementById('serviceOption').value
    let produto = document.getElementById('cityOption').value

    let produtoID = produto.replace(/\s/g, "+" )
 
    searchServicos(servicoID, cityID)
}*/