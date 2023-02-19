import About from "../compoments/About"
import Banner from "../compoments/Banner"
import Contact from "../compoments/Contact"
import Menu from "../compoments/Menu"
import Skill from "../compoments/Skill"
import Category from "./Category"
import ProjectPage from "./ProjectPage"

const HomePage = () => {
    return `
        ${Menu()}
        ${Banner()}
        ${About()}
        ${Skill()}
        
        ${ProjectPage()}
        ${Contact()}
    `
}
export default HomePage