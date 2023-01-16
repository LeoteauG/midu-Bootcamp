import { useState, useEffect } from "react";
import Nota from "./Nota";

const Informacion = () =>{
    const [note, useNote] = useState([])
    const [newNote,useNewnote] = useState()
    

    //'https://wft-geo-db.p.rapidapi.com/v1/geo/cities'
    //
    useEffect( () =>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response =>  response.json())
            .then(json =>{
                Cambio(json)
                console.log(json)
            })
        },[])
        
        
        const Cambio = (props) => {
            useNote(props)
          }

    const NuevaNota = (e) =>{
            useNewnote(e.target.value)    
        }

        const NotaCreadaSubmit = (event) =>{
            event.preventDefault()
            const Notes = {
                id: note.length + 1,
                title: newNote,
                body: newNote
            };
            useNote(...note,Notes)
            useNewnote("")
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
            <input onChange = {NuevaNota} type="text" value = {newNote || ""}/>
            <button>Enviar</button>
        </form>
        </>
    )
    
}
export default Informacion;

