class Player {
	constructor() {
		this.positionY = 0;
		this.positionX = 0;
		this.width = 10;
		this.heigth = 10;
		this.updateUI();
	}
	updateUI() {
		const playerElm = document.getElementById("player");
		playerElm.style.left = this.positionX + "vw";
		playerElm.style.bottom = this.positionY + "vh";
		playerElm.style.width = this.width + "vw";
		playerElm.style.height = this.heigth + "vh";
	}
	moveLeft() {
		//Verificamos que el player no se vaya a siberia cuando presionemos las Arrow
		if (this.positionX > 0) {
			this.positionX--;
			this.updateUI();
		}
	}
	moveRigth() {
		//Verificamos que el player no se vaya a siberia cuando presionemos las Arrow
		if (this.positionX < 100 - this.width) {
			this.positionX++;
			this.updateUI();
		}
	}
}

const player = new Player(); //Aqui  instanciamos la clase

player.moveLeft(); //metodo de la clase

document.addEventListener("keydown", (event) => {
	if (event.code === "ArrowLeft") {
		player.moveLeft();
	} else if (event.code === "ArrowRight") {
		player.moveRigth();
	}
});
