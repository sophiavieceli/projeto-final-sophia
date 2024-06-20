const containerModal = document.getElementById("container-modal-postar");
const botaoPostar = document.getElementById("postar");

let postarAberto = false;

botaoPostar.addEventListener("click", () => {
    if (postarAberto === true) {
        containerModal.style.display = "none";
        postarAberto = false;
        botaoPostar.style.width = "7rem";
        botaoPostar.style.height = "7rem";
        return;
    }
    containerModal.style.display = "flex";
    postarAberto = true;
    botaoPostar.style.width = "9rem";
    botaoPostar.style.height = "9rem";
});
