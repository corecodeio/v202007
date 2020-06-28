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

En este punto, donde las capacidades humanas se ven limitadas, es oportuno pensar en incluir nuevas tecnologías, que puedan adaptarse y personalizarse.

El objetivo es brindar a María y a los cientos de operadores una plataforma que pueda adaptarse a las necesidades crecientes de su negocio, en donde la configuración y personalización no sean tediosas. La plataforma tiene como objetivo adaptarse a cualquier negocio que la implemente.

La plataforma debe proveer a María la opción de crear, editar y personalizar formularios para la realización de pedidos. Los formularios brindan más seguridad y son menos propensos a errores. En ellos se puede incluir la cantidad de productos que se desean, la dirección de entrega, los métodos de pago disponibles, etc... 
Por último la opción de crear formularios personalizados le permite a María marcar campos como requeridos, confirmación, etc... Haciendo que las ordenes cada vez sean menos propensas a resultar incompletas.

La plataforma debe contar con un chat para brindar atención personalizada. Esto puede resultar en una tarea tediosa para María, pero gracias a herramientas como el NLP esto ya no es un problema.

La plataforma debe poder permitir contestar a los clientes de forma automática, agradable y natural. En base a las respuestas que los clientes puedan dar se les debe contestar y llevar a cabo acciones pertinentes, tales como:
 - Consultar existencias ,promociones y restricciones. 
 - Verificar el estado de su orden.
 - Horarios de atención.
 - Ubicaciones físicas.
María debe configurar algunos detalles especificos para que se pueda responder a los usuarios.


## Tecnologías

- [Firebase]()
- [Google Cloud]()
- [DialogFlow]()
- [React Native]()
- [React]()

## Tiempo de entrega

 Se estima un tiempo aproximado de un mes y medio.

## Presupuesto

...
