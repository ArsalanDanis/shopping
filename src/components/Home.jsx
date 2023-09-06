import Footer from "./Footer";
import ClothsList from "./clothsList";
import Carousel from "./crousel";
import ScrollableImage from "./scrolImage";
import { SubFooter } from "./Footer";
import { ToastContainer } from "react-toastify";





const Home = () => {
  return (
    <>
      <div className=" min-h-screen">
        <div className="bg-[#caf393] py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              Welcome to Our Online Store
            </h1>
            <p className="text-xl text-gray-600">
              Discover a wide range of products for all your shopping needs.
            </p>
          </div>
        </div>
        <Carousel />
        <img src="https://sslimages.shoppersstop.com/sys-master/root/hfe/hac/30720605749278/Whats-Trending-In_strips-web_210823.jpg" alt="" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 max-w-screen-xl mx-auto">
          <div className="group relative">
            <img
              src="https://t3.ftcdn.net/jpg/02/41/43/18/360_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg"
              alt="Product 1"
              className="w-full h-60 object-cover rounded-lg shadow-md transition-transform transform group-hover:scale-110"
            />
          </div>
          <div className="group relative">
            <img
              src="https://thumbs.dreamstime.com/b/amazing-beautiful-cheerful-girl-happily-poses-light-background-close-portrait-curly-lady-shopping-bags-186150727.jpg"
              alt="Product 2"
              className="w-full h-60 object-cover rounded-lg shadow-md transition-transform transform group-hover:scale-110"
            />
          </div>
          <div className="group relative">
            <img
              src="https://media.istockphoto.com/id/1414489347/photo/happy-little-girl-pointing-at-backpack-while-buying-school-supplies-with-her-parents-in.jpg?s=1024x1024&w=is&k=20&c=mtL2UZ7C1BjQdyCmattgDEFJgVvekqc9Kq_Tgfl6xjM="
              alt="Product 3"
              className="w-full h-60 object-cover rounded-lg shadow-md transition-transform transform group-hover:scale-110"
            />
          </div>
          <div className="group relative">
            <img
              src="https://img.freepik.com/free-photo/full-length-portrait-happy-family_171337-2281.jpg"
              alt="Product 4"
              className="w-full h-60 object-cover rounded-lg shadow-md transition-transform transform group-hover:scale-110"
            />
          </div>
          <div className="group relative">
            <img
              src="https://media.istockphoto.com/id/868718238/photo/man-at-the-shopping.jpg?s=612x612&w=0&k=20&c=sSaT1QIlwglE8L1JtwrpnFuu9ovzJ-3SBTeNlVqzO8o="
              alt="Product 5"
              className="w-full h-60 object-cover rounded-lg shadow-md transition-transform transform group-hover:scale-110"
            />
          </div>
          <div className="group relative">
            <img
              src="https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014618_960_720.jpg"
              alt="Product 6"
              className="w-full h-60 object-cover rounded-lg shadow-md transition-transform transform group-hover:scale-110"
            />
          </div>
        </div>
        <img src="https://sslimages.shoppersstop.com/sys-master/root/h95/hb2/30791867400222/save-23-coupon-web_78gjgiy.jpg" alt="" />
        <ScrollableImage />
        {/* <h1 className="text-4xl ml-10 font-extrabold text-gray-900 mb-4">
                    Best of clothings...
                </h1> */}
        <img src="https://sslimages.shoppersstop.com/sys-master/root/h9d/h68/30720599261214/Featured-Brands_strips-web_5746383.jpg" alt="" />
        <ClothsList />
        <div className="footer"></div>
        <SubFooter />
        <Footer />
        <ToastContainer />
      </div>

    </>
  );
}

export default Home;

