"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUpdateItem = void 0;
var PromptSync = require("prompt-sync");
var showAll_1 = require("./showAll");
var prompt = PromptSync();
function handleUpdateItem(inventory) {
    (0, showAll_1.handleShowAllItems)(inventory);
    console.log('Digite o nome do item que você deseja atualizar');
    var updateItem = prompt('--> ');
    var count = 0;
    var success = false;
    inventory.forEach(function (item) {
        if (item == updateItem) {
            console.log('Digite o nome do novo item');
            var newItem = prompt('--> ');
            inventory.splice(count, 1, newItem);
            console.clear();
            console.log("O item ".concat(updateItem, " foi atualizado com sucesso e agora passa a ser ").concat(newItem, "\n"));
            success = true;
        }
        count++;
    });
    if (!success) {
        console.clear();
        console.log("O item ".concat(updateItem, " n\u00E3o foi encontrado na lista para ser atualizado\n"));
    }
}
exports.handleUpdateItem = handleUpdateItem;
