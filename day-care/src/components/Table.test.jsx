import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import Table from './Table.jsx';

import renderer from 'react-test-renderer';
import {toJson} from './../utils/test-utils.js';
 
const columns = [
  {
    key: 'name',
    displayName: 'Child Name'
  },
  {
    key: 'avatar',
    displayName: 'Image'
  }
];
describe("Table test", () => {
    test("Table loads properly without data", () => {
        render(<Table columns={columns} data={[]}/>);
        expect(screen.getByText(/Child Name/i)).toBeDefined();
    })

    test("Table loads properly with data", () => {
        render(<Table columns={columns} data={[{
          "id": 5029,
          "name": "Test Child 5",
          "avatar": null
        }]}/>);
        expect(screen.getByText(/Test Child 5/i)).toBeDefined();
    });

    test("Table component loaded", () => {
      const component = renderer.create(<Table  columns={columns} data={[{
        "id": 5029,
        "name": "Test Child 5",
        "avatar": null
      }]}/>);
      let tree = toJson(component);
      expect(tree).toBeDefined();
      expect(tree).toMatchSnapshot();
  }) 
})