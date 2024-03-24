import React, { useEffect, useRef, useState } from "react";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useGetRegistrationsSaleByIdQuery } from "../../../../Services/sales";
import { CBadge, CButton } from "@coreui/react";

const ViewEntries = (props) => {
  const navigate = useNavigate();
  const [printed, setPrinted] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const { data, refetch } = useGetRegistrationsSaleByIdQuery(id);
  const [qrData, setQrData] = React.useState(window.location.href); // QR code data

  console.log(id, "queryParams43", data?.["data"], location);

  React.useEffect(() => {
    if (id) {
      //   refetch();
      // setTimeout(() => {
      //   downloadPDF().then(() => {
      //     navigate("/certificate-list");
      //   });
      // }, 2000);
    }
  }, [id]);

  useEffect(() => {
    function navigateAfterPrint() {
      // Navigate to another page after print
      navigate("/certificate-list"); // Replace with the actual URL
    }

    function handleAfterPrint() {
      // This function will be called after the print operation is complete
      console.log("Print operation completed");

      // Navigate to another page if printing hasn't already occurred
      if (!printed) {
        navigateAfterPrint();
        setPrinted(true); // Update the state to indicate that printing has occurred
      }
    }

    // Attach the afterprint event listener
    if (window.matchMedia) {
      // For modern browsers
      window.matchMedia("print").addListener((mediaEvent) => {
        if (!mediaEvent.matches) {
          // The print operation has finished
          handleAfterPrint();
        }
      });
    } else {
      // For older browsers
      window.onafterprint = handleAfterPrint;
    }

    // Initiate the print operation if it hasn't occurred already
    // if (!printed) {
    //   setTimeout(() => {
    //     window.print();
    //   }, 3000);
    // }

    // Clean up the event listener when the component unmounts
    return () => {
      if (window.matchMedia) {
        window.matchMedia("print").removeListener(() => {});
      } else {
        window.onafterprint = null;
      }
    };
  }, [printed]); // Dependency on 'printed' to re-run effect if 'printed' changes

  const downloadPDF = async () => {
    const element = document.getElementById("certificateContent");

    const canvas = await html2canvas(element, {
      scale: 4, // Adjust scale if needed
      useCORS: true, // Enable CORS if required for cross-origin content
      logging: true, // Enable logging for debugging (optional)
    });

    const imgData = canvas.toDataURL("image/png");

    // Calculate the aspect ratio of the image
    const aspectRatio = canvas.width / canvas.height;

    // Set the PDF dimensions based on the aspect ratio
    const pdfWidth = 215; // Width in mm (A4 size)
    const pdfHeight = pdfWidth / aspectRatio;

    // Set padding in mm
    const padding = 10;

    // Calculate adjusted dimensions with padding
    const adjustedPdfWidth = pdfWidth - 2 * padding;
    const adjustedPdfHeight = pdfHeight - 2 * padding;

    // Create a new jsPDF instance
    const pdf = new jsPDF({
      unit: "mm",
      format: [pdfWidth, pdfHeight],
    });

    // Add image with padding
    pdf.addImage(
      imgData,
      "PNG",
      padding,
      padding,
      adjustedPdfWidth,
      adjustedPdfHeight
    );

    // Save the PDF
    pdf.save("certificate.pdf");
  };

  return (
    <>
      <div className="d-flex justify-content-between py-3">
        <Link to={"/dashboard"}>
          <CButton color="dark" type="button" variant="outline">
            New Enttriy
          </CButton>
        </Link>
        <Link to={"/Entries"}>
          <CButton color="danger" type="button" variant="outline">
            Back
          </CButton>
        </Link>
        <CButton color="success" type="button" variant="outline">
          Print
        </CButton>
      </div>
      <div
        id="certificateContent"
        style={{ background: "white", padding: "0px 16px" }}
      >
        <>
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                " * {margin:0; padding:0; text-indent:0; }\n         .s1 { color: #242424;font-weight: 200; font-style: normal; text-decoration: none; font-size: 29px; }\n         .s2 { color: #000000d1; font-style: normal; font-weight: 200; text-decoration: none; font-size: 19px; }\n         .s3 { color:#000000d1;     font-weight: 200; text-decoration: none; font-size: 23px; }\n         p { color: black;  line-height: 1;font-style: normal;text-decoration: none; font-size: 14px; margin0px;padding:5px 2px 5px}\n         .s4 { color: black; font-family:Arial, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13.5pt; }\n         h1 { color: black; font-style: normal; font-weight: 400; text-decoration: none; font-size: 22px; }\n         .h2 { color: black; font-family:sans-serif; font-style: normal; font-weight: bold; text-decoration: none; }\n         .s5 { color: #000000; font-style: normal; font-weight: 700; text-decoration: none; }\n         .s6 { color: #000000; font-family:sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 14px; }\n         .s7 { color: #000000; font-family:sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 14px; }\n         .s8 { color: #000000; font-family:sans-serif; font-style: normal; font-weight: normal; text-decoration: none;}\n         .s9 { color: #000000; font-family:Arial, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13.5pt; }\n         .s10 { color: black; font-family:Arial, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13px; }\n         .a { color: black; font-family:Arial, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 13px; }\n         table, tbody {vertical-align: top; overflow: visible; }\n  .tabConte:{margin-bottom: 10px}    ",
            }}
          />
          <p />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "-14px",
            }}
          >
            <div style={{ width: "85%" }}>
              <div
                style={{
                  width: "max-content",
                  float: "right",
                  marginRight: "52px",
                }}
              >
                <p
                  className="s1"
                  style={{
                    paddingTop: "1pt",
                    paddingLeft: "67pt",
                    textIndent: "0pt",
                    textAlign: "center",
                  }}
                >
                  VEHICLE CONSPICUITY ONLINE MIS CERTIFICATE
                </p>
                <p
                  className="s2"
                  style={{
                    paddingTop: "5pt",
                    paddingLeft: "67pt",
                    textIndent: "0pt",
                    textAlign: "center",
                  }}
                >
                  COMPLIANCE TO AUTOMOTIVE INDUSTRY STANDARD - 089 &amp; 090
                </p>
                <p
                  className="s3"
                  style={{
                    paddingTop: "3pt",
                    paddingLeft: "67pt",
                    textIndent: "0pt",
                    textAlign: "center",
                  }}
                >
                  (Generated online in rtvsta.tn.gov.in)
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "13%",
                justifyContent: "end",
                height: "max-content",
              }}
            >
              <QRCode value={qrData} size={100} />
            </div>
          </div>

          <p style={{ textIndent: "0pt", textAlign: "left" }}>
            <br />
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  textIndent: "0pt",
                  textAlign: "left",
                }}
              >
                To:
              </p>
              <p
                style={{
                  textAlign: "left",
                }}
              >
                <p style={{ marginBottom: "-10px" }}>
                  The Regional Transport Office
                </p>{" "}
                <br /> TN12 POONAMALLE
              </p>
            </div>
            <div>
              <h1
                style={{
                  paddingLeft: "6pt",
                  textIndent: "0pt",
                  textAlign: "left",
                }}
              >
                RTV - CERTIFICATE
              </h1>
            </div>
            <div>
              <p style={{ textIndent: "0pt", textAlign: "right" }}>
                Certificate No: <span className="h2">TN12NC646699</span>
              </p>
              <p
                style={{
                  paddingTop: "4pt",
                  textIndent: "0pt",
                  textAlign: "right",
                }}
              >
                Fitment Date: <span className="h2">{data?.["data"]?.date}</span>
              </p>
            </div>
          </div>

          <table
            style={{
              borderCollapse: "collapse",
              // marginLeft: "5.98939pt",
              width: "100%",
            }}
            cellSpacing={0}
          >
            <tbody>
              <tr style={{ height: "19pt" }}>
                <td
                  style={{
                    width: "185pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                  colSpan={2}
                >
                  <p
                    className="s5"
                    style={{
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Vehicle Details
                  </p>
                </td>
                <td
                  style={{
                    width: "138pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                >
                  <p
                    className="s5"
                    style={{
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Vehicle Make &amp; Model
                  </p>
                </td>
                <td
                  style={{
                    width: "231pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                >
                  <p
                    className="s5"
                    style={{
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Manufacturer &amp; Distributor Details
                  </p>
                </td>
              </tr>
              <tr style={{ height: "15pt" }}>
                <td
                  style={{
                    width: "185pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                  colSpan={2}
                >
                  <p
                    className="s6"
                    style={{
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Registration No : <b>{data?.["data"]?.vehicleregno}</b>
                  </p>
                </td>
                <td
                  style={{
                    width: "138pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                >
                  <p
                    className="s6"
                    style={{ textIndent: "0pt", textAlign: "left" }}
                  >
                    Registration Year: {data?.["data"]?.date}
                  </p>
                </td>
                <td
                  style={{
                    width: "231pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                >
                  <p
                    className="s6"
                    style={{
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Trade Name : <b>REFLOMAX</b>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "16pt" }}>
                <td
                  style={{
                    width: "185pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                  colSpan={2}
                >
                  <p
                    className="s6"
                    style={{
                      paddingTop: "1pt",
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Chassis No : {data?.["data"]?.chassisnum}
                  </p>
                </td>
                <td
                  style={{
                    width: "138pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                >
                  <p
                    className="s6"
                    style={{
                      paddingTop: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Engine No : {data?.["data"]?.engineno}
                  </p>
                </td>
                <td
                  style={{
                    width: "231pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                >
                  <p
                    className="s8"
                    style={{
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Manufacturer Details: M/S. GLODIAN REFLECTIVE PVT LTD
                  </p>
                </td>
              </tr>
              <tr style={{ height: "15pt" }}>
                <td
                  style={{
                    width: "185pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                  colSpan={2}
                >
                  <p
                    className="s6"
                    style={{
                      paddingTop: "1pt",
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Vehicle Make: {data?.["data"]?.vehiclemake}
                  </p>
                </td>
                <td
                  style={{
                    width: "138pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                >
                  <p
                    className="s6"
                    style={{
                      paddingTop: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Vehicle Model : AL 1612/4210WB
                  </p>
                </td>
                <td
                  style={{
                    width: "231pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                >
                  <p
                    className="s8"
                    style={{
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Distributor Details: M/S. RAATANJEY AND CO
                  </p>
                </td>
              </tr>
              <tr style={{ height: "19pt" }}>
                <td
                  style={{
                    width: "277pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                  colSpan={2}
                >
                  <p
                    className="s5"
                    style={{
                      paddingTop: "1pt",
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Vehicle Owner Details
                  </p>
                </td>
                <td
                  style={{
                    width: "277pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                  colSpan={2}
                >
                  <p
                    className="s5"
                    style={{
                      paddingTop: "1pt",
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    RC IMAGE
                  </p>
                </td>
              </tr>
              <tr style={{ height: "15pt" }}>
                <td
                  style={{
                    width: "277pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                  colSpan={2}
                >
                  <p
                    className="s6"
                    style={{
                      paddingTop: "1pt",
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Company Name/Owner Name : N VARALAKSHMI
                  </p>
                </td>
                <td
                  style={{
                    width: "277pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                  colSpan={2}
                  rowSpan={8}
                >
                  <p
                    style={{
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    <span></span>
                  </p>
                  <img
                    style={{ width: "100%" }}
                    src={data?.["data"]?.rcimage}
                  />
                  <p />
                </td>
              </tr>
              <tr style={{ height: "37pt" }}>
                <td
                  style={{
                    width: "277pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                  colSpan={2}
                >
                  <p
                    className="s8"
                    style={{
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      lineHeight: "146%",
                      textAlign: "left",
                    }}
                  >
                    Owner Address / Register Address : 25 PRAKASAM STREET EZHIL
                    NAGAR VEPPAMPATTU TN 602024
                  </p>
                  <p
                    className="s8"
                    style={{
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Contact Number : 9940565735
                  </p>
                </td>
              </tr>
              <tr style={{ height: "18pt" }}>
                <td
                  style={{
                    width: "277pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                  colSpan={2}
                >
                  <p
                    className="s5"
                    style={{
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Conspicuity Tapes 20MM &amp; 50MM Fitment Details
                  </p>
                </td>
              </tr>
              <tr style={{ height: "14pt" }}>
                <td
                  style={{
                    width: "277pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                  colSpan={2}
                >
                  <p
                    className="s6"
                    style={{
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      lineHeight: "10pt",
                      textAlign: "left",
                    }}
                  >
                    20MM RED : 0 Mtrs | 20MM WHITE : 0 Mtrs
                  </p>
                </td>
              </tr>
              <tr style={{ height: "14pt" }}>
                <td
                  style={{
                    width: "277pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                  colSpan={2}
                >
                  <p
                    className="s6"
                    style={{
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    50MM Red : 2 Mtrs | 50MM White : 2 Mtrs | 50MM Yellow : 10
                    Mtrs
                  </p>
                </td>
              </tr>
              <tr style={{ height: "17pt" }}>
                <td
                  style={{
                    width: "277pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                  colSpan={2}
                >
                  <p
                    className="s5"
                    style={{
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Rear Marking Plates Details
                  </p>
                </td>
              </tr>
              <tr style={{ height: "34pt" }}>
                <td
                  style={{
                    width: "277pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                  colSpan={2}
                >
                  <p
                    className="s6"
                    style={{
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Class 3 : Red Retro Reflective and Yellow Retro Reflective -
                    Alternative Strips
                  </p>
                  <p
                    className="s9"
                    style={{
                      paddingTop: "5pt",
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 500 500"
                      width={20}
                      height={20}
                    >
                      <path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </svg>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "15pt" }}>
                <td
                  style={{
                    width: "277pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                  colSpan={2}
                >
                  <p
                    className="s6"
                    style={{
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Class 4 : Red Retro Reflective border and Yellow Retro
                    Reflective Centre
                  </p>
                </td>
              </tr>
              <tr style={{ height: "19pt" }}>
                <td
                  style={{
                    width: "173pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                  colSpan={2}
                >
                  <p
                    className="s5"
                    style={{
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Approval Details
                  </p>
                </td>
                <td
                  style={{
                    width: "381pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                  colSpan={2}
                >
                  <p
                    className="s5"
                    style={{
                      paddingLeft: "129pt",
                      paddingRight: "129pt",
                      textIndent: "0pt",
                      textAlign: "center",
                    }}
                  >
                    Certified By ARAI / ICAT
                  </p>
                </td>
              </tr>
              <tr style={{ height: "28pt" }}>
                <td
                  style={{
                    width: "173pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                  colSpan={2}
                >
                  <p
                    className="s6"
                    style={{
                      paddingTop: "1pt",
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      lineHeight: "132%",
                      textAlign: "left",
                    }}
                  >
                    TAC:ARAI Ref No: AG0824 Dated 29.03.2016 and ADDENDUM NO -
                    01 Dated 25.01.2017
                  </p>
                </td>
                <td
                  style={{
                    width: "179pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                >
                  <p
                    className="s6"
                    style={{
                      paddingTop: "1pt",
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      lineHeight: "132%",
                      textAlign: "left",
                    }}
                  >
                    COP Number : SHL/307/2021-2022/3000018791/COP/3252 Dated
                    30.09.2021
                  </p>
                </td>
                <td
                  style={{
                    width: "202pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                >
                  <p
                    className="s6"
                    style={{
                      paddingTop: "1pt",
                      paddingLeft: "1pt",
                      paddingRight: "19pt",
                      textIndent: "0pt",
                      lineHeight: "132%",
                      textAlign: "left",
                    }}
                  >
                    Test Report Number :SHL/310/2016-2017/8555/277
                    SHL/310/2018-2019/3000000938/TA/1913
                  </p>
                </td>
              </tr>
              <tr style={{ height: "19pt" }}>
                <td
                  style={{
                    width: "554pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                  colSpan={4}
                >
                  <p
                    className="s5"
                    style={{
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Fitment Images
                  </p>
                </td>
              </tr>
              <tr style={{ height: "15pt" }}>
                <td
                  style={{
                    width: "138pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                >
                  <p
                    className="s6"
                    style={{
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Front
                  </p>
                </td>
                <td
                  style={{
                    width: "139pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                >
                  <p
                    className="s6"
                    style={{
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Rear
                  </p>
                </td>
                <td
                  style={{
                    width: "139pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                >
                  <p
                    className="s6"
                    style={{
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Side-1
                  </p>
                </td>
                <td
                  style={{
                    width: "138pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                >
                  <p
                    className="s6"
                    style={{
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Side-2
                  </p>
                </td>
              </tr>
              <tr style={{ height: "110pt" }}>
                <td
                  style={{
                    width: "138pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                >
                  <p
                    style={{
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    <span></span>
                  </p>
                  <img
                    style={{
                      width: "100%",
                      height: "142px",
                      paddingLeft: "5px",
                    }}
                    src={data?.["data"]?.frontimage}
                  />
                  <p />
                </td>
                <td
                  style={{
                    width: "139pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                >
                  <p
                    style={{
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    <span></span>
                  </p>
                  <img
                    style={{ width: "100%", height: "142px" }}
                    src={data?.["data"]?.leftimage}
                  />
                  <p />
                </td>
                <td
                  style={{
                    width: "139pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                >
                  <p
                    style={{
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    <span></span>
                  </p>
                  <img
                    style={{ width: "100%", height: "142px" }}
                    src={data?.["data"]?.rightimage}
                  />
                  <p />
                </td>
                <td
                  style={{
                    width: "138pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                >
                  <p
                    style={{
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    <span></span>
                  </p>
                  <img
                    style={{ width: "100%", height: "142px" }}
                    src={data?.["data"]?.backimage}
                  />
                  <p />
                </td>
              </tr>
              <tr style={{ height: "25pt" }}>
                <td
                  style={{
                    width: "554pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                  colSpan={4}
                >
                  <p
                    className="s6"
                    style={{
                      paddingTop: "1pt",
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    We hereby certify that supplied/installed ICAT / ARAI
                    Approved Retro Reflective Tapes as per CMRV rule 104
                    specified under CMVR GSR 784 (E)
                  </p>
                </td>
              </tr>
              <tr style={{ height: "54pt" }}>
                <td
                  style={{
                    width: "416pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "1px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "1px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                  colSpan={3}
                >
                  <p
                    className="s6"
                    style={{
                      paddingTop: "1pt",
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    For APPU (RMAPMMS12)
                  </p>
                  <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                  </p>
                  <p
                    className="s7"
                    style={{
                      paddingLeft: "1pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Authorized Dealer Seal &amp; Signature
                  </p>
                </td>
                <td
                  style={{
                    width: "138pt",
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderLeftStyle: "solid",
                    borderLeftWidth: "0px",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "1px",
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderColor: "#000000",
                  }}
                >
                  <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                  </p>
                  <p
                    className="s7"
                    style={{
                      paddingLeft: "32pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Customer Signature
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p
            className="s10"
            style={{
              paddingLeft: "67pt",
              textIndent: "0pt",
              lineHeight: "9pt",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <a
              href="http://WWW.RTVSTA.TN.GOV.IN/"
              className="a"
              target="_blank"
            >
              [Note: This certi cate was downloaded from{" "}
            </a>
            WWW.RTVSTA.TN.GOV.IN]
          </p>
        </>
      </div>
    </>
  );
};

export default ViewEntries;
