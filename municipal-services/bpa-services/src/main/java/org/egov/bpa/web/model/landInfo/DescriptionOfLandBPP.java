package org.egov.bpa.web.model.landInfo;

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
public class DescriptionOfLandBPP {
	
	
	@SafeHtml
	  @JsonProperty("id")
	  private String id = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 3, max = 25)
	  @JsonProperty("revenueVillageMohalla")
	  private String revenueVillageMohalla = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 6, max = 10)
	  @JsonProperty("khatoniNo")
	  private Integer khatoniNo = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 6, max = 10)
	  @JsonProperty("khasraNo")
	  private Integer khasraNo = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 6, max = 10)
	  @JsonProperty("khataNo")
	  private Integer khataNo = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 15, max = 20)
	  @JsonProperty("latitudeLongitude")
	  private Float latitudeLongitude = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 6, max = 10)
	  @JsonProperty("area")
	  private Float area = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 6, max = 10)
	  @JsonProperty("totalPlotArea")
	  private Float totalPlotArea = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 1, max = 2)
	  @JsonProperty("noOfPlot")
	  private Integer noOfPlot = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 3, max = 25)
	  @JsonProperty("whetherSubdivisionApproved")
	  private String whetherSubdivisionApproved = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 3, max = 25)
	  @JsonProperty("district")
	  private String district = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 3, max = 25)
	  @JsonProperty("areaType")
	  private String areaType = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 3, max = 25)
	  @JsonProperty("notifiedArea")
	  private String notifiedArea = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 6, max = 10)
	  @JsonProperty("maxPermissibleGroundCoverageInSqM")
	  private Float maxPermissibleGroundCoverageInSqM = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 3, max = 25)
	  @JsonProperty("appliedLandIssue")
	  private String appliedLandIssue = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 3, max = 25)
	  @JsonProperty("propertyType")
	  private String propertyType = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 3, max = 25)
	  @JsonProperty("proposalSubmittedFor")
	  private String proposalSubmittedFor = null;
	  
	  @SafeHtml
	  @JsonProperty("mapLocation")
	  private String mapLocation = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 3, max = 25)
	  @JsonProperty("nameOfVillage")
	  private String nameOfVillage = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 3, max = 25)
	  @JsonProperty("typeOfConstruction")
	  private String typeOfConstruction = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 1, max = 2)
	  @JsonProperty("noOfBlocks")
	  private Integer noOfBlocks = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 6, max = 10)
	  @JsonProperty("plotAreaForSubDivisionalDevelopmentActivitiesInSqM")
	  private Integer plotAreaForSubDivisionalDevelopmentActivitiesInSqM = null;
	  

}
