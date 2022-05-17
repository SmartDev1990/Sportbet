import Head from 'next/head'
import {useEffect} from 'react'

const Dashboard = (props) => {

        useEffect(()=>{
                //declaramos variables primero hacer los cambios facilmente
                var duration = 10000; // duracion en milisegundos sin efecto despues de cada animacion.
                let step = 1; //veces que se cumplira la funcion.
                let steps = 3; //esta variable representa hasta cuantos atributos tenemos en el css.

                //utilizamos la funcion setInterval para que nuestra animacion se cumpla cada cierto tiempo 
                //el cual ya declaramos en nuestras variables.
                setInterval( function() {
                //con document.querySelector seleccionamos al la clase madre de todos los elementos en el.
                //.setAttribute creara el atributo que hemos nombrado en el css y lo colocara en la clase .dispositivo que hemos seleccionado con jqueryselector
                //el valor que tienen los atributos cambiara con el bucle "for" que creamos 
                document.querySelector( '.dispositivo' ).setAttribute( 'data-animation-step', step = ++step > steps ? 1 : step );
                }, duration / steps );
                //al final no estan mas que los valores del setInterval.
        },[])

    return(
    <>
        <Head>
        <title>My styled page</title>
        <link href="/static/test.css" rel="stylesheet" />
      </Head>

      <div className="dispositivo" data-animation-step="3">
        <div className="carcasa">
                <div className="pantalla"></div>
                <div className="botoncito"></div>
        </div>
        <div className="base">
                <div className="apple"><i className="fa fa-apple"></i></div>
        </div>
        <div className="soporte"></div>
        <div className="sop2"></div>
        </div> 
    </>


    )
}

export default Dashboard;