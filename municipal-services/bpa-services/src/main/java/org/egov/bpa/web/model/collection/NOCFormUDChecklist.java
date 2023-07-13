package org.egov.bpa.web.model.collection;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class NOCFormUDChecklist {

	  @JsonProperty("id")
	  private String id = null;

	  @JsonProperty("builtUpArea")
	  private NOCChecklistParamsUD builtUpArea = null;
	  
	  @JsonProperty("far")
	  private NOCChecklistParamsUD far = null;
	  
	  @JsonProperty("coveragePercentage")
	  private NOCChecklistParamsUD coveragePercentage = null;
	  
	  @JsonProperty("setbacks")
	  private NOCChecklistParamsUD setbacks = null;
	  
	  @JsonProperty("frontSetbacks")
	  private NOCChecklistParamsUD frontSetbacks = null;
	  
	  @JsonProperty("rearSetbacks")
	  private NOCChecklistParamsUD rearSetbacks = null;
	  
	  @JsonProperty("leftSetbacks")
	  private NOCChecklistParamsUD leftSetbacks = null;
	  
	  @JsonProperty("rightSetbacks")
	  private NOCChecklistParamsUD rightSetbacks = null;
	  
	  @JsonProperty("noOfStoreys")
	  private NOCChecklistParamsUD noOfStoreys = null;

	  @JsonProperty("roadExistAtSite")
	  private NOCChecklistParamsUD roadExistAtSite = null;
	  
	  @JsonProperty("whetherPathDevelopAtTheSiteOrNot")
	  private NOCChecklistParamsUD whetherPathDevelopAtTheSiteOrNot = null;
	  
	  @JsonProperty("parkingProvision")
	  private NOCChecklistParamsUD parkingProvision = null;
	  
	  @JsonProperty("whetherHTLTLineCrossing")
	  private NOCChecklistParamsUD whetherHTLTLineCrossing = null;
	  
	  @JsonProperty("provisionOfSolarPassiveBuilding")
	  private NOCChecklistParamsUD provisionOfSolarPassiveBuilding = null;
	  
	  @JsonProperty("provisionOfBarrierFreeAccessForPerson")
	  private NOCChecklistParamsUD provisionOfBarrierFreeAccessForPerson = null;
	  
	  @JsonProperty("provisionOfRainwaterHarvestingTank")
	  private NOCChecklistParamsUD provisionOfRainwaterHarvestingTank = null;
	  
	  @JsonProperty("noOfDwelling")
	  private NOCChecklistParamsUD noOfDwelling = null;
	  
	  @JsonProperty("maxHillCut")
	  private NOCChecklistParamsUD maxHillCut = null;
	  
	  @JsonProperty("whetherSewerExistsInVicinityOrNot")
	  private NOCChecklistParamsUD whetherSewerExistsInVicinityOrNot = null;
	  
	  @JsonProperty("provisionOfSepticTank")
	  private NOCChecklistParamsUD provisionOfSepticTank = null;
	  
	  @JsonProperty("connectivityToTheSepticTank")
	  private NOCChecklistParamsUD connectivityToTheSepticTank = null;
	  
	  @JsonProperty("whetherSoakPitMadeFunctionalOrNot")
	  private NOCChecklistParamsUD whetherSoakPitMadeFunctionalOrNot = null;
	  
	  @JsonProperty("provisionOfSlopingRoof")
	  private NOCChecklistParamsUD provisionOfSlopingRoof = null;
	  
	  @JsonProperty("heightPlinthLevel")
	  private NOCChecklistParamsUD heightPlinthLevel = null;
	  
	  @JsonProperty("closedFloorInAny")
	  private NOCChecklistParamsUD closedFloorInAny = null;
	  
	  @JsonProperty("retainingWorkAndSiteDevelopment")
	  private NOCChecklistParamsUD retainingWorkAndSiteDevelopment = null;
	  
	  @JsonProperty("boundaryWallErectedOrNot")
	  private NOCChecklistParamsUD boundaryWallErectedOrNot = null;
	  
	  @JsonProperty("whetherProposedPlanNearHFL")
	  private NOCChecklistParamsUD whetherProposedPlanNearHFL = null;
	  
	  @JsonProperty("whetherBuildingIsAboveRoadOnValleySide")
	  private NOCChecklistParamsUD whetherBuildingIsAboveRoadOnValleySide = null;
	  
}
