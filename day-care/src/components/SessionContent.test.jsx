import {describe, expect, test,vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import SessionContent from './SessionContent.jsx';
import renderer from 'react-test-renderer';
import {toJson} from './../utils/test-utils.js';
 
 
describe("SessionContent test", () => {
    test("SessionContent loads properly without data", () => {
        render(<SessionContent data={[]}/>);
        expect(screen.getByText(/Whole day/i)).toBeDefined();
        expect(screen.getByText(/Morning/i)).toBeDefined();
        expect(screen.getByText(/Afternoon/i)).toBeDefined();
    })

    test("SessionContent loads properly with data", () => {
        render(<SessionContent data={[{
          "id": 102301,
          "day": "2023-05-21",
          "start_time": "08:00",
          "end_time": "18:30",
          "product_name": "Whole day",
          "child_id": 15,
          "group": {
            "id": 1,
            "name": "Group 1"
          },
          "presence": "unknown"
        }]}/>);
        expect(screen.getByText(/Whole day/i)).toBeDefined();
    })

    test("SessionContent component loaded", () => {
      const component = renderer.create(<SessionContent data={[{
        "id": 102301,
        "day": "2023-05-21",
        "start_time": "08:00",
        "end_time": "18:30",
        "product_name": "Whole day",
        "child_id": 15,
        "group": {
          "id": 1,
          "name": "Group 1"
        },
        "presence": "unknown"
      }]}/>);
      let tree = toJson(component);
      expect(tree).toBeDefined();
      expect(tree).toMatchSnapshot();
  }) 
})