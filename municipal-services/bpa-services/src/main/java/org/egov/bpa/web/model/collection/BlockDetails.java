package org.egov.bpa.web.model.collection;

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
public class BlockDetails {

	  @SafeHtml
	  @JsonProperty("id")
	  private String id = null;
	 
	  @SafeHtml
	  @NotNull
	  @Size(min = 3, max = 25)
	  @JsonProperty("floorType")
	  private String floorType = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 4, max = 10)
	  @JsonProperty("floorAreaInSqM")
	  private Float floorAreaInSqM = null;
	
	  @SafeHtml
	  @NotNull
	  @Size(min = 3, max = 25)
	  @JsonProperty("landUseType")
	  private String landUseType = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 1, max = 2)
	  @JsonProperty("parkingArea")
	  private Integer parkingArea = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 3, max = 25)
	  @JsonProperty("exemption")
	  private String Exemption = null;
}
