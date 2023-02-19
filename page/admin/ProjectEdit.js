import { useEffect, useState, router } from "../../lib"
import axios from "axios";
const AdminProjectEdit = ({ id }) => {
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

    useEffect(() => {
        const projectForm = document.querySelector('#project-form');
        const projectName = document.querySelector('.project-name');
        const projectLanguage = document.querySelector('.project-language');
        const projectLinkGit = document.querySelector('.project-link-git');
        const projectDescription = document.querySelector('.project-description');
        const projectLinkWeb = document.querySelector('.project-link-web');

        const projectCategory = document.querySelector('.project-category');

        const projectImage = document.querySelector('.project-image');
        const projectAlbum = document.querySelector('.project-album');


        projectForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const urls = await uploadFile(projectAlbum.files)
            const url = await uploadAvatar(projectImage.files)
            // console.log(url, urls)
            const dataForm = {
                name: projectName.value,
                language: projectLanguage.value,
                link_git: projectLinkGit.value,
                link_web: projectLinkWeb.value,
                description: projectDescription.value,
                album: urls,
                avatar: url,
                categoryId: projectCategory.value

            }

            fetch(`http://localhost:3000/projects/${id}`, {
                method: "PUT",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(dataForm)
            }).then(() => router.navigate('/admin/projects'))
        })
        const uploadAvatar = async (files) => {
            if (files) {

                const CLOUD_NAME = "dqpcsc4yl";
                const PRESET_NAME = "assignment";
                const url = [];
                const FOLDER_NAME = "assignment";
                const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
                const formData = new FormData();

                formData.append("upload_preset", PRESET_NAME);
                formData.append("folder", FOLDER_NAME);


                for (const file of files) {
                    formData.append("file", file);
                    const response = await axios
                        .post(api, formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                            },

                        })
                    url.push(response.data.secure_url)

                    // fetch(`https://api.cloudinary.com/v1_1/dqpcsc4yl/image/upload`, {
                    //     method: "POST",
                    //     body: formData
                    // }).then(response => console.log(response.secure_url))
                    // urls.push(api);
                    // console.log(urls)
                }
                return url
            }
        }

        const uploadFile = async (files) => {
            const CLOUD_NAME = "dqpcsc4yl";
            const PRESET_NAME = "assignment";
            const urls = [];
            const FOLDER_NAME = "assignment";
            const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
            const formData = new FormData();

            formData.append("upload_preset", PRESET_NAME);
            formData.append("folder", FOLDER_NAME);

            for (const file of files) {
                formData.append("file", file);
                const response = await axios
                    .post(api, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },

                    })
                urls.push(response.data.secure_url)

            }
            return urls
        }
    })
    return `
    <div class="container">
    
    <h1>Sửa thông tin dự án</h1>
        <form id="project-form">
            <div class="form-group">
                <label>Tên dự án</label>
                <input type="text" class="project-name form-control" value="${projects.name}">
            </div>
            <div  class="form-group mb-3">
                <label>Ngôn ngữ</label>
                <input type="text" class="project-language form-control" value="${projects.language}" >
            </div>
            <div  class="form-group mb-3">
                <label>Link project</label>
                <input class="project-link-git form-control" value="${projects.link_git}" type="text">
            </div>
            <div  class="form-group mb-3">
                <label>Link website</label>
                <input class="project-link-web form-control" value="${projects.link_web}" type="text" >
            </div>
            <div  class="form-group mb-3">
                <label>Mô tả</label>
                <textarea class="form-control project-description" >${projects.description}</textarea>
            </div>
            <div  class="form-group mb-3">
                <label>Ảnh đại diện</label>
                <img width="500px" src="${projects.avatar}" >
                <input type="file" class="form-control" class="project-image" >
            </div>
            <div class="form-group mb-3">
                <label>Album ảnh</label>
                ${projects.album ?
            projects.album.map((item) => `<img src="${item}" >`).join('') : ''}
                <input type="file" multiple class="form-control project-album" >
                    
            </div>
            <div  class="form-group mb-3">
            <label>Danh mục</label>
            <select class="form-select project-category">
            ${category.map((item) => {
                return `
                    <option ${projects.categoryId == item.id ? 'selected' : ''} value="${item.id}">${item.name}</option>
                `
            }).join('')}
                </select>
            </div>
            <button class="btn btn-primary">Cập nhật</button>
            <a href="/admin/projects" class="btn btn-success">Back</a>
        </form>
    </div>
    `
}

export default AdminProjectEdit




