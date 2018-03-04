import React from "react";
import PropTypes from "prop-types";

/**
* Renders the Header Component
* @param  {Array}       items is the array of the header objects on the left side
* @param  {Array}       options is the array of the header objects on the right side
* @param  {String}    	logo is the logo displayed on the far left of the Header (optional)
* @param  {String}    	title is the title of the header
* @param  {String}    	className is a string that will be attached to the header's className (optional)
* @param  {Function}    logoClickAction is the click function of the logo (optional)
* @return {JSX}         Header Component
*/
const Header = ({ className = "", title, logo, logoClickAction, items, options }) => {
	return (
		<div className={`header ${className}`}>
			
			{logo ? renderLogo(logo, logoClickAction) : null}
			
			<div className="title">
				{title}
			</div>

			<ul className="items">
				{items ? renderItems(items) : null}
			</ul>

			<ul className="options">
				{options ? renderOptions(options) : null}
			</ul>
			
		</div>
	);
}

const renderLogo = (logo, logoClickAction) => {
	return <img className={`logo ${logoClickAction ? "pointer" : ""}`} src={logo} onClick={logoClickAction} />
}

const renderItems = (items) =>{
	return items.map(item => {
		return (
			<li key={item.id} id={item.id} onClick={item.clickAction}> 
				{item.name}
			</li>
		);
	});
}

const renderOptions = (options) => {
	return options.map(option => {
		return (
			<li id={option.id} key={option.id} onClick={option.clickAction}>
			{
				option.name ?
				option.name
				: null
			}
			{
				option.img ?
				<img src={option.img} />
				: null
			}
			</li>
		);
	}).reverse();
}

const item = PropTypes.shape({
	id: PropTypes.string,
	clickAction: PropTypes.func,
	name: PropTypes.string
})

const option = PropTypes.shape({
	id: PropTypes.string,
	clickAction: PropTypes.func,
	name: PropTypes.string,
	img: PropTypes.string
})

Header.propTypes = {
	title: PropTypes.string,
	logo: PropTypes.string,
	logoClickAction: PropTypes.func,
	className: PropTypes.string,
	items: PropTypes.arrayOf(item),
	options: PropTypes.arrayOf(option)
};

export default Header;