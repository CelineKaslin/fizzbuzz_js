describe ("it's a fizzbuzz program", function(){
  describe ("it should return 'Fizz' if it is a multiple of 3", function(){
    it ("For n = 3 it should return 'Fizz' ", function(){
      expect(fizzbuzz(3)).toEqual ('Fizz')
    });
    it ("for n = 9 it should return 'Fizz' ", function(){
      expect(fizzbuzz(9)).toEqual ('Fizz')
    });
  });

})
