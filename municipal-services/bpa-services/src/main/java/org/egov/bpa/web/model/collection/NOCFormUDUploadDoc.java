package org.egov.bpa.web.model.collection;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class NOCFormUDUploadDoc {

	  @JsonProperty("id")
	  private String id = null;
	  
	  @JsonProperty("uploadStabilityDoc")
	  private String uploadStabilityDoc = null;
	
}
