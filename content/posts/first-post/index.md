---
title: "Migración a microservicios: Consejos de expertos"
cover: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
category: "microservicios"
tags:
    - microservicios

date: "2017/12/12"
---

[DavidDawson]:https://www.linkedin.com/in/davidantonydawson/
[DanielBenZvi]:https://www.linkedin.com/in/daniel-ben-zvi-a615049/
[Similarweb]:https://www.similarweb.com/
[AviCavale]:https://www.linkedin.com/in/avinc/
[Shippable]:https://www.shippable.com/
[BrujoBenavides]:https://www.linkedin.com/in/elbrujohalcon/
[Inaka]:http://inaka.net/
[ViktorTusa]:https://www.linkedin.com/in/viktor-tusa/
[LogMeIn]:https://www.logmein.com/hu
[JoseAlvarez]:https://www.linkedin.com/in/jmalvarezrey/
[StyleSage]:https://stylesage.co/
[AndrasFincza]:https://www.linkedin.com/in/andrasfincza/
[Emarsys]:https://www.emarsys.com/en-uk/
[StevenMcCord]:https://www.linkedin.com/in/stevenamccord/
[ICXMedia]:https://icxmedia.com/
[RobertAist]:https://www.linkedin.com/in/robert-aistleitner-ba22b575/
[Usersnap]:https://usersnap.com/
[Csaba]:https://www.linkedin.com/in/csabakassai/
[Doctusoft]:https://doctusoft.com/
[Varun]:https://www.linkedin.com/in/vvillait/
[Industry]:https://www.industry.co/
[Greg]:https://www.linkedin.com/in/greg-neiheisel/
[Astronomer]:https://www.astronomer.io/


