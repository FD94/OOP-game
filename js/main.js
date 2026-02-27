class Player {
	constructor() {
		this.width = 10;
		this.height = 10;
		this.positionX = 50;
		this.positionY = 0;

		this.updateUI();
	}
	updateUI() {
		const playerElm = document.getElementById("player");
		playerElm.style.left = this.positionX + "vw";
		playerElm.style.bottom = this.positionY + "vh";
		playerElm.style.width = this.width + "vw";
		playerElm.style.height = this.height + "vh";
	}
	moveLeft() {
		if (this.positionX > 0) {
			this.positionX--;
			this.updateUI();
		}
	}
	moveRight() {
		if (this.positionX < 100 - this.width) {
			this.positionX++;
			this.updateUI();
		}
	}
}

class Obstacle {
	constructor() {
		this.width = 10;
		this.height = 10;
		this.positionX = Math.floor(Math.random() * (100 - this.width + 1)); // generate a random number between 0 and (100 - this.width)
		this.positionY = 100;
		this.obstacleElm = null;

		this.createDomElement();
		this.updateUI();
	}
	createDomElement() {
		// step1: create the element with document.createElement()
		this.obstacleElm = document.createElement("div");

		// step2: add content or modify
		this.obstacleElm.className = "obstacle";

		//step3: append to the dom: `parentElm.appendChild()`
		const parentElm = document.getElementById("board");
		parentElm.appendChild(this.obstacleElm);
	}
	updateUI() {
		this.obstacleElm.style.left = this.positionX + "vw";
		this.obstacleElm.style.bottom = this.positionY + "vh";
		this.obstacleElm.style.width = this.width + "vw";
		this.obstacleElm.style.height = this.height + "vh";
	}
	moveDown() {
		this.positionY--;
		this.updateUI();
	}
}

const player = new Player(); //Aqui  instanciamos la clase Player

player.moveLeft(); //metodo de la clase

document.addEventListener("keydown", (event) => {
	if (event.code === "ArrowLeft") {
		player.moveLeft();
	} else if (event.code === "ArrowRight") {
		player.moveRight();
	}
});

const obstacle1 = new Obstacle(); //Aqui  instanciamos la clase Obstacle

const obstacleArr = []; //almacenamos las instancias de la clase Obstacle

// generate new obstacles
let timer2 = setInterval(() => {
	const newObstacle = new Obstacle();
	obstacleArr.push(newObstacle);
}, 4000);

clearInterval(timer2);

// move obstacles

let timer1 = setInterval(() => {
	obstacleArr.forEach(function (obstacleInstance, i, arr) {
		//move
		obstacleInstance.moveDown();
		//detect collision
		if (
			player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
			player.positionX + player.width > obstacleInstance.positionX &&
			player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
			player.positionY + player.height > obstacleInstance.positionY
		) {
			console.log("game over");
			location.href = "gameover.html";
		}
	});
}, 30);

clearInterval(timer1);
