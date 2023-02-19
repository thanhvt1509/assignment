import { useEffect, useState } from "../lib"
import Category from "./Category";

const ProjectPage = () => {
    const [projects, setProject] = useState([]);
    const [category, setCategory] = useState([]);
    const [projectInCategory, setProjectInCategory] = useState([])
    const [id, setId] = useState(null)
    useEffect(() => {
        fetch('http://localhost:3000/projects')
            .then((Response) => Response.json())
            .then((data) => setProjectInCategory(data))
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/category")
            .then((Response) => Response.json())
            .then((data) => setCategory(data))
    }, []);
    useEffect(() => {
        // console.log(1);
        // (async () => {
        //     const data = await (await fetch(`http://localhost:3000/category/${id}?_embed=projects`)).json();
        //     setProjectInCategory(data.projects)
        // })()
    }, [id])
    const onHandleClick = async (id) => {
        if (id != 0) {

            const data = await (await fetch(`http://localhost:3000/category/${id}?_embed=projects`)).json();
            console.log(data)
            setProjectInCategory(data.projects)
        } else {
            fetch('http://localhost:3000/projects')
                .then((Response) => Response.json())
                .then((data) => setProjectInCategory(data))
        }
        // fetch(`http://localhost:3000/category/${id}?_embed=projects`)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('data', data)
        //         setProjectInCategory(data.projects)
        //     })
    }
    return `
        <section id="portfolio" class="portfolio section-bg">
        <div class="container" data-aos="fade-up">

        <div class="section-title">
            <h2>Project</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
            in iste officiis commodi quidem hic quas.</p>
        </div>

        ${Category({ category, onClick: onHandleClick })}

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
            ${projectInCategory.map((item) => `
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div class="portfolio-wrap">
                        <img src="${item.avatar}" class="img-fluid" alt="">
                        <div class="portfolio-info">
                        <h4>App 1</h4>
                        <p>App</p>
                        <div class="portfolio-links">
                            <a href="/project_detail/${item.id}" class="portfolio-details-lightbox" 
                            title="Portfolio Details"><i class="bx bx-link"></i></a>
                        </div>
                        </div>
                    </div>
                </div>
                 `
    ).join('')}
    </div>
            

    </section>
    `

}

export default ProjectPage