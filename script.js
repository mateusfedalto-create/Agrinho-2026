// script.js

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. INTERATIVIDADE DO MENU RESPONSIVO (HAMBÚRGUER)
    // ==========================================================================
    const btnMenuToggle = document.getElementById('btnMenuToggle');
    const menuNavegacao = document.getElementById('menuNavegacao');

    if (btnMenuToggle && menuNavegacao) {
        btnMenuToggle.addEventListener('click', () => {
            menuNavegacao.classList.toggle('active');
        });

        // Fecha o menu automaticamente quando o usuário clicar em um link interno
        const linksMenu = menuNavegacao.querySelectorAll('a');
        linksMenu.forEach(link => {
            link.addEventListener('click', () => {
                menuNavegacao.classList.remove('active');
            });
        });
    }

    // ==========================================================================
    // 2. SISTEMA DE VALIDAÇÃO DO QUIZ INTERATIVO
    // ==========================================================================
    const opcoesQuiz = document.querySelectorAll('.quiz-option');
    const feedbackQuiz = document.getElementById('quizFeedback');

    opcoesQuiz.forEach(opcao => {
        opcao.addEventListener('click', () => {
            // Remove os estados de erro/acerto anteriores de todas as opções
            opcoesQuiz.forEach(opt => opt.classList.remove('correct', 'incorrect'));

            // Captura o atributo customizado do HTML para validar o acerto
            const ehCorreto = opcao.getAttribute('data-correct') === 'true';

            if (ehCorreto) {
                opcao.classList.add('correct');
                feedbackQuiz.textContent = "🌱 Resposta Correta! O plantio direto sobre a palhada evita a erosão provocada pelo vento e pela chuva.";
                feedbackQuiz.style.color = "var(--secondary)";
            } else {
                opcao.classList.add('incorrect');
                feedbackQuiz.textContent = "❌ Incorreto. Essa prática expõe ou degrada os nutrientes essenciais do solo. Tente de novo!";
                feedbackQuiz.style.color = "var(--error)";
            }
        });
    });

    // ==========================================================================
    // 3. CÁLCULO DINÂMICO DA CALCULADORA ECOLÓGICA
    // ==========================================================================
    const formCalculadora = document.getElementById('calcForm');
    const boxResultado = document.getElementById('calcResultado');

    if (formCalculadora) {
        formCalculadora.addEventListener('submit', (evento) => {
            evento.preventDefault(); // Impede o envio do formulário e recarga da tela

            const areaCultivo = parseFloat(document.getElementById('inputArea').value);

            if (!isNaN(areaCultivo) && areaCultivo > 0) {
                // Parâmetro: Economia estimada de 25.000 litros de água por Hectare/Ano
                const aguaEconomizada = areaCultivo * 25000;
                
                // Formata os números de acordo com a moeda/métricas locais (Ex: 125.000)
                const volumeFormatado = aguaEconomizada.toLocaleString('pt-BR');

                boxResultado.style.color = "var(--primary)";
                boxResultado.innerHTML = `💧 Economia Estimada: Muito bem! Sua área pode economizar cerca de <strong>${volumeFormatado} litros de água</strong> por ano utilizando manejo sustentável.`;
            } else {
                boxResultado.style.color = "var(--error)";
                boxResultado.textContent = "Por favor, digite um valor numérico válido para a área.";
            }
        });
    }

    // ==========================================================================
    // 4. SISTEMA DE COMPORTAMENTO DO MODAL DA GALERIA
    // ==========================================================================
    const itensGaleria = document.querySelectorAll('.gallery-item');
    const modalGaleria = document.getElementById('galeriaModal');
    const modalTitulo = document.getElementById('modalTitulo');
    const modalTexto = document.getElementById('modalTexto');
    const btnFecharModal = document.getElementById('fecharModal');

    itensGaleria.forEach(item => {
        item.addEventListener('click', () => {
            const tituloImagem = item.querySelector('.gallery-caption').textContent;
            const informacaoTexto = item.getAttribute('data-info');

            // Injeta as informações corretas baseadas no card que foi clicado
            modalTitulo.textContent = tituloImagem;
            modalTexto.textContent = informacaoTexto;

            // Ativa o modal mudando o display via classe CSS
            modalGaleria.classList.add('active');
        });
    });

    // Evento para fechar o modal ao clicar no botão
    if (btnFecharModal && modalGaleria) {
        btnFecharModal.addEventListener('click', () => {
            modalGaleria.classList.remove('active');
        });

        // Evento complementar: Fecha o modal se o usuário clicar na área escura (fora da caixinha)
        modalGaleria.addEventListener('click', (evento) => {
            if (evento.target === modalGaleria) {
                modalGaleria.classList.remove('active');
            }
        });
    }
});

