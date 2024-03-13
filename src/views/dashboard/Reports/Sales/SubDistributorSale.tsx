import { CCard } from "@coreui/react";
import React from "react";
import Table from "../../../../components/Table";
import {
  useGetDisbutersQuery,
  useGetSubDistributerQuery,
  useGetSubDistributerSaleQuery,
} from "../../../../Services/sales";

const SubDistributorSale = () => {
  const {
    data: subDistributerSaleData,
    error: subDistributerError,
    isLoading: subDistributerLoading,
    refetch: subDistributerRefetcg,
  } = useGetSubDistributerSaleQuery();

  console.log(subDistributerSaleData, "manifactDatamanifactDatamanifactData");

  const columns = [
    {
      key: "dealerName",
    },
    {
      key: "red20mm",
    },
    {
      key: "red50mm",
    },
    {
      key: "white20mm",
    },
    {
      key: "white50mm",
    },
    {
      key: "yellow50mm",
    },
    {
      key: "yellow80mm",
    },
    {
      key: "redReflector80mm",
    },
    {
      key: "whiteReflector80mm",
    },
    {
      key: "yellowReflector80mm",
    },
    {
      key: "class3",
    },
    {
      key: "class4",
    },
    {
      key: "hologram",
    },
    {
      key: "invoiceNumber",
    },
  ];
  return (
    <CCard className="mb-4 pb-3 p-3">
      {subDistributerSaleData && (
        <Table column={columns} data={subDistributerSaleData?.["data"]?.data} />
      )}
    </CCard>
  );
};

export default SubDistributorSale;
