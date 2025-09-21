import { JSX } from "react";
import DefaultIcon from "../../assets/Sidebar/DashBoard/DeafultIcon";
import EcommerceIcon from "../../assets/Sidebar/DashBoard/EcommerceIcon";
import OnlineCourses from "../../assets/Sidebar/DashBoard/OnlineCources";
import ProjectIcons from "../../assets/Sidebar/DashBoard/ProjectIcons";
import Account from "../../assets/Sidebar/Pages/Account";
import UserProfile from "../../assets/Sidebar/Pages/UserProfile";
import Corporate from "../../assets/Sidebar/Pages/Corporate";
import Blog from "../../assets/Sidebar/Pages/Blog";
import Social from "../../assets/Sidebar/Pages/Social";

// Map type: key → component function returning JSX
export const componentMap: Record<string, JSX.Element> = {
  default: <DefaultIcon />,
  "e-commerce": <EcommerceIcon />,
  account: <Account></Account>,
  "user-profile": <UserProfile />,
  projects: <ProjectIcons />,
  "online-courses": <OnlineCourses />,
  corporate: <Corporate />,
  blog: <Blog></Blog>,
  social: <Social />
};
