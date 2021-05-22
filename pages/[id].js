import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../components/Header';
import Filter from '../components/Filter';
import Carousel from '../components/Carousel';
import Carrito from '../components/Carrito';
import { portfolios } from "../datos.json"

function UserPortfoliond() {


    const router = useRouter();
    const { id } = router.query;
    const [show, setShow] = useState(false);
    const [carrito, setCarrito] = useState([]);
    const products = portfolios[0][id] ?  portfolios[0][id] : [];
    

    const setPlus = (id, sum) => {

        var cont = 0;
        var aux = carrito;

        carrito.map(car => {
            if (car.id === id) {
                aux[cont].cant = aux[cont].cant + sum;
                aux[cont].total = aux[cont].value * aux[cont].cant;
            }
            cont++;
        });
        setCarrito(aux);
    }

    const deleteOrder = id => {
        setCarrito(carrito.filter(order => order.id !== id))
    }

    const onShow = (product = null) => {
        setShow(show ? false : true);

        if (product != null) {
            if (!carrito.find(car => car.id === product.id)) {
                product.cant = 1;
                product.total = product.value;
                setCarrito([...carrito, product]);
            }
        }
    }

    useEffect(() => {
        let data = localStorage.getItem("carrito");
        if (data != null) {
            setCarrito(JSON.parse(data));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])

    


    return <>
        <Head>
            <title>Portafolio {id}</title>
        </Head>
        <Header />
        <Filter />
        <Carousel products={products} onShow={onShow}/>
        {show ? <Carrito dataCarrito={carrito} onShow={onShow} setPlus={setPlus} deleteOrder={deleteOrder} /> : null}
        
    </>
}

export default UserPortfoliond;