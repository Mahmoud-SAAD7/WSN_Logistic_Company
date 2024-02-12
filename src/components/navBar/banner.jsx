import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

export default function Banner() {
  return (
    <div className="container-fluid text-center">
      <h1 className="mb-5 bg-blue-300 p-3"> عندما يجتمع الأداء والفعالية: وسن الإبداع تغيّر مفهوم الشحن في المملكة العربية السعودية</h1>

      <MDBCarousel showControls showIndicators touch={false}>
        <MDBCarouselItem itemId={1}>
          <img
            src="https://www.szshipping.co/wp-content/uploads/2020/03/shutterstock_447486787-1024x684.jpg"
            className="d-block w-100"
            alt="..."
            style={{ height: "600px" }}
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <img
            src="https://cdn.visionlar.com/vs-lar-ws-prod/images/blogs/b290ef71-462a-452e-8ff3-33b5de7407d8.jpeg"
            className="d-block w-100"
            alt="..."
            style={{ height: "600px" }}
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img
            src="https://economyplus.s3-accelerate.amazonaws.com/2019/12/1577557081_493_1470807_landshipping.jpg"
            className="d-block w-100"
            alt="..."
            style={{ height: "600px" }}
          />
        </MDBCarouselItem>
      </MDBCarousel>
    </div>
  );
}
