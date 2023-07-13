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
public class DescriptionOfLandCOO {

	@SafeHtml
	  @JsonProperty("id")
	  private String id = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 20, max = 25)
	  @JsonProperty("revenueVillageMohalla")
	  private String revenueVillageMohalla = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 20, max = 25)
	  @JsonProperty("khatoniNo")
	  private String khatoniNo = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 20, max = 25)
	  @JsonProperty("khasraNo")
	  private String khasraNo = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 20, max = 25)
	  @JsonProperty("khataNo")
	  private String khataNo = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 6, max = 6)
	  @JsonProperty("latitudeLongitude")
	  private Integer latitudeLongitude = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 6, max = 6)
	  @JsonProperty("area")
	  private Integer area = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 6, max = 6)
	  @JsonProperty("totalPlotArea")
	  private Integer totalPlotArea = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 3, max = 25)
	  @JsonProperty("whetherSubdivisionApproved")
	  private String whetherSubdivisionApproved = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 6, max = 6)
	  @JsonProperty("maxPermissibleGroundCoverageInSqM")
	  private Integer maxPermissibleGroundCoverageInSqM = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 3, max = 25)
	  @JsonProperty("proposalSubmitFor")
	  private String proposalSubmitFor = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 20, max = 25)
	  @JsonProperty("appliedLandIssue")
	  private String appliedLandIssue = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 6, max = 6)
	  @JsonProperty("plotAreaForSubDivisionalDevelopmentActivityInSqM")
	  private Integer plotAreaForSubDivisionalDevelopmentActivityInSqM = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 3, max = 25)
	  @JsonProperty("propertyType")
	  private String[] propertyType = null;
	  
}
