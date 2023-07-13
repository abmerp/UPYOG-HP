package org.egov.bpa.web.model.collection;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class PermissionOfSubdivisionUploadDoc {

	  @JsonProperty("id")
	  private String id = null;
	  
	  @JsonProperty("jamabandhiDocument")
	  private String jamabandhiDocument = null;
	  
	  @JsonProperty("conveyanceDeed")
	  private String conveyanceDeed = null;
	  
	  @JsonProperty("demarcationReport")
	  private String demarcationReport = null;
	  
	  @JsonProperty("tatimaDocuments")
	  private String tatimaDocuments = null;
	  
	  @JsonProperty("locationPlan")
	  private String locationPlan = null;
	  
	  @JsonProperty("sitePlan")
	  private String sitePlan = null;
	  
	  @JsonProperty("proposedConsolidatedMap1")
	  private String proposedConsolidatedMap1 = null;
	  
	  @JsonProperty("copyOfContouringPlan")
	  private String copyOfContouringPlan = null;
	  
}
