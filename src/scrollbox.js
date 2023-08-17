import TextBox from "./text";
import './text.css'

function Scrollbox({textEntries}){

    const data = textEntries.map((text,index) => <TextBox text={text} key={index}/>)
    console.log(textEntries)
    return (
        <div className="scrollbox">
           {data}
        </div>

    )
}

export default Scrollbox;