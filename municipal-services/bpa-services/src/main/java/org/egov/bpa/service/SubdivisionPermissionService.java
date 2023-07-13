package org.egov.bpa.service;

import org.egov.bpa.repository.SubdivisionPermissionRepository;
import org.egov.bpa.util.POSConstatnts;
import org.egov.bpa.web.model.PermissionOfSubdivision;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubdivisionPermissionService {
	
	@Autowired
	private SubdivisionPermissionRepository subdivisionPermissionRepository;

	public PermissionOfSubdivision createPermissionOfSubdivision(PermissionOfSubdivision permissionOfSubdivision) {
		
		permissionOfSubdivision.setStatus(POSConstatnts.RECORD_STATUS_NEW);
		subdivisionPermissionRepository.save(permissionOfSubdivision);
		return permissionOfSubdivision;
	}
	
	public PermissionOfSubdivision updatePermissionOfSubdivision(PermissionOfSubdivision permissionOfSubdivision) {
		
		permissionOfSubdivision.setStatus(POSConstatnts.RECORD_STATUS_UPDATED);
		subdivisionPermissionRepository.update(permissionOfSubdivision);
		return permissionOfSubdivision;
	}
	
	public PermissionOfSubdivision getPermissionOfSubdivision(PermissionOfSubdivision permissionOfSubdivision) {
		
		permissionOfSubdivision.setStatus(POSConstatnts.RECORD_STATUS_SEARCHED);
		subdivisionPermissionRepository.get(permissionOfSubdivision);
		return permissionOfSubdivision;
	}
}
