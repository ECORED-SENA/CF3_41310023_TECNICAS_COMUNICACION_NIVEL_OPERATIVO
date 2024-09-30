<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Normatividad empresarial.',
      titulo: 'Cuestionario',
      introduccion:
        'Esta actividad le permitirá determinar el grado de apropiación de los contenidos del componente formativo: <strong>Normatividad empresarial</strong>. Lea cada enunciado y luego seleccione la respuesta correcta según corresponda.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es una norma?',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una ley o regla establecida para ser cumplida por un sujeto específico.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un conjunto de principios morales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un código de conducta personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una recomendación para el comportamiento social.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es uno de los tipos de normas mencionados en el documento?',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Normas jurídicas.', esCorrecta: true },
            { id: 'b', texto: 'Normas educativas.', esCorrecta: false },
            { id: 'c', texto: 'Normas informales.', esCorrecta: false },
            { id: 'd', texto: 'Normas económicas.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué regula la normatividad empresarial?',
          imagen: require('@/assets/actividad/3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo las relaciones externas de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las relaciones entre la empresa y el Estado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El funcionamiento interno y el comportamiento del capital humano.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Las actividades comerciales internacionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes es un beneficio de la normatividad empresarial?',
          imagen: require('@/assets/actividad/4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumenta los impuestos empresariales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Limita la contratación de empleados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Protege al empresario y a la empresa ante faltas cometidas por los empleados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Genera conflictos interpersonales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de norma obliga a los trabajadores a usar guantes y lentes protectores?',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Normas de convivencia.', esCorrecta: false },
            { id: 'b', texto: 'Normas de vestimenta.', esCorrecta: false },
            { id: 'c', texto: 'Normas de seguridad.', esCorrecta: true },
            { id: 'd', texto: 'Normas de protocolo.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué es un contrato de condiciones uniformes según el documento?',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un acuerdo para prestar un servicio público domiciliario según condiciones pactadas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un contrato entre empleados y empleadores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un documento para regular la vestimenta de los empleados.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Una norma ecológica.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de las siguientes es una consecuencia de no implementar las NIIF (Normas Internacionales de Información Financiera)?',
          imagen: require('@/assets/actividad/3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Sanciones monetarias.', esCorrecta: true },
            { id: 'b', texto: 'Reducción de costos.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Acceso a mercados de capital.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mejora en las condiciones laborales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué objetivo tiene el Sistema de Gestión de Seguridad y Salud en el Trabajo (SG SST)?',
          imagen: require('@/assets/actividad/4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Regular las relaciones laborales internacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Diseñar e implementar medidas para mantener el bienestar físico, mental y social de los empleados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Controlar el uso de datos personales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Establecer normas de vestimenta en el trabajo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de las siguientes no es una norma interna de la empresa según el documento?',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Normas de archivo.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Normas de contratación externa.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Normas de jerarquía.', esCorrecta: false },
            { id: 'd', texto: 'Normas de salubridad.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué regula la normatividad empresarial externa?',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las relaciones entre empleados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las leyes y regulaciones del Estado aplicables a la empresa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Las actividades de ocio de los empleados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La comunicación interna de la empresa.',
              esCorrecta: false,
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
  computed: {},
  methods: {},
}
</script>
