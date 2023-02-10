package org.egov.bpa.web.model;

import org.egov.bpa.web.model.collection.ApplicantInfo;
import org.egov.bpa.web.model.collection.ApplicationDetails;
import org.egov.bpa.web.model.collection.ApplicationInfo;
import org.egov.bpa.web.model.collection.BuiltUpArea;
import org.egov.bpa.web.model.collection.CompositionOfOffencesChecklist;
import org.egov.bpa.web.model.collection.CompositionOfOffencesFeesCalculation;
import org.egov.bpa.web.model.collection.CompositionOfOffencesUploadDoc;
import org.egov.bpa.web.model.collection.HierarchyDetailsOfArea;
import org.egov.bpa.web.model.collection.NoticeInfo;
import org.egov.bpa.web.model.collection.ReasonForCOO;
import org.egov.bpa.web.model.landInfo.DescriptionOfLandCOO;
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
public class CompositionOfOffences {
	  
	  @SafeHtml
	  @JsonProperty("id")
	  private String id = null;
	  
	  @JsonProperty("applicationInfo")
	  private ApplicationInfo applicationInfo = null;
	  
	  @JsonProperty("applicationDetails")
	  private ApplicationDetails applicationDetails = null;
	  
	  @JsonProperty("hierarchyDetailsOfArea")
	  private HierarchyDetailsOfArea hierarchyDetailsOfArea = null;
	  
	  @JsonProperty("applicantInfo")
	  private ApplicantInfo applicantInfo = null;
	  
	  @JsonProperty("correspondenceAddressDetails")
	  private AddressDetails correspondenceAddressDetails = null;
	  
	  @JsonProperty("permanentAddressDetails")
	  private AddressDetails permanentAddressDetails = null;
	  
	  @JsonProperty("descriptionOfLandCOO")
	  private DescriptionOfLandCOO descriptionOfLandCOO = null;
	  
	  @JsonProperty("builtUpArea")
	  private BuiltUpArea builtUpArea = null;
	  
	  @JsonProperty("noticeInfo")
	  private NoticeInfo noticeInfo = null;
	  
	  @JsonProperty("reasonForCompositionOfOffences")
	  private ReasonForCOO reasonForCompositionOfOffences = null;
	  
	  @JsonProperty("compositionOfOffencesChecklist")
	  private CompositionOfOffencesChecklist compositionOfOffencesChecklist = null;

	  @JsonProperty("compositionOfOffencesUploadDoc")
	  private CompositionOfOffencesUploadDoc compositionOfOffencesUploadDoc = null;
	  
	  @JsonProperty("compositionOfOffencesFeesCalculation")
	  private CompositionOfOffencesFeesCalculation compositionOfOffencesFeesCalculation = null;
	  
}
