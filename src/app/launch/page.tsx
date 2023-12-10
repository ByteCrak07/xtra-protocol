const {Web3} = require('web3');
const { BigNumber } = require('ethers');

import NavBar from "@/Components/NavBar";
import Card from "@/Components/Card";
import { Orbitron, Montserrat } from "next/font/google";
import './App.css';
import { fetchMarketData } from "../../../public/InchData";

const orbitron = Orbitron({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });


export default function page() {

  return (
    <div className={`Launch ${orbitron.className}`}>

      <NavBar />

      <div className={`head ${montserrat.className}`}>
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
