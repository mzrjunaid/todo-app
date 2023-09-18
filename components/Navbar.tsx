import Link from 'next/link'
import SearchInput from './SearchInput'

const Navbar = () => {
    return (
        <nav className='flex justify-evenly items-center bg-orange-200 p-3 overflow-hidden'>
            <div>
                <Link href={'/'} className='text-2xl font-extrabold font-montserrat text-gray-500'><span className='text-gray-950'>J{'</>'}CODE</span> _ ToDo</Link>
            </div>
            {/* <SearchInput /> */}
            <div className='px-3'>
                <ul className='flex flex-row gap-3 justify-between items-center'>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'#'}>Sign In</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar