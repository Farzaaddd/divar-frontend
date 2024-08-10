import { useState } from "react";
import { useQuery } from "@tanstack/react-query"
import Main from "components/templates/Main"
import Sidebar from "components/templates/Sidebar"
import { getCategory } from "services/admin";
import { GetAllPosts } from "services/users"

import Loader from "components/modules/Loader.jsx"

const style = {display: "flex"}

const HomePage = () => {
  const [display, setDisplay] = useState([]);

  const {data: posts, isLoading: postLoading} = useQuery(["post-list"], GetAllPosts);
  const {data: categories, isLoading: categoryLoading} = useQuery(["get-categories"], getCategory);

  return (

    <>
      {postLoading || categoryLoading ? <Loader/> : <div style={style}>
      <Sidebar categories={categories} posts={posts} display={display} setDisplay={setDisplay}/>
      <Main posts={posts} postLoading={postLoading} display={display} setDisplay={setDisplay}/>
    </div>}
    </>
  )
}

export default HomePage