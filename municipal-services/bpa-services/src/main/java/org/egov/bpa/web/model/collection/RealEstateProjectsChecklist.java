package org.egov.bpa.web.model.collection;

import org.hibernate.validator.constraints.SafeHtml;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RealEstateProjectsChecklist {

	  @SafeHtml
	  @JsonProperty("id")
	  private String id = null;
	  
	  @JsonProperty("nameOfREP")
	  private ChecklistParamsREP nameOfREP = null;
	  
	  @JsonProperty("schemeArea")
	  private ChecklistParamsREP schemeArea = null;
	  
	  @JsonProperty("slopeOfArea")
	  private ChecklistParamsREP slopeOfArea = null;
	  
	  @JsonProperty("meansOfAccess")
	  private ChecklistParamsREP meansOfAccess = null;
	  
	  @JsonProperty("landUseStructure")
	  private ChecklistParamsREP landUseStructure = null;
	  
	  @JsonProperty("underFlatsCoverage")
	  private ChecklistParamsREP underFlatsCoverage = null;
	  
	  @JsonProperty("underOtherUsesCoverage")
	  private ChecklistParamsREP underOtherUsesCoverage = null;
	  
	  @JsonProperty("carpetAreaExclusiveBalconyTerraceCoverage")
	  private ChecklistParamsREP carpetAreaExclusiveBalconyTerraceCoverage = null;

	  @JsonProperty("totalBuiltUpArea")
	  private ChecklistParams totalBuiltUpArea = null;
	  
	  @JsonProperty("far")
	  private ChecklistParams far = null;
	  
	  @JsonProperty("noOfStoreysInEachBlock")
	  private ChecklistParams noOfStoreysInEachBlock = null;
	  
	  @JsonProperty("heightOfEachFloor")
	  private ChecklistParams heightOfEachFloor = null;
	  
	  @JsonProperty("totalHeightOfBlock")
	  private ChecklistParams totalHeightOfBlock = null;
	  
	  @JsonProperty("noOfFlatsDwellingUnitsInEachBlock")
	  private ChecklistParams noOfFlatsDwellingUnitsInEachBlock = null;
	  
	  @JsonProperty("totalPopulation")
	  private ChecklistParams totalPopulation = null;
	  
	  @JsonProperty("densityPerHectre")
	  private ChecklistParams densityPerHectre = null;
	  
	  @JsonProperty("detailOfFacilities")
	  private ChecklistParams detailOfFacilities = null;
	  
	  @JsonProperty("parkingProvision")
	  private ChecklistParams parkingProvision = null;
	  
	  @JsonProperty("structuralStabilityCertification.")
	  private ChecklistParams structuralStabilityCertification = null;
	  
	  @JsonProperty("distOfStructuresFromNaturalDrainage")
	  private ChecklistParams distOfStructuresFromNaturalDrainage = null;
	  
	  @JsonProperty("distOfStructuresFromRoads")
	  private ChecklistParams distOfStructuresFromRoads = null;
	  
	  @JsonProperty("distOfStructuresFromHTLTlines")
	  private ChecklistParams distOfStructuresFromHTLTlines = null;
	  
	  @JsonProperty("undertakingByApplicantRegElectricLineSafeDist")
	  private ChecklistParams undertakingByApplicantRegElectricLineSafeDist = null;
	  
	  @JsonProperty("nocOfAuthorityIncaseSiteAbutsHighway")
	  private ChecklistParams nocOfAuthorityIncaseSiteAbutsHighway = null;
	  
	  @JsonProperty("undertakingAdheringFireSafety")
	  private ChecklistParams undertakingAdheringFireSafety = null;
	  
	  @JsonProperty("nocOfAuthorityOfIrrigationPubHealth")
	  private ChecklistParams nocOfAuthorityOfIrrigationPubHealth = null;
	  
	  @JsonProperty("provisionOfRainwaterHarvesting")
	  private ChecklistParams provisionOfRainwaterHarvesting = null;
	  
	  @JsonProperty("arrangementForTreatOfSolidWaste")
	  private ChecklistParams arrangementForTreatOfSolidWaste = null;
	  
	  @JsonProperty("provisionForStreetLighting")
	  private ChecklistParams provisionForStreetLighting = null;
	  
	  @JsonProperty("nameOfRegisteredTownPlanner")
	  private ChecklistParams nameOfRegisteredTownPlanner = null;
	  
	  @JsonProperty("nameOfRegisteredStructuralEngineer")
	  private ChecklistParams nameOfRegisteredStructuralEngineer = null;
	  
	  
}
