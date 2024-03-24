import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CIcon from "@coreui/icons-react";
import { cilDrop, cilSpeedometer } from "@coreui/icons";
import { CNavGroup, CNavItem } from "@coreui/react";
import { CSidebar, CSidebarBrand, CSidebarNav } from "@coreui/react";
import { AppSidebarNav } from "./AppSidebarNav";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

// sidebar nav config
import navigation from "../_nav";
import { RootState } from "../Store";
import { updateSideNav } from "../Slices/sidebarShow";

const AppSidebar = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  console.log(userInfo, "userInfo2452134");
  const menuList = [
    {
      component: CNavItem,
      name: "Dashboard",
      to: "/dashboard",
      icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
      display: true,
    },

    {
      component: CNavItem,
      name: "Add Profile",
      to: "/companyAdd",
      icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
      badge: {
        color: "info",
        text: "NEW",
      },
      display:
        userInfo?.role_id !== "4" && userInfo?.role_id !== "3" ? true : false,
    },
    {
      component: CNavGroup,
      name: "Profiles",
      to: "/manufacturer",
      display:
        userInfo?.role_id !== "4" && userInfo?.role_id !== "3" ? true : false,
      items: [
        {
          component: CNavItem,
          name: "Manufacturer",
          to: "/manufacturer",
          display: userInfo?.role_id === "1" ? true : false,
        },
        {
          component: CNavItem,
          name: "Distributor",
          to: "/distributor",
          display: userInfo?.role_id === "1" ? true : false,
        },
        {
          component: CNavItem,
          name: "Sub Distributor",
          to: "/subDistributor",
          display:
            userInfo?.role_id === "1" || userInfo?.role_id === "2"
              ? true
              : false,
        },
        {
          component: CNavItem,
          name: "Dealer",
          to: "/dealer",
          display:
            userInfo?.role_id === "1" ||
            userInfo?.role_id === "2" ||
            userInfo?.role_id === "3"
              ? true
              : false,
        },
      ],
    },
    {
      component: CNavGroup,
      name: "Sales",
      to: "/Sales",
      display: true,
      items: [
        {
          component: CNavItem,
          name: "Entries",
          to: "/Entries",
          display: true,
        },
        {
          component: CNavItem,
          name: "Distributor",
          to: "/distributorSale",
          display: userInfo?.role_id === "1" ? true : false,
        },
        {
          component: CNavItem,
          name: "Sub Distributor",
          to: "/subDistributorSale",
          display:
            userInfo?.role_id === "1" || userInfo?.role_id === "2"
              ? true
              : false,
        },
        {
          component: CNavItem,
          name: "Dealer",
          to: "/Entries",
          display:
            userInfo?.role_id === "1" || userInfo?.role_id === "2"
              ? true
              : false,
        },
      ],
    },
  ];

  const sidebarShow = useSelector(
    (state: RootState) => state.sidebarShow.sidebarShow
  );

  return (
    <CSidebar
      position="fixed"
      visible={true}
      onVisibleChange={(visible) => {
        dispatch(updateSideNav(visible));
      }}
    >
      <CSidebarBrand className="d-none d-md-flex countCard">
        <p className="logo-text">VAAHAN SAFETY</p>
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={menuList} />
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
