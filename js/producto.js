class Producto {
    constructor(codigo, nombre, cantidad, costo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
        this.next = null;
    }

    info() {
        return `┬ Código: ${this.codigo}
├─ Nombre: ${this.nombre}
├── Cantidad: ${this.cantidad} 
└─── Costo: $${this.costo}\n`;
    }
}