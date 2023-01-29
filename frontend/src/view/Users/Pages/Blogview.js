import React from 'react'
import Navbar from '../../../Components/Users/Navbar/navbar';
import Footer from '../../../Components/Users/Footer/footer';
import axios from 'axios';
import './Blogview.css';

const Blogview = () => {
    //fetch blogs from backend
    const [blogs, setBlogs] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const url = "/api/blogs";
        axios
            .get(url)
            .then((res) => {
                setBlogs(res.data);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    
  return (
    <>
    <Navbar/>
    <div>
        <div className='container'
            style={{marginTop: '70px', marginBottom: '100px',border: '1px solid #558a2e', padding: '20px', borderRadius: '10px'}}
        >
            <h2
            style={{textAlign: 'center', color: '#558a2e'}}
            >
                Blogs
            </h2>
            <div className='container'>
                <div className='row'>
                    {
                        blogs.map((blog) => {
                            return (
                                <div className='col-md-4'>
                                    <div className='card' style={{marginTop: '20px', marginBottom: '20px'}}>
                                        <div className='card-body'>
                                            <h5 className='card-title'>{blog.title}</h5>
                                            <p className='card-text'>{blog.content}</p>
                                            <button
                                                className='btn btn-primary'
                                                style={{backgroundColor: '#558a2e', border: 'none',marginBottom: '10px'}}
                                                onClick={() => {
                                                    window.open(blog.link, '_blank', 'noreferrer');
                                                }}
                                            >
                                                Read More
                                            </button>
                                            <img src={blog.image} alt='blog image' style={{width: '300px',height:'200px'}}/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                    }
                    </div>
            </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Blogview
