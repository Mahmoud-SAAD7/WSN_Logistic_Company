import { useState } from "react";
import { NavLink } from "react-router-dom";

function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <div>
        <nav className="bg-blue-400 mainNav text-white  fixed  
                w-full z-10 top-0 left-0">
          <div className="max-w-9xl mx-auto shadow px-8">
            <div className="flex justify-between items-center">
              <div>
                <NavLink to="#" className="flex items-center text-white font-bold py-6 px-2">
                  <img
                    className="h-12 w-13  rounded-xl mr-3"
                    src="https://pbs.twimg.com/profile_images/1279692804244017164/v4a0K4Ly_400x400.jpg"
                    alt="Company Logo"
                  />
                  <span>WSN</span>
                </NavLink>
              </div>
              <div className="hidden md:flex items-center space-x-2" style={{ direction: "rtl" }}>
                <NavLink to="/" className="py-4 px-2 hover:bg-white/20 hover:text-blue-200">
                  الرئــيسة
                </NavLink>
                <NavLink to="/about" className="py-4 px-2 hover:bg-white/20 hover:text-blue-200">
                  من نحن
                </NavLink>
                <NavLink to="/services" className="py-4 px-2 hover:bg-white/20 hover:text-blue-200">
                  الـخدمات
                </NavLink>
                <NavLink to="/contact" className="py-4 px-2 hover:bg-white/20 hover:text-blue-200">
                  تواصل معنا
                </NavLink>
              </div>
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="mobile-btn py-2 px-2 text-blue-500 bg-yellow-300 hover:bg-blue-500 hover:text-yellow-300 transition duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="mobile-menu md:hidden bg-blue-300" style={{ direction: "rtl" }}>
              <NavLink to="/" className="block py-2 px-4 hover:bg-yellow-300">
                الرئــيسة
              </NavLink>
              <NavLink to="/about" className="block py-2 px-4 hover:bg-yellow-300">
                من نحن{" "}
              </NavLink>
              <NavLink to="/services" className="block py-2 px-4 hover:bg-yellow-300">
                الخدمات
              </NavLink>
              <NavLink to="/contact" className="block py-2 px-4 hover:bg-yellow-300">
                اتصل بنا
              </NavLink>
            </div>
          )}
        </nav>
        <section className="section hero" aria-label="home" id="home" style={{ backgroundImage: 'url("./images/hero-banner.jpg")' }}>
          <div className="container">
            <div className="hero-content">
              <h2 className="h1 hero-title">
                <span className="span">شــركة وسن</span> للنقل البري
              </h2>
              <p className="hero-text">
                شركة رائدة في مجال الخدمات اللوجيستية
              </p>
              <p className="hero-text">
                تواصل معنا علي
                <span className="mobileNumber">+966582729834 </span>
              </p>
              <a href="#" className="btn-outline">الخدمات</a>
              <img src="./images/hero-shape.png" width={116} height={116} loading="lazy" className="hero-shape shape-1" />
              <img src="./images/hero-shape.png" width={116} height={116} loading="lazy" className="hero-shape shape-2" />
            </div>
          </div>
        </section>

      </div>

    </>
  );
}

export default CustomNavbar;

// <div className="container-fluid">
//   <Navbar expand="lg" className="bg-body-tertiary h-14 font-bold" dir="rtl">
//     <Container>
//       <Navbar.Brand href="#home">
//         <img
//           style={{ width: "60px", height: "50px" }}
//           src="https://t3.ftcdn.net/jpg/05/18/35/42/360_F_518354210_8GX74cELLJN8Sh1JShKI90pKyHncgMbu.jpg"
//         />{" "}
//         شــركة وســن الابــداع للخدمات اللوجستية

//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="me-auto">
//           <Nav.Link href="#home">الرئــيسة </Nav.Link>
//           <Nav.Link href="#link">مــن نحــن</Nav.Link>
//           <NavDropdown title="الـخدمات" id="basic-nav-dropdown">
//             <NavDropdown.Item href="#action/3.1">الشـحن البري</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.2">التخليص الجمركــي</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.3">نـقل داخــلي</NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//           </NavDropdown>
//         </Nav>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
//   <Banner />
// </div>
