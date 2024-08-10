import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { postDetail } from "services/admin";
import { sp } from "utils/numbers";
import styles from "./PostDetails.module.css"
import Loader from "../modules/Loader";


const PostDetails = () => {
  const { id } = useParams();
  const {data} = useQuery(["post-detail"], postDetail);
  const showPost = data?.data.posts.filter(post => post._id == id);
  console.log(showPost);

  const baseURL = import.meta.env.VITE_BASE_URL;

  return (
    <div className={styles.container}>
      {showPost ? 
      <>
        <div key={showPost[0]._id} className={styles.card}>
          <div className={styles.cardImage}>
            <img src={`${baseURL}${showPost[0].images[0]}`} alt="image" />
          </div>
          <div className={styles.info}>
            <p>
              <span> تاریخ:  </span>
              {new Date(showPost[0].createdAt).toLocaleDateString("fa-IR")}
            </p>
            <p> 
              <span> عنوان:  </span>
              {showPost[0].options.title}
            </p>
            <p> 
              <span>قیمت:</span>
              {sp(showPost[0].amount)} تومان 
            </p>
            <p> 
              <span>شهر:</span>
              {showPost[0].options.city} 
            </p>
            <p> 
              <span> توضیحات: </span>
              {showPost[0].options.content}
            </p>
         </div>
        </div>
      </> : <Loader/>
      }

    </div>
  )
}

export default PostDetails