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
public class AppealApplicantInfo {

	  @SafeHtml
	  @JsonProperty("id")
	  private String id = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 6, max = 20)
	  @JsonProperty("applicantName")
	  private String applicantName = null;
	  
	  @SafeHtml
	  @JsonProperty("gender")
	  private String gender = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 10, max = 10)
	  @JsonProperty("mobileNo")
	  private String mobileNo = null;
	  
	  @SafeHtml
	  @NotNull
	  @Size(min = 15, max = 20)
	  @JsonProperty("email")
	  private String email = null;
	  
	  @SafeHtml
	  @JsonProperty("applicationStatus")
	  private String applicationStatus = null;
}
