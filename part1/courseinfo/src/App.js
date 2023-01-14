import Header from "./components/Header"
import Content from "./components/Content"
import Total from "./components/Total"
import Clicksused from "./components/State"
import {Collection} from "./components/Collection"
import { useState } from "react"
const App = () => {

  const notes = [
    {
      id: 1,
      content: 'HTML is easy',
      date: '2019-05-30T17:30:31.098Z',
      important: true,
      category: ["a","b"]
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      date: '2019-05-30T18:39:34.091Z',
      important: false,
    },
    {
      id: 3,
      content: 'GET and POST are the most important methods of HTTP protocol',
      date: '2019-05-30T19:20:14.298Z',
      important: true,
    },
    ]

    const [note,useNote] = useState(notes)
    const [newNote,useNewnote] = useState(' ')

    if(notes.length === 0){
      return "No hay nada"
    }

    const NotaCreadaSubmit = (event) =>{
      event.preventDefault()
      const Notes = {
        id: note.length + 1,
        content: newNote,
        date: new Date().toISOString(),
        important: Math.random < 0.5
      }
      useNote([...note,Notes])
      useNewnote(' ')
    }

    const NuevaNota = (e) =>{
      useNewnote(e.target.value)
    }
    console.log(note)
  return (
    <div>
      <Header title = "'Half Stack application development'"/>
      <Content/>
      <Total title = "Number of exercises"/>
      <hr/>
      <Clicksused/>
      <hr/>
      <ol>
        {
          note.map((note) =>{
            return (<Collection {...note} key={note.id}/>)
          })
        } 
      </ol>
        <form onSubmit={NotaCreadaSubmit}>
          <label>Nombre</label>
          <input onChange = {NuevaNota} type="text" value = {newNote}></input>
          <button>Enviar</button>
        </form>
    </div>
  )
}

export default App
