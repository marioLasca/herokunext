import React, { useState } from 'react'

const DataUser = (props) => {

    const [dataname, setDataname] = useState('');
    const [dataphone, setDataphone] = useState('');

    const onSendData = () => {
        if( dataname != "" && dataphone != "" )
            props.onWha(dataname,dataphone);
    }

 


    return <>
        <div className="modal_data">
            <div className="modal_data_body">
                <button onClick={() => props.onShowData()} className="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fillRule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm8.036-4.024a.75.75 0 00-1.06 1.06L10.939 12l-2.963 2.963a.75.75 0 101.06 1.06L12 13.06l2.963 2.964a.75.75 0 001.061-1.06L13.061 12l2.963-2.964a.75.75 0 10-1.06-1.06L12 10.939 9.036 7.976z"></path></svg>
                </button>
                <div className="modal_data-basic">
                    <div className="modal_basic_title">
                        <img src="logo.png" alt="" />
                        <h3>¡Casi terminamos el pedido!</h3>
                    </div>
                    <form action="#">
                        <label htmlFor="">Tu nombre</label>
                        <input onChange={e => setDataname(e.target.value)} className="form-control" type="text" name="name"   />
                        <label htmlFor="">Tu teléfono</label>
                        <input className="form-control" type="text" onChange={e => setDataphone(e.target.value)} name="phone"   />
                        <small>Al enviar el formulario aceptas las condiciones de manejo de datos.</small>
                        <br />
                    </form>
                    
                    <button className="btn-send" onClick={() => onSendData()} >Enviar</button>
                </div>
            </div>
        </div>
    </>

};


export default DataUser;