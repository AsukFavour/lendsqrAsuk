import React, { useCallback, useState } from "react";
import "./Sidebar.scss";
import NavItem from "./_navItem";
import UsersIcon from "../../images/users-icon.png";
import organisation from "../../images/sidebaricon/org.png";
import dash from "../../images/sidebaricon/Vector1.png";
import user from "../../images/sidebaricon/Vector2.png";
import decision from "../../images/sidebaricon/Vector4.png";
import savings from "../../images/sidebaricon/Vector5.png";
import loanrequest from "../../images/sidebaricon/Vector6.png";
import fees from "../../images/sidebaricon/Vector7.png";
import services from "../../images/sidebaricon/Vector8.png";
import transac from "../../images/sidebaricon/Vector9.png";
import settle from "../../images/sidebaricon/Vector10.png";
import preferences from "../../images/sidebaricon/Vector11.png";
import fee from "../../images/sidebaricon/Vector12.png";
import audit from "../../images/sidebaricon/Vector13.png";
import report from "../../images/sidebaricon/Vector15.png";
import saving from "../../images/sidebaricon/Vector14.png";
import loans from "../../images/sidebaricon/₦.png";
import { useNavigate } from "react-router-dom";
type Props = {};

const SideNavbar = (props: Props) => {
  const [selectedItem, setSelectedItem] = useState("Users");
  const [closeSideNav, setCloseSideNav] = useState(false);
  const navigate = useNavigate();

  const handleSelectItem = useCallback((item: string, link: string) => {
    setSelectedItem(item);
    navigate(link);
  }, []);

  return (
    <div className={`sidenav-container ${closeSideNav && "close-side-nav"}`}>
      <div className="sidenav-child">
        <div
          className="toggle-sidenav"
          onClick={() => {
            //sample on how to hide the sidenav, you can run this function when on small screens
            setCloseSideNav(!closeSideNav);
          }}
        ></div>
        <div className="nav-switch-org">
          <NavItem icon={organisation} title="Switch Organizations" />
        </div>
        <div className="nav-dashboard">
          <NavItem icon={dash} title="Dashboard" />
        </div>
        <section>
          <p className="nav-title">CUSTOMERS</p>

          {NAV_ITEM_CUSTOMERS.map((item) => (
            <NavItem
              icon={item.icon}
              title={item.title}
              link={item.link}
              selected={selectedItem === item.title}
              onSelect={handleSelectItem}
            />
          ))}
        </section>

        <section>
          <p className="nav-title">BUSINESSES</p>

          {NAV_ITEM_BUSINESSES.map((item) => (
            <NavItem
              icon={item.icon}
              title={item.title}
              link={item.link}
              selected={selectedItem === item.title}
              onSelect={handleSelectItem}
            />
          ))}
        </section>

        <section>
          <p className="nav-title">SETTINGS</p>

          {NAV_ITEM_SETTINGS.map((item) => (
            <NavItem
              icon={item.icon}
              title={item.title}
              link={item.link}
              selected={selectedItem === item.title}
              onSelect={handleSelectItem}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default SideNavbar;

const NAV_ITEM_CUSTOMERS = [
  {
    icon: user,
    title: "Users",
    link: "/dashboard/users",
  },
  {
    icon: user,
    title: "Guarantors",
    link: "/dashboard/guarantors",
  },
  {
    icon: loans,
    title: "Loans",
    link: "/dashboard/loans",
  },
  {
    icon: decision,
    title: "Decision Models",
    link: "/dashboard/decisions",
  },
  {
    icon: savings,
    title: "Savings",
    link: "/dashboard/savings",
  },
  {
    icon: loanrequest,
    title: "Loan Requests",
    link: "/dashboard/loan-request",
  },
  {
    icon: user,
    title: "Whitelist",
    link: "/dashboard/whitelist",
  },
  {
    icon: user,
    title: "Karma",
    link: "/dashboard/karma",
  },
];

const NAV_ITEM_BUSINESSES = [
  {
    icon: organisation,
    title: "Organization",
    link: "/dashboard/organization",
  },
  {
    icon: loanrequest,
    title: "Loan Products",
    link: "/dashboard/loan-products",
  },
  {
    icon: saving,
    title: "Savings Produts",
    link: "/dashboard/savings",
  },
  {
    icon: fees,
    title: "Fees and Charges",
    link: "/dashboard/fees",
  },
  {
    icon: transac,
    title: "Transactions",
    link: "/dashboard/transactions",
  },
  {
    icon: services,
    title: "Services",
    link: "/dashboard/services",
  },
  {
    icon: user,
    title: "Service Account",
    link: "/dashboard/service",
  },
  {
    icon: settle,
    title: "Settlements",
    link: "/dashboard/settlements",
  },
  {
    icon: report,
    title: "Reports",
    link: "/dashboard/reports",
  },
];

const NAV_ITEM_SETTINGS = [
  {
    icon: preferences,
    title: "Preferences",
    link: "/dashboard/preferences",
  },
  {
    icon: fee,
    title: "Fees and Pricing",
    link: "/dashboard/fees",
  },
  {
    icon: audit,
    title: "Audit Logs",
    link: "/dashboard/audit",
  },
];
