package org.egov.bpa.web.model;

import org.egov.bpa.web.model.collection.NOCApplicantInfo;
import org.egov.bpa.web.model.collection.NOCFormUDChecklist;
import org.egov.bpa.web.model.collection.NOCFormUDUploadDoc;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class NOCFormUD {
	  
	  @JsonProperty("id")
	  private String id = null;
	  
	  @JsonProperty("buildingPlanPermissionApplicationNo")
	  private String buildingPlanPermissionApplicationNo = null;
	  
	  @JsonProperty("appliedFor")
	  private String appliedFor = null;
	  
	  @JsonProperty("registrationNoOfArchitect")
	  private String registrationNoOfArchitect = null;
	  
	  @JsonProperty("architectName")
	  private String architectName = null;
	  
	  @JsonProperty("address")
	  private String address = null;
	  
	  @JsonProperty("mobNo")
	  private String mobNo = null;
	  
	  @JsonProperty("emailId")
	  private String emailId = null;
	  
	  @JsonProperty("nocApplicantInfo")
	  private NOCApplicantInfo nocApplicantInfo = null;
	  
	  @JsonProperty("nocFormUDChecklist")
	  private NOCFormUDChecklist nocFormUDChecklist = null;

	  @JsonProperty("nocFormUDUploadDoc")
	  private NOCFormUDUploadDoc nocFormUDUploadDoc = null;
}
