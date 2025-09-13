import React, { useEffect, useState } from "react";
import FilterTable from "../../components/filter-table";
import { AxiosInstance } from "../../api/AxiosInstance";

export default function ScrollTable() {
  const [options, setOptions] = useState({ option1: [], option2: [] });
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
  useEffect(() => {
    fetchOptions();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
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
    </>
  );
}
