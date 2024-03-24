import { CButton, CCard } from "@coreui/react";
import React from "react";
import Table from "../../../../components/Table";
import {
  useGetDisbutersQuery,
  useGetSubDistributerQuery,
} from "../../../../Services/sales";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Store";

const SubDistributor = () => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  let urlString: any = `distributer_name=${userInfo?.userId}`;
  let urlStringAdmin: any = `distributer_name=`;
  let finalQUery = userInfo?.role_id === "2" ? urlString : urlStringAdmin;
  const {
    data: subDistributerData,
    error: subDistributerError,
    isLoading: subDistributerLoading,
    refetch: subDistributerRefetcg,
  } = useGetSubDistributerQuery(finalQUery);

  React.useEffect(() => {
    subDistributerRefetcg();
  }, []);

  console.log(
    subDistributerData,
    urlString,
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
      key: "manufacturer_name",
    },
    {
      key: "distributor_name",
    },
  ];

  return (
    <CCard className="mb-4 pb-3 p-3">
      {subDistributerData && (
        <Table
          TableName={"Sub Distributor"}
          column={columns}
          data={subDistributerData?.["data"]?.data}
          scopedColumns={null}
        />
      )}
    </CCard>
  );
};

export default SubDistributor;
