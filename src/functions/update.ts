import PromptSync = require("prompt-sync");
import { handleShowAllItems } from "./showAll";

const prompt = PromptSync();

export function handleUpdateItem(inventory: string[]) {

    handleShowAllItems(inventory);
    console.log('Digite o nome do item que você deseja atualizar');
    const updateItem = prompt('--> ');

    let count: number = 0;

    let success = false;

    inventory.forEach(item => {
        if (item == updateItem) {
            console.log('Digite o nome do novo item');
            const newItem = prompt('--> ')

            inventory.splice(count, 1, newItem);

            console.clear();
            console.log(`O item ${updateItem} foi atualizado com sucesso e agora passa a ser ${newItem}\n`);

            success = true;

        }
        count++;
    })

    if (!success) {
        console.clear();
        console.log(`O item ${updateItem} não foi encontrado na lista para ser atualizado\n`);
    }

}