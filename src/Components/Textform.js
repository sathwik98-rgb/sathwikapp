import React,{useState} from 'react'

export default function Textform(prop) {
    const [text,settext]=useState("enter text");
    const [itl,setitl]=useState("")

    const Handlerup=()=>{
        settext(text.toUpperCase());
        prop.showalert("To UPPERCASE","success")
    }

    const Handleonchange=(event)=>{
            settext(event.target.value);
    }

    const Handlerlo=()=>{
        settext(text.toLowerCase());
        setitl("fst-italic");
        prop.showalert("to lower case","success")
    }

    const Handlerit =()=>{
        
        setitl("fst-italic");
    }

    const normal =()=>{
      setitl("");
    }

  return (
    <>
    <div  >
        <h1 className="text-center">{prop.title}</h1>
          <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
              <textarea className={`form-control ${itl}`} value={text} onChange={Handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
          </div>

          <button className="btn btn-primary " onClick={Handlerup}>Convert into UPPERCASE</button>
          <button className="btn btn-primary mx-1" onClick={Handlerlo}>Convert into lowercase</button>
          <button className="btn btn-primary mx-1" onClick={Handlerit}>Italic</button>
          <button className="btn btn-primary mx-1" onClick={normal}>noon-italic</button>


    </div>
    <div className='my-3'>
          <h4>{text.split(" ").length} words and {text.length} letters</h4>
          <h2>preview</h2>
          <p >{text}</p>
      
    </div>
    </>
  )
}
