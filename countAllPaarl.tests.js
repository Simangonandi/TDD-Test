describe('countAllPaarl' , function(){
    it('If the test passes, it should count all Paarl regNumbers' , function(){
        var regCount = countAllPaarl('CJ 345, CJ 2345, CL 123-456, CK 345, CJ 123')
          assert.equal(regCount, 3);

        assert.equal(3, countAllPaarl('CJ 345, CJ 2345, CL 123-456, CK 345, CJ 123'));

    });

    it('If the test fails it should not count regisytration numbers' , function(){
        var regCount = countAllPaarl('CJ 345, CJ 2345, CL 123-456, CK 345, CJ 123')
          assert.equal(regCount, 2);

        assert.equal(2, countAllPaarl('CJ 345, CJ 2345, CL 123-456, CK 345, CJ 123'));
        
    });
    
});