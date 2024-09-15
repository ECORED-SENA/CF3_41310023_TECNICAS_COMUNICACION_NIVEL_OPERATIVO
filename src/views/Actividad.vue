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
      tema: 'Manejo de los residuos sólidos en la producción avícola.',
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
            { id: 'a', texto: '', esCorrecta: true },
            { id: 'b', texto: '', esCorrecta: false },
            { id: 'c', texto: '', esCorrecta: false },
            { id: 'd', texto: '', esCorrecta: false },
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
            { id: 'a', texto: '', esCorrecta: true },
            { id: 'b', texto: '', esCorrecta: false },
            { id: 'c', texto: '', esCorrecta: false },
            { id: 'd', texto: '', esCorrecta: false },
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
            { id: 'a', texto: '', esCorrecta: false },
            { id: 'b', texto: '', esCorrecta: false },
            { id: 'c', texto: '', esCorrecta: true },
            { id: 'd', texto: '', esCorrecta: false },
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
            { id: 'a', texto: '', esCorrecta: false },
            { id: 'b', texto: '', esCorrecta: false },
            { id: 'c', texto: '', esCorrecta: true },
            { id: 'd', texto: '', esCorrecta: false },
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
            { id: 'a', texto: '', esCorrecta: false },
            { id: 'b', texto: '', esCorrecta: false },
            { id: 'c', texto: '', esCorrecta: true },
            { id: 'd', texto: '', esCorrecta: false },
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
            { id: 'a', texto: '', esCorrecta: true },
            { id: 'b', texto: '', esCorrecta: false },
            { id: 'c', texto: '', esCorrecta: false },
            { id: 'd', texto: '', esCorrecta: false },
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
            { id: 'a', texto: '', esCorrecta: true },
            { id: 'b', texto: '', esCorrecta: false },
            { id: 'c', texto: '', esCorrecta: false },
            { id: 'd', texto: '', esCorrecta: false },
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
            { id: 'a', texto: '', esCorrecta: false },
            { id: 'b', texto: '', esCorrecta: true },
            { id: 'c', texto: '', esCorrecta: false },
            { id: 'd', texto: '', esCorrecta: false },
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
            { id: 'a', texto: '', esCorrecta: false },
            { id: 'b', texto: '', esCorrecta: true },
            { id: 'c', texto: '', esCorrecta: false },
            { id: 'd', texto: '', esCorrecta: false },
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
            { id: 'a', texto: '', esCorrecta: false },
            { id: 'b', texto: '', esCorrecta: true },
            { id: 'c', texto: '', esCorrecta: false },
            { id: 'd', texto: '', esCorrecta: false },
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
