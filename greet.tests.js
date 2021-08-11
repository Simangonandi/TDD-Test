describe('The greet function' , function(){
    it('should return "Hello, Carol" when I greet Carol' , function(){

        Assert.equal('Hello, Carol', greet('Carol'));

    });

    it('should return "Hello, Nandi" when I greet Nandi' , function(){

        Assert.equal('Hello, Nandi', greet('Nandi'));

});

it('should return "Hello, Carol" when no name is entered' , function(){

    Assert.equal('Hello,', greet());

});

});