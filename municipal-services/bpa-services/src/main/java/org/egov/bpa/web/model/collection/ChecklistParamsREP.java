package org.egov.bpa.web.model.collection;

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
public class ChecklistParamsREP {

	  @JsonProperty("asStdRegulation")
	  private String asStdRegulation = null;
	  
	  @JsonProperty("asProposed")
	  private String asProposed = null;
}
