import { useEffect, useState } from "../lib"
const Category = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/category")
            .then((Response) => Response.json())
            .then((data) => setCategory(data))
    }, [])
    return `
    <div class="row">
        <div class="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
        <ul id="portfolio-flters">
            <a href="/#portfolio">All</a>
            ${category.map((item) => {
        return `
                <a href="/#portfolio/${item.id}">${item.name}</a>
                `
    }).join('')}
        </ul>
        </div>
    </div>
    `

}

export default Category
