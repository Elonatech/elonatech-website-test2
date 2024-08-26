import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, useState, Suspense } from "react";
import { CartProvider } from "react-use-cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewsPages from "./components/news/NewsPages";
import TrendsPages from "./components/trends/TrendsPages";
import NewsDetails from "./components/news/newsDetails/newsDetails";
import NewsRelated from "./components/news/newsDetails/newsRelated";
import TrendDetails from "./components/trends/TrendDetails/trendDetails";
import TrendRelated from "./components/trends/TrendDetails/trendRelated";


const Navbar = lazy(() => import("./components/navbar/navbar"));
const Footer = lazy(() => import("./components/footer/footer"));
const Error = lazy(() => import("./components/error/error"));
const Web = lazy(() => import("./components/web/web"));
const Portfolio = lazy(() => import("./components/portfolio/portfolio"));
const Team = lazy(() => import("./components/team/team"));
const Company = lazy(() => import("./components/company/company"));
const Network = lazy(() => import("./components/network/network"));
const Policy = lazy(() => import("./components/policy/policy"));
const Digital = lazy(() => import("./components/digital/digital"));
const Home = lazy(() => import("./components/home/home"));
const Engineer = lazy(() => import("./components/engineer/engineer"));
const Mobile = lazy(() => import("./components/mobile/mobile"));
const Printer = lazy(() => import("./components/printer/printer"));
const Access = lazy(() => import("./components/access/access"));
const Suvalliance = lazy(() => import("./components/suvalliance/suvalliance"));
const Networka = lazy(() => import("./components/networkA/networka"));
const Server = lazy(() => import("./components/server/server"));
const Integration = lazy(() => import("./components/integration/integration"));
const Cabling = lazy(() => import("./components/cabling/cabling"));
const Cctv = lazy(() => import("./components/cctv/cctv"));
const Internet = lazy(() => import("./components/internet/internet"));
const Security = lazy(() => import("./components/security/security"));
const Time = lazy(() => import("./components/time/time"));
const News = lazy(() => import("./components/news/News"));
const Trends = lazy(() => import("./components/trends/Trends"));
const Blog = lazy(()=>import("./components/blog/blog"))

// =================================================

const Voip = lazy(() => import("./pages/telecom/voip"));
const IpTelephony = lazy(() => import("./pages/telecom/ip-telephony"));

// ================================================

const Domain = lazy(() => import("./pages/webs/domain/domain"));
const Hosting = lazy(() => import("./pages/webs/hosting/hosting"));

// =============================================
const Content = lazy(() => import("./pages/marketing/content/content"));
const Ppc = lazy(() => import("./pages/marketing/ppc/ppc"));
const Seo = lazy(() => import("./pages/marketing/seo/seo"));
const Social = lazy(() => import("./pages/marketing/social/social"));
const Mail = lazy(() => import("./pages/marketing/mail/mail"));

// ========================================
const Application = lazy(() =>
  import("./pages/software/application/application")
);
const Business = lazy(() => import("./pages/software/business/business"));
const SoftwareSupply = lazy(() =>
  import("./pages/software/system-supply/softwareSupply")
);
const SystemSoftware = lazy(() =>
  import("./pages/software/system-software/system-software")
);

// =================================
const Computer = lazy(() => import("./pages/sales/computer/computer"));
const Office = lazy(() => import("./pages/sales/office/office"));
const Shop = lazy(() => import("./pages/sales/shop/shop"));
const Pos = lazy(() => import("./pages/sales/pos/pos"));
const PrinterSales = lazy(() => import("./pages/sales/printers/printers"));

// =====================================
const SingleProduct = lazy(() =>
  import("./pages/sales/singleProduct/singleProduct")
);
const BlogDetails = lazy(() => import("./components/blogDetails/blogDetails"));
const BlogWrite = lazy(() => import("./components/blogWrite/blogWrite"));
const BlogUpdate = lazy(() =>
  import("./components/blog/blogUpdate/blogUpdate")
);
const BlogRelated = lazy(() => import("./components/blogDetails/blogRelated"));

