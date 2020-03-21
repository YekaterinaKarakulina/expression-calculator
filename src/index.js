function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
	
    var openBrackets = [];
    var closeBrackets = [];
    var arr = expr.split('');

    for (var i=0; i<arr.length; i++) {
        if (arr[i] === '(') {
            openBrackets.push(arr[i]);
        } else if (arr[i] === ')') {
            closeBrackets.push(arr[i]);
        }
    }
    if (openBrackets.length != closeBrackets.length) {
        throw ('ExpressionError: Brackets must be paired'); 
    }

  function calcInsideBrackets(expr){
		var str = expr;
		while (str.match(/\([^\(\)]+\)/)) {
            var nestedBrackets = str.match(/\([^\(\)]+\)/);
            var nestedArr = nestedBrackets[0].slice(3,-3).split(' ');
            basicMath(nestedArr);
            str = str.replace(/\([^\(\)]+\)/, nestedArr[0]);
		}
		arr = [];
        var regex = /-[0-9.]{1,20}|[0-9.]{1,20}|[-]|[+]|[*]|[\/]/g;
        arr = str.match(regex);
		basicMath(arr);
		return arr[0];  
	}

	function basicMath (arr) {
		for (var i=1; i<arr.length-1; i++){
			if(arr[i] === '*'){
				arr[i-1] = parseFloat(arr[i-1])*parseFloat(arr[i+1]);
				arr.splice(i,2);
				i--;
			}
			if(arr[i] === '/'){
				if (arr[i-1]/arr[i+1] == Infinity) throw new Error('TypeError: Division by zero.');
				arr[i-1] = parseFloat(arr[i-1])/parseFloat(arr[i+1]);
				arr.splice(i,2);
				i--;
			}
		}     
		for (var i=1; i < arr.length-1; i++){
			if(arr[i] === '-'){
				arr[i-1] = parseFloat(arr[i-1])-parseFloat(arr[i+1]);
				arr.splice(i,2);
				i--;        
			}
			if(arr[i] === '+'){
                arr[i-1] = parseFloat(arr[i-1])+parseFloat(arr[i+1]);
				arr.splice(i,2);
				i--;        
			}
		}    
    }	
    return calcInsideBrackets(expr);
}

module.exports = {
    expressionCalculator
}