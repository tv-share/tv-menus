import React from 'react';
import SidebarExample from "../examples/SidebarExample";
import Sidebar from "../src/Sidebar/Sidebar";
import renderer from 'react-test-renderer';

it('renders not expandable', () => {
    const component = renderer.create(
        <SidebarExample />
    );
    expect(component.toJSON()).toMatchSnapshot();
});

function createNodeMock(element) {
    if (element.props.className.trim() === 'sidebar') {
      return {
        clientWidth: 200
      };
    }
    return null;
  }

it('renders expandable closed', () => {
    const component = renderer.create(
        <SidebarExample expandable />,
        {createNodeMock}
    );
    expect(component.toJSON()).toMatchSnapshot();
});

it('renders expandable opened', () => {
    const component = renderer.create(
        <SidebarExample expandable />,
        {createNodeMock}
    );
    component.root.findByType(Sidebar).instance.openAction();
    expect(component.toJSON()).toMatchSnapshot();
});