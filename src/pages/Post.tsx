import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore"
import { db } from "../config/firebase"
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const Post = () => {

  const [user] = useAuthState(auth)
  const navigate = useNavigate()


  interface DATA {
    title: string,
    desc: string
  }

    const schema = yup.object().shape({
        title: yup.string().required("You must enter a title!"),
        desc: yup.string().required("You must enter a description!"),
   })
    const {register, handleSubmit, formState: {errors}} = useForm<DATA>({
        resolver: yupResolver(schema)
    })
    const onSubmit = async (data: DATA) => { 
        await addDoc(postsRef, {
          ...data,
          username: user?.displayName,
          id: user?.uid
        }).then(() => { 
          navigate("/")
        })
     }

    const postsRef = collection(db, "posts")



  return (
    
<form className="bg-indigo-500 p-10 rounded-xl max-w-lg mx-auto" onSubmit={handleSubmit(onSubmit)}>
  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
    <input {...register("title")} type="text" className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title..." />
    <p className="text-white">{errors.title?.message}</p>
  </div>
  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
    <textarea {...register("desc")} className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description goes here..." />
    <p className="text-white">{errors.desc?.message}</p>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

  )
}

export default Post