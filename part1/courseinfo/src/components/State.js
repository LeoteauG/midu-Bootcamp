import {useState} from "react"

const Clicksused = () =>{
    
    const [click,useClick] = useState({
        clickleft: 0,
        clickright: 0
    })

    const [clicks, useClicks] = useState(0)

    const CambioClickLeft = () =>{
        useClick({
            ...click,
            clickleft: click.clickleft + 1,
        })
        useClicks(clicks + 1)

    }
    const CambioClickRight = () =>{
        useClick({
            
            ...click,
            clickright: click.clickright + 1
        })
        useClicks(clicks + 1)
    }
   
    return(
        <>
            {click.clickleft}
            <button onClick = {CambioClickLeft}>Left</button>
            <button onClick = {CambioClickRight}>Right</button>
            {click.clickright}
            <p>{clicks}</p>
        </>
    )
}
export default Clicksused