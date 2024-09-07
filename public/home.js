document.addEventListener("DOMContentLoaded", () => {
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
});