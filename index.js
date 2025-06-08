#!/usr/bin/env node
import { Command } from "commander";
import fs from "fs";

import inquirer from "inquirer";

const program = new Command();

const questions =[
    {
        type:"input",
        name:"title",
        message:"Pls Enter your new Task"
    },
    {
        type:"input",
        name:"status",
        message:"Pls Enter your new Task Sataus "
    },
]
program
    .name("TodoList-manager")
    .description("CLI Tool to help user to manage todo list ")
    .version("1.0.0");

// create add commend
program
    .command("add")
    .alias("a")
    .description("add task to todo list")
    .action(() => {
        inquirer
        .prompt(questions)
        .then((answers) => {
            // Use user feedback for... whatever!!
            if (fs.existsSync("./todoList.json")) {
            const todoList = JSON.parse(
                fs.readFileSync("./todoList.json", "utf8")
            );
            todoList.push(answers);
            fs.writeFile(
                "./todoList.json",
                JSON.stringify(todoList, null, 2),
                "utf8",
                (err) => {
                if (err) {
                    console.log(err);
                }
                else{
                    console.log("new Task added")
                }
                }
            );
            } else {
            fs.writeFile(
                "./todoList.json",
                JSON.stringify([answers], null, 2),
                "utf8",
                (err) => {
                if (err) {
                    console.log(err);
                }
                }
            );
            }
        })
        .catch((error) => {
            if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            } else {
            // Something else went wrong
            }
        });
    });
program
    .command("list")
    .alias("l")
    .description("show all tasks of todo list")
    .action(() => {
        if (fs.existsSync("./todoList.json")) {
        const todoList = JSON.parse(fs.readFileSync("./todoList.json", "utf8"));
        console.table(todoList);
        } else {
        throw "no Task added";
        }
    });

program.parse(process.argv);