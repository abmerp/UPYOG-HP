package org.egov.bpa.web.model.collection;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class ChecklistParams {

	  @JsonProperty("asStdRegulation")
	  private String asStdRegulation = null;
	  
	  @JsonProperty("asProposed")
	  private String asProposed = null;
	  
	  @JsonProperty("remarks")
	  private String remarks = null;
	  
	  @JsonProperty("relaxation")
	  private String relaxation = null;
}
