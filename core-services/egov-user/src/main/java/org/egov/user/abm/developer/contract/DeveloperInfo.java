package org.egov.user.abm.developer.contract;

import org.egov.common.contract.request.RequestInfo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Getter
@NoArgsConstructor
public class DeveloperInfo {

	private RequestInfo requestInfo;
	private DeveloperRegistration developerRegistration;
}
