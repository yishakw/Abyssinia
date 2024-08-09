import PageContainer from "../components/PageContainer";
import ProjectCard from "../components/ProjectCard";
import IMAGES from "../assets/Images";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrementByAmount } from "../state/slices/counterSlice";
function Projects() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const services = [
    {
      title: "Website Development",
      text: "we develop Web apps, and websites for companies and for individuals with SEO optimization, with Attractive UI/UX design, Responsive design",
      icon: "web",
    },
    {
      title: "Mobile App development",
      text: "We develop IOS and Android mobile apps. with free and unlimited technical support. with responsive design and attractive UI/UX design",
      button: "Read More",
      icon: "mobile",
    },
    {
      title: "Website Development",
      text: "we develop Web apps, and websites for companies and for individuals with SEO optimization, with Attractive UI/UX design, Responsive design",
      icon: "training",
      height: "200",
    },
    {
      title: "Website Development",
      text: "we develop Web apps, and websites for companies and for individuals with SEO optimization, with Attractive UI/UX design, Responsive design",
      icon: "training",
    },
  ];
  return (
    <PageContainer
      title="Our Projects"
      subtitle="Explore Our Latest Projects"
      numGrid={3}
    >
      {services.map((project, i) => (
        <ProjectCard
          key={i}
          k={i}
          title={project.title}
          text={project.subtitle}
          icon={project.icon}
          width={project?.width}
        />
      ))}
      {/* <button onClick={() => dispatch(increment())}>count: {count}</button> */}
    </PageContainer>
  );
}

export default Projects;
