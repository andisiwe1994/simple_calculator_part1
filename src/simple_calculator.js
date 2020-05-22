function add(...arguments){
    var sum =0;
    for(var i=0; i <arguments.length; i++){ 
     sum += arguments[i];
    }
     return sum ;
}
       
        
function multiply(...arguments){
    var product = 1;
    for(var i=0;i<arguments.length;i++){ 
    product *=arguments[i];
    }
    return product;
}
  
    
    module.exports = { add, multiply }          
                
            