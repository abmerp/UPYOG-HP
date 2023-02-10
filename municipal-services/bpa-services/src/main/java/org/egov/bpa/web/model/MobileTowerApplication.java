package org.egov.bpa.web.model;

import org.egov.bpa.web.model.collection.ApplicantInfo;
import org.egov.bpa.web.model.collection.MobileTowerApplicationUploadDoc;
import org.egov.bpa.web.model.collection.PvtProfessionalInfo;
import org.egov.bpa.web.model.landInfo.DescriptionOFLandBuildingPropsedForTowerInstallation;
import org.egov.bpa.web.model.landInfo.LandAreaDetails;
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
public class MobileTowerApplication {

	  @SafeHtml
	  @JsonProperty("id")
	  private String id = null;
	  
	  @SafeHtml
	  @JsonProperty("nameOfConcerned")
	  private String nameOfConcerned = null;
	  
	  @JsonProperty("landAreaDetails")
	  private LandAreaDetails landAreaDetails = null;
	  
	  @JsonProperty("applicantInfo")
	  private ApplicantInfo applicantInfo = null;
	  
	  @JsonProperty("pvtProfessionalInfo")
	  private PvtProfessionalInfo pvtProfessionalInfo = null;
	  
	  @JsonProperty("correspondenceAddressDetails")
	  private AddressDetails correspondenceAddressDetails = null;
	  
	  @JsonProperty("permanentAddressDetails")
	  private AddressDetails permanentAddressDetails = null;
	  
	  @JsonProperty("descriptionOFLandBuildingPropsedForTowerInstallation")
	  private DescriptionOFLandBuildingPropsedForTowerInstallation descriptionOFLandBuildingPropsedForTowerInstallation = null;
	  
	  @JsonProperty("mobileTowerApplicationUploadDoc")
	  private MobileTowerApplicationUploadDoc mobileTowerApplicationUploadDoc = null;
}
