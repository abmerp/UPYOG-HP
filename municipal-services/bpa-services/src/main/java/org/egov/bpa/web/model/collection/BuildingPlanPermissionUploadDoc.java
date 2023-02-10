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
public class BuildingPlanPermissionUploadDoc {

	  @JsonProperty("id")
	  private String id = null;
	  
	  @JsonProperty("structuralStabilityCert")
	  private String structuralStabilityCert = null;
	  
	  @JsonProperty("undertakingOfSupervisionOfBuilding")
	  private String undertakingOfSupervisionOfBuilding = null;
	  
	  @JsonProperty("undertakingOfOwner")
	  private String undertakingOfOwner = null;
	  
	  @JsonProperty("jamabandhiDocument")
	  private String jamabandhiDocument = null;
	  
	  @JsonProperty("demarcationReport")
	  private String demarcationReport = null;
	  
	  @JsonProperty("locationPlan")
	  private String locationPlan = null;
	  
	  @JsonProperty("proposedConsolidatedMap1")
	  private String proposedConsolidatedMap1 = null;
	  
	  @JsonProperty("sitePlan")
	  private String sitePlan = null;
	  
	  @JsonProperty("nocCompetentAuthorityForHTLTLine")
	  private String nocCompetentAuthorityForHTLTLine = null;
	  
	  @JsonProperty("sitePhotographs")
	  private String sitePhotographs = null;
	  
	  @JsonProperty("affidavitRegardingSurrenderOfPath")
	  private String affidavitRegardingSurrenderOfPath = null;
	  
	  @JsonProperty("nocFromHPPCB")
	  private String nocFromHPPCB = null;
	  
	  @JsonProperty("registrationCertFromIndustryDept")
	  private String registrationCertFromIndustryDept = null;
	  
	  @JsonProperty("anyOtherDoc")
	  private String anyOtherDoc = null;
}
