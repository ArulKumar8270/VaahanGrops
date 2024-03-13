import { CCard } from "@coreui/react";
import React from "react";
import Table from "../../../../components/Table";
import {
  useGetDealerUserQuery,
  useGetDisbutersQuery,
  useGetSubDistributerQuery,
} from "../../../../Services/sales";

const DealerSale = () => {
  const {
    data: dealerData,
    error: dealerError,
    isLoading: dealerLoading,
    refetch: dealerRefetch,
  } = useGetDealerUserQuery();

  console.log(dealerData, "manifactDatamanifactDatamanifactData");

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
      key: "manufacturer_id",
    },
    {
      key: "distributor_id",
    },
    {
      key: "sub_distributor_id",
    },
  ];
  return (
    <CCard className="mb-4 pb-3 p-3">
      {dealerData && (
        <Table column={columns} data={dealerData?.["data"]?.data} />
      )}
    </CCard>
  );
};

export default DealerSale;
