asserts.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
asserts.equal('R3.40', totalPhoneBill('call, sms'));
asserts.equal('R1.30', totalPhoneBill('sms, sms'));

describe('totalPhoneBill' , function(){
    it('should return the amount for sms' ,function(){
         assert.equal(totalPhoneBill('sms'), 'R0.65');

    });

    it('should return the amount for call' ,function(){
         assert.equal(totalPhoneBill("call"), 'R2.75');
        });

});