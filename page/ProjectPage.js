import { useEffect, useState } from "../lib"
import Category from "./Category";

const ProjectPage = () => {
    const [projects, setProject] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/projects')
            .then((Response) => Response.json())
            .then((data) => setProject(data))
    }, []);

    return `
        <section id="portfolio" class="portfolio section-bg">
        <div class="container" data-aos="fade-up">

        <div class="section-title">
            <h2>Project</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
            in iste officiis commodi quidem hic quas.</p>
        </div>

        ${Category()}

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
            ${projects.map((item) => {
        return `
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div class="portfolio-wrap">
                        <img src="" class="img-fluid" alt="">
                        <h1>${item.name}</h1>
                        <div class="portfolio-info">
                        <h4>App 1</h4>
                        <p>App</p>
                        <div class="portfolio-links">
                            <a href="" data-gallery="portfolioGallery"
                            class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external"
                            title="Portfolio Details"><i class="bx bx-link"></i></a>
                        </div>
                        </div>
                    </div>
                </div>
                
                `
    }).join('')}
    </div>
            

    </section>
    `

}

export default ProjectPage