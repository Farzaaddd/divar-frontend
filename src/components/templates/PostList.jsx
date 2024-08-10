import { useQuery } from '@tanstack/react-query'
import { GetPosts } from 'services/users'
import Loader from "components/modules/Loader"
import { sp } from 'utils/numbers';
import styles from "./PostList.module.css"

const PostList = () => {
    const {data, isLoading} = useQuery(["my-post-list"], GetPosts);
    const baseURL = import.meta.env.VITE_BASE_URL;
  return (
    <div className={styles.list}>
        {isLoading ? <Loader/> : 
        <>
            <h3> آگهی های شما </h3>
            {data.data.posts.map(post => 

            <div key={post._id} className={styles.post}>
               <img src={`${baseURL}${post.images[0]}`} alt="image" />
               <div>
                <p> {post.options.title} </p>
                <span> {post.options.content} </span>
               </div>

               <div className={styles.price}>
                <p> {new Date(post.createdAt).toLocaleDateString("fa-IR")} </p>
                <span>{sp(post.amount)} تومان </span>
               </div>
           </div>
            )}
        </> }
    </div>
  )
}

export default PostList