import Image from 'next/image'
import HeaderItem from './HeaderItem'

function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center'>
        <div className='flex flex-grow justify-evenly max-w-2xl'>
            <HeaderItem title='HOME' />
            <HeaderItem title='TRENDING' />
            <HeaderItem title='SEARCH' />
            <HeaderItem title='ACCOUNT' />
        </div>

        <h2 className='text-2xl'>HULU</h2>
    </header>
  )
}

export default Header