import { CButton, CCard } from "@coreui/react";
import React from "react";
import Table from "../../../../components/Table";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Store";
import { useGetRegistrationsSaleByUserQuery } from "../../../../Services/sales";
import { Link } from "react-router-dom";

const Entries = () => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  let dealerName: any = `dealer_name=${userInfo?.name}`;
  let distributer: any = `distributer_name=${userInfo?.name}`;
  let subDistributer: any = `sub_distributer_name=${userInfo?.name}`;
  let urlStringAdmin: any = `dealerName=`;
  let finalQUery =
    userInfo?.role_id === "2"
      ? distributer
      : userInfo?.role_id === "3"
      ? subDistributer
      : userInfo?.role_id === "4"
      ? dealerName
      : urlStringAdmin;

  const {
    data: registerrationSaleData,
    error: registerationError,
    isLoading: registerrationLoding,
    refetch: registerrationRefetch,
  } = useGetRegistrationsSaleByUserQuery(urlStringAdmin);

  console.log(registerrationSaleData, "registerrationSaleData45234");

  const columns = [
    { key: "Action" },
    { key: "date" },
    { key: "dealername" },
    { key: "certificateno" },
    { key: "vehicleregno" },
    { key: "vehiclemanufacturingyear" },
    { key: "chassisnum" },
    { key: "engineno" },
    { key: "vehiclemake" },
    { key: "vehiclemodel" },
    { key: "ownername" },
    { key: "address" },
    { key: "phoneo" },
    { key: "rto" },
    { key: "hologramnum" },
    { key: "oldcertificatenum" },
    { key: "oldcertificaterto" },
    { key: "oldcertificatedate" },
    { key: "remarks" },
    { key: "red20mm" },
    { key: "white20mm" },
    { key: "red50mm" },
    { key: "white50mm" },
    { key: "yellow50mm" },
    { key: "red80circularreflector" },
    { key: "white80circularreflector" },
    { key: "yellow80circularreflector" },
    { key: "class3" },
    { key: "class4" },
    { key: "hologram" },
    { key: "invoice_number" },
    { key: "rcimage" },
    { key: "frontimage" },
    { key: "backimage" },
    { key: "leftimage" },
    { key: "rightimage" },
    { key: "distributer_id" },
    { key: "subdistributer_id" },
    { key: "dealer_id" },
    { key: "manufacturer_name" },
    { key: "distributer_name" },
    { key: "sub_distributer_name" },
    { key: "dealer_name" },
    { key: "manufacturer_name" },
  ];

  const scopedColumns = {
    Action: (item) => {
      console.log(item, "item4523452");
      return (
        <td>
          <Link to={`/ViewEntries/${item?.id}`}>
            <CButton variant="ghost" type="button">
              View
            </CButton>
          </Link>
        </td>
      );
    },
  };

  return (
    <CCard className="mb-4 pb-3 p-3">
      {registerrationSaleData && (
        <Table
          column={columns}
          data={registerrationSaleData?.["data"]?.data}
          scopedColumns={scopedColumns}
          TableName={"Dealer Sale"}
        />
      )}
    </CCard>
  );
};

export default Entries;
