import { useContext } from 'react';
import { Table } from '../../../components';
import searchContext from '../context';
import { Log } from '../../../interfaces/schema';
import { formatDate } from '../../../utils/dateUtils';

const SearchTable = () => {
    const { data, loading } = useContext(searchContext);

    const columns = [
        {
            key: 'level',
            name: 'Type',
            render: (obj: Log) => obj.level,
        },
        {
            key: 'message',
            name: 'Message',
            render: (obj: Log) => obj.message,
        },
        {
            key: 'resourceId',
            name: 'Resource ID',
            render: (obj: Log) => obj.resourceId,
        },
        {
            key: 'timestamp',
            name: 'Timestamp',
            render: (obj: Log) => formatDate(obj.timestamp),
        },
        {
            key: 'commit',
            name: 'Commit Message',
            render: (obj: Log) => obj.commit,
        },
    ];

    return <Table<Log> loading={loading} data={data} columns={columns} />;
};

export default SearchTable;
