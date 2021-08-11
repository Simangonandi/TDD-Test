var fromStellies = countAllFromTown('CL 124,CY 567,CJ 456,CL 341,','CL');
//fromStellies should contains
asserts.equal(fromStellies, 3)

var fromKuilsriver = countAllFromTown('CL 124,CY 567,CF 456,CL 341,','CF');
//fromStellies should contains
asserts.equal(fromKuilsriver, 1)

describe('countAllFromTown' , function(){
    it('should return the number of all the registration from a town' , function(){
        var town = 'CL 64564, CL5412, CJ 4643, CA 5445, CZ 5862 CF 54325';
        assert.equal(countAllFromTown(town), 1);
    });

    it('should return that these registration are not from the same town' , function(){
        var town = 'CL 64564, CL5412, CJ 4643, CA 5445, CZ 5862 CF 54325';
        assert.notEqual("CA","CL","these are not equal");

    });
    
});