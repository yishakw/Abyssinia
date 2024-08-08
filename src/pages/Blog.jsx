import { useEffect } from "react";
import PageContainer from "../components/PageContainer";
import axios from "axios";
function Blog() {
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/blogger/v3/blogs/2399953?key="AIzaSyAAte1YQtqobEmlc7EQwbVSb7yXF2-WNeo";`
      )
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }, []);
  return (
    <PageContainer
      title="Our Blogs"
      subtitle="Latest Articles & News from the Blogs"
    >
      <div className=" ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </PageContainer>
  );
}

export default Blog;
