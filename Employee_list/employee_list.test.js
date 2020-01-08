const {AddName,AddImage,AddPhone,AddID,AddEmail,AddGender} = require('./text3')

  


test('Check name ',function(){
    
    var result = document.getElementsByClassName('name')
    expect(result).toBeTruthy()
   var data = {"name":{"first":"fsbhfb","last":"bfvbhk","title":"dbsh"}}
    var checkName = AddName(data)
    var dar = '<h4 class="name">dbsh fsbhfb bfvbhk</h4>'
    expect(checkName).toBe(dar)

    
});

test('Check Image',function(){
    
    var result = document.getElementsByClassName('img')
    expect(result).toBeTruthy()
    
});

test('Check Phone',function(){
    
    var result = document.getElementsByClassName('Phone')
    expect(result).toBeTruthy()
    
});

test('Check ID',function(){
    
    var result = document.getElementsByClassName('IDE')
    expect(result).toBeTruthy()
    
});

test('Check Email',function(){
    
    var result = document.getElementsByClassName('EMAIL')
    expect(result).toBeTruthy()
    
});

test('Check Gender',function(){
    
    var result = document.getElementsByClassName('Gender')
    expect(result).toBeTruthy()
    
});


