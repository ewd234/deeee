function startSpeechRecognition(onResult) {
    try {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onresult = (event) => {
            const result = event.results[event.results.length - 1];
            if (result.isFinal) {
                onResult(result[0].transcript);
            }
        };

        recognition.onerror = (event) => {
            reportError(new Error(`Speech recognition error: ${event.error}`));
        };

        recognition.start();
        window.currentRecognition = recognition;
    } catch (error) {
        reportError(error);
    }
}

function stopSpeechRecognition() {
    try {
        if (window.currentRecognition) {
            window.currentRecognition.stop();
        }
    } catch (error) {
        reportError(error);
    }
}
