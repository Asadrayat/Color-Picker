
window.onload = () => {
	main();
  };
  let div = null;
  function main() {
	  const root = document.getElementById('container');
	  const btn = document.getElementById('btn');
	  const copyBtn = document.getElementById('copy_btn');
	  const output = document.getElementById('output');
	  const output2 = document.getElementById('output2');
  
	  btn.addEventListener('click', function() {
		  const color = generateDecimal();
		  const colorCode = generateHash(color);
		  const rgb = generateRgb(color);
		  root.style.backgroundColor = colorCode;
		  output.value = colorCode.substring(1).toLocaleUpperCase();
		  output2.value = rgb;
	   })
	   copyBtn.addEventListener("click",function(){
		  navigator.clipboard.writeText(`#${output.value}`);
		  if(div !== null){
			  div.remove();
			  div = null;
		  }
		  if(isValidHex(output.value)){
			generateToastMsg(`#${output.value} copied`)
		  }else{
			alert("Invalid Color Code")
		  }
	   })
	   output.addEventListener('keyup', function(e){
	    const color = e.target.value;
		if(color){
			output.value = color.toUpperCase()
			if(isValidHex(color)){
				root.style.backgroundColor = `#${color}`;			
			}
		}

	 })	   
  }
  
  function generateDecimal(){
	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);
	
	return {
		red,
		green,
		blue
	}
	
  }

  function generateHash({red,green,blue}) {  
    // const {red,green,blue} = generateDecimal();
	const getTWoCode = (value) => {
		const hex = value.toString(16);
		return hex.length === 1 ? `0${hex}` : hex;
	}

	return `#${getTWoCode(red)}${getTWoCode(green)}${getTWoCode(blue)}`;
  }  
  function generateRgb({red,green,blue}) {  
    // const {red,green,blue} = generateDecimal();

	return `rgba(${red},${green},${blue})`;
  }  
  function generateToastMsg(msg){
	  div = document.createElement('div');
	  div.innerHTML = msg;
	  div.className = "toast-msg toast-msg-slide-in";
	  document.body.appendChild(div)
  
	  div.addEventListener('click', function(){
		  this.classList.remove("toast-msg-slide-in");
		  this.classList.add("toast-msg-slide-out");
  
		  this.addEventListener('animationend',function(){
			  this.remove()
			  div == null;
		  })
	  })
  }

  
/**
 @param {string} color : ;
 * */ 
function isValidHex(color){
	if(color.length !== 6) return false;
	// if(color[0] !== '#') return false;

	// color = color.substring(1);
	return /^[0-9A-Fa-f]{6}$/i.test(color)
}
// refactor 
//function1 generate 3 random decimal number for red,green blue
// return as an object 

// generate Hex color 
