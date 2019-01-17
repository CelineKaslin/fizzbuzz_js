describe ("it's a fizzbuzz program", function(){
  describe ("it should return 'Fizz' if it is a multiple of 3", function(){
    it ("For n = 3 it should return 'Fizz' ", function(){
      expect(fizzbuzz(3)).toEqual ('Fizz')
    });
    it ("for n = 9 it should return 'Fizz' ", function(){
      expect(fizzbuzz(9)).toEqual ('Fizz')
    });
  });

    describe ("it should return 'Buzz' if it is a multiple of 5", function(){
      it ("For n = 5 it should return 'Buzz' ", function(){
        expect(fizzbuzz(5)).toEqual ('Buzz')
      });
      it ("for n = 20 it should return 'Buzz' ", function(){
        expect(fizzbuzz(20)).toEqual ('Buzz')
      });
    });




})
