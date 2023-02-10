package org.egov.bpa.web.model;

import org.egov.bpa.web.model.collection.ApplicantInfo;
import org.egov.bpa.web.model.collection.BlockDetails;
import org.egov.bpa.web.model.collection.BuildingPlanPermissionChecklist;
import org.egov.bpa.web.model.collection.BuildingPlanPermissionUploadDoc;
import org.egov.bpa.web.model.collection.PlotDetails;
import org.egov.bpa.web.model.landInfo.DescriptionOfLandBPP;
import org.egov.bpa.web.model.landInfo.LandAreaDetails;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class BuildingPlanPermission {
	  
	  @JsonProperty("id")
	  private String id = null;
	  
	  @JsonProperty("landAreaDetails")
	  private LandAreaDetails landAreaDetails = null;
	  
	  @JsonProperty("applicantInfo")
	  private ApplicantInfo applicantInfo = null;
	  
	  @JsonProperty("correspondenceAddressDetails")
	  private AddressDetails correspondenceAddressDetails = null;
	  
	  @JsonProperty("permanentAddressDetails")
	  private AddressDetails permanentAddressDetails = null;
	  
	  @JsonProperty("descriptionOfLandBPP")
	  private DescriptionOfLandBPP descriptionOfLandBPP = null;
	  
	  @JsonProperty("blockDetails")
	  private BlockDetails blockDetails = null;
	  
	  @JsonProperty("plotDetails")
	  private PlotDetails plotDetails = null;
	  
	  @JsonProperty("buildingPlanPermissionChecklist")
	  private BuildingPlanPermissionChecklist buildingPlanPermissionChecklist = null;

	  @JsonProperty("buildingPlanPermissionUploadDoc")
	  private BuildingPlanPermissionUploadDoc buildingPlanPermissionUploadDoc = null;
	  
	  
}
