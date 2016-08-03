describe('Roman Numeral Testing', function(){
	

	it("Should be a string for 1.", function(){
		expect(makeRoman2(1)).toEqual("I");
	});

	it("Should be a string for 5.", function(){
		expect(makeRoman2(5)).toBe("V");
	});

	it("Should be a string for 9.", function(){
		expect(makeRoman2(9)).toBe("IX");
	});

	it("Should be a string for 10.", function(){
		expect(makeRoman2(10)).toEqual("X");
	});

	it("Should be a string for 30.", function(){
		expect(makeRoman2(30)).toEqual("XXX");
	});

	it("Should be a string for 40.", function(){
		expect(makeRoman2(40)).toBe("XL");
	});

	it("Should be a string for 50.", function(){
		expect(makeRoman2(50)).toBe("L");
	});

	it("Should be a string for 90.", function(){
		expect(makeRoman2(90)).toBe("XC");
	});

	it("Should be a string for 100.", function(){
		expect(makeRoman2(100)).toEqual("C");
	});

	it("Should be a string for 500.", function(){
		expect(makeRoman2(500)).toEqual("D");
	});

	it("Should be a string for 1000.", function(){
		expect(makeRoman2(1000)).toBe("M");
	});

	it("Should be a string for 1009.", function(){
		expect(makeRoman2(1009)).toBe("MIX");
	});

	// var random = Math.floor(Math.random() * 10) *15;
	// it("Should be a string"+random, function(){
	// 	expect(makeRoman2(random)).toEqual("makeRoman2");
	// });
});

describe('Reverse Roman Numeral Testing', function(){
	

	it("Should be a string for 1.", function(){
		expect(undoRoman("I")).toEqual(1);
	});

	it("Should be a string for 5.", function(){
		expect(undoRoman("V")).toBe(5);
	});
