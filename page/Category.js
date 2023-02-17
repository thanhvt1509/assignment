import { useEffect, useState } from "../lib"
const Category = ({ category, onClick }) => {
    useEffect(() => {
        const btns = document.querySelectorAll('.btn-category');
        for (const btn of btns) {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                const id = btn.dataset.id;
                onClick(id)
            })
        }
    }, [category, onClick])
    return `
    <div class="row">
        <div class="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
        <ul id="portfolio-flters">
            <a class="btn-category" data-id="0">All</a>
            ${category.map((item) => `
                        <a class="btn-category" data-id="${item.id}">${item.name}</a>
                        `
    ).join('')}
        </ul>
        </div>
    </div>
    `

}

export default Category
