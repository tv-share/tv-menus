import React from 'react';
import HeaderExample from "../examples/HeaderExample";
import renderer from 'react-test-renderer';

const fn = () => {};

it('renders correctely w/ logo click', () => {
    const component = renderer.create(
        <HeaderExample logoClickAction={fn}/>
    );
    
    expect(component.toJSON()).toMatchSnapshot();
});

it('renders correctely without logo click', () => {
    const component = renderer.create(
        <HeaderExample />
    );
    
    expect(component.toJSON()).toMatchSnapshot();
});