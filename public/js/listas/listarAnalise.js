window.onload = function () {
    loadAnalise();

}

async function loadAnalise() {
    try {
        let servico = await $.ajax({
            url: "/api/servicos/analise",
            method: "get",
            dataType: "json"
        });
        showAnalise(servico);

    } catch (err) {
        let elemMain = document.getElementById("listarAnalise");
        console.log(err);
        elemMain.innerHTML = "<h1> Página não está disponível</h1><h2> Por favor tente mais tarde</h2>";
    }
}


// Mostra a lista de serviços sem numeros.
function showAnalise(analise) {
    let elemMain = document.getElementById("listarAnalise");
    let profileUrl = "";
    let especialidadeUrl = "";
    let html = '<table id="tabelaAnalise" class="table widget-26 tabelaAnalise"  data-table="customers-list"><tbody>';
    for (let analises of analise) {

        let profilePicker = Math.floor(Math.random() * 2);

        //Validacao Fotos
        if (profilePicker == 0) {
            profileUrl = "https://bootdey.com/img/Content/avatar/avatar5.png";
        } else {
            profileUrl = "https://bootdey.com/img/Content/avatar/avatar2.png";
        }

        //Validacao Especialidade
        if (analises.especialidade == 'Análises Sangue') {
            especialidadeUrl = 'views/servicos/servicos-Analises.html';
        }

        //Inicio HTML
        html += '<tr><td><div class="widget-26-job-emp-img"><img src="' + profileUrl + '" alt="Company" /></div></td><td>';
        //Nome do Colaborador
        html += '<div class="widget-26-job-title"><a href="#" id="' + analises.id + '">' + analises.firstName + '</a><p class="m-0"><a href="#" class="employer-name"></a> <span class="text-muted time">1 days ago</span></p></div></td>';
        //Cidade
        html += '<td><div class="widget-26-job-info"><p class="type m-0">Full-Time</p><p class="text-muted m-0">em <span class="location">' + analises.localidade + '</span></p></div></td>';
        //Salario
        html += '<td><div class="widget-26-job-salary">' + analises.preco + '</div></td>';
        //Servicos
        html += '<td><div class="widget-26-job-category bg-soft-base"><i class="indicator bg-base"></i><span><a href=' + especialidadeUrl + ' target="_blank">' + analises.especialidade + '</a></span></div></td>';


    }
    //Ultimo HTML
    html += '<td><div class="widget-26-job-starred"><a href="#"><svg xmlns="http://www.w3.org/2000/svg"width="24"height="24"viewBox="0 0 24 24"fill="none"stroke="currentColor"stroke-width="2"stroke-linecap="round"stroke-linejoin="round"class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></a></div></td></tr>'
    elemMain.innerHTML = html;

}

document.onkeyup = function searchFilterEngine() {

    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("tabelaAnalise");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabelaAnalise");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}