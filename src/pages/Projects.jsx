import PageContainer from "../components/PageContainer";
import ProjectCard from "../components/ProjectCard";
import IMAGES from "../assets/Images";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrementByAmount } from "../state/slices/counterSlice";
import Button from "../components/Button";
function Projects() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const services = [
    {
      title: "Website Development",
      text: "we develop Web apps, and websites for ",
      icon: "web",
    },
    {
      title: "Mobile App development",
      text: "companies and for individuals with SEO optimization, with Attractive UI/UX design, Responsive design",
      icon: "mobile",
    },
    {
      title: "Website Development",
      text: " for companies and for individuals with SEO optimization, with Attractive UI/UX desig",
      icon: "training",
      height: "200",
    },
    {
      title: "Website Development",
      text: "we develop Web appsptimization, with Attractive UI/UX design, Responsive design",
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
          text={project.text}
          icon={project.icon}
          width={project?.width}
        />
      ))}
      {/* <Button /> */}
      {/* <button onClick={() => dispatch(increment())}>count: {count}</button> */}
    </PageContainer>
  );
}

export default Projects;
