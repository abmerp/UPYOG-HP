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
public class IndividualOrJointFamilyInfo {

	  @SafeHtml
	  @JsonProperty("id")
	  private String id = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 6, max = 20)
	  @JsonProperty("name")
	  private String name = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 6, max = 20)
	  @JsonProperty("fatherName")
	  private String fatherName = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 6, max = 20)
	  @JsonProperty("occupation")
	  private String occupation = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 20, max = 25)
	  @JsonProperty("permanentAddress")
	  private String permanentAddress = null;
}
