import { Navigate, Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import AuthPage from "pages/AuthPage";
import HomePage from "pages/HomePage";
import Dashboard from "pages/Dashboard";
import AdminPage from "pages/AdminPage";
import NotFound from "pages/NotFound";
import { getProfile } from "services/users";
import Loader from "../components/modules/Loader";
import PostDetails from "../components/templates/PostDetails";


const Router = () => {
  const {data, isLoading, error} = useQuery(["profile"], getProfile)

  if (isLoading) return <Loader/>
  return (
      <Routes>
        <Route path="/" index element={<HomePage/>}/>
        <Route path="/dashboard" element={data ? <Dashboard/> : <Navigate to="/auth"/>}/>
        <Route path="/auth" element={data ? <Navigate to="/dashboard"/> : <AuthPage/>}/>
        <Route path="/admin" element={data && data.data.role === "ADMIN" ? <AdminPage/> : <Navigate to="/"/>}/>
        <Route path="/:id" element={<PostDetails/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
  )
}
// "09189990099"  ADMIN role 
export default Router