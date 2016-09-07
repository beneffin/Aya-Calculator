var keys = document.querySelectorAll('#calculator span');
var operators = ['+'];


// Add onclick event to all the keys and perform operations
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;

		//to clear the screen
		if(btnVal =='C') {
			input.innerHTML = '';
		}

		else if(btnVal == '='){
			var equation = inputVal;  //local var
			var lastChar = inputVal[equation.length - 1]; //local var

		if(equation)
			input.innerHTML = eval(equation);	
		}
		
		else {
			input.innerHTML += btnVal;  // inputin on screen
		}
		
		// prevent page jumps
		e.preventDefault();
	} 
}
