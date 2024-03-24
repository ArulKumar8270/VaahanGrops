import { CHeader, CHeaderDivider, CHeaderText } from "@coreui/react";
import { CHeaderBrand, CSmartTable } from "@coreui/react-pro";
const Table = ({ column, data, scopedColumns = null, TableName }) => {
  return (
    <>
      <CHeaderBrand className="mb-3 bg-body-tertiary width-max px-3 py-1 rounded-1">{TableName}</CHeaderBrand>
      <CSmartTable
        activePage={1}
        columns={column}
        columnFilter
        items={data}
        itemsPerPage={50}
        pagination
        tableProps={{
          className: "add-this-class width-max",
          responsive: true,
          striped: true,
          hover: true,
        }}
        scopedColumns={scopedColumns}
        tableBodyProps={{
          className: "align-middle",
        }}
      />
    </>
  );
};

export default Table;
