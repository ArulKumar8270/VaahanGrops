import { CCard } from "@coreui/react";
import React from "react";
import Table from "../../../../components/Table";
import {
  useGetDealerUserQuery,
  useGetDisbutersQuery,
  useGetSubDistributerQuery,
} from "../../../../Services/sales";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Store";

const Dealer = () => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  let urlString: any = `distributor_name=${userInfo?.name}`;
  let urlStringSubDis: any = `sub_distributor_name=${userInfo?.name}`;
  let urlStringAdmin: any = `distributor_name=`;
  let finalQUery =
    userInfo?.role_id === "1"
      ? urlStringAdmin
      : userInfo?.role_id === "2"
      ? urlString
      : urlStringSubDis;

  console.log(userInfo, "userInfo423");
  const {
    data: dealerData,
    error: dealerError,
    isLoading: dealerLoading,
    refetch: dealerRefetch,
  } = useGetDealerUserQuery(finalQUery);

  React.useEffect(() => {
    dealerRefetch();
  }, []);

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
      key: "distributor_name",
    },
    {
      key: "manufacturer_name",
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
          TableName={"Dealer"}
        />
      )}
    </CCard>
  );
};

export default Dealer;
