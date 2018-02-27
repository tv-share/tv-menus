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
const Header = ({ className, title, logo, logoClickAction, items, options }) => {
	return (
		<div className={`header${className ? className : ""}`}>

			{logo ? renderLogo(logo, logoClickAction) : null}
			
			<div className="title">
				{title}
			</div>

			<div className="items">
				{renderItems(items)}
			</div>

			<div className="options">
				{renderOptions(options)}
			</div>
		</div>
	);
}

const renderLogo = (logo, logoClickAction) => {
	return <img src={logo} onClick={logoClickAction}></img>
}

const renderItems = (items) =>{
	let to = []
	items.map(item => {
		to.push(
		<div className={`${item.id}`} onClick={item.clickAction}> 
			{item.name} 
		</div>)
	});
	return to;
}

const renderOptions = (options) =>{
	let to = []
	options.map(option => {
		to.unshift(
		<div onClick={option.clickAction}>
		{
			option.name ?
			<div className={`${option.id}`}> 
				{option.name} 
			</div>
			: null
		}
		{
			option.img ?
			<img src={option.img}></img>
			: null
		}
		</div>
		)
	});
	return to;
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