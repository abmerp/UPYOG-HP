package org.egov.bpa.web.model;

import org.egov.bpa.web.model.collection.AppealApplicantInfo;
import org.egov.bpa.web.model.collection.AppealInformation;
import org.egov.bpa.web.model.collection.ApplicationOfAppealUploadDoc;
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
public class ApplicationOfAppeal {

	  @SafeHtml
	  @JsonProperty("id")
	  private String id = null;
	  
	  @JsonProperty("appealInformation")
	  private AppealInformation appealInformation = null;
	  
	  @JsonProperty("appealApplicantInfo")
	  private AppealApplicantInfo appealApplicantInfo = null;
	  
	  @JsonProperty("correspondenceAddressDetails")
	  private AddressDetails correspondenceAddressDetails = null;
	  
	  @JsonProperty("permanentAddressDetails")
	  private AddressDetails permanentAddressDetails = null;
	  
	  @JsonProperty("remarksOptionForApplicant")
	  private String remarksOptionForApplicant = null;
	  
	  @JsonProperty("applicationOfAppealUploadDoc")
	  private ApplicationOfAppealUploadDoc applicationOfAppealUploadDoc = null;
}
