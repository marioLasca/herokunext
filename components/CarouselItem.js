const CarouselItem = (props) => {
    
    return <>
        {
            props.products.map(p => {
                return <div className="carousel__item" key={p.id}>
                    <img className="carousel__item__img" src={p.imgurl} alt="" />
                    <div className="carousel__item__details">
                        <button href="#"  onClick={() => props.onShow(p)}  > + 
                        </button>
                        <p className="carousel__item__details--title">
                            {p.name} <br/>
                            {p.value}
                        </p>
                    </div>
                </div>
            })
        }
    </>

};


export default CarouselItem;