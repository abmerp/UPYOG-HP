package org.egov.bpa.calculator.web.models;

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
public class DescriptionOfLand {
	
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
	  @JsonProperty("latitudeLongitude")
	  private Float latitudeLongitude = null;
	  
	  @SafeHtml
	  @JsonProperty("totalPlotArea")
	  private Float totalPlotArea = null;
	  
	  @SafeHtml
	  @JsonProperty("areaUnderConsideration")
	  private Float areaUnderConsideration = null;
	  
	  @SafeHtml
	  @JsonProperty("noOfPlot")
	  private Integer noOfPlot = null;
	  
	  @SafeHtml
	  @JsonProperty("pvtProfessionalInfo")
	  private String pvtProfessionalInfo = null;
	  
	  @SafeHtml
	  @JsonProperty("useType")
	  private String useType = null;
	  
	  @SafeHtml
	  @JsonProperty("propertyType")
	  private String propertyType = null;
	  
	  @SafeHtml
	  @JsonProperty("plotAreaForSubDivisionalDevelopmentActivitiesInSqM")
	  private Float plotAreaForSubDivisionalDevelopmentActivitiesInSqM = null;
	  
	  @SafeHtml
	  @JsonProperty("whetherChangeOfLandUseInvolved")
	  private String whetherChangeOfLandUseInvolved = null;
	  
	  
	  
	  
}
