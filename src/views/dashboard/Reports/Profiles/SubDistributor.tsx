import { CCard } from "@coreui/react";
import React from "react";
import Table from "../../../../components/Table";
import {
  useGetDisbutersQuery,
  useGetSubDistributerQuery,
} from "../../../../Services/sales";

const SubDistributor = () => {
  const {
    data: subDistributerData,
    error: subDistributerError,
    isLoading: subDistributerLoading,
    refetch: subDistributerRefetcg,
  } = useGetSubDistributerQuery();

  console.log(subDistributerData, "manifactDatamanifactDatamanifactData");

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
      key: "quantity",
    },
    {
      key: "manufacturer_id",
    },
    {
      key: "distributor_id",
    },
    {
      key: "product_name",
    },
  ];
  return (
    <CCard className="mb-4 pb-3 p-3">
      {subDistributerData && (
        <Table column={columns} data={subDistributerData?.["data"]?.data} />
      )}
    </CCard>
  );
};

export default SubDistributor;
