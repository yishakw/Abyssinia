import Card from "../components/Card";
import PageContainer from "../components/PageContainer";
function Service({ smFlex }) {
  const services = [
    {
      title: "Website Development",
      text: "we develop Web apps, and websites for companies and for individuals with SEO optimization, with Attractive UI/UX design, Responsive design",
      icon: "web",
      st: "scale-150",
    },
    {
      title: "Mobile App development",
      text: "We develop IOS and Android mobile apps. with free and unlimited technical support. with responsive design and attractive UI/UX design",
      button: "Read More",
      icon: "mobile",
      st: "scale-150",
    },
    {
      title: "Software As a service",
      text: "We Have completed Software Used as Software AS service. ERP system , School System, Mall/building Information management system",
      icon: "saas",
      st: "",
    },

    {
      title: "General Technology Consulting",
      text: "We provide Technology consulting For Companies and Individuals, on Software development, hardware, Cyber technology and Networking",
      icon: "consult",
      st: "scale-125",
    },
    {
      title: "Software Development Training",
      text: "We provide Courses and Training in Software Technology, Digital Marketing, Graphics design and Networking. with FutureX educational consultancy",
      icon: "training",
      st: "scale-150",
    },
    {
      title: "Software Security Testing",
      text: "We have service of testing Software security and filling gaps, and we consult Secure Software development",
      icon: "security",
      st: "scale-110",
    },
  ];
  return (
    // <div className="h-[500px] flex flex-col text-amber-400 justify-center items-center m-4 bg-green-800 bg-opacity-35">
    //   <h1 className="text-[40px] text-amber-600 mb-7">Our Services</h1>
    //   <h2 className="text-xl text-center">Offering The Best High Quality Services</h2>
    //     <Card title="Website Development" text="we develop Web apps, and websites for companies and for individuals with SEO optimization, with Attractive UI/UX design, Responsive design" button="Read More"/>
    // </div>
    <PageContainer
      title="Our Services"
      subtitle="Offering The Best High Quality Services"
    >
      <div
        className={`flex flex-col items-center justify-center gap-5  ${
          smFlex ? "" : "sm:grid  sm:grid-cols-2 sm:justify-center"
        } md:grid md:justify-between md:gap-8 md:grid-cols-2 lg:grid-cols-3 my-11`}
      >
        {services.map((service, i) => (
          <Card
            title={service.title}
            key={i}
            text={service.text}
            button="Read More"
            icon={service.icon}
            indix={i}
            link_to={"/service"}
            img_style={service.st}
          />
        ))}
      </div>
    </PageContainer>
  );
}

export default Service;
