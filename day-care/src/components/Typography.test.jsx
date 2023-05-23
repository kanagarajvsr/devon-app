import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import Typography from './Typography.jsx';
import renderer from 'react-test-renderer';
import {toJson} from './../utils/test-utils.js';

describe("Typography test", () => {
    test("Typography load properly", () => {
        render(<Typography label='Testing'><h4>Content</h4></Typography>);
        expect(screen.getByText(/Testing/i)).toBeDefined()
    })

    test("Typography component loaded", () => {
        const component = renderer.create(<Typography title='Testing' label='Testing' />);
        let tree = toJson(component);
        expect(tree).toBeDefined();
        expect(tree).toMatchSnapshot();
    }) 
})