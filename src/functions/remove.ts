import PromptSync = require("prompt-sync");
import { handleShowAllItems } from "./showAll";

const prompt = PromptSync();

export function handleRemoveItem(inventory: string[]) {

    handleShowAllItems(inventory);

    console.log('Digite o nome do item que você deseja remover');
    const removeItem = prompt('--> ');

    let count: number = 0;
    let success = false;

    inventory.forEach(item => {
        if (item == removeItem) {
            inventory.splice(count, 1);
            console.clear();
            console.log(`O item ${removeItem} foi removido com sucesso\n`);

            success = true;

        }
    })

    if (!success) {
        console.clear();
        console.log(`O item ${removeItem} não foi encontrado no estoque para remover\n`);
    }



}

