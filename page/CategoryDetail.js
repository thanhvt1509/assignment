import { useState, useEffect } from "../lib"
const CategoryDetail = ({ id }) => {
    const [category, setCategory] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3000/category/${id}?_embed=projects`)
            .then((response) => response.json())
            .then((data) => setCategory(data))
    }, [])
    return `
        ${category.projects ?
            category.projects.map((item) => {
                return `
                <h1>${item.name}</h1>
            `

            }).join("") : ''}
    `
}
export default CategoryDetail