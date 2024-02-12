
export default function Footer() {
  return (
    <>
    <section className="section newsletter" aria-label="newsletter">
     <div className="container">
       <figure className="newsletter-banner img-holder">
         <img src="./images/newsletter-banner.png" width={303} height={381} alt="newsletter banner" className="w-100" />
       </figure>
       <div className="newsletter-content">
         <h2 className="h2 section-title">اشترك معنا<br/> ليصلك كل جديد</h2>
         <form action className="newsletter-form">
           <input type="email" name="email_address" placeholder="Enter Your Email" aria-label="email" className="email-field" />
           <button type="submit" className="newsletter-btn">اشترك الأن</button>
         </form>
       </div>
     </div>
   </section>

   <footer className="footer">
     <div className="container">
       <div className="footer-top section">
         <div className="footer-brand">
           <a href="#" className="logo">WSN</a>
           <p className="footer-text">
                <span>تواصل معنا عبر مواقع<br />  التواصل الاجتماعي <br />+966582729834 </span>
           </p>
            <div className="flex flex-wrap justify-center gap-2">
  <button className="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
    <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
  </button>
  <button className="bg-blue-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
    <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
  </button>
  <button className="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
    <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" /></svg>
  </button>
  <button className="bg-pink-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
    <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" /></svg>
  </button>
  <button className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
    <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055" /></g>
    </svg>
  </button>
  <button className="bg-red-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
    <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" /></svg>
  </button>
  <button className="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
      <g fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="currentColor" /></g>
    </svg>
  </button>
  <button className="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z" fill="currentColor" /></g></svg>
  </button>
</div>

         </div>
         <ul className="footer-list">
           <li>
             <p className="footer-list-title">اوصل اسرع</p>
           </li>
           <li>
                <a href="#" className="footer-link">سرعة الرد</a>
           </li>
           <li>
                <a href="#" className="footer-link">دعم فني 24/7</a>
           </li>
           <li>
                <a href="#" className="footer-link">ماكينات حديثة</a>
           </li>
           <li>
                <a href="#" className="footer-link">تجربة</a>
           </li>
           <li>
                <a href="#" className="footer-link">اكتشف</a>
           </li>
         </ul>
         <ul className="footer-list">
           <li>
             <p className="footer-list-title">الخدمات</p>
           </li>
           <li>
                <a href="#" className="footer-link">خدمات النقل للشركات</a>
           </li>
           <li>
                <a href="#" className="footer-link">الاستشارات اللوجستية</a>
           </li>
           <li>
                <a href="#" className="footer-link">نقل سريع وأمن</a>
           </li>
         
         </ul>
         <ul className="footer-list">
           <li>
             <p className="footer-list-title">الدعم</p>
           </li>
           <li>
                <a href="#" className="footer-link"> الأسعار</a>
           </li>
           <li>
                <a href="#" className="footer-link">الفروع</a>
           </li>
           <li>
                <a href="#" className="footer-link">الوظائف</a>
           </li>
           <li>
                <a href="#" className="footer-link">المملكة العربية السعودية - الرياض</a>
           </li>
           <li>
                <a href="#" className="footer-link">الشروط والأحكام</a>
           </li>
         </ul>
       </div>
       <div className="footer-bottom">
         <p className="copyright">
           © 2024 WSN. All Rights Reserved by <a href="#" className="copyright-link">A.M</a>
         </p>
       </div>
     </div>
   </footer>
    </>
      );
    }
    
    // <MDBFooter bgColor="light" className="text-center text-lg-start text-muted" style={{ direction: "rtl" }}>
    //   <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    //     <div className="me-5 d-none d-lg-block">
    //       <span>تواصل معنا عبر مواقع التواصل الاجتماعي </span>
    //     </div>

    //     <div className=" d-flex">
    //       <a href="" className="me-4 text-reset">
    //         <MDBIcon color="secondary" fab icon="facebook-f" />
    //       </a>
    //       <a href="" className="me-4 text-reset">
    //         <MDBIcon color="secondary" fab icon="twitter" />
    //       </a>
    //       <a href="" className="me-4 text-reset">
    //         <MDBIcon color="secondary" fab icon="google" />
    //       </a>
    //       <a href="" className="me-4 text-reset">
    //         <MDBIcon color="secondary" fab icon="instagram" />
    //       </a>
    //       <a href="" className="me-4 text-reset">
    //         <MDBIcon color="secondary" fab icon="linkedin" />
    //       </a>
    //       <a href="" className="me-4 text-reset">
    //         <MDBIcon color="secondary" fab icon="github" />
    //       </a>
    //     </div>
    //   </section>

    //   <section className="">
    //     <MDBContainer className="text-center text-md-start mt-5">
    //       <MDBRow className="mt-3">
    //         <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
    //           <h6 className="text-uppercase fw-bold mb-4">
    //             <MDBIcon color="secondary" icon="gem" className="me-3" />
    //             وســن الابداع للخدمــات اللوجستية
    //           </h6>
    //           <p>
    //             عبر عن ثقتك في رحلتك معنا، فنحن نؤمن بتقديم خدمة تتميز بالجودة والسرعة، حيث تجتمع الحرفية والتفاني لنقدم
    //             لك تجربة فريدة ومتميزة في عالم النقل.
    //           </p>
    //         </MDBCol>

    //         <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
    //           <h6 className="text-uppercase fw-bold mb-4">Products</h6>
    //           <p>
    //             <a href="#!" className="text-reset">
    //               النقل البري
    //             </a>
    //           </p>
    //           <p>
    //             <a href="#!" className="text-reset">
    //               خدمات النقل للشركات
    //             </a>
    //           </p>
    //           <p>
    //             <a href="#!" className="text-reset">
    //               الاستشارات اللوجستية
    //             </a>
    //           </p>
    //           <p>
    //             <a href="#!" className="text-reset">
    //               نقل سريع وأمن
    //             </a>
    //           </p>
    //         </MDBCol>

    //         <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
    //           <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
    //           <p>
    //             <a href="#!" className="text-reset">
    //               الأسعار
    //             </a>
    //           </p>
    //           <p>
    //             <a href="#!" className="text-reset">
    //               الفروع 
    //             </a>
    //           </p>
    //           <p>
    //             <a href="#!" className="text-reset">
    //               الوظائف
    //             </a>
    //           </p>
    //           <p>
    //             <a href="#!" className="text-reset">
    //               الدعم الفني
    //             </a>
    //           </p>
    //         </MDBCol>

    //         <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
    //           <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
    //           <p>
    //             <MDBIcon color="secondary" icon="home" className="me-2" />
    //            المملكة العربية السعودية - الرياض
    //           </p>
    //           <p>
    //             <MDBIcon color="secondary" icon="envelope" className="me-3" />
    //             info@example.com
    //           </p>
    //           <p>
    //             <MDBIcon color="secondary" icon="phone" className="me-3" /> +966582729834
    //           </p>
             
    //         </MDBCol>
    //       </MDBRow>
    //     </MDBContainer>
    //   </section>

    //   <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
    //     © 2024 Copyright: MS
    //   </div>
    // </MDBFooter>