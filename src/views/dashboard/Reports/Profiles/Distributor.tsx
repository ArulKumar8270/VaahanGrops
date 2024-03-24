import { CCard } from "@coreui/react";
import React from "react";
import Table from "../../../../components/Table";
import { useGetDisbutersQuery } from "../../../../Services/sales";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Store";

const Distributor = () => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);

  const {
    data: distributerData,
    error: distributerError,
    isLoading: distributerLoading,
    refetch: distributerRefetch,
  } = useGetDisbutersQuery();

  React.useEffect(() => {
    distributerRefetch();
  }, []);
  console.log(
    distributerData,
    "manifactDatamanifactDatamanifactData",
    userInfo
  );

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
      key: "manufacturer_name",
    },
  ];
  return (
    <CCard className="mb-4 pb-3 p-3">
      {distributerData && (
        <Table column={columns} data={distributerData?.["data"]?.data} TableName={"Distributer"}/>
      )}
    </CCard>
  );
};

export default Distributor;
