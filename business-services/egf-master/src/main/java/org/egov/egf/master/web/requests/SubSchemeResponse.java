package  org.egov.egf.master.web.requests;
import java.util.List;

import org.egov.common.web.contract.PaginationContract;
import org.egov.common.contract.response.ResponseInfo;
import org.egov.egf.master.web.contract.SubSchemeContract;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Data;
@JsonInclude(value=Include.NON_NULL)public @Data class SubSchemeResponse {
private ResponseInfo responseInfo ;
private List<SubSchemeContract> subSchemes;
private PaginationContract page;}