package org.egov.bpa.web.model.landInfo;

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
public class LandAreaDetails {
	
	  @SafeHtml
	  @JsonProperty("id")
	  private String id = null;

	  @SafeHtml
	  @JsonProperty("district")
	  private String district = null;
	  
	  @SafeHtml
	  @JsonProperty("notifiedArea")
	  private String notifiedArea = null;
	  
	  @SafeHtml
	  @JsonProperty("nameOfVillage")
	  private String nameOfVillage = null;
	  
	  @SafeHtml
	  @JsonProperty("nameOfULB")
	  private String nameOfULB = null;
	  
	  @SafeHtml
	  @JsonProperty("nameOfWard")
	  private String nameOfWard = null;
	  
}
