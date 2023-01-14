export const Collection = ({category,content,id,date}) => {

      return (
          <li key={id}>
              <h3>{content}</h3>
              <p>{date}</p>
              <p>{category}</p>
              <br/>
          </li>
      )
}
