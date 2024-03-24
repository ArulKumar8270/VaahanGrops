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
const NewEntry = ({ heading }) => {
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
        {heading}
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
          <CCardBody>
            <CCard className="mb-4 spiltForm">
              <CCardHeader className="spiltFormHead">
                <strong>Vehicle Details</strong>
              </CCardHeader>
              <CCardBody className="spiltFormBody">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col-sm-6 mb-3">
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

                      <div className="col-sm-6 mb-3">
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
                      <div className="col-sm-6 mb-3">
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
                      <div className="col-sm-6 mb-3">
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
                      <div className="col-sm-6 mb-3">
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
                      <div className="col-sm-6 mb-3">
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
                      <div className="col-sm-6 mb-3">
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
                      <div className="col-sm-6 mb-3">
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
                      <div className="col-sm-6 mb-3">
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
                      <div className="col-sm-6 mb-3">
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
                      <div className="col-sm-6 mb-3">
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
                              <option value="TN28">TN28</option>
                              <option value="AP-01">AP-01</option>
                              <option value="AP-02">AP-02</option>
                              <option value="AP-03">AP-03</option>
                              <option value="AP-04">AP-04</option>
                              <option value="AP-05">AP-05</option>
                              <option value="AP-06">AP-06</option>
                              <option value="AP-07">AP-07</option>
                              <option value="AP-08">AP-08</option>
                              <option value="AP-09">AP-09</option>
                              <option value="AP-10">AP-10</option>
                              <option value="AP-11">AP-11</option>
                              <option value="AP-12">AP-12</option>
                              <option value="AP-13">AP-13</option>
                              <option value="AP-14">AP-14</option>
                              <option value="AP-15">AP-15</option>
                              <option value="AP-16">AP-16</option>
                              <option value="AP-17">AP-17</option>
                              <option value="AP-18">AP-18</option>
                              <option value="AP-19">AP-19</option>
                              <option value="AP-20">AP-20</option>
                              <option value="AP-21">AP-21</option>
                              <option value="AP-22">AP-22</option>
                              <option value="AP-23">AP-23</option>
                              <option value="AP-24">AP-24</option>
                              <option value="AP-25">AP-25</option>
                              <option value="AP-26">AP-26</option>
                              <option value="AP-27">AP-27</option>
                              <option value="AP-28">AP-28</option>
                              <option value="AP-29">AP-29</option>
                              <option value="AP-30">AP-30</option>
                              <option value="AP-31">AP-31</option>
                              <option value="AP-32">AP-32</option>
                              <option value="AP-33">AP-33</option>
                              <option value="AP-34">AP-34</option>
                              <option value="AP-35">AP-35</option>
                              <option value="AP-36">AP-36</option>
                              <option value="AP-37">AP-37</option>
                              <option value="BR01">BR01</option>
                              <option value="BR02">BR02</option>
                              <option value="BR03">BR03</option>
                              <option value="BR04">BR04</option>
                              <option value="BR05">BR05</option>
                              <option value="BR06">BR06</option>
                              <option value="BR07">BR07</option>
                              <option value="BR08">BR08</option>
                              <option value="BR09">BR09</option>
                              <option value="BR10">BR10</option>
                              <option value="BR11">BR11</option>
                              <option value="BR19">BR19</option>
                              <option value="BR21">BR21</option>
                              <option value="BR22">BR22</option>
                              <option value="BR24">BR24</option>
                              <option value="BR25">BR25</option>
                              <option value="BR26">BR26</option>
                              <option value="BR27">BR27</option>
                              <option value="BR28">BR28</option>
                              <option value="BR29">BR29</option>
                              <option value="BR30">BR30</option>
                              <option value="BR31">BR31</option>
                              <option value="BR32">BR32</option>
                              <option value="BR33">BR33</option>
                              <option value="BR34">BR34</option>
                              <option value="BR37">BR37</option>
                              <option value="BR38">BR38</option>
                              <option value="BR39">BR39</option>
                              <option value="BR43">BR43</option>
                              <option value="BR44">BR44</option>
                              <option value="BR45">BR45</option>
                              <option value="BR46">BR46</option>
                              <option value="BR50">BR50</option>
                              <option value="BR51">BR51</option>
                              <option value="BR52">BR52</option>
                              <option value="BR53">BR53</option>
                              <option value="BR55">BR55</option>
                              <option value="BR56">BR56</option>
                              <option value="BR57">BR57</option>
                              <option value="CG01">CG01</option>
                              <option value="CG02">CG02</option>
                              <option value="CG03">CG03</option>
                              <option value="CG04">CG04</option>
                              <option value="CG05">CG05</option>
                              <option value="CG06">CG06</option>
                              <option value="CG07">CG07</option>
                              <option value="CG08">CG08</option>
                              <option value="CG09">CG09</option>
                              <option value="CG10">CG10</option>
                              <option value="CG11">CG11</option>
                              <option value="CG12">CG12</option>
                              <option value="CG13">CG13</option>
                              <option value="CG14">CG14</option>
                              <option value="CG15">CG15</option>
                              <option value="CG16">CG16</option>
                              <option value="CG17">CG17</option>
                              <option value="CG18CG18">CG18CG18</option>
                              <option value="CG19">CG19</option>
                              <option value="CG20">CG20</option>
                              <option value="CG21">CG21</option>
                              <option value="CG22">CG22</option>
                              <option value="CG23">CG23</option>
                              <option value="CG24">CG24</option>
                              <option value="CG25">CG25</option>
                              <option value="CG26">CG26</option>
                              <option value="CG27">CG27</option>
                              <option value="CG28">CG28</option>
                              <option value="CG29">CG29</option>
                              <option value="CG30">CG30</option>
                              <option value="Chhattisgarh">Chhattisgarh</option>
                              <option value="Dhamtari">Dhamtari</option>
                              <option value="DL01">DL01</option>
                              <option value="DL02">DL02</option>
                              <option value="DL03">DL03</option>
                              <option value="DL04">DL04</option>
                              <option value="DL05">DL05</option>
                              <option value="DL06">DL06</option>
                              <option value="DL07">DL07</option>
                              <option value="DL08">DL08</option>
                              <option value="DL09">DL09</option>
                              <option value="DL10">DL10</option>
                              <option value="DL11">DL11</option>
                              <option value="DL12">DL12</option>
                              <option value="DL13">DL13</option>
                              <option value="DL14">DL14</option>
                              <option value="DL15">DL15</option>
                              <option value="DL16">DL16</option>
                              <option value="DL17">DL17</option>
                              <option value="DL18">DL18</option>
                              <option value="GJ-1">GJ-1</option>
                              <option value="GJ-1-W">GJ-1-W</option>
                              <option value="GJ-10">GJ-10</option>
                              <option value="GJ-11">GJ-11</option>
                              <option value="GJ-12">GJ-12</option>
                              <option value="GJ-13">GJ-13</option>
                              <option value="GJ-14">GJ-14</option>
                              <option value="GJ-15">GJ-15</option>
                              <option value="GJ-16">GJ-16</option>
                              <option value="GJ-17">GJ-17</option>
                              <option value="GJ-18">GJ-18</option>
                              <option value="GJ-19">GJ-19</option>
                              <option value="GJ-2">GJ-2</option>
                              <option value="GJ-20">GJ-20</option>
                              <option value="GJ-21">GJ-21</option>
                              <option value="GJ-22">GJ-22</option>
                              <option value="GJ-23">GJ-23</option>
                              <option value="GJ-24">GJ-24</option>
                              <option value="GJ-25">GJ-25</option>
                              <option value="GJ-26">GJ-26</option>
                              <option value="GJ-27">GJ-27</option>
                              <option value="GJ-28">GJ-28</option>
                              <option value="GJ-29">GJ-29</option>
                              <option value="GJ-3">GJ-3</option>
                              <option value="GJ-30">GJ-30</option>
                              <option value="GJ-31">GJ-31</option>
                              <option value="GJ-32">GJ-32</option>
                              <option value="GJ-33">GJ-33</option>
                              <option value="GJ-34">GJ-34</option>
                              <option value="GJ-35">GJ-35</option>
                              <option value="GJ-36">GJ-36</option>
                              <option value="GJ-37">GJ-37</option>
                              <option value="GJ-38">GJ-38</option>
                              <option value="GJ-4">GJ-4</option>
                              <option value="GJ-5">GJ-5</option>
                              <option value="GJ-6">GJ-6</option>
                              <option value="GJ-7">GJ-7</option>
                              <option value="GJ-8">GJ-8</option>
                              <option value="GJ-9">GJ-9</option>
                              <option value="HP01">HP01</option>
                              <option value="HP02">HP02</option>
                              <option value="HP03">HP03</option>
                              <option value="HP04">HP04</option>
                              <option value="HP05">HP05</option>
                              <option value="HP06">HP06</option>
                              <option value="HP07">HP07</option>
                              <option value="HP08">HP08</option>
                              <option value="HP09">HP09</option>
                              <option value="HP10">HP10</option>
                              <option value="HP11">HP11</option>
                              <option value="HP12">HP12</option>
                              <option value="HP13">HP13</option>
                              <option value="HP14">HP14</option>
                              <option value="HP15">HP15</option>
                              <option value="HP16">HP16</option>
                              <option value="HP17">HP17</option>
                              <option value="HP18">HP18</option>
                              <option value="HP19">HP19</option>
                              <option value="HP20">HP20</option>
                              <option value="HP21">HP21</option>
                              <option value="HP22">HP22</option>
                              <option value="HP23">HP23</option>
                              <option value="HP24">HP24</option>
                              <option value="HP25">HP25</option>
                              <option value="HP26">HP26</option>
                              <option value="HP27">HP27</option>
                              <option value="HP28">HP28</option>
                              <option value="HP29">HP29</option>
                              <option value="HP30">HP30</option>
                              <option value="HP31">HP31</option>
                              <option value="HP32">HP32</option>
                              <option value="HP33">HP33</option>
                              <option value="HP34">HP34</option>
                              <option value="HP35">HP35</option>
                              <option value="HP36">HP36</option>
                              <option value="HP37">HP37</option>
                              <option value="HP38">HP38</option>
                              <option value="HP39">HP39</option>
                              <option value="HP40">HP40</option>
                              <option value="HP41">HP41</option>
                              <option value="HP42">HP42</option>
                              <option value="HP43">HP43</option>
                              <option value="HP44">HP44</option>
                              <option value="HP45">HP45</option>
                              <option value="HP46">HP46</option>
                              <option value="HP47">HP47</option>
                              <option value="HP48">HP48</option>
                              <option value="HP49">HP49</option>
                              <option value="HP50">HP50</option>
                              <option value="HP51">HP51</option>
                              <option value="HP52">HP52</option>
                              <option value="HP53">HP53</option>
                              <option value="HP54">HP54</option>
                              <option value="HP55">HP55</option>
                              <option value="HP56">HP56</option>
                              <option value="HP57">HP57</option>
                              <option value="HP58">HP58</option>
                              <option value="HP59">HP59</option>
                              <option value="HP60">HP60</option>
                              <option value="HP61">HP61</option>
                              <option value="HP62">HP62</option>
                              <option value="HP63">HP63</option>
                              <option value="HP64">HP64</option>
                              <option value="HP65">HP65</option>
                              <option value="HP66">HP66</option>
                              <option value="HP67">HP67</option>
                              <option value="HP68">HP68</option>
                              <option value="HP69">HP69</option>
                              <option value="HP71">HP71</option>
                              <option value="HP72">HP72</option>
                              <option value="HP73">HP73</option>
                              <option value="HP74">HP74</option>
                              <option value="HP76">HP76</option>
                              <option value="HP77">HP77</option>
                              <option value="HP78">HP78</option>
                              <option value="HP79">HP79</option>
                              <option value="HP80">HP80</option>
                              <option value="HR38">HR38</option>
                              <option value="JH-01">JH-01</option>
                              <option value="JH-02">JH-02</option>
                              <option value="JH-03">JH-03</option>
                              <option value="JH-04">JH-04</option>
                              <option value="JH-05">JH-05</option>
                              <option value="JH-06">JH-06</option>
                              <option value="JH-07">JH-07</option>
                              <option value="JH-08">JH-08</option>
                              <option value="JH-09">JH-09</option>
                              <option value="JH-10">JH-10</option>
                              <option value="JH-11">JH-11</option>
                              <option value="JH-12">JH-12</option>
                              <option value="JH-13">JH-13</option>
                              <option value="JH-14">JH-14</option>
                              <option value="JH-15">JH-15</option>
                              <option value="JH-16">JH-16</option>
                              <option value="JH-17">JH-17</option>
                              <option value="JH-18">JH-18</option>
                              <option value="JH-19">JH-19</option>
                              <option value="JH-20">JH-20</option>
                              <option value="JH-21">JH-21</option>
                              <option value="JH-22">JH-22</option>
                              <option value="JH-23">JH-23</option>
                              <option value="JH-24">JH-24</option>
                              <option value="JK01">JK01</option>
                              <option value="JK02">JK02</option>
                              <option value="JK03">JK03</option>
                              <option value="JK04">JK04</option>
                              <option value="JK05">JK05</option>
                              <option value="JK06">JK06</option>
                              <option value="JK07">JK07</option>
                              <option value="JK08">JK08</option>
                              <option value="JK09">JK09</option>
                              <option value="JK10">JK10</option>
                              <option value="JK11">JK11</option>
                              <option value="JK12">JK12</option>
                              <option value="JK13">JK13</option>
                              <option value="JK14">JK14</option>
                              <option value="JK15">JK15</option>
                              <option value="JK16">JK16</option>
                              <option value="JK17">JK17</option>
                              <option value="JK18">JK18</option>
                              <option value="JK19">JK19</option>
                              <option value="JK20">JK20</option>
                              <option value="JK21">JK21</option>
                              <option value="JK22">JK22</option>
                              <option value="KA 41">KA 41</option>
                              <option value="KL-56">KL-56</option>
                              <option value="MH-01">MH-01</option>
                              <option value="MH-02">MH-02</option>
                              <option value="MH-03">MH-03</option>
                              <option value="MH-04">MH-04</option>
                              <option value="MH-05">MH-05</option>
                              <option value="MH-06">MH-06</option>
                              <option value="MH-07">MH-07</option>
                              <option value="MH-08">MH-08</option>
                              <option value="MH-09">MH-09</option>
                              <option value="MH-10">MH-10</option>
                              <option value="MH-11">MH-11</option>
                              <option value="MH-12">MH-12</option>
                              <option value="MH-13">MH-13</option>
                              <option value="MH-14">MH-14</option>
                              <option value="MH-15">MH-15</option>
                              <option value="MH-16">MH-16</option>
                              <option value="MH-17">MH-17</option>
                              <option value="MH-18">MH-18</option>
                              <option value="MH-19">MH-19</option>
                              <option value="MH-20">MH-20</option>
                              <option value="MH-21">MH-21</option>
                              <option value="MH-22">MH-22</option>
                              <option value="MH-23">MH-23</option>
                              <option value="MH-24">MH-24</option>
                              <option value="MH-25">MH-25</option>
                              <option value="MH-26">MH-26</option>
                              <option value="MH-27">MH-27</option>
                              <option value="MH-28">MH-28</option>
                              <option value="MH-29">MH-29</option>
                              <option value="MH-30">MH-30</option>
                              <option value="MH-31">MH-31</option>
                              <option value="MH-32">MH-32</option>
                              <option value="MH-33">MH-33</option>
                              <option value="MH-34">MH-34</option>
                              <option value="MH-35">MH-35</option>
                              <option value="MH-36">MH-36</option>
                              <option value="MH-37">MH-37</option>
                              <option value="MH-38">MH-38</option>
                              <option value="MH-39">MH-39</option>
                              <option value="MH-40">MH-40</option>
                              <option value="MH-41">MH-41</option>
                              <option value="MH-42">MH-42</option>
                              <option value="MH-43">MH-43</option>
                              <option value="MH-44">MH-44</option>
                              <option value="MH-45">MH-45</option>
                              <option value="MH-46">MH-46</option>
                              <option value="MH-47">MH-47</option>
                              <option value="MH-48">MH-48</option>
                              <option value="MH-49">MH-49</option>
                              <option value="MH-50">MH-50</option>
                              <option value="MH-51">MH-51</option>
                              <option value="MH-52">MH-52</option>
                              <option value="MH-53">MH-53</option>
                              <option value="MH-54">MH-54</option>
                              <option value="MH-55">MH-55</option>
                              <option value="MH-56">MH-56</option>
                              <option value="MH-57">MH-57</option>
                              <option value="MH-58">MH-58</option>
                              <option value="MH-59">MH-59</option>
                              <option value="MH-60">MH-60</option>
                              <option value="MH-61">MH-61</option>
                              <option value="MH-62">MH-62</option>
                              <option value="MH-63">MH-63</option>
                              <option value="MH-64">MH-64</option>
                              <option value="MP-01">MP-01</option>
                              <option value="MP-02">MP-02</option>
                              <option value="MP-03">MP-03</option>
                              <option value="MP-04">MP-04</option>
                              <option value="MP-05">MP-05</option>
                              <option value="MP-06">MP-06</option>
                              <option value="MP-07">MP-07</option>
                              <option value="MP-08">MP-08</option>
                              <option value="MP-09">MP-09</option>
                              <option value="MP-10">MP-10</option>
                              <option value="MP-11">MP-11</option>
                              <option value="MP-12">MP-12</option>
                              <option value="MP-13">MP-13</option>
                              <option value="MP-14">MP-14</option>
                              <option value="MP-15">MP-15</option>
                              <option value="MP-16">MP-16</option>
                              <option value="MP-17">MP-17</option>
                              <option value="MP-18">MP-18</option>
                              <option value="MP-19">MP-19</option>
                              <option value="MP-20">MP-20</option>
                              <option value="MP-21">MP-21</option>
                              <option value="MP-22">MP-22</option>
                              <option value="MP-23">MP-23</option>
                              <option value="MP-24">MP-24</option>
                              <option value="MP-25">MP-25</option>
                              <option value="MP-26">MP-26</option>
                              <option value="MP-27">MP-27</option>
                              <option value="MP-28">MP-28</option>
                              <option value="MP-29">MP-29</option>
                              <option value="MP-30">MP-30</option>
                              <option value="MP-31">MP-31</option>
                              <option value="MP-32">MP-32</option>
                              <option value="MP-33">MP-33</option>
                              <option value="MP-34">MP-34</option>
                              <option value="MP-35">MP-35</option>
                              <option value="MP-36">MP-36</option>
                              <option value="MP-37">MP-37</option>
                              <option value="MP-38">MP-38</option>
                              <option value="MP-39">MP-39</option>
                              <option value="MP-40">MP-40</option>
                              <option value="MP-41">MP-41</option>
                              <option value="MP-42">MP-42</option>
                              <option value="MP-43">MP-43</option>
                              <option value="MP-44">MP-44</option>
                              <option value="MP-45">MP-45</option>
                              <option value="MP-46">MP-46</option>
                              <option value="MP-47">MP-47</option>
                              <option value="MP-48">MP-48</option>
                              <option value="MP-49">MP-49</option>
                              <option value="MP-50">MP-50</option>
                              <option value="MP-51">MP-51</option>
                              <option value="MP-52">MP-52</option>
                              <option value="MP-53">MP-53</option>
                              <option value="MP-54">MP-54</option>
                              <option value="MP-55">MP-55</option>
                              <option value="MP-56">MP-56</option>
                              <option value="MP-57">MP-57</option>
                              <option value="MP-58">MP-58</option>
                              <option value="MP-59">MP-59</option>
                              <option value="MP-60">MP-60</option>
                              <option value="MP-61">MP-61</option>
                              <option value="MP-62">MP-62</option>
                              <option value="MP-63">MP-63</option>
                              <option value="MP-64">MP-64</option>
                              <option value="MP-65">MP-65</option>
                              <option value="MP-66">MP-66</option>
                              <option value="MP-67">MP-67</option>
                              <option value="MP-68">MP-68</option>
                              <option value="MP-69">MP-69</option>
                              <option value="OD 06">OD 06</option>
                              <option value="OD 07">OD 07</option>
                              <option value="OD 08">OD 08</option>
                              <option value="OD 09">OD 09</option>
                              <option value="OD 10">OD 10</option>
                              <option value="OD 11">OD 11</option>
                              <option value="OD 12">OD 12</option>
                              <option value="OD 13">OD 13</option>
                              <option value="OD 14">OD 14</option>
                              <option value="OD 15">OD 15</option>
                              <option value="OD 16">OD 16</option>
                              <option value="OD 17">OD 17</option>
                              <option value="OD 18">OD 18</option>
                              <option value="OD 19">OD 19</option>
                              <option value="OD 20">OD 20</option>
                              <option value="OD 21">OD 21</option>
                              <option value="OD 22">OD 22</option>
                              <option value="OD 23">OD 23</option>
                              <option value="OD 24">OD 24</option>
                              <option value="OD 25">OD 25</option>
                              <option value="OD 26">OD 26</option>
                              <option value="OD 27">OD 27</option>
                              <option value="OD 28">OD 28</option>
                              <option value="OD 29">OD 29</option>
                              <option value="OD 30">OD 30</option>
                              <option value="OD 31">OD 31</option>
                              <option value="OD 32">OD 32</option>
                              <option value="OD 33">OD 33</option>
                              <option value="OD 34">OD 34</option>
                              <option value="OD 35">OD 35</option>
                              <option value="OD01">OD01</option>
                              <option value="OD02">OD02</option>
                              <option value="OD03">OD03</option>
                              <option value="OD04">OD04</option>
                              <option value="OD05">OD05</option>
                              <option value="OR10">OR10</option>
                              <option value="PY01">PY01</option>
                              <option value="PY02">PY02</option>
                              <option value="PY03">PY03</option>
                              <option value="PY05">PY05</option>
                              <option value="Raipur">Raipur</option>
                              <option value="RJ 52">RJ 52</option>
                              <option value="RJ-01">RJ-01</option>
                              <option value="RJ-02">RJ-02</option>
                              <option value="RJ-03">RJ-03</option>
                              <option value="RJ-04">RJ-04</option>
                              <option value="RJ-05">RJ-05</option>
                              <option value="RJ-06">RJ-06</option>
                              <option value="RJ-07">RJ-07</option>
                              <option value="RJ-08">RJ-08</option>
                              <option value="RJ-09">RJ-09</option>
                              <option value="RJ-10">RJ-10</option>
                              <option value="RJ-11">RJ-11</option>
                              <option value="RJ-12">RJ-12</option>
                              <option value="RJ-13">RJ-13</option>
                              <option value="RJ-14">RJ-14</option>
                              <option value="RJ-15">RJ-15</option>
                              <option value="RJ-16">RJ-16</option>
                              <option value="RJ-17">RJ-17</option>
                              <option value="RJ-18">RJ-18</option>
                              <option value="RJ-19">RJ-19</option>
                              <option value="RJ-20">RJ-20</option>
                              <option value="RJ-21">RJ-21</option>
                              <option value="RJ-22">RJ-22</option>
                              <option value="RJ-23">RJ-23</option>
                              <option value="RJ-24">RJ-24</option>
                              <option value="RJ-25">RJ-25</option>
                              <option value="RJ-26">RJ-26</option>
                              <option value="RJ-27">RJ-27</option>
                              <option value="RJ-28">RJ-28</option>
                              <option value="RJ-29">RJ-29</option>
                              <option value="RJ-30">RJ-30</option>
                              <option value="RJ-31">RJ-31</option>
                              <option value="RJ-32">RJ-32</option>
                              <option value="RJ-33">RJ-33</option>
                              <option value="RJ-34">RJ-34</option>
                              <option value="RJ-35">RJ-35</option>
                              <option value="RJ-36">RJ-36</option>
                              <option value="RJ-37">RJ-37</option>
                              <option value="RJ-38">RJ-38</option>
                              <option value="RJ-39">RJ-39</option>
                              <option value="RJ-40">RJ-40</option>
                              <option value="RJ-41">RJ-41</option>
                              <option value="RJ-42">RJ-42</option>
                              <option value="RJ-43">RJ-43</option>
                              <option value="RJ-44">RJ-44</option>
                              <option value="RJ-45">RJ-45</option>
                              <option value="RJ-46">RJ-46</option>
                              <option value="RJ-47">RJ-47</option>
                              <option value="RJ-48">RJ-48</option>
                              <option value="RJ-49">RJ-49</option>
                              <option value="RJ-50">RJ-50</option>
                              <option value="RJ-51">RJ-51</option>
                              <option value="RJ52">RJ52</option>
                              <option value="TN19">TN19</option>
                              <option value="TN23T">TN23T</option>
                              <option value="TN36">TN36</option>
                              <option value="TN91Y">TN91Y</option>
                              <option value="TS-01">TS-01</option>
                              <option value="TS-02">TS-02</option>
                              <option value="TS-03">TS-03</option>
                              <option value="TS-04">TS-04</option>
                              <option value="TS-05">TS-05</option>
                              <option value="TS-06">TS-06</option>
                              <option value="TS-07">TS-07</option>
                              <option value="TS-08">TS-08</option>
                              <option value="TS-09">TS-09</option>
                              <option value="TS-10">TS-10</option>
                              <option value="TS-11">TS-11</option>
                              <option value="TS-12">TS-12</option>
                              <option value="TS-13">TS-13</option>
                              <option value="TS-15">TS-15</option>
                              <option value="TS-16">TS-16</option>
                              <option value="TS-17">TS-17</option>
                              <option value="TS-18">TS-18</option>
                              <option value="TS-19">TS-19</option>
                              <option value="TS-20">TS-20</option>
                              <option value="TS-21">TS-21</option>
                              <option value="TS-22">TS-22</option>
                              <option value="TS-23">TS-23</option>
                              <option value="TS-24">TS-24</option>
                              <option value="TS-25">TS-25</option>
                              <option value="TS-26">TS-26</option>
                              <option value="TS-27">TS-27</option>
                              <option value="TS-28">TS-28</option>
                              <option value="TS-29">TS-29</option>
                              <option value="TS-30">TS-30</option>
                              <option value="TS-31">TS-31</option>
                              <option value="TS-32">TS-32</option>
                              <option value="TS-33">TS-33</option>
                              <option value="TS-34">TS-34</option>
                              <option value="TS-35">TS-35</option>
                              <option value="TS-36">TS-36</option>
                              <option value="UK-01">UK-01</option>
                              <option value="UK-02">UK-02</option>
                              <option value="Uk-03">Uk-03</option>
                              <option value="UK-04">UK-04</option>
                              <option value="UK-05">UK-05</option>
                              <option value="UK-06">UK-06</option>
                              <option value="UK-07">UK-07</option>
                              <option value="Uk-08">Uk-08</option>
                              <option value="Uk-09">Uk-09</option>
                              <option value="UK-10">UK-10</option>
                              <option value="UK-11">UK-11</option>
                              <option value="UK-12">UK-12</option>
                              <option value="Uk-13">Uk-13</option>
                              <option value="UK-14">UK-14</option>
                              <option value="UK-15">UK-15</option>
                              <option value="UK-16">UK-16</option>
                              <option value="UK-17">UK-17</option>
                              <option value="UK-18">UK-18</option>
                              <option value="UK-19">UK-19</option>
                              <option value="UK-20">UK-20</option>
                              <option value="UP-11">UP-11</option>
                              <option value="UP-12">UP-12</option>
                              <option value="UP-13">UP-13</option>
                              <option value="UP-14">UP-14</option>
                              <option value="UP-15">UP-15</option>
                              <option value="UP-16">UP-16</option>
                              <option value="UP-17">UP-17</option>
                              <option value="UP-19">UP-19</option>
                              <option value="UP-20">UP-20</option>
                              <option value="UP-21">UP-21</option>
                              <option value="UP-22">UP-22</option>
                              <option value="UP-23">UP-23</option>
                              <option value="UP-24">UP-24</option>
                              <option value="UP-25">UP-25</option>
                              <option value="UP-26">UP-26</option>
                              <option value="UP-27">UP-27</option>
                              <option value="UP-28">UP-28</option>
                              <option value="UP-30">UP-30</option>
                              <option value="UP-31">UP-31</option>
                              <option value="UP-32">UP-32</option>
                              <option value="UP-33">UP-33</option>
                              <option value="UP-34">UP-34</option>
                              <option value="UP-35">UP-35</option>
                              <option value="UP-36">UP-36</option>
                              <option value="UP-37">UP-37</option>
                              <option value="UP-38">UP-38</option>
                              <option value="UP-40">UP-40</option>
                              <option value="UP-41">UP-41</option>
                              <option value="UP-42">UP-42</option>
                              <option value="UP-43">UP-43</option>
                              <option value="UP-44">UP-44</option>
                              <option value="UP-45">UP-45</option>
                              <option value="UP-46">UP-46</option>
                              <option value="UP-47">UP-47</option>
                              <option value="UP-50">UP-50</option>
                              <option value="UP-51">UP-51</option>
                              <option value="UP-52">UP-52</option>
                              <option value="UP-53">UP-53</option>
                              <option value="UP-54">UP-54</option>
                              <option value="UP-55">UP-55</option>
                              <option value="UP-56">UP-56</option>
                              <option value="UP-57">UP-57</option>
                              <option value="UP-58">UP-58</option>
                              <option value="UP-60">UP-60</option>
                              <option value="UP-61">UP-61</option>
                              <option value="UP-62">UP-62</option>
                              <option value="UP-63">UP-63</option>
                              <option value="UP-64">UP-64</option>
                              <option value="UP-65">UP-65</option>
                              <option value="UP-66">UP-66</option>
                              <option value="UP-67">UP-67</option>
                              <option value="UP-70">UP-70</option>
                              <option value="UP-71">UP-71</option>
                              <option value="UP-72">UP-72</option>
                              <option value="UP-73">UP-73</option>
                              <option value="UP-74">UP-74</option>
                              <option value="UP-75">UP-75</option>
                              <option value="UP-76">UP-76</option>
                              <option value="UP-77">UP-77</option>
                              <option value="UP-78">UP-78</option>
                              <option value="UP-79">UP-79</option>
                              <option value="UP-80">UP-80</option>
                              <option value="UP-81">UP-81</option>
                              <option value="UP-82">UP-82</option>
                              <option value="UP-83">UP-83</option>
                              <option value="UP-84">UP-84</option>
                              <option value="UP-85">UP-85</option>
                              <option value="UP-86">UP-86</option>
                              <option value="UP-87">UP-87</option>
                              <option value="UP-90">UP-90</option>
                              <option value="UP-91">UP-91</option>
                              <option value="UP-92">UP-92</option>
                              <option value="UP-93">UP-93</option>
                              <option value="UP-94">UP-94</option>
                              <option value="UP-95">UP-95</option>
                              <option value="UP-96">UP-96</option>
                              <option value="UP11">UP11</option>
                              <option value="UP12">UP12</option>
                              <option value="UP13">UP13</option>
                              <option value="UP14">UP14</option>
                              <option value="UP15">UP15</option>
                              <option value="UP16">UP16</option>
                              <option value="UP17">UP17</option>
                              <option value="UP18">UP18</option>
                              <option value="UP19">UP19</option>
                              <option value="UP20">UP20</option>
                              <option value="UP21">UP21</option>
                              <option value="UP22">UP22</option>
                              <option value="UP23">UP23</option>
                              <option value="UP24">UP24</option>
                              <option value="UP25">UP25</option>
                              <option value="UP26">UP26</option>
                              <option value="UP27">UP27</option>
                              <option value="UP28">UP28</option>
                              <option value="UP29">UP29</option>
                              <option value="UP30">UP30</option>
                              <option value="UP31">UP31</option>
                              <option value="UP32">UP32</option>
                              <option value="UP33">UP33</option>
                              <option value="UP34">UP34</option>
                              <option value="UP35">UP35</option>
                              <option value="UP36">UP36</option>
                              <option value="UP37">UP37</option>
                              <option value="UP38">UP38</option>
                              <option value="UP40">UP40</option>
                              <option value="UP41">UP41</option>
                              <option value="UP42">UP42</option>
                              <option value="UP43">UP43</option>
                              <option value="UP44">UP44</option>
                              <option value="UP45">UP45</option>
                              <option value="UP46">UP46</option>
                              <option value="UP47">UP47</option>
                              <option value="UP50">UP50</option>
                              <option value="UP51">UP51</option>
                              <option value="UP52">UP52</option>
                              <option value="UP53">UP53</option>
                              <option value="UP54">UP54</option>
                              <option value="UP55">UP55</option>
                              <option value="UP56">UP56</option>
                              <option value="UP57">UP57</option>
                              <option value="UP58">UP58</option>
                              <option value="UP60">UP60</option>
                              <option value="UP61">UP61</option>
                              <option value="UP62">UP62</option>
                              <option value="UP63">UP63</option>
                              <option value="UP64">UP64</option>
                              <option value="UP65">UP65</option>
                              <option value="UP66">UP66</option>
                              <option value="UP67">UP67</option>
                              <option value="UP70">UP70</option>
                              <option value="UP71">UP71</option>
                              <option value="UP72">UP72</option>
                              <option value="UP73">UP73</option>
                              <option value="UP74">UP74</option>
                              <option value="UP75">UP75</option>
                              <option value="UP76">UP76</option>
                              <option value="UP77">UP77</option>
                              <option value="UP78">UP78</option>
                              <option value="UP79">UP79</option>
                              <option value="UP80">UP80</option>
                              <option value="UP81">UP81</option>
                              <option value="UP82">UP82</option>
                              <option value="UP83">UP83</option>
                              <option value="UP84">UP84</option>
                              <option value="UP85">UP85</option>
                              <option value="UP86">UP86</option>
                              <option value="UP87">UP87</option>
                              <option value="UP90">UP90</option>
                              <option value="UP91">UP91</option>
                              <option value="UP92">UP92</option>
                              <option value="UP93">UP93</option>
                              <option value="WB 95">WB 95</option>
                              <option value="WB 97">WB 97</option>
                              <option value="WB01">WB01</option>
                              <option value="WB02">WB02</option>
                              <option value="WB03">WB03</option>
                              <option value="WB04">WB04</option>
                              <option value="WB05">WB05</option>
                              <option value="WB06">WB06</option>
                              <option value="WB07">WB07</option>
                              <option value="WB08">WB08</option>
                              <option value="WB11">WB11</option>
                              <option value="WB12">WB12</option>
                              <option value="WB13">WB13</option>
                              <option value="WB14">WB14</option>
                              <option value="WB15">WB15</option>
                              <option value="WB16">WB16</option>
                              <option value="WB17">WB17</option>
                              <option value="WB18">WB18</option>
                              <option value="WB19">WB19</option>
                              <option value="WB20">WB20</option>
                              <option value="WB22">WB22</option>
                              <option value="WB23">WB23</option>
                              <option value="WB24">WB24</option>
                              <option value="WB25">WB25</option>
                              <option value="WB26">WB26</option>
                              <option value="WB29">WB29</option>
                              <option value="WB30">WB30</option>
                              <option value="WB31">WB31</option>
                              <option value="WB32">WB32</option>
                              <option value="WB33">WB33</option>
                              <option value="WB34">WB34</option>
                              <option value="WB37">WB37</option>
                              <option value="WB38">WB38</option>
                              <option value="WB39">WB39</option>
                              <option value="WB40">WB40</option>
                              <option value="WB41">WB41</option>
                              <option value="WB42">WB42</option>
                              <option value="WB43">WB43</option>
                              <option value="WB44">WB44</option>
                              <option value="WB44A">WB44A</option>
                              <option value="WB44B">WB44B</option>
                              <option value="WB44C">WB44C</option>
                              <option value="WB44D">WB44D</option>
                              <option value="WB44E">WB44E</option>
                              <option value="WB47">WB47</option>
                              <option value="WB48">WB48</option>
                              <option value="WB51">WB51</option>
                              <option value="WB52">WB52</option>
                              <option value="WB53">WB53</option>
                              <option value="WB54">WB54</option>
                              <option value="WB55">WB55</option>
                              <option value="WB56">WB56</option>
                              <option value="WB57">WB57</option>
                              <option value="WB58">WB58</option>
                              <option value="WB59">WB59</option>
                              <option value="WB60">WB60</option>
                              <option value="WB61">WB61</option>
                              <option value="WB62">WB62</option>
                              <option value="WB63">WB63</option>
                              <option value="WB64">WB64</option>
                              <option value="WB65">WB65</option>
                              <option value="WB66">WB66</option>
                              <option value="WB67">WB67</option>
                              <option value="WB68">WB68</option>
                              <option value="WB69">WB69</option>
                              <option value="WB70">WB70</option>
                              <option value="WB71">WB71</option>
                              <option value="WB72">WB72</option>
                              <option value="WB73">WB73</option>
                              <option value="WB74">WB74</option>
                              <option value="WB76">WB76</option>
                              <option value="WB77">WB77</option>
                              <option value="WB78">WB78</option>
                              <option value="WB79">WB79</option>
                              <option value="WB82">WB82</option>
                              <option value="WB89">WB89</option>
                              <option value="WB90">WB90</option>
                              <option value="WB91">WB91</option>
                              <option value="WB92">WB92</option>
                              <option value="WB94">WB94</option>
                              <option value="WB96">WB96</option>
                              <option value="TN57S">TN57S</option>
                              <option value="TN57S">TN57S</option>
                              <option value="TN60Y">TN60Y</option>
                              <option value="TN93">TN93</option>
                              <option value="TN94Z">TN94Z</option>
                              <option value="TN57S">TN57S</option>
                              <option value="TN 03">TN 03</option>
                              <option value="TN31Y">TN31Y</option>
                              <option value="TN23T">TN23T</option>
                              <option value="TN59S">TN59S</option>
                              <option value="TN31Y">TN31Y</option>
                              <option value="TN34Z">TN34Z</option>
                              <option value="TN01">TN01</option>
                              <option value="TN02">TN02</option>
                              <option value="TN03">TN03</option>
                              <option value="TN04">TN04</option>
                              <option value="TN05">TN05</option>
                              <option value="TN06">TN06</option>
                              <option value="TN07">TN07</option>
                              <option value="TN10">TN10</option>
                              <option value="TN11">TN11</option>
                              <option value="TN12">TN12</option>
                              <option value="TN14">TN14</option>
                              <option value="TN15">TN15</option>
                              <option value="TN16">TN16</option>
                              <option value="TN18">TN18</option>
                              <option value="TN95">TN95</option>
                              <option value="TN20">TN20</option>
                              <option value="TN21">TN21</option>
                              <option value="TN22">TN22</option>
                              <option value="TN23">TN23</option>
                              <option value="TN24">TN24</option>
                              <option value="TN25">TN25</option>
                              <option value="TN28">TN28</option>
                              <option value="TN28Z">TN28Z</option>
                              <option value="TN29">TN29</option>
                              <option value="TN30">TN30</option>
                              <option value="TN30W">TN30W</option>
                              <option value="TN31">TN31</option>
                              <option value="TN31Z">TN31Z</option>
                              <option value="TN32">TN32</option>
                              <option value="TN33">TN33</option>
                              <option value="TN34">TN34</option>
                              <option value="TN36W">TN36W</option>
                              <option value="TN36Z">TN36Z</option>
                              <option value="TN37">TN37</option>
                              <option value="TN37Z">TN37Z</option>
                              <option value="TN38">TN38</option>
                              <option value="TN39">TN39</option>
                              <option value="TN39Z">TN39Z</option>
                              <option value="TN40">TN40</option>
                              <option value="TN41">TN41</option>
                              <option value="TN41W">TN41W</option>
                              <option value="TN42">TN42</option>
                              <option value="TN42Y">TN42Y</option>
                              <option value="TN43">TN43</option>
                              <option value="TN43Z">TN43Z</option>
                              <option value="TN45">TN45</option>
                              <option value="TN45Z">TN45Z</option>
                              <option value="TN46">TN46</option>
                              <option value="TN47">TN47</option>
                              <option value="TN47X">TN47X</option>
                              <option value="TN28">TN28</option>
                              <option value="TN47Z">TN47Z</option>
                              <option value="TN48X">TN48X</option>
                              <option value="TN48Y">TN48Y</option>
                              <option value="TN48">TN48</option>
                              <option value="TN48Z">TN48Z</option>
                              <option value="TN49">TN49</option>
                              <option value="TN49Y">TN49Y</option>
                              <option value="TN50">TN50</option>
                              <option value="TN50Y">TN50Y</option>
                              <option value="TN28">TN28</option>
                              <option value="TN51">TN51</option>
                              <option value="TN52">TN52</option>
                              <option value="TN54">TN54</option>
                              <option value="TN55Y">TN55Y</option>
                              <option value="TN55Z">TN55Z</option>
                              <option value="TN55">TN55</option>
                              <option value="TN55X">TN55X</option>
                              <option value="TN56">TN56</option>
                              <option value="TN57R">TN57R</option>
                              <option value="TN57V">TN57V</option>
                              <option value="TN57Y">TN57Y</option>
                              <option value="TN57">TN57</option>
                              <option value="TN58">TN58</option>
                              <option value="TN58Y">TN58Y</option>
                              <option value="TN58Z">TN58Z</option>
                              <option value="TN59Z">TN59Z</option>
                              <option value="TN28">TN28</option>
                              <option value="TN59">TN59</option>
                              <option value="TN59V">TN59V</option>
                              <option value="TN60">TN60</option>
                              <option value="TN60Z">TN60Z</option>
                              <option value="TN61">TN61</option>
                              <option value="TN63">TN63</option>
                              <option value="TN63Z">TN63Z</option>
                              <option value="TN64">TN64</option>
                              <option value="TN65">TN65</option>
                              <option value="TN65Z">TN65Z</option>
                              <option value="TN66">TN66</option>
                              <option value="TN67">TN67</option>
                              <option value="TN67W">TN67W</option>
                              <option value="TN68">TN68</option>
                              <option value="TN69">TN69</option>
                              <option value="TN70">TN70</option>
                              <option value="TN72">TN72</option>
                              <option value="TN72V">TN72V</option>
                              <option value="TN73">TN73</option>
                              <option value="TN73Z">TN73Z</option>
                              <option value="TN74">TN74</option>
                              <option value="TN75">TN75</option>
                              <option value="TN76">TN76</option>
                              <option value="TN76V">TN76V</option>
                              <option value="TN77">TN77</option>
                              <option value="TN77Z">TN77Z</option>
                              <option value="TN78">TN78</option>
                              <option value="TN78Z">TN78Z</option>
                              <option value="TN79">TN79</option>
                              <option value="TN81">TN81</option>
                              <option value="TN81Z">TN81Z</option>
                              <option value="TN28">TN28</option>
                              <option value="TN82Z">TN82Z</option>
                              <option value="TN83">TN83</option>
                              <option value="TN83Z">TN83Z</option>
                              <option value="TN83Y">TN83Y</option>
                              <option value="TN84">TN84</option>
                              <option value="TN85">TN85</option>
                              <option value="TN86">TN86</option>
                              <option value="TN87">TN87</option>
                              <option value="TN88">TN88</option>
                              <option value="TN88Z">TN88Z</option>
                              <option value="TN90">TN90</option>
                              <option value="TN91">TN91</option>
                              <option value="TN91Z">TN91Z</option>
                              <option value="TN92">TN92</option>
                              <option value="TN94">TN94</option>
                              <option value="TN96">TN96</option>
                              <option value="TN97">TN97</option>
                              <option value="TN97Z">TN97Z</option>
                              <option value="TN99">TN99</option>
                              <option value="TN15Z">TN15Z</option>
                              <option value="TN16Z">TN16Z</option>
                              <option value="TN18Z">TN18Z</option>
                              <option value="TN18Y">TN18Y</option>
                              <option value="TN19Y">TN19Y</option>
                              <option value="TN19Z">TN19Z</option>
                              <option value="TN20X">TN20X</option>
                              <option value="TN29W">TN29W</option>
                              <option value="TN29Z">TN29Z</option>
                              <option value="TN19">TN19</option>
                              <option value="TN13">TN13</option>
                              <option value="TN47Y">TN47Y</option>
                              <option value="TN47Y">TN47Y</option>
                              <option value="TN50Z">TN50Z</option>
                              <option value="TN82">TN82</option>
                              <option value="TN59W">TN59W</option>
                              <option value="TN09">TN09</option>
                              <option value="MP-70 ">MP-70 </option>
                              <option value="TN36">TN36</option>
                              <option value="KA01">KA01</option>
                            </CFormSelect>
                          )}
                        />
                        {errors.user_type && (
                          <div className="text-danger">
                            {"Field is required"}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-6 mb-3">
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
                      <div className="col-sm-6 mb-3">
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
                      <div className="col-sm-6 mb-3">
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
                      <div className="col-sm-6 mb-3">
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
                      <div className="col-sm-6 mb-3">
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

                      <div className="col-sm-6 mb-3">
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
                      <div className="col-sm-6 mb-3">
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
                      <div className="col-sm-6 mb-3">
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
                      <div className="col-sm-6 mb-3">
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

                      <div className="col-sm-6 mb-3">
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
                      <div className="col-sm-6 mb-3">
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
                      <div className="col-sm-6 mb-3">
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

                      <div className="col-sm-6 mb-3">
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
                      <div className="col-sm-6 mb-3">
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
                      <div className="col-sm-6 mb-3">
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
                      <div className="col-sm-6 mb-3">
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
