import React, { useEffect, useState } from 'react'
import {Form} from 'react-bootstrap'
import { Modal } from '../common/Modal'
import { BottonNav } from './BottonNav'

export const DashboardScreen = () => {
  const [show, setShow] = useState(false);
  const [assets, setAssets] = useState([]);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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


    <Modal title={"Nuevo Activo"} show={show} onClose={handleClose}>
    <Form>

    <div style={{display:'none'}}>
    <h3> Seleciona el tipo de activo</h3>
      <div className='mt-5'>
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
    <div >
     <h3> Nesecitamos saber de tu moto</h3>
    <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
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
