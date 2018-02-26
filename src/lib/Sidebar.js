import React from "react";
import PropTypes from "prop-types";

const renderLogo = logo => {
	return (
		<img
			className="logo"
			src={logo}
			key="logo"
		/>
	); 
};

const renderItems = (logo, items, expandable, isOpen) => {
	const to = items.map(item => {
		return (
			<div
				key={item.id}
				className="item"
				onClick={item.clickAction}
			>
				{item.label}
			</div>
		);
	});
	logo ? to.unshift(renderLogo(logo)) : null;
	return to;

};

const Sidebar = props => {
	const { expandable, items, logo, isOpen } = props;
	return (
		<div className="sidebar">
			{renderItems(logo, items, expandable, isOpen)}
		</div>
	);
};

const item = PropTypes.shape({
	id: PropTypes.string,
	label: PropTypes.string,
	clickAction: PropTypes.func
});

Sidebar.propTypes = {
	items: PropTypes.arrayOf(item),
	logo: PropTypes.string,
	expandable: PropTypes.bool
};

export default Sidebar;