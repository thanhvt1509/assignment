import About from "../compoments/About"
import Banner from "../compoments/Banner"
import Contact from "../compoments/Contact"
import Skill from "../compoments/Skill"
import Category from "./Category"
import ProjectPage from "./ProjectPage"

const HomePage = () => {
    return `
        ${Banner()}
        ${About()}
        ${Skill()}
        
        ${ProjectPage()}
        ${Contact()}
    `
}
export default HomePage