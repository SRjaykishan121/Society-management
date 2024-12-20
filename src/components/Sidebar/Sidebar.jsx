
import React, { useState } from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { FaBuilding } from "react-icons/fa";
import { TbMessage2Cancel } from "react-icons/tb";
import { AiFillSecurityScan } from "react-icons/ai";
import { SiSpringsecurity } from "react-icons/si";
import { GrAnnounce } from "react-icons/gr";
import { Collapse } from 'react-bootstrap';
import { IoMdArrowDropdown } from "react-icons/io";

const Sidebar = ({ toggleSidebar }) => {
  const [isFinancialOpen, setIsFinancialOpen] = useState(false);
  const [isSecurityOpen, setIsSecurityOpen] = useState(false);
  const [isComplaintOpen, setIsComplaintOpen] = useState(false);

  const toggleFinancialDropdown = () => {
    setIsFinancialOpen(!isFinancialOpen);
    setIsSecurityOpen(false);
    setIsComplaintOpen(false);
  };

  const toggleSecurityDropdown = () => {
    setIsSecurityOpen(!isSecurityOpen);
    setIsComplaintOpen(false);
    setIsFinancialOpen(false);
  }

  const toggleComplaintDropdown = () => {
    setIsComplaintOpen(!isComplaintOpen);
    setIsFinancialOpen(false);
    setIsSecurityOpen(false);

  }

  return (
    <>
      <div className="row">
        {/* Close button for screens up to 767px */}
        <div className="col-12  d-lg-none text-end mt-2">
          <button className="btn close-btn" onClick={toggleSidebar}>
            <IoMdClose />
          </button>
        </div>

        <div className="col-md-12 mt-2 d-flex align-items-center justify-content-center flex-column">
          <img src='/Images/logo.png' height={70} className='pt-2' alt="Logo" />
        </div>
        <hr className='sidebar_logo_hr'/>

      <div className='d-flex justify-content-start flex-column '>  
       <div className='d-flex flex-column'>  
        <div className="col-md-11 mt-2 mb-2  background_color sidebar_link mx-auto">
          <NavLink to="/" onClick={toggleSidebar}>
            <p className='ps-2' ><MdDashboard className='me-2 fs-4 font_color' /> Dashboard</p>
          </NavLink>
        </div> 

        <div className="col-md-11 mt-2 mb-2  sidebar_link mx-auto">
          <NavLink to="/ResidentManagement" onClick={toggleSidebar}>
            <p className='ps-2'><IoMdPerson className='me-2 fs-4 font_color' />Resident Management</p>
          </NavLink>
        </div>

        {/* <div className="col-md-11 mt-2 mb-2  sidebar_link mx-auto financial_management_main">
          <div onClick={toggleFinancialDropdown} style={{ cursor: 'pointer' }}>
            <p className='ps-2 dropdown_title'><RiMoneyDollarBoxFill className='me-2 fs-4 font_color' />Financial Management </p>
          </div>
         
          <Collapse in={isFinancialOpen} className='dropdown-main'>
            <div className="ps-4">
              <NavLink to="/FinancialManagement/Income" onClick={toggleSidebar}>
                <p className="sub-link">Income</p>
              </NavLink>
              <NavLink to="/FinancialManagement/Expense" onClick={toggleSidebar}>
                <p className="sub-link">Expense</p>
              </NavLink>
              <NavLink to="/FinancialManagement/Note" onClick={toggleSidebar}>
                <p className="sub-link">Note</p>
              </NavLink>
            </div>
          </Collapse>
        </div> */}

        <div className="col-md-11 mt-2 mb-2   mx-auto financial_management_main">
          <div onClick={toggleFinancialDropdown} style={{ cursor: 'pointer' }}>
            <div className="sidebar_link  d-flex">
              <p
                style={{
                  cursor: 'pointer',
                  fontSize: '17px',
                  fontWeight: '500',
                }}
                className="ms-2  font_color"
              >
               <RiMoneyDollarBoxFill className='me-2 fs-4 font_color' />
                Financial Management 
              </p>
              {/* Use arrow class directly on the img element */}
              <img
                className={`arrow ms-3 ${isFinancialOpen ? 'up' : ''}`}
                src="\Images\arrow-down.png"
                alt="Arrow"
              />
            </div>
          </div>
          <Collapse in={isFinancialOpen} className="dropdown-main bg-white shadow p-3 rounded">
            <div>
              {/* Access Forums */}
              <NavLink
                to="/FinancialManagement/Income"
                onClick={toggleSidebar}
                className={({ isActive }) =>
                  `text-decoration-none d-flex  ${isActive ? "active-link" : "default-link"}`
                }
              >
                <p className="menu-item font_color1 ">Income</p>
              </NavLink>

              <NavLink
                to="/FinancialManagement/Expense"
                onClick={toggleSidebar}
                className={({ isActive }) =>
                  `text-decoration-none d-flex ${isActive ? "active-link" : "default-link"}`
                }
              >
                <p className="menu-item font_color1">Expense</p>
              </NavLink>

              <NavLink
                to="/FinancialManagement/Note"
                onClick={toggleSidebar}
                className={({ isActive }) =>
                  `text-decoration-none d-flex ${isActive ? "active-link" : "default-link"}`
                }
              >
                <p className="menu-item font_color1">Note</p>
              </NavLink>

            </div>
          </Collapse>

        </div>

        <div className="col-md-11 mt-2 mb-2  sidebar_link mx-auto">
          <NavLink to="/FacilityManagement" onClick={toggleSidebar}>
            <p className='ps-2'><FaBuilding className='me-2 fs-4 font_color' /> Facility Management</p>
          </NavLink>
        </div>

        {/* <div className="col-md-11 mt-2 mb-2  sidebar_link mx-auto financial_management_main">
          <div onClick={toggleComplaintDropdown} style={{ cursor: 'pointer' }}>
            <p className='ps-2 dropdown_title '><TbMessage2Cancel className='me-2 fs-4 font_color' /> Complaint Tracking </p>
          </div>

         
          <Collapse in={isComplaintOpen} className='dropdown-main'>
            <div className="ps-4">
              <NavLink to="/ComplaintTracking/CreateComplaint" onClick={toggleSidebar}>
                <p className="sub-link">Create Complaint</p>
              </NavLink>
              <NavLink to="/ComplaintTracking/RequestTracking" onClick={toggleSidebar}>
                <p className="sub-link">Request Tracking</p>
              </NavLink>
            </div>
          </Collapse>
        </div> */}
          <div className="col-md-11 mt-2 mb-2   mx-auto financial_management_main">
          <div onClick={toggleComplaintDropdown} style={{ cursor: 'pointer' }}>
            <div className="sidebar_link  d-flex">
              <p
                style={{
                  cursor: 'pointer',
                  fontSize: '17px',
                  fontWeight: '500',
                }}
                className="ms-2  font_color"
              >
              <TbMessage2Cancel className='me-2 fs-4 font_color' /> Complaint Tracking
              </p>
              {/* Use arrow class directly on the img element */}
              <img
                className={`arrow ms-3 ${isComplaintOpen ? 'up' : ''}`}
                src="\Images\arrow-down.png"
                alt="Arrow"
              />
            </div>
          </div>
          <Collapse in={isComplaintOpen} className="dropdown-main bg-white shadow p-3 rounded">
            <div>
              {/* Access Forums */}
              <NavLink
                to="/ComplaintTracking/CreateComplaint"
                onClick={toggleSidebar}
                className={({ isActive }) =>
                  `text-decoration-none d-flex  ${isActive ? "active-link" : "default-link"}`
                }
              >
                <p className="menu-item font_color1 ">Create Complaint</p>
              </NavLink>

              <NavLink
                to="/ComplaintTracking/RequestTracking"
                onClick={toggleSidebar}
                className={({ isActive }) =>
                  `text-decoration-none d-flex ${isActive ? "active-link" : "default-link"}`
                }
              >
                <p className="menu-item font_color1">Request Tracking</p>
              </NavLink>

            </div>
          </Collapse>

        </div>


        {/* <div className="col-md-11 mt-2 mb-2  sidebar_link mx-auto financial_management_main">
          <div onClick={toggleSecurityDropdown} style={{ cursor: 'pointer' }}>
            <p className='ps-2 dropdown_title'><AiFillSecurityScan className='me-2 fs-4 font_color' /> Security Management </p>
          </div>
        
          <Collapse in={isSecurityOpen} className='dropdown-main'>
            <div className="ps-4">
              <NavLink to="/SecurityManagement/VisitorLogs" onClick={toggleSidebar}>
                <p className="sub-link">Visitor Logs</p>
              </NavLink>
              <NavLink to="/SecurityManagement/SecurityProtocols" onClick={toggleSidebar}>
                <p className="sub-link">Security Protocols</p>
              </NavLink>
            </div>
          </Collapse>
        </div> */}
        <div className="col-md-11 mt-2 mb-2   mx-auto financial_management_main">
          <div onClick={toggleSecurityDropdown} style={{ cursor: 'pointer' }}>
            <div className="sidebar_link  d-flex">
              <p
                style={{
                  cursor: 'pointer',
                  fontSize: '17px',
                  fontWeight: '500',
                }}
                className="ms-2  font_color"
              >
             <AiFillSecurityScan className='me-2 fs-4 font_color' /> Security Management
              </p>
              {/* Use arrow class directly on the img element */}
              <img
                className={`arrow ms-3 ${isSecurityOpen ? 'up' : ''}`}
                src="\Images\arrow-down.png"
                alt="Arrow"
              />
            </div>
          </div>
          <Collapse in={isSecurityOpen} className="dropdown-main bg-white shadow p-3 rounded">
            <div>
              {/* Access Forums */}
              <NavLink
                to="/SecurityManagement/VisitorLogs"
                onClick={toggleSidebar}
                className={({ isActive }) =>
                  `text-decoration-none d-flex  ${isActive ? "active-link" : "default-link"}`
                }
              >
                <p className="menu-item font_color1 ">Visitor Logs</p>
              </NavLink>

              <NavLink
                to="/SecurityManagement/SecurityProtocols"
                onClick={toggleSidebar}
                className={({ isActive }) =>
                  `text-decoration-none d-flex ${isActive ? "active-link" : "default-link"}`
                }
              >
                <p className="menu-item font_color1">Security Protocols</p>
              </NavLink>

            </div>
          </Collapse>

        </div>

        <div className="col-md-11 mt-2 mb-2  sidebar_link mx-auto">
          <NavLink to="/SecurityGuard" onClick={toggleSidebar}>
            <p className='ps-2'><SiSpringsecurity className='me-2 fs-4 font_color' /> Security Guard</p>
          </NavLink>
        </div>

        <div className="col-md-11 mt-2 mb-2  sidebar_link mx-auto">
          <NavLink to="/Announcement" onClick={toggleSidebar}>
            <p className='ps-2'><GrAnnounce className='me-2 fs-4 font_color' /> Announcement</p>
          </NavLink>
        </div>
      </div>

       <div className="row ">
       <div className="col-12 col-lg-1 mt-1 mb-1 ms-3  mx-auto position-fixed bottom-0">
          <NavLink to="/login" onClick={toggleSidebar}>
            <p className='ps-1 logout-style'> <img src='/Images/logout.png'/> Logout</p>
          </NavLink>
        </div>
       </div>
       

        </div>
       
      </div>
    </>
  );
};

export default Sidebar;
