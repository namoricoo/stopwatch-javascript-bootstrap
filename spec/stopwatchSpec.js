describe("Stopwatch", function() {
	var stopwatch;
	beforeEach(function() {
		stopwatch = new Stopwatch();
	});
	
	describe('count up stopwatch', function() {
		it('should have prototype Stopwatch defined', function () {
			expect(Stopwatch).toBeDefined();
		});

		it('should know if the timer is running', function() {
			expect(stopwatch.isRunning).toBeDefined();
		});
		
		it('should have a start Pause Button variable', function() {
			expect(stopwatch.startPauseButton).toBeDefined();
		});
		
		it('should have a pointer time string in the HTML document', function() {
			expect(stopwatch.timeString).toBeDefined();
		});
		
		it('should start increasing the stopWatch value', function() {
			var output = '00:00:00';			
			expect(stopwatch.timeValue()).toEqual(output);
		});
		
		it('should be able to modify current time value', function() {
			var input, output;
			input = '00:00:02';
			output = '00:00:02';
			stopwatch.setTimeValue(input);	
			expect(stopwatch.timeValue()).toEqual(output);
		});
		
		it('should be able to reset stopwatch', function() {
			var input, output;
			input = '00:00:02';
			output = '00:00:00';
			stopwatch.setTimeValue(input);
			stopwatch.reset();
			expect(stopwatch.timeValue()).toEqual(output);
		});
		
		it('should  be able to format time less than 10 to 2 digit format', function() {
			var input, output;
			input = 9;
			output = '09';		
			expect(stopwatch.formatTime(input)).toEqual(output);
		});
		
		it('should  be able to get minute', function() {
			var input, output;
			input = 1;
			output = '00';
			expect(stopwatch.getMinutes(input)).toEqual(output);
		});
		
		it('should  be able to get seconds', function() {
			var input, output;
			input = 1;
			output = '00';
			expect(stopwatch.getSeconds(input)).toEqual(output);
		});
		
		it('should  be able to get Tenth Of a Second', function() {
			var input, output;
			input = 1;
			output = '01';
			expect(stopwatch.getTenthOfSecond(input)).toEqual(output);
		});
		
		// it('should increase current Time', function() {					
			// output = '00:00:00';
			// stopwatch.increaseTime();
			// expect(stopwatch.timeValue()).not.toEqual(output);
		// });
	});
});
