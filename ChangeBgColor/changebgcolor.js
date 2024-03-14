// // const squares = document.querySelectorAll('div');

// // const observer = new IntersectionObserver((e) => {
// // 	e.forEach((square) =>{
// // 		if(square.isIntersecting){
// // 			square.target.classList.add('visible');
// // 		 }else{
// // 			square.target.classList.remove('visible');
// // 		 }
// // 	})
// // });

// // squares.forEach(square => observer.observe(square));

// const elem = document.querySelectorAll("li");
// elem.forEach((e) => {
// 	e.addEventListener("click", () => {
// 	 document.querySelector(".active")?.classList.remove("active") ;
// 	  e.classList.add("active");
// 	})
// })
window.onload = () => {
	main();
}

function main(){
	const root = document.getElementById('container');
	const btn = document.getElementById('btn');

	btn.addEventListener('click', function() {
	   const bgColor = generateRgb();
	   root.style.backgroundColor = bgColor;
	})
}

function generateRgb(){
  const red = 	Math.floor(Math.random()*255);
  const green = 	Math.floor(Math.random()*255);
  const blue = 	Math.floor(Math.random()*255);

  return `rgb(${red},${green},${blue})`
}