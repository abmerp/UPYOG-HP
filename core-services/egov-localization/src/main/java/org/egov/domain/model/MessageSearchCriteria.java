package org.egov.domain.model;

import static org.apache.commons.lang3.StringUtils.isEmpty;

import java.util.Set;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class MessageSearchCriteria {
	
	private Tenant tenantId;
	
	private String locale;
	
	private String module;
	
	private Set<String> codes;

	public boolean isModuleAbsent() {
		return isEmpty(module);
	}
}
