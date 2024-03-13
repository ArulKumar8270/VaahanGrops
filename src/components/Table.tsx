import { CSmartTable } from "@coreui/react-pro";
const Table = ({ column, data }) => {
  return (
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
      tableBodyProps={{
        className: "align-middle",
      }}
    />
  );
};

export default Table;
