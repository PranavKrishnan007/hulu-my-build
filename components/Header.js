import Image from 'next/image';
import HeaderItem from './headerItem'
import { HomeIcon , BadgeCheckIcon, CollectionIcon, LightningBoltIcon, UsersIcon, SearchIcon } from '@heroicons/react/outline';

function Header(){
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title='HOME' Icon={HomeIcon}/>
        <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>
        <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
        <HeaderItem title='COLLECTIONS' Icon={CollectionIcon}/>
        <HeaderItem title='SEARCH' Icon={SearchIcon}/>
        <HeaderItem title='ACCOUNT' Icon={UsersIcon}/>
      </div>
      <Image
        className='object-contain'
        src='https://links.papareact.com/ua6' alt='hulu logo' width={200} height={200} />
    </header>
  )
}

export default Header;