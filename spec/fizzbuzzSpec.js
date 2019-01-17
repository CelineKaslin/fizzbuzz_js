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

    describe ("it should return 'FizzBuzz' if it is a multiple of 15", function(){
      it ("For n = 15 it should return 'FizzBuzz' ", function(){
        expect(fizzbuzz(15)).toEqual ('FizzBuzz')
      });
      it ("for n = 30 it should return 'FizzBuzz' ", function(){
        expect(fizzbuzz(30)).toEqual ('FizzBuzz')
      });
    });


    describe ("it should return the number itself", function(){
      it ("For n = 1 it should return 1 ", function(){
        expect(fizzbuzz(1)).toEqual (1)
      });
      it ("for n = 4 it should return 4 ", function(){
        expect(fizzbuzz(4)).toEqual (4)
      });
    });
})