// =====================================
const Graphic = lazy(() => import("./pages/add/graphic/graphic"));
const Branding = lazy(() => import("./pages/add/branding/branding"));
const Animation = lazy(() => import("./pages/add/animation/Animation"));
const Video = lazy(() => import("./pages/add/video/Video"));
const Motion = lazy(() => import("./pages/add/motion/motion"));
const Uiux = lazy(() => import("./pages/add/uiux/uiux"));
const Career = lazy(() => import("./pages/add/career/career"));
const Technical = lazy(() => import("./pages/add/technical/technical"));
const Remote = lazy(() => import("./pages/add/remote/remote"));
const Livestreaming = lazy(() =>
  import("./pages/add/livestreaming/livestreaming")
);
const Videoconferencing = lazy(() =>
  import("./pages/add/videoconferencing/videoconferencing")
);

// ===========================================
const AnimationCareer = lazy(() =>
  import("./pages/add/animationCareer/animationCareer")
);
const DigitalCareer = lazy(() =>
  import("./pages/add/digitalCareer/digitalCareer")
);
const GraphicCareer = lazy(() =>
  import("./pages/add/graphicCareer/graphicCareer")
);
const MarketingCareer = lazy(() =>
  import("./pages/add/marketingCareer/marketingCareer")
);
const SystemCareer = lazy(() =>
  import("./pages/add/systemCareer/systemCareer")
);
const WebCareer = lazy(() => import("./pages/add/webCareer/webCareer"));
const Shopwrite = lazy(() => import("./pages/sales/shop/shopWrite/shopWrite"));
const ComputerWrite = lazy(() =>
  import("./pages/sales/computer/computerWrite")
);

// ===============================================

const PrivateRoute = lazy(() =>
  import("./components/privateRoute/PrivateRoute")
);
const AdminLogin = lazy(() => import("./components/admin/admin"));
const Dashboard = lazy(() => import("./components/admin/dashboard"));
const ScrollTop = lazy(() => import("./components/scrolltop/scrolltop"));
const Hardware = lazy(() => import("./components/hardware/hardware"));
const Consumable = lazy(() => import("./components/consumble/consumable"));
const GetInTouchPage = lazy(() =>
  import("./components/getIntouchPage/getInTouchPage")
);
const Consulting = lazy(() => import("./components/consulting/consulting"));
const Retainership = lazy(() =>
  import("./components/retainership/retainership")
);
const Training = lazy(() => import("./components/trainer/training"));
const NetworkDevices = lazy(() =>
  import("./pages/sales/networkDevices/networkDevices")
);
const ShopUpdate = lazy(() =>
  import("./pages/sales/shop/shopUpdate/shopUpdate")
);
const NetworkSupport = lazy(() =>
  import("./components/networkSupport/networkSupport")
);

// ================================

const Cart = lazy(() => import("./components/cart/cart"));
const Checkout = lazy(() => import("./components/checkout/checkout"));
const Thankyou = lazy(() => import("./components/cart/thankyou"));
const Teamchairman = lazy(() => import("./components/team/teamchairman"));
const TeamMd = lazy(() => import("./components/team/teamMd"));
const TeamAdmin = lazy(() => import("./components/team/teamAdmin"));
const TeamLead = lazy(() => import("./components/team/teamLead"));
const TeamSystem = lazy(() => import("./components/team/teamSystem"));
const TeamWeb = lazy(() => import("./components/team/teamWeb"));
const ShopPages = lazy(() => import("./pages/sales/shop/shopPages"));
const BlogPages = lazy(() => import("./components/blog/blogPages"));
const ComputerPages = lazy(() => import("./pages/sales/computer/computerPages"));
const OfficePages = lazy(() => import("./pages/sales/office/officePages"));
const PosPages = lazy(() => import("./pages/sales/pos/posPages"));
const PrintersPages = lazy(() => import("./pages/sales/printers/printersPages"));
const NetworkDevicesPages = lazy(() => import("./pages/sales/networkDevices/networkDevicesPages"));







