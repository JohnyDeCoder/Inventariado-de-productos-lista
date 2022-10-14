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
        if (this.primero == null) {
            return "NO HAY PRODUCTOS";
        }
        else {
            return listarRec(this.primero);
        }

        function listarRec(producto) {
            if (producto.next == null) {
                return `${producto.info()}`;
            }
            else {
                return `${listarRec(producto.next)}\n${producto.info()}`;
            }
        }
    }
}
