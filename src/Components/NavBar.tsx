import { ConnectButton } from '@rainbow-me/rainbowkit';
import './NavBar.css'
import { Orbitron, Montserrat } from "next/font/google";
import Image from 'next/image';

const orbitron = Orbitron({ subsets: ["latin"] });
export default function Navbar() {
  return (
    <div className={`Nav ${orbitron.className}`}>
      <div className='left-nav'>

        <div id='logo'>X-TRA</div>
        <div className='dashboard-nav'>Dashboard</div>
      </div>
      <div className='right-nav'>
        <ConnectButton />
      </div>
    </div>

  )
}
// 15E265F-A885-4692-BB6B-DE4EEDE2B439