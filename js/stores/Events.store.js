var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;

function create(text){
	alert(text);
}

AppDispatcher.register(function(action){
	switch(action.actionType) {
		case 1:
			create(action.text.trim());
		break;
	}
});

