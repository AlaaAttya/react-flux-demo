
var AppDispatcher = require('../dispatcher/AppDispatcher');

var EventsActions = {

	create: function (text) {
		AppDispatcher.dispatch({
			actionType: 1,
			text: text
		});
	}
}

module.exports = EventsActions;
