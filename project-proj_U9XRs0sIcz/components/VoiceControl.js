function VoiceControl({ onSpeechResult, isListening }) {
    const startRecording = async () => {
        try {
            await startSpeechRecognition((result) => {
                onSpeechResult(processVoiceCommand(result));
            });
        } catch (error) {
            reportError(error);
        }
    };

    const stopRecording = () => {
        try {
            stopSpeechRecognition();
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div data-name="voice-control" className="flex items-center space-x-4">
            <button
                data-name="voice-toggle"
                onClick={isListening ? stopRecording : startRecording}
                className={`px-4 py-2 rounded-md ${
                    isListening 
                    ? 'bg-red-500 hover:bg-red-600 recording-indicator' 
                    : 'bg-blue-500 hover:bg-blue-600'
                } text-white`}
            >
                {isListening ? 'Stop Recording' : 'Start Recording'}
            </button>
            {isListening && (
                <span data-name="recording-status" className="text-red-500">
                    Recording...
                </span>
            )}
        </div>
    );
}
