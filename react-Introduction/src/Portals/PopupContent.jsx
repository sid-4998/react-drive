import { createPortal } from 'react-dom'

export default function PopupContent({ copied }) {

    return createPortal(
       <section>
            {copied && (
                <div style={{ position: 'absolute', top: '3rem' }}>Copied to clipboard</div>
            )}
       </section>,
       document.getElementById('popup')
    )
}