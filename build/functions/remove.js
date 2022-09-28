"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRemoveItem = void 0;
var PromptSync = require("prompt-sync");
var showAll_1 = require("./showAll");
var prompt = PromptSync();
function handleRemoveItem(inventory) {
    (0, showAll_1.handleShowAllItems)(inventory);
    console.log('Digite o nome do item que você deseja remover');
    var removeItem = prompt('--> ');
    var count = 0;
    var success = false;
    inventory.forEach(function (item) {
        if (item == removeItem) {
            inventory.splice(count, 1);
            console.clear();
            console.log("O item ".concat(removeItem, " foi removido com sucesso\n"));
            success = true;
        }
    });
    if (!success) {
        console.clear();
        console.log("O item ".concat(removeItem, " n\u00E3o foi encontrado no estoque para remover\n"));
    }
}
exports.handleRemoveItem = handleRemoveItem;
