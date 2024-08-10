import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { createQueryObject, getInitialQuery, filterProducts } from "utils/helper";
import styles from "./Sidebar.module.css"

const Sidebar = ({categories, posts, display, setDisplay}) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryHandler = (event) => {
    const target = event.target.innerText;
    setActiveCategory(target);

    setQuery((query) => createQueryObject(query, { target }));


    if(target === "همه"){
      setDisplay(posts?.data.posts)
    } else if(target === "کالای دیجیتال"){
      setDisplay(posts?.data.posts.filter((post) => post.category === "66acdf0fe64f740ffda7b831"))
    }  else if(target === "املاک"){
      setDisplay(posts?.data.posts.filter((post) => post.category === "66aa72f32cce10cb27e752b2"))
    } else if(target === "کالای خدماتی"){
      setDisplay(posts?.data.posts.filter((post) => post.category === "669f58b4458f43852d193e29"))
    } else if(target === "خودرو"){
      setDisplay(posts?.data.posts.filter((post) => post.category === "66aa72c92cce10cb27e752a0"))
    } else if(target === "سرگرمی"){
      setDisplay(posts?.data.posts.filter((post) => post.category === "66aa73032cce10cb27e752b8"))
    } else if(target === "وسایل شخصی"){
      setDisplay(posts?.data.posts.filter((post) => post.category === "66aa73382cce10cb27e752c4"))
    } else if(target === "خدمات"){
      setDisplay(posts?.data.posts.filter((post) => post.category === "66ae5ec4479e6b411f723611"))
    }
  }
   // looking for data we already searched it 👇
   useEffect(() => {
    setQuery(getInitialQuery(searchParams));
  }, []);

  // getting data we searched it 👇
  useEffect(() => {
    setSearchParams(query);
    let finalBlogs = filterProducts(display, query.target);;
    setDisplay(finalBlogs);
  }, [query]);


  return (
    <div className={styles.sidebar}>
        <h4> دسته ها </h4>
        {categories?.data.map(category => 
        <li key={category._id} onClick={categoryHandler}>
            <img src={`${category.icon}.svg`} alt="icon" />
            <p className={category.name == activeCategory ? styles.active : null}> {category.name} </p>
        </li>)}
    </div>
  )
}

export default Sidebar