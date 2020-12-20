// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "vscode-sff" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "sff.helloWorld",
    () => {
      // The code you place here will be executed every time your command is executed

      // Display a message box to the user
      vscode.window.showInformationMessage("Hello World from vscode-sff!");
    }
  );

  let runSignleProcessor = vscode.commands.registerCommand(
    "sff.run-signle-processor",
    () => {
      const activeTextEditor = vscode.window.activeTextEditor;
			let selection;
			let message = '111'
      if (activeTextEditor) {
				selection = activeTextEditor.selection;
				message = activeTextEditor.document.getText(selection)
      }

      vscode.window.showInformationMessage(message);
    }
  );

  context.subscriptions.push(disposable);
  context.subscriptions.push(runSignleProcessor);
}

// this method is called when your extension is deactivated
export function deactivate() {}
