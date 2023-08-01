import './Style.css'
import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <div style={{display: 'flex', height: "100vh", overflow:'scroll initial'}} >
            <CDBSidebar textColor='#fff' backgroundColor='#a7a8f4' className='styleSidebar'>
                <CDBSidebarHeader prefix={<i className='fa fa-bars fa-large'></i>}>
                    <a href="/" className='text-decoration-none' style={{color: 'inherit'}}></a>
                </CDBSidebarHeader>

                <CDBSidebarContent className='sidebar-content styleSidebar'>
                    <CDBSidebarMenu className='styleSidebar'>
                        <NavLink exact to='/' activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon='home' >Home</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to='/exame' activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon='table'>Exame</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to='/consulta' activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon='columns'>Consulta</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to='/paciente' activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon='user'>Paciente</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to='/prontuario' activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon='chart-line'>Prontuario</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{textAlign: 'center'}}>
                    <div className='sidebar-btn-wrapper'
                          style={{
                            padding: '20px 5px'
                          }}
                    >
                        Sidebar Footer

                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>

        </div>
    )
}