import { CCard } from "@coreui/react";
import React from "react";
import Table from "../../../../components/Table";
import {
  useGetDealerSaleQuery,
  useGetDealerUserQuery,
  useGetDisbutersQuery,
  useGetSubDistributerQuery,
} from "../../../../Services/sales";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Store";

const DealerSale = () => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  let urlString: any = `dealerName=${userInfo?.name}`;
  let distributer: any = `distributer_name=${userInfo?.name}`;
  let subDistributer: any = `sub_distributer_name=${userInfo?.name}`;
  let urlStringAdmin: any = `distributer_name=`;

  let finalQUery =
    userInfo?.role_id === "4"
      ? urlString
      : userInfo?.role_id === "3"
      ? subDistributer
      : userInfo?.role_id === "2"
      ? distributer
      : urlStringAdmin;

  const {
    data: dealerData,
    error: dealerError,
    isLoading: dealerLoading,
    refetch: dealerRefetch,
  } = useGetDealerSaleQuery(finalQUery);

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
      key: "manufacturer_name",
    },
    {
      key: "distributer_name",
    },
    {
      key: "sub_distributer_name",
    },
  ];
  return (
    <CCard className="mb-4 pb-3 p-3">
      {dealerData && (
        <Table
          column={columns}
          data={dealerData?.["data"]?.data}
          TableName={"Dealer Sale"}
        />
      )}
    </CCard>
  );
};

export default DealerSale;
