import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import renderer from 'react-test-renderer';
import ListItems from './ListItems.jsx';
import {toJson} from './../utils/test-utils.js';
 
describe("ListItems test", () => {
    
     test("ListItems loads properly with data", () => {
        render(<ListItems  data={{
            "id": 102301,
            "day": "2023-05-21",
            "child_name": "2023-05-21",
            "avatar": null,
            "start_time": "08:00",
            "end_time": "18:30",
            "product_name": "Whole day",
            "child_id": 15,
            "group": {
              "id": 1,
              "name": "Group 1"
            },
            "presence": "unknown"
          }}/>);
        expect(screen.getByText(/unknown to present/i)).toBeDefined();
    }) 

    test('Expect the component to be rendered', () => {
        const component = renderer.create(
          <ListItems data={{
            "id": 102301,
            "day": "2023-05-21",
            "child_name": "2023-05-21",
            "avatar": null,
            "start_time": "08:00",
            "end_time": "18:30",
            "product_name": "Whole day",
            "child_id": 15,
            "group": {
              "id": 1,
              "name": "Group 1"
            },
            "presence": "unknown"
          }}/>,
        )
        let tree = toJson(component);
        expect(tree).toBeDefined();
        expect(tree).toMatchSnapshot();
      })
})