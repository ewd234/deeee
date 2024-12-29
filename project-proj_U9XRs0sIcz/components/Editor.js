function Editor({ code, onCodeChange }) {
    const editorRef = React.useRef(null);

    const handleInput = (e) => {
        try {
            onCodeChange(e.target.innerText);
        } catch (error) {
            reportError(error);
        }
    };

    React.useEffect(() => {
        try {
            if (editorRef.current) {
                editorRef.current.innerHTML = highlightCode(code);
            }
        } catch (error) {
            reportError(error);
        }
    }, [code]);

    return (
        <div data-name="editor-container" className="editor-container h-full flex">
            <div data-name="line-numbers" className="line-numbers p-4 text-right">
                {code.split('\n').map((_, i) => (
                    <div data-name="line-number" key={i}>{i + 1}</div>
                ))}
            </div>
            <div
                data-name="code-editor"
                ref={editorRef}
                className="code-editor flex-1 p-4 outline-none"
                contentEditable
                onInput={handleInput}
                spellCheck="false"
            />
        </div>
    );
}

function highlightCode(code) {
    try {
        // Basic Python syntax highlighting
        return code
            .replace(/\b(def|class|import|from|return|if|else|while|for|in|as|try|except|finally)\b/g, '<span class="syntax-keyword">$1</span>')
            .replace(/(#.*)$/gm, '<span class="syntax-comment">$1</span>')
            .replace(/(['"])(.*?)\1/g, '<span class="syntax-string">$1$2$1</span>')
            .replace(/\b(\d+)\b/g, '<span class="syntax-number">$1</span>');
    } catch (error) {
        reportError(error);
        return code;
    }
}
