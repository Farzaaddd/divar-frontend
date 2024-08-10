import { useQuery, useMutation, useQueryClient  } from "@tanstack/react-query"
import { getCategory, deleteCategory } from "services/admin"
import Loader from "components/modules/Loader"

import styles from "./CategoryList.module.css"

const CategoryList = () => {
    const {data, isFetching} = useQuery(["get-categories"], getCategory);

    const queryClient = useQueryClient()
    const {mutate, id} = useMutation(deleteCategory, {
        onSuccess: () => queryClient.invalidateQueries("category-id")
    });

    const deleteHandler = (id) => {
        mutate(id)
    }
  return (
    <div className={styles.list}>
        {isFetching ? <Loader/> : 
            data.data.map(item => 
                <div key={item._id}>
                    <img src={`${item.icon}.svg`} alt="" />
                    <h5> {item.name} </h5>
                    <p> <button className={styles.button} onClick={() => deleteHandler(item._id)}> Delete </button> slug: {item.slug} </p>
                </div>
            )
        }
    </div>
  )
}

export default CategoryList