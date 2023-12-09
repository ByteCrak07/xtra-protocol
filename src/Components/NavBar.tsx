import { ConnectButton } from '@rainbow-me/rainbowkit';
import './NavBar.css'
import Image from 'next/image';

export default function () {
  return (
    <div className='Nav'>
      <div className='left-nav'>
        {/* <Image src='/assets/XtraLogo.png' width={30} height={10}  alt='X-tra' /> */}
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