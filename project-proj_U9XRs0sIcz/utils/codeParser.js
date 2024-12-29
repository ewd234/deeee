function processVoiceCommand(transcript) {
    try {
        // Convert common voice commands to Python code
        const commandMap = {
            'define function': 'def',
            'create class': 'class',
            'if statement': 'if',
            'else statement': 'else:',
            'print': 'print(',
            'new line': '\n',
            'indent': '    ',
            'for loop': 'for',
            'while loop': 'while',
            'import': 'import',
            'return': 'return',
        };

        let processedText = transcript.toLowerCase();
        
        // Replace commands with actual Python syntax
        Object.entries(commandMap).forEach(([command, code]) => {
            processedText = processedText.replace(new RegExp(command, 'g'), code);
        });

        return processedText;
    } catch (error) {
        reportError(error);
        return transcript;
    }
}
