import { useState } from "react"
import PopupContent from "./PopupContent";

export default function CopyInput() {
    const [inputValue, setInputValue] = useState('');
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(inputValue).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 5000);
        })
    }

    return (
        <>
            <input 
            type="text" 
            value={inputValue} 
            onChange={(event) => setInputValue(event.target.value)}/>
            <button onClick={handleCopy}>Copy</button>
            <PopupContent copied={isCopied}/>
        </>
    )
}