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
		this.startUp();
	}
};

Stopwatch.prototype.startUp = function() {
	var initialTime;
	this.isRunning = true;
	initialTime = 0;
	this.setButtonText('Pause');
	this.increaseTime(initialTime);
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

Stopwatch.prototype.increaseTime = function(initialTime) {
	var minutes, seconds, tenthOfSecond, outputText;
	console.log("this.isRunning="+this.isRunning);
	if(this.isRunning == true) {
		setTimeout(function() {
			console.log("-----running---");
			initialTime += 1;
			console.log("initialTime= "+initialTime);
			minutes = this.getMinutes(initialTime);
			console.log("minutes="+minutes);
			seconds = this.getSeconds(initialTime);
			tenthOfSecond = this.getTenthOfSecond(initialTime);
			outputText = this.formatOutput(minutes,seconds,tenthOfSecond);
			console.log("outputText="+outputText);
			this.setTimeValue(outputText);
			this.increaseTime();
		}, 100); // wait 10th of 1 second
	}
};