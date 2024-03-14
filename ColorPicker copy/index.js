window.onload = () => {
  main();
};
let div = null;
function main() {
	const root = document.getElementById('container');
	const btn = document.getElementById('btn');
	const copyBtn = document.getElementById('copy_btn');
	const output = document.getElementById('output');

	btn.addEventListener('click', function() {
		const colorCode = generateHash();
		root.style.backgroundColor = colorCode;
		output.value = colorCode;
	 })
	 copyBtn.addEventListener("click",function(){
		navigator.clipboard.writeText(output.value);
		if(div !== null){
			div.remove();
			div = null;
		}
		generateToastMsg(`${output.value} copied`)
	 })
}

function generateHash() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
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