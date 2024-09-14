
import './index.css'
import details from "./details"
import logo from "./img/logo.png"

function App() {
  const detailEl = details.map((data, key) => {
    return (
        <div className="card" key={key}>
        <img className="card-img item" src={data.imageUrl} width={150}/>
        <h2 className="card-head item"> {data.name} 
          <p>{data.details}</p>
          <p>Price: {data.price}LAK / person</p>
        </h2>
        </div>
    )
  })
  return (
    <div className="container">
      <div className="head">
        <img className="logo" src={logo} width={100}/>
        <h1 className="sub-head">ONLINE TOUR INFORMATION</h1>
      </div>
     {detailEl} 
    </div>
  )
}

export default App
