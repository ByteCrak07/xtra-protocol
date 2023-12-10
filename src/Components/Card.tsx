'use client';
import './Card.css'
import React from 'react'
import { Orbitron, Montserrat } from "next/font/google";
import { fetchMarketData } from '../../public/InchData';
import { useState } from 'react';

const orbitron = Orbitron({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });


interface Card{
    title:String,
    button:String,
    // ():void 
}

const coins = [
    ['eth',0, 3],
    ['matic',1, 2],
    ['link',0, 0.6]
]
const borrow_coins = [
    ['eth',100, 4],
    ['matic',100, 3],
    ['link',100, 2]
]
const chains = [
    ['Ethereum'],
    ['polygon']
]

export default function Card({title, button}:Card) {
    const [input, setInput] = useState(0);
  return (
    <div className={`card ${montserrat.className}`}>
        <div className="part1">
            <h2>{title}</h2>

            <div  className='select-container'>
            <form action="">
                <select name="cars" id="select">
                   { chains.map((coin,index)=>{
                        return <option value={coin[0]}>{coin[0]}</option>
                   })}
                </select>
                {/* <br><br>
                <input type="submit" value="Submit" /> */}
                </form>

                <div className="input-container">
                    {button=='Supply'? 
                    // <input type='text' placeholder='0' onChange={e=>{
                    //     setInput(Number(e.target.value));
                    //     console.log(e.target.value);
                    // }} /> 
                    <div className='amount'></div>
                    :
                    <div className='amount'> 
                        <p>Amount : {input * fetchMarketData('usdt')}</p>
                        {/* <button >Borrow </button> */}
                    </div>
                    }
                </div>
                
            </div>

            <div className='coin-head'  style={{maxWidth:'65%',justifyContent:'space-evenly',fontWeight:500}}>
                <p>Asset</p>
                <p>{button=='Supply'? 'Balance':'Available'}</p>
                <p>APY</p>
                    
            </div>
            {
                button == 'Supply'?

                coins.map((coin,index)=>{
                    
                    return <div className='coin-data'>
                        <h3>{coin[0]}</h3>
                        <div className='coin'>
                            <p>{coin[1]}</p>
                            <p>{coin[2]}%</p>
                        </div>
                       
                        <button className={button=='Supply'?'supplyButton button':'borrowButton button'}>{button}</button>
                    </div>;
                    
                })
                :
                borrow_coins.map((coin,index)=>{
                    
                    return <div className='coin-data'>
                        <h3>{coin[0]}</h3>
                        <div className='coin'>
                            <p>{coin[1]}</p>
                            <p>{coin[2]}%</p>
                        </div>
                       
                        <button className={button=='Supply'?'supplyButton button':'borrowButton button'}>{button}</button>
                    </div>;
                    
                })
            }
        </div>
    </div>
  )
}
 