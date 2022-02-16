describe("checkBrackets", function() {
  describe("Wrong Cases", function() {
    let wrong = "-1"
    it(`Check invalid data = 123456789`, function(){
      assert.equal(checkBrackets(123456789), wrong);
    });
    it(`Check invalid data = NaN`, function(){
      assert.equal(checkBrackets(NaN), wrong);
    })
    it(`Check invalid data = ( )`, function(){
      assert.equal(checkBrackets(), wrong);
    })
    it(`Check invalid data = -`, function(){
      assert.equal(checkBrackets((5)), wrong);
    })
    it(`Check invalid data = (NaN)`, function(){
      assert.equal(checkBrackets((NaN)), wrong);
    })
  })
  describe("Right Cases", function() {
    let balance = "0";
    it(`Check valid data = ( ) ( ) ( )`, function(){
      assert.equal(checkBrackets("()()()"), balance);
    });
    it(`Check valid data = "()"`, function(){
      assert.equal(checkBrackets("()"), balance);
    })
    it(`Check valid data = '(1)()(())2(()`, function(){
      assert.equal(checkBrackets('1(((0908907)'), 2);
    })
    it(`Check valid data = ()())`, function(){
      assert.equal(checkBrackets("()())"), 1);
    })
    it(`Check valid data = (1)())`, function(){
      assert.equal(checkBrackets("(1)())"), 1);
    })
    it(`Check valid data = "((()()"`, function(){
      assert.equal(checkBrackets("((()()"), 2);
    });
    it(`Check valid data = "1()1"`, function(){
      assert.equal(checkBrackets("1()1"), balance);
    })
    it(`Check valid data = "(("`, function(){
      assert.equal(checkBrackets("(("), 2);
    })
    it(`Check valid data = '1)()(())2(()'`, function(){
      assert.equal(checkBrackets('1)()(())2(()'), 0);
    })
    it(`Check valid data = (1)())`, function(){
      assert.equal(checkBrackets("(1)())"), 1);
    })
  })
});
