package org.egov.bpa.web.model.collection;

import org.hibernate.validator.constraints.SafeHtml;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CluUploadDoc {

	  @SafeHtml
	  @JsonProperty("id")
	  private String id = null;
	  
	  @JsonProperty("jamabandhiDocument")
	  private String jamabandhiDocument = null;
	  
	  @JsonProperty("tatimaDocuments")
	  private String tatimaDocuments = null;
	  
	  @JsonProperty("locationPlan")
	  private String locationPlan = null;
	  
	  @JsonProperty("sitePlan")
	  private String sitePlan = null;
	  
	  @JsonProperty("otherDocs")
	  private String otherDocs = null;
}
