// #!/usr/bin/env node
// import inquirer from "inquirer";
// let todos: string[] = [];
// let loop = true;
// while(loop){
//     const answers : {
//         TODO: string,
//         addmore: boolean
//     }= await inquirer.prompt([
//         {
//             type: "input",
//             name: "TODO",
//             message: "What items do you want to add in your list? "
//         },
//         {
//             type: "confirm",
//             name: "addmore",
//             message: "Do you want to add more? ",
//             default: false
//         }
//     ])
//     const {TODO, addmore} = answers;
//     console.log(answers)
//      loop = addmore
//     if(TODO) {
//         todos.push(TODO)
//     } else {
//         console.log("Kindly add valid input")
//     }
// }
// if(todos.length > 0){
//     console.log("Your TOdo List:")
//     todos.forEach(todo => {
//         console.log(todo)
//     });
// } else {
//     console.log("No todos found")
// }
import inquirer from "inquirer";
let todos = [];
let loop = true;
let ans1;
let ans2;
let ans3;
async function displayMenuItem() {
    ans1 = await inquirer.prompt([
        {
            type: "list",
            name: "menuOpt",
            choices: ['Add something to do', 'Edit something to do', 'Exit'],
            message: `Please select menu item: `
        }
    ]);
    switch (ans1.menuOpt) {
        case 'Add something to do': {
            await addTodo();
            break;
        }
        case 'Edit something to do': {
            await editTodo();
            break;
        }
        default: {
            loop = false;
            console.log("Exit Program...");
            break;
        }
    }
}
async function addTodo() {
    ans2 = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: "Enter What You Need To Do? "
        }
    ]);
    todos.push(ans2.todo);
    console.log(todos);
}
async function editTodo() {
    if (todos.length > 0) {
        ans3 = await inquirer.prompt([
            {
                type: "list",
                name: "menuOpt",
                choices: todos,
                message: "Select what you want to edit: "
            }
        ]);
        const item = await inquirer.prompt([
            {
                type: "input",
                name: "todo",
                message: `Please enter text to edit: `
            }
        ]);
        let i = 0;
        do {
            if (todos[i] === ans3.menuOpt) {
                todos[i] = item.todo;
                break;
            }
            i++;
        } while (i < todos.length);
        console.log(todos);
    }
    else {
        console.log("No item to edit.");
    }
}
async function startLoop() {
    while (loop) {
        await displayMenuItem();
    }
}
startLoop();
