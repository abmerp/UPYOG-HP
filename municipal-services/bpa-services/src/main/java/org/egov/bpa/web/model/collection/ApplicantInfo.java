package org.egov.bpa.web.model.collection;

import org.hibernate.validator.constraints.SafeHtml;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class ApplicantInfo {

	  @SafeHtml
	  @JsonProperty("id")
	  private String id = null;
	  
	  @SafeHtml
	  @JsonProperty("applicantName")
	  private String applicantName = null;
	  
	  @SafeHtml
	  @JsonProperty("guardianName")
	  private String guardianName = null;
	  
	  @SafeHtml
	  @JsonProperty("applicantMobileNo")
	  private String applicantMobileNo = null;
	  
	  @SafeHtml
	  @JsonProperty("aadharNo")
	  private String aadharNo = null;
	  
	  @SafeHtml
	  @JsonProperty("uploadPhoto")
	  private String uploadPhoto = null;
	  
	  @SafeHtml
	  @JsonProperty("addMoreApplicant")
	  private String addMoreApplicant = null;
	  
	  @SafeHtml
	  @JsonProperty("emailId")
	  private String emailId = null;
	  
	  @SafeHtml
	  @JsonProperty("pvtProfMobileNo")
	  private String pvtProfMobileNo = null;
	  
	  @SafeHtml
	  @JsonProperty("nocApplicantInfo")
	  private NOCApplicantInfo nocApplicantInfo = null;
}
