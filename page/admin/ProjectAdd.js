import axios from "axios";
import { router, useEffect, useState } from "../../lib"
import Category from "../Category";
const AdminProjectAdd = () => {
    useEffect(() => {
        const projetForm = document.getElementById('project-form');
        const projectName = document.querySelector('.project-name');

        const projectLanguage = document.querySelector('.project-language');
        const projectLinkGit = document.querySelector('.project-link-git');
        const projectDescription = document.querySelector('.project-description');
        const projectLinkWeb = document.querySelector('.project-link-web');
        const projectCategory = document.querySelector('.project-category');


        const projectImage = document.querySelector('.project-image');
        // projectImage.addEventListener('change', (e) => {
        //     const file = e.target.files[0];
        //     console.log(file);
        // })
        const projectAlbum = document.querySelector('.project-album');
        // projectAlbum.addEventListener('change', (e) => {
        //     const file = e.target.files;
        //     console.log(file);
        // })
        projetForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const urls = await uploadFile(projectAlbum.files)
            const url = await uploadAvatar(projectImage.files)
            const formData = {
                name: projectName.value,
                album: urls,
                avatar: url,
                language: projectLanguage.value,
                link_git: projectLinkGit.value,
                description: projectDescription.value,
                link_web: projectLinkWeb.value,
                categoryId: projectCategory.value
            }
            fetch('http://localhost:3000/projects', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
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
            if (files) {

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

                    // fetch(`https://api.cloudinary.com/v1_1/dqpcsc4yl/image/upload`, {
                    //     method: "POST",
                    //     body: formData
                    // }).then(response => console.log(response.secure_url))
                    // urls.push(api);
                    // console.log(urls)
                }
                return urls
            }
        }
    })
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/category`)
            .then(response => response.json())
            .then(data => setCategory(data))
    }, [])

    return `
    <div class="container"> 
        <h1>Thêm dự án</h1>
        
        
        <form id="project-form">
            <div class="form-group mb-3">
                <label>Tên dự án</label>
                <input class="project-name form-control" type="text">
            </div>
            <div  class="form-group mb-3">
                <label>Ngôn ngữ</label>
                <input class="project-language form-control" type="text">
            </div>
            <div class="form-group mb-3">
                <label>Ảnh đại diện</label>
                <input type="file" class="project-image form-control">
            </div>
            <div class="form-group mb-3" >
                <label>Album ảnh</label>
                <input type="file" class="project-album form-control"  multiple>
            </div>
            <div  class="form-group mb-3">
                <label>Link project</label>
                <input class="project-link-git form-control" type="text">
            </div>
            <div  class="form-group mb-3">
                <label>Link website</label>
                <input class="project-link-web form-control" type="text">
            </div>
            <div  class="form-group mb-3">
            <label>Danh mục</label>
            <select class="form-select project-category">
            ${category.map((item) => {
        return `
                    <option value="${item.id}">${item.name}</option>
                `
    }).join('')}
                </select>
            </div>
            <div  class="form-group mb-3">
                <label>Mô tả</label>
                <textarea class="form-control project-description"></textarea>
            </div>
            <button class="btn btn-primary">Thêm</button>
        </form>
        </div>
    `
}

export default AdminProjectAdd