'use strict'

var app = app || {};

app.Button = function(){

	function Button(x, y, width, height, text, stage){
		PIXI.Graphics.call(this);
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.text = text;
		this.upColour = 0xFF0000;
		this.overColour = 0x00FF00;
		this.downColour = 0x0000FF;


		var text = new PIXI.Text(""+this.text, {font:"50px Arial", fill:"red"});
		this.addChild(text);

		this.lineStyle(2, 0xFF00FF, 1);
		this.beginFill(0xFF00BB, 0.25);
		this.drawRoundedRect(x, y, 300, 100, 15);
		this.endFill(); 
		this.interactive = true;
		this.buttonMode = true;
		//Restarting
		this.mousedown = function(mouseData){			
			for (var i = stage.children.length - 1; i >= 0; i--) {	stage.removeChild(stage.children[i]);};
			app.Game.changeState("MAIN_SCREEN");
		}
	};

	Button.prototype = Object.create(PIXI.Graphics.prototype);
	Button.prototype.constructor = Button;

	return Button;
}();