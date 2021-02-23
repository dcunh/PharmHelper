window.onload = function () {
    loadServicos();

    // autoComplete.js input eventListener for search results event
    document.querySelector("#autoComplete").addEventListener("results", (event) => {
        console.log(event);
    });


    // The autoComplete.js Engine instance creator
    const autoCompleteJS = new autoComplete({
        name: "Localidade",
        data: {
            src: async function () {
                // Loading placeholder text
                document
                    .querySelector("#autoComplete")
                    .setAttribute("placeholder", "Loading...");


                // Fetch External Data Source
                const source = await fetch(
                    "http://localhost:3000/json/localidades.json"
                );
                const data = await source.json();
                // Post loading placeholder text
                document
                    .querySelector("#autoComplete")
                    .setAttribute("placeholder", "Localidade");
                // Returns Fetched data
                return data;
            },
            key: ["Localidade"],
            results: (list) => {
                // Filter duplicates
                const filteredResults = Array.from(
                    new Set(list.map((value) => value.match))
                ).map((food) => {
                    return list.find((value) => value.match === food);
                });

                return filteredResults;
            }
        },
        trigger: {
            event: ["input", "focus"]
        },
        placeHolder: "Pesquisar uma Localidade",
        searchEngine: "strict",
        highlight: true,
        maxResults: 5,
        resultItem: {
            content: (data, element) => {
                // Modify Results Item Style
                element.style = "display: flex; justify-content: space-between;";
                // Modify Results Item Content
                element.innerHTML = `<span style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
          ${data.match}</span>
          <span style="display: flex; align-items: center; font-size: 13px; font-weight: 100; text-transform: uppercase; color: rgba(0,0,0,.2);">
        ${data.key}</span>`;
            }
        },
        noResults: (dataFeedback, generateList) => {
            // Generate autoComplete List
            generateList(autoCompleteJS, dataFeedback, dataFeedback.results);
            // No Results List Item
            const result = document.createElement("li");
            result.setAttribute("class", "no_result");
            result.setAttribute("tabindex", "1");
            result.innerHTML = `<span style="display: flex; align-items: center; font-weight: 100; color: rgba(0,0,0,.2);">Found No Results for "${dataFeedback.query}"</span>`;
            document
                .querySelector(`#${autoCompleteJS.resultsList.idName}`)
                .appendChild(result);
        },
        onSelection: (feedback) => {
            document.querySelector("#autoComplete").blur();
            // Prepare User's Selected Value
            const selection = feedback.selection.value[feedback.selection.key];
            // Render selected choice to selection div
            document.querySelector(".selection").innerHTML = selection;
            // Replace Input value with the selected value
            document.querySelector("#autoComplete").value = selection;
            // Console log autoComplete data feedback
            console.log(feedback);
        }
    });

    // Toggle results list and other elements
    const action = function (action) {
        const github = document.querySelector(".github-corner");
        const title = document.querySelector("h1");
        const mode = document.querySelector(".mode");
        const selection = document.querySelector(".selection");
        const footer = document.querySelector(".footer");

        if (action === "dim") {

            title.style.opacity = 1;
            mode.style.opacity = 1;
            selection.style.opacity = 1;
            footer.style.opacity = 1;
        } else {

            title.style.opacity = 0.3;
            mode.style.opacity = 0.2;
            selection.style.opacity = 0.1;
            footer.style.opacity = 0.1;
        }
    };

    // Toggle event for search input
    // showing & hiding results list onfocus/blur
    ["focus", "blur"].forEach(function (eventType) {
        document
            .querySelector("#autoComplete")
            .addEventListener(eventType, function () {
                // Hide results list & show other elements
                if (eventType === "blur") {
                    action("dim");
                } else if (eventType === "focus") {
                    // Show results list & hide other elements
                    action("light");
                }
            });
    });

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

function getSearchBarInformation() {

    let nome = document.getElementById("nome").value;
    let cidade = document.getElementById("autoComplete").value;
    let data = document.getElementById("data").value;
    let servico = document.getElementById("serviceList").value;

    let information = nome + cidade + data + servico;

    //Validacao Servico
    if (servico == 'Unidade Móvel') {
        window.location = '/views/servicos/servicos-Unidade.html';
    } else if (servico == 'Desinfeção COVID-19') {
        window.location = '/views/servicos/servicos-aplicacaoCovid.html';
    } else if (servico == 'Análises Sangue') {
        window.location = '/views/servicos/servicos-Analises.html';
    } else if (servico == 'Consulta em Sua Casa') {
        window.location = '/views/servicos/servicos-Casa.html';
    } else if (servico == null) {
        console.log("Error 404")
    }


}

function searchLocalidade() {

    console.log(getSearchBarInformation())

}

// Função para abrir outra pagina 
/**
 function searchServico(servicoID , cityID) {
    let produto = document.getElementById('serviceOption').value
    let produto = document.getElementById('cityOption').value

    let produtoID = produto.replace(/\s/g, "+" )
 
    searchServicos(servicoID, cityID)
}*/


  