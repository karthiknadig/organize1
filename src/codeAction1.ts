import * as vscode from "vscode";
import { processText } from "./sortImports";

export class CodeActionProviderA implements vscode.CodeActionProvider {
    public provideCodeActions(
        document: vscode.TextDocument,
        _range: vscode.Range,
        context: vscode.CodeActionContext,
        _token: vscode.CancellationToken
    ): Promise<vscode.CodeAction[]> {
        if (
            context.only &&
            context.only.contains(vscode.CodeActionKind.SourceOrganizeImports)
        ) {
            const action = new vscode.CodeAction(
                "CodeActionProviderA",
                vscode.CodeActionKind.SourceOrganizeImports
            );
            action.edit = new vscode.WorkspaceEdit();
            action.edit.replace(
                document.uri,
                new vscode.Range(
                    new vscode.Position(0, 0),
                    new vscode.Position(document.lineCount, 0)
                ),
                processText(document.getText())
            );
            return Promise.resolve([action]);
        }
        return Promise.resolve([]);
    }
}
