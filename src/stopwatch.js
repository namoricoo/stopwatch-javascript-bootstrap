var Stopwatch = function() {
	this.isRunning = false;
	this.startPauseButton = document.getElementById("startPauseButton");	
	this.timeString = document.getElementById("timeString");
	this.timeInt = 0;
	this.setTimeValue('00:00:00');
};

Stopwatch.prototype.countUp = function() {
	if(this.isRunning) {
		this.pause();
	}else {
		this.startUp();
	}
};

Stopwatch.prototype.startUp = function() {	
	this.isRunning = true;	
	this.setButtonText('Pause');
	this.increaseTime();
};

Stopwatch.prototype.pause = function() {
	this.isRunning = false;
	this.setButtonText('Start');
};

Stopwatch.prototype.reset = function() {
	this.isRunning = false;
	this.setButtonText('Start');
	this.setTimeValue('00:00:00');
	this.timeInt = 0;
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

Stopwatch.prototype.formatTime = function(timeInt) {
	if(timeInt < 10) {
       timeInt = "0" + timeInt;
    }
    return timeInt;
};

Stopwatch.prototype.getMinutes = function(currentTime) {
	var minutes;	
	minutes = Math.floor(currentTime/10/60);
	minutes = this.formatTime(minutes);
	return minutes;
};

Stopwatch.prototype.getSeconds = function(currentTime) {
	var seconds;
	seconds = Math.floor(currentTime/10);
	return this.formatTime(seconds);	
};

Stopwatch.prototype.getTenthOfSecond = function(currentTime) {
	var tenthOfSecond;
	tenthOfSecond = currentTime % 60;
	return this.formatTime(tenthOfSecond);	
};

Stopwatch.prototype.formatOutput = function(minutes,seconds,tenthOfSecond) {
	var stopwatchString;
	stopwatchString = minutes + ":" + seconds + ":" + tenthOfSecond;	
	return stopwatchString;
};

Stopwatch.prototype.increaseTime = function() {
	var minutes, seconds, tenthOfSecond, outputText, self;
	self = this;	
	if(this.isRunning == true) {
		setTimeout(function() {			
			self.timeInt += 1;			
			minutes = self.getMinutes(self.timeInt);						
			seconds = self.getSeconds(self.timeInt);
			tenthOfSecond = self.getTenthOfSecond(self.timeInt);			
			outputText = self.formatOutput(minutes,seconds,tenthOfSecond);
			self.setTimeValue(outputText);
			self.increaseTime();
		}, 100); // wait 10th of 1 second
	}
};