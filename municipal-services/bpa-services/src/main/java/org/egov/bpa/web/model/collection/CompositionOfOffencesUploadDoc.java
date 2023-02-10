package org.egov.bpa.web.model.collection;

import org.hibernate.validator.constraints.SafeHtml;

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
public class CompositionOfOffencesUploadDoc {

	  @SafeHtml
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
	  
	  @JsonProperty("copyOfApprovalMap")
	  private String copyOfApprovalMap = null;
	  
	  @JsonProperty("locationPlan")
	  private String locationPlan = null;
	  
	  @JsonProperty("sitePlan")
	  private String sitePlan = null;
	  
	  @JsonProperty("affidavitOfConstructionOnownLand")
	  private String affidavitOfConstructionOnownLand = null;
	  
	  @JsonProperty("anyOtherDoc")
	  private String anyOtherDoc = null;
	  
	  @JsonProperty("proposedConsolidatedMap1")
	  private String proposedConsolidatedMap1 = null;
	  
	  @JsonProperty("anyOtherNocIfRequired")
	  private String anyOtherNocIfRequired = null;
	  
	  @JsonProperty("copyOfSanctionLetter")
	  private String copyOfSanctionLetter = null;
	  
	  @JsonProperty("anyOtherAffidavitIfRequired")
	  private String anyOtherAffidavitIfRequired = null;
	  
	  @JsonProperty("whetherAgriculturistHimachali")
	  private String whetherAgriculturistHimachali = null;
}
