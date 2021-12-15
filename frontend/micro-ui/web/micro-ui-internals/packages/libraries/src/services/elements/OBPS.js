import { Request } from "../atoms/Utils/Request"
import Urls from "../atoms/urls";
import { format } from "date-fns";
import { MdmsService } from "./MDMS";
import React from "react";

export const OBPSService = {
  scrutinyDetails: (tenantId, params) =>
    Request({
      url: Urls.obps.scrutinyDetails,
      params: { tenantId, ...params },
      auth: true,
      userService: true,
      method: "POST"
    }),
  comparisionReport: (tenantId, params) =>
    Request({
      url: Urls.obps.comparisionReport,
      params: { tenantId, ...params },
      auth: true,
      userService: true,
      method: "POST"
    }),
  create: (details, tenantId) =>
    Request({
      url: Urls.obps.create,
      data: details,
      useCache: false,
      setTimeParam: false,
      userService: true,
      method: "POST",
      params: {},
      auth: true,
    }),
  NOCSearch: (tenantId, sourceRefId) =>
    Request({
      url: Urls.obps.nocSearch,
      params: { tenantId, ...sourceRefId },
      auth: true,
      userService: true,
      method: "POST"
    }),
  update: (details, tenantId) =>
    Request({
      url: Urls.obps.update,
      data: details,
      useCache: false,
      setTimeParam: false,
      userService: true,
      method: "POST",
      params: {},
      auth: true,
    }),
    updateNOC: (details, tenantId) =>
    Request({
      url: Urls.obps.updateNOC,
      data: details,
      useCache: false,
      setTimeParam: false,
      userService: true,
      method: "POST",
      params: {},
      auth: true,
    }),
  BPASearch:(tenantId, params) =>
    Request({
      url: Urls.obps.bpaSearch,
      params: { tenantId, ...params },
      auth: true,
      userService: true,
      method: "POST"
    }),
  BPAREGSearch:(tenantId, details, params) =>
    Request({
      url: Urls.obps.bpaRegSearch,
      params: { ...params },
      auth: true,
      userService: true,
      method: "POST",
      data: details,
    }),
    BPAREGCreate: (details, tenantId) =>
    Request({
      url: Urls.obps.bpaRegCreate,
      data: details,
      useCache: false,
      setTimeParam: false,
      userService: window.location.href.includes("openlink")? false : true,
      method: "POST",
      params: {},
      auth: window.location.href.includes("openlink") ? false : true,
    }),
    BPAREGGetBill: (tenantId, filters = {}) =>
    Request({
      url: Urls.obps.bpaRegGetBill,
      useCache: false,
      method: "POST",
      auth: false,
      userService: false,
      params: { tenantId, ...filters },
    })
      .then((d) => {
        return d;
      })
      .catch((err) => {
        if (err?.response?.data?.Errors?.[0]?.code === "EG_BS_BILL_NO_DEMANDS_FOUND") return { Bill: [] };
        else throw err;
      }),
  BPAREGupdate: (details, tenantId) =>
    Request({
      url: Urls.obps.bpaRegUpdate,
      data: details,
      useCache: false,
      setTimeParam: false,
      userService:  window.location.href.includes("openlink") ? false : true,
      method: "POST",
      params: {},
      auth:  window.location.href.includes("openlink") ? false : true,
    }),
  receipt_download: (bussinessService, consumerCode, tenantId, filters = {}) =>
    Request({
      url: Urls.obps.receipt_download,
      data: {},
      useCache: true,
      method: "POST",
      params: { bussinessService, consumerCode, tenantId, ...filters },
      auth: true,
      locale: true,
      userService: true,
      userDownload: true,
    }),
  edcr_report_download: (details, tenantId) =>
    Request({
      url: Urls.obps.edcrreportdownload,
      data: details,
      useCache: true,
      method: "POST",
      auth: true,
      locale: true,
      userService: false,
      userDownload: true,
    }),
  LicenseDetails: async (tenantId, params) => {
    const response = await OBPSService.BPAREGSearch(tenantId, {}, params);
    if (!response?.Licenses?.length) {
      return;
    }
    const [License] = response?.Licenses;

    const paymentRes = await Digit.PaymentService.recieptSearch(
      License?.tenantId,
      "BPAREG",
      {consumerCodes: License?.applicationNumber, isEmployee:true}
    );

    const mdmsRes = await MdmsService.getMultipleTypes(License?.tenantId, "StakeholderRegistraition", ["TradeTypetoRoleMapping"]);

    if (License?.tradeLicenseDetail?.applicationDocuments?.length && mdmsRes?.StakeholderRegistraition?.TradeTypetoRoleMapping?.length > 0) {
      mdmsRes?.StakeholderRegistraition?.TradeTypetoRoleMapping?.map(doc => {
        if(doc?.docTypes?.length > 0 && doc?.tradeType == License?.tradeLicenseDetail?.tradeUnits?.[0]?.tradeType) {
          doc?.docTypes?.map(docType => {
            License?.tradeLicenseDetail?.applicationDocuments?.forEach(document => {
              if(docType?.code == document?.documentType && docType?.info) document.info = docType?.info
            })
          })
        }
      })
    }

    const details = [
      {
        title: " ",
        values: [
          { title: "BPA_APPLICATION_NUMBER_LABEL", value: License?.applicationNumber || "NA"  }
        ]
      },
      License?.tradeLicenseDetail?.tradeUnits?.[0]?.tradeType.includes("ARCHITECT") ? {
      title: "BPA_LICENSE_DETAILS_LABEL",
      asSectionHeader: true,
      values: [
        { title: "BPA_LICENSE_TYPE", value: `TRADELICENSE_TRADETYPE_${License?.tradeLicenseDetail?.tradeUnits?.[0]?.tradeType?.split(".")[0]}` || "NA" },
        { title: "BPA_COUNCIL_OF_ARCH_NO_LABEL", value: License?.tradeLicenseDetail?.additionalDetail?.counsilForArchNo || "NA" }
      ]
    } : {
      title: "BPA_LICENSE_DETAILS_LABEL",
      asSectionHeader: true,
      values: [
        { title: "BPA_LICENSE_TYPE", value: `TRADELICENSE_TRADETYPE_${License?.tradeLicenseDetail?.tradeUnits?.[0]?.tradeType?.split(".")[0]}` || "NA"  }
      ]
    }, {
      title: "BPA_LICENSEE_DETAILS_HEADER_OWNER_INFO",
      asSectionHeader: true,
      values: [
        { title: "BPA_APPLICANT_NAME_LABEL", value: License?.tradeLicenseDetail?.owners?.[0]?.name || "NA"  },
        { title: "BPA_APPLICANT_GENDER_LABEL", value: License?.tradeLicenseDetail?.owners?.[0]?.gender || "NA"  },
        { title: "BPA_OWNER_MOBILE_NO_LABEL", value: License?.tradeLicenseDetail?.owners?.[0]?.mobileNumber || "NA"  },
        { title: "BPA_APPLICANT_EMAIL_LABEL", value: License?.tradeLicenseDetail?.owners?.[0]?.emailId || "NA"   },
        { title: "BPA_APPLICANT_PAN_NO", value: License?.tradeLicenseDetail?.owners?.[0]?.pan || "NA" }
      ]
    }, {
      title: "BPA_PERMANANT_ADDRESS_LABEL",
      asSectionHeader: true,
      values: [
        { title: "BPA_PERMANANT_ADDRESS_LABEL", value: License?.tradeLicenseDetail?.owners?.[0]?.permanentAddress || "NA" }
      ]
    }, {
      title: "BPA_APPLICANT_CORRESPONDENCE_ADDRESS_LABEL",
      asSectionHeader: true,
      values: [
        { title: "BPA_APPLICANT_CORRESPONDENCE_ADDRESS_LABEL", value: License?.tradeLicenseDetail?.owners?.[0]?.correspondenceAddress || "NA"  }
      ]
    },{
      title: "BPA_DOCUMENT_DETAILS_LABEL",
      asSectionHeader: true,
      additionalDetails: {
        documents: [{
          title: "",
          values: License?.tradeLicenseDetail?.applicationDocuments?.map(doc => ({
            title: `BPAREG_HEADER_${doc?.documentType?.replaceAll('.', '_')}`,
            documentType: doc?.documentType,
            documentUid: doc?.documentUid,
            fileStoreId: doc?.fileStoreId,
            id: doc?.id,
            docInfo: doc?.info
          }))
        }]
      },
    },
    paymentRes?.Payments?.length > 0 && {
      title: "BPA_FEE_DETAILS_LABEL",
      additionalDetails: {
        inspectionReport: [],
        values: [
          { title: "BPAREG_FEES", value: <span>&#8377;{paymentRes?.Payments?.[0]?.totalAmountPaid}</span>},
          { title: "BPA_STATUS_LABEL", isTransLate: true, isStatus: true, value: paymentRes?.Payments?.[0]?.totalAmountPaid ? ("WF_BPA_PAID") : "NA", isTransLate:true }
        ]
      }
    }
  ]

  return {
      applicationData: License,
      applicationDetails: details,
      tenantId: License?.tenantId,
      payments: paymentRes?.Payments || []
    }
  },
  BPADetailsPage: async (tenantId, filters) => {
    const response = await OBPSService.BPASearch(tenantId, filters);
    if (!response?.BPA?.length) {
      return;
    }
    const [BPA] = response?.BPA;
    const edcrResponse = await OBPSService.scrutinyDetails(BPA?.tenantId, { edcrNumber: BPA?.edcrNumber });
    const [edcr] = edcrResponse?.edcrDetail;
    const mdmsRes = await MdmsService.getMultipleTypes(tenantId, "BPA", ["RiskTypeComputation", "CheckList"]);
    const riskType = Digit.Utils.obps.calculateRiskType(mdmsRes?.BPA?.RiskTypeComputation, edcr?.planDetail?.plot?.area, edcr?.planDetail?.blocks);
    BPA.riskType = riskType;
    const nocResponse = await OBPSService.NOCSearch(BPA?.tenantId, { sourceRefId: BPA?.applicationNo });
    const noc = nocResponse?.Noc;
    const filter = { approvalNo: edcr?.permitNumber};
    const bpaResponse = await OBPSService.BPASearch(tenantId, { ...filter });
       const comparisionRep = {
         ocdcrNumber: BPA?.edcrNumber,
         edcrNumber: bpaResponse?.BPA?.[0]?.edcrNumber
      }
    const comparisionReport = await OBPSService.comparisionReport(BPA?.tenantId, { ...comparisionRep });

    const nocDetails = noc
      ?.map((nocDetails, index) => ({
        title: index === 0 ? "BPA_NOC_DETAILS_SUMMARY" : "",
        values: [
          {
            title: `BPA_${nocDetails?.nocType}_LABEL`,
            value: nocDetails?.applicationNo,
            isNotTranslated: true
          },
          {
            title: `BPA_NOC_STATUS`,
            value: nocDetails?.applicationStatus,
            field: "STATUS"
          },
          nocDetails?.additionalDetails?.SubmittedOn && {
            title: "BPA_SUDMITTED_ON_LABEL",
            value: nocDetails?.additionalDetails?.SubmittedOn ? format(new Date(Number(nocDetails?.additionalDetails?.SubmittedOn)), 'dd/MM/yyyy') : "NA",
            isNotTranslated: true
          },
          nocDetails?.nocNo && {
            title: "BPA_APPROVAL_NUMBER_LABEL",
            value: nocDetails?.nocNo || "NA",
            isNotTranslated: true
          },
          nocDetails?.nocNo && {
            title: "BPA_APPROVED_REJECTED_ON_LABEL",
            value: (nocDetails?.applicationStatus === "APPROVED" || nocDetails?.applicationStatus === "REJECTED" || nocDetails?.applicationStatus === "AUTO_APPROVED" || nocDetails?.applicationStatus === "AUTO_REJECTED") ? format(new Date(Number(nocDetails?.auditDetails?.lastModifiedTime)), 'dd/MM/yyyy') : "NA",
            isNotTranslated: true
          }
        ],
        additionalDetails: {
          data: nocDetails,
          noc: [
            {
              title: "BPA_DOCUMENT_DETAILS_LABEL",
              values: nocDetails?.documents?.map((doc) => ({
                title: doc?.documentType?.replaceAll('.', '_'),
                documentType: doc?.documentType,
                documentUid: doc?.documentUid,
                fileStoreId: doc?.fileStoreId,
                id: doc?.id
              })),
            },
          ],
        },
      }));
      let inspectionReport = [];
      let checklist = [];
      BPA?.additionalDetails?.fieldinspection_pending?.filter((ob) => ob.docs && ob.docs.length>0).map((ob,ind) => {
        checklist = [];
        inspectionReport.push({
        title: "BPA_FI_REPORT",
        asSectionHeader: true,
        values: [
          { title: "BPA_FI_DATE_LABEL", value: ob.date },
          { title: "BPA_FI_TIME_LABEL", value: ob.time },
        ]
      });
      ob?.questions?.map((q,index) => {
        checklist.push({title: q.question, value: q.value});
      checklist.push({ title: "BPA_ENTER_REMARKS", value: q.remarks});
    })
      inspectionReport.push(
        {
          title: "BPA_CHECK_LIST_DETAILS",
          asSectionHeader: true,
          values: checklist,
        });
      inspectionReport.push({
        title: "BPA_DOCUMENT_DETAILS_LABEL",
        asSectionHeader: true,
        additionalDetails: {
          obpsDocuments: [{
            title: "",
            values: ob?.docs?.map(doc => ({
              title: doc?.documentType?.replaceAll('.', '_'),
              documentType: doc?.documentType,
              documentUid: doc?.fileStore,
              fileStoreId: doc?.fileStoreId,
              id: doc?.id
            }))
          }]
        }})
      })

    let details = [];

    let applicationDetailsInfo = {
      title: " ",
      isCommon: true,
      values: [
        { title: "BPA_APPLICATION_NUMBER_LABEL", value: BPA?.applicationNo || "NA" }
      ]
    };

    let permitcondn = [];
    BPA?.additionalDetails?.pendingapproval && BPA?.additionalDetails?.pendingapproval.length>0 && BPA?.additionalDetails?.pendingapproval.map((ob,index) => {
      permitcondn.push({title:`${index+1}. ${ob}`, value:""})
    })

    let PermitConditions = {
      title:"BPA_PERMIT_CONDITIONS",
      isTitleVisible: permitcondn?.length > 0 ? false : true,
      isNotAllowed: permitcondn?.length > 0 ? false : true,
      additionalDetails:{
        inspectionReport:[],
        permit:[...permitcondn]
      }
    }

    if(permitcondn.length == 0)
    PermitConditions={};
    
    if(BPA?.approvalNo) {
      applicationDetailsInfo?.values?.push({ title: "BPA_PERMIT_NUMBER_LABEL", value: BPA?.approvalNo || "NA"  });
      applicationDetailsInfo?.values?.push({ title: "BPA_PERMIT_VALIDITY", value: BPA?.additionalDetails?.validityDate ? `${format(new Date(BPA?.applicationDate), 'dd/MM/yyyy')} - ${format(new Date(BPA?.additionalDetails?.validityDate), 'dd/MM/yyyy')}` : "NA"  });
    }


    const basicDetails = {
      title: "BPA_BASIC_DETAILS_TITLE",
      asSectionHeader: true,
      isInsert: true,
      isCommon: true,
      values: [
        { title: "BPA_BASIC_DETAILS_APP_DATE_LABEL", value: BPA?.auditDetails?.createdTime ? format(new Date(BPA?.auditDetails?.createdTime), 'dd/MM/yyyy') : '' },
        { title: "BPA_BASIC_DETAILS_APPLICATION_TYPE_LABEL", value: `WF_BPA_${edcr?.appliactionType}` },
        { title: "BPA_BASIC_DETAILS_SERVICE_TYPE_LABEL", value: edcr?.applicationSubType },
        { title: "BPA_BASIC_DETAILS_OCCUPANCY_LABEL", value: edcr?.planDetail?.planInformation?.occupancy },
        { title: "BPA_BASIC_DETAILS_RISK_TYPE_LABEL", value: `WF_BPA_${riskType}`, isInsert: true, },
        { title: "BPA_BASIC_DETAILS_APPLICATION_NAME_LABEL", value: edcr?.planDetail?.planInformation?.applicantName },
      ]
    };

    const plotDetails =  {
      title: "BPA_PLOT_DETAILS_TITLE",
      asSectionHeader: true,
      isCommon: true,
      values: [
        { title: "BPA_BOUNDARY_PLOT_AREA_LABEL", value: `${edcr?.planDetail?.planInformation?.plotArea} sq.ft` || "NA", isNotTranslated: true   },
        { title: "BPA_PLOT_NUMBER_LABEL", value: edcr?.planDetail?.planInformation?.plotNo || "NA", isNotTranslated: true  },
        { title: "BPA_KHATHA_NUMBER_LABEL", value: edcr?.planDetail?.planInformation?.khataNo || "NA", isNotTranslated: true  },
        { title: "BPA_HOLDING_NUMBER_LABEL", value: BPA?.additionalDetails?.holdingNo || "NA", isNotTranslated: true  },
        { title: "BPA_BOUNDARY_LAND_REG_DETAIL_LABEL", value: BPA?.additionalDetails?.registrationDetails || "NA", isNotTranslated: true }
      ]
    };

    const scrutinyDetails = {
      title: "BPA_STEPPER_SCRUTINY_DETAILS_HEADER",
      isScrutinyDetails: true,
      isBackGroundColor: true,
      additionalDetails: {
        values: [
          { title: "BPA_EDCR_DETAILS", value: " " },
          { title: BPA?.businessService !== "BPA_OC" ? "BPA_EDCR_NO_LABEL" : "BPA_OC_EDCR_NO_LABEL", value: BPA?.edcrNumber || "NA" },
        ],
        scruntinyDetails: [
          { title: "BPA_UPLOADED_PLAN_DIAGRAM", value: edcr?.updatedDxfFile, text: "BPA_UPLOADED_PLAN_DXF" },
          { title: "BPA_SCRUNTINY_REPORT_OUTPUT", value: edcr?.planReport, text: "BPA_SCRUTINY_REPORT_PDF" },
        ]
      }
    };

    const buildingExtractionDetails = {
      title: "",
      isScrutinyDetails: true,
      isBackGroundColor: true,
      additionalDetails: {
        values: [
          { title: "BPA_BUILDING_EXTRACT_HEADER", value : " "},
          { title: "BPA_BUILTUP_AREA_HEADER", value: edcr?.planDetail?.blocks?.[0]?.building?.totalBuitUpArea || "NA"},
          { title: "BPA_SCRUTINY_DETAILS_NUMBER_OF_FLOORS_LABEL", value: edcr?.planDetail?.blocks?.[0]?.building?.totalFloors || "NA" },
          { title: "BPA_HEIGHT_FROM_GROUND_LEVEL", value: edcr?.planDetail?.blocks?.[0]?.building?.declaredBuildingHeigh || "NA" }
        ],
        scruntinyDetails: []
      }
    };

    const demolitionAreaDetails = {
      title: "",
      isScrutinyDetails: true,
      isBackGroundColor: true,
      additionalDetails: {
        values: [
          { title: "BPA_APP_DETAILS_DEMOLITION_DETAILS_LABEL", value : " "},
          { title: "BPA_APPLICATION_DEMOLITION_AREA_LABEL", value: edcr?.planDetail?.planInformation?.demolitionArea ? `${edcr?.planDetail?.planInformation?.demolitionArea} sq.mtrs` : "NA" } 
        ],
        scruntinyDetails: []
      }
    };

    const subOccupancyTableDetails = {
      title: "",
      isSubOccupancyTable: true,
      isTitleRepeat: true,
      additionalDetails: {
        values: [
          { title: "BPA_OCC_SUBOCC_HEADER", value : " "} 
        ],
        subOccupancyTableDetails: [
          { title: "BPA_APPLICATION_DEMOLITION_AREA_LABEL", value: edcr },
          { title: "NO_REPEAT", value: "" }
        ]
      }
    }

    const addressDetails = {
      title: "BPA_NEW_TRADE_DETAILS_HEADER_DETAILS",
      asSectionHeader: true,
      isCommon: true,
      values: [
        { title: "BPA_DETAILS_PIN_LABEL", value: BPA?.landInfo?.address?.pincode },
        { title: "BPA_CITY_LABEL", value: BPA?.landInfo?.address?.city },
        { title: "BPA_LOC_MOHALLA_LABEL", value: BPA?.landInfo?.address?.locality?.name },
        { title: "BPA_DETAILS_SRT_NAME_LABEL", value: BPA?.landInfo?.address?.street },
        { title: "ES_NEW_APPLICATION_LOCATION_LANDMARK", value: BPA?.landInfo?.address?.landmark }
      ]
    };


    const checkOwnerLength = BPA?.landInfo?.owners?.length || 1;
    const ownerDetails = {
      title: "BPA_APPLICANT_DETAILS_HEADER",
      isOwnerDetails: true,
      additionalDetails: {
        owners: BPA?.landInfo?.owners?.map((owner, index) => {
          return {
            title: (Number(checkOwnerLength) > 1)  ? "COMMON_OWNER" : "",
            values: [
              { title: "CORE_COMMON_NAME", value: owner?.name },
              { title: "BPA_APPLICANT_GENDER_LABEL", value: owner?.gender },
              { title: "CORE_COMMON_MOBILE_NUMBER", value: owner?.mobileNumber },
            ],
          };
        })
      },
    };

    const documentDetails =  {
      title: "BPA_DOCUMENT_DETAILS_LABEL",
      asSectionHeader: true,
      isDocumentDetails: true,
      additionalDetails: {
        obpsDocuments: [{
          title: "",
          values: BPA?.documents?.map(doc => ({
            title: doc?.documentType?.replaceAll('.', '_'),
            documentType: doc?.documentType,
            documentUid: doc?.documentUid,
            fileStoreId: doc?.fileStoreId,
            id: doc?.id
          }))
        }]
      },
    };


    let approvalChecks = [];
    let approvalChecksDetails = {}
    if (BPA?.status === "APPROVAL_INPROGRESS") {
      mdmsRes?.BPA?.CheckList.forEach(checklist => {
        if (checklist?.RiskType === riskType && checklist?.applicationType === edcr?.appliactionType && checklist?.ServiceType === edcr?.applicationSubType && checklist?.WFState === "PENDINGAPPROVAL" && checklist?.conditions?.length > 0) {
          approvalChecks.push(...checklist?.conditions)
        }
      })
      
      approvalChecksDetails = {
        title: "BPA_PERMIT_CONDITIONS",
        isTitleVisible: approvalChecks?.length > 0 ? false : true,
        asSectionHeader: true,
        isPermissions: true,
        additionalDetails: {
          permissions: approvalChecks
        }
      }
    }

    // if(inspectionReport) details.push(inspectionReport);\
    let val;
    var i;
    let FieldInspectionData = [];
    inspectionReport && BPA?.additionalDetails?.fieldinspection_pending?.[0]?.questions.length>0 && inspectionReport.map((ob,index) => {
      if(ob.title.includes("FI_REPORT"))
      FieldInspectionData = [...FieldInspectionData, {title:ob.title,additionalDetails:{inspectionReport:[],values:ob.values}} ];
      else if(ob.title.includes("CHECK_LIST"))
      FieldInspectionData = [...FieldInspectionData, {title:ob.title,additionalDetails:{isChecklist:true,inspectionReport:[],values:ob.values}}]
      else
      {
        let improvedDoc = [...ob.additionalDetails.obpsDocuments?.[0]?.values];
        improvedDoc.map((ob) => { ob["isNotDuplicate"] = true; })
        improvedDoc.map((ob,index) => {
        val = ob.documentType;
          if(ob.isNotDuplicate == true)
          for(i=index+1; i<improvedDoc.length;i++)
          {
            if(val === improvedDoc[i].documentType)
            improvedDoc[i].isNotDuplicate=false;
          }
      });
      FieldInspectionData = [...FieldInspectionData,{title:ob.title,additionalDetails:{FIdocuments:[],"documents":[{values:improvedDoc}]}} ]
      }
    });

    const fiReports = {
      title: "",
      isFieldInspection: true,
      isNotAllowed: BPA?.additionalDetails?.fieldinspection_pending?.length > 0 ? false : true,
      additionalDetails: {
        values: [],
        fiReport : BPA?.additionalDetails?.fieldinspection_pending?.length > 0 ? true : false
      }
    }

    if(BPA?.businessService !== "BPA_OC") {
      details = [...details, applicationDetailsInfo, basicDetails, plotDetails, scrutinyDetails, buildingExtractionDetails, subOccupancyTableDetails, demolitionAreaDetails,addressDetails, ownerDetails, documentDetails, fiReports, ...nocDetails, approvalChecksDetails,PermitConditions]
    } else {
      details = [...details, applicationDetailsInfo, basicDetails, plotDetails, scrutinyDetails, buildingExtractionDetails, subOccupancyTableDetails, demolitionAreaDetails, documentDetails, fiReports, ...nocDetails,PermitConditions ]
    }
    

    let bpaFilterDetails = details?.filter(data => data);
    

    return {
      applicationData: BPA,
      applicationDetails: bpaFilterDetails,
      tenantId: BPA?.tenantId,
      edcrDetails: edcr,
      nocData: noc,
      comparisionReport: comparisionReport?.comparisonDetail,
      businessService: BPA?.businessService,
      applicationNo: BPA?.applicationNo,
      applicationStatus : BPA?.status
    }
  }
}