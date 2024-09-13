document.getElementById('btn-add-instruction').addEventListener('click', function () {
    const instructionSection = document.getElementById('instruction-section');
    const newInstructionIndex = instructionSection.children.length + 1;

    const previousInstructionsList = instructionSection.querySelectorAll('div');
    previousInstructionsList.forEach(function (instructionDiv) {
        const removeButton = instructionDiv.querySelector('.remove-btn');
        if (removeButton) {
            removeButton.classList.add('d-none');
        }
        //removeButton.classList.add('d-none');
    })

    const newInstructionDiv = document.createElement('div');
    newInstructionDiv.classList.add('mb-3', 'd-flex', 'align-items-center');
    newInstructionDiv.setAttribute('id', `instruction-${newInstructionIndex}`);

    const newInstructionInput = document.createElement('input');
    newInstructionInput.type = 'text';
    newInstructionInput.classList.add('form-control', 'mx-2');
    newInstructionInput.placeholder = `Instrução ${newInstructionIndex}`;
    newInstructionInput.setAttribute('id', `instruction-input-${newInstructionIndex}`);

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.classList.add('btn', 'btn-link', 'text-danger', 'remove-btn');
    removeButton.innerHTML = '🗑️';
    removeButton.addEventListener('click', function () {
        instructionSection.removeChild(newInstructionDiv);
        
        const lastInstruction = document.getElementById('instruction-section').lastElementChild;
        const removeBtn = lastInstruction.querySelector('.remove-btn');
        if (removeBtn) {
            removeBtn.classList.remove('d-none');
        }
    });

    newInstructionDiv.appendChild(newInstructionInput);
    newInstructionDiv.appendChild(removeButton);

    instructionSection.appendChild(newInstructionDiv);
});

document.querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const img = document.getElementById('img').value;
   

    const data = {
        nome,
        descricao,
        img
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

