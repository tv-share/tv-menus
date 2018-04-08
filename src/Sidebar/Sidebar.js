import React from "react";
import PropTypes from "prop-types";

const CLOSED_WIDTH = "60px";

/**
 * Renders the Sidebar Component
 * @param  {Boolean} 	states if the sidebar is expandable or not (optional)
 * @param  {Boolean} 	states if the sidebar is open or closed (required if !!expandable)
 * @param  {Array} 		array of the sidbar objects
 * @param  {String} 	logo that goes on top of the sidebar (optional)
 * @param  {Function}	openAction is the click function of the menu button
 * @return {JSX}			Sidebar Component
 */
export default class Sidebar extends React.Component {

	constructor(props) {
		super(props);

		this.CLOSED_WIDTH = "60px";
		this.OPEN_WIDTH;

		this.state = {
			isOpen: !props.expandable,
			sidebarWidth: null
		};

		this.openAction = this.openAction.bind(this);
	}

	componentDidMount() {
		if(this.props.expandable) {
			this.OPEN_WIDTH = this.menu.clientWidth + 2 + "px";
			this.setState({ sidebarWidth: this.CLOSED_WIDTH });
		}
	}

	render() {
		const { className = "", expandable, items } = this.props;
		const { sidebarWidth } = this.state;
		
		return (
			<div ref={node => this.menu = node} style={{ width: sidebarWidth }} className={`sidebar ${className}`}>
				{expandable ? this.renderMenuButton() : null}
				<ul>
					{this.renderItems(items)}
				</ul>
			</div>
		);
	}

	renderItems(items) {
		const to = items.map(item => {
			return (
				<li
					key={item.id}
					className="item"
					onClick={item.clickAction}
				>
					<img src={item.icon} className="icon" />
					{item.label}
				</li>
			);
		});
		return to;
	}

	openAction() {
		const { isOpen } = this.state;
		
		let width;
		if(isOpen) {
			width = this.CLOSED_WIDTH;
		} else {
			width = this.OPEN_WIDTH;
		}
		this.setState({ isOpen: !isOpen, sidebarWidth: width });
	}
	
	renderMenuButton() {
		const { isOpen } = this.state;
		return (
			<div className={`menu-btn -${isOpen ? "open" : "closed"}`} onClick={this.openAction}>
				<div className="line1" />
				<div className="line2" />
				<div className="line3" />
			</div>
		);
	};
}


const item = PropTypes.shape({
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	clickAction: PropTypes.func,
	icon: PropTypes.string
});

Sidebar.propTypes = {
	className: PropTypes.string,
	expandable: PropTypes.bool,
	items: PropTypes.arrayOf(item)
};