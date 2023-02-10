package org.egov.bpa.web.model.collection;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class BuildingPlanPermissionChecklist {

	  @JsonProperty("id")
	  private String id = null;
	  
	  @JsonProperty("typeOfArea")
	  private ChecklistParams typeOfArea = null;
	  
	  @JsonProperty("totalPlotArea")
	  private ChecklistParams totalPlotArea = null;
	  
	  @JsonProperty("ownershipRevenueDocs")
	  private ChecklistParams ownershipRevenueDocs = null;
	  
	  @JsonProperty("landUse")
	  private ChecklistParams landUse = null;
	  
	  @JsonProperty("far")
	  private ChecklistParams far = null;
	  
	  @JsonProperty("builtUpArea")
	  private ChecklistParams builtUpArea = null;
	  
	  @JsonProperty("setbacks")
	  private ChecklistParams setbacks = null;
	  
	  @JsonProperty("frontSetbacks")
	  private ChecklistParams frontSetbacks = null;
	  
	  @JsonProperty("rearSetbacks")
	  private ChecklistParams rearSetbacks = null;
	  
	  @JsonProperty("leftSetbacks")
	  private ChecklistParams leftSetbacks = null;
	  
	  @JsonProperty("rightSetbacks")
	  private ChecklistParams rightSetbacks = null;
	  
	  @JsonProperty("constructionAbutsWithNH")
	  private ChecklistParams constructionAbutsWithNH = null;
	  
	  @JsonProperty("constructionAbutsWithNHFront")
	  private ChecklistParams constructionAbutsWithNHFront = null;
	  
	  @JsonProperty("constructionAbutsWithNHBack")
	  private ChecklistParams constructionAbutsWithNHBack = null;
	  
	  @JsonProperty("constructionAbutsWithNHLeft")
	  private ChecklistParams constructionAbutsWithNHLeft = null;
	  
	  @JsonProperty("constructionAbutsWithNHSide")
	  private ChecklistParams constructionAbutsWithNHSide = null;
	  
	  @JsonProperty("noOfStoreys")
	  private ChecklistParams noOfStoreys = null;
	  
	  @JsonProperty("roadExistingAtSite")
	  private ChecklistParams roadExistingAtSite = null;
	  
	  @JsonProperty("existingAtSite")
	  private ChecklistParams existingAtSite = null;
	  
	  @JsonProperty("shownAtTatima")
	  private ChecklistParams shownAtTatima = null;
	  
	  @JsonProperty("parkingProvision")
	  private ChecklistParams parkingProvision = null;
	  
	  @JsonProperty("whetherHTLTLineCrossing")
	  private ChecklistParams whetherHTLTLineCrossing = null;
	  
	  @JsonProperty("whetherProposedPlanNearASImonument")
	  private ChecklistParams whetherProposedPlanNearASImonument = null;
	  
	  @JsonProperty("whetherProposedPlanNearHFL")
	  private ChecklistParams whetherProposedPlanNearHFL = null;
	  
	  @JsonProperty("whetherTreesStandingOnPlot")
	  private ChecklistParams whetherTreesStandingOnPlot = null;
	  
	  @JsonProperty("noOfTrees")
	  private ChecklistParams noOfTrees = null;
	  
	  @JsonProperty("distOfTreesFromProposedDevelopementIfNotCut")
	  private ChecklistParams distOfTreesFromProposedDevelopementIfNotCut = null;
	  
	  @JsonProperty("whetherPermissionOfAuthorityForTreeCut")
	  private ChecklistParams whetherPermissionOfAuthorityForTreeCut = null;
	  
	  @JsonProperty("whetherPlotIsAbuttingToForestBoundary")
	  private ChecklistParams whetherPlotIsAbuttingToForestBoundary = null;
	  
	  @JsonProperty("distFromForestBoundary")
	  private ChecklistParams distFromForestBoundary = null;
	  
	  @JsonProperty("distFromHighwayRoad")
	  private ChecklistParams distFromHighwayRoad = null;
	  
	  @JsonProperty("whetherPlotIsAbuttingToNaturalDrainage")
	  private ChecklistParams whetherPlotIsAbuttingToNaturalDrainage = null;
	  
	  @JsonProperty("distFromNullah")
	  private ChecklistParams distFromNullah = null;
	  
	  @JsonProperty("distFromKhud")
	  private ChecklistParams distFromKhud = null;
	  
	  @JsonProperty("whetherSewerageLineCrossThroughPlot")
	  private ChecklistParams whetherSewerageLineCrossThroughPlot = null;
	  
	  @JsonProperty("provisionOfSolarPassiveBuilding")
	  private ChecklistParams provisionOfSolarPassiveBuilding = null;
	  
	  @JsonProperty("provisionOfBarrierFreeAccessForPWD")
	  private ChecklistParams provisionOfBarrierFreeAccessForPWD = null;
	  
	  @JsonProperty("whetherProposedPlanAboveRoadLevel")
	  private ChecklistParams whetherProposedPlanAboveRoadLevel = null;
	  
	  @JsonProperty("whetherProposedPlanLocatedInSinkningArea")
	  private ChecklistParams whetherProposedPlanLocatedInSinkningArea = null;
	  
	  @JsonProperty("structuralStabilityCertificate")
	  private ChecklistParams structuralStabilityCertificate = null;
	  
	  @JsonProperty("noOfDwelling")
	  private ChecklistParams noOfDwelling = null;
	  
	  @JsonProperty("riskBasedClassificationOfBuilding")
	  private ChecklistParams riskBasedClassificationOfBuilding = null;
	  
	  @JsonProperty("WhetherBuildingWithCommunicationTower")
	  private ChecklistParams WhetherBuildingWithCommunicationTower = null;
	  
	  @JsonProperty("WhetherProposalForGroupHousingScheme")
	  private ChecklistParams WhetherProposalForGroupHousingScheme = null;
	  
	  @JsonProperty("WhetherBuildingRaisedOnLandFill")
	  private ChecklistParams WhetherBuildingRaisedOnLandFill = null;
	  
	  @JsonProperty("WhetherBuildingRaisedOnReclaimedLand")
	  private ChecklistParams WhetherBuildingRaisedOnReclaimedLand = null;
	  
	  @JsonProperty("generalRequirements")
	  private ChecklistParams generalRequirements = null;
	  
	  @JsonProperty("slopeOfLand")
	  private ChecklistParams slopeOfLand = null;
	  
	  @JsonProperty("heightOfParkingDoorMtr")
	  private ChecklistParams heightOfParkingDoorMtr = null;
	  
	  @JsonProperty("heightOfSloppingRoofMtr")
	  private ChecklistParams heightOfSloppingRoofMtr = null;
	  
	  @JsonProperty("heightOfFloorMtr")
	  private ChecklistParams heightOfFloorMtr = null;
	  
	  @JsonProperty("heightOfBuildingMtr")
	  private ChecklistParams heightOfBuildingMtr = null;
	  
	  @JsonProperty("maxHillCutMtr")
	  private ChecklistParams maxHillCutMtr = null;
	  
	  @JsonProperty("distBetweenTwoBlocksMtr")
	  private ChecklistParams distBetweenTwoBlocksMtr = null;
	  
	  @JsonProperty("plinthHeightMtr")
	  private ChecklistParams plinthHeightMtr = null;
	  
	  @JsonProperty("heightOfServiceDoorMtr")
	  private ChecklistParams heightOfServiceDoorMtr = null;
	  
	  @JsonProperty("eqvtCarSpace")
	  private ChecklistParams eqvtCarSpace = null;
	  
	  @JsonProperty("buildableWidth")
	  private ChecklistParams buildableWidth = null;
	  
	  @JsonProperty("sitePhotos")
	  private ChecklistParams sitePhotos = null;
	  
	  @JsonProperty("anyOtherInfo")
	  private ChecklistParams anyOtherInfo = null;
	  
	  @JsonProperty("whetherPermissionFromAAI")
	  private ChecklistParams whetherPermissionFromAAI = null;
	  
	  
}
