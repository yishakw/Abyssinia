import Card from "../components/Card"
import PageContainer from "../components/PageContainer"
function Service() {
  const services = [
    {title: "Website Development", text: "we develop Web apps, and websites for companies and for individuals with SEO optimization, with Attractive UI/UX design, Responsive design", icon:"web"}, {
      title:"Mobile App development", text:"We develop IOS and Android mobile apps. with free and unlimited technical support. with responsive design and attractive UI/UX design", button:"Read More", icon:"mobile"
    }

  ]
  return (
    // <div className="h-[500px] flex flex-col text-amber-400 justify-center items-center m-4 bg-green-800 bg-opacity-35">
    //   <h1 className="text-[40px] text-amber-600 mb-7">Our Services</h1>
    //   <h2 className="text-xl text-center">Offering The Best High Quality Services</h2>
    //     <Card title="Website Development" text="we develop Web apps, and websites for companies and for individuals with SEO optimization, with Attractive UI/UX design, Responsive design" button="Read More"/>
    // </div>
<PageContainer title="Our Services" subtitle="Offering The Best High Quality Services">
{services.map(service => <Card title={service.title} key={service.title} text={service.text} button="Read More" icon={service.icon}/>)

}
</PageContainer >
  )
}

export default Service
