import React, { useEffect, useRef, useState } from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Modal from "../components/UI/modal/Modal";
import Button from "../components/UI/button/Button";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import Pagination from "../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import Input from "../components/UI/input/Input";
import Select from "../components/UI/select/Select";
import { getPageCount } from "../hooks/usePagination";


function Posts() {

  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef()
  
  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
  const response = await PostService.getAll(limit,page)
    setPosts([...posts, ...response.data])
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit))
  })

  useObserver(lastElement, page<totalPages, isPostsLoading, () => {
    setPage(page + 1) 
    console.log(10);
  })

  useEffect(()=>{
    fetchPosts(limit, page)
  },[page, limit])

  // useEffect(()=>{
  //   fetchPosts()
  // },[page])


  const createPost = (newPost) => {
    setPosts([...posts,newPost])
    setModal(false)
  }
  
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) =>{
    setPage(page)
  }
 
  
  return (
    <div className="App">
      <Button style={{marginTop: 30}} onClick={() => setModal(true)}>Создать пост</Button>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create = {createPost}/>
      </Modal>
      
      <hr style={{margin:'15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <Select value={limit} onChange={value => setLimit(value)} defaultValue = "Колличество элементов на странице"
      options={[{value: 5, name:'5'},
                {value: 10, name:'10'},
                {value: 25, name:'25'},
                {value: -1, name:'Все элементы'},]}/>
      {postError && <h1> Произошла ошибка ${postError}</h1>}
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов 1'/>
      <div ref={lastElement} style={{height: 20, background: 'red'}}></div>
      {isPostsLoading  && 
      <div style={{display:"flex", justifyContent:'center', marginTop: 50}}><Loader/></div>}
      <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
      
      
    </div>
  );
}

export default Posts;
