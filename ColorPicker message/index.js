window.onload = () => {
  main();
};

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
		navigator.clipboard.writeText(output.value)
	 })
}

function generateHash() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
