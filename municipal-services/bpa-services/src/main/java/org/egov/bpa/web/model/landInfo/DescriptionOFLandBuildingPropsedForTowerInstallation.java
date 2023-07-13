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
public class DescriptionOFLandBuildingPropsedForTowerInstallation {

	  @SafeHtml
	  @JsonProperty("id")
	  private String id = null;
	  
	  @SafeHtml
	  @JsonProperty("natureOfTower")
	  private String natureOfTower = null;
	  
	  @SafeHtml
	  @JsonProperty("towerToBeProposed")
	  private String towerToBeProposed = null;
	  
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
	  @JsonProperty("area")
	  private Float area = null;
	  
	  @SafeHtml
	  @JsonProperty("totalPlotArea")
	  private Float totalPlotArea = null;
	  
	  @SafeHtml
	  @JsonProperty("proposedGroundCoverage")
	  private Float proposedGroundCoverage = null;
	  
	  @SafeHtml
	  @JsonProperty("appliedLandUse")
	  private String appliedLandUse = null;
	  
	  @SafeHtml
	  @JsonProperty("propertyType")
	  private String propertyType = null;
	  
	  @SafeHtml
	  @JsonProperty("whetherProposedTowerUsedBySingleCompany")
	  private String whetherProposedTowerUsedBySingleCompany = null;
	  
	  @SafeHtml
	  @JsonProperty("installationFeesDepositedInULBMCPanchayat")
	  private String installationFeesDepositedInULBMCPanchayat = null;
	  
	  @SafeHtml
	  @JsonProperty("whetherCLUInvolved")
	  private String whetherCLUInvolved = null;
	  
}
