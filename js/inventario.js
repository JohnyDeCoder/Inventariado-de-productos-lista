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
        if (this.primero != null) {
            if (this.primero.codigo === codigo) {
                this.primero = this.primero.next;
                return true;
            }
            else {
                let producto = this.primero;

                while (producto.next != null) {
                    if (producto.next.codigo === codigo) {
                        let siguienteDelEliminado = producto.next.next;
                        producto.next = siguienteDelEliminado;
                        return true;
                    }
                    else {
                        producto = producto.next;
                    }
                }
            }
        }

        return false;
    }

    insertar(posicion, producto) {
        if (posicion <= 1) {
            if (this.primero == null) {
                this.primero = producto;
                return true;
            }
            else {
                producto.next = this.primero;
                this.primero = producto;
                return true;
            }
        }
        else {
            let temp = this.primero, contador = 1;

            while (temp.next != null) {
                if ((contador + 1) == posicion) {
                    producto.next = temp.next;
                    temp.next = producto;
                    return true;
                }
                else {
                    temp = temp.next;
                    contador += 1;
                }
            }

            return false;
        }
    }

    buscar(codigo) {
        if (this.primero != null) {
            if (this.primero.codigo === codigo) {
                return this.primero;
            }
            else {
                let producto = this.primero;

                while (producto.next != null) {
                    if (producto.next.codigo === codigo) {
                        return producto.next;
                    }
                    else {
                        producto = producto.next;
                    }
                }
            }
        }

        return null;
    }

    listado() {
        if (this.primero != null) {
            return listarRec(this.primero);
        }
        return "NO HAY PRODUCTOS";

        function listarRec(producto) {
            if (producto.next == null) {
                return `${producto.info()}`;
            }
            else {
                return `${producto.info()}\n${listarRec(producto.next)}`;
            }
        }
    }

    listadoInverso() {
        if (this.primero != null) {
            return listarInversoRec(this.primero);
        }
        return "NO HAY PRODUCTOS";

        function listarInversoRec(producto) {
            if (producto.next == null) {
                return `${producto.info()}`;
            }
            else {
                return `${listarInversoRec(producto.next)}\n${producto.info()}`;
            }
        }
    }
}
