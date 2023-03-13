package org.egov.bpa.web.model;

import java.util.List;

import javax.validation.Valid;

import org.egov.bpa.web.model.collection.ApplicantInfo;
import org.egov.bpa.web.model.collection.PermissionOfSubdivisionChecklist;
import org.egov.bpa.web.model.collection.PermissionOfSubdivisionUploadDoc;
import org.egov.bpa.web.model.landInfo.DescriptionOfLand;
import org.egov.bpa.web.model.landInfo.LandAreaDetails;
import org.hibernate.validator.constraints.SafeHtml;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class ApplcationDetail {
	
//	  @SafeHtml
//	  @JsonProperty("id")
//	  private String id = null;
//	  
//	  @JsonProperty("status")
//	  private String status = null;
	  
	  @JsonProperty("landAreaDetails")
	  private LandAreaDetails landAreaDetails = null;
	  
	  @JsonProperty("applicantInfo")
	  private ApplicantInfo applicantInfo = null;
	  
	  @JsonProperty("correspondenceAddressDetails")
	  private CorrespondenceAddressDetails correspondenceAddressDetails = null;
	  
	  @JsonProperty("permanentAddressDetails")
	  private CorrespondenceAddressDetails permanentAddressDetails = null;
	  
	  @JsonProperty("descriptionOfLand")
	  private DescriptionOfLand descriptionOfLand = null;
	  
	  @JsonProperty("permissionOfSubdivisionChecklist")
	  private PermissionOfSubdivisionChecklist permissionOfSubdivisionChecklist = null;
	  
	  
	  @JsonProperty("documents")
	  @Valid
	  private List<Document> documents = null;
//
//	  @JsonProperty("permissionOfSubdivisionUploadDoc")
//	  private PermissionOfSubdivisionUploadDoc permissionOfSubdivisionUploadDoc = null;
	  
	  
	  
}
