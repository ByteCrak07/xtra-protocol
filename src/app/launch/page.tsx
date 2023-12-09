import NavBar from "@/Components/NavBar";
import Card from "@/Components/Card";
import './App.css';

export default function page() {
  return (
    <div className="Launch">

      <NavBar />

      <div className="head">
        <h1>Ethereum Market</h1>
        <div className="small-text">
          <div>
            <h3>Net worth</h3>
            <h4>$0</h4>
          </div>
          <div>
            <h3>Net APY</h3>
            <h4>__</h4>
          </div>
        </div>
      </div>

      <div className="card-container">
          <Card title='Assets to supply' button='Supply'/>
          <Card title='Assets to borrow' button='Borrow' />
      </div>

    </div>
  )
}
