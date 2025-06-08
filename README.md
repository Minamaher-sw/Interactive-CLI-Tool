# Interactive-CLI-Tool
An interactive CLI tool built with Commander and Inquirer that guides users through prompts to collect input, perform GitHub-related tasks, and generate project files like README.md. Designed for ease-of-use, automation, and streamlined project setup directly from the terminal
# TodoList-manager

A simple command-line interface (CLI) tool to help users manage their todo list using interactive prompts.

---

## Features

- Add tasks interactively with a title and status
- List all tasks in a formatted table
- Stores tasks persistently in a local `todoList.json` file

---

## Installation

Make sure you have [Node.js](https://nodejs.org/) installed.

Clone the repository and install dependencies:

```bash
npm install
```
Commands
add (alias: a)
Add a new task to the todo list. You will be prompted to enter:
Task title

list (alias: l)
Show all tasks currently stored in the todo list.
Task status

How It Works
Tasks are saved in a JSON file named todoList.json in the same directory.

When adding a new task, the CLI prompts the user for task details and appends it to the JSON file.

Listing tasks displays them in a neat table format in the terminal.

Dependencies
commander - CLI commands and options parser

inquirer - Interactive prompt library

Node.js built-in fs module - File system operations

Example
$ node your-cli-file.js add

? Pls Enter your new Task Buy groceries
? Pls Enter your new Task Status pending

new Task added

$ node your-cli-file.js list
┌─────────┬───────────────┬──────────┐
│ (index) │     title     │  status  │
├─────────┼───────────────┼──────────┤
│    0    │ 'Buy groceries' │ 'pending' │
└─────────┴───────────────┴──────────┘
