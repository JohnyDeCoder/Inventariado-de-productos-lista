class Inventario {
    constructor() {
        this.primero = null;
    }

    agregar(producto) {
        if (this.primero == null) {
            this.primero = producto;
        }
        else {
            let aux = this.primero;

            while (aux.next != null) {
                aux = aux.next;
            }
            aux.next = producto;
        }
    }

    eliminar(codigo) {

    }

    buscar(codigo) {

    }

    listado() {

    }

    listadoInverso() {

    }
}
