import { useEffect, useState } from "../../lib";

const AdminProjectDetail = ({ id }) => {
    const [projects, setProject] = useState({});
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/projects/${id}`)
            .then((Response) => Response.json())
            .then((data) => setProject(data))

    }, [])

    useEffect(() => {
        fetch(`http://localhost:3000/category`)
            .then((Response) => Response.json())
            .then((data) => setCategory(data))
    }, [])

    const showImage = ({ album }) => {
        for (const image of album) {
            return `<img src="${image}" alt="">`;
        }
    }

    return `
    <div class="container mb-3">
    <h1>Thông tin dự án</h1>
        <form id="project-form">
            <div class="form-group">
                <label>Tên dự án</label>
                <input type="text" class="project-name form-control" value="${projects.name}" disabled>
            </div>
            <div  class="form-group mb-3">
                <label>Ngôn ngữ</label>
                <input class="project-language form-control" value="${projects.language}" type="text" disabled>
            </div>
            <div  class="form-group mb-3">
                <label>Link project</label>
                <input class="project-language form-control" value="${projects.link_git}" type="text" disabled>
            </div>
            <div  class="form-group mb-3">
                <label>Link website</label>
                <input class="project-language form-control" value="${projects.link_web}" type="text" disabled>
            </div>
            <div  class="form-group mb-3">
                <label>Mô tả</label>
                <textarea class="form-control project-description" disabled>${projects.description}</textarea>
            </div>
            <div  class="form-group mb-3">
                <label>Ảnh đại diện</label>
                <img width="500px" src="${projects.avatar}" >
            </div>
            <div class="form-group mb-3">
                <label>Album ảnh</label>
                ${projects.album ?
            projects.album.map((item) => `<img src="${item}" >`).join('') : ''}
            </div>
            <div  class="form-group mb-3">
            <label>Danh mục</label>
            <select class="form-select project-category" disabled>
            ${category.map((item) => {
                return `
                    <option ${projects.categoryId == item.id ? 'selected' : ''} value="${item.id}">${item.name}</option>
                `
            }).join('')}
                </select>
            </div>
        </form>
        <a href="/admin/projects" class="btn btn-success">Back</a>
    </div>
    `

}
export default AdminProjectDetail