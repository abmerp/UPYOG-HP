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
public class DescriptionOfLandREP {
	
	  @SafeHtml
	  @JsonProperty("id")
	  private String id = null;

	  @SafeHtml
	  @NotNull
	  @Size(min = 6, max = 10)
	  @JsonProperty("khataNo")
	  private Integer khataNo = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 6, max = 10)
	  @JsonProperty("khatoniNo")
	  private Integer khatoniNo = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 6, max = 10)
	  @JsonProperty("hadbastNo")
	  private Integer hadbastNo = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 6, max = 10)
	  @JsonProperty("maujaMohalNo")
	  private Integer maujaMohalNo = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 6, max = 10)
	  @JsonProperty("khasraNo")
	  private Integer khasraNo = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 3, max = 25)
	  @JsonProperty("tehsil")
	  private String tehsil = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 3, max = 25)
	  @JsonProperty("district")
	  private String district = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 3, max = 25)
	  @JsonProperty("state")
	  private String state = null;
	    
	  
}
