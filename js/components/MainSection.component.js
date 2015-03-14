var React = require('react');
var EventsActions = require("../actions/Events.action");
var EventsStore = require("../stores/Events.store");

var MainSection = React.createClass({
	render: function(){
		return (
			<h1 onClick={this._click}>Hello there</h1>
		);
	},
	_click: function(){
		EventsActions.create("anaaaaa 3elaaaa2");
	}
});

module.exports = MainSection;
