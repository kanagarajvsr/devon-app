import {  describe, expect, test } from 'vitest';
import Header from './Header.jsx';
import renderer from 'react-test-renderer';
import {toJson} from './../utils/test-utils.js';

describe("Header", () => {
    test("Header component loaded", () => {
        const component = renderer.create(<Header title='Testing' />);
        let tree = toJson(component);
        expect(tree).toBeDefined();
        expect(tree).toMatchSnapshot();
    }) 
})