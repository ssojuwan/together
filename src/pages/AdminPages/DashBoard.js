import * as React from "react";
import './DashBoard.css';
import { IconButton, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

function DashBoard() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const menuId = 'primary-search-account-menu';

    return(
        <>
        {/* main */}
        <div className="Adminpage_dashboard">
          <div className="dashboard_topbar">
            <div className="Admin_title">
              <Typography>Dashboard</Typography>
              </div>

            {/* 관리자 계정 표시 */}
            <div className="Admin_user"> 
               <Typography>관리자님</Typography>
               <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit">
                <AccountCircle />
               </IconButton>
            </div>
            </div>

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
                  <a href="#" className="btn">View All</a>
                </div>
                <table></table>
              </div>

              {/*new customer*/}
             <div className="volunteer_list">
              <div className="cardHeader">
                <h2>봉사자 목록</h2>
                <a href="#" className="btn">View All</a>
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

            
        </div><p>hello</p>
        </>
    );
}

export default DashBoard;