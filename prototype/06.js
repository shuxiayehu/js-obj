function Constr() {

}

let x = new Constr();

let y = new x.constructor();

console.log(y instanceof Constr);
