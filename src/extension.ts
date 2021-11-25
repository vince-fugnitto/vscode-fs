import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposables: vscode.Disposable[] = [];

	// Create files.
	disposables.push(
		vscode.workspace.onDidCreateFiles(event => {
			vscode.window.showInformationMessage(`created files: ${event.files.map(f => f.path).join(', ')}`);
		})
	);

	disposables.push(
		vscode.workspace.onDidDeleteFiles(event => {
			vscode.window.showInformationMessage(`deleted files: ${event.files.map(f => f.path).join(', ')}`);
		})
	);

	context.subscriptions.push(...disposables);
}

export function deactivate() { }
