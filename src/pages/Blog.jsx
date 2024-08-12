import { useEffect } from "react";
import PageContainer from "../components/PageContainer";
import axios from "axios";
import BlogsCard from "../components/BlogsCard";
function Blog() {
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://www.googleapis.com/blogger/v3/blogs/2399953?key="AIzaSyAAte1YQtqobEmlc7EQwbVSb7yXF2-WNeo";`
  //     )
  //     .then((res) => console.log(res))
  //     .catch((err) => console.error(err));
  // }, []);
  return (
    <PageContainer
      title="Our Blogs"
      subtitle="Latest Articles & News from the Blogs"
      bg="black"
    >
      <div className="flex flex-col  mt-7">
        <BlogsCard
          icon="black"
          text="We are thrilled to announce the launch of our latest innovative software at Abyssinia Software..."
          button="Explore more"
        />
        <BlogsCard
          icon="car"
          text="We are thrilled to announce the launch of our latest innovative software..."
          button="Explore more"
        />
        {/* <BlogsCard
            icon="sqr"
            text="We are thrilled to announce the launch of our latest innovative software at Abyssinia Software Solutions. Designed to meet the evolving needs of businesses in various industries, our new software solution offers advanced features and functionalities to drive growth and success. Key features of out."
            button="Explore more"
          />
          */}
      </div>
    </PageContainer>
  );
}

export default Blog;
