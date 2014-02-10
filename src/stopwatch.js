var Stopwatch = function() {
	this.isRunning = false;
	this.startPauseButton = document.getElementById("startPauseButton");
	this.timeString = document.getElementById("timeString");	
	this.setTimeValue('00:00:00');
};

Stopwatch.prototype.countUp = function() {
	if(this.isRunning) {
		this.pause();
	}else {
		this.start();
	}
};

Stopwatch.prototype.start = function() {
	this.isRunning = true;	
	this.setButtonText('Pause');
};

Stopwatch.prototype.pause = function() {
	this.isRunning = false;
	this.setButtonText('Start');
};
Stopwatch.prototype.reset = function() {
	this.isRunning = false;
	this.setButtonText('Start');
	this.setTimeValue('00:00:00');
};	

Stopwatch.prototype.setButtonText = function(buttonText) {
	this.startPauseButton.innerHTML = buttonText;
};

Stopwatch.prototype.timeValue = function() {
	return this.timeString.innerHTML; 
};

Stopwatch.prototype.setTimeValue = function(timeString) {
	this.timeString.innerHTML = timeString; 
};

// Stopwatch.prototype.increaseTime = function() {
	// if(this.isRunning) {
		// setTimeout(function() {
// 			
		 // }, 100); // wait 10th of 1 second	
	// }
// };
