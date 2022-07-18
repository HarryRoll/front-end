import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import DashboardLayout from './MainLayout/MyLayout'
import RegionView from './ViewSaga/Region'
import EmployeeView from './ViewSaga/Employee'
import CountryView from './ViewSaga/Country'
import Home from './MainLayout/Home'


export default function Route() {
  return useRoutes([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            { path: 'home', element: <Home />},
            { path: 'region', element: <RegionView /> },
            { path: 'employee', element: <EmployeeView /> },
            { path: 'country', element: <CountryView /> },
        ]
    },
    { path: '*', element: <Navigate to='/404' replace /> }
])
}
