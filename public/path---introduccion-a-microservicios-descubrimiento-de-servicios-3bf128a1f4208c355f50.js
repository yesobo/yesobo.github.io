webpackJsonp([8816231625137],{439:function(e,s){e.exports={data:{markdownRemark:{html:'<p>En este artículo quiero explicaros cómo surge y cómo abordar el problema de Descubrimiento de Servicios (Service Discovery), comenzando desde lo más básico, esto es, buscando en Google la palabra <em>microservicios</em>.</p>\n<p>Estos son los 3 primeros resultados cuando <a href="http://lmgtfy.com/?q=microservices">buscas en Google la palabra <em>microservices</em></a>:</p>\n<ul>\n<li><a href="https://www.google.es/url?sa=t&#x26;source=web&#x26;rct=j&#x26;url=https://martinfowler.com/articles/microservices.html&#x26;ved=0ahUKEwjC4KqGiJTYAhVLvhQKHcqLCcgQFggnMAA&#x26;usg=AOvVaw3RVia8K9FC4rqyB8sJSpl5">Microservices - Martin Fowler</a> <a href="https://www.google.es/url?sa=t&#x26;source=web&#x26;rct=j&#x26;url=https://martinfowler.com/articles/microservices.html&#x26;ved=0ahUKEwjC4KqGiJTYAhVLvhQKHcqLCcgQFggnMAA&#x26;usg=AOvVaw3RVia8K9FC4rqyB8sJSpl5">\n</a> <a href="https://www.google.es/url?sa=t&#x26;source=web&#x26;rct=j&#x26;url=https://martinfowler.com/articles/microservices.html&#x26;ved=0ahUKEwjC4KqGiJTYAhVLvhQKHcqLCcgQFggnMAA&#x26;usg=AOvVaw3RVia8K9FC4rqyB8sJSpl5">https://martinfowler.com › articles › micr...</a></li>\n<li><a href="https://www.google.es/url?sa=t&#x26;source=web&#x26;rct=j&#x26;url=http://microservices.io/patterns/microservices&#x26;ved=0ahUKEwjC4KqGiJTYAhVLvhQKHcqLCcgQFgg4MAE&#x26;usg=AOvVaw3yx4SGRgVqKldPK57WrTvt">Microservice</a> <a href="https://www.google.es/url?sa=t&#x26;source=web&#x26;rct=j&#x26;url=http://microservices.io/patterns/microservices&#x26;ved=0ahUKEwjC4KqGiJTYAhVLvhQKHcqLCcgQFgg4MAE&#x26;usg=AOvVaw3yx4SGRgVqKldPK57WrTvt">Architecture pattern - Microservices.io</a> <a href="https://www.google.es/url?sa=t&#x26;source=web&#x26;rct=j&#x26;url=http://microservices.io/patterns/microservices&#x26;ved=0ahUKEwjC4KqGiJTYAhVLvhQKHcqLCcgQFgg4MAE&#x26;usg=AOvVaw3yx4SGRgVqKldPK57WrTvt">\n</a> <a href="https://www.google.es/url?sa=t&#x26;source=web&#x26;rct=j&#x26;url=http://microservices.io/patterns/microservices&#x26;ved=0ahUKEwjC4KqGiJTYAhVLvhQKHcqLCcgQFgg4MAE&#x26;usg=AOvVaw3yx4SGRgVqKldPK57WrTvt">io › patterns › microservices</a></li>\n<li><a href="https://www.google.es/url?sa=t&#x26;source=web&#x26;rct=j&#x26;url=https://en.wikipedia.org/wiki/Microservices&#x26;ved=0ahUKEwjC4KqGiJTYAhVLvhQKHcqLCcgQFgg7MAI&#x26;usg=AOvVaw1Kz060V6CyIO1TWxYRtdNj">Microservices - Wikipedia</a> <a href="https://www.google.es/url?sa=t&#x26;source=web&#x26;rct=j&#x26;url=https://en.wikipedia.org/wiki/Microservices&#x26;ved=0ahUKEwjC4KqGiJTYAhVLvhQKHcqLCcgQFgg7MAI&#x26;usg=AOvVaw1Kz060V6CyIO1TWxYRtdNj">\n</a> <a href="https://www.google.es/url?sa=t&#x26;source=web&#x26;rct=j&#x26;url=https://en.wikipedia.org/wiki/Microservices&#x26;ved=0ahUKEwjC4KqGiJTYAhVLvhQKHcqLCcgQFgg7MAI&#x26;usg=AOvVaw1Kz060V6CyIO1TWxYRtdNj">https://en.wikipedia.org › wiki › Microse...</a></li>\n</ul>\n<p>En los tres se hace un repaso general sobre las características generales de una arquitectura basada en Microservicios, sus ventajas sobre una aplicación monolítica, sus inconvenientes, su relación con la tecnología de contenedores, con la organización de los equipos de desarrollo y con DevOps y la importancia en este tipo de arquitectura de la monitorización, la tolerancia a errores y la consistencia de datos.</p>\n<p>Os recomiendo leer los tres artículos si no estáis familiarizados con términos esenciales en el ámbito de los microservicios como:</p>\n<ul>\n<li>Load balancer, API Gateway, Service discovery, Service registry, orchestrator, Pods,  horizontal scaling, fault tolerant, health check ...</li>\n</ul>\n<p>Y tecnologías como:</p>\n<ul>\n<li>Docker, Kubernetes, Swarm, Mesos, ECS, Eureka, Consul, NGINX, HAProxy...</li>\n</ul>\n<p>Tras informarnos un poco sobre Microservicios pronto nos damos cuenta que la diferencia más significativa entre una aplicación monolítica y una con una arquitectura de microservicios es la comunicación entre procesos, que pasa de hacerse mediante llamadas a métodos y funciones de un mismo lenguaje de programación en las monolíticas a hacerse con llamadas entre microservicios a través de protocolos de red estándar como principalmente HTTP/HTTPS. </p>\n<p><img src="https://image.slidesharecdn.com/microservicesforpaaswithspringandcf-141105112756-conversion-gate02/95/developing-microservices-for-paas-with-spring-and-cloud-foundry-15-638.jpg?cb=1415187045" alt="monolithic architecture">\n<img src="https://image.slidesharecdn.com/microservicesforpaaswithspringandcf-141105112756-conversion-gate02/95/developing-microservices-for-paas-with-spring-and-cloud-foundry-17-638.jpg?cb=1415187045" alt="microservices architecture"></p>\n<p>Esto significa que los microservicios, para comunicarse entre ellos, necesitan conocer la localización en la red de los demás y como esta localización es variable por cuestiones de escalabilidad (se crean y destruyen instancias/contenedores) y de portabilidad (cambio de servidor) <strong>es necesario disponer de un sistema de balanceo de carga (load balancing) y descubrimiento de servicios (service discovery)</strong> que permita la comunicación entre servicios situados en cualquier punto de la red.</p>\n<h3 id="client-side-vs-server-side"><a href="#client-side-vs-server-side" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Client-side vs Server-side</h3>\n<p><a href="https://www.nginx.com/people/chris-richardson/">Chris Richardson</a> en <a href="https://www.nginx.com/blog/service-discovery-in-a-microservices-architecture/">su serie de artículos sobre Microservicios</a> distingue entre dos patrones principales de descubrimiento de servicios; <strong>del lado del cliente (client-side)</strong> y del <strong>lado del servidor (server-side)</strong>.</p>\n<p>La gran diferencia entre estos dos patrones es que en el primero, el cliente tiene que consultar la fuente de información (Service Registry) que indica dónde se encuentra el servicio deseado y en el segundo patrón (server-side) se oculta al cliente toda esta lógica de descubrimiento.</p>\n<p>En este artículo nos centraremos en el descubrimiento del lado del servidor en la que los clientes de los servicios puedan hacerlo igual que como lo harían en una aplicación monolítica sin microservicios.</p>\n<h3 id="¿cómo-lo-hacen-los-demás"><a href="#%C2%BFc%C3%B3mo-lo-hacen-los-dem%C3%A1s" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>¿Cómo lo hacen los demás?</h3>\n<p><strong>Netflix</strong> es la empresa que más se menciona al buscar información sobre microservicios por ser uno de los pioneros en adoptar esta arquitectura a gran escala y por haber publicado una serie de herramientas open source bajo el nombre de Netflix OSS que facilitan el trabajo en este tipo de arquitecturas. Concretamente, para el registro y descubrimiento de servicios destacan <strong>Eureka y Ribbon</strong> que implementan una solución de descubrimiento del lado del cliente que por sus características ya hemos descartado más arriba, además como dice <a href="https://www.ibm.com/blogs/bluemix/author/gang-chen/">Gang Chen</a> <a href="https://www.ibm.com/blogs/bluemix/2017/05/key-decisions-when-building-microservices-apps-in-java-with-kubernetes/">en el blog de IBM Cloud</a> "esto era así hace ya casi 5 años"</p>\n<p>Otra solución que se encuentra con poco que busquemos en Internet sobre descubrimiento de servicios es la que sincroniza un balanceador de carga como <strong>HAProxy o NGINX</strong> con un registro de servicios como <strong>Consul, Etcd o Zookeeper</strong> como explica <a href="https://www.nginx.com/people/chris-richardson/">Chris Richardson</a> en el <a href="https://www.nginx.com/blog/service-discovery-in-a-microservices-architecture/">blog de NGINX</a>, y soluciones más optimizadas como <a href="https://medium.com/airbnb-engineering/smartstack-service-discovery-in-the-cloud-4b8a080de619">SmartStack</a> desarrollada por <strong>Airbnb</strong>.</p>\n<p>Si nos fijamos en la fecha de los artículos que utilizan este patrón son de hace 2 o 3 años y esto se debe a que estas soluciones están quedando en desuso porque <strong>las plataformas de orquestación de contenedores tienen sus propios sistemas de descubrimiento y registro de servicios</strong> que utilizan patrones basados en el anterior (balanceador de carga) con importantes mejoras y sobretodo eliminando gran parte de las tareas de mantenimiento de balanceadores y proxies en cada host de la red.</p>\n<h3 id="la-solución-más-sencilla-y-actual"><a href="#la-soluci%C3%B3n-m%C3%A1s-sencilla-y-actual" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>La solución más sencilla y actual</h3>\n<p>Como tener una plataforma de orquestación de contenedores es esencial para la administración de una arquitectura de microservicios si queremos beneficiarnos de sus ventajas (escalabilidad, portabilidad, tolerancia a errores, marcha atrás...), lo mejor que podemos hacer es <strong>dejar el problema de descubrimiento y registro de servicios a nuestro orquestador</strong> y centrarnos en la elección del orquestador que más se ajuste a las necesidades de la aplicación.</p>\n<p>Si queréis saber cómo es el descubrimiento de servicios en los diferentes orquestadores os recomiendo <a href="https://www.safaribooksonline.com/library/view/oscon-2017-/9781491976227/video306837.html">la charla de Arun Grupta (Amazon)  en la OSCON 2017</a> en la que explica en 20 minutos como lo hacen Docker Swarm, Kubernetes, Mesosphere y ECS.</p>\n<p>Y para terminar os dejo unos enlaces por si queréis profundizar un poco más en cómo tratar el problema de descubrimiento y registro de servicios con las principales plataformas de orquestación, disfrutadlos y comentad si queréis charlar sobre el tema.</p>\n<ul>\n<li>\n<p><strong>Docker Swarm</strong> :</p>\n<ul>\n<li>(Ejemplo rápido) <a href="http://blog.scottlogic.com/2016/06/17/docker-swarm.html">SERVICE DISCOVERY WITH DOCKER SWARM</a> de David Wybourn</li>\n<li>(Ejemplo extendido) <a href="https://semaphoreci.com/community/tutorials/consuming-services-in-a-docker-swarm-mode-cluster">Consuming services in a Docker Swarm Mode cluster</a> de Nigel Brown</li>\n</ul>\n</li>\n<li>\n<p><strong>Kubernetes:</strong> <a href="https://kubernetes.io/docs/concepts/services-networking/connect-applications-service/">Connecting Applications with Services | Kubernetes</a></p>\n</li>\n<li>\n<p><strong>Mesosphere</strong> : <a href="https://mesosphere.com/blog/networking-docker-containers-part-iii-architectural-patterns-service-registration-service-discovery-load-balancing/">Networking for Docker Containers Part III: Architectural Patterns for Service Registration, Service Discovery, and Load Balancing</a></p>\n</li>\n<li>\n<p><strong>AWS ECS:</strong> <a href="https://www.google.es/url?sa=t&#x26;source=web&#x26;rct=j&#x26;url=https://aws.amazon.com/blogs/compute/service-discovery-an-amazon-ecs-reference-architecture/&#x26;ved=0ahUKEwjDyY3UsqvYAhWDcRQKHQmQDoYQFggkMAA&#x26;usg=AOvVaw1LvZ1hMVi6z-sDuV5ZE8GK">Service Discovery: An Amazon ECS Reference Architecture | AWS Compute Blog</a></p>\n</li>\n</ul>',timeToRead:7,excerpt:"En este artículo quiero explicaros cómo surge y cómo abordar el problema de Descubrimiento de Servicios (Service Discovery), comenzando…",frontmatter:{title:"Introducción a Microservicios: Descubrimiento de Servicios",cover:"https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb",date:"02/01/2018",category:"microservicios",tags:["microservicios","service discovery"]},fields:{nextTitle:"Introducción a Microservicios: Descubrimiento de Servicios",nextSlug:"/introduccion-a-microservicios-descubrimiento-de-servicios",prevTitle:"Introducción a Microservicios: Descubrimiento de Servicios",prevSlug:"/introduccion-a-microservicios-descubrimiento-de-servicios",slug:"/introduccion-a-microservicios-descubrimiento-de-servicios"}}},pathContext:{slug:"/introduccion-a-microservicios-descubrimiento-de-servicios"}}}});
//# sourceMappingURL=path---introduccion-a-microservicios-descubrimiento-de-servicios-3bf128a1f4208c355f50.js.map