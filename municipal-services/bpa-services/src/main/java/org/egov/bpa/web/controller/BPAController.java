package org.egov.bpa.web.controller;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.egov.bpa.service.BPAService;
import org.egov.bpa.util.BPAConstants;
import org.egov.bpa.util.BPAErrorConstants;
import org.egov.bpa.util.BPAUtil;
import org.egov.bpa.util.ResponseInfoFactory;
import org.egov.bpa.web.model.BPA;
import org.egov.bpa.web.model.BpaV2;
import org.egov.bpa.web.model.BPARequest;
import org.egov.bpa.web.model.BPARequestV2;
import org.egov.bpa.web.model.BPAResponse;
import org.egov.bpa.web.model.BPAResponse2;
import org.egov.bpa.web.model.BPASearchCriteria;
import org.egov.bpa.web.model.PermissionOfSubdivision;
import org.egov.bpa.web.model.RequestInfoWrapper;
import org.egov.tracer.model.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/v1/bpa")
public class BPAController {

	@Autowired
	private BPAService bpaService;

	@Autowired
	private BPAUtil bpaUtil;

	@Autowired
	private ResponseInfoFactory responseInfoFactory;

	@PostMapping(value = "/_create")
	public ResponseEntity<BPAResponse> create(@Valid @RequestBody BPARequest bpaRequest) {
		bpaUtil.defaultJsonPathConfig();
		BPA bpa = bpaService.create(bpaRequest);
		List<BPA> bpas = new ArrayList<BPA>();
		bpas.add(bpa);
		BPAResponse response = BPAResponse.builder().BPA(bpas)
				.responseInfo(responseInfoFactory.createResponseInfoFromRequestInfo(bpaRequest.getRequestInfo(), true))
				.build();
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	
	
	@PostMapping(value = "/_createForm")
	public ResponseEntity<BPAResponse2> createe(@Valid @RequestBody BPARequestV2 bpaRequest) {
//		bpaUtil.defaultJsonPathConfig();
		BpaV2 bpa = bpaService.createe(bpaRequest);
		List<BpaV2> bpas = new ArrayList<BpaV2>();
		bpas.add(bpa);
		BPAResponse2 response = BPAResponse2.builder().BPA(bpas)
				.responseInfo(responseInfoFactory.createResponseInfoFromRequestInfo(bpaRequest.getRequestInfo(), true))
				.build();
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@PostMapping(value = "/_update")
	public ResponseEntity<BPAResponse> update(@Valid @RequestBody BPARequest bpaRequest) {
		BPA bpa = bpaService.update(bpaRequest);
		List<BPA> bpas = new ArrayList<BPA>();
		bpas.add(bpa);
		BPAResponse response = BPAResponse.builder().BPA(bpas)
				.responseInfo(responseInfoFactory.createResponseInfoFromRequestInfo(bpaRequest.getRequestInfo(), true))
				.build();
		return new ResponseEntity<>(response, HttpStatus.OK);

	}
	
	@PostMapping(value = "/_updateForm")
	public ResponseEntity<BPAResponse2> updatee(@Valid @RequestBody BPARequestV2 bpaRequest) {
		BpaV2 bpa = bpaService.updatee(bpaRequest);
		List<BpaV2> bpas = new ArrayList<BpaV2>();
		bpas.add(bpa);
		BPAResponse2 response = BPAResponse2.builder().BPA(bpas)
				.responseInfo(responseInfoFactory.createResponseInfoFromRequestInfo(bpaRequest.getRequestInfo(), true))
				.build();
		return new ResponseEntity<>(response, HttpStatus.OK);

	}

	@PostMapping(value = "/_search")
	public ResponseEntity<BPAResponse> search(@Valid @RequestBody RequestInfoWrapper requestInfoWrapper,
			@Valid @ModelAttribute BPASearchCriteria criteria) {

		List<BPA> bpas = bpaService.search(criteria, requestInfoWrapper.getRequestInfo());
		int count = bpaService.getBPACount(criteria, requestInfoWrapper.getRequestInfo());
		BPAResponse response = BPAResponse.builder().BPA(bpas).responseInfo(
				responseInfoFactory.createResponseInfoFromRequestInfo(requestInfoWrapper.getRequestInfo(), true)).count(count)
				.build();
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	
	@PostMapping(value = "/_searchForm")
	public ResponseEntity<BPAResponse2> search2(@Valid @RequestBody RequestInfoWrapper requestInfoWrapper,
			@Valid @ModelAttribute BPASearchCriteria criteria) {

		List<BpaV2> bpas = bpaService.search2(criteria, requestInfoWrapper.getRequestInfo());
		int count = bpaService.getBPACount(criteria, requestInfoWrapper.getRequestInfo());
		BPAResponse2 response = BPAResponse2.builder().BPA(bpas).responseInfo(
				responseInfoFactory.createResponseInfoFromRequestInfo(requestInfoWrapper.getRequestInfo(), true)).count(count)
				.build();
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@PostMapping(value = "/_permitorderedcr")
	public ResponseEntity<Resource> getPdf(@Valid @RequestBody BPARequest bpaRequest) {

		Path path = Paths.get(BPAConstants.EDCR_PDF);
		Resource resource = null;

		bpaService.getEdcrPdf(bpaRequest);
		try {
			resource = new UrlResource(path.toUri());
		} catch (Exception ex) {
			throw new CustomException(BPAErrorConstants.UNABLE_TO_DOWNLOAD, "Unable to download the file");
		}

		return ResponseEntity.ok()
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + BPAConstants.EDCR_PDF + "\"")
				.body(resource);
	}
	
	@PostMapping(value = "/_plainsearch")
	public ResponseEntity<BPAResponse> plainSearch(@Valid @RequestBody RequestInfoWrapper requestInfoWrapper,
			@Valid @ModelAttribute BPASearchCriteria criteria) {

		List<BPA> bpas = bpaService.plainSearch(criteria, requestInfoWrapper.getRequestInfo());
		BPAResponse response = BPAResponse.builder().BPA(bpas).responseInfo(
				responseInfoFactory.createResponseInfoFromRequestInfo(requestInfoWrapper.getRequestInfo(), true)).build();
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	
}
