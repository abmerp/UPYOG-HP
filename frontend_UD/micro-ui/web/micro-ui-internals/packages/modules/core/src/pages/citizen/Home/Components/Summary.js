import {

    Card, CardHeader, CardSubHeader, CardText,

    CitizenInfoLabel, Header, LinkButton, Row, StatusTable, SubmitBar, Table, CardSectionHeader, EditIcon, PDFSvg, Loader

  } from "@egovernments/digit-ui-react-components";

  import React,{ useMemo }  from "react";

  import { useTranslation } from "react-i18next";

  import { useHistory, useRouteMatch } from "react-router-dom";

//   import { convertEpochToDateDMY, stringReplaceAll, getOrderDocuments } from "../../../../../utils";

//   import DocumentsPreview from "../../../../../../../templates/ApplicationDetails/components/DocumentsPreview";




  const Summary = () => {

    const { t } = useTranslation();

    const history = useHistory();

    const match = useRouteMatch();

    let user = Digit.UserService.getUser();




    function getdate(date) {

      let newdate = Date.parse(date);

      return `${new Date(newdate).getDate().toString() + "/" + (new Date(newdate).getMonth() + 1).toString() + "/" + new Date(newdate).getFullYear().toString()

        }`;

    }




    const applicationDocs = ["Aadhar", "Electricity-Bill", "Land-Tax Reciept", "Title-deed of the property", "Site plan"]




    function getFloorData(){

        let floors = [];

            floors.push(

                {

                Floor:t(`First-Floor`),

                Level:0,

                Occupancy:t(`Resedential`),

                BuildupArea:93.9954,

                FloorArea:86.3296,

                CarpetArea: 56.980,

                key:t(`First-Floor`),

                },

                {

                Floor:t(`Second-Floor`),

                Level:1,

                Occupancy:t(`Resedential`),

                BuildupArea:92.9954,

                FloorArea:85.3296,

                CarpetArea: 58.980,

                key:t(`Second-Floor`),

                }

            );

        return floors;

      }

      const tableHeader = [

        {

            name:"BPA_TABLE_COL_FLOOR",

            id:"Floor",

        },

        {

            name:"BPA_TABLE_COL_LEVEL",

            id:"Level",

        },

        {

            name:"BPA_TABLE_COL_OCCUPANCY",

            id:"Occupancy",

        },

        {

            name:"BPA_TABLE_COL_BUILDUPAREA",

            id:"BuildupArea",

        },

        {

            name:"BPA_TABLE_COL_FLOORAREA",

            id:"FloorArea",

        },

        {

            name:"BPA_TABLE_COL_CARPETAREA",

            id:"CarpetArea",

        }

    ]




    const accessData = (plot) => {

        const name = plot;

        return (originalRow, rowIndex, columns) => {

          return originalRow[name];

        }

      }




      const tableColumns = useMemo(

        () => {

         

          return tableHeader.map((ob)=> ({

            Header:t(`${ob.name}`),

            accessor: accessData(ob.id),

            id: ob.id,

            //symbol: plot?.symbol,

            //sortType: sortRows,

          }));

   

             

        });




    return (

    <React.Fragment>

    <Card style={{paddingRight:"16px"}}>

        <StatusTable>

          <Row className="border-none" label={t(`BPA_APPLICATION_NUMBER_LABEL`)} text={"PBBPA20230629000357"} />

        </StatusTable>

    </Card>

    <Card style={{paddingRight:"16px"}}>

    <CardHeader>{t(`BPA_BASIC_DETAILS_TITLE`)}</CardHeader>

        <StatusTable>

          <Row className="border-none" label={t(`BPA_BASIC_DETAILS_APP_DATE_LABEL`)} text={"28/06/2023"} />

          <Row className="border-none" label={t(`BPA_BASIC_DETAILS_APPLICATION_TYPE_LABEL`)} text={"Self-Certification"}/>

          <Row className="border-none" label={t(`BPA_BASIC_DETAILS_SERVICE_TYPE_LABEL`)} text={"New-Construction"} />

          <Row className="border-none" label={t(`BPA_BASIC_DETAILS_OCCUPANCY_LABEL`)} text={"Resedential"}/>

          <Row className="border-none" label={t(`BPA_BASIC_DETAILS_RISK_TYPE_LABEL`)} text={"Low"} />

          <Row className="border-none" label={t(`BPA_BASIC_DETAILS_APPLICATION_NAME_LABEL`)} text={"Tulsi Das Khan"} />

        </StatusTable>

    </Card>

    <Card style={{paddingRight:"16px"}}>

    <CardHeader>{t("BPA_PLOT_DETAILS_TITLE")}</CardHeader>

    <StatusTable>

          <Row className="border-none" textStyle={{paddingLeft:"12px"}} label={t(`BPA_BOUNDARY_PLOT_AREA_LABEL`)} text={"167.17 sqft"} />

          <Row className="border-none" label={t(`BPA_PLOT_NUMBER_LABEL`)} text={"E-21"} />

          <Row className="border-none" label={t(`BPA_KHATHA_NUMBER_LABEL`)} text={"K-HP-7YUI8919399"}/>

          <Row className="border-none" label={t(`BPA_HOLDING_NUMBER_LABEL`)} text={"K-HP-83289329889"} />

          <Row className="border-none" label={t(`BPA_BOUNDARY_LAND_REG_DETAIL_LABEL`)} text={"R-TU-HP-2398392889-YY-2021"} />

    </StatusTable>

    </Card>

    <Card style={{paddingRight:"16px"}}>

    <CardHeader>{t("BPA_STEPPER_SCRUTINY_DETAILS_HEADER")}</CardHeader>

    <CardSubHeader style={{fontSize: "20px"}}>{t("BPA_EDCR_DETAILS")}</CardSubHeader>

    <StatusTable  style={{border:"none"}}>

      <Row className="border-none" label={t("BPA_EDCR_NO_LABEL")} text={"DCR62023DUCDD"}></Row>

      <CardSubHeader>{t("BPA_UPLOADED_PLAN_DIAGRAM")}</CardSubHeader>

      <LinkButton

        label={ <PDFSvg /> }

          onClick={() => console.log("Radhe Radhe")}

       />

       <p style={{ marginTop: "8px", marginBottom: "20px", textAlign:"Left", fontSize: "16px", lineHeight: "19px", color: "#505A5F", fontWeight: "400" }}>{t(`BPA_UPLOADED_PLAN_DXF`)}</p>

      <CardSubHeader>{t("BPA_SCRUNTINY_REPORT_OUTPUT")}</CardSubHeader>

      <LinkButton

        label={ <PDFSvg /> }

          onClick={() => console.log("Hare Krishna")}

       />

       <p style={{ marginTop: "8px", marginBottom: "20px", textAlign:"Left", fontSize: "16px", lineHeight: "19px", color: "#505A5F", fontWeight: "400" }}>{t(`BPA_SCRUTINY_REPORT_PDF`)}</p>

      </StatusTable>

      <hr style={{color:"#cccccc",backgroundColor:"#cccccc",height:"2px",marginTop:"20px",marginBottom:"20px"}}/>

      <CardSubHeader style={{fontSize: "20px"}}>{t("BPA_BUILDING_EXTRACT_HEADER")}</CardSubHeader>

      <StatusTable>

      <Row className="border-none" label={t("BPA_TOTAL_BUILT_UP_AREA_HEADER")} text={`${170.6674} ${t("BPA_SQ_MTRS_LABEL")}`}></Row>

      <Row className="border-none" label={t("BPA_SCRUTINY_DETAILS_NUMBER_OF_FLOORS_LABEL")} text={2}></Row>

      <Row className="border-none" label={t("BPA_HEIGHT_FROM_GROUND_LEVEL_FROM_MUMTY")} text={`${6.94} ${t("BPA_MTRS_LABEL")}`}></Row>

      </StatusTable>

      <hr style={{color:"#cccccc",backgroundColor:"#cccccc",height:"2px",marginTop:"20px",marginBottom:"20px"}}/>

      <CardSubHeader style={{fontSize: "20px"}}>{t("BPA_OCC_SUBOCC_HEADER")}</CardSubHeader>

     

      <div style={{ marginTop: "19px", background: "#FAFAFA", border: "1px solid #D6D5D4", borderRadius: "4px", padding: "8px", lineHeight: "19px", maxWidth: "960px", minWidth: "280px" }}>

      <CardSubHeader style={{marginTop:"15px", fontSize: "18px"}}>{t("BPA_BLOCK_SUBHEADER")} {1}</CardSubHeader>

      <StatusTable >

      <Row className="border-none" textStyle={{wordBreak:"break-word"}} label={t("BPA_SUB_OCCUPANCY_LABEL")} text={"Sub-Occupancy"}></Row>

      </StatusTable>

      <div style={{overflow:"scroll"}}>

      <Table

        className="customTable table-fixed-first-column table-border-style"

        t={t}

        disableSort={false}

        autoSort={true}

        manualPagination={false}

        isPaginationRequired={false}

        initSortId="S N "

        data={getFloorData()}

        columns={tableColumns}

        getCellProps={(cellInfo) => {

          return {

            style: {},

          };

        }}

      />

      </div>

      </div>

      <hr style={{color:"#cccccc",backgroundColor:"#cccccc",height:"2px",marginTop:"20px",marginBottom:"20px"}}/>

      <CardSubHeader style={{fontSize: "20px"}}>{t("BPA_APP_DETAILS_DEMOLITION_DETAILS_LABEL")}</CardSubHeader>

      <StatusTable  style={{border:"none"}}>

      <Row className="border-none" label={t("BPA_APPLICATION_DEMOLITION_AREA_LABEL")} text={t("CS_NA")}></Row>

      </StatusTable>

    </Card>

      <Card style={{paddingRight:"16px"}}>

      <CardHeader>{t("BPA_NEW_TRADE_DETAILS_HEADER_DETAILS")}</CardHeader>

      <StatusTable>

          <Row className="border-none" textStyle={{paddingLeft:"12px"}} label={t(`BPA_DETAILS_PIN_LABEL`)} text={"712513"} />

          <Row className="border-none" label={t(`BPA_CITY_LABEL`)} text={"Shimla"} />

          <Row className="border-none" label={t(`BPA_LOC_MOHALLA_LABEL`)} text={"5 Peer Colony"} />

          <Row className="border-none" label={t(`BPA_DETAILS_SRT_NAME_LABEL`)} text={"Kuntighat"} />

          <Row className="border-none" label={t(`ES_NEW_APPLICATION_LOCATION_LANDMARK`)} text={"PreetNagar"} />

      </StatusTable>

      </Card>

      <Card style={{paddingRight:"16px"}}>

        <CardHeader>{t("BPA_APPLICANT_DETAILS_HEADER")}</CardHeader>

        {<CardSubHeader>{t("COMMON_OWNER")}</CardSubHeader>}

        <StatusTable>

        <Row className="border-none" label={t(`CORE_COMMON_NAME`)} text={"Anil"} />

        <Row className="border-none" label={t(`BPA_APPLICANT_GENDER_LABEL`)} text={"Male"} />

        <Row className="border-none" label={t(`CORE_COMMON_MOBILE_NUMBER`)} text={"9999009999"} />

        <Row className="border-none" label={t(`BPA_IS_PRIMARY_OWNER_LABEL`)} text={`true`} />

        </StatusTable>

       

      </Card>

      <Card style={{paddingRight:"16px"}}>

        <CardHeader>{t("BPA_DOCUMENT_DETAILS_LABEL")}</CardHeader>

        <StatusTable  style={{border:"none"}}>

        <CardSubHeader>{t("Identity-Proof")}</CardSubHeader>

        <LinkButton

            label={ <PDFSvg /> }

            onClick={() => console.log("Radhe Radhe")}

        />

       <p style={{ marginTop: "8px", marginBottom: "20px", textAlign:"Left", fontSize: "16px", lineHeight: "19px", color: "#505A5F", fontWeight: "400" }}>{t(`Aadhar`)}</p>

      <CardSubHeader>{t("Address-Proof")}</CardSubHeader>

      <LinkButton

        label={ <PDFSvg /> }

          onClick={() => console.log("Hare Krishna")}

       />

       <p style={{ marginTop: "8px", marginBottom: "20px", textAlign:"Left", fontSize: "16px", lineHeight: "19px", color: "#505A5F", fontWeight: "400" }}>{t(`Electricity-Bill`)}</p>

       <CardSubHeader>{t("Land-Tax-reciept")}</CardSubHeader>

        <LinkButton

            label={ <PDFSvg /> }

            onClick={() => console.log("Radhe Radhe")}

        />

       <p style={{ marginTop: "8px", marginBottom: "20px", textAlign:"Left", fontSize: "16px", lineHeight: "19px", color: "#505A5F", fontWeight: "400" }}>{t(`Land-Tax-Reciept`)}</p>

      <CardSubHeader>{t("Title deed of the property")}</CardSubHeader>

      <LinkButton

        label={ <PDFSvg /> }

          onClick={() => console.log("Hare Krishna")}

       />

       <p style={{ marginTop: "8px", marginBottom: "20px", textAlign:"Left", fontSize: "16px", lineHeight: "19px", color: "#505A5F", fontWeight: "400" }}>{t(`Title Deed of the property`)}</p>

       <CardSubHeader>{t("Site Plan")}</CardSubHeader>

      <LinkButton

        label={ <PDFSvg /> }

          onClick={() => console.log("Hare Krishna")}

       />

       <p style={{ marginTop: "8px", marginBottom: "20px", textAlign:"Left", fontSize: "16px", lineHeight: "19px", color: "#505A5F", fontWeight: "400" }}>{t(`Site Plan`)}</p>

      </StatusTable>

        {/* {<DocumentsPreview documents={getOrderDocuments(applicationDocs)} svgStyles = {{}} isSendBackFlow = {false} isHrLine = {true} titleStyles ={{fontSize: "18px", lineHeight: "24px", "fontWeight": 700, marginBottom: "10px"}}/>} */}

      </Card>

      <Card style={{paddingRight:"16px"}}>

      <CardHeader>{t("BPA_NOC_DETAILS_SUMMARY")}</CardHeader>

        <div>

        <CardSectionHeader style={{marginBottom: "24px"}}>{`Fire NOC`}</CardSectionHeader>

        <StatusTable>

          <Row className="border-none" label={t(`Fire NOC Application Number`)} text={"PG-NOCSRV-2023-06-28-00119"} />

          <Row className="border-none" label={t(`BPA_NOC_STATUS`)} text={t(`Created`)} textStyle={{color : "#00703C"}} />

          <Row className="border-none" label={`${t("BPA_NOC_SUBMISSION_DATE")}`} text={"28/06/2023"} />

          <Row className="border-none" label={`${t("BPA_APPROVAL_NUMBER_LABEL")}`} text={"Pending"} />

         

        </StatusTable>

      </div>

   

      </Card>

      <Card style={{paddingRight:"16px"}}>

      <CardSubHeader>{t("BPA_SUMMARY_FEE_EST")}</CardSubHeader>

      <StatusTable>

          <Row className="border-none" label={t(`Application Fee`)} text={"₹ 100"} />

          <Row className="border-none" label={t(`Sanction Fee`)} text={"₹ 500"} textStyle={{color : "#00703C"}} />

          <Row className="border-none" label={`${t("Total Amount")}`} text={"₹ 600"} />

      </StatusTable>

      <hr style={{color:"#cccccc",backgroundColor:"#cccccc",height:"2px",marginTop:"20px",marginBottom:"20px"}}/>

      <CardHeader>{t("BPA_COMMON_TOTAL_AMT")}</CardHeader>

      <CardHeader>₹ {"600"}</CardHeader>

      <SubmitBar label={t("BPA_SEND_TO_CITIZEN_LABEL")} />

      </Card>

    </React.Fragment>

    );

  };

 

  export default Summary;