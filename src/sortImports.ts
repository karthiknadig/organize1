export function processText(content: string): string {
    const lines = content.split(/\r?\n/);
    const parts = lines[0].split(",");
    return `${parts[0]}\r\nimport ${parts[1]}\r\n\r\n`;
}
