package org.egov.bpa.web.model.collection;

import org.hibernate.validator.constraints.SafeHtml;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ApplicationOfAppealUploadDoc {

	  @SafeHtml
	  @JsonProperty("id")
	  private String id = null;
	  
	  @JsonProperty("appealDocument")
	  private String appealDocument = null;
	  
	  @JsonProperty("otherDocument")
	  private String otherDocument = null;
}
