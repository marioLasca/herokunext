import CarouselItem from "./CarouselItem"

const Carousel = (props) => {

    var category = [];
    let aux = "";

    props.products.map(p => {
        if (aux !== p.category) {
            category.push({ "cat": p.category })
            aux = p.category;
        }
    })

    return <div className="bodyportfolio">
        {
            category.map(
                (c) => {
                    const p = props.products.filter(pr => pr.category == c.cat);
                    
                    return <div key={c.cat}>
                        <h2>{c.cat}</h2>
                        <div className="carousel" >
                            <div className="carousel__container">
                                <CarouselItem  onShow={props.onShow}  products={p} category={c.cat}/>
                            </div>
                        </div>
                    </div>
                }
            )

        }


    </div>
};


export default Carousel;