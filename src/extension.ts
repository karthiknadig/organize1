import * as vscode from 'vscode';
import { CodeActionProviderA } from './codeAction1';
import { CodeActionProviderB } from './codeAction2';

export function getDocumentSelector(): vscode.DocumentSelector {
    return [
              { scheme: 'file', language: 'python' },
              { scheme: 'untitled', language: 'python' },
              { scheme: 'vscode-notebook', language: 'python' },
              { scheme: 'vscode-notebook-cell', language: 'python' },
          ];
}

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.languages.registerCodeActionsProvider(getDocumentSelector(), new CodeActionProviderA(), {
			providedCodeActionKinds: [vscode.CodeActionKind.SourceOrganizeImports],
		}),
		vscode.languages.registerCodeActionsProvider(getDocumentSelector(), new CodeActionProviderB(), {
			providedCodeActionKinds: [vscode.CodeActionKind.SourceOrganizeImports],
		}),
	);
}
