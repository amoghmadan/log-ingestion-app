import { Navbar } from '../../components'
import DatePicker from '../../components/DatePicker'
import SearchProvider from './provider'
import SearchTable from './SeachTable'

const SearchLogs = () => {
    return (
        <SearchProvider>
            <Navbar />
            <div className='flex items-center ml-6'>
                <p className='text-lg font-bold'>Filters</p>
                <DatePicker />
            </div>
            <SearchTable />
        </SearchProvider>
    )
}

export default SearchLogs
