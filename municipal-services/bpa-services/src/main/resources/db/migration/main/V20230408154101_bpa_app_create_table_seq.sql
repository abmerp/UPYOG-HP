
CREATE TABLE IF NOT EXISTS public.pg_bpa_applications (
	id varchar(64) NOT NULL,
	applicationnumber varchar(250) NULL,
	servicetype varchar(64) NULL,
	department varchar(64) NULL,
	category varchar(64) NULL,
	totalplotarea varchar(64) NULL,
	"action" varchar(64) NULL,
	status varchar(64) NULL,
	"comment" varchar(256) NULL,
	businessservice varchar(64) NULL,
	workflowcode varchar(64) NULL,
	tenantid varchar(1062) NULL,
	applicationdetails jsonb NULL,
	createdby varchar(64) NULL,
	lastmodifiedby varchar(64) NULL,
	createdtime int8 NULL,
	lastmodifiedtime int8 NULL,
	edcrnumber varchar(64) NULL,
	approvalno varchar(64) NULL,
	CONSTRAINT pg_bpa_applications_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.pg_bpa_applications_audit (
	id varchar(64) NOT NULL,
	applicationnumber varchar(250) NULL,
	servicetype varchar(64) NULL,
	department varchar(64) NULL,
	category varchar(64) NULL,
	totalplotarea varchar(64) NULL,
	"action" varchar(64) NULL,
	status varchar(64) NULL,
	"comment" varchar(256) NULL,
	businessservice varchar(64) NULL,
	workflowcode varchar(64) NULL,
	tenantid varchar(1062) NULL,
	applicationdetails jsonb NULL,
	createdby varchar(64) NULL,
	lastmodifiedby varchar(64) NULL,
	createdtime int8 NULL,
	lastmodifiedtime int8 NULL,
	edcrnumber varchar(64) NULL,
	approvalno varchar(64) null
	);
	
	


CREATE SEQUENCE IF NOT EXISTS public.seq_pg_bpa_apl
	INCREMENT BY 1
	NO MINVALUE
    NO MAXVALUE
	START 1
	CACHE 1
	NO CYCLE;
	