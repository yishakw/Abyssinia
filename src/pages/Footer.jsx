import { Children } from "react";
function Footer() {
  function FooterComponent({ children, header, classes }) {
    return (
      <div className={classes}>
        <h1 className="text-xl my-3">{header}</h1>
        {children}
      </div>
    );
  }
  return (
    <footer className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 py-11 bg-slate-950 bg-opacity-90 text-amber-900 px-11">
      <FooterComponent header={"Newsletter"} classes={"col-span-2"}>
        <p className="mb-2">Subscribe to our news letter</p>
        <form
          action="submit"
          className="bg-slate-700 h-14 p-[6px] w-64 flex rounded-full sm:w-80 sm:justify-between"
        >
          <input
            type="email"
            className="border-none bg-transparent active:border-none "
          />
          <button className="text-amber-600 bg-sky-950 py-2 px-3 flex items-center rounded-full">
            signup
          </button>
        </form>
      </FooterComponent>
      <FooterComponent header={"Products"}>
        <ul className="list-none ">
          <li>ERP system</li>
          <li>School Information System</li>
          <li>Building/mall Management System</li>
          <li>Inverntory System</li>
          <li>POS system</li>
        </ul>
      </FooterComponent>
      <FooterComponent header={"Explore"}>
        <ul>
          <li>Home</li>
          <li>Our Service</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </FooterComponent>
      <FooterComponent header={"Contact Info"}>
        <p>
          Addis Ababa, Bole Wollo Sefer,gorgoriwos Adebabay infront of Tsedey
          Bank 242 Building 4th floor
        </p>
        <p>Phone: 0940637672, 0951050364</p>
        <p>Email: abyssiniasoftware1@gmail.com</p>
      </FooterComponent>
      {/* <FooterComponent header={"Subscription"}>
        <p>
          Subscribe to our SAS service to get business software at low price
          with free upgrading, technical support, free training, and free
          maintenance.
        </p>
      </FooterComponent> */}
      <FooterComponent>
        <p>Abyssinia Software Solutions,All rights reserved</p>
      </FooterComponent>
    </footer>
  );
}

export default Footer;
