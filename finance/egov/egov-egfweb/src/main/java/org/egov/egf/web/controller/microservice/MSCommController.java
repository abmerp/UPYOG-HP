package org.egov.egf.web.controller.microservice;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.egov.infra.microservice.models.Department;
import org.egov.infra.microservice.models.Designation;
import org.egov.infra.microservice.models.EmployeeInfo;
import org.egov.infra.microservice.utils.MicroserviceUtils;
import org.egov.infra.web.support.ui.Inbox;
import org.egov.infra.workflow.entity.StateAware;
import org.egov.infra.workflow.inbox.InboxRenderServiceDelegate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE;

@Controller
public class MSCommController {

	@Autowired
	MicroserviceUtils microserviceUtils;
	@Autowired
	
	private HttpServletRequest servletrequest;

	 @Autowired
	 private InboxRenderServiceDelegate<StateAware> inboxRenderServiceDelegate;
	 
	
	@RequestMapping(value = "/depratments",method=RequestMethod.GET)
	@ResponseBody
	public List<Department> getDetapartments(){
	
		List<Department> departments = microserviceUtils.getDepartments();
		return departments;
	}
	
	@RequestMapping(value = "/designations",method=RequestMethod.GET)
	@ResponseBody
	public List<Designation> getDesignations(){
		
		List<Designation> designations = microserviceUtils.getDesignation();
		
		return designations;
	}
	
	@RequestMapping(value="/approvers/{deptId}/{desgId}",method=RequestMethod.GET)
	@ResponseBody
	public List<EmployeeInfo> getApprovers(@PathVariable(name="deptId")String deptId,@PathVariable(name="desgId")String desgnId){
		
		List<EmployeeInfo> approvers = microserviceUtils.getApprovers(deptId,desgnId);
		
		return approvers;
	}
	
	@RequestMapping(value="/ClearToken",method=RequestMethod.POST)
	private void logout(@RequestParam(value="auth_token")String access_token){
		if(null != access_token){
			microserviceUtils.removeSessionFromRedis(access_token);
		}
	}
	
	@RequestMapping(value="/refreshToken",method=RequestMethod.POST)
	private void refreshToken(@RequestParam(value="oldToken")String oldToken,@RequestParam(value="newToken")String newToken){
		
		if(null!=oldToken && null!=newToken){
			microserviceUtils.refreshToken(oldToken, newToken);
		}
	}
	
	@GetMapping(value="inbox/items",produces = APPLICATION_JSON_UTF8_VALUE)
    @ResponseBody
    public List<Inbox>showInbox() {
        
        return inboxRenderServiceDelegate.getCurrentUserInboxItems();
    }
}
