import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/model/travel';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  travelList: Travel[] = [
    {
      destination: 'Chichén Itzá, Yucatán.',
      desc: 'El templo de Kukulcán sigue cautivando a muchos espectadores de todo el mundo sobre todo durante el equinoccio en el que el juego de la luz y sombra crean la ilusión de la serpiente que baja los escalones de esta maravilla y que hace que miles de visitantes se reúnan para experimentar este fenómeno maya tan mágico.',
      image: '/assets/images/01.jpg',
    },
    {
      destination: 'Jardines de México, Morelos.',
      desc: 'Gracias al clima formidable de Morelos es que se pensó en instalar el jardín contemplativo más grande del mundo en nuestro país permitiendo que tenga sus puertas abiertas todo el año; Jardines de México se encuentra en Jolutla y con 51 hectáreas de impresionantes jardines, le quitó el título del más grande a Miracle Garden de Dubai de 7.8 hectáreas.',
      image: '/assets/images/02.jpg',
    },
    {
      destination: 'Cenote El Zacatón, Tamaulipas.',
      desc: 'Al Sur de Tamaulipas nos encontramos con maravillas naturales que se han mantenido en la incógnita, los muy conocidos y numerosos cenotes de la Península de Yucatán no son los únicos que encontramos en nuestro país, y aunque gozan de inigualables bellezas por su color azul o verde, es el cenote El Zacatón en Aldama, Tamaulipas el más impresionante del planeta que llega a tener 319 metros de profundidad medida descubierta por un robot de la NASA pero no por humanos ya que el récord mundial de profundidad fue para Jim Bowden que se zambulló 281,94 metros.',
      image: '/assets/images/03.jpg',
    },
    {
      destination: 'La Biblioteca Palafoxiana, Puebla.',
      desc: 'Esta era la biblioteca particular del obispo Juan de Palafox y Mendoza quien la donó con sus cinco mil volúmenes a los colegios de San Pedro y San Juan con la única condición de que cualquier persona tenga acceso a ella y no solo los miembros de la Iglesia y seminaristas, y por esta razón se convirtió en la primera biblioteca pública de América siendo un gran tesoro de Puebla.',
      image: '/assets/images/04.jpg',
    },
    {
      destination: 'Parque Nacional Arrecife de Puerto Morelos.',
      desc: 'El mar que rodea a las costas de México tienen un gran valor ecológico por eso es elegido por los amantes del buceo, la pesca y las actividades sencillas como el nado, y es que Puerto Morelos, Quintana Roo tiene una vida marina única ya que forma parte de la barrera arrecifal coralina “Gran Cinturón de Arrecifes del Atlántico Occidental” la segunda más grande del mundo.',
      image: '/assets/images/05.jpg',
    },
    {
      destination: 'Hierve el Agua, Oaxaca.',
      desc: 'Las dos cascadas petrificadas de Hierve el Agua, Oaxaca están formadas por carbonato de calcio y existen desde hace miles de años de las que se dice, era un lugar sagrado de los antiguos zapotecos y ahora es un paisaje único de la tierra, pues solo hay un lugar parecido en todo el mundo y es la cascada Pumakkale en Turquía.',
      image: '/assets/images/06.jpg',
    },
    {
      destination: 'Casa de los Azulejos, Ciudad de México.',
      desc: 'Si eres de los que te cautiva el sabor del café el beber una taza aquí te dejará deslumbrado ya que desde hace muchos años la Casa de los Azulejos se catalogó como el café más elegante de México y tanto por su bello interior como por su fachada de azulejos blancos y azulejos, es reconocida como una de las cafeterías más bonitas del mundo.',
      image: '/assets/images/07.jpg',
    },
    {
      destination: 'Museo Subacuático de Arte, Cancún-Isla Mujeres.',
      desc: 'Hace siete años se unieron los esfuerzos para crear el primer parque escultórico subacuático del mundo y de manos del artista Jason deCaires Taylor se formaron 400 figuras basadas en personas reales hechas con hormigón y con interior de varillas de fibra de vidrio.',
      image: '/assets/images/08.jpg',
    },
    {
      destination: 'Zoológico de Guadalajara',
      desc: 'Ya con 25 años de existencia, el zoológico de Guadalajara ha sido considerado como uno de los mejores de Latinoamérica no solo por su extensión que alcanza las 50 hectáreas y por albergar y proteger a un gran número de especies incluso a los que están en peligro de extinción, sino también por poseer el herpetario más grande de esta parte de nuestro planeta.',
      image: '/assets/images/09.jpg',
    },
    {
      destination: 'El Faro de Mazatlán.',
      desc: 'Además de las magníficas playas del pacífico y su exquisita gastronomía, Mazatlán posee atractivos únicos en el mundo que en esta ocasión te voy a mencionar dos grandiosos: su malecón más largo con 21 kilómetros y el faro natural más alto que alcanza más de 154 metros.',
      image: '/assets/images/10.jpg',
    },
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
