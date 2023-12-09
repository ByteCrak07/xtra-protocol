import { ConnectButton } from '@rainbow-me/rainbowkit';
import './NavBar.css'
import Image from 'next/image';

export default function () {
  return (
    <div className='Nav'>
      <div className='left-nav'>
        <Image src='/assets/XtraLogo.png' width={30} height={10}  alt='X-tra' />
        <div className='dashboard-nav'>Dashboard</div>
      </div>
      <div className='right-nav'>
          <ConnectButton />
      </div>
    </div>
    
  )
}
