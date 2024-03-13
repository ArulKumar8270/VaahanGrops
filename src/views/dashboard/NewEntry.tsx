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
  CFormLabel,
  CFormTextarea,
} from "@coreui/react";
import React from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import axios from "axios";
const NewEntry = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const formData = watch();
  console.log(formData, "324532");
  const onSubmit = async (data) => {
    console.log(data, "data32452345");
    try {
      // const response = await axios.post('https://api.example.com/submit-form', data);
      // console.log('Response:', response.data);
      // Handle response data as needed
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };
  return (
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
                    <option>Select Dealer</option>
                    <option value="Manufacturer">Manufacturer</option>
                    <option value="Distributor">Distributor</option>
                    <option value="Sub_Distributor">Sub Distributor</option>
                    <option value="Dealer">Dealer</option>
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
            <CCard className="mb-4 spiltForm">
              <CCardHeader className="spiltFormHead">
                <strong>Vehicle Details</strong>
              </CCardHeader>
              <CCardBody className="spiltFormBody">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col-sm-4 mb-3">
                        <Controller
                          name="date"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="Date"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.date?.type === "required" && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>

                      <div className="col-sm-4 mb-3">
                        <Controller
                          name="vehicleregno"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="Vehicle Reg No"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.vehicleregno?.type === "required" && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-4 mb-3">
                        <Controller
                          name="vehiclemanufacturingyear"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="Vahicle Manufacturing Year"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.vehiclemanufacturingyear?.type ===
                          "required" && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-4 mb-3">
                        <Controller
                          name="chassisnum"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="Chassis No"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.chassisnum?.type === "required" && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-4 mb-3">
                        <Controller
                          name="engineno"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="Engine No"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.engineno?.type === "required" && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-4 mb-3">
                        <Controller
                          name="vehiclemake"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="Vechicle Make"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.vehiclemake?.type === "required" && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-4 mb-3">
                        <Controller
                          name="vehiclemodel"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="Vechicle Model"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.vehiclemodel?.type === "required" && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-4 mb-3">
                        <Controller
                          name="ownername"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="Owner Name"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.ownername?.type === "required" && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-4 mb-3">
                        <Controller
                          name="address"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="Address"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.address?.type === "required" && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-4 mb-3">
                        <Controller
                          name="phoneo"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="Phone No"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.phoneo?.type === "required" && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-4 mb-3">
                        <Controller
                          name="rto"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormSelect
                              label="Select RTO"
                              aria-label="Default select"
                              className="border form-control"
                              {...field}
                            >
                              <option>Select Dealer</option>
                              <option value="Manufacturer">Manufacturer</option>
                              <option value="Distributor">Distributor</option>
                              <option value="Sub_Distributor">
                                Sub Distributor
                              </option>
                              <option value="Dealer">Dealer</option>
                            </CFormSelect>
                          )}
                        />
                        {errors.user_type && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-4 mb-3">
                        <Controller
                          name="hologramno"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="Hologram Number"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.hologramno?.type === "required" && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CCardBody>
            </CCard>
            <CCard className="mb-4 spiltForm">
              <CCardHeader className="spiltFormHead">
                <strong>Old Certificate Details</strong>
              </CCardHeader>
              <CCardBody className="spiltFormBody">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col-sm-4 mb-3">
                        <Controller
                          name="oldcertificatenum"
                          control={control}
                          rules={{ required: false }}
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="Old Certificate Number"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.oldcertificatenum && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-4 mb-3">
                        <Controller
                          name="rto"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormSelect
                              label="Select RTO"
                              aria-label="Default select"
                              className="border form-control"
                              {...field}
                            >
                              <option>Select RTO</option>
                              <option value="Manufacturer">Manufacturer</option>
                              <option value="Distributor">Distributor</option>
                              <option value="Sub_Distributor">
                                Sub Distributor
                              </option>
                              <option value="Dealer">Dealer</option>
                            </CFormSelect>
                          )}
                        />
                        {errors.rto && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-4 mb-3">
                        <Controller
                          name="oldCertificateDate"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormInput
                              className="border"
                              label="Old Certificate Date"
                              {...field}
                              type="text"
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.oldCertificateDate?.type === "required" && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-12 mb-3">
                        <Controller
                          name="remarks"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CFormTextarea
                              className="border"
                              label="Remarks"
                              {...field}
                              placeholder="0"
                            />
                          )}
                        />
                        {errors.remarks?.type === "required" && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CCardBody>
            </CCard>
            <CCard className="mb-4 spiltForm">
              <CCardHeader className="spiltFormHead">
                <strong>Reflective Tape Details</strong>
              </CCardHeader>
              <CCardBody className="spiltFormBody">
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
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
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
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
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
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
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
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
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
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
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
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
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
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
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
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
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
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
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
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
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
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
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
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CCardBody>
            </CCard>
            <CCard className="mb-4 spiltForm">
              <CCardHeader className="spiltFormHead">
                <strong>Image Details</strong>
              </CCardHeader>
              <CCardBody className="spiltFormBody">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col-sm-3 mb-3">
                        <Controller
                          name="frontimage"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              className={"form-control form-control-md shadow"}
                              type={"file"}
                              onChange={(e) => {
                                console.log(
                                  "Custom onChange:",
                                  e.target.files[0]
                                );
                                field.onChange(e.target.files[0]); // Don't forget to call field.onChange to update the form state
                              }}
                            />
                          )}
                        />
                        {errors.frontimage?.type === "required" && (
                          <p role="alert" className="error">
                            Field is required
                          </p>
                        )}
                      </div>
                      <div className="col-sm-3 mb-3">
                        <Controller
                          name="backimage"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              className={"form-control form-control-md shadow"}
                              type={"file"}
                              onChange={(e) => {
                                // Your custom onChange logic here
                                // For example, you can access the selected file using e.target.files[0]
                                console.log(
                                  "Custom onChange:",
                                  e.target.files[0]
                                );
                                field.onChange(e.target.files[0]); // Don't forget to call field.onChange to update the form state
                              }}
                            />
                          )}
                        />
                        {errors.backimage?.type === "required" && (
                          <p role="alert" className="error">
                            Field is required
                          </p>
                        )}
                      </div>
                      <div className="col-sm-3 mb-3">
                        <Controller
                          name="rightimage"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              className={"form-control form-control-md shadow"}
                              type={"file"}
                              onChange={(e) => {
                                // Your custom onChange logic here
                                // For example, you can access the selected file using e.target.files[0]
                                console.log(
                                  "Custom onChange:",
                                  e.target.files[0]
                                );
                                field.onChange(e.target.files[0]); // Don't forget to call field.onChange to update the form state
                              }}
                            />
                          )}
                        />
                        {errors.rightimage?.type === "required" && (
                          <p role="alert" className="error">
                            Field is required
                          </p>
                        )}
                      </div>
                      <div className="col-sm-3 mb-3">
                        <Controller
                          name="leftimage"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type={"file"}
                              className={"form-control form-control-md shadow"}
                              onChange={(e) => {
                                // Your custom onChange logic here
                                // For example, you can access the selected file using e.target.files[0]
                                console.log(
                                  "Custom onChange:",
                                  e.target.files[0]
                                );
                                field.onChange(e.target.files[0]); // Don't forget to call field.onChange to update the form state
                              }}
                            />
                          )}
                        />
                        {errors.leftimage?.type === "required" && (
                          <p role="alert" className="error">
                            Field is required
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CCardBody>
            </CCard>
          </CCardBody>
          <div className="col-sm-12 text-center mb-3">
            <CButton variant="outline" type="submit">
              Submit
            </CButton>
          </div>
        </CCard>
      </CForm>
    </>
  );
};

export default NewEntry;
