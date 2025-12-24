// Função de prompt corrigida
async function _weaponsjsprompt(message, defaultValue = "") {
    return new Promise(resolve => {
        if (typeof promptInput !== 'undefined') {
            promptInput(message, (result) => {
                resolve(result);
            }, "Meu_mod.js is asking you...", defaultValue);
        } else {
            resolve(prompt(message, defaultValue));
        }
    });
}

// Definição do elemento
elements.diamond_gun_left = {
    color: "#c0c0c0",
    behavior: behaviors.WALL,
    behaviorOn: [
        "XX|XX|XX",
        "CR:diamond%100|XX|XX",
        "XX|XX|XX",
    ],
    category: "weapons",
    state: "solid",
    conduct: 1,
    density: 1300,
};

// Comando para garantir que a categoria apareça no menu
if (typeof(updateCategory) !== "undefined") {
    updateCategory("weapons");
}
