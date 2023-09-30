import { getDocs, collection, addDoc, query, where } from "firebase/firestore"
import Button from "../components/Button"
import { auth, db } from "../config/firebase"
import { signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect, useState } from "react"


const Home = () => {

  interface POST {
    id: string,
    title: string,
    desc: string,
    username: string
  }
  
  const [posts, setPosts] = useState<POST[]>()
  const [user] = useAuthState(auth)
  const signout = async () => await signOut(auth)
  const postsRef = collection(db, "posts")
  const getPosts = async () => {
    const data = await getDocs(postsRef)
    setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id} as POST)))
  }
  const onSubmit = async (post: POST) => { 
    await addDoc(likesRef, {
      userid: user?.uid,
      postid: post.id
    })
 }

  const likesRef = collection(db, "likes")
  
  useEffect(() => {
    getPosts()
    
  }, [])

  return (
    <div className="flex flex-col items-center justify-center p-10 border rounded-xl shadow-2xl max-w-sm mx-auto">
      {user ? <><img src={user?.photoURL || ''} alt="" width='100' className="rounded-full"/><br />
      <p className="my-4">{user?.displayName}</p>
      <Button text="Sign out" function={signout}/></> : "No user logged in"}
      {posts?.map((post) => {
        //const likesDoc = query(likesRef, where("postid", "==", post.id))
        //const getLikes = async () => {
        //  const data = await getDocs(likesDoc)
        //  console.log(data.docs.length)
        //  setLikeAmount(data.docs.length)
        //}
        return (
        <div className="p-4 mt-6 border rounded-lg bg-orange-100 shadow-lg" key={post.id}>
          <strong>Title : </strong>{post.title}<br/>
          <strong>Description : </strong>{post.desc}<br/>
          <p>@{post.username}</p>
          <button className="border mt-2  border-black bg-gray-100 rounded-lg" onClick={() => onSubmit(post)}><img src="../like.png" width="30" /></button>
        </div>)
      })}
    </div>
  )
}

export default Home