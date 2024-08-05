var first = Number(prompt("Ingrese el primer número"));
first = this.isNum(first);
var secund = Number(prompt("Ingrese el segundo número"));
secund = this.isNum(secund);
first == secund ? this.msg(1) : first > secund ? this.msg(2) : this.msg(3);

function isNum(num) {
    while (!Number.isInteger(num)) {
        num = Number(prompt("Reingrese el número"));
    }
    return num;
}

function msg(option) {
    switch (option) {
        case 1:
            alert("El 1er número: " + first + " es igual al 2do número: " + secund);
            break;
        case 2:
            alert("1er número: " + first + " es mayor que el 2do número: " + secund);
            break;
        case 3:
            alert("2do número: " + secund + " es mayor que el 1er número: " + first);
            break;
    }    
}