import React from "react";
import {
  CAvatar,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import { cilLockLocked } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

import avatar9 from "./../../assets/images/avatars/9.jpg";
import { useDispatch } from "react-redux";
import { login } from "../../Slices/loginSlice";

const AppHeaderDropdown = () => {
  const dispatch = useDispatch();
  const logOut = () => {
    localStorage.removeItem("role_id");
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    dispatch(login(null));
  };

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle className="py-0" caret={false}>
        <CAvatar src={avatar9} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0">
        <CDropdownHeader className="bg-light fw-semibold py-2">
          Account
        </CDropdownHeader>

        <CDropdownItem onClick={() => logOut()}>
          <CIcon icon={cilLockLocked} className="me-2" />
          Lock Account
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppHeaderDropdown;
