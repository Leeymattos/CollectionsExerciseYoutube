import { handleShowMenu } from "./Menu/showMenu";

import { Menu } from './Menu/Menu';
import { handleAddItem } from "./functions/add";
import { handleRemoveItem } from "./functions/remove";
import { handleUpdateItem } from "./functions/update";
import { handleShowAllItems } from "./functions/showAll";

const inventory: string[] = []

let choice: Menu;

do {

    choice = handleShowMenu();

    switch (choice) {
        case Menu.add:
            handleAddItem(inventory);
            break;

        case Menu.remove:
            handleRemoveItem(inventory);
            break;

        case Menu.update:
            handleUpdateItem(inventory);
            break;

        case Menu.showAll:
            handleShowAllItems(inventory);
            break;

        case Menu.exit:
            console.log('Programa finalizado!\n');
            break;

    }

} while (choice != Menu.exit)

