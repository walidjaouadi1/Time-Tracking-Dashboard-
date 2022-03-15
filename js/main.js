switcher = document.querySelectorAll(".boxes .reported .time p");
// console.log(switcher);
imgs = Array.from(document.querySelectorAll(".boxes .box"));
console.log(imgs);

switcher.forEach((li) => {
	li.addEventListener("click", removeActive);
	li.addEventListener("click", manage);
});

// remove all
function removeActive() {
	switcher.forEach((li) => {
		li.classList.remove("active");
		this.classList.add("active");
	});
}
// manage images
function manage() {
	imgs.forEach((img) => {
		img.style.display = "none";
	});
	document.querySelectorAll(this.dataset.cat).forEach((el) => {
		console.log(this.dataset.cat);
		el.style.display = "block";
	});
}
