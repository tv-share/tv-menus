import React from 'react';
import HeaderExample from "../examples/HeaderExample";
import renderer from 'react-test-renderer';

const emptyFn = () => {};

it('renders correctely', () => {
    const component = renderer.create(
        <HeaderExample />
    );
    
    expect(component.toJSON()).toMatchSnapshot();
});