import PageContainer from "../components/PageContainer";
import ProjectCard from "../components/ProjectCard";
import IMAGES from "../assets/Images";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrementByAmount } from "../state/slices/counterSlice";
import Button from "../components/Button";
function Projects({ smFlex, numGrid = 2 }) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const projectsArray = [
    {
      title: "ERP System",
      text: "Complete ERP system for factories and Trading Campanies ",
      icon: "dash",
    },
    {
      title: "School Information System",
      text: "We provide a complete School Information System to manage All School Activities. It has Web app, Mobile App and desktop App from School Manager , for students and For parents",
      icon: "school",
    },
    {
      title: "Mall Informaton Management System",
      text: "we provide a complete Mall Information Management system with web application and Mobile application",
      icon: "mall",
      height: "200",
    },
  ];

  {
    `flex flex-col items-center justify-center gap-5 ${
      smFlex ? "" : "sm:grid  sm:grid-cols-2 sm:justify-center"
    } md:grid md:justify-between md:gap-14 md:grid-cols-${numGrid} my-11`;
  }
  return (
    <PageContainer
      title="Our Projects"
      subtitle="Explore Our Latest Projects"
      numGrid={3}
    >
      <div className="flex flex-col items-center justify-center mt-20 gap-9 sm:grid sm:grid-cols-2 sm:gap-10 sm:items-center sm:justify-center md:grid-cols-3 p-4 ">
        {projectsArray.map((project, i) => (
          <ProjectCard
            key={i}
            k={i}
            title={project.title}
            text={project.text}
            icon={project.icon}
            width={project?.width}
          />
        ))}
      </div>
      {/* <Button /> */}
      {/* <button onClick={() => dispatch(increment())}>count: {count}</button> */}
    </PageContainer>
  );
}

export default Projects;
