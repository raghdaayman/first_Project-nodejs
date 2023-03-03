const yargs = require("yargs");
const action = require("./action");

// add function
yargs.command({
    command: 'add',
    describe: 'add a new person',
    builder: {
        fname: {
            describe: "add first name",
            demandOption: true,
            type: "string",
        },
        lname: {
            describe: "add last name",
            demandOption: true,
            type: "string",
        },
        grades: {
            describe: "add grades",
            demandOption: true,
            type: "array",
        },
    },
    handler: (actions) => {
        action.addPersons(actions.id, actions.fname, actions.lname, actions.age, actions.city, actions.degree,actions.grades);
    },
});


// delete
yargs.command({
    command: 'delete',
    describe: 'delete person',
    handler: (actions) => {
        action.deletePersons(actions.id);
    },
});


// gatAllData
yargs.command({
    command: 'get',
    describe: 'get all person',
    handler: () => {
        action.getAllData1();
    },
});


// Read one item
yargs.command({
    command: 'read',
    describe: 'read data of one item',
    // builder: {
    //     id: {
    //         describe: 'describe of id data',
    //         demandOption: true,
    //         type: 'string'
    //     }
    // },
    handler: (actions) => {
        action.ReadOneItem(actions.id);
    },
});

// list data
yargs.command({
    command: 'list',
    describe: 'list data',
    handler: () => {
        action.list();
    },
});

yargs.parse();