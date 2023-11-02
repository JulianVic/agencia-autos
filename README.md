# Agencia autos

## Descripción
Registrar clientes, vendedores, vehículos, pagos, ventas, devoluciones de un concesionario

## Métodos

### Cliente

#### Crear cliente
Para poder crear un cliente tiene que hacer un POST a la ruta `http://localhost:4000/api/clientes/` y debéra poner un JSON como body.
Ejemplo:
```json
{
  "nombre": "Juan",
  "apellidos": "Pérez"
}
```

#### Actualizar cliente
Para poder actualizar un cliente tiene que hacer un PUT a la ruta `http://localhost:4000/api/clientes/:id` siendo `:id` una ID de algún cliente, y los nuevos datos los mandara en el body en formato JSON.
Ejemplo:
```json
{
  "nombre": "Juan",
  "apellidos": "Pérez"
}
```

#### Obtener cliente
Puede obtener a todos los clientes si hace un GET a la ruta `http://localhost:4000/api/clientes/` y puede hacer una consulta específica y más detallada del cliente haciendo un GET a la ruta `http://localhost:4000/api/clientes/:id`, siendo `:id` la ID del cliente.

#### Eliminar cliente
Puede eliminar un cliente haciendo un DELETE a la ruta `http://localhost:4000/api/clientes/:id` siendo `:id` una ID de algún cliente.

### Vendedor

**Aplica exactamente la misma lógica que para Cliente, solo que ahora la ruta es: `http://localhost:4000/api/vendedores/x` significando x una subruta como lo puede ser una ID**

#### Crear vendedor
Para poder crear un vendedor tiene que hacer un POST a la ruta `http://localhost:4000/api/vendedores/` y debéra poner un JSON como body.
Ejemplo:
```json
{
  "nombre": "Juan",
  "apellidos": "Pérez"
}
```

#### Actualizar vendedor
Para poder actualizar un vendedor tiene que hacer un PUT a la ruta `http://localhost:4000/api/vendedores/:id` siendo `:id` una ID de algún vendedor, y los nuevos datos los mandara en el body en formato JSON.
Ejemplo:
```json
{
  "nombre": "Juan",
  "apellidos": "Pérez"
}
```

#### Obtener vendedor
Puede obtener a todos los vendedores si hace un GET a la ruta `http://localhost:4000/api/vendedores/` y puede hacer una consulta específica y más detallada del vendedor haciendo un GET a la ruta `http://localhost:4000/api/vendedores/:id`, siendo `:id` la ID del vendedor.

#### Eliminar vendedor
Puede eliminar un vendedor haciendo un DELETE a la ruta `http://localhost:4000/api/vendedores/:id` siendo `:id` una ID de algún vendedor.

### Vehículo

#### Registrar vehículo
Puede hacerlo haciendo un POST a la ruta `http://localhost:4000/api/vehiculos/` como los siguientes datos de ejemplo:
Ejemplo:
```json
{
  "modelo": "Sedán",
  "anio": 2015,
  "color": "Rojo",
  "precio": 200000,
  "estado": "Nuevo"
}
```

### Obtener vehículos
Puede leer todos suus vehículos registrados haciendo un GET en la siguiente ruta: `http://localhost:4000/api/vehiculos/`, no hay consultas específicas.

### Actualizar vehículo
Puede actualizar la información de un vehículo apartir haciendo un PUT a la siguiente ruta: `http://localhost:4000/api/vehiculos/:id` siendo `:id` la ID de un vehículo y manda la nueva información en el body en formato JSON.
Ejemplo:
```json
{
  "modelo": "Coupés",
  "anio": 2020,
  "color": "Rojo",
  "precio": 200000,
  "estado": "Nuevo"
}
```

### Eliminar vehículo
Puede eliminar un vehículo apartir de su ID con un DELETE a `http://localhost:4000/api/vehiculos/:id` siendo `:id` la ID del vehículo.

## Ventas

### Crear venta
Para hacer una venta tiene que poner el ID del vehículo, del cliente y del vendedor en el body como JSON como se muestra en el ejemplo de abajo, debe hacer un POST a la siguiente ruta: `http://localhost:4000/api/ventas/`.
Ejemplo:
```json
{
  "vehiculoID": "6542810691a3a16d02700d1d",
  "vendedorID": "654328f06627ed982a3b6538",
  "clienteID": "65432b18c988718a1d8c31c5"
}
```

### Obtener ventas o venta
Puede hacer consultas específicas a las ventas como con los Clientes solo que a la ruta `http://localhost:4000/api/ventas/:id` siendo `:id` la ID de una venta si quiere ser específico y obtener masinformación.

### Registrar pago
Solo se registra un pago, una única vez a la ruta `http://localhost:4000/api/ventas/:id` con el método PUT, siendo `:id` la ID de una venta.

## Devoluciones

### Hacer devolución
Para hacer una devolución tiene que hacer un POST a la ruta `http://localhost:4000/api/devoluciones/:id`, siendo `:id` la ID de la venta 

### Obtener devoluciones
Para obtener las devoluciones tiene que hacer un GET a la ruta `http://localhost:4000/api/devoluciones/` y puede hacer consultas específicas a la ruta `http://localhost:4000/api/devoluciones/:id` siendo `:id` la ID de una devolución.