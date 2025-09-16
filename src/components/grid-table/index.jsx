import React from "react";

export default function GridTable({ columnConfig, dataSource = [], template }) {
  const columnIterate = (item) => {
    return columnConfig.map((header) => {
      //matching with template, if match then fn
      if (template[header.key]) {
        return template[header.key](item);
      }

      if (typeof header.key === "string") {
        return <td>{item[header.key]}</td>;
      }
      //optional about suppose will be in objecy
      if (typeof header.key === "object" && header.key !== null) {
        const [parentKey, childKey] = Object.entries(header.key)[0];
        return <td key={header.display}>{item[parentKey]?.[childKey]}</td>;
      }
      //default
      return <td key={header.display}></td>;
    });
  };
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover table-striped">
        <thead className="table-dark">
          <tr>
            {columnConfig.map((header) => (
              <>
                <th>{header.display}</th>
              </>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.length === 0 && (
            <tr className="text-center">
              <td colSpan={columnConfig.length}>No records Found!</td>
            </tr>
          )}
          {/**iterate row */}
          {dataSource.map((item) => (
            <tr>
              {/** iterate column dynamically to show */}
              {columnIterate(item)}
            </tr>
          ))}
          {/* <td>SC001</td>
            <td>2025-09-01</td>
            <td>5</td>
            <td>₹12,500</td>
            <td>EMP101</td>
            <td>
              <span className="badge bg-success">Approved</span>
            </td> */}
        </tbody>
      </table>
    </div>
  );
}
