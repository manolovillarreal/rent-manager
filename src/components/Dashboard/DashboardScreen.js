import React, { useEffect, useState } from 'react'
import { Modal } from '../common/Modal'
import { BottonNav } from './BottonNav'

export const DashboardScreen = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(()=>{
    console.log("Cargar Activos");
  },[])

  return (
    <>
    <div style={Styles.row}>
      <h1 style={Styles.title}>Activos</h1>
      <img style={Styles.addBox} alt='' src="/img/add_box.png" onClick={handleShow} />
    </div>
    <BottonNav/>   


    <Modal title={"Nuevo Activo"} show={show} onClose={handleClose}>
      <h3> Seleciona el tipo de activo</h3>
      <div className='mt-5'>
        <div >
          <button className='btn_Kind'>
            <img alt='Motocicleta' src='/img/moto.png' className='img_kind'/>
          </button>
          <button className='btn_Kind' >
          <img alt='Autos' src='/img/auto.png' className='img_kind'/>
          </button>
        </div>
        <div>
          <button className='btn_Kind' >
          <img alt='Botes' src='/img/boat.png' className='img_kind'/>
          </button>
          <button className='btn_Kind' >
          <img alt='Bicicletas o Scooters' src='/img/bike.png' className='img_kind'/>
          </button>
        </div>
      </div>
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
    marginLeft:"auto"
  },
  btnKind:{width:90,height:90}
}
