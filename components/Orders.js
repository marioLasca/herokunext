import React, { useState } from 'react'

function Orders(props) {

    const [total, setTotal] = useState(0)

    const sumTotal = (sum) => {

        if (sum < 0 && props.products.cant == 1)
            return;
        props.setPlus(props.products.id, sum)
        props.products.total = props.products.cant * props.products.value
        setTotal(props.products.total)

    }

    return <div className="orders">
        <div className="row">
            <div className="col-10 d-flex">
                <button className="btn btn-sm" onClick={() => props.deleteOrder(props.products.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fillRule="evenodd" d="M16 1.75V3h5.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75zm-6.5 0a.25.25 0 01.25-.25h4.5a.25.25 0 01.25.25V3h-5V1.75z"></path><path d="M4.997 6.178a.75.75 0 10-1.493.144L4.916 20.92a1.75 1.75 0 001.742 1.58h10.684a1.75 1.75 0 001.742-1.581l1.413-14.597a.75.75 0 00-1.494-.144l-1.412 14.596a.25.25 0 01-.249.226H6.658a.25.25 0 01-.249-.226L4.997 6.178z"></path><path d="M9.206 7.501a.75.75 0 01.793.705l.5 8.5A.75.75 0 119 16.794l-.5-8.5a.75.75 0 01.705-.793zm6.293.793A.75.75 0 1014 8.206l-.5 8.5a.75.75 0 001.498.088l.5-8.5z"></path></svg>
                </button>
                <img className="p-2" src={props.products.imgurl} alt="" />
                <p>
                    <b> {props.products.cant} - {props.products.name}</b><br />
                   ${new Intl.NumberFormat("es-ES").format(total > 0 ? total : props.products.total)}
                </p>

            </div>
            <div className="col-2">
                <button className="btn-plus" onClick={() => sumTotal(1)}>
                    +
                </button>
                <button className="btn-plus" onClick={() => sumTotal(-1)} >
                    -
                </button>
            </div>
        </div>

    </div>

};


export default Orders;