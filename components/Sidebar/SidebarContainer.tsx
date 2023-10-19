import { FunctionComponent } from "react";
import { Sidebar } from "flowbite-react";
import { HiChartPie } from "react-icons/hi";

export const SidebarContainer: FunctionComponent = () => {
  return (
    <Sidebar className="min-h-screen" color="">
      <Sidebar.Items className="min-h-screen">
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/view-shifts">
            <h1>Sead</h1>
          </Sidebar.Item>
          <Sidebar.Item href="/book-a-shift" icon={HiChartPie}>
            <p>Book a shift</p>
          </Sidebar.Item>
          <Sidebar.Item href="/post-a-shift" icon={HiChartPie}>
            <p>Post a shift</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};