Hoy he leído [un artículo de Tamás Török](http://codingsans.com/blog/microservice-architecture-best-practices) sobre microservicios basado en las opiniones de 13 líderes tecnológicos de 5 países diferentes que me gustaría comentar con vosotros ya que últimamente está en boca de todo el mundo, y como el artículo es largo, os he hecho un resumen:

---

## Entender el porqué del cambio a microservicios

> Yo les hago entender (a los clientes que asesora) que **una arquitectura de microservicios**, si se hace bien, **es mas cara y más difícil de construir que un sistema monolítico**. Los microservicios introducen el concepto de red en tu modelo de datos por lo que estos pueden ser particionados arbitrariamente en cualquier momento, pudiendose perder. Te estás exponiendo a la computación distribuida <footer><cite>[David Dawson][DavidDawson], Arquitecto de sistemas</footer></cite>


## Definir claramente qué es un microservicio
 
> Yo no pasaría de un monolito hacia cientos de servicios, sino hacia servicios más grandes que correspondan con los equipos de desarrollo y las áreas de negocio <footer><cite>[Daniel Ben-Zvi][DanielBenZvi], VP of R&D at [SimilarWeb][Similarweb]</footer></cite>

Hay que buscar el equilibrio entre servicio, microservicio y función porque se puede llegar al punto de fragmentar tan poco nuestra aplicación que se quede igual que un monolito o fragmentarla en exceso generando un problema con la administración de los mismos.

> Determinamos qué es un microservicio mirando qué piezas de código, al cambiarlas, provocan un número exponencial de casos de test... nuestro objetivo era reducir la cantidad de pruebas cada vez que hacíamos un cambio... esto es diferente a que alguien diga "quiero que Facturar sea un microservicio"<footer><cite>[Avi Cavale][AviCavale], Co-founder & CEO at [Shippable][Shippable]</cite></footer>

## Ventajas y desventajas de la arquitectura de microservicios

### Ventajas

* **Escalabilidad**: <blocquote>puedo ejecutar contenedores con la configuración que quiera teniendo total portabilidad de mi aplicación <footer><cite>[Steven McCord][StevenMcCord], Founder and CTO at [ICX Media][ICXMedia]</cite></footer><blocquote> 

* **Fácil mantenimiento**: Equipos diferentes algo más independientes  
* Desplegar y configurar sin **sin molestar a otros equipos**
* **Aislamiento de problemas** y por consiguiente más sencillos de detectar
* **Adopción más sencilla** para nuevos desarrolladores por tratarse de piezas más simples
* **Reparto de responsabilidades**. Un equipo, un microservicio
* **Conocimiento más profundo** de la pieza por parte del equipo responsable del microservicio
* **Código más mantenible** al estar mas encapsulado
* Más **sencillo de evolucionar** siempre y cuando su ámbito e interfaz estén bien definidos

### Desventajas

* **Despliegue e interoperabilidad**
* **Dependencias** entre servicios
* **Test de integración** más complejos
* Servicios **demasiado cohesionados** si no se piensa bien la arquitectura desde el principio
* Gran esfuerzo en **redes y comunicaciones** (gran foco de errores)
* **Difícil de monitorizar** el sistema completo
* **Complejidad** añadida para entender el conjunto del sistema

  > Si tus procesos de ingeniería no son muy buenos, acabarán con un montón de cosas desperdigadas que no se usarán<footer><cite>[Avi Cavale][AviCavale], Co-founder & CEO at [Shippable][Shippable]</cite></footer>

  > La complejidad de tu sistema crece significativamente. La ingeniería y estandarización es ahor un aspecto crítico <footer><cite>[Daniel Ben-Zvi][DanielBenZvi], VP of R&D at [SimilarWeb][SimilarWeb]</cite></footer>

* Trazar (**logs**) de forma centralizada es más complejo

## Los grandes retos y soluciones al migrar a microservicios

* Cambiar tu sistema de golpe

  > Pasar del monolito a microservicios no se puede hacer de golpe <footer><cite>[Brujo Benavides][BrujoBenavides], Ex-CTO at [Inaka][Inaka]</cite></footer>

  > Para una empresa sin experiencia en microservicios, hasta un proyecto nuevo puede ser más difícil de lo que se piensa <footer><cite>[Viktor Tusa][ViktorTusa], DevOps Engineer at [LogMeIn][LogMeIn]</cite></footer>

  **Posible solución:** 
  > los desarrollos nuevos se desarrollan como microservicios y poco a poco van extrayendo partes del servidor original (monolito) <footer><cite>[Brujo Benavides][BrujoBenavides] dice:</cite></footer>

* Dividir el sistema

  > Se necesita definir las interacciones y los procesos entre las piezas <footer><cite>[Jose Alvarez][JoseAlvarez], Senior Developer at [StyleSage][StyleSage]</cite></footer>
  
  **Posible solución:**
   
   > la única manera de dividir en microservicios un monolito es analizando primero el monolito y buscando **la parte que más duele** (la más problemática) <footer><cite>[Andras Fincza][AndrasFincza], VP of Engineering at [Emarsys][Emarsys]</cite></footer>
   
   Monitorizando todas las piezas del sistema podrás ver en todo momento si el sistema está fallando mientras se divide.

* Formar nuevos equipos

  > La formación de nuevos equipos es probablemente la parte más dura <footer><cite>[Steven McCord][StevenMcCord], Founder and CTO at [ICX Media][ICXMedia]</cite></footer>
  
  Al no ser una decisión técnica sino organizativa, y hay que convencer a los gestores

  **Posible solución:**
  Convertir una pieza no crítica en microservicio y utilizarla como ejemplo hacia los gestores

* El equipo

  > El mayor reto es para el equipo porque requiere una nueva mentalidad <footer><cite>[Avi Cavale][AviCavale], Co-founder & CEO at [Shippable][Shippable]</cite></footer>

  **Posible solución**
  Comenzar con un pequeño microservicio para que el equipo vaya tomando contacto

## Errores a evitar

> Evita pasar todo el sistema a microservicios a la vez <footer><cite>[Andras Fincza][AndrasFincza], VP of Engineering at [Emarsys][Emarsys]</cite></footer>

> El mayor error es no haber analizado las implicaciones de un cambio de arquitectura <footer><cite>[Robert Aistleitner][RobertAist], VP of Engineering at [Usersnap][Usersnap]</cite></footer>

> En los microservicios el API es oro. Avanzar con un API que no soporte futuros cambios dará muchos dolores de cabeza <footer><cite>[Daniel Ben-Zvi]DanielBenZvi, VP of R&D at [SimilarWeb][SimilarWeb]</cite></footer>

> El manejo de datos es crucial. Es muy fácil meter la pata. La migración de datos tiene que hacerse paso a paso <footer><cite>[Andras Fincza][AndrasFincza], VP of Engineering at [Emarsys][Emarsys]</cite></footer>

> [Compartir][Industry] datos entre microservicios es un NO ROTUNDO... experimentarás problemas de consistencia y ambigüedades de acceso <footer><cite>[Daniel Ben-Zvi][DanielBenZvi] & [Varun Villait][Varun]</cite></footer>

> Partir una aplicación en muchas pequeñas piezas o pasar a microservicios algo que no debe serlo sólo porque está de moda <footer><cite>[Csaba Kassai][Csaba], Lead Developer at [Doctusoft][Doctusoft]</cite></footer>

## Buenas prácticas de la migración a microservicios

* Adopta una sistema distribuido de computación en torno a contenerización, arquitecturas de eventos, comunicaciones http, service meshes y circuit breakers
* Equipos autónomos bien comunicados para evitar duplicidades.
* La distribución en los datos es el mayor impacto en el paso a microservicios.

## ¿Qué tecnologías debemos elegir?

> Casi todos los problemas se pueden tratar con cualquier tecnología... si la adoptas de forma iterativa, tendrás tiempo de verla en acción <footer><cite>[Andras Fincza][AndrasFincza], VP of Engineering at [Emarsys][Emarsys]</cite></footer>

> La mayoría de lenguajes actuales (Python, Java, C#, Node/Javascript) son igualmente rápidos y escalables <footer><cite>[Viktor Tusa][ViktorTusa], DevOps Engineer at [LogMeIn][LogMeIn]</cite></footer>

> Si los costes de ejecución no importan, seleccionar una tecnología está sobrevalorado <footer><cite>[Andras Fincza][AndrasFincza], VP of Engineering at [Emarsys][Emarsys]</cite></footer>

> si el proyecto es nuevo, utilizo el lenguage que dominen mis desarrolladores <footer><cite>[Viktor Tusa][ViktorTusa], DevOps Engineer at [LogMeIn][LogMeIn]</cite></footer>

> Me da igual (qué tecnología) mientras tengan una interfaz definida <footer><cite>[Steven McCord][StevenMcCord], Founder and CTO at [ICX Media][ICXMedia]</cite></footer>

> No recomendaría mezclar muchos lenguajes porque la contratación se hace más complicada <footer><cite>[Robert Aistleitner][RobertAist], VP of Engineering at [Usersnap][Usersnap]</cite></footer>

> Si quieres usar muchos lenguajes tendrás que tener un equipo capaz de aprenderlos <footer><cite>[Steven McCord][StevenMcCord], Founder and CTO at ICX Media</cite></footer>

### Sugerencias

 > recomiendo servicios gestionados (en la nube) como App Engine en Google Cloud Platform... cuando elijo un lenguage/tecnología/framework elijo el apropiado para cada caso de uso <footer><cite>[Csaba Kassai][Csaba], Lead Developer at [Doctusoft][Doctusoft]</cite></footer>

[Brujo Benavides][BrujoBenavides] utiliza:

  * Scrapy para web crawling
  * Celery + RabbitMQ para comunicar microservicios
  * NLTK + Tensorflow (y algún otro) para Machine Learning
  * Servicios AWS

## El proceso de selección de la tecnología

> Una de las cosas más importantes es lo que conocen tus desarrolladores y lo grande que sea el soporte (herramientas, comunidad ...) tras el lenguage/tecnología <footer><cite>[Csaba Kassai][Csaba], Lead Developer at [Doctusoft][Doctusoft]</cite></footer>

> Usa tecnologías que tengan detrás mucho soporte (recursos y comunidad) <footer><cite>[Varun Villait][Varun], CEO at [Industry][Industry]</cite></footer>

> Otro factor es la cantidad de librerías que existan en cierto lenguage que permitan acelerar el proyecto <footer><cite>[Greg Neiheisel][Greg], Co-Founder & CTO at [Astronomer][Astronomer]</cite></footer>

**En [Emarsys][Emarsys]** el equipo discute los pros y contras de la tecnología a elegir... se crea un piloto con distintas tecnologías para experimentar sobre sus límites.

**En [Similarweb][Similarweb]** como compañía de big data y analítica... NodeJS no escala en el procesamiento intensivo de datos.
Determinan qué tecnología utilizar buscando el equilibrio entre las necesidades técnicas y organizativas.
Prefieren contribuir y utilizar software open source a reinventar la rueda.

**[David Dawson][DavidDawson]** sugiere para seleccionar una tecnología:
1. Desde un punto de vista de arquitectura de datos, necesitas que los datos se puedan sincronizar de forma consistente entre los servicios en toda la red. Aquí encajan Kafka, Spring Data Flow, Akka etc...

2. Si tienes un flujo de datos con mucha programación reactiva y tienes desarrolladores Java, tiene sentido elegir Spring, Spring Cloud Data Flow y Kafka, y probablemente desplegar en un tipo Cloud Foundry

Si tienes muchas transformaciones de datos, usa Spark o Kafka Streams. Si tienes desarrolladores Javascript, puedes adoptar algún lenguage funcional (ClojureScript etc...) y también utilizando alguna integración reactiva parecida como Kafka.

- No te estreses en elegir la tecnología perfecta. Hazlo de forma incremental y experimental.
- Cada arquitectura de microservicios es única. La tecnología tiene que alinearse con las necesidades del sistema.
- Muchas tecnologías diferentes hacen la contratación de desarrolladores más complicada.

---

Si queréis saber mi opinión sobre este artículo o comentar algo sobre este resumen o sobre el [artículo original](http://codingsans.com/blog/microservice-architecture-best-practices) podéis hacerlo más abajo en los comentarios (tened en cuenta que, aunque no la lea nadie, esta página es púbica) o esperar a que nos veamos en persona.

Keep coding.