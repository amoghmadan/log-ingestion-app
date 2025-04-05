import { useState, useContext } from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import searchContext from "../../containers/SeachLogs/context";

const DatePicker = () => {
    const { setFilters, filters } = useContext(searchContext);

    const [value, setValue] = useState<DateValueType>({
        startDate: null,
        endDate: null
    });

    const handleChange = (newValue: DateValueType) => {
        setValue(newValue);

        const formattedDates = [
            newValue?.startDate ? new Date(newValue.startDate).toISOString() : null,
            newValue?.endDate ? new Date(newValue.endDate).toISOString() : null
        ];
        setFilters((prevFilters) => ({
            ...prevFilters,
            dates: formattedDates
        }));
    };

    console.log("date", { filters });


    return (
        <div className="w-[500px] mt-6 mb-6 ml-10">
            <Datepicker
                primaryColor={"red"}
                inputClassName="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={value}
                onChange={handleChange}
                showShortcuts={true}
            />
        </div>
    );
};

export default DatePicker;
