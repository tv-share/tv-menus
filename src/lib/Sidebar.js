import React from "react";
import PropTypes from "prop-types";

/**
 * Renders the Sidebar Component
 * @param  {Boolean} 	states if the sidebar is expandable or not (optional)
 * @param  {Boolean} 	states if the sidebar is open or closed (required if !!expandable)
 * @param  {Array} 		array of the sidbar objects
 * @param  {String} 	logo that goes on top of the sidebar (optional)
 * @param  {Function}	openAction is the click function of the menu button
 * @return {JSX}			Sidebar Component
 */
const Sidebar = ({ className = "", expandable, isOpen, items, logo, openAction }) => {
	return (
		<div className={`sidebar ${className}`}>
			{ expandable ? renderMenu(isOpen, openAction) : null }
			{ !(expandable && !isOpen) ? renderItems(logo, items) : null }
		</div>
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

const renderLogo = logo => {
	return (
		<img
			className="logo"
			src={logo}
			key="logo"
		/>
	); 
};

const renderMenu = (isOpen, openAction) => {
	return (
		<div className={`menu -${isOpen ? "open" : "closed"}`} onClick={openAction}>
			<div className="line1" />
			<div className="line2" />
			<div className="line3" />
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