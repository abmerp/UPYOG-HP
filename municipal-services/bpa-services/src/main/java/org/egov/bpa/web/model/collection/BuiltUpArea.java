package org.egov.bpa.web.model.collection;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

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
public class BuiltUpArea {

	  @SafeHtml
	  @JsonProperty("id")
	  private String id = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 3, max = 25)
	  @JsonProperty("noOfBlocks")
	  private String noOfBlocks = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 6, max = 6)
	  @JsonProperty("approvedFloorArea")
	  private Integer approvedFloorArea = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 3, max = 25)
	  @JsonProperty("landTypeUse")
	  private String landTypeUse = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 6, max = 6)
	  @JsonProperty("parkingArea")
	  private Integer parkingArea = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 6, max = 6)
	  @JsonProperty("actualConstructionInSqM")
	  private Integer actualConstructionInSqM = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 6, max = 6)
	  @JsonProperty("deviationNotOnSetback")
	  private Integer deviationNotOnSetback = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 6, max = 6)
	  @JsonProperty("setbackDeviation")
	  private Integer setbackDeviation = null;
	  
	  @SafeHtml
	  @JsonProperty("exemption")
	  private Integer exemption = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 3, max = 25)
	  @JsonProperty("pvtProfessionalInfo")
	  private String pvtProfessionalInfo = null;
	  
	  
}
