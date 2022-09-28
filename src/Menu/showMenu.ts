import PromptSync = require("prompt-sync");
import { Menu } from "./Menu";

const prompt = PromptSync();

let option: number;

export function handleShowMenu() {

    do {

        console.log('1 - Adicionar um novo item ao estoque');
        console.log('2 - Remover um item do estoque');
        console.log('3 - Atualizar um item do estoque');
        console.log('4 - Mostrar todo o estoque');
        console.log('5 - Sair');

        option = Number(prompt('--> '));

        switch (option) {
            case 1:
                return Menu.add;

            case 2:
                return Menu.remove;

            case 3:
                return Menu.update;

            case 4:
                return Menu.showAll;

            case 5:
                return Menu.exit;

            default:
                console.clear()
                console.log('Opção inválida tente novamente!\n')

        }

    } while (option < 1 || option > 5)

}
