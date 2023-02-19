import { useEffect, useState } from "../lib"

const ProjectDetail = ({ id }) => {
    const [project, setProject] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3000/projects/${id}`)
            .then(response => response.json())
            .then((data) => setProject(data))
    }, [])
    return `

    <main id="main">

    <section id="portfolio-details" class="portfolio-details">
    <div class="container">

        <div class="row gy-4">

            <div class="col-lg-8">
                <div class="portfolio-details-slider swiper">
                <div class="swiper-wrapper align-items-center">
                <div id="carouselExample" class="carousel slide carousel-fade" width="100%">
                <div class="carousel-inner">
                    ${project.album ?
            project.album.map((item) => {
                return `
                            <div class="carousel-item active">
                                <img src="${item}" class=" w-100" alt="..." >
                            </div>
                            >`
            }).join('') : ''}
                </div>
                <button style="color:#333" class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"  style="color:#333"></span>
                  <span class="visually-hidden"  style="color:#333">Previous</span>
                </button>
                <button style="color:#333" class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"  style="color:#333"></span>
                  <span class="visually-hidden" style="color:#333">Next</span>
                </button>
              </div>

                </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="portfolio-info">
                <h3>Project information</h3>
                <ul>
                    <li><strong>Name</strong>: ${project.name}</li>
                    <li><strong>Language</strong>: ${project.language}</li>
                    <li><strong>Project source</strong>: ${project.link_git}</li>
                    <li><strong>Project URL</strong>: <a href="${project.link_web}">${project.link_web}</a></li>
                </ul>
                </div>
                <div class="portfolio-description">
                <h2>This is an example of portfolio detail</h2>
                <p>
                    ${project.description}
                </p>
                </div>
            </div>

        </div>

    </div>
    </section>

</main>

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

        

    `
}
export default ProjectDetail