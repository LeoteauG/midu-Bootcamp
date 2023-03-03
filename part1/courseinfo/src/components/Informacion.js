import { useState, useEffect } from "react";
import Nota from "./Nota";

const Informacion = () =>{
    const [note, useNote] = useState([])
    const [newTitle,useNewtitle] = useState("")
    const [newDescript, useNewDescript] = useState("")

    //'https://wft-geo-db.p.rapidapi.com/v1/geo/cities'
    //
    const  NuevoTitulo = (e) =>{
        useNewtitle(e.target.value)    
    }
    const  NuevaDescription = (e) =>{
        useNewDescript(e.target.value)    
    }
    
    const NotaCreadaSubmit = (e) =>{
    e.preventDefault()
    const Notes = {
        id: note.length + 1,
        title: newTitle,
        body: newDescript
    };
    useNote([...note,Notes])
    useNewtitle("")
    useNewDescript("")
    }
    useEffect( () =>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res =>  res.json())
            .then(res =>{
                Cambio(res)
                console.log(res)
            })
        },[])
        
        
        const Cambio = (props) => {
            useNote(props)
          }

    
    
    return(     
        <>
            <ol>
                {
                    note.map((note) =>{
                        return(
                            <Nota  key ={note.id}  {...note}/>
                        )
                    }) 
                }
            </ol>
            <form onSubmit={NotaCreadaSubmit}>
                <label>Nombre</label>
                <input onChange = {NuevoTitulo} type="text" value = {newTitle || ""}/>
                <br/>
                <label>Descripción</label>
                <input onChange={NuevaDescription} type="text" value = {newDescript || ""}/>
                <button>Enviar</button>
            </form>
        </>
    )
    
}

export default Informacion;

