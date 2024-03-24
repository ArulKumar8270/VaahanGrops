import { CCard } from "@coreui/react";
import React from "react";
import Table from "../../../../components/Table";
import {
  useGetDisbutersQuery,
  useGetDisbutersSaleQuery,
} from "../../../../Services/sales";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Store";

const DistributorSale = () => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  let urlString: any = `dealerName=${userInfo?.name}`;
  let urlStringAdmin: any = `dealerName=`;
  let finalQUery = userInfo?.role_id === "2" ? urlString : urlStringAdmin;

  const {
    data: distributerSaleData,
    error: distributerError,
    isLoading: distributerLoading,
    refetch: distributerRefetch,
  } = useGetDisbutersSaleQuery(finalQUery);

  console.log(
    distributerSaleData,
    "manifactDatamanifactDatamanifactData",
    userInfo
  );

  React.useEffect(() => {
    distributerRefetch();
  }, []);

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
        <Table column={columns} data={distributerSaleData?.["data"]?.data} TableName={"Distributer Sale"}/>
      )}
    </CCard>
  );
};

export default DistributorSale;
