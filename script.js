function downloadPDF() {
    window.print();
}

document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".button");
    if (button) {
        button.addEventListener("mouseover", function() {
            button.style.backgroundColor = "#004a99";
        });
        button.addEventListener("mouseout", function() {
            button.style.backgroundColor = "#007BFF";
        });
    }
});
