import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const titulo = "Galería de Imágenes con React"
  const data = [
    {
      img: "https://media.istockphoto.com/photos/tropical-white-sand-cay-beach-in-los-roques-venezuela-picture-id166639950?b=1&k=20&m=166639950&s=170667a&w=0&h=L1ZwAHyNpkxT2RaS63KCmzxGbUTQGi62AJcnfEeQY3U=",
      titulo: "Archipiélago Los Roques (Venezuela)",
      descripcion: "Ubicado en el Mar Caribe. Esta área protegida de 400km cuadrados contiene más de 300 islas y cayos. El arrecife de coral en la zona es popular entre quienes practican el esnórquel y el buceo. El parque es famoso por sus playas de arena blanca apartadas, el surf a vela y la navegación.",
    },
    {
      img: "https://media.istockphoto.com/photos/machu-picchu-peru-picture-id930824730?b=1&k=20&m=930824730&s=170667a&w=0&h=1JxLd3OP8-U95vnds4j9sK671dITJq7JuSkGdIMP3Gw=",
      titulo: "Machu Picchu (Perú)",
      descripcion: "Esta antigua ciudad inca es uno de los tesoros más preciados de Perú. Forma parte de las siete maravillas del mundo. Su nombre significa Montaña Vieja y hace alusión al lugar donde se ubica a unos 2453 m.s.n.m, en una cima rocosa entre los cerros Huchuy Picchu y Huayna Picchu.",
    },
    {
      img: "https://media.istockphoto.com/photos/pyramids-bedouin-picture-id118214832?b=1&k=20&m=118214832&s=170667a&w=0&h=e3Fl99Xpo3EtEWlG1Tct3efeA3gccd9Dn9e-PGDGyio=",
      titulo: "Pirámides de Egipto (Egipto)",
      descripcion: "Las tres pirámides principales de Giza son Keops, Kefrén y Micerinos. Esta triada de pirámides son las tumbas de los faraones Keops, Kefren y Micerinos, que pretendían alcanzar la inmortalidad con estos impresionantes monumentos. Además de estas hay muchas otras pirámides menores.",
    },
    {
      img: "https://media.istockphoto.com/photos/horse-on-easter-island-picture-id621982686?b=1&k=20&m=621982686&s=170667a&w=0&h=EGtMhzqiyJlWV27KE_SRRMDU7JHR0v7pJWMiH6CB7sM=",
      titulo: "Rapa Nui / Isla de Pascua (Chile)",
      descripcion: "Es una remota isla volcánica en la Polinesia. Es famosa por sus sitios arqueológicos. Se pueden observar a los moáis, que son figuras humanas talladas con cabezas demasiado grandes, a menudo, apoyados sobre enormes pedestales de piedra llamados ahus.",
    },
    {
      img: "https://media.istockphoto.com/photos/angel-falls-picture-id155152984?b=1&k=20&m=155152984&s=170667a&w=0&h=60_nbQBtAlMWZIT_SN1qVY46BH0jLTplkSGsHTsz3ow=",
      titulo: "El Salto Ángel (Venezuela)",
      descripcion: "En el Parque Nacional de Canaima se encuentra la cascada más alta del mundo, con una altura de 979m (807m de caída ininterrumpida), esta cascada se genera desde el río Auyantepuy y su nombre significa en pemón salto del lugar más profundo. Es un espacio natural protegido.",
    },
    {
      img: "https://media.istockphoto.com/photos/view-of-venices-grand-canal-picture-id911570904?b=1&k=20&m=911570904&s=170667a&w=0&h=kDao8r3onURmECMcfpydH3Q7mCBW7LpkHykWCXB1TFw=",
      titulo: "Venecia (Italia)",
      descripcion: "Abarca más de 100 islas pequeñas en una laguna del mar Adriático. No tiene caminos, sino solo canales, incluida la vía pública del Gran Canal, bordeada de palacios renacentistas y góticos. En la plaza central de San Marcos se encuentra la basílica y el campanario Campanile.",
    },
    {
      img: "https://media.istockphoto.com/photos/colosseum-in-rome-with-morning-sun-picture-id1290101405?b=1&k=20&m=1290101405&s=170667a&w=0&h=FPmmTNGnOLsw_KvNXHdKpRdao_IHn592U7bEL-Gl69A=",
      titulo: "Coliseo Romano (Italia)",
      descripcion: "Símbolo más popular y representativo de Roma. Es Patrimonio de la Humanidad de la UNESCO y una de Las Siete Maravillas del Mundo Moderno. Acá los romanos disfrutaban de espectáculos. Organizaban peleas de animales salvajes, luchas de gladiadores y representaban batallas navales.",
    },
    {
      img: "https://media.istockphoto.com/photos/aerial-view-of-dubai-palm-jumeirah-island-united-arab-emirates-picture-id1097789900?b=1&k=20&m=1097789900&s=170667a&w=0&h=DzP-For1edDoAANGm_-YwbKmxPTZq_PbzXlH0sZKDKE=", 
      titulo: "Palm Jumeirah (Dubái)",
      descripcion: "Es una isla artificial con forma de Palmera del tamaño de un campo de fútbol. Forma junto a otras dos islas un archipiélago artificial que recibe el nombre de Palm Islands. De las tres, esta isla es la más pequeña, ha sido la que ha adquirido más popularidad debido a sus lujos y preciosas playas.",
    },
    {
      img: "https://media.istockphoto.com/photos/eiffel-tower-in-paris-france-picture-id924891460?b=1&k=20&m=924891460&s=170667a&w=0&h=jo4dxl8sqUnYyVVxfVoVKbZPLmpcxuH3JABmc0r5-4Q=",
      titulo: "Torre Eiffel (Francia)​",
      descripcion: "Es una estructura de hierro pudelado. Situada en el extremo del Campo de Marte a la orilla del río Sena. Este monumento es el más visitado del mundo con 7,1 millones de turistas cada año.​ Tiene una altura de 300 metros, prolongada más tarde con una antena hasta los 324 metros.",
    },
    {
      img: "https://media.istockphoto.com/photos/santorini-island-greece-picture-id1145450965?b=1&k=20&m=1145450965&s=170667a&w=0&h=LPPwsu4Bf6ovW6XriLOsi0wJ6xrsIUD-j9K3xjtAszE=",
      titulo: "Isla de Santorini (Grecia)​",
      descripcion: "Es un pequeño archipiélago formado por islas volcánicas, ubicado en el sur del mar Egeo y forma el grupo de islas de las Cícladas. Las casas cúbicas encaladas en sus 2 ciudades principales (Fira y Oia) se aferran a los acantilados, estas tienen vista a las islas al oeste y a las playas de piedras de lava blancas, rojas y negras.",
    },
    {
      img: "https://media.istockphoto.com/photos/mt-vesuvius-and-pompeii-picture-id960153998?b=1&k=20&m=960153998&s=170667a&w=0&h=WSjrJx4FkTGmXZgGZWyjcnkoJ2GJHjqEmi1l7uBsuxw=",
      titulo: "Pompeya​ (Italia)",
      descripcion: "Es un sitio arqueológico ubicado en la región de Campania, al sur de Italia. Fue una ciudad romana desarrollada y sofisticada y quedó enterrada bajo metros de cenizas y piedra pómez después de una catastrófica erupción del monte Vesubio en el año 79 d.C. El sitio bien preservado cuenta con ruinas excavadas que pueden explorarse libremente.",
    },
    {
      img: "https://media.istockphoto.com/photos/aerial-view-of-las-vegas-strip-in-nevada-picture-id614973464?b=1&k=20&m=614973464&s=170667a&w=0&h=72lHkgF5EikOyqh7LHg3waf8rLmVILMFONNqVUq7faA=",
      titulo: "Las Vegas (Estados Unidos)​",
      descripcion: "Ciudad famosa por su activa vida nocturna, con casinos abiertos las 24 horas del día y otras opciones de entretenimiento. Su calle principal es The Strip, acá se albergan hoteles temáticos con elaboradas exhibiciones, como fuentes sincronizadas con música o réplicas de la pirámide egipcia, el Canal de Venecia y la Torre Eiffel.",
    }
  ]

  return (
    <div className="App">
      <Header titulo={titulo}></Header>

      <section className='container_galeria'>
        <div className='row'>
          <div className='col-sm-12 col-lg-4'>
            <Card contenido={data[0]}></Card>
          </div>
          <div className='col-sm-12 col-lg-4'>
            <Card contenido={data[1]}></Card>
          </div>
          <div className='col-sm-12 col-lg-4'>
            <Card contenido={data[2]}></Card>
          </div>
          <div className='col-sm-12 col-lg-4'>
            <Card contenido={data[3]}></Card>
          </div>
          <div className='col-sm-12 col-lg-4'>
            <Card contenido={data[4]}></Card>
          </div>
          <div className='col-sm-12 col-lg-4'>
            <Card contenido={data[5]}></Card>
          </div>
          <div className='col-sm-12 col-lg-4'>
            <Card contenido={data[6]}></Card>
          </div>
          <div className='col-sm-12 col-lg-4'>
            <Card contenido={data[7]}></Card>
          </div>
          <div className='col-sm-12 col-lg-4'>
            <Card contenido={data[8]}></Card>
          </div>
          <div className='col-sm-12 col-lg-4'>
            <Card contenido={data[9]}></Card>
          </div>
          <div className='col-sm-12 col-lg-4'>
            <Card contenido={data[10]}></Card>
          </div>
          <div className='col-sm-12 col-lg-4'>
            <Card contenido={data[11]}></Card>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  )
}

export default App
