window.onload = function () {
    loadProdutos();

}

async function loadProdutos() {
    try {
        let produtos = await $.ajax({
            url: "/api/produtos",
            method: "get",
            dataType: "json"
        });
        showProdutos(produtos);

    } catch (err) {
        let elemMain = document.getElementById("listarProdutos");
        console.log(err);
        elemMain.innerHTML = "<h1> Página não está disponível</h1><h2> Por favor tente mais tarde</h2>";
    }
}

function searchProdutos(produtoID) {
    try {
        $.ajax({
            url: "/api/produtos/" + produtoID,
            method: "get",
            dataType: "json"
        });
        location.href = "index.html"

    } catch (err) {
        let elemMain = document.getElementById("listarProdutos");
        console.log(err);
        elemMain.innerHTML = "<h1> Página não está disponível</h1><h2> Por favor tente mais tarde</h2>";

    }
}

// Mostra a lista de serviços sem numeros.
function showProdutos(produtos) {
    let elemMain = document.getElementById("listarProdutos");
    let html = '<select type="text" id = "productOption" class="form-control search-slt" name="listarProdutos" placeholder="Produtos">';
    html += '<option value="/index.html" selected disabled hidden>Produtos</option>'
    for (let produto of produtos) {
        html += '<option id = ' + produto.Nome + '>' + produto.Nome + '</option>';
    }
    html += "</select>";
    elemMain.innerHTML = html;

}

// Função para abrir outra pagina 
function showProduto(idProdutos) {
    sessionStorage.setItem("idProdutos", idProdutos);
    window.location = "views/produtos/produto.html";

}

function searchProduto() {
    let produto = document.getElementById('productOption').value
    let produtoID = produto.replace(/\s/g, "+")


    searchProdutos(produtoID)
}

function getSearchBarInformation() {

    let produto = document.getElementById("productOption").value;

    let information = produto;

    //Validacao Produto
    if (produto == 'BIO-OIL OLEO CORPORAL') {
        window.location = '/views/loja/shop.html';
    } else if (produto == 'GRIPONAL') {
        window.location = '/views/loja/shop.html';
    } else if (produto == 'STILLNOITE TRIPLA AÇÃO') {
        window.location = '/views/loja/shop.html';
    } else if (produto == 'VICHY MINERAL 89') {
        window.location = '/views/loja/shop.html';
    } else if (produto == 'BENURON') {
        window.location = '/views/loja/shop.html';
    } else if (produto == null) {
        console.log("Error 404")
    }


}

function pesquisarProduto() {

    console.log(getSearchBarInformation())
}

