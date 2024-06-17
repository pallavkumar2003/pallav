import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clickked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase", "Success")
  }
  const handleLoClick = ()=>{
    console.log("Uppercase was clickked");
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase", "Success")
  }
  const handleOnChange= (event)=>{
    console.log("On change");
    setText(event.target.value);
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleCopy =()=>{
    let text= document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const [text, setText] = useState('Enter text here');
  return (  
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox"  rows="10"></textarea>
  </div>
  <button className='btn btn-primary mx-2'  onClick={handleUpClick}>Convert to UpperCase</button>
  <button className='btn btn-primary'  onClick={handleLoClick}>Convert to LowerCase</button>
  <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
  <button type="submit" onClick={handleCopy} className="btn btn-warning mx-2 my-2">Copy Text</button>
  </div>
  <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>Your text  summary </h1>
    <p>{text.split(" ").length-1} words and {text.length}</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter your text to preview it here"}</p>
  </div>
  </>
  )
}

