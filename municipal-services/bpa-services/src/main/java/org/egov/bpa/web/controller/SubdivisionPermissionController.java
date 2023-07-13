package org.egov.bpa.web.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.egov.bpa.service.SubdivisionPermissionService;
import org.egov.bpa.web.model.BPA;
import org.egov.bpa.web.model.PermissionOfSubdivision;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/subdivision")
public class SubdivisionPermissionController {

	@Autowired
	private SubdivisionPermissionService subdivisionPermissionService;
	
	@PostMapping(value = "/_create")
	public ResponseEntity<String> create(@Valid @RequestBody PermissionOfSubdivision permissionOfSubdivision) {
		
		PermissionOfSubdivision pos = subdivisionPermissionService.createPermissionOfSubdivision(permissionOfSubdivision);
		List<PermissionOfSubdivision> poss = new ArrayList<PermissionOfSubdivision>();
		poss.add(pos);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	
}
