import { CCard } from "@coreui/react";
import React from "react";
import Table from "../../../../components/Table";
import {
  useGetDisbutersQuery,
  useGetSubDistributerQuery,
  useGetSubDistributerSaleQuery,
} from "../../../../Services/sales";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Store";

const SubDistributorSale = () => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  let urlString: any = `dealerName=${userInfo?.name}`;
  let distributer: any = `distributer_name=${userInfo?.name}`;
  let urlStringAdmin: any = `distributer_name=`;
  let finalQUery =
    userInfo?.role_id === "3"
      ? urlString
      : userInfo?.role_id === "2"
      ? distributer
      : urlStringAdmin;
  const {
    data: subDistributerSaleData,
    error: subDistributerError,
    isLoading: subDistributerLoading,
    refetch: subDistributerRefetcg,
  } = useGetSubDistributerSaleQuery(finalQUery);

  React.useEffect(() => {
    subDistributerRefetcg();
  }, []);

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
        <Table
          column={columns}
          data={subDistributerSaleData?.["data"]?.data}
          TableName={"SubDistributor Sale"}
        />
      )}
    </CCard>
  );
};

export default SubDistributorSale;
