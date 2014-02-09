var Stopwatch = function() {
	this.isRunning = false;
	this.startPauseButton = document.getElementById("startPauseButton");
	this.timeString = document.getElementById("timeString");	
	this.timeString.innerHTML = '00:00:00';
};

Stopwatch.prototype.start = function() {
	this.isRunning = true;	
	this.setButtonText('Pause');
};

Stopwatch.prototype.setButtonText = function(buttonText) {
	this.startPauseButton.innerHTML = buttonText;
};

Stopwatch.prototype.timeValue = function() {
	return this.timeString.innerHTML; 
};	
// Stopwatch.prototype.increaseTime = function() {
	// if(this.isRunning) {
		// setTimeout(function() {
// 			
		 // }, 100); // wait 10th of 1 second	
	// }
// };
