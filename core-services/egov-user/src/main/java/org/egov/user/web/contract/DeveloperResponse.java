package org.egov.user.web.contract;

import java.util.Date;

import org.egov.common.contract.response.ResponseInfo;
import org.egov.user.abm.developer.contract.Developerdetail;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class DeveloperResponse {
	@JsonProperty("responseInfo")
	ResponseInfo responseInfo;

	private Long id;
	private float currentVersion;
	private String createdBy;
	private Date createdDate;
	private String updateddBy;
	private Date updatedDate;
	@JsonProperty("devDetail")
	Developerdetail devDetail;	
}
