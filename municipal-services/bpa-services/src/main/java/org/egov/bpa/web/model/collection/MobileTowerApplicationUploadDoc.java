package org.egov.bpa.web.model.collection;

import org.hibernate.validator.constraints.SafeHtml;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MobileTowerApplicationUploadDoc {

	  @SafeHtml
	  @JsonProperty("id")
	  private String id = null;
	  
	  @JsonProperty("jamabandhiDocument")
	  private String jamabandhiDocument = null;
	  
	  @JsonProperty("copyOfAgreementWithLandowner")
	  private String copyOfAgreementWithLandowner = null;
	  
	  @JsonProperty("tatimaDocuments")
	  private String tatimaDocuments = null;
	  
	  @JsonProperty("locationPlan")
	  private String locationPlan = null;
	  
	  @JsonProperty("sitePlan")
	  private String sitePlan = null;
	  
	  @JsonProperty("demarcationAffidavit")
	  private String demarcationAffidavit = null;

	  @JsonProperty("idemnityBond")
	  private String idemnityBond = null;

	  @JsonProperty("proposedConsolidatedMap1")
	  private String proposedConsolidatedMap1 = null;
	  
	  @JsonProperty("otherDocs")
	  private String otherDocs = null;
	  
}
