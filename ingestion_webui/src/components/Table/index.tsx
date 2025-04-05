import { Props } from "./types"

function Table<T>({ data, loading, columns }: Props<T>) {
    if (loading) return (<div className="text-center text-gray-500 p-4">Loading...</div>)

    console.log(data);
    return (
        <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 rounded-lg">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        {columns.map(({ name, key }) => (
                            <th key={key} className="py-2 px-4 border-b">{name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan={columns.length} className="text-center py-4 text-gray-500">
                                No data available
                            </td>
                        </tr>
                    ) : (
                        data.map((obj, id) => (
                            <tr key={id} className="border-b hover:bg-gray-50">
                                {columns.map(({ render, key }) => (
                                    <td key={key} className="py-2 px-4">{render(obj)}</td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table
