
function ButtonInline(){

    const styles={
        backgroundColor: "green",
        color: "white",
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        fontStyle:"bold",
        fontSize: "16px",
        padding: "10px 20px",
        borderRadius: "25px",
        cursor: "pointer",
    }
    return(
        <button style={styles}>Click me!</button>
    );
}

export default ButtonInline