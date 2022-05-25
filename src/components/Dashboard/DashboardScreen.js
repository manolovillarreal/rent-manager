import React, { useEffect, useLayoutEffect, useState,useRef } from 'react'
import {Form} from 'react-bootstrap'
import { GithubPicker } from "react-color";

import { Modal } from '../common/Modal'
import { BottonNav } from './BottonNav'

export const DashboardScreen = () => {
  const [show, setShow] = useState(false);
  const [assets, setAssets] = useState([]);
  const [showColor1, setShowColor1] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChangeColor = (color) => {
    console.log(color);
    document.getElementById("color1").style.backgroundColor = color.hex
    setShowColor1(false);
  };

  const handleSumitForm = (e)=>{
    e.preventDefault();
  }
  useEffect(()=>{
    console.log("Cargar Activos");
  },[])

  return (
    <>
    <div style={Styles.row}>
      <h1 style={Styles.title}>Activos</h1>
      <button style={Styles.addBox} className='btnAdd'  onClick={handleShow}>
      </button>
    </div>
    <BottonNav/>   


    <Modal title={"Nuevo Activo"} show={show} onClose={handleClose} >
    <Form onSubmit={handleSumitForm}>

    <div  style={{display:'none'}}>
    <h3> Seleciona el tipo de activo</h3>
      <div className='mt-5' style={{textAlign:'center'}}>
        <div >
          <button className='btn_Kind'>
            <img alt='Motocicleta' src='/img/moto.png'/>
          </button>
          <button className='btn_Kind' >
          <img alt='Autos' src='/img/auto.png'/>
          </button>
        </div>
        <div>
          <button className='btn_Kind' >
          <img alt='Botes' src='/img/boat.png'/>
          </button>
          <button className='btn_Kind' >
          <img alt='Bicicletas o Scooters' src='/img/bike.png' />
          </button>
        </div>
      </div>
    </div> 
    {/* Pagina 2     */}
    <div className='form_content'>
     <h3> Nesecitamos saber de tu moto</h3>
      <div>
         {/* Marca y matricula */}
      <div className="mt-3">
        <div style={{display:"flex"}}>
        <label style={{flex:3}} htmlFor="marca" className="form-label">Marca</label>
        <label style={{flex:1}} htmlFor="matricula" className="form-label">Matricula</label>

        </div>
        <div style={{display:"flex"}}>
          <input  style={{flex:3}} name="marca" className="form-control" id="marca"  />
          <input  style={{flex:1}}  name="matricula" className="form-control" id="matricula"  />
        </div>
        
      </div>
      {/*Modelo y anio */}
      <div className="mt-3">
        <div style={{display:"flex"}}>
        <label style={{flex:3}} htmlFor="modelo" className="form-label">Modelo</label>
        <label style={{flex:1}} htmlFor="anio" className="form-label">Año</label>

        </div>
        <div style={{display:"flex"}}>
          <input  style={{flex:3}} name="modelo" className="form-control" id="modelo"  />
          <input  style={{flex:1}}  name="anio" className="form-control" id="anio"  />
        </div>
        
      </div>
      {/* Cilindraje */}
      <div className="mt-3">
        <label htmlFor="cilindraje" className="form-label">Cilindraje</label>
          <input style={{width:100}}  name="cilindraje" className="form-control" id="cilindraje"  />

      </div>
      {/* colores */}
       <div className="mt-3">
        <div style={{display:"flex"}}>
        <label style={{flex:1}} htmlFor="color1" className="form-label">Color 1</label>
        <label style={{flex:1}} htmlFor="color2" className="form-label">Color 2</label>
        <div style={{flex:2}}></div>
        </div>
        <div style={{display:"flex"}}>
          <button id="color1" 
                  className="form-control btn_color"  
                  onClick={()=>setShowColor1(true)} 
                  onBlur={()=>{
                    setTimeout(() => {  
                      if(showColor1)                    
                      setShowColor1(false)
                    }, 200);
                  }}
                  />
          <button  name="color2" className="form-control btn_color" id="color2"  />    
          <div style={{flex:8}}></div>

  
        </div>
        {
            showColor1 &&
            (<GithubPicker  onChangeComplete={ handleChangeColor } colors={ ['#000000','#FFFFFF','#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB','#560f70']}/>)
        }
      </div>
      </div>
     

      {/* Boton continuar */}
      <div className='form_button'>
        <button > Continuar</button>
        </div>
      
    
    </div> 
    </Form>

    </Modal> 
    
    </>
  )
}

const Styles = {
  row:{
    display:"flex"
  },
  title:{
    color:"black"
  },
  addBox:{
   
  },
  btnKind:{width:90,height:90}
}
