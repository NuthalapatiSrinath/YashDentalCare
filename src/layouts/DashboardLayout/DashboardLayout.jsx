import TopBar from "../../pages/TopBar/TopBar";
import styles from "./DashboardLayout.module.css";

// import SideBar from "../../sections/SideBar/SideBar";
import { Outlet } from "react-router";
// import WhatsAppFloatingButton from "../WhatsAppFloatingButton/WhatsAppFloatingButton";

function DashboardLayout() {
  return (
    <div className={styles.DashboardLayout}>
      <div className={styles.RightSection}>
        <TopBar />
        <main className="Main">
          <Outlet />
          {/* <WhatsAppFloatingButton /> */}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
