function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here
    console.log('exp', expr);
    var arr = []; 
    var result = 0;
    var regex = /[0-9]{1,3}|[-]|[+]|[*]|[/]/g;
    var regSum = /[+]/;
    var regMin = /[-]/;
    var regMul = /[*]/;
    var regDiv = /[/]/;
    var l = 0;
    arr = expr.match(regex);
    console.log(arr);
    console.log('arr length', arr.length);
    //l = arr.length;
   
    if(arr.length>2) {
        for(var i=0; i<arr.length; i++)
        {
            if(arr[i].match(regDiv)) {
                console.log('i', i ,'div');
                
                if(arr[i+1]==0) {
                    throw "TypeError: Division by zero.";
                } else {
                    result = div(parseFloat(arr[i-1]),parseFloat(arr[i+1]));
                    console.log('res', result);
                    
                    arr.splice(i-1,3, result.toString());
                    
                    console.log('res arr', arr);
                    i=0;
                }
            }
        }
    }


    if(arr.length>2) {
        for(var i=0; i<arr.length; i++)
        {
            console.log('i', i);
            if(arr[i].match(regMul)) {
                console.log('i', i, 'mul');
                result = mul(parseFloat(arr[i-1]),parseFloat(arr[i+1]));
                
                console.log('res', result);
                arr.splice(i-1,3, result.toString());
                console.log('res arr', arr );
                i=0;
            }
            
        }
    }
  


    console.log('_____________________________________');
    if(arr.length>2) {
        for(var i=0; i<arr.length; i++)
        {    
            if(arr.length>2) {
            if(arr[i].match(regSum)) { 
                console.log('sum');
                result = sum(parseFloat(arr[i-1]),parseFloat(arr[i+1]));
                console.log('i', i);
                console.log('res', result);
                arr.splice(i-1,3, result.toString());
                console.log('res arr', arr);
                i=0;
            }}


   if(arr.length>2)
   {
       
             if(arr[i].match(regMin)) {
                console.log('min');
                result = minus(parseFloat(arr[i-1]),parseFloat(arr[i+1]));
                console.log('i', i);
                console.log('res', result);
                arr.splice(i-1,3, result.toString());
                console.log('res arr', arr);
                i=0;
            }
        }
        }
}



    
        console.log(result);
        console.log('arr after red', arr);
        return result;




}

function sum(a,b)  {
    return a+b;
}

function minus(a,b)  {
    return a-b;
}

function mul(a,b)  {
    return a*b;
}

function div(a,b)  {
    return a/b;
}

module.exports = {
    expressionCalculator
}