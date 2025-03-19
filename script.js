function downloadPDF() {
    const link = document.createElement("a");
    link.href = "curriculo.pdf"; // Caminho correto do arquivo
    link.download = "HugoWenner_Curriculo.pdf"; // Nome do arquivo ao baixar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".button");
    if (button) {
        button.addEventListener("click", downloadPDF);
        button.addEventListener("mouseover", function() {
            button.style.backgroundColor = "#004a99";
        });
        button.addEventListener("mouseout", function() {
            button.style.backgroundColor = "#007BFF";
        });
    }
});
