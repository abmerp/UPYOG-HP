package org.egov.bpa.calculator.web.models.bpa;

import org.egov.bpa.calculator.web.models.ApplcationDetail;
import org.egov.bpa.calculator.web.models.AuditDetails;
import org.egov.bpa.calculator.web.models.Workflow;
import org.springframework.validation.annotation.Validated;

import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * BPA application object to capture the details of land, land owners, and address of the land.
 */
@ApiModel(description = "BPA application object to capture the details of land, land owners, and address of the land.")
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2020-06-23T05:52:32.717Z[GMT]")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
public class BpaV2   {
  @JsonProperty("id")
  private String id = null;

  @JsonProperty("applicationNo")
  private String applicationNo = null;

  @JsonProperty("approvalNo")
  private String approvalNo = null;

  @JsonProperty("accountId")
  private String accountId = null;

  @JsonProperty("applicationType")
  private String applicationType = null;

  @JsonProperty("serviceType")
  private String serviceType = null;

  @JsonProperty("edcrNumber")
  private String edcrNumber = null;
  
  @JsonProperty("department")
  private String department = null;
  
  @JsonProperty("category")
  private String category = null;

  @JsonProperty("totalPlotArea")
  private Float totalPlotArea = null;

  @JsonProperty("riskType")
  private String riskType = null;
  
  @JsonProperty("businessService")
  private String businessService = null;

  @JsonProperty("tenantId")
  private String tenantId = null;
  
  @JsonProperty("status")
  private String status = null;

//  @JsonProperty("documents")
//  @Valid
//  private List<Document> documents = null;

  @JsonProperty("applcationDetail")
  private ApplcationDetail applcationDetail = null;

  @JsonProperty("workflow")
  private Workflow workflow = null;
  


  @JsonProperty("auditDetails")
  private AuditDetails auditDetails = null;



  
}
