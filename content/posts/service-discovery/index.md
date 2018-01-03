---
title: "Introducción a Microservicios: Descubrimiento de servicios"
cover: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
category: "microservicios"
tags:
    - microservicios
    - service discovery

date: "2018/01/03"
---

En este artículo quiero explicaros cómo surge y cómo abordar el problema del Descubrimiento de Servicios (Service Discovery), comenzando desde lo más básico, [buscando en Google la palabra _microservicios_](http://lmgtfy.com/?q=microservices).

Estos son los 3 primeros resultados cuando buscas en Google la palabra &quot;microservices&quot;:

- [Microservices - Martin Fowler](https://www.google.es/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://martinfowler.com/articles/microservices.html&amp;ved=0ahUKEwjC4KqGiJTYAhVLvhQKHcqLCcgQFggnMAA&amp;usg=AOvVaw3RVia8K9FC4rqyB8sJSpl5) [
](https://www.google.es/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://martinfowler.com/articles/microservices.html&amp;ved=0ahUKEwjC4KqGiJTYAhVLvhQKHcqLCcgQFggnMAA&amp;usg=AOvVaw3RVia8K9FC4rqyB8sJSpl5) [https://martinfowler.com › articles › micr...](https://www.google.es/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://martinfowler.com/articles/microservices.html&amp;ved=0ahUKEwjC4KqGiJTYAhVLvhQKHcqLCcgQFggnMAA&amp;usg=AOvVaw3RVia8K9FC4rqyB8sJSpl5)
- [Microservice](https://www.google.es/url?sa=t&amp;source=web&amp;rct=j&amp;url=http://microservices.io/patterns/microservices&amp;ved=0ahUKEwjC4KqGiJTYAhVLvhQKHcqLCcgQFgg4MAE&amp;usg=AOvVaw3yx4SGRgVqKldPK57WrTvt) [Architecture pattern - Microservices.io](https://www.google.es/url?sa=t&amp;source=web&amp;rct=j&amp;url=http://microservices.io/patterns/microservices&amp;ved=0ahUKEwjC4KqGiJTYAhVLvhQKHcqLCcgQFgg4MAE&amp;usg=AOvVaw3yx4SGRgVqKldPK57WrTvt) [
](https://www.google.es/url?sa=t&amp;source=web&amp;rct=j&amp;url=http://microservices.io/patterns/microservices&amp;ved=0ahUKEwjC4KqGiJTYAhVLvhQKHcqLCcgQFgg4MAE&amp;usg=AOvVaw3yx4SGRgVqKldPK57WrTvt) [io › patterns › microservices](https://www.google.es/url?sa=t&amp;source=web&amp;rct=j&amp;url=http://microservices.io/patterns/microservices&amp;ved=0ahUKEwjC4KqGiJTYAhVLvhQKHcqLCcgQFgg4MAE&amp;usg=AOvVaw3yx4SGRgVqKldPK57WrTvt)
- [Microservices - Wikipedia](https://www.google.es/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://en.wikipedia.org/wiki/Microservices&amp;ved=0ahUKEwjC4KqGiJTYAhVLvhQKHcqLCcgQFgg7MAI&amp;usg=AOvVaw1Kz060V6CyIO1TWxYRtdNj) [
](https://www.google.es/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://en.wikipedia.org/wiki/Microservices&amp;ved=0ahUKEwjC4KqGiJTYAhVLvhQKHcqLCcgQFgg7MAI&amp;usg=AOvVaw1Kz060V6CyIO1TWxYRtdNj) [https://en.wikipedia.org › wiki › Microse...](https://www.google.es/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://en.wikipedia.org/wiki/Microservices&amp;ved=0ahUKEwjC4KqGiJTYAhVLvhQKHcqLCcgQFgg7MAI&amp;usg=AOvVaw1Kz060V6CyIO1TWxYRtdNj)

En los tres, sus autores hacen un repaso general sobre las características generales de una arquitectura basada en Microservicios, sus ventajas sobre una aplicación monolítica, sus inconvenientes, su relación con la tecnología de contenedores, con la organización de los equipos de desarrollo y con DevOps y la importancia en este tipo de arquitectura de la monitorización, la tolerancia a errores y la consistencia de datos.

Aunque no es imprescinfible para comrender lo que dice este artículo, os recomiendo leer los tres artículos si no estáis familiarizados con términos esenciales en el ámbito de los microservicios como:

- Load balancer, API Gateway, Service discovery, Service registry, orchestrator, Pods,  horizontal scaling, fault tolerant, health check ...

Y tecnologías como:

- Docker, Kubernetes, Swarm, Mesos, ECS, Eureka, Consul, NGINX, HAProxy...

Tras informarnos un poco sobre Microservicios pronto nos damos cuenta que la diferencia más significativa entre una aplicación monolítica y una con una arquitectura de microservicios es la comunicación entre procesos, que pasa de hacerse mediante llamadas a métodos y funciones de un mismo lenguaje de programación en las monolíticas a hacerse con llamadas entre microservicios a través de protocolos de red estándar, principalmente HTTP y HTTPS.

![monolithic](https://image.slidesharecdn.com/microservicesforpaaswithspringandcf-141105112756-conversion-gate02/95/developing-microservices-for-paas-with-spring-and-cloud-foundry-15-638.jpg?cb=1415187045)

![microservices](https://image.slidesharecdn.com/microservicesforpaaswithspringandcf-141105112756-conversion-gate02/95/developing-microservices-for-paas-with-spring-and-cloud-foundry-17-638.jpg?cb=1415187045)

Esto significa que los microservicios, para comunicarse entre ellos, necesitan conocer la localización en la red de los demás servicios y como esta localización es variable por motivos como la escalabilidad (se crean y destruyen instancias/contenedores) o de portabilidad (cambio de servidor) **es necesario disponer de un sistema de balanceo de carga (load balancing) y descubrimiento de servicios (service discovery)** que permita la comunicación entre servicios situados en cualquier punto de la red.

### Desde el cliente (client-side) vs desde el servidor (server-side)

[Chris Richardson](https://www.nginx.com/people/chris-richardson/) en [su serie de artículos sobre Microservicios](https://www.nginx.com/blog/service-discovery-in-a-microservices-architecture/) distingue entre dos patrones principales de descubrimiento de servicios; **del lado del cliente (client-side)** y del **lado del servidor (server-side)**.

La gran diferencia entre estos dos patrones es que en el primero, el cliente tiene que consultar la fuente de información (Service Registry) que indica dónde se encuentra el servicio deseado y en el segundo patrón (server-side) se oculta al cliente toda esta lógica de descubrimiento.

![client-side vs server-side](https://www.globallogic.com/wp-content/uploads/2017/08/web-Figure-5.jpg)

**En este artículo nos centraremos en el descubrimiento del lado del servidor** en la que los clientes de los servicios puedan hacerlo igual que como lo harían en una aplicación monolítica sin microservicios.

### Cómo lo hacen otros proyectos

**Netflix** es la empresa que más se menciona al buscar información sobre microservicios por ser uno de los pioneros en adoptar esta arquitectura a gran escala y por haber publicado una serie de herramientas open source bajo el nombre de [Netflix OSS](https://netflix.github.io/) que facilitan el trabajo en este tipo de arquitecturas. Concretamente, para el registro y descubrimiento de servicios destacan **Eureka y Ribbon** que implementan una solución de descubrimiento del lado del cliente que por sus características ya hemos descartado más arriba, además como dice [Gang Chen](https://www.ibm.com/blogs/bluemix/author/gang-chen/) [en el blog de IBM Cloud](https://www.ibm.com/blogs/bluemix/2017/05/key-decisions-when-building-microservices-apps-in-java-with-kubernetes/) &quot;esto era así hace ya casi 5 años&quot;

Otra solución que se encuentra con poco que busquemos en Internet sobre descubrimiento de servicios es la que sincroniza un balanceador de carga como **HAProxy o NGINX** con un registro de servicios como **Consul, Etcd o Zookeeper** como explica [Chris Richardson](https://www.nginx.com/people/chris-richardson/) en el [blog de NGINX](https://www.nginx.com/blog/service-discovery-in-a-microservices-architecture/), y soluciones más optimizadas como [SmartStack](https://medium.com/airbnb-engineering/smartstack-service-discovery-in-the-cloud-4b8a080de619) desarrollada por Airbnb.

Si nos fijamos en la fecha de los artículos que utilizan este patrón son de hace 2 o 3 años y esto se debe a que estas soluciones están quedando en desuso porque **las plataformas de orquestación de contenedores tienen sus propios sistemas de descubrimiento y registro de servicios** que utilizan patrones basados en el anterior (balanceador de carga) con importantes mejoras y sobretodo eliminan gran parte de las tareas de mantenimiento de balanceadores y proxies en cada host de la red.

### La tendencia actual

Como tener una plataforma de orquestación de contenedores es esencial para la administración de una arquitectura de microservicios si queremos beneficiarnos de sus ventajas (escalabilidad, portabilidad, tolerancia a errores, marcha atrás...), lo mejor que podemos hacer es **dejar el problema de descubrimiento y registro de servicios a nuestro orquestador** y centrarnos en la elección del orquestador que más se ajuste a las necesidades de la aplicación.

Si queréis saber cómo es el descubrimiento de servicios en los diferentes orquestadores os recomiendo [la charla de Arun Grupta (Amazon)  en la OSCON 2017](https://www.safaribooksonline.com/library/view/oscon-2017-/9781491976227/video306837.html) en la que explica en 20 minutos como lo hacen Docker Swarm, Kubernetes, Mesosphere y ECS.

Y para terminar os dejo unos enlaces por si queréis profundizar un poco más en cómo tratan el problema de descubrimiento y registro de servicios las principales plataformas de orquestación, disfrutadlos!

- **Docker Swarm** :
  - (Ejemplo rápido) [SERVICE DISCOVERY WITH DOCKER SWARM](http://blog.scottlogic.com/2016/06/17/docker-swarm.html) de David Wybourn
  - (Ejemplo extendido) [Consuming services in a Docker Swarm Mode cluster](https://semaphoreci.com/community/tutorials/consuming-services-in-a-docker-swarm-mode-cluster)de Nigel Brown

- **Kubernetes:** [Connecting Applications with Services | Kubernetes](https://kubernetes.io/docs/concepts/services-networking/connect-applications-service/)
- **Mesosphere** : [Networking for Docker Containers Part III: Architectural Patterns for Service Registration, Service Discovery, and Load Balancing](https://mesosphere.com/blog/networking-docker-containers-part-iii-architectural-patterns-service-registration-service-discovery-load-balancing/)
- **AWS ECS:** [Service Discovery: An Amazon ECS Reference Architecture | AWS Compute Blog](https://www.google.es/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://aws.amazon.com/blogs/compute/service-discovery-an-amazon-ecs-reference-architecture/&amp;ved=0ahUKEwjDyY3UsqvYAhWDcRQKHQmQDoYQFggkMAA&amp;usg=AOvVaw1LvZ1hMVi6z-sDuV5ZE8GK)

