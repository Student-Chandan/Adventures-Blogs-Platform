import { Outlet } from "react-router-dom";
import DashboardNavbar from "../../components/dashboard/DashboardNavbar";
import Sidebar from "../../components/dashboard/Sidebar";
import DashboardBlogsPage from "./DashboardBlogsPage";
import DashboardPage from "./DashboardPage";
import AddBlogs from "./AddBlogs";
import Settings from "./Settings";
import PendingBlogs from "./PendingBlogs";

const Dashboard = () => {
  return (
    <section className="w-full bg-[#f7fcfc]">
      <DashboardNavbar />
      <div className="flex h-[90vh]">
        <Sidebar />
        <section className="w-[85vw] h-[90vh] bg-[#f7fcfc] overflow-auto pb-5">
          <Outlet>
            <DashboardPage />
            <DashboardBlogsPage />
            <AddBlogs />
            <Settings />
            <PendingBlogs />
          </Outlet>
        </section>
      </div>
    </section>
  );
};

export default Dashboard;
