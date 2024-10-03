import SelectField from "./selectfield";
import TextField from "./textfiled";
import "./table.scss";
import SearchIcon from "../icons/searchicon";
import { useMemo, useState } from "react";
import Pagination from "./pagination";

export interface Column<T> {
    header: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    accessor: keyof T | ((_row: T) => any);
}
interface TableProps<T> {
    columns: Column<T>[];
    data: T[];
    enableAction: boolean;
}
const Table = <T extends object>({
    columns,
    data,
    enableAction,
}: TableProps<T>) => {
    const [pageSize, setPageSize] = useState<number>(5);
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * pageSize;

    const memorizeData = useMemo(() => {
        return data.slice(startIndex, startIndex + pageSize);
    }, [data, pageSize, startIndex]);

    return (
        <div className="table-main-container">
            <div className="table-filter-container">
                <div className="table-filter-left-section">
                    <div>
                        <SelectField
                            options={[{ label: "Status:All", value: 1 }]}
                        />
                    </div>
                    <div>
                        <TextField
                            placeholder="Search..."
                            icon={<SearchIcon />}
                            iconPosition="end"
                        />
                    </div>
                </div>
                <div className="table-right-section">
                    <SelectField
                        options={[
                            {
                                label: "Filter by date range",
                                value: 1,
                            },
                        ]}
                    />
                </div>
            </div>
            <div className="table-body-content">
                <table>
                    <thead>
                        <tr>
                            {columns.map((column, index) => (
                                <th key={index}>{column.header}</th>
                            ))}
                            {enableAction && <th>action</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {memorizeData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {columns.map((column, colIndex) => (
                                    <td key={colIndex}>
                                        {typeof column.accessor === "function"
                                            ? column.accessor(row)
                                            : row[column.accessor]}
                                    </td>
                                ))}
                                {enableAction && (
                                    <td
                                        style={{
                                            color: "rgba(15, 96, 255, 1)",
                                            cursor: "pointer",
                                        }}
                                    >
                                        View Details
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="footer-table-container">
                <div className="page-size-select-container">
                    <p>Showing</p>
                    <SelectField
                        onChanges={setPageSize}
                        value={pageSize}
                        sx={{
                            width: "fit-content",
                            border: "1px solid rgba(233, 231, 253, 1)",
                            color: "#000",
                        }}
                        options={[
                            {
                                label: "5",
                                value: 5,
                            },
                            {
                                label: "10",
                                value: 10,
                            },
                            {
                                label: "100",
                                value: 100,
                            },
                        ]}
                    />
                    <p>of {data.length ?? 0}</p>
                </div>

                <div className="pagination-container">
                    <Pagination
                        totalPages={data.length ?? 0}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Table;
