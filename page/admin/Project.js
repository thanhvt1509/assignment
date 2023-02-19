import { useState, useEffect } from "../../lib"
const AdminProject = () => {
    const [projects, setProject] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/projects')
            .then((Response) => Response.json())
            .then((data) => setProject(data))
    }, [])

    // xóa dự án
    useEffect(() => {
        // khai báo ra tất cả các button xóa
        const btnRemoves = document.querySelectorAll('.btn-remove');
        // chạy vòng lặp để tìm ra btn đã đc ấn
        for (let btnRemove of btnRemoves) {
            // lắng nghe sự kiện đã click vào
            btnRemove.addEventListener('click', () => {
                // khai báo ra biến projectId rồi gán giá trị dựa theo data-id bên dưới
                const projectId = btnRemove.dataset.id;
                // kết nối với api rồi sử dụng phương thức delete để xóa
                fetch(`http://localhost:3000/projects/${projectId}`, {
                    method: 'DELETE'
                }).then(() => {
                    // tạo 1 biến newProject mới rồi lọc ra id đã xóa
                    const newProject = projects.filter((project) => project.id != projectId)
                    // set lại dữ liệu để hiể thị ra ngoài
                    setProject(newProject);
                })
            })

        }
    })
    return `
        <div class="container">
        <table  class="table table-bordered">
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th><a href="/admin/projects/add">Thêm</a></th>
                </tr>
            </thead>
            ${projects.map(function (project, index) {
        return `
                            <tr>
                                <td>${index + 1}</td>
                                <td>${project.name}</td>
                                <td>
                                <button data-id="${project.id}" class="btn-remove btn btn-danger">Xóa</button>
                                <a class="btn btn-info" href="/admin/projects/${project.id}/detail" >Xem chi tiết</a>
                                <a class="btn btn-primary" href="/admin/projects/${project.id}/edit">Cập nhật</a>
                                </td>
                            </tr>
                        `
    }).join("")}
        </table>
    </div>
    `
}

export default AdminProject