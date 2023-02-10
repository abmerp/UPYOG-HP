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
public class ReasonForCOO {

	  @SafeHtml
	  @JsonProperty("id")
	  private String id = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 20, max = 40)
	  @JsonProperty("reason1")
	  private String reason1 = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 20, max = 40)
	  @JsonProperty("reason2")
	  private String reason2 = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 20, max = 40)
	  @JsonProperty("reason3")
	  private String reason3 = null;
	  
	  @SafeHtml
	  @NotNull
	  @JsonProperty("supportedDocToBeUploaded")
	  private String supportedDocToBeUploaded = null;
	  
	
}
