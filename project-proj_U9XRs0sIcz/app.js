function App() {
    const [code, setCode] = React.useState('# Start coding with voice commands\n');
    const [isListening, setIsListening] = React.useState(false);

    const handleVoiceCommand = (command) => {
        try {
            setCode(prevCode => prevCode + command);
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div data-name="app" className="h-screen flex flex-col bg-gray-900">
            <Toolbar 
                isListening={isListening} 
                onVoiceCommand={handleVoiceCommand}
            />
            <div data-name="main-content" className="flex-1 overflow-hidden">
                <Editor 
                    code={code} 
                    onCodeChange={setCode}
                />
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
