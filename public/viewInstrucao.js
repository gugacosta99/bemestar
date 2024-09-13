window.addEventListener('load', function () {
    const path = window.location.pathname;
    const pathSegments = path.split('/');
    const id = pathSegments[pathSegments.length - 1];


    const productSection = document.querySelector('.products-section');

    if (productSection) {
        fetch(`/api/incidente/${id}`)
            .then(response => response.json())
            .then(item => {
                var container = document.querySelector('container');
                container.innerHTML = '';

                const inst = item.instrucoes.forEach(element => {
                    return `<li>${element.numero} ${element.descricao}</li>`
                });

                var card = `
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img src="${item.img}" class="card-img-top" alt="${item.nome}">
                            <div class="card-body">
                                <h5 class="card-title">${item.nome}</h5>
                                <p class="card-text">${item.descricao}</p>
                                <br><br>
                                <ul>${inst}</ul>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += card;
            })
        .catch (error => console.error('Erro ao buscar dados:', error));
        
    }
});