import { useEffect, useState } from "react"
import Card from "./components/Card"
import data from "./format.json"
import Header from "./components/Header"

function App() {

  const [ships, setShips] = useState(data)
  const [ship, setShip] = useState({})
  const [category, setCategory] = useState("spacetugs")

  const [count, setCount] = useState(0)

  useEffect(() => {
    setShip(ships[`${category}`][count])
  }, [count, category])

  function add() {
    if (count < ships[`${category}`].length - 1) {
      setCount(prevCount => prevCount + 1)
    } else {
      setCount(0)
    }
  }
  function sub() {
    if (count <= 0) {
      setCount(ships[`${category}`].length - 1)
    } else {
      setCount(prev => prev - 1)
    }
  }

  return (
    <div className="App">
        <Header value={category} onInputChange={setCategory} name={ship.name} />
        <Card ship={ship} sub={sub} add={add}/>
    </div>
  )
}

export default App
