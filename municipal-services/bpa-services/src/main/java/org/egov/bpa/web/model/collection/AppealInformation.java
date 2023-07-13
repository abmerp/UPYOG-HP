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
public class AppealInformation {
	
	  @SafeHtml
	  @NotNull
	  @Size(min = 12, max = 12)
	  @JsonProperty("applicationNo")
	  private String applicationNo = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 12, max = 12)
	  @JsonProperty("orderCaseNo")
	  private String orderCaseNo = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 3, max = 25)
	  @JsonProperty("orderCaseDate")
	  private String orderCaseDate = null;
	  
}
