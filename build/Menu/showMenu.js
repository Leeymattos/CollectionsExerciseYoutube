"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleShowMenu = void 0;
var PromptSync = require("prompt-sync");
var Menu_1 = require("./Menu");
var prompt = PromptSync();
var option;
function handleShowMenu() {
    do {
        console.log('1 - Adicionar um novo item ao estoque');
        console.log('2 - Remover um item do estoque');
        console.log('3 - Atualizar um item do estoque');
        console.log('4 - Mostrar todo o estoque');
        console.log('5 - Sair');
        option = Number(prompt('--> '));
        switch (option) {
            case 1:
                return Menu_1.Menu.add;
            case 2:
                return Menu_1.Menu.remove;
            case 3:
                return Menu_1.Menu.update;
            case 4:
                return Menu_1.Menu.showAll;
            case 5:
                return Menu_1.Menu.exit;
            default:
                console.clear();
                console.log('Opção inválida tente novamente!\n');
        }
    } while (option < 1 || option > 5);
}
exports.handleShowMenu = handleShowMenu;
