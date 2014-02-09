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
	});
});
