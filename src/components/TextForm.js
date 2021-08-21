import React ,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log(" Uppercase was clicked." + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase.","Success");
    }
    const handleLoClick = ()=>{
        console.log(" Lowercase was clicked." + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase.","Success");

    }
    const handleClearClick = ()=>{
        console.log(" Clear Text was clicked." + text);
        let newText = '';
        setText(newText);
        props.showAlert("Cleared.","Success");

    }
    const handleTrimClick = ()=>{
        console.log(" Trim Text was clicked." + text);
        let newText = text.trim();
        setText(newText);
        props.showAlert("Trim was Applied.","Success");

    }
    const capitalize = () => {
        
        let firstchar = text.charAt(0); // storing the first char of the string
        let newText= firstchar.toUpperCase(); // converting that to uppercase
        setText(newText+text.slice(1)); // printing it with rest excluding the first char by using slice
        props.showAlert("Converted to Capitalize.","Success");


    }
    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard.","Success");

    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed.","Success");

    }
     const handleOnChange = (event)=>{
        console.log("On Change.");
        setText(event.target.value);
    }
    const [text ,setText] = useState('');
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" value={text} placeholder="Enter text here." onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to Uppercase </button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to Lowercase </button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleTrimClick}>Trim Text </button>
            <button className="btn btn-primary my-2 mx-2" onClick={capitalize}>Capitalize </button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text </button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces </button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear Text </button>
        </div>

        <div className="container my-3">
            <h2>Your text Summary</h2>
            <p>{text.split(" ").length - 1} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes for Reading</p>
            <h4>Preview</h4>
            <p>{text.length>0?text:"Enter something to Preview it here!"}</p>
        </div>
        </>
    )
}
