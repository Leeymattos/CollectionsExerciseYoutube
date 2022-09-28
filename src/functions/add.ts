import PromptSync = require("prompt-sync");
import { handleShowAllItems } from "./showAll";

const prompt = PromptSync();


export function handleAddItem(inventory: string[]) {

    handleShowAllItems(inventory);
    console.log('Digite o item que você deseja adicionar');
    const item = prompt('--> ');

    inventory.push(item);

    console.clear();
    console.log(`O item ${item} foi adicionado com sucesso!\n`);

}