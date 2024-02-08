import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import  { fetchPost } from './slices/postSlice';
// import { fetchComments } from './slices/commentSlice';
import Post from './post';
function App() {
  const dispatch= useDispatch();

  useEffect(()=>{
    dispatch(fetchPost());
  },[dispatch])

  // const  handleComments=(id)=>{
  //   dispatch(fetchComments(id));
  // }

  const contents = useSelector((state)=>state.post.contents);
  const isLoading = useSelector((state)=>state.post.isLoading);
  const error = useSelector((state)=>state.post.error);
  // const Loading = useSelector((state)=>state.comments.isLoading);
  // const iserror = useSelector((state)=>state.comments.error);
  // const comments = useSelector((state)=>state.comments.comments);


  if(isLoading){
    return 'Loading...';
  }
  if(error){
    return error;
  }

  return(
    <div className='post-container'>
      {contents?.map((post)=>(
       <Post 
       post= {post}/>
      ))}
      
    </div>
  )
}


export default App;
