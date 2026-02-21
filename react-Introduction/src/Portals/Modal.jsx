import { createPortal } from "react-dom"

export default function Modal({ isOpen, children }) {

    return createPortal(
        <section>
            {isOpen && (
                <div style={{
                    position: 'fixed',
                    height: '100vh',
                    width: '100vw',
                    top: 0,
                    botton: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div style={{
                        padding: '1rem',
                        border: '0.1rem solid black',
                        borderRadius: '1rem',
                        backgroundColor: 'wheat'
                    }}>
                        {children}
                    </div>
                </div>
            )}
        </section>,
        document.body
    )
}