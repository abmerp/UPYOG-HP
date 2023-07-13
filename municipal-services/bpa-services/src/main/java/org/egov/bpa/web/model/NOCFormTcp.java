package org.egov.bpa.web.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NOCFormTcp {
	  @JsonProperty("id")
	  private String id = null;
	  
	  @JsonProperty("nocType")
	  private String nocType = null;
	  
	  @JsonProperty("floorName")
	  private String floorName = null;
	  
	  @JsonProperty("use")
	  private String use = null;
	  
	  @JsonProperty("numberOfServices")
	  private String numberOfServices = null;
}
