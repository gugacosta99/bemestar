
function pesquisar() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    fetch(`/api/incidentes?search=${searchInput}`)
        .then(response => response.json())
        .then(data => {
            var container = document.getElementById('incidentes');
            container.innerHTML = '';
            data.forEach(item => {
                var card = `
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img src="${item.image}" class="card-img-top" alt="${item.title}">
                            <div class="card-body">
                                <h5 class="card-title">${item.title}</h5>
                                <p class="card-text">${item.description}</p>
                                <a href="${item.link}" class="btn btn-primary">Saiba mais</a>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += card;
            });
        })
        .catch(error => console.error('Erro ao buscar dados:', error));
}

document.querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const img = document.getElementById('img').value;
    const clr = document.getElementById('clr')?.checked;  // Certifique-se de que este elemento existe no HTML

    const data = {
        nome,
        descricao,
        img,
        clr
    };

    try {
        const response = await fetch('/api/incidente', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const novoIncidente = await response.json();
            window.location.href = '/';  // Redireciona para a página principal após salvar
        } else {
            alert('Erro ao enviar o formulário');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao enviar o formulário');
    }
});







/*document.addEventListener("DOMContentLoaded", () => {
    fetch('/api/incidentes')
        .then(response => response.json())
        .then(data => {
            const incidentes = document.querySelector('#incidentes');
            //este código abaixo mostra todas informações dos cards na pagina home
            if (data.length > 0) {
                data.forEach(incidentes => { // Renomeando a variável do loop forEach
                    const card = document.createElement('div');
                    card.classList.add('col-4');

                    card.innerHTML = `
                    <br>
                    <br>
                    <br>
                    <div class="card">
                        <img src=${incidentes.imagem} class="card-img-top" alt=${incidentes.nome}>
                        <div class="card-body">
                            <h4 class="card-title">${incidentes.titulo}</h4>
                            <p class="card-text">Texto Complementar: ${incidentes.textocomplementar}</p>
                            <p class="card-text">Instruções: ${incidentes.instrucoes}</p>
                        </div>
                        <br>
                        <button class="btn btn-danger" onclick="verIncidente(${incidentes.id})">Visualizar</button>
                    </div>
                `;
                incidentes.appendChild(card);
                });
            } else {
                incidentes.innerHTML = `<h2>Nenhum incidente encontrado.</h2>`;
            }
        });
});



document.getElementById('filter-section container mt-5').addEventListener('submit', async (event) => {
    event.preventDefault(); // Impede o envio do formulário padrão
    const buscarPokemon = document.getElementById('searchInput').value;
    const response = await fetch(`/buscar/${buscarPokemon}`);
    const pokemon = await response.json();

    if (incidentes) { // Verifica se o incidente foi encontrado!!!!
        // Limpar os detalhes dos incidentes existentes na página inicial
        document.getElementById('incidentes').innerHTML = ''; //onde fica o ID do card

        // Exibir detalhes do incidente pesquisado
        const incidenteDetails = document.createElement('div');
        incidenteDetails.classList.add('col-md-4', 'mb-4');
        incidenteDetails.innerHTML = `
                    <br>
                    <br>
                    <br>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${incidentes.titulo}</h5>
                    <img src="${pokemon.imagem}" class="card-img-top" alt="${incidentes.nome}">
                    <p class="card-text">Tipo: ${incidentes.textocomplementar}</p>
                    <p class="card-text">Level: ${incidentes.instrucoes}</p>
                </div>
            </div>
        `;
        document.getElementById('incidentes').appendChild(incidenteDetails);
    } else {
        // Exibe uma mensagem caso o Pokémon não seja encontrado
        document.getElementById('incidenteDetails').innerHTML = `<h2>Incidente não encontrado.</h2>`;
    }
});*/