const Layout = () => {
  return (
    <>
      <CartProvider>
        <Navbar />
        <ScrollTop />
        <Outlet />
        <Footer />
      </CartProvider>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/network",
        element: <Network />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      },
      {
        path: "/digital-marketing",
        element: <Digital />
      },
      {
        path: "/policy",
        element: <Policy />
      },
      {
        path: "/who-we-are",
        element: <Company />
      },
      {
        path: "/web-design",
        element: <Web />
      },
      // team ==============================
      {
        path: "/our-team",
        element: <Team />
      },
      {
        path: "/israel-uhwonuwoma-o",
        element: <Teamchairman />
      },
      {
        path: "/oreva-p-oku",
        element: <TeamMd />
      },
      {
        path: "/violet-oku",
        element: <TeamAdmin />
      },
      {
        path: "/samuel-folarin",
        element: <TeamLead />
      },
      {
        path: "/jamiu-noah",
        element: <TeamSystem />
      },
      {
        path: "/michael-jogoh",
        element: <TeamWeb />
      },
      // ===================================
      {
        path: "/hardware-engineering",
        element: <Engineer />
      },
      {
        path: "/mobile-repair",
        element: <Mobile />
      },
      {
        path: "/printer-repair",
        element: <Printer />
      },
      {
        path: "/system-integration",
        element: <Integration />
      },
      {
        path: "/structure-cabling",
        element: <Cabling />
      },
      {
        path: "/cctv",
        element: <Cctv />
      },
      {
        path: "/internet",
        element: <Internet />
      },
      {
        path: "/network-security",
        element: <Security />
      },
      {
        path: "/access-control",
        element: <Access />
      },
      {
        path: "/time-management",
        element: <Time />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/blog/page/:pagenumber",
        element: <BlogPages />
      },

      {
        path: "/blog/:id",
        element: <BlogDetails />
      },
      {
        path: "/blog/related/:id",
        element: <BlogRelated />
      },
      {
        path: "/news/:id",
        element: <NewsDetails />
      },
      {
        path: "/blog/related/:id",
        element: <NewsRelated />
      },
      {
        path: "/trends/:id",
        element: <TrendDetails />
      },
      {
        path: "/trends/related/:id",
        element: <TrendRelated />
      },
      {
        path: "/surveillance",
        element: <Suvalliance />
      },
      {
        path: "/network-administration-implementation",
        element: <Networka />
      },
      {
        path: "/server-administration",
        element: <Server />
      },
      //=================== telecom pages
      {
        path: "/ip-telephony",
        element: <IpTelephony />
      },
      {
        path: "/voip",
        element: <Voip />
      },
      //================================== web pages
      {
        path: "/domain",
        element: <Domain />
      },

      {
        path: "/hosting",
        element: <Hosting />
      },
      //============================== marketing
      {
        path: "/content-marketing",
        element: <Content />
      },
      {
        path: "/ppc",
        element: <Ppc />
      },

      {
        path: "/seo",
        element: <Seo />
      },
      {
        path: "/social-media-marketing",
        element: <Social />
      },
      {
        path: "/email-marketing",
        element: <Mail />
      },

      //================================================= software

      {
        path: "/application-software",
        element: <Application />
      },
      {
        path: "/business-software",
        element: <Business />
      },
      {
        path: "/system-software",
        element: <SystemSoftware />
      },

      //============================================= sales

      {
        path: "/computers",
        element: <Computer />
      },
      {
        path: "/computers/page/:pagenumber",
        element: <ComputerPages />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/shop/page/:pagenumber",
        element: <ShopPages />
      },

      {
        path: "/printers",
        element: <PrinterSales />
      },
      {
        path: "/office-equipment",
        element: <Office />
      },
      {
        path: "/office-equipment/page/:pagenumber",
        element: <OfficePages />
      },
      {
        path: "/pos-system",
        element: <Pos />
      },
      {
        path: "/pos-system/page/:pagenumber",
        element: <PosPages />
      },
      {
        path: "/printers",
        element: <Printer />
      },
      {
        path: "/printers/page/:pagenumber",
        element: <PrintersPages />
      },

      {
        path: "/network-devices",
        element: <NetworkDevices />
      },
      {
        path: "/network-devices/page/:pagenumber",
        element: <NetworkDevicesPages />
      },

      //===================================== single product
      {
        path: "/product/:id/:name",
        element: <SingleProduct />
      },
      {
        path: "/graphics-design",
        element: <Graphic />
      },
      {
        path: "/brand-identity",
        element: <Branding />
      },
      {
        path: "/animation",
        element: <Animation />
      },
      {
        path: "/video-editing",
        element: <Video />
      },
      {
        path: "/motion-graphics",
        element: <Motion />
      },

      {
        path: "/uiux",
        element: <Uiux />
      },
      {
        path: "/career",
        element: <Career />
      },
      {
        path: "/technical-support",
        element: <Technical />
      },
      {
        path: "/remote-support",
        element: <Remote />
      },
      {
        path: "/livestreaming",
        element: <Livestreaming />
      },
      {
        path: "/videoconferencing",
        element: <Videoconferencing />
      },
      // career page
      {
        path: "/animation-career",
        element: <AnimationCareer />
      },
      {
        path: "/digital-career",
        element: <DigitalCareer />
      },
      {
        path: "/graphic-career",
        element: <GraphicCareer />
      },
      {
        path: "/news",
        element: <News />
      },
      {
        path: "/news/page/:pagenumber",
        element: <NewsPages />
      },
      {
        path: "/trends",
        element: <Trends />
      },
      {
        path: "/trends/page/:pagenumber",
        element: <TrendsPages />
      },
      {
        path: "/marketing-career",
        element: <MarketingCareer />
      },
      {
        path: "/system-career",
        element: <SystemCareer />
      },
      {
        path: "/web-career",
        element: <WebCareer />
      },
      {
        path: "/write",
        element: (
          <PrivateRoute>
            <BlogWrite />
          </PrivateRoute>
        )
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <BlogUpdate />
          </PrivateRoute>
        )
      },
      {
        path: "/shop-write",
        element: (
          <PrivateRoute>
            <Shopwrite />
          </PrivateRoute>
        )
      },
      {
        path: "/product/:id/update",
        element: (
          <PrivateRoute>
            <ShopUpdate />
          </PrivateRoute>
        )
      },
      {
        path: "/computer-write",
        element: (
          <PrivateRoute>
            <ComputerWrite />
          </PrivateRoute>
        )
      },
      {
        path: "/admin-login",

        element: <AdminLogin />
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        )
      },

      // Supplies
      {
        path: "/software-supply",
        element: <SoftwareSupply />
      },
      {
        path: "/hardware-supply",
        element: <Hardware />
      },
      {
        path: "/consumables",
        element: <Consumable />
      },
      {
        path: "/get-in-touch",
        element: <GetInTouchPage />
      },
      {
        path: "/consulting",
        element: <Consulting />
      },

      {
        path: "/retainer-partnership",
        element: <Retainership />
      },

      {
        path: "/training",
        element: <Training />
      },
      {
        path: "/network-support",
        element: <NetworkSupport />
      },
      {
        path: "/cart",
        element: <Cart />
      },

      {
        path: "/checkout",
        element: <Checkout />
      },

      {
        path: "/thank-you",
        element: <Thankyou />
      }
    ]
  }
]);

const App = () => {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
