const PAGE_WIDTH = window.innerWidth;
const PAGE_HEIGHT = window.innerHeight;
const DEFAULT_DROP_AMOUNT = 100;

function makeItRain(num) {
	for(let i = 0 ; i < num ; i ++) {
		let randomX = Math.floor(Math.random() * (PAGE_WIDTH));
		let randomY = Math.floor(Math.random() * (PAGE_HEIGHT));
		let dropSpeed = Math.floor(Math.random() * (25 - 5)) + 5//30;
		let dropWidth = Math.floor(Math.random() * (dropSpeed / 10 - 1)) + 1;
		let dropHeight = Math.floor(Math.random() * (dropSpeed * 2 - 3)) + 3;
		let drop = new Drop(randomX, randomY, dropSpeed, dropWidth, dropHeight);

		drop.show();
		drop.fall();
	}
}

makeItRain(DEFAULT_DROP_AMOUNT);
