package org.egov.bpa.web.model;

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
public class AddressDetails {

	  @SafeHtml
	  @JsonProperty("id")
	  private String id = null;
	  
	  @SafeHtml
	  @JsonProperty("name")
	  private String name = null;
	  
	  @SafeHtml
	  @JsonProperty("type")
	  private String type = null;
	  
	  @SafeHtml
	  @JsonProperty("guardianName")
	  private String guardianName = null;
	  
	  @SafeHtml
	  @JsonProperty("state")
	  private String state = null;
	  
	  @SafeHtml
	  @JsonProperty("district")
	  private String district = null;
	  
	  @SafeHtml
	  @JsonProperty("tehsil")
	  private String tehsil = null;
	  
	  @SafeHtml
	  @JsonProperty("townVillageWard")
	  private String townVillageWard = null;
	  
	  @SafeHtml
	  @JsonProperty("address")
	  private String address = null;
	  
	  @SafeHtml
	  @JsonProperty("pin")
	  private Integer pin = null;
	  
	  
}
