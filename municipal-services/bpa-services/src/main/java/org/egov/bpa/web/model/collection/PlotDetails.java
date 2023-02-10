package org.egov.bpa.web.model.collection;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.egov.bpa.web.model.landInfo.DescriptionOfLandBPP;
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
public class PlotDetails {

	  @SafeHtml
	  @JsonProperty("id")
	  private String id = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 1, max = 2)
	  @JsonProperty("plotNo")
	  private Integer plotNo = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 4, max = 10)
	  @JsonProperty("plotArea")
	  private Float plotArea = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 10, max = 20)
	  @JsonProperty("typeOfLandDevelopment")
	  private String typeOfLandDevelopment = null;
	  
	  @SafeHtml
	  @JsonProperty("changeOfLandUseInvolved")
	  private String changeOfLandUseInvolved = null;
	  
	  @SafeHtml
	  @Size(min = 3, max = 25)
	  @JsonProperty("pvtProfessionalInfo")
	  private String pvtProfessionalInfo = null;
	  
	  @SafeHtml
	  @Size(min = 3, max = 25)
	  @JsonProperty("structuralEngineerInfo")
	  private String structuralEngineerInfo = null;
}
