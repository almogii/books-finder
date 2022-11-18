import React,{useState,useEffect} from 'react';
import axios from 'axios'

const Search = (props) => {
    const userName= localStorage.getItem('userName'.toString());

    // const[BookName,SetbookName]=useState('')
    const book=localStorage.getItem('BookName'.toString());
    const [bookData,setData]=useState([]);
    const [search,setSearch]=useState('')
    const searchBook=(e)=>{
        if(e.key==="Enter"){
           axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBYXs9jQM4MmRywvsG042QUH-TTcgT7IFk').then(res=>setData(res.data.items)).catch(err=>console.log(err))
        } 
    }
    useEffect(()=>{
        localStorage.setItem('BookName',JSON.stringify(search))
      },[search]);

        // console.log(search);

        // const books=(book)=>{
        //     if(!searchBook(book)){
        //         alert('no books are found')
        //     }
        //     else setData(book).map(x=>{})
        // }

    return ( <div className='search'>
        <h1 className='search-window'>
        hey {userName} welcome to our book shop 
        </h1>
        <div className='search-text'>
            <input type='text'
            placeholder='please write your book name'
            value={search}
            onChange={e=>setSearch(e.target.value)}
            onKeyPress={searchBook}/>
            <button className='search-btn'>search</button>
            <div className='container'>
                {
                    
                }
            </div>
        </div>



    </div> );
}
 
export default Search;