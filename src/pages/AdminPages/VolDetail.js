import * as React from "react";
import { Link, Outlet, Route, useLocation, useNavigate } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import AdminNav from "./AdminNav";
import Adminappbar from "./Adminappbar";
import './VolDetail.css';
import { useSelector } from "react-redux";
import axios from "axios";
import Button from '../../components/Tools/Button';
import dayjs from "dayjs";

function VolDetail(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const menuId = 'primary-search-account-menu';

    const location = useLocation();
    const navigate = useNavigate();

    //const volId = useSelector((state) => state.counter.volunteer_Select.volId);

    const [data1, setData1] = React.useState({});

    const testData1 = useSelector((state) => state.counter.volunteer_Select);  // 봉사 정보
    const testData2 = useSelector((state) => state.user.organization_Information);  // 기관 정보

    const [orgName, setOrgName] = React.useState(testData2.orgName);                           // 기관 담당자 이름
    const volContent = location.state.value1;        // 봉사 본문 내용
    const volCurNumber = location.state.value4;      // 현재 신청 인원
    const volEndTime = location.state.value5;        // 마감 시간
    // const [volId, setVolId] = React.useState(testData1.volId);                                 // 글 번호
    const volLocation = location.state.value9;       // 위치
    const volOrganization = location.state.value8;   // 모집기관
    const volRecPeriod = location.state.value3;      // 모집 기간
    const volRecPersonnel = location.state.value7;   // 모집 인원
    const volStTime = location.state.value6;         // 시작 시간
    const volTitle = location.state.value;           // 제목
    const volType = location.state.value2;           // 봉사 유형

    const volId = location.state.valueVolId;  // 글 번호

    // const handleVolTitle = (e) => {  // 봉사 글 제목
    //     setVolTitle(e.target.value);
    // }

    // const handleContent = (e) => {
    //     setVolContent(e.target.value);


    const handleOrgName = (e) => {
        setOrgName(e.target.value);
    }

    // const handleVolType = (e) => {
    //     setVolType(e.target.value);
    // }

    // const handleCurNumber = (e) => {
    //     setVolCurNumber(e.target.value);
    // }

    // const handleVolStTime = (e) => {
    //     setVolStTime(e);
    // }

    // const handleVolEndTime = (e) => {
    //     setVolEndTime(e);
    // }

    // const handleVolRecPeriod = (e) => {
    //     setVolRecPeriod(e);
    // }

    // const handleVolRecPersonnel = (e) => {
    //     setVolRecPersonnel(e.target.value);
    // }

    // const handleVolLocation = (e) => {
    //     setVolLocation(e.target.value);
    // }

    // const handleVolOrganization = (e) => {
    //     setVolOrganization(e.target.value);
    // }

    console.log(orgName);
    console.log(volTitle);
    console.log(volId);

    const onDelete = React.useCallback(() => {  // 모집 글 삭제

        try {
            axios.get('/together/delete/volunteer', { params: { volId: volId } })
                .then((response) => {
                    console.log(response.data);
                    alert("[삭제되었습니다!]");
                    navigate('/AdminPage/CurrentRecruit')
                })
                .catch((error) => {
                    console(error);
                })
        } catch (error) {
            console.log(error);
        }
    });

    return (
        <>
            <Outlet />
            <div className="VolDetail_body">
                <div className="VolDetail_main">
                    {/* 네비게이션 */}
                    <AdminNav />

                    <Adminappbar />
                    {/* main */}
                    <div className="VolDetail_dashboard">
                        <div>
                            <div className="VolDetail_title">
                                <div>제목: {volTitle}</div>
                                <div>본문: {volContent}</div>
                                <div>봉사 유형: {volType}</div>
                                <div>기관명: {orgName}</div>
                                <div>현재 신청 인원: {volCurNumber}</div>
                                <div>시작 시간: {volStTime}</div>
                                <div>마감 시간: {volEndTime}</div>
                                <div>모집 기관: {volOrganization}</div>
                                <div>모집 인원: {volRecPersonnel}</div>
                                <div>모집 기간:{volRecPeriod}</div>
                                <div>위치:{volLocation}</div>
                            </div>
                        </div>
                        <div>
                            <button type="button" onClick={onDelete} className="onBtnDelete">삭제</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VolDetail;