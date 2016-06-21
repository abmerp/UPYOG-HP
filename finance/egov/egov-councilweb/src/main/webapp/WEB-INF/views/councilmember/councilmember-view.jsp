<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<div class="main-content">
	<div class="row">
		<div class="col-md-12">
			<div class="panel panel-primary" data-collapsed="0">
				<div class="panel-heading">
					<div class="panel-title">CouncilMember</div>
				</div>
				<div class="panel-body custom">
					<div class="row add-border">
						<div class="col-xs-3 add-margin">
							<spring:message code="lbl.electionward" />
						</div>
						<div class="col-sm-3 add-margin view-content">
							${councilMember.electionWard.name}</div>
						<div class="col-xs-3 add-margin">
							<spring:message code="lbl.designation" />
						</div>
						<div class="col-sm-3 add-margin view-content">
							${councilMember.designation.name}</div>
					</div>
					<div class="row add-border">
						<div class="col-xs-3 add-margin">
							<spring:message code="lbl.qualification" />
						</div>
						<div class="col-sm-3 add-margin view-content">
							${councilMember.qualification.name}</div>
						<div class="col-xs-3 add-margin">
							<spring:message code="lbl.caste" />
						</div>
						<div class="col-sm-3 add-margin view-content">
							${councilMember.caste.name}</div>
					</div>
					<div class="row add-border">
						<div class="col-xs-3 add-margin">
							<spring:message code="lbl.partyaffiliation" />
						</div>
						<div class="col-sm-3 add-margin view-content">
							${councilMember.partyAffiliation.name}</div>
						<div class="col-xs-3 add-margin">
							<spring:message code="lbl.gender" />
						</div>
						<div class="col-sm-3 add-margin view-content">
							${councilMember.gender}</div>
					</div>
					<div class="row add-border">
						<div class="col-xs-3 add-margin">
							<spring:message code="lbl.birthdate" />
						</div>
						<div class="col-sm-3 add-margin view-content">
							<fmt:formatDate pattern="MM/dd/yyyyy"
								value="${councilMember.birthDate}" />
</div><div class="col-xs-3 add-margin"><spring:message code="lbl.electiondate" />
</div><div class="col-sm-3 add-margin view-content">
<fmt:formatDate pattern="MM/dd/yyyyy" value="${councilMember.electionDate}" />
</div></div>
<div class="row add-border"><div class="col-xs-3 add-margin"><spring:message code="lbl.oathdate" />
</div><div class="col-sm-3 add-margin view-content">
<fmt:formatDate pattern="MM/dd/yyyyy" value="${councilMember.oathDate}" />
</div><div class="col-xs-3 add-margin"><spring:message code="lbl.mobilenumber" />
</div><div class="col-sm-3 add-margin view-content">
${councilMember.mobileNumber}
</div></div>
<div class="row add-border"><div class="col-xs-3 add-margin"><spring:message code="lbl.emailid" />
</div><div class="col-sm-3 add-margin view-content">
${councilMember.emailId}
</div><div class="col-xs-3 add-margin"><spring:message code="lbl.name" />
</div><div class="col-sm-3 add-margin view-content">
${councilMember.name}
</div></div>
<div class="row add-border"><div class="col-xs-3 add-margin"><spring:message code="lbl.residentialaddress" />
</div><div class="col-sm-3 add-margin view-content">
${councilMember.residentialAddress}
</div><div class="col-xs-3 add-margin"><spring:message code="lbl.photo" />
</div><div class="col-sm-3 add-margin view-content">
<c:if test="${not empty councilMember.photo}">
										<div class="col-md-3 col-xs-6 add-margin view-content">
											<img width="100" height="70" src='data:image/png;base64,${councilMember.photo}' /> 
										</div>	
										</c:if>
</div></div>
</div></div></div></div><div class="row text-center"><div class="add-margin"><a href="javascript:void(0)" class="btn btn-default" onclick="self.close()">Close</a></div></div>