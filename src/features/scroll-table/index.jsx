import { useEffect, useState } from "react";
import FilterTable from "../../components/filter-table";
import { AxiosInstance } from "../../api/AxiosInstance";
import GridTable from "../../components/grid-table";
import BadgeStatus from "../../components/badge-status";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { fetchData, toggleSpinner } from "../../redux/scrollSlice";

const SCROLLCOLUMNS = [
  { display: "Scroll", key: "id" },
  { display: "Deposit Date", key: "deposit_date" },
  { display: "No. of Receipts", key: "no_of_receipts" },
  { display: "Amount", key: "scroll_amount" },
  { display: "Employee ID", key: "employee_id" },
  { display: "Approval Status", key: "status_options" },
  { display: "Bank Name", key: { bank: "name" } },
];

export default function ScrollTable() {
  const [options, setOptions] = useState({ option1: [], option2: [] });
  const [originalData, setOriginalData] = useState([]);
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    label1: "",
    label2: "",
    label3: "",
  });
  const fetchOptions = async () => {
    try {
      const response = await AxiosInstance.get("scrollOptions");
      setOptions({
        option1: response.data.status,
        option2: response.data.type,
      });
      setFilters({
        ...filters,
        label1: response.data.status[1],
        label2: response.data.type[0],
      });
    } catch (error) {
      setOptions({ option1: [], option2: [] });
    }
  };

  const fetchGridData = async () => {
    dispatch(toggleSpinner());
    const response = await AxiosInstance.get("/scrollData");
    dispatch(fetchData(response.data));
    setOriginalData(response.data);
    dispatch(toggleSpinner());
  };
  useEffect(() => {
    fetchOptions();
    fetchGridData();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };
  const templateDate = (item) => {
    const date = new Date(item.deposit_date);
    return <td>{date.toLocaleDateString()}</td>;
  };
  const templateStatus = (item) => {
    return <BadgeStatus status={item.status_options} />;
  };
  const templateID = (item) => {
    return (
      <td>
        <Link
          className="text-primary text-decoration-none"
          to={`/scrolls/${item.id}`}
        >
          {item.id}
        </Link>
      </td>
    );
  };
  return (
    <>
      <FilterTable
        label2="Type"
        option1={options.option1}
        option2={options.option2}
        filters={filters}
        handleChange={handleChange}
      />
      <GridTable
        columnConfig={SCROLLCOLUMNS}
        dataSource={originalData}
        template={{
          deposit_date: templateDate,
          status_options: templateStatus,
          id: templateID,
        }}
      />
    </>
  );
}
