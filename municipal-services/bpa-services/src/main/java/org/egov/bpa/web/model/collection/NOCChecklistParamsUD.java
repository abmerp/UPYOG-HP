package org.egov.bpa.web.model.collection;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class NOCChecklistParamsUD {

	  @JsonProperty("detailsOfRegulationAsPerProvision")
	  private String detailsOfRegulationAsPerProvision = null;
	  
	  @JsonProperty("provisionMadeAsApprovedPlan")
	  private String provisionMadeAsApprovedPlan = null;
	  
	  @JsonProperty("remarks")
	  private String remarks = null;
	  
}
