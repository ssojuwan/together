/* eslint-disable */
import * as React from "react";
import './AdminPage.css';
import { Link, Outlet } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import {AnimateSharedLayout} from 'framer-motion';
import AdminNav from './AdminNav';

import DashBoard from './DashBoard';
import Adminappbar from "./Adminappbar";

function AdminPage(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const menuId = 'primary-search-account-menu';

  const [expended, setExpended] = React.useState(false);

    return (
    <>
    <Outlet />
     <div className="AdminPage_body">
      <div className="AdminPage_main">
        {/* 네비게이션 */}
        <AdminNav />

        {/* main */}
        
        <Adminappbar />
        <div className="Adminpage_dashboard">
          

            {/* card */}
            <div className="cardBox">
              <div className="card">
                <div>
                  <div className="numbers">1,504</div>
                  <div className="cardName">모집중</div>
                </div>
                <div className="iconBox"> {/* icon */}
                  <div className=""></div>
                </div>
              </div>
              <div className="card">
                <div>
                  <div className="numbers">80</div>
                  <div className="cardName">모집완료</div>
                </div>
                <div className="iconBox"> {/* icon */}
                  <div className=""></div>
                </div>
              </div>
              <div className="card">
                <div>
                  <div className="numbers">150</div>
                  <div className="cardName">봉사관리</div>
                </div>
                <div className="iconBox"> {/* icon */}
                  <div className=""></div>
                </div>
              </div>
            </div>

            {/*detail list*/}
            <div className="detail_list">
              <div className="admin_volunteer">
                <div className="cardHeader">
                  <h2>봉사 관리</h2>
                  <Link to="/AdminPage/AdminDrawer" className="btn">more +</Link>
                </div>
                <table>
                <tr>
                  <td width="60px"><div className="imgBox"><img src="Spring.png"></img></div></td>
                  <td><h4>목록 1</h4></td>
                </tr>
                <tr>
                  <td width="60px"><div className="imgBox"><img src="Spring.png"></img></div></td>
                  <td><h4>목록 1</h4></td>
                </tr>
                <tr>
                  <td width="60px"><div className="imgBox"><img src="Spring.png"></img></div></td>
                  <td><h4>목록 1</h4></td>
                </tr>
                <tr>
                  <td width="60px"><div className="imgBox"><img src="Spring.png"></img></div></td>
                  <td><h4>목록 1</h4></td>
                </tr>
                <tr>
                  <td width="60px"><div className="imgBox"><img src="Spring.png"></img></div></td>
                  <td><h4>목록 1</h4></td>
                </tr>
                
                </table>
              </div>

              {/*new customer*/}
              <div className="volunteer_list">
              <div className="cardHeader">
                <h2>봉사자 목록</h2>
                <Link to="/AdminPage/AdminDrawer" className="btn">more +</Link>
              </div>
              <table>
                <tr>
                  <td width="60px"><div className="imgBox"><img src="Spring.png"></img></div></td>
                  <td><h4>홍길동</h4></td>
                </tr>
                <tr>
                  <td width="60px"><div className="imgBox"><img src="Spring.png"></img></div></td>
                  <td><h4>홍길동</h4></td>
                </tr>
                <tr>
                  <td width="60px"><div className="imgBox"><img src="Spring.png"></img></div></td>
                  <td><h4>홍길동</h4></td>
                </tr>
                <tr>
                  <td width="60px"><div className="imgBox"><img src="Spring.png"></img></div></td>
                  <td><h4>홍길동</h4></td>
                </tr>
                <tr>
                  <td width="60px"><div className="imgBox"><img src="Spring.png"></img></div></td>
                  <td><h4>홍길동</h4></td>
                </tr>
              </table>
            </div>
            </div>

            
        </div>
      </div>
      </div>
    </>
    );
}

export default AdminPage;