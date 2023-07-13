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
public class PvtProfessionalInfo {

	  @SafeHtml
	  @JsonProperty("id")
	  private String id = null;
	  
	  @SafeHtml
	  @JsonProperty("name")
	  private String name = null;
	  
	  @SafeHtml
	  @JsonProperty("registrationNo")
	  private String registrationNo = null;
	  
	  @SafeHtml
	  @JsonProperty("classPvtProfInfo")
	  private String classPvtProfInfo = null;
	  
	  @SafeHtml
	  @JsonProperty("planDate")
	  private String planDate = null;
	  
	  @SafeHtml
	  @JsonProperty("email")
	  private String email = null;
	  
	  @SafeHtml
	  @JsonProperty("uploadPhoto")
	  private String uploadPhoto = null;
	  
	  @SafeHtml
	  @JsonProperty("mobileNo")
	  private String mobileNo = null;
	  
	  @SafeHtml
	  @JsonProperty("address")
	  private String address = null;
	  
	  
}
