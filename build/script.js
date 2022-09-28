"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var showMenu_1 = require("./Menu/showMenu");
var Menu_1 = require("./Menu/Menu");
var add_1 = require("./functions/add");
var remove_1 = require("./functions/remove");
var update_1 = require("./functions/update");
var showAll_1 = require("./functions/showAll");
var inventory = [];
var choice;
do {
    choice = (0, showMenu_1.handleShowMenu)();
    switch (choice) {
        case Menu_1.Menu.add:
            (0, add_1.handleAddItem)(inventory);
            break;
        case Menu_1.Menu.remove:
            (0, remove_1.handleRemoveItem)(inventory);
            break;
        case Menu_1.Menu.update:
            (0, update_1.handleUpdateItem)(inventory);
            break;
        case Menu_1.Menu.showAll:
            (0, showAll_1.handleShowAllItems)(inventory);
            break;
        case Menu_1.Menu.exit:
            console.log('Programa finalizado!\n');
            break;
    }
} while (choice != Menu_1.Menu.exit);
