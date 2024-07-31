import PageContainer from "../components/PageContainer"
import ProjectCard from "../components/ProjectCard"
import IMAGES from "../assets/Images"
function Projects() {
  const services = [
    {title: "Website Development", text: "we develop Web apps, and websites for companies and for individuals with SEO optimization, with Attractive UI/UX design, Responsive design", icon:"web"}, {
      title:"Mobile App development", text:"We develop IOS and Android mobile apps. with free and unlimited technical support. with responsive design and attractive UI/UX design", button:"Read More", icon:"mobile"
    }
, {title: "Website Development", text: "we develop Web apps, and websites for companies and for individuals with SEO optimization, with Attractive UI/UX design, Responsive design", icon:"training"},
{title: "Website Development", text: "we develop Web apps, and websites for companies and for individuals with SEO optimization, with Attractive UI/UX design, Responsive design", icon:"security"},
  ]
  return (
    <PageContainer title="Our Projects" subtitle="Explore Our Latest Projects">
        {services.map((project, i) => 
        <ProjectCard key={i} title={project.title} text={project.subtitle} icon={project.icon} />
        )}
        
    </PageContainer>
  )
}

export default Projects
