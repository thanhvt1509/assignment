import { render, router } from "./lib";
import AdminProject from "./page/admin/Project";
import AdminProjectAdd from "./page/admin/ProjectAdd";
import AdminProjectEdit from "./page/admin/ProjectEdit";
import "bootstrap/dist/css/bootstrap.min.css";
import Category from "./page/Category";
import CategoryDetail from "./page/CategoryDetail";
import ProjectPage from "./page/ProjectPage";
import HomePage from "./page/HomePage";
const app = document.querySelector('#app');

router.on("/", () => render(HomePage, app));

// router.on("/category", () => render(Category, app));
router.on("/#portfolio/:id", (({ data }) => render(() => CategoryDetail(data), portfolio)));
// router.on("/#portfolio", () => render(ProjectPage, portfolio));

router.on("/admin/projects", () => render(AdminProject, app));
router.on("/admin/projects/add", () => render(AdminProjectAdd, app));
router.on("admin/projects/:id/edit", ({ data }) => render(() => AdminProjectEdit(data), app))

router.resolve();



