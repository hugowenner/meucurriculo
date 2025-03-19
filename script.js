document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".button");

    if (!button) return; // Evita erros se o botão não existir

    // Função para baixar o PDF
    function downloadPDF() {
        const link = document.createElement("a");
        link.href = "curriculo.pdf"; // Caminho correto do arquivo
        link.download = "HugoWenner_Curriculo.pdf"; // Nome do arquivo ao baixar
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Eventos de clique e efeitos no botão
    button.addEventListener("click", downloadPDF);
    button.addEventListener("mouseover", () => button.style.backgroundColor = "#004a99");
    button.addEventListener("mouseout", () => button.style.backgroundColor = "#007BFF");
});
