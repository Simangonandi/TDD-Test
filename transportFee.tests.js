describe('transportFee' , function(){
    it('should return the morning shift amount' , function() {
        Assert.equal(transportFee('morning'), 'R20');

    });
    
    it('should return the afternoon shift amount' , function() {
        Assert.equal(transportFee('afternoon'), 'R10');

    });

    it('should return the nightshift' , function() {
        // var none = '0.00';
        Assert.equal(transportFee('nightshift'), 'free');

    });

})