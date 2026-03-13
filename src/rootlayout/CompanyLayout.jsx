import React from 'react'
import { Outlet } from 'react-router-dom';
import Companies from '../pages/Companies';

const CompanyLayout = () => {
  return (
    <div>
        <Companies/>
        <Outlet/>
    </div>
  )
}

export default CompanyLayout;