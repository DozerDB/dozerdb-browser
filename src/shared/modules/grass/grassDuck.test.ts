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
import reducer, { UPDATE_GRAPH_STYLE_DATA } from './grassDuck'

describe('grass reducer', () => {
  test('handles initial value', () => {
    const nextState = reducer(undefined, { type: '' })
    expect(nextState).toBeNull()
  })
  test('handles UPDATE_GRAPH_STYLE_DATA without initial state', () => {
    const action = {
      type: UPDATE_GRAPH_STYLE_DATA,
      styleData: 'style updated'
    }
    const nextState = reducer(undefined, action)
    expect(nextState).toEqual('style updated')
  })

  test('handles UPDATE_GRAPH_STYLE_DATA', () => {
    const initialState: any = { labels: ['Person'], styleData: 'style' }
    const action = {
      type: UPDATE_GRAPH_STYLE_DATA,
      styleData: 'style updated again'
    }
    const nextState = reducer(initialState, action)
    expect(nextState).toEqual('style updated again')
  })
})
