import Header from "./components/Header"
import Content from "./components/Content"
import Total from "./components/Total"
import Clicksused from "./components/State"
import Colection from "./components/collection"

const App = () => {
  return (
    <div>
      <Header title = "'Half Stack application development'"/>
      <Content/>
      <Total title = "Number of exercises"/>
      <hr/>
      <Clicksused/>
      <hr/>
      <Colection/>
    </div>
  )
}

export default App
