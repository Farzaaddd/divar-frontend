import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { getCategory } from "services/admin"
import { getCookie } from "utils/cookies.js"
import { resetPostFields } from "utils/helper";

import styles from "./AddPost.module.css"

const AddPost = () => {
    const [form, setForm] = useState({
        title: "",
        content: "",
        category: "",
        city: "",
        amount: null,
        images: null
    })
    const {data, isLoading} = useQuery(["get-categories"], getCategory);
    
    const changeHandler = (event) => {
        const name = event.target.name;
        if(name !== "images"){
            setForm({...form, [name]: event.target.value})
        } else{
            setForm({...form, [name]: event.target.files[0]});
        }
    }
    
    const addHandler = (event) => {
        event.preventDefault();

        const formData = new FormData();

        for(let item in form){
            formData.append(item, form[item]);
        }
        
        const token = getCookie("accessToken");
        axios.post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `bearer ${token}`
            }
        }).then(res => toast.success(res.data.message)).catch(err => toast.error("مشکلی پیش آمده است"))
    
        resetPostFields(event)
    }
  return (
    <form onChange={changeHandler} className={styles.form} onSubmit={addHandler}>
        <h3> افزودن آگهی </h3>

        <label htmlFor="title">عنوان</label>
        <input type="text" name="title" id="title"/>

        <label htmlFor="content">توضیحات</label>
        <textarea name="content" id="content"></textarea>

        <label htmlFor="amount">قیمت</label>
        <input type="text" name="amount" id="amount" />

        <label htmlFor="city">شهر</label>
        <input type="text" name="city" id="city" />

        <label htmlFor="category">عنوان</label>
        <select name="category" id="category">
            {data?.data.map(i => <option key={i._id} value={i._id}> {i.name} </option>)}
        </select>

        <label htmlFor="images"> عکس </label>
        <input type="file" name="images" id="images"/>

        <button type="submit" disabled={isLoading}> ارسال </button>

        <Toaster/>
    </form>
  )
}

export default AddPost