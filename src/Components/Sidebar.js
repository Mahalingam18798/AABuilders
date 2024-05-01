import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaRegSun, FaChevronRight, FaWrench, FaRegFileAlt, FaRegChartBar, FaChevronLeft } from "react-icons/fa"
function Sidebar(){

    const [subMenu, setSubMenu] = useState(null);

    
    return(
        
        <div className=" bg-[#5e73d3] h-[100%] px-[15px] ">
            <div className="px[15px] py-[25px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]">
                <h1 className="text-white text-[15px] leading-[21px] font-extrabold cursor-pointer">Admin Panel</h1>
            </div>
            <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]">
                <FaTachometerAlt color="white"/>
                <p className=" text-[12px] leading-[15px] text-white font-bold cursor-pointer">Dashboard</p>
            </div>

            <div className=" pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
                <p className=" text-[8px] font-extrabold leading-[15px] text-white/[0.4]">INTERFACE</p>
                <div className=" flex items-center justify-between gap-[11px] py-[15px] cursor-pointer">
                    <div className=" flex items-center gap-[10px]">
                        <FaRegSun color="white"/>
                        <p className=" text-[12px] leading-[15px] font-normal text-white">Components</p>
                    </div>
                    <FaChevronRight color="white" size={10}/>
                </div>

                <div className=" flex items-center justify-between gap-[11px] py-[15px] cursor-pointer">
                    <div className=" flex items-center gap-[10px]">
                        <FaWrench color="white"/>
                        <p className=" text-[12px] leading-[15px] font-normal text-white">Utilities</p>
                    </div>
                    <FaChevronRight color="white" size={10}/>
                </div>
            </div>
            <div className=" pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
                <p className=" text-[8px] font-extrabold leading-[15px] text-white/[0.4]">ADDONS</p>
                <div className=" flex items-center justify-between gap-[11px] py-[15px] cursor-pointer"
                >
                    <div className=" flex items-center gap-[10px]">
                        <FaRegFileAlt color="white"/>
                        <p className=" text-[12px] leading-[15px] font-normal text-white" onClick={() => setSubMenu('expanses_form')}>Forms</p>
                    </div>
                    <FaChevronRight color="white" size={10}/> 
                </div>
                
                <div >
                    {subMenu === 'expanses_form' && (
                            <div className=" ml-8">
                                <p className=" text-sm text-white cursor-pointer"> <Link to="/expensesform">Expanses Form</Link></p>
                                <p className="text-sm text-white pt-3 cursor-pointer">New Form</p>
                                
                            </div>
                        )}
                </div>
                 
                <div className=" flex items-center justify-between gap-[11px] py-[15px] cursor-pointer">
                    <div className=" flex items-center gap-[10px]">
                        <FaRegChartBar color="white"/>
                        <p className=" text-[12px] leading-[15px] font-normal text-white">Charts</p>
                    </div>
                    <FaChevronRight color="white" size={10}/>
                </div>
            </div>
            <div className=" flex items-center justify-center pt-[25px]">
                <div className=" h-[40px] w-[40px] bg-[#3C5EC1] rounded-full flex items-center justify-center cursor-pointer">
                    <FaChevronLeft color="white" />
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}
export default Sidebar