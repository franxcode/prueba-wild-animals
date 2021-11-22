import Animal from "./animal.js";

class Leon extends Animal {
	static contadorLeon = 0;
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
		this._idLeon = ++Leon.contadorLeon;
	}
	get idLeon() {
		return this._idLeon;
	}
	Rugir() {
		console.log(`El ${this._nombre} hace este sonido ${this._sonido}`);
		const audio = document.createElement("audio");
		audio.setAttribute("src", `${this._sonido}`);
		audio.play();
	}
}
class Lobo extends Animal {
	static contadorLobo = 0;
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
		this._idLobo = ++Lobo.contadorLobo;
	}
	get idLobo() {
		return this._idLobo;
	}
	Aullar() {
		console.log(`El ${this._nombre} hace este sonido ${this._sonido}`);
		const audio = document.createElement("audio");
		audio.setAttribute("src", `${this._sonido}`);
		audio.play();
	}
}
class Oso extends Animal {
	static contadorOso = 0;
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
		this._idOso = ++Oso.contadorOso;
	}
	get idOso() {
		return this._idOso;
	}
	Grunir() {
		console.log(`El ${this._nombre} hace este sonido ${this._sonido}`);
		const audio = document.createElement("audio");
		audio.setAttribute("src", `${this._sonido}`);
		audio.play();
	}
}
class Serpiente extends Animal {
	static contadorSerpiente = 0;
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
		this._idSerpiente = ++Serpiente.contadorSerpiente;
	}
	get idSerpiente() {
		return this._idSerpiente;
	}
	Sisear() {
		console.log(`La ${this._nombre} hace este sonido ${this._sonido}`);
		const audio = document.createElement("audio");
		audio.setAttribute("src", `${this._sonido}`);
		audio.play();
	}
}
class Aguila extends Animal {
	static contadorAguila = 0;
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
		this._idAguila = ++Aguila.contadorAguila;
	}
	get idAguila() {
		return this._idAguila;
	}
	Chillar() {
		console.log(`El ${this._nombre} hace este sonido ${this._sonido}`);
		const audio = document.createElement("audio");
		audio.setAttribute("src", `${this._sonido}`);
		audio.play();
	}
}

export { Leon, Lobo, Oso, Serpiente, Aguila };
