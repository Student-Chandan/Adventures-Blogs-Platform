import DashboardNavbar from "../../components/dashboard/DashboardNavbar";
import Sidebar from "../../components/dashboard/Sidebar";
import DashboardBlogsPage from "./DashboardBlogsPage";
import DashboardPage from "./DashboardPage";

const Dashboard = () => {
  return (
    <section className="w-full bg-[#f7fcfc]">
      <DashboardNavbar />
      <div className="flex h-[90vh]">
        <Sidebar />
        <section className="w-[85vw] h-[90vh] bg-[#f7fcfc] overflow-auto pb-5">
          {/* <DashboardPage /> */}
          <DashboardBlogsPage/>

        </section>
      </div>
    </section>
  );
};

export default Dashboard;
