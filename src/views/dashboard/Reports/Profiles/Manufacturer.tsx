import { CCard } from "@coreui/react";
import React from "react";
import Table from "../../../../components/Table";
import { useGetManufacturerQuery } from "../../../../Services/sales";

const Manufacturer = () => {
  const {
    data: manifactData,
    error: manifactError,
    isLoading: manifactLoading,
    refetch,
  } = useGetManufacturerQuery();

  React.useEffect(() => {
    refetch();
  }, []);
  console.log(manifactData, "manifactDatamanifactDatamanifactData");

  const columns = [
    {
      key: "name",
    },
    {
      key: "phone_number",
    },
    {
      key: "email_id",
    },
    {
      key: "manufacturer_name",
    },
    {
      key: "quantity",
    },
    {
      key: "product_name",
    },
    {
      key: "quantity_price",
    },
  ];
  return (
    <CCard className="mb-4 pb-3 p-3">
      {manifactData && (
        <Table column={columns} data={manifactData?.["data"]?.data} TableName={"Manufacturers"}/>
      )}
    </CCard>
  );
};

export default Manufacturer;
