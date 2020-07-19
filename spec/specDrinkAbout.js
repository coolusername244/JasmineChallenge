describe("whatCanIDrink", function() {

    beforeEach(function() {
        drink = new whatCanIDrink();
    });
    
    describe("Checks age", function() {
        it ("should exist", function() {
            expect(whatCanIDrink).toBeDefined();
        });
        it ("should show 'Drink Toddy' if called as whatCanIDrink(13)", function() {
            var result = whatCanIDrink(13);
            expect(result).toBe("Drink Toddy");
        });
        it ("should show 'Drink Coke' if called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(17);
            expect(result).toBe("Drink Coke");
        });
        it ("should show 'Drink Beer' if called as whatCanIDrink(20)", function() {
            var result = whatCanIDrink(20);
            expect(result).toBe("Drink Beer");
        });
        it ("should show 'Drink Whisky' if called as whatCanIDrink(100)", function() {
            var result = whatCanIDrink(100);
            expect(result).toBe("Drink Whisky");
        });
        it ("should not give a result for ages above 130", function() {
            var result = whatCanIDrink(140);
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });
});