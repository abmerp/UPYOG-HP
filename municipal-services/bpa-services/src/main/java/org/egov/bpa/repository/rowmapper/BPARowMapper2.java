package org.egov.bpa.repository.rowmapper;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import lombok.extern.slf4j.Slf4j;
import org.egov.bpa.web.model.AuditDetails;
import org.egov.bpa.web.model.BPA;
import org.egov.bpa.web.model.BpaV2;
import org.egov.bpa.web.model.Document;
import org.egov.bpa.web.model.Workflow;
import org.egov.bpa.web.model.ApplcationDetail;
import org.postgresql.util.PGobject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

@Component
@Slf4j
public class BPARowMapper2 implements ResultSetExtractor<List<BpaV2>> {

	@Autowired
	private ObjectMapper mapper;

	/**
	 * extract the data from the resultset and prepare the BPA Object
	 * @see org.springframework.jdbc.core.ResultSetExtractor#extractData(java.sql.ResultSet)
	 */
	@SuppressWarnings("rawtypes")
	@Override
	public List<BpaV2> extractData(ResultSet rs) throws SQLException, DataAccessException {

		Map<String, BpaV2> buildingMap = new LinkedHashMap<String, BpaV2>();

		while (rs.next()) {
			String id = rs.getString("id");
			String applicationNo = rs.getString("applicationnumber");
			String approvalNo = rs.getString("approvalNo");
			BpaV2 currentbpa = buildingMap.get(id);
			String tenantId = rs.getString("tenantid");
			if (currentbpa == null) {
				Long lastModifiedTime = rs.getLong("lastmodifiedtime");
				if (rs.wasNull()) {
					lastModifiedTime = null;
				}

				ApplcationDetail additionalDetails = new Gson().fromJson(rs.getString("applicationdetails").equals("{}")
						|| rs.getString("applicationdetails").equals("null") ? null : rs.getString("applicationdetails"),
								ApplcationDetail.class);
				
				AuditDetails auditdetails = AuditDetails.builder().createdBy(rs.getString("createdby"))
						.createdTime(rs.getLong("createdtime")).lastModifiedBy(rs.getString("lastmodifiedby"))
						.lastModifiedTime(lastModifiedTime).build();
				
				Workflow workflow = Workflow.builder().action(rs.getString("action")).assignes(null).comments(rs.getString("comment"))
						.varificationDocuments(null).build();


				currentbpa = BpaV2.builder()
						.auditDetails(auditdetails)
						.applicationNo(applicationNo)
						.status(rs.getString("status"))
						.tenantId(tenantId)
						.approvalNo(approvalNo)
						.edcrNumber(rs.getString("edcrnumber"))
//						.accountId(rs.getString("accountId"))
						.id(id)
						.serviceType(rs.getString("servicetype"))
						.department(rs.getString("department"))
						.category(rs.getString("category"))
						.totalPlotArea(rs.getFloat("totalplotarea"))
						.applicationType(rs.getString("servicetype"))
						.applcationDetail(additionalDetails)
						.businessService(rs.getString("businessservice"))
						.workflow(workflow)
						.build();

				buildingMap.put(id, currentbpa);
			}
//			addChildrenToProperty(rs, currentbpa);

		}

		return new ArrayList<>(buildingMap.values());

	}

	/**
	 * add child objects to the BPA fro the results set
	 * @param rs
	 * @param bpa
	 * @throws SQLException
	 */
	@SuppressWarnings("unused")
	private void addChildrenToProperty(ResultSet rs, BPA bpa) throws SQLException {

		String tenantId = bpa.getTenantId();
		AuditDetails auditdetails = AuditDetails.builder().createdBy(rs.getString("bpa_createdBy"))
				.createdTime(rs.getLong("bpa_createdTime")).lastModifiedBy(rs.getString("bpa_lastModifiedBy"))
				.lastModifiedTime(rs.getLong("bpa_lastModifiedTime")).build();

		if (bpa == null) {
			PGobject pgObj = (PGobject) rs.getObject("additionaldetail");
			JsonNode additionalDetail = null;
			try {
				additionalDetail = mapper.readTree(pgObj.getValue());
			} catch (IOException e) {
				log.error("Failed to parse additionalDetails",e);
			}
			bpa.setAdditionalDetails(additionalDetail);
		}


		String documentId = rs.getString("bpa_doc_id");
		Object docDetails = null;
		if(rs.getString("doc_details") != null) {
			docDetails = new Gson().fromJson(rs.getString("doc_details").equals("{}")
					|| rs.getString("doc_details").equals("null") ? null : rs.getString("doc_details"),
					Object.class);
		}
		
		if (documentId != null) {
			Document document = Document.builder().documentType(rs.getString("bpa_doc_documenttype"))
					.fileStoreId(rs.getString("bpa_doc_filestore"))
					.id(documentId)
					.additionalDetails(docDetails)
					.documentUid(rs.getString("documentUid")).build();
			bpa.addDocumentsItem(document);
		}
	}
}
