"use strict";

/*
Створити "абстрактний" клас Figure3D з властивістю name (рядок не порожній)
і методом обчислити об'єм.

Створити класи нащадки: сфера, куб, циліндр.
Обов'яково прописати сеттери та геттери для властивостей! 
Не забувати про виброс виключень.

Використовувати конструкцію try/catch
Створити по одному екземпляру кожного класу. 

Створити функцію showVolume3DFigure, яка приймає об'єкт і повертає рядок виду "[назва фигури] has volume: [значення об'єму].
*/


function showVolume3DFigure(figure){
  if(figure instanceof Figure3D){
    console.log(figure.name, "has volume = ", figure.getVolume())
    return;
  }
  throw new TypeError('instance must be extends Figure')
}

class Figure3D {
    constructor(name) {
        if (this.constructor === Figure3D) {
            throw new Error("Not create instance from Figure!");
        }
        this.name = name;
    }
    getVolume() {}
}

// V(кулі) = 4 · π · R 3
class Sphere extends Figure3D {
    constructor(r) {
        super("sphere");
        this.r = r;
    }

    set r(value) {
        if (typeof value !== "number") {
            throw new TypeError("radius must be number");
        }
        if (value <= 0) {
            throw new RangeError("radius must be positive");
        }
        this._r = value;
    }

    get r() {
        return this._r;
    }

    getVolume() {
        return (4 * Math.PI * Math.pow(this._r, 3)) / 3;
    }
}

//   V = а3.
class Cube extends Figure3D {
    constructor(a) {
        super("cube");
        this.a = a;
    }

    set a(value) {
        if (typeof value !== "number") {
            throw new TypeError("side must be number");
        }
        if (value <= 0) {
            throw new RangeError("side must be positive");
        }
        this._a = value;
    }

    get a() {
        return this._a;
    }
    getVolume() {
        // return this._a ** 3;
        return Math.pow(this._a, 3);
    }
}

// Vциліндра= π*r2*h
class Cylinder extends Figure3D {
    constructor(h, r) {
        super("cylinder");
        this.h = h;
        this.r = r;
    }

    set h(value) {
        if (typeof value !== "number") {
            throw new TypeError("side must be number");
        }
        if (value <= 0) {
            throw new RangeError("side must be positive");
        }
        this._h = value;
    }

    get h() {
        return this._h;
    }

    set r(value) {
        if (typeof value !== "number") {
            throw new TypeError("side must be number");
        }
        if (value <= 0) {
            throw new RangeError("side must be positive");
        }
        this._r = value;
    }

    get r() {
        return this._r;
    }
    getVolume() {
        return Math.PI * Math.pow(this._r, 2) * this._h;
    }
}

try {
    const figure1 = new Sphere(3);
    showVolume3DFigure(figure1)
} catch (error) {
    console.log(error);
}

try {
    const figure2 = new Cube(3);
    showVolume3DFigure(figure2)
} catch (error) {
    console.log(error);
}

try {
    const figure3 = new Cylinder(3, 4);
    showVolume3DFigure(figure3)
} catch (error) {
    console.log(error);
}
