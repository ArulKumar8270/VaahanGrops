import { CCard } from "@coreui/react";
import React from "react";
import Table from "../../../../components/Table";
import {
  useGetDisbutersQuery,
  useGetDisbutersSaleQuery,
} from "../../../../Services/sales";

const DistributorSale = () => {
  const {
    data: distributerSaleData,
    error: distributerError,
    isLoading: distributerLoading,
    refetch: distributerRefetch,
  } = useGetDisbutersSaleQuery();

  console.log(distributerSaleData, "manifactDatamanifactDatamanifactData");

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
      {distributerSaleData && (
        <Table column={columns} data={distributerSaleData?.["data"]?.data} />
      )}
    </CCard>
  );
};

export default DistributorSale;
