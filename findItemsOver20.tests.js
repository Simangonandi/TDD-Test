var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];



describe('findItemsover20', function(){
    it('should return only items with quantity over 20', function(){
            assert.deepEqual(findItemOver20([{name:"apples", qty:10}, {name :"pears", qty:37}, {name: "bananas", qty:27}, ]),[{"name":"pears","qty": 37}, {name : 'bananas', qty : 27}]);
    
    });

    it('should return no items with quantity over 20', function(){
            assert.notEqual(findItemOver20([''],'', true));
    
    });

});