package org.egov.bpa.calculator.web.models;

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
public class PermissionOfSubdivisionChecklist {

	  @JsonProperty("id")
	  private String id = null;
	
	  @JsonProperty("minimumWidthOfPedestrian")
	  private Float minimumWidthOfPedestrian = null;
	  
	  @JsonProperty("minimumWidthOfVehicularAccess")
	  private Float minimumWidthOfVehicularAccess = null;
	  
	  @JsonProperty("minimumAreaForOpenGreenSpace")
	  private Float minimumAreaForOpenGreenSpace = null;
	  
	  @JsonProperty("minimumAreaForSoakPit")
	  private Float minimumAreaForSoakPit = null;
	  
	  @JsonProperty("orientationOfPlots")
	  private String orientationOfPlots = null;
	  
	  @JsonProperty("layoutOfPlots")
	  private String layoutOfPlots = null;
}
