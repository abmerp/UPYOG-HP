package org.egov.bpa.web.model;


import org.egov.bpa.web.model.collection.ApplicantInfo;
import org.egov.bpa.web.model.collection.FirmCOOperativeCompanyInfo;
import org.egov.bpa.web.model.collection.IndividualOrJointFamilyInfo;
import org.egov.bpa.web.model.collection.PartnersInfo;
import org.egov.bpa.web.model.collection.RealEstateProjectsChecklist;
import org.egov.bpa.web.model.collection.RealEstateProjectsUploadDoc;
import org.egov.bpa.web.model.landInfo.DescriptionOfLandREP;
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
public class RealEstateProjects {
	
	  @SafeHtml
	  @JsonProperty("id")
	  private String id = null;
	 
	  @JsonProperty("typeOfRealEstateProjects")
	  private String typeOfRealEstateProjects = null;
	  
	  @JsonProperty("nameAndStyleOfProject")
	  private String nameAndStyleOfProject = null;
	  
	  @JsonProperty("descriptionOfLandREP")
	  private DescriptionOfLandREP descriptionOfLandREP = null;
	  
	  @JsonProperty("applicantInfo")
	  private ApplicantInfo applicantInfo = null;
	  
	  @JsonProperty("statusOfApplicant")
	  private String statusOfApplicant = null;
	  
	  @JsonProperty("individualOrJointFamilyInfo")
	  private IndividualOrJointFamilyInfo individualOrJointFamilyInfo = null;
	  
	  @JsonProperty("firmCOOperativeCompanyInfo")
	  private FirmCOOperativeCompanyInfo firmCOOperativeCompanyInfo = null;
	  
	  @JsonProperty("partnersInfo")
	  private PartnersInfo partnersInfo = null;
	  
	  @JsonProperty("applicantIsTaxPayee")
	  private String applicantIsTaxPayee = null;
	  
	  @JsonProperty("panNo")
	  private String panNo = null;
	  
	  @JsonProperty("aadharNo")
	  private String aadharNo = null;
	  
	  @JsonProperty("pastRealEstatePermissionGrantedToBuilder")
	  private String pastRealEstatePermissionGrantedToBuilder = null;
	  
	  @JsonProperty("pastRealEstatePermissionGrantedToBuilderRemarks")
	  private String pastRealEstatePermissionGrantedToBuilderRemarks = null;
	  
	  @JsonProperty("whetherApplicantEstdREProject")
	  private String whetherApplicantEstdREProject = null;
	  
	  @SafeHtml
	  @JsonProperty("whetherApplicantEstdREProjectRemarks")
	  private String whetherApplicantEstdREProjectRemarks = null;
	  
	  @JsonProperty("realEstateProjectsChecklist")
	  private RealEstateProjectsChecklist realEstateProjectsChecklist = null;

	  @JsonProperty("realEstateProjectsUploadDoc")
	  private RealEstateProjectsUploadDoc realEstateProjectsUploadDoc = null;
}
