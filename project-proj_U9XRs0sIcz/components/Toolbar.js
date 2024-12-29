function Toolbar({ isListening, onVoiceCommand }) {
    return (
        <div data-name="toolbar" className="toolbar flex items-center justify-between p-4">
            <div data-name="toolbar-left" className="flex items-center space-x-4">
                <h1 data-name="app-title" className="text-xl font-bold text-white">
                    Voice Code Editor
                </h1>
            </div>
            <VoiceControl 
                isListening={isListening} 
                onSpeechResult={onVoiceCommand} 
            />
        </div>
    );
}
