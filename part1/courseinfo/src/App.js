import Header from "./components/Header"
import Content from "./components/Content"
import Total from "./components/Total"

const App = () => {
  return (
    <div>
      <Header title = "'Half Stack application development'"/>
      <Content/>
      <Total title = "Number of exercises"/>
    </div>
  )
}

export default App
