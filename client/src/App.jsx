import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Comapany from "./components/Company";
import AboutUs from "./components4/ProjectsPage";
import { Routes, Route } from "react-router-dom";
import Resources from "./components3/Resources";
import Why from "./components2/WhyPage";
import Follow from "./components/Follow";
import Privacy from "./components/Privacy";
import Guide from "./components/Guide";
import Terms from "./components/Terms";
import BioGraph from "./components3/BioGraph";
import Personal from "./Signup/Personal";
import Address from "./Signup/Address";
import Devices from "./Signup/Devices";
import Complete from "./Signup/Complete";
import Login from "./signin/Login";
import ContactUs from "./contact/ContactUs";
import Otp from "./Signup/Otp";
import Help from "./components/Help";
import Dashboard from "./dashboard/Dashboard";
import Academy from "./dashboard/Academy";
import { Cookie } from "lucide-react";
import Conditions from "./dashboard/Conditions";
import Guidlines from "./dashboard/Guidlines";
import Policy from "./dashboard/Policy";
import Offcanvas from "./dashboard/Offcanvas";
import MainContent from "./dashboard/MainContent";
import Payment from "./Payments/Payment";
import DashNav from "./dashboard/DashNav";
import Testcase from "./TestCases/Testcase";

import ProjectHead from "./Projects/ProjectHead";
import ProjectMatter from "./Projects/ProjectMatter";
import DetailMatter from "./Projects/DetailMatter";
import { FaArrowUp } from "react-icons/fa";
import Testcycle from "./Test_Cycles/Testcycle";
import Profile from "./Profile/Profile";
import PersonalInfo from "./Profile/PersonalInfo";
import { DataProvider } from "./DataContext";
import CommunityProfile from "./Profile/CommunityProfile";

const App = () => {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/AboutUs" element={<Aboutus />}></Route>
        <Route path="/Resources" element={<Resource />}></Route>
        <Route path="/Why" element={<Whyterhive />}></Route>
        <Route path="/Privacy" element={<PrivacyPage />}></Route>
        <Route path="/Terms" element={<TermsPage></TermsPage>}></Route>
        <Route path="/Guide" element={<GuidePage></GuidePage>}></Route>
        <Route path="/help" element={<HelpPage />}></Route>
        <Route path="/BioGraph" element={<Bio></Bio>}></Route>
        <Route path="/Personal" element={<Personal />}></Route>
        <Route path="/address" element={<Address />}></Route>
        <Route path="/devices" element={<Devices />}></Route>
        <Route path="/complete" element={<Complete />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/otp" element={<Otp />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/academy" element={<Academy />}></Route>
        <Route path="/cooikes" element={<Cookie />}></Route>
        <Route path="/conditions" element={<ConditionsPage />}></Route>
        <Route path="/guidlines" element={<GuidlinesPage />}></Route>
        <Route path="/policy" element={<PolicyPage />}></Route>
        <Route path="/Payment" element={<Money></Money>}></Route>
        <Route path="/Testcase" element={<TestcaseTab></TestcaseTab>}></Route>
        <Route path="/CommunityProfile" element={<CommunityProfile/>}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route
          path="/ProjectMatter"
          element={<ProjectsSection></ProjectsSection>}
        ></Route>
        <Route path="/DetailMatter/:id" element={<Mat></Mat>}></Route>
        <Route path="/Testcycle" element={<Test></Test>}></Route>
      </Routes>
    </DataProvider>
  );
};
function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Comapany />
        <Follow></Follow>
      </div>

      <Footer />
    </>
  );
}
function Aboutus() {
  return (
    <>
      <Navbar />
      <AboutUs />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Comapany />
        <Follow></Follow>
      </div>
      <Footer />
    </>
  );
}
function Resource() {
  return (
    <>
      <Navbar />
      <Resources />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Comapany />
        <Follow></Follow>
      </div>
      <Footer />
    </>
  );
}
function Whyterhive() {
  return (
    <>
      <Navbar />
      <Why />
      <div className="max-w-6xl mx-auto pt-20 px-6">
        <Comapany />
        <Follow></Follow>
      </div>
      <Footer />
    </>
  );
}
function PrivacyPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto pt-20 px-6">
        <Privacy></Privacy>
      </div>
      <Footer />
    </>
  );
}
function TermsPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto pt-20 px-6">
        <Terms></Terms>
      </div>
      <Footer />
    </>
  );
}
function GuidePage() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto pt-20 px-6">
        <Guide></Guide>
      </div>
      <Footer />
    </>
  );
}
function HelpPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto pt-20 px-6">
        <Help />
      </div>
      <Footer />
    </>
  );
}
function Bio() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto pt-20 px-6">
        <BioGraph />
      </div>
      <Footer />
    </>
  );
}
function Money() {
  return (
    <>
      <div className="ml-64 p-4 bg-gray-100 ">
        <DashNav val={"Payment"} />
      </div>
      <div className="ml-64 min-h-screen flex my-7">
        <Offcanvas></Offcanvas>
        <Payment></Payment>
      </div>
    </>
  );
}
function ProjectsSection() {
  return (
    <>
      <div className="ml-64 p-4 bg-gray-100">
        <DashNav val={"Projects Board"} />
      </div>
      <div className="ml-64 min-h-screen">
        <Offcanvas></Offcanvas>
        <ProjectHead></ProjectHead>
        <ProjectMatter></ProjectMatter>
      </div>
    </>
  );
}

function Mat() {
  return (
    <>
      <div className="ml-64 min-h-screen flex">
        <Offcanvas></Offcanvas>
        <DetailMatter></DetailMatter>
      </div>
    </>
  );
}
function Test() {
  return (
    <>
      <div className="ml-64 p-4 bg-gray-100">
        <DashNav val={"Test Cycles"} />
      </div>
      <div className="ml-64 min-h-screen flex">
        <Offcanvas></Offcanvas>
        <Testcycle></Testcycle>
      </div>
    </>
  );
}

function TestcaseTab() {
  return (
    <>
      <div className="ml-64 p-4 bg-gray-100">
        <DashNav val={"TestCases"} />
      </div>
      <div className="ml-64 min-h-screen flex">
        <Offcanvas></Offcanvas>
        <Testcase></Testcase>
      </div>
    </>
  );
}

function PolicyPage() {
  return (
    <>
      <Offcanvas/>
      <div className=" max-w-6xl mx-auto pt-20 px-6">
        <Policy></Policy>
      </div>
      
    </>
  );
}

function GuidlinesPage() {
  return (
    <>
      <Offcanvas/>
      <div className=" max-w-6xl mx-auto pt-20 px-6">
        <Guidlines></Guidlines>
      </div>
      
    </>
  );
}

function ConditionsPage() {
  return (
    <>
      <Offcanvas/>
      <div className=" max-w-6xl mx-auto pt-20 px-6">
        <Conditions></Conditions>
      </div>
      
    </>
  );
}
export default App;
