class Screen {  
    #width;
    #height;

    constructor(width, height){
        this.#width = width;
        this.#height = height;
    }
    get width(){
        return this.#width;
    }
    set width(value){
        this.#width = value;
    }
    get height(){
        return this.#height;
    }
    set height(value){
        this.#height = value;
    }


    diagonal() {          
        return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
    }

    dimensions(definition) {
        let dimensions = definition.split('x')
        this.width = parseInt(dimensions[0]);
        this.height = parseInt(dimensions[1]);
        console.log(this.height + "x" + this.width)
    }
}

//UITVOERING
let screen = new Screen(0, 0);
screen.dimensions('500x300');
screen.width = 400;
console.log(screen.diagonal()); // Should print 500
