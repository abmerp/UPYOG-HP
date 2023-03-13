package org.egov.bpa.web.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.egov.bpa.web.model.collection.PermissionOfSubdivisionChecklist;
import org.egov.bpa.web.model.landInfo.LandInfo;
import org.hibernate.validator.constraints.SafeHtml;
import org.springframework.validation.annotation.Validated;

import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
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
  @SafeHtml
  @JsonProperty("id")
  private String id = null;

  @SafeHtml
  @JsonProperty("applicationNo")
  private String applicationNo = null;

  @SafeHtml
  @JsonProperty("approvalNo")
  private String approvalNo = null;

  @SafeHtml
  @JsonProperty("accountId")
  private String accountId = null;
  
  @SafeHtml
  @JsonProperty("applicationType")
  private String applicationType = null;
  
  @SafeHtml
  @JsonProperty("serviceType")
  private String serviceType = null;

  @SafeHtml
  @JsonProperty("edcrNumber")
  private String edcrNumber = null;
  
  @JsonProperty("department")
  private String department = null;
  
  
  @JsonProperty("category")
  private String category = null;

  
  @JsonProperty("totalPlotArea")
  private Float totalPlotArea = null;

  @SafeHtml
  @JsonProperty("riskType")
  private String riskType = null;
  
  @SafeHtml
  @JsonProperty("businessService")
  private String businessService = null;


  @SafeHtml
  @JsonProperty("tenantId")
  private String tenantId = null;

  
  
  @SafeHtml
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
