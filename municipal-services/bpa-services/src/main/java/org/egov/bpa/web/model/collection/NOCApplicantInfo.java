package org.egov.bpa.web.model.collection;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class NOCApplicantInfo {
	
	  @JsonProperty("id")
	  private String id = null; 

	  @JsonProperty("name")
	  private String name = null;
	  
	  @JsonProperty("emailId")
	  private String emailId = null;
	  
	  @JsonProperty("appliedOnMentionDate")
	  private String appliedOnMentionDate = null;
	  
	  @JsonProperty("ulbName")
	  private String ulbName = null;
	  
	  @JsonProperty("district")
	  private String district = null;
	  
	  @JsonProperty("nocType")
	  private String nocType = null;
	  
	  @JsonProperty("blockNameAsPerDatabase")
	  private String blockNameAsPerDatabase = null;
	  
	  @JsonProperty("floorName")
	  private String floorName = null;
	  	  
	  @JsonProperty("categories")
	  private String categories = null;
	  
	  @JsonProperty("noOfConnections")
	  private String noOfConnections = null;
	  
	  @JsonProperty("uploadPhoto")
	  private String uploadPhoto = null;
	  
	  @JsonProperty("addOrDelete")
	  private String addOrDelete = null;
}
