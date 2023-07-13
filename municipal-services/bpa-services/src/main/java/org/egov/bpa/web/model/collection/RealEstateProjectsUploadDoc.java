package org.egov.bpa.web.model.collection;

import org.hibernate.validator.constraints.SafeHtml;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RealEstateProjectsUploadDoc {

	  @SafeHtml
	  @JsonProperty("id")
	  private String id = null;
	  
	  @JsonProperty("agricultureCertificatePermission")
	  private String agricultureCertificatePermission = null;
	  
	  @JsonProperty("copyRegistrationCertificate ")
	  private String copyRegistrationCertificate  = null;
	  
	  @JsonProperty("copyOfLatestOriginalJamabandi")
	  private String copyOfLatestOriginalJamabandi = null;
	  
	  @JsonProperty("copyOfLatestOriginalTatima")
	  private String copyOfLatestOriginalTatima = null;
	  
	  @JsonProperty("detailsOfEncumbrances")
	  private String detailsOfEncumbrances = null;
	  
	  @JsonProperty("threeSetsOfLocationPlan")
	  private String threeSetsOfLocationPlan = null;
	  
	  @JsonProperty("sitePlanToBeSubmittedAlongSeekingPermission")
	  private String sitePlanToBeSubmittedAlongSeekingPermission = null;
}
