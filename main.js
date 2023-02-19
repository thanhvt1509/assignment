import { render, router } from "./lib";
import AdminProject from "./page/admin/Project";
import AdminProjectAdd from "./page/admin/ProjectAdd";
import AdminProjectEdit from "./page/admin/ProjectEdit";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Category from "./page/Category";
import CategoryDetail from "./page/CategoryDetail";
import ProjectPage from "./page/ProjectPage";
import HomePage from "./page/HomePage";
import ProjectDetail from "./page/ProjectDetail";
import AdminProjectDetail from "./page/admin/ProjectDetail";
const app = document.querySelector('#app');
// const portfolio = document.querySelector('#portfolio')
router.on("/", () => render(HomePage, app));

router.on("/project_detail/:id", (({ data }) => render(() => ProjectDetail(data), app)));
router.on("/portfolio/:id", (({ data }) => render(() => CategoryDetail(data), app)));
// router.on("/#portfolio", () => render(ProjectPage, portfolio));

router.on("/admin/projects", () => render(AdminProject, app));
router.on("/admin/projects/add", () => render(AdminProjectAdd, app));
router.on("admin/projects/:id/edit", ({ data }) => render(() => AdminProjectEdit(data), app))
router.on("admin/projects/:id/detail", ({ data }) => render(() => AdminProjectDetail(data), app))

router.resolve();



