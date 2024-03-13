import {
  CCard,
  CCardHeader,
  CForm,
  CFormInput,
  CCardBody,
  CButton,
  CFormSelect,
  CCardTitle,
  CCardText,
  CBadge,
} from "@coreui/react";
import React from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import axios from "axios";
import {
  useCreateDistributerMutation,
  useCreateSubDistributerMutation,
} from "../../Services/user";
import NewEntry from "./NewEntry";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import {
  useGetDealerUserQuery,
  useGetDisbutersQuery,
  useGetSubDistributerQuery,
} from "../../Services/sales";
const Dashboard = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const formData = watch();
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  const [createDistributerSale] = useCreateDistributerMutation();
  const [createSubDistributerSale] = useCreateSubDistributerMutation();
  const [roleList, setRoleList] = React.useState(null);

  console.log(roleList, "roleList45234");

  const {
    data: distributerData,
    error: distributerError,
    isLoading: distributerLoading,
    refetch: distributerRefetch,
  } = useGetDisbutersQuery();

  const {
    data: subDistributerData,
    error: subDistributerError,
    isLoading: subDistributerLoading,
    refetch: subDistributerRefetcg,
  } = useGetSubDistributerQuery();

  const {
    data: dealerData,
    error: dealerError,
    isLoading: dealerLoading,
    refetch: dealerRefetch,
  } = useGetDealerUserQuery();

  React.useEffect(() => {
    if (distributerData || subDistributerData || dealerData) {
      if (userInfo?.role_id === "1") {
        setRoleList(distributerData?.["data"]?.data);
      } else if (userInfo?.role_id === "2") {
        setRoleList(subDistributerData?.["data"]?.data);
      } else if (userInfo?.role_id === "3") {
        setRoleList(dealerData?.["data"]?.data);
      }
    }
  }, [distributerData, subDistributerData, dealerData]);

  console.log(formData, "324532", userInfo);
  const onSubmit = async (data) => {
    console.log(data, "data32452345");
    let tempResult;
    try {
      if (userInfo?.role_id === "1") {
        tempResult = await createDistributerSale(formData);
      } else if (userInfo?.role_id === "2") {
        tempResult = await createSubDistributerSale(formData);
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };
  return userInfo?.role_id === "4" ? (
    <NewEntry />
  ) : (
    <>
      <CCard className="mb-4 pb-3 p-3 pt-0">
        <div className="d-flex justify-content-between py-3">
          <CBadge color="dark">Stock Available</CBadge>
          <CBadge color="info">New Sales</CBadge>
        </div>
        <div className="row">
          <>
            {[
              {
                color: "black",
                textColor: "black",
                title: "Red20mm",
                value: 34123,
                background:
                  "linear-gradient(45deg, #e76b6b30 46%, #f80000b8 41%)",
              },
              {
                color: "black",
                textColor: "black",
                title: "White20mm",
                value: 34123,
                background:
                  "linear-gradient(45deg, #9d9d9d30 46%, #919191 41%)",
              },
              {
                color: "black",
                textColor: "black",
                title: "Red50mm",
                value: 34123,
                background:
                  "linear-gradient(45deg, #e76b6b30 46%, #f80000b8 41%)",
              },
              {
                color: "black",
                textColor: "black",
                title: "white50mm",
                value: 34123,
                background:
                  "linear-gradient(45deg, #9d9d9d30 46%, #919191 41%)",
              },
              {
                color: "black",
                textColor: "black",
                title: "Yellow50mm",
                value: 34123,
                background:
                  "linear-gradient(45deg, #cddc3957 46%, #ffc107c2 41%)",
              },
              {
                color: "black",
                textColor: "black",
                title: "Red80mm",
                value: 34123,
                background:
                  "linear-gradient(45deg, #e76b6b30 46%, #f80000b8 41%)",
              },
              {
                color: "black",
                textColor: "black",
                title: "White80mm",
                value: 34123,
                background:
                  "linear-gradient(45deg, #9d9d9d30 46%, #919191 41%)",
              },
              {
                color: "black",
                textColor: "black",
                title: "Yellow80mm",
                value: 34123,
                background:
                  "linear-gradient(45deg, #cddc3957 46%, #ffc107c2 41%)",
              },
              {
                color: "black",
                textColor: "black",
                title: "Class3",
                value: 34123,
                background:
                  "linear-gradient(45deg, #3399ff63 46%, #03a9f48c 41%)",
              },
              {
                color: "black",
                textColor: "black",
                title: "Class4",
                value: 34123,
                background:
                  "linear-gradient(45deg, #3399ff63 46%, #03a9f48c 41%)",
              },
              {
                color: "black",
                textColor: "black",
                title: "Hologram",
                value: 34123,
                background:
                  "linear-gradient(45deg, #3399ff63 46%, #03a9f48c 41%)",
              },
            ].map((item, index) => (
              <div className="col-sm-2">
                <CCard
                  textColor={item.textColor}
                  className={`mb-3 border-${item.color} countCard`}
                  style={{ maxWidth: "18rem", background: item.background }}
                  key={index}
                >
                  <CCardHeader>{item?.title}</CCardHeader>
                  <CCardBody>
                    <CCardText className="text-black">{item?.value}</CCardText>
                  </CCardBody>
                </CCard>
              </div>
            ))}
          </>
        </div>
      </CCard>

      <CForm onSubmit={handleSubmit(onSubmit)}>
        <CCard className="mb-4 pb-3 py-1">
          <CCardHeader className="py-3 detailHeader">
            <div className="d-flex justify-content-between">
              <Controller
                name="user_type"
                control={control}
                rules={{ required: "Type is required" }}
                defaultValue=""
                render={({ field }) => (
                  <CFormSelect
                    aria-label="Default select"
                    className="border form-control w-25"
                    {...field}
                  >
                    {roleList &&
                      roleList?.map((item) => {
                        return <option value={item?.id}>{item?.name}</option>;
                      })}
                  </CFormSelect>
                )}
              />
              {errors.user_type && (
                <div className="text-danger">{"Field is required"}</div>
              )}
              <h6 className="text-center">
                <b>Manufacturer</b> <br /> Arul Kumar
              </h6>
              <h6 className="text-center">
                <b>Distributor </b>
                <br /> Arul Kumar
              </h6>
              <h6 className="text-center">
                <b>Sub Distributor</b> <br /> Arul Kumar
              </h6>
              <h6>
                <b>Phone :</b> 8270564998
                <br />
                <b>Date :</b> {new Date().toLocaleDateString()}
              </h6>
            </div>
          </CCardHeader>
          <CCardBody>
            <div className="row">
              <div className="col-sm-12">
                <div className="row mt-4">
                  <div className="col-sm-4 mb-3">
                    <Controller
                      name="red20mm"
                      control={control}
                      rules={{ required: "Field is required" }}
                      defaultValue=""
                      render={({ field }) => (
                        <CFormInput
                          className="border text-danger"
                          label="RED 20MM"
                          {...field}
                          type="text"
                          placeholder="0"
                        />
                      )}
                    />
                    {errors.red20mm && (
                      <div className="text-danger">{"Field is required"}</div>
                    )}
                  </div>

                  <div className="col-sm-4 mb-3">
                    <Controller
                      name="white20mm"
                      control={control}
                      rules={{ required: "Field is required" }}
                      defaultValue=""
                      render={({ field }) => (
                        <CFormInput
                          className="border"
                          label="WHITE 20MM"
                          {...field}
                          type="text"
                          placeholder="0"
                        />
                      )}
                    />
                    {errors.white20mm && (
                      <div className="text-danger">{"Field is required"}</div>
                    )}
                  </div>
                  <div className="col-sm-4 mb-3">
                    <Controller
                      name="red50mm"
                      control={control}
                      rules={{ required: "Field is required" }}
                      defaultValue=""
                      render={({ field }) => (
                        <CFormInput
                          className="border text-danger"
                          label="RED 50MM"
                          {...field}
                          type="text"
                          placeholder="0"
                        />
                      )}
                    />
                    {errors.red50mm && (
                      <div className="text-danger">{"Field is required"}</div>
                    )}
                  </div>
                  <div className="col-sm-4 mb-3">
                    <Controller
                      name="white50mm"
                      control={control}
                      rules={{ required: "Field is required" }}
                      defaultValue=""
                      render={({ field }) => (
                        <CFormInput
                          className="border"
                          label="WHITE 50MM"
                          {...field}
                          type="text"
                          placeholder="0"
                        />
                      )}
                    />
                    {errors.white50mm && (
                      <div className="text-danger">{"Field is required"}</div>
                    )}
                  </div>
                  <div className="col-sm-4 mb-3">
                    <Controller
                      name="yellow50mm"
                      control={control}
                      rules={{ required: "Field is required" }}
                      defaultValue=""
                      render={({ field }) => (
                        <CFormInput
                          className="border text-warning"
                          label="YELLOW 50MM"
                          {...field}
                          type="text"
                          placeholder="0"
                        />
                      )}
                    />
                    {errors.white50mm && (
                      <div className="text-danger">{"Field is required"}</div>
                    )}
                  </div>

                  <div className="col-sm-4 mb-3">
                    <Controller
                      name="redRefelctor80mm"
                      control={control}
                      rules={{ required: "Field is required" }}
                      defaultValue=""
                      render={({ field }) => (
                        <CFormInput
                          className="border text-danger"
                          label="RED 80MM"
                          {...field}
                          type="text"
                          placeholder="0"
                        />
                      )}
                    />
                    {errors.redRefelctor80mm && (
                      <div className="text-danger">{"Field is required"}</div>
                    )}
                  </div>
                  <div className="col-sm-4 mb-3">
                    <Controller
                      name="mmWhiteReflector80"
                      control={control}
                      rules={{ required: "Field is required" }}
                      defaultValue=""
                      render={({ field }) => (
                        <CFormInput
                          className="border"
                          label="WHITE 80MM"
                          {...field}
                          type="text"
                          placeholder="0"
                        />
                      )}
                    />
                    {errors.mmWhiteReflector80 && (
                      <div className="text-danger">{"Field is required"}</div>
                    )}
                  </div>
                  <div className="col-sm-4 mb-3">
                    <Controller
                      name="yellowRefelctor80mm"
                      control={control}
                      rules={{ required: "Field is required" }}
                      defaultValue=""
                      render={({ field }) => (
                        <CFormInput
                          className="border text-warning"
                          label="YLLOW 80MM"
                          {...field}
                          type="text"
                          placeholder="0"
                        />
                      )}
                    />
                    {errors.yellowRefelctor80mm && (
                      <div className="text-danger">{"Field is required"}</div>
                    )}
                  </div>

                  <div className="col-sm-4 mb-3">
                    <Controller
                      name="class3"
                      control={control}
                      rules={{ required: "Field is required" }}
                      defaultValue=""
                      render={({ field }) => (
                        <CFormInput
                          className="border"
                          label="CLASS 3"
                          {...field}
                          type="text"
                          placeholder="0"
                        />
                      )}
                    />
                    {errors.class3 && (
                      <div className="text-danger">{"Field is required"}</div>
                    )}
                  </div>
                  <div className="col-sm-4 mb-3">
                    <Controller
                      name="class4"
                      control={control}
                      rules={{ required: "Field is required" }}
                      defaultValue=""
                      render={({ field }) => (
                        <CFormInput
                          className="border"
                          label="CLASS 4"
                          {...field}
                          type="text"
                          placeholder="0"
                        />
                      )}
                    />
                    {errors.white50mm && (
                      <div className="text-danger">{"Field is required"}</div>
                    )}
                  </div>
                  <div className="col-sm-4 mb-3">
                    <Controller
                      name="hologram"
                      control={control}
                      rules={{ required: "Field is required" }}
                      defaultValue=""
                      render={({ field }) => (
                        <CFormInput
                          className="border"
                          label="HOLOGRAM"
                          {...field}
                          type="text"
                          placeholder="0"
                        />
                      )}
                    />
                    {errors.hologram && (
                      <div className="text-danger">{"Field is required"}</div>
                    )}
                  </div>
                  <div className="col-sm-4 mb-3">
                    <Controller
                      name="invoiceNumber"
                      control={control}
                      rules={{ required: "Field is required" }}
                      defaultValue=""
                      render={({ field }) => (
                        <CFormInput
                          className="border"
                          label="INVOICE NUMBER"
                          {...field}
                          type="text"
                          placeholder="0"
                        />
                      )}
                    />
                    {errors.invoiceNumber && (
                      <div className="text-danger">{"Field is required"}</div>
                    )}
                  </div>
                </div>
                <div className="col-sm-12 text-center">
                  <CButton variant="outline" type="submit">
                    Submit
                  </CButton>
                </div>
              </div>
            </div>
          </CCardBody>
        </CCard>
      </CForm>
      <CCard className="mb-4 pb-3 p-3 pt-0">
        <div className="d-flex justify-content-between py-3">
          <CBadge color="dark">Stock</CBadge>
          <CBadge color="info">Dealer</CBadge>
        </div>
        <div className="row">
          <>
            {[
              {
                color: "black",
                textColor: "black",
                title: "Red20mm",
                value: 34123,
                background:
                  "linear-gradient(45deg, #e76b6b30 46%, #f80000b8 41%)",
              },
              {
                color: "black",
                textColor: "black",
                title: "White20mm",
                value: 34123,
                background:
                  "linear-gradient(45deg, #9d9d9d30 46%, #919191 41%)",
              },
              {
                color: "black",
                textColor: "black",
                title: "Red50mm",
                value: 34123,
                background:
                  "linear-gradient(45deg, #e76b6b30 46%, #f80000b8 41%)",
              },
              {
                color: "black",
                textColor: "black",
                title: "white50mm",
                value: 34123,
                background:
                  "linear-gradient(45deg, #9d9d9d30 46%, #919191 41%)",
              },
              {
                color: "black",
                textColor: "black",
                title: "Yellow50mm",
                value: 34123,
                background:
                  "linear-gradient(45deg, #cddc3957 46%, #ffc107c2 41%)",
              },
              {
                color: "black",
                textColor: "black",
                title: "Red80mm",
                value: 34123,
                background:
                  "linear-gradient(45deg, #e76b6b30 46%, #f80000b8 41%)",
              },
              {
                color: "black",
                textColor: "black",
                title: "White80mm",
                value: 34123,
                background:
                  "linear-gradient(45deg, #9d9d9d30 46%, #919191 41%)",
              },
              {
                color: "black",
                textColor: "black",
                title: "Yellow80mm",
                value: 34123,
                background:
                  "linear-gradient(45deg, #cddc3957 46%, #ffc107c2 41%)",
              },
              {
                color: "black",
                textColor: "black",
                title: "Class3",
                value: 34123,
                background:
                  "linear-gradient(45deg, #3399ff63 46%, #03a9f48c 41%)",
              },
              {
                color: "black",
                textColor: "black",
                title: "Class4",
                value: 34123,
                background:
                  "linear-gradient(45deg, #3399ff63 46%, #03a9f48c 41%)",
              },
              {
                color: "black",
                textColor: "black",
                title: "Hologram",
                value: 34123,
                background:
                  "linear-gradient(45deg, #3399ff63 46%, #03a9f48c 41%)",
              },
            ].map((item, index) => (
              <div className="col-sm-2">
                <CCard
                  textColor={item.textColor}
                  className={`mb-3 border-${item.color} countCard`}
                  style={{ maxWidth: "18rem", background: item.background }}
                  key={index}
                >
                  <CCardHeader>{item?.title}</CCardHeader>
                  <CCardBody>
                    <CCardText className="text-black">{item?.value}</CCardText>
                  </CCardBody>
                </CCard>
              </div>
            ))}
          </>
        </div>
      </CCard>
    </>
  );
};

export default Dashboard;
