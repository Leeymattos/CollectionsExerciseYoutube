"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAddItem = void 0;
var PromptSync = require("prompt-sync");
var showAll_1 = require("./showAll");
var prompt = PromptSync();
function handleAddItem(inventory) {
    (0, showAll_1.handleShowAllItems)(inventory);
    console.log('Digite o item que você deseja adicionar');
    var item = prompt('--> ');
    inventory.push(item);
    console.clear();
    console.log("O item ".concat(item, " foi adicionado com sucesso!\n"));
}
exports.handleAddItem = handleAddItem;
