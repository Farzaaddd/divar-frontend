import { sp } from "utils/numbers";
import styles from "./Main.module.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Main = ({posts,
  postLoading,
  display,
  setDisplay}) => {

  useEffect(() => {
    setDisplay(posts?.data.posts);    
    
  }, [postLoading])
  
  const baseURL = import.meta.env.VITE_BASE_URL;
  return (
    <div className={styles.container}>
      {display ? (display.map((post) => (<div key={post._id} className={styles.card}>
        <div className={styles.info}>
            <p> {post.options.title} </p>
            <div>
              <p> {sp(post.amount)} </p>
              <span> {post.options.city} </span>
            </div>
              <Link to={`/${post._id}`} className={styles.button}> جزئیات </Link>
        </div>
        <img src={`${baseURL}${post.images[0]}`} alt="image" />
      </div>))) : 
      <div className={styles.nothing}>
        <h4> هیچ محصولی با این دسته بندی وجود ندارد </h4>
      </div>}
    </div>
  )
}

export default Main