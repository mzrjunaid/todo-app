import { FaMagnifyingGlass } from 'react-icons/fa6'
import CustomButton from './CustomButton'

const SearchInput = () => {
    return (
        <form className='rounded-full flex flex-row gap-2 focus:border-blue-700 relative items-center'>
            <input
                type='serach'
                title='Search Todo'
                placeholder='Search ToDo...'
                className='input__field'
            />
            <CustomButton btnStyle='absolute' btnTitle='Search' btnType="submit">
                <FaMagnifyingGlass size={18} />
            </CustomButton>
        </form>
    )
}

export default SearchInput