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
public class DescriptionOfLandCLU {
	
	
	  @SafeHtml
	  @JsonProperty("id")
	  private String id = null;
	  
	  @SafeHtml
	  @JsonProperty("revenueVillageMohalla")
	  private String revenueVillageMohalla = null;
	  
	  @SafeHtml
	  @JsonProperty("khatoniNo")
	  private Integer khatoniNo = null;
	  
	  @SafeHtml
	  @JsonProperty("khasraNo")
	  private Integer khasraNo = null;
	  
	  @SafeHtml
	  @JsonProperty("khataNo")
	  private Integer khataNo = null;
	  
	  @SafeHtml
	  @JsonProperty("area")
	  private Float area = null;
	  
	  @SafeHtml
	  @JsonProperty("totalPlotArea")
	  private Float totalPlotArea = null;
	  
	  @SafeHtml
	  @JsonProperty("areaForCLU")
	  private Float areaForCLU = null;
	  
	  @SafeHtml
	  @JsonProperty("propertyType")
	  private String propertyType = null;
	  
	  @SafeHtml
	  @JsonProperty("existingLandUse")
	  private String existingLandUse = null;
	  
	  @SafeHtml
	  @JsonProperty("typeOfCLUInvolved")
	  private String typeOfCLUInvolved = null;
	  
	  @SafeHtml
	  @JsonProperty("plotKhasraNo")
	  private Integer plotKhasraNo = null;
	  
	  @SafeHtml
	  @JsonProperty("plotArea")
	  private Float plotArea = null;
	  
	  @SafeHtml
	  @JsonProperty("typeOfLandForDevelopment")
	  private String typeOfLandForDevelopment = null;
	  
	  @SafeHtml
	  @JsonProperty("addMore")
	  private String addMore = null;
	  
	  @SafeHtml
	  @JsonProperty("uploadSignature")
	  private String uploadSignature = null;
	  

}
