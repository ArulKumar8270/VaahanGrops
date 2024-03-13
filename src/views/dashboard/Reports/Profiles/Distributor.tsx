import { CCard } from "@coreui/react";
import React from "react";
import Table from "../../../../components/Table";
import { useGetDisbutersQuery } from "../../../../Services/sales";

const Distributor = () => {
  const {
    data: distributerData,
    error: distributerError,
    isLoading: distributerLoading,
    refetch: distributerRefetch,
  } = useGetDisbutersQuery();

  console.log(distributerData, "manifactDatamanifactDatamanifactData");

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
      key: "address",
    },
    {
      key: "user_name",
    },
    {
      key: "manufacturer_id",
    },
  ];
  return (
    <CCard className="mb-4 pb-3 p-3">
      {distributerData && (
        <Table column={columns} data={distributerData?.["data"]?.data} />
      )}
    </CCard>
  );
};

export default Distributor;
