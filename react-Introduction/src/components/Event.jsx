// React events

function Football() {
    const shoot = (a, b) => {
        alert(a, b.type);
    }

    return (
        <button onClick={(event) => shoot('Great shot', event)}>Take the shot</button>
    );
}

export default Football;