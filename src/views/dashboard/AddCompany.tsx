import {
  CCard,
  CCardHeader,
  CForm,
  CFormInput,
  CCardBody,
  CButton,
  CFormSelect,
} from "@coreui/react";
import React from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import axios from "axios";
import {
  useCreateDealerMutation,
  useCreateDistributerMutation,
  useCreateManufacturerMutation,
  useCreateSubDistributerMutation,
  useGetByDistributerUserNameQuery,
  useGetBySubDistributerUserNameQuery,
  useRegisterUserMutation,
} from "../../Services/user";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../Store";
import {
  useGetDealerUserQuery,
  useGetDisbutersQuery,
  useGetManufacturerQuery,
  useGetSubDistributerQuery,
} from "../../Services/sales";

const AddCompany = () => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const formData = watch();
  const [createManufact] = useCreateManufacturerMutation();
  const [createDistributer] = useCreateDistributerMutation();
  const [createSubDistributer] = useCreateSubDistributerMutation();
  const [createDealer] = useCreateDealerMutation();
  const [registerApi] = useRegisterUserMutation();
  const navigate = useNavigate();
  console.log(formData, "324532");

  const {
    data: byDistributerUser,
    error: byDistributerUserError,
    refetch: byDistributerUserRefetch,
  } = useGetByDistributerUserNameQuery(userInfo?.name);

  console.log(
    userInfo,
    "userInfo34523",
    byDistributerUser?.["data"]?.data?.[0]
  );

  const {
    data: manifactData,
    error: manifactError,
    isLoading: manifactLoading,
    refetch,
  } = useGetManufacturerQuery();

  const {
    data: distributerUserData,
    error: distributerUserError,
    isLoading: distributerLoading,
    refetch: distributerUserRefetch,
  } = useGetDisbutersQuery();

  const {
    data: subDistributerData,
    error: subDistributerError,
    isLoading: subDistributerLoading,
    refetch: subDistributerRefetch,
  } = useGetSubDistributerQuery();

  const {
    data: bySubDistributerUser,
    error: bySUbDistributerUserError,
    refetch: bySubDistributerUserRefetch,
  } = useGetBySubDistributerUserNameQuery(userInfo?.name);

  React.useEffect(() => {
    bySubDistributerUserRefetch();
    subDistributerRefetch();
    byDistributerUserRefetch();
    refetch();
  }, []);

  console.log(bySubDistributerUser, "bySubDistributerUser345234");

  const onSubmit = async (data) => {
    let tempResult: any;
    let tempFormData = {
      ...formData,
      ...(userInfo?.role_id === "2"
        ? {
            manufacturer_name:
              byDistributerUser?.["data"]?.data?.[0]?.manufacturer_name,
            distributor_name: userInfo?.name,
          }
        : {}),
      ...(userInfo?.role_id === "3"
        ? {
            manufacturer_name:
              bySubDistributerUser?.["data"]?.data?.[0]?.manufacturer_name,
            distributor_name:
              bySubDistributerUser?.["data"]?.data?.[0]?.distributor_name,
          }
        : {}),
    };
    try {
      if (data?.user_type === "Manufacturer") {
        tempResult = await createManufact(tempFormData);
      } else if (data?.user_type === "Distributor") {
        tempResult = await createDistributer(tempFormData);
      } else if (data?.user_type === "Sub_Distributor") {
        tempResult = await createSubDistributer(tempFormData);
      } else {
        tempResult = await createDealer(tempFormData);
      }
      console.log(tempResult, "result");
      if (tempResult && tempResult?.["data"]?.code === 201) {
        let userType =
          data?.user_type === "Manufacturer"
            ? 6
            : data?.user_type === "Distributor"
            ? 2
            : data?.user_type === "Sub_Distributor"
            ? 3
            : 4;
        let tempRegister = {
          name: data?.name,
          username: data?.user_name,
          password: data?.password,
          role_id: userType,
        };
        try {
          await registerApi(tempRegister);
          alert("User creation success");
          navigate("/dashboard");
        } catch (error) {
          console.log(error, "error");
        }
      } else {
        alert("Something want worng");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <CForm onSubmit={handleSubmit(onSubmit)}>
      <CCard className="mb-4 pb-3 py-1">
        <CCardHeader className="py-3">
          <h3>Add Profile</h3>
        </CCardHeader>
        <CCardBody>
          <div className="row">
            <div className="col-sm-6 mb-3">
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                defaultValue=""
                render={({ field }) => (
                  <CFormInput
                    className="border"
                    {...field}
                    type="text"
                    placeholder="Name"
                  />
                )}
              />
              {errors.name && (
                <div className="text-danger">{"Field is required"}</div>
              )}
            </div>
            <div className="col-sm-6 mb-3">
              <Controller
                name="phone_number"
                control={control}
                rules={{ required: "Phone number is required" }}
                defaultValue=""
                render={({ field }) => (
                  <CFormInput
                    className="border"
                    {...field}
                    type="text"
                    placeholder="Phone Number"
                  />
                )}
              />
              {errors.phone_number && (
                <div className="text-danger">{"Field is required"}</div>
              )}
            </div>
            <div className="col-sm-6 mb-3">
              <Controller
                name="email_id"
                control={control}
                rules={{
                  required: "Email ID is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                }}
                defaultValue=""
                render={({ field }) => (
                  <CFormInput
                    className="border"
                    {...field}
                    type="email"
                    placeholder="Email ID"
                  />
                )}
              />
              {errors.email_id && (
                <div className="text-danger">{"Field is required"}</div>
              )}
            </div>
            <div className="col-sm-6 mb-3">
              <Controller
                name="address"
                control={control}
                rules={{ required: "Address is required" }}
                defaultValue=""
                render={({ field }) => (
                  <CFormInput
                    className="border"
                    {...field}
                    type="text"
                    placeholder="Address"
                  />
                )}
              />
              {errors.address && (
                <div className="text-danger">{"Field is required"}</div>
              )}
            </div>
            <div className="col-sm-6 mb-3">
              <Controller
                name="user_name"
                control={control}
                rules={{ required: "User Name is required" }}
                defaultValue=""
                render={({ field }) => (
                  <CFormInput
                    className="border"
                    {...field}
                    type="text"
                    placeholder="User Name"
                  />
                )}
              />
              {errors.user_name && (
                <div className="text-danger">{"Field is required"}</div>
              )}
            </div>
            <div className="col-sm-6 mb-3">
              <Controller
                name="password"
                control={control}
                rules={{ required: "Password Name is required" }}
                defaultValue=""
                render={({ field }) => (
                  <CFormInput
                    className="border"
                    {...field}
                    type="password"
                    placeholder="Password"
                  />
                )}
              />
              {errors.password && (
                <div className="text-danger">{"Field is required"}</div>
              )}
            </div>
            <div className="col-sm-6 mb-3">
              <Controller
                name="user_type"
                control={control}
                rules={{ required: "Type is required" }}
                defaultValue=""
                render={({ field }) => (
                  <CFormSelect
                    aria-label="Default select"
                    className="border form-control"
                    {...field}
                  >
                    <option>Select</option>
                    {userInfo?.role_id === "1" && (
                      <>
                        <option value="Manufacturer">Manufacturer</option>
                        <option value="Distributor">Distributor</option>
                      </>
                    )}
                    {userInfo?.role_id === "2" && (
                      <>
                        <option value="Sub_Distributor">Sub Distributor</option>
                        <option value="Dealer">Dealer</option>
                      </>
                    )}
                  </CFormSelect>
                )}
              />
              {errors.user_type && (
                <div className="text-danger">{"Field is required"}</div>
              )}
            </div>
            {formData.user_type === "Distributor" && (
              <div className="col-sm-6 mb-3">
                <Controller
                  name="manufacturer_name"
                  control={control}
                  rules={{ required: "Type is required" }}
                  defaultValue=""
                  render={({ field }) => (
                    <CFormSelect
                      aria-label="Default select"
                      className="border form-control"
                      {...field}
                    >
                      {manifactData &&
                        [
                          { id: 0, manufacturer_name: "select" },
                          ...manifactData?.["data"]?.data,
                        ]?.map((item) => {
                          return (
                            <option value={item?.manufacturer_name}>
                              {item?.manufacturer_name}
                            </option>
                          );
                        })}
                    </CFormSelect>
                  )}
                />
                {errors.manufacturer_name && (
                  <div className="text-danger">{"Field is required"}</div>
                )}
              </div>
            )}

            {formData.user_type === "Manufacturer" && (
              <>
                <div className="col-sm-6 mb-3">
                  <Controller
                    name="manufacturer_name"
                    control={control}
                    rules={{ required: "Manufacturer Name is required" }}
                    defaultValue=""
                    render={({ field }) => (
                      <CFormInput
                        className="border"
                        {...field}
                        type="text"
                        placeholder="Manufacturer Name"
                      />
                    )}
                  />
                  {errors.manufacturer_name && (
                    <div className="text-danger">{"Field is required"}</div>
                  )}
                </div>
                <div className="col-sm-6 mb-3">
                  <Controller
                    name="quantity"
                    control={control}
                    rules={{ required: "Quantity is required" }}
                    defaultValue=""
                    render={({ field }) => (
                      <CFormInput
                        className="border"
                        {...field}
                        type="text"
                        placeholder="Quantity"
                      />
                    )}
                  />
                  {errors.quantity && (
                    <div className="text-danger">{"Field is required"}</div>
                  )}
                </div>
                <div className="col-sm-6 mb-3">
                  <Controller
                    name="product_name"
                    control={control}
                    rules={{ required: "Product Name is required" }}
                    defaultValue=""
                    render={({ field }) => (
                      <CFormInput
                        className="border"
                        {...field}
                        type="text"
                        placeholder="Product Name"
                      />
                    )}
                  />
                  {errors.product_name && (
                    <div className="text-danger">{"Field is required"}</div>
                  )}
                </div>

                <div className="col-sm-6 mb-3">
                  <Controller
                    name="quantity_price"
                    control={control}
                    rules={{
                      required: "Quantity Price is required",
                      pattern: {
                        value: /^[0-9]*$/,
                        message: "Please enter a valid price",
                      },
                    }}
                    defaultValue=""
                    render={({ field }) => (
                      <CFormInput
                        className="border"
                        {...field}
                        type="text"
                        placeholder="Quantity Price"
                      />
                    )}
                  />
                  {errors.per_quantity_price && (
                    <div className="text-danger">{"Field is required"}</div>
                  )}
                </div>
              </>
            )}

            {formData.user_type === "Dealer" && (
              <>
                <div className="col-sm-6 mb-3">
                  <Controller
                    name="sub_distributer_name"
                    control={control}
                    rules={{ required: "Type is required" }}
                    defaultValue=""
                    render={({ field }) => (
                      <CFormSelect
                        aria-label="Default select"
                        className="border form-control"
                        {...field}
                      >
                        {subDistributerData &&
                          [
                            { id: 0, name: "select" },
                            ...subDistributerData?.["data"]?.data,
                          ]?.map((item) => {
                            return (
                              <option value={item?.name}>{item?.name}</option>
                            );
                          })}
                      </CFormSelect>
                    )}
                  />
                  {errors.sub_distributer_name && (
                    <div className="text-danger">{"Field is required"}</div>
                  )}
                </div>
                <div className="col-sm-6 mb-3">
                  <Controller
                    name="rto"
                    control={control}
                    rules={{ required: "RTO is required" }}
                    defaultValue=""
                    render={({ field }) => (
                      <CFormInput
                        className="border"
                        {...field}
                        type="text"
                        placeholder="RTO"
                      />
                    )}
                  />
                  {errors.rto && (
                    <div className="text-danger">{"Field is required"}</div>
                  )}
                </div>
              </>
            )}
          </div>
        </CCardBody>
        <div className="col-sm-12 text-center">
          <CButton variant="outline" type="submit">
            Submit
          </CButton>
        </div>
      </CCard>
    </CForm>
  );
};

export default AddCompany;
