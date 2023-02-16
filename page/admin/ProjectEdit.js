import { useEffect, useState, router } from "../../lib"
const AdminProjectEdit = ({ id }) => {
    const [projects, setProject] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/project/${id}`)
            .then((Response) => Response.json())
            .then((data) => setProject(data))
    }, [])

    useEffect(() => {
        const projectForm = document.querySelector('#project-form');
        const projectName = document.querySelector('.project-name');


        projectForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const dataForm = {
                name: projectName.value
            }

            fetch(`http://localhost:3000/projects/${id}`, {
                method: "PUT",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(dataForm)
            }).then(() => router.navigate('/admin/projects'))
        })
    })
    return `
    <h1>Sửa thông tin dự án</h1>
        <form id="project-form">
            <div>
                <label>Tên dự án</label>
                <input type="text" class="project-name" value="${projects.name}">
                <button class="btn">Cập nhật</button>
            </div>
        </form>
    `
}

export default AdminProjectEdit