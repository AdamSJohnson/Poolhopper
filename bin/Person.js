'use strict'

var app = app || {};

app.Person = {

	makePerson: function(headColor, bodyColor, stage){
		var head = new PIXI.Graphics();	
		var body = new PIXI.Graphics();
		var personCon = new PIXI.Container();

	//console.log("1");
		head.lineStyle(2, 0x000000);
		head.beginFill(headColor, 0.5);
		head.drawCircle(100, 50, 30);
		head.endFill();

	//console.log("2");
		body.lineStyle(2, 0x000000);
		body.beginFill(bodyColor, 0.5);
		body.drawEllipse(100, 50, 100, 50);
		body.endFill();

	//console.log("3");
		personCon.addChild(body);
		personCon.addChild(head);
		stage.addChild(personCon);
	//console.log("4");
	}
};