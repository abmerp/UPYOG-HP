package org.egov.bpa.repository;

import org.egov.bpa.config.BPAConfiguration;
import org.egov.bpa.producer.Producer;
import org.egov.bpa.web.model.PermissionOfSubdivision;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class SubdivisionPermissionRepository {

		@Autowired
		private BPAConfiguration config;

		@Autowired
		private Producer producer;

		
		/**
		 * Pushes the request on save topic through kafka
		 *
		 * @param permissionOfSubdivision
		 *            The permissionOfSubdivision create request
		 */

		public void save(PermissionOfSubdivision permissionOfSubdivision) {
			producer.push(config.getSaveTopic(), permissionOfSubdivision);
		}

		public void update(PermissionOfSubdivision permissionOfSubdivision) {
			// TODO Auto-generated method stub
			
		}

		public void get(PermissionOfSubdivision permissionOfSubdivision) {
			// TODO Auto-generated method stub
			
		}

	}
