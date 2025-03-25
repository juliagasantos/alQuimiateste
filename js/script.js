//logo home
document.getElementById('imagem-home').addEventListener('click', function () {
    window.location.href = 'index.html'; // Redireciona para a página inicial
});

function menuOnClick() {
    document.getElementById("menuBar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
}

const cards = document.querySelectorAll('.card');
let currentIndex = 0;

function updateCards() {
    cards.forEach((card, index) => {
        card.classList.remove('active', 'left', 'right', 'prev-left', 'next-right');
        if (index === currentIndex) {
            card.classList.add('active');
        } else if (index === (currentIndex + 1) % cards.length) {
            card.classList.add('right');
        } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
            card.classList.add('left');
        } else if (index === (currentIndex + 2) % cards.length) {
            card.classList.add('next-right');
        } else if (index === (currentIndex - 2 + cards.length) % cards.length) {
            card.classList.add('prev-left');
        }
    });
}

function rotateCards() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCards();
}

updateCards();
setInterval(rotateCards, 4000);

// Seleciona todos os botões de abas

document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll('.tab-buttons button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe active de todos os botões
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Adiciona a classe active ao botão clicado
            button.classList.add('active');

            // Exibe o conteúdo da aba correspondente
            const targetTab = document.querySelector(`#${button.dataset.tab}`);
            targetTab.classList.add('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-item');
    const tabContent = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            const content = document.getElementById(tabId);

            // Se a aba já estiver ativa, remover a classe e fechar o conteúdo
            if (tab.classList.contains('active')) {
                tab.classList.remove('active');
                content.classList.remove('active');
            } else {
                // Remover a classe 'active' de todas as abas e conteúdos
                tabs.forEach(t => t.classList.remove('active'));
                tabContent.forEach(c => c.classList.remove('active'));

                // Ativar a aba e o conteúdo correspondente
                tab.classList.add('active');
                content.classList.add('active');
            }
        });
    });
});

// Seleciona todos os botões de abas "servicos"

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.servicos-tab');
    const tabContents = document.querySelectorAll('.servicos-item');
    const servicosNav = document.querySelector('.servicos-nav');

    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            // Impede a propagação do clique para o document
            event.stopPropagation();

            // Verifica se a aba já está ativa
            const isActive = tab.classList.contains('active');

            // Remover a classe 'active' de todos os botões de tab
            tabs.forEach(t => t.classList.remove('active'));

            // Remover a classe 'active' de todos os conteúdos das abas
            tabContents.forEach(content => content.classList.remove('active'));

            // Se a aba não estava ativa, adiciona 'active' ao botão clicado e ao conteúdo
            if (!isActive) {
                tab.classList.add('active');
                const tabId = tab.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            }
        });
    });

    // Fechar os conteúdos quando clicar fora da área de serviços
    document.addEventListener('click', (event) => {
        if (!servicosNav.contains(event.target)) {
            tabContents.forEach(content => content.classList.remove('active'));
            tabs.forEach(tab => tab.classList.remove('active'));
        }
    });
});
