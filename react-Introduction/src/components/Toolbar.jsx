// Reading props in event Handlers

const Toolbar = () => {
    return (
        <Button message = 'Playing!'>
            play
        </Button>
    )
}

const Button = ({message, children}) => {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    )
}

export  default Toolbar;