var dat = {
  'fn.create': {
    numCols: 12 / 3,
    version: 'v1',
    url: '/wcms-connection/connection/_create',
    idJsonPath: 'Connection[0].acknowledgementNumber',
    ackUrl: '/waterConnection/view',
    useTimestamp: true,
    tenantIdRequired: true,
    level: 0,
    groups: [
      {
        label: 'applicantDetails.title',
        name: 'Applicant Details',
        fields: [
          {
            name: 'Applicant Name',
            jsonPath: 'ApplicationDetails.name',
            label: 'fn.ApplicationDetails.applicantName',
            pattern: '^.{3,100}$',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Mobile Number',
            jsonPath: 'ApplicationDetails.mobileNo',
            label: 'fn.ApplicationDetails.mobileNumber',
            pattern: '',
            type: 'mobileNumber',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Email ID',
            jsonPath: 'ApplicationDetails.email',
            label: 'fn.ApplicationDetails.email',
            pattern: '',
            type: 'email',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Aadhar No',
            jsonPath: 'ApplicationDetails.aadhaarNo',
            label: 'fn.ApplicationDetails.aadharNo',
            pattern: '',
            type: 'aadhar',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Address',
            jsonPath: 'ApplicationDetails.address',
            label: 'fn.ApplicationDetails.address',
            pattern: '^.{3,255}$',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Block',
            jsonPath: 'ApplicationDetails.block',
            label: 'fn.ApplicationDetails.block',
            pattern: '',
            type: 'singleValueList',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
            url:
              '/egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?&boundaryTypeName=BLOCK&hierarchyTypeName=REVENUE|$.Boundary.*.boundaryNum|$.Boundary.*.name',
          },
          {
            name: 'Zone',
            jsonPath: 'ApplicationDetails.zone',
            label: 'fn.ApplicationDetails.zone',
            pattern: '',
            type: 'singleValueList',
            url:
              '/egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?&boundaryTypeName=ZONE&hierarchyTypeName=REVENUE|$.Boundary.*.boundaryNum|$.Boundary.*.name',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Ward',
            jsonPath: 'ApplicationDetails.ward',
            label: 'fn.ApplicationDetails.ward',
            pattern: '',
            type: 'singleValueList',
            url:
              '/egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?&boundaryTypeName=WARD&hierarchyTypeName=ADMINISTRATION|$.Boundary.*.boundaryNum|$.Boundary.*.name',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
        ],
      },
      {
        label: 'serviceDetails.title',
        name: 'Service Details',
        multiple: false,
        fields: [
          {
            name: 'Provisonal fire NOC Number',
            jsonPath: 'ServiceDetails.privisonalFireNOCNo',
            label: 'fn.serviceDetails.privisonalFireNOCNo',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Plot Number',
            jsonPath: 'ServiceDetails.plotNo',
            label: 'fn.serviceDetails.plotNo',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'NOC Sub Category',
            jsonPath: 'ServiceDetails.nocSubCategory',
            label: 'fn.serviceDetails.nocSubCategory',
            pattern: '',
            type: 'singleValueList',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
            defaultValue: [{ key: 'Residential', value: 'Residential' }, { key: 'Commercial', value: 'Commercial' }],
          },
          {
            name: 'Vikas Prastav Number',
            jsonPath: 'ServiceDetails.vikasPrastavNo',
            label: 'fn.serviceDetails.vikasPrastavNo',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'File Number',
            jsonPath: 'ServiceDetails.fileNo',
            label: 'fn.serviceDetails.fileNo',
            pattern: '',
            type: 'number',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Land Owner Name',
            jsonPath: 'ServiceDetails.landOwnerName',
            label: 'fn.serviceDetails.landOwnerName',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Developer Name',
            jsonPath: 'ServiceDetails.developerName',
            label: 'fn.serviceDetails.developerName',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Plot survey No',
            jsonPath: 'ServiceDetails.surveyNo',
            label: 'fn.serviceDetails.surveyNo',
            pattern: '',
            type: 'number',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Plot taluka name',
            jsonPath: 'ServiceDetails.talukaName',
            label: 'fn.serviceDetails.talukaName',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Architect Name',
            jsonPath: 'ServiceDetails.architectName',
            label: 'fn.serviceDetails.architectName',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Architect License Number',
            jsonPath: 'ServiceDetails.architectLicenseNo',
            label: 'fn.serviceDetails.architectLicenseNo',
            pattern: '',
            type: 'number',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Locality',
            jsonPath: 'ServiceDetails.locality',
            label: 'fn.serviceDetails.locality',
            pattern: '',
            type: 'singleValueList',
            url:
              '/egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?&boundaryTypeName=WARD&hierarchyTypeName=ADMINISTRATION|$.Boundary.*.boundaryNum|$.Boundary.*.name',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Building Name',
            jsonPath: 'ServiceDetails.buildingName',
            label: 'fn.serviceDetails.buildingName',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
        ],
      },
    ],
    feeDetails: [
      {
        id: null,
        tenantId: localStorage.getItem('tenantId'),
        consumerCode: '',
        consumerType: 'consumertype1',
        businessService: 'CS',
        minimumAmountPayable: 10,
        owner: {
          id: 0,
          userName: null,
          name: null,
          type: null,
          mobileNumber: null,
          emailId: null,
          roles: null,
        },
        taxPeriodFrom: 0,
        taxPeriodTo: 0,
        demandDetails: [
          {
            id: null,
            demandId: null,
            taxHeadMasterCode: '',
            taxAmount: 20,
            collectionAmount: 0,
          },
        ],
      },
    ],
  },
  'fn.view': {
    numCols: 12 / 3,
    version: 'v1',
    url: '/wcms-connection/connection/_create',
    idJsonPath: 'Connection[0].acknowledgementNumber',
    ackUrl: '/waterConnection/view',
    useTimestamp: true,
    tenantIdRequired: true,
    level: 0,
    groups: [
      {
        label: 'applicantDetails.title',
        name: 'Applicant Details',
        fields: [
          {
            name: 'Applicant Name',
            jsonPath: 'ApplicationDetails.name',
            label: 'fn.ApplicationDetails.applicantName',
            pattern: '^.{3,100}$',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Mobile Number',
            jsonPath: 'ApplicationDetails.mobileNo',
            label: 'fn.ApplicationDetails.mobileNumber',
            pattern: '',
            type: 'mobileNumber',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Email ID',
            jsonPath: 'ApplicationDetails.email',
            label: 'fn.ApplicationDetails.email',
            pattern: '',
            type: 'email',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Aadhar No',
            jsonPath: 'ApplicationDetails.aadhaarNo',
            label: 'fn.ApplicationDetails.aadharNo',
            pattern: '',
            type: 'aadhar',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Address',
            jsonPath: 'ApplicationDetails.address',
            label: 'fn.ApplicationDetails.address',
            pattern: '^.{3,255}$',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Block',
            jsonPath: 'ApplicationDetails.block',
            label: 'fn.ApplicationDetails.block',
            pattern: '',
            type: 'singleValueList',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
            url:
              '/egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?&boundaryTypeName=BLOCK&hierarchyTypeName=REVENUE|$.Boundary.*.boundaryNum|$.Boundary.*.name',
          },
          {
            name: 'Zone',
            jsonPath: 'ApplicationDetails.zone',
            label: 'fn.ApplicationDetails.zone',
            pattern: '',
            type: 'singleValueList',
            url:
              '/egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?&boundaryTypeName=ZONE&hierarchyTypeName=REVENUE|$.Boundary.*.boundaryNum|$.Boundary.*.name',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Ward',
            jsonPath: 'ApplicationDetails.ward',
            label: 'fn.ApplicationDetails.ward',
            pattern: '',
            type: 'singleValueList',
            url:
              '/egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?&boundaryTypeName=WARD&hierarchyTypeName=ADMINISTRATION|$.Boundary.*.boundaryNum|$.Boundary.*.name',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
        ],
      },
      {
        label: 'serviceDetails.title',
        name: 'Service Details',
        multiple: false,
        fields: [
          {
            name: 'Provisonal fire NOC Number',
            jsonPath: 'ServiceDetails.privisonalFireNOCNo',
            label: 'fn.serviceDetails.privisonalFireNOCNo',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Plot Number',
            jsonPath: 'ServiceDetails.plotNo',
            label: 'fn.serviceDetails.plotNo',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'NOC Sub Category',
            jsonPath: 'ServiceDetails.nocSubCategory',
            label: 'fn.serviceDetails.nocSubCategory',
            pattern: '',
            type: 'singleValueList',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
            defaultValue: [{ key: 'Residential', value: 'Residential' }, { key: 'Commercial', value: 'Commercial' }],
          },
          {
            name: 'Vikas Prastav Number',
            jsonPath: 'ServiceDetails.vikasPrastavNo',
            label: 'fn.serviceDetails.vikasPrastavNo',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'File Number',
            jsonPath: 'ServiceDetails.fileNo',
            label: 'fn.serviceDetails.fileNo',
            pattern: '',
            type: 'number',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Land Owner Name',
            jsonPath: 'ServiceDetails.landOwnerName',
            label: 'fn.serviceDetails.landOwnerName',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Developer Name',
            jsonPath: 'ServiceDetails.developerName',
            label: 'fn.serviceDetails.developerName',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Plot survey No',
            jsonPath: 'ServiceDetails.surveyNo',
            label: 'fn.serviceDetails.surveyNo',
            pattern: '',
            type: 'number',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Plot taluka name',
            jsonPath: 'ServiceDetails.talukaName',
            label: 'fn.serviceDetails.talukaName',
            pattern: '',
            type: 'number',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Architect Name',
            jsonPath: 'ServiceDetails.architectName',
            label: 'fn.serviceDetails.architectName',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Architect License Number',
            jsonPath: 'ServiceDetails.architectLicenseNo',
            label: 'fn.serviceDetails.architectLicenseNo',
            pattern: '',
            type: 'number',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Locality',
            jsonPath: 'ServiceDetails.locality',
            label: 'fn.serviceDetails.locality',
            pattern: '',
            type: 'singleValueList',
            url:
              '/egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?&boundaryTypeName=WARD&hierarchyTypeName=ADMINISTRATION|$.Boundary.*.boundaryNum|$.Boundary.*.name',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
          {
            name: 'Building Name',
            jsonPath: 'ServiceDetails.buildingName',
            label: 'fn.serviceDetails.buildingName',
            pattern: '',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
        ],
      },
    ],
    feeDetails: [
      {
        id: null,
        tenantId: localStorage.getItem('tenantId'),
        consumerCode: '',
        consumerType: 'consumertype1',
        businessService: 'CS',
        minimumAmountPayable: 10,
        owner: {
          id: 0,
          userName: null,
          name: null,
          type: null,
          mobileNumber: null,
          emailId: null,
          roles: null,
        },
        taxPeriodFrom: 0,
        taxPeriodTo: 0,
        demandDetails: [
          {
            id: null,
            demandId: null,
            taxHeadMasterCode: '',
            taxAmount: 20,
            collectionAmount: 0,
          },
        ],
      },
    ],
  },
};

export default dat;
