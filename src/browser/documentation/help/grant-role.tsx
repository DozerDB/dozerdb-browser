/*
 * Copyright (c) "Neo4j"
 * Neo4j Sweden AB [http://neo4j.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import React from 'react'

import AdminOnSystemDb from './partials/admin-on-systemdb'
import ManualLink from 'browser-components/ManualLink'

const title = 'GRANT ROLE'
const subtitle = 'Assign roles to users'
const category = 'security'
const content = (
  <>
    <p>
      The <code>GRANT ROLE</code> command can be used to assign roles to users,
      giving them access rights.
    </p>
    <div className="links">
      <div className="link">
        <p className="title">Reference</p>
        <p className="content">
          <ManualLink
            chapter="cypher-manual"
            page="/administration/security/users-and-roles/#administration-security-roles-grant"
            minVersion="4.0.0"
          >
            GRANT ROLE
          </ManualLink>{' '}
          manual page
        </p>
      </div>
      <div className="link">
        <p className="title">Related</p>
        <p className="content">
          <a help-topic="show-roles">:help SHOW ROLES</a>{' '}
          <a help-topic="create-role">:help CREATE ROLE</a>{' '}
          <a help-topic="drop-role">:help DROP ROLE</a>{' '}
          <a help-topic="revoke-role">:help REVOKE ROLE</a>{' '}
          <a help-topic="cypher">:help Cypher</a>
        </p>
      </div>
    </div>
    <section className="example">
      <figure>
        <pre className="code runnable standalone-example">
          GRANT ROLE myrole TO jake
        </pre>
      </figure>
      <figure>
        <pre className="code runnable standalone-example">
          GRANT ROLES role1, role2 TO user1, user2, user3
        </pre>
        <figcaption>
          It is possible to assign multiple roles to multiple users in one
          command.
        </figcaption>
      </figure>
    </section>
    <AdminOnSystemDb />
  </>
)
export default { title, subtitle, category, content }
