# v202007

## Antecedentes

Recientemente, aplicaciones móviles de mensajería como WhatsApp, han abilitado un canal de comunicación entre negocios y consumidores que presenta un catálogo de nuevas oportunidades para desarrollar herramientas que agilicen esta nueva dinámica de las operaciones de compra-venta.

## Descripción del problema

Esta actualización en la forma en la que los consumidores solicitan productos y servicios a través de mensajería móvil como WhatsApp Business, presenta nuevos retos para los operadores de negocios que aún no han sido resueltos por aplicaciones web o móviles.

Por ejemplo:

### Negocio de Hamburguesas

María opera un negocio de hamburguesas en una buena zona de la capital. Actualmente envía su catálogo de hamburguesas en formato PDF o JPG a los clientes que lo solicitan. María tiene en la galería de su celular el catálogo y a veces recuerda enviar el link al catálogo que WhatsApp Business ofrece dentro de la aplicación.

Cuando el cliente ha elegido lo que desea ordenar, María envía una respuesta pre-determinada parecida a esto:

```
Gracias por comprar nuestras hamburguesas.
Por favor, indica la siguiente información para completar tu orden:

- Nombre de quien recibe
- Productos que ordena
- NIT para factura
- Dirección de entrega
- Medio de pago
```

En algunas ocasiones, a pesar de que este cliente ya había solicitado hamburguesas con anterioridad, María atiende tantas órdenes a través de 1 sólo dispositivo, que se le hace imposible mantener un registro de clientes frecuentes, eliminando así la atención personalizada que podría ofrecer.

Una vez que el cliente responde:

```
- Jorge Pérez
- 1 vegana, 2 papas fritas, 2 refrescos
- 123456 Corporación Sublime, SA
- 5a Av. 19-35, Zona 0
- Efectivo, contraentrega
```

María inicia el siguiente protocolo:

- Ingresa la orden a su cocina, a través del sistema con el que cuente
- Envía manualmente el total de la orden al cliente:

```
Hemos recibido tu orden.
El total es de Q259.00, a contra-entrega

Tu pedido llegará a tu puerta alrededor de las 12:30
Que disfrutes tu hamburguesa!
```

- Hace _forward_ de la información a un mensajero
- Está pendiente de que el pedido se entregue
- Envía la factura como screenshot

Falta mencionar los casos en donde el cliente exige su entrega a tiempo. O actualización de las órdenes por modificaciones previas a la entrega.

En ocasiones, María ha enviado órdenes incompletas o equivocadas.

## Descripción de la Solución

Así como María, cientos de otros operadores de negocios se encuentran en la misma situación, intentando adaptarse a la alta demanda de sus productos y servicios por servicios de mensajería, llegando a un límite de su eficiencia y control.

## Solucion

La herramienta seleccionada para la generacion de ordenes y pedidos sera la aplicacion de Whatsapp for Business, La Solucion verificara si el Numero de telefono del cliente si ya estiste en la base de datos o no, de existir solicitara la informacion del mismo al momento de confirmar la orden le solicitara los mismos.

# confirmacion de Orden

al momento de que el cliente confirmne una orden enviara un mensaje de confirmacion con su codigo de ordeny los datos realacionados a su pedido.

# Aplicaicon interna del cliente (Administrativa y de procesos)

# Confirmacion de Orden

Al momenbto de recibir una confirmacion de un cliente por la herramienta Whatsapp for Business la misma generara un entrada para el sistema de Ordenes recibidas la cual contara el tiempo desdes que se recibio la orden hasta que se despacho.

# Despacho de Orden.

Al momento de que la orden sea generada marcada para ser despachara le enviara un mensaje al mensajero para informarle que el pedido ya esta disponible para su entrega el tiempo empezara a contar desde que fue marcado como disponible hasta su entrega.

# Catalogo de productos

la misma manejara un catalogo de productos disponibles a la venta ya se por combo o individual a ser agregados a la orden.

# Catalogo de Clientes.

Informacion relacionada al cliente.

## Tecnologías

- NodeJs
- React
- GraphQl
- Apollo Server : se utilizara debido a la gran versatilidad que tiene de poder recibin gran numero de peticiones y poder redireccionarlos ya sea a un servicio REST API, un microservicio o una Base de Datos.
  -- Whatsapp for Business

  ![alt text](https://github.com/blindlp/v202007/blob/develop/tecnologia.jpg?raw=true)

## Infraestrucutra

Utilizaremos la capoa AWS free donde ofrece determinadas horas de prueba de servicios o 12 meses gratis dependiendo lo que llegue a suceder de primero, se escoje AWS por la facilidad que tiene se ofrecer

- AWS
- apollo-server-lambda: utilizar 1 Millon de transacciones en la capa gratis.
- Whatsapp Kubernetes en una EC2 utilizano la capa gratis.

![alt text](https://github.com/blindlp/v202007/blob/develop/infraestructura.jpg)

## Base De Datos

- Mongo Atlas: utilizar la capa gratis que ofrece actualmente este servicio en lo que maduramos el sistema
- AWS RDS 750 Horas en la capa gratis ya sea MySql, PostgreSQL, MariaDB, Oracle BYOL o SQL Server o DynameDB nos ofrece 25Gb en la capa gratis.

## Tiempo de entrega

tiempo de entrega 20 semanas

## Presupuesto

Presupuesto pendiente de definir segun tipo de Cloud a utlizar
