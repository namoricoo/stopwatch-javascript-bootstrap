describe("Stopwatch", function() {
	var stopwatch;
	beforeEach(function() {
		stopwatch = new Stopwatch();
	});
	
	describe('count up stopwatch', function() {
		it('should have prototype Stopwatch defined', function () {
			expect(Stopwatch).toBeDefined();
		});
	});
});
