const Nota = (note) =>{
    return(
        <li key = {note.id}>
            <h1>{note.title}</h1>
            <p>{note.body}</p>
        </li>
        )
}
export default Nota