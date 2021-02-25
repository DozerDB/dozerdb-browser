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
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import EditFrame from './EditFrame'
import { Frame } from 'shared/modules/stream/streamDuck'

describe('EditFrame', () => {
  it('creates a monaco instance with a unique id based on frame id', () => {
    const id = 'some-frame-id'
    const cmd = ':edit'
    const frame = { id, cmd } as Frame
    const { container } = render(
      <Provider
        store={configureStore()({ settings: {}, app: {}, sidebar: {} })}
      >
        <EditFrame frame={frame} />
      </Provider>
    )
    expect(container.querySelector(`#monaco-${id}`)).toBeDefined()
  })
})