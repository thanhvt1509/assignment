import { router, useEffect } from "../../lib"
const AdminProjectAdd = () => {
    useEffect(() => {
        const projetForm = document.getElementById('project-form');
        const projectName = document.querySelector('.project-name');

        projetForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = {
                name: projectName.value
            }

            fetch('http://localhost:3000/projects', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            }).then(() => router.navigate('/admin/projects'))

        })
    })
    return `
        <h1>Thêm dự án</h1>
        <form id="project-form">
            <div>
                <label>Tên dự án</label>
                <input class="project-name" type="text">
            </div>
            <button>Thêm</button>
        </form>
    `
}

export default AdminProjectAdd