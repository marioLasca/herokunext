
import React, { useState } from 'react'

import DataUser from "./DataUser";
import Orders from "./Orders"

function Carrito(props) {

    const [showData, setShowData] = useState(false);

    const onShowData = () => {
        setShowData(showData ? false : true);
    }

    const onWha = (name,phone) => {
        
        let concat = "Hola! %0A";
        concat += "Soy "+name+" Cel. "+phone+" %0A Éste es mi pedido %0A";
        props.dataCarrito.map(p => {
            concat += "%0A" + p.id + " " + p.name;
        });

        concat = "https://api.whatsapp.com/send/?phone=57" + phone + "&text=" + concat;
        window.location.href = concat;

    }

    return <>

        {showData ? <DataUser onShowData={onShowData} onWha={onWha} /> : null}
        <div className="modalnd">
            <div className="modalnd__carrito">
                <button onClick={() => props.onShow()} className="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fillRule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm8.036-4.024a.75.75 0 00-1.06 1.06L10.939 12l-2.963 2.963a.75.75 0 101.06 1.06L12 13.06l2.963 2.964a.75.75 0 001.061-1.06L13.061 12l2.963-2.964a.75.75 0 10-1.06-1.06L12 10.939 9.036 7.976z"></path></svg>
                </button>
                <h3>Así va tu pedido :</h3>
                <div className="modalnd__carrito__orders">
                    {

                        props.dataCarrito.map(products => {
                            return <Orders
                                key={products.id}
                                products={products}
                                setPlus={props.setPlus}
                                deleteOrder={props.deleteOrder}
                            />
                        })
                    }
                </div>
                <div className="send">
                    <button onClick={() => onShowData()} className="btn-send">Enviar Pedido</button>
                </div>

            </div>

        </div>

        

    </>

};


export default Carrito;

