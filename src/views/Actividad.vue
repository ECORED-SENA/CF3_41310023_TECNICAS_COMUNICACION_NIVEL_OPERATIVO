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
              id:
                'Una ley o regla establecida para ser cumplida por un sujeto específico.',
              texto: '',
              esCorrecta: true,
            },
            {
              id: 'Un conjunto de principios morales.',
              texto: '',
              esCorrecta: false,
            },
            {
              id: 'Un código de conducta personal.',
              texto: '',
              esCorrecta: false,
            },
            {
              id: 'Una recomendación para el comportamiento social.',
              texto: '',
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
            { id: 'Normas jurídicas.', texto: '', esCorrecta: true },
            { id: 'Normas educativas.', texto: '', esCorrecta: false },
            { id: 'Normas informales.', texto: '', esCorrecta: false },
            { id: 'Normas económicas.', texto: '', esCorrecta: false },
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
              id: 'Solo las relaciones externas de la empresa.',
              texto: '',
              esCorrecta: false,
            },
            {
              id: 'Las relaciones entre la empresa y el Estado.',
              texto: '',
              esCorrecta: false,
            },
            {
              id:
                'El funcionamiento interno y el comportamiento del capital humano.',
              texto: '',
              esCorrecta: true,
            },
            {
              id: 'Las actividades comerciales internacionales.',
              texto: '',
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
              id: 'Aumenta los impuestos empresariales.',
              texto: '',
              esCorrecta: false,
            },
            {
              id: 'Limita la contratación de empleados.',
              texto: '',
              esCorrecta: false,
            },
            {
              id:
                'Protege al empresario y a la empresa ante faltas cometidas por los empleados.',
              texto: '',
              esCorrecta: true,
            },
            {
              id: 'Genera conflictos interpersonales.',
              texto: '',
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
            { id: 'Normas de convivencia.', texto: '', esCorrecta: false },
            { id: 'Normas de vestimenta.', texto: '', esCorrecta: false },
            { id: 'Normas de seguridad.', texto: '', esCorrecta: true },
            { id: 'Normas de protocolo.', texto: '', esCorrecta: false },
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
              id:
                'Un acuerdo para prestar un servicio público domiciliario según condiciones pactadas.',
              texto: '',
              esCorrecta: true,
            },
            {
              id: 'Un contrato entre empleados y empleadores.',
              texto: '',
              esCorrecta: false,
            },
            {
              id: 'Un documento para regular la vestimenta de los empleados.',
              texto: '',
              esCorrecta: false,
            },
            { id: 'Una norma ecológica.', texto: '', esCorrecta: false },
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
            { id: 'Sanciones monetarias.', texto: '', esCorrecta: true },
            { id: 'Reducción de costos.', texto: '', esCorrecta: false },
            {
              id: 'Acceso a mercados de capital.',
              texto: '',
              esCorrecta: false,
            },
            {
              id: 'Mejora en las condiciones laborales.',
              texto: '',
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
              id: 'Regular las relaciones laborales internacionales.',
              texto: '',
              esCorrecta: false,
            },
            {
              id:
                'Diseñar e implementar medidas para mantener el bienestar físico, mental y social de los empleados.',
              texto: '',
              esCorrecta: true,
            },
            {
              id: 'Controlar el uso de datos personales.',
              texto: '',
              esCorrecta: false,
            },
            {
              id: 'Establecer normas de vestimenta en el trabajo.',
              texto: '',
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
            { id: 'Normas de archivo.', texto: '', esCorrecta: false },
            {
              id: 'Normas de contratación externa.',
              texto: '',
              esCorrecta: true,
            },
            { id: 'Normas de jerarquía.', texto: '', esCorrecta: false },
            { id: 'Normas de salubridad.', texto: '', esCorrecta: false },
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
              id: 'Las relaciones entre empleados.',
              texto: '',
              esCorrecta: false,
            },
            {
              id:
                'Las leyes y regulaciones del Estado aplicables a la empresa.',
              texto: '',
              esCorrecta: true,
            },
            {
              id: 'Las actividades de ocio de los empleados.',
              texto: '',
              esCorrecta: false,
            },
            {
              id: 'La comunicación interna de la empresa.',
              texto: '',
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
