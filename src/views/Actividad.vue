<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Conceptos claves',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión de los conceptos fundamentales relacionados con sostenibilidad, consumidor verde, mercado y prospección.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué propósito tiene la sostenibilidad en los negocios?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Equilibrar dimensiones ambientales, sociales y económicas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar únicamente la producción industrial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir exclusivamente los costos operativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir completamente la innovación empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuál característica identifica un negocio sostenible?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comercialización sin planificación estratégica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Integración de criterios ambientales y sociales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminación de procesos de innovación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Producción basada únicamente en volumen.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué principio orienta la economía circular empresarial?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar residuos industriales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir materiales reciclables.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mantener recursos en uso continuamente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Limitar procesos de reutilización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué beneficio aporta el ecodiseño al producto sostenible?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementa el consumo energético.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reduce la vida útil del producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elimina posibilidades de reciclaje.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminuye impactos durante su ciclo de vida.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué evalúan los Objetivos de Desarrollo Sostenible?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Acciones orientadas al desarrollo sostenible global.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Exclusivamente resultados financieros anuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solamente procesos de producción industrial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Únicamente estrategias de publicidad comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué caracteriza principalmente al consumidor verde?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comprar únicamente productos de menor precio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Priorizar productos con responsabilidad ambiental comprobable.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elegir exclusivamente marcas internacionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Basar sus decisiones solo en publicidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál variable influye directamente en el análisis del mercado?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Color institucional de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tamaño del logotipo comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comportamiento de los consumidores.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cantidad de oficinas administrativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué finalidad tiene la prospectación de clientes potenciales?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar procesos de comercialización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la comunicación empresarial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir las estrategias de mercado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Identificar oportunidades de venta futuras.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué herramienta facilita identificar clientes potenciales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Base de datos de clientes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Manual de funciones administrativas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reglamento interno empresarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Organigrama institucional actualizado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué permiten las estrategias de mercado?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuir el conocimiento del consumidor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Orientar acciones según oportunidades identificadas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar el análisis competitivo empresarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir la investigación de mercados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué método fortalece la identificación de clientes potenciales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Observación sistemática del mercado objetivo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminación del análisis competitivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducción de canales comerciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustitución del proceso de segmentación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué característica distingue un producto sostenible?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mayor consumo de recursos naturales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Minimizar impactos ambientales durante su ciclo de vida.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Exclusividad por su alto precio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fabricación sin criterios de calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué favorece el análisis de variables del mercado?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuir la investigación comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ignorar tendencias del entorno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Identificar oportunidades para decisiones comerciales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar la segmentación de clientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Cuál técnica facilita captar nuevos clientes?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar canales de comunicación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la presencia comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar el contacto con prospectos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Contacto planificado con prospectos calificados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué propósito tiene segmentar adecuadamente un mercado objetivo?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Agrupar consumidores con características similares.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar la producción indiscriminadamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar diferencias entre consumidores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el análisis del entorno competitivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué aporta investigar previamente el mercado objetivo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuir la capacidad de adaptación comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comprender necesidades y oportunidades del entorno.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir la segmentación de clientes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar el análisis de competencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué favorece aplicar criterios de sostenibilidad empresarial?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar únicamente la producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir el conocimiento del mercado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Generar valor económico, social y ambiental.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Disminuir la confianza del consumidor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué resultado produce una prospectación comercial?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar procesos sin objetivos definidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar el seguimiento comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir el conocimiento del cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incrementar oportunidades de conversión comercial.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué información apoyan las variables del mercado?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Decisiones basadas únicamente en intuición.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Procesos aislados de comercialización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Decisiones estratégicas fundamentadas en evidencia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminación de estudios de mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué ventaja genera identificar correctamente clientes potenciales?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar costos sin planificación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Disminuir oportunidades comerciales futuras.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la comunicación con clientes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Optimizar esfuerzos comerciales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
