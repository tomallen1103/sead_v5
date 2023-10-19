"use client";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { FunctionComponent } from "react";
import { Sidebar } from "flowbite-react";

const HomeRoute: FunctionComponent = () => {
  return (
    <main className="min-h-screen">
      <Sidebar className="min-h-screen" color="">
        <Sidebar.Items className="min-h-screen">
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/">
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
    </main>
  );
};

export default HomeRoute;
