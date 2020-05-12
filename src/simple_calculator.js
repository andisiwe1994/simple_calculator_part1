function add(...parameters){
    var sum =0;
    for(var i=0; i <parameters.length; i++){ 
     sum += parameters[i];
    }
     return sum ;
}
       
        
function multiply(...parameters){
    var product = 1;
    for(var i=0;i<parameters.length;i++){ 
    product *=parameters[i];
    }
    return product;
}
  
    
    module.exports = { add, multiply }          
                
            