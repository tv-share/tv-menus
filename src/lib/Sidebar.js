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

const renderItems = (logo, items) => {
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

const renderBurger = (isOpen, openAction) => {
	return (
		<div className={`burger -${isOpen ? "open" : "closed"}`} onClick={openAction}>
			<div className="line1" />
			<div className="line2" />
			<div className="line3" />
		</div>
	);
};

const Sidebar = props => {
	const { className, expandable, isOpen, items, logo, openAction } = props;
	return (
		<div className={`sidebar${className ? ` ${className}` : ""}`}>
			{
				expandable ? renderBurger(isOpen, openAction) : null
			}
			{ !(expandable && !isOpen) ? renderItems(logo, items) : null }
		</div>
	);
};

const item = PropTypes.shape({
	id: PropTypes.string,
	label: PropTypes.string,
	clickAction: PropTypes.func
});

Sidebar.propTypes = {
	className: PropTypes.string,
	expandable: PropTypes.bool,
	isOpen: PropTypes.bool,
	items: PropTypes.arrayOf(item),
	logo: PropTypes.string,
	openAction: PropTypes.func
};

export default Sidebar;