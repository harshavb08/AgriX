import React from 'react';
import Navbar from '../../../Components/Users/Navbar/navbar';
import Footer from '../../../Components/Users/Footer/footer';
import axios from 'axios';

const BlogWrite = () => {
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [image, setImage] = React.useState('');
  const [link, setLink] = React.useState('');

  const data={
    blog:[
      {
        title: title,
        content: content,
        image: image,
        link: link,
      }
    ]
  }

  const add_blog = () => {
    const url = "/api/blogs/add";
    axios
      .post(url, data)
      .then(
        alert('Blog Added Successfully'),
        setContent(''),
        setTitle(''),
        setImage(''),
        setLink('')
      )
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
        <Navbar/>
        <div>
            <div className='container'
            style={{marginTop: '70px', marginBottom: '100px',border: '1px solid #558a2e', padding: '20px', borderRadius: '10px'}}
            >
              <h1
              style={{textAlign: 'center', color: '#558a2e'}}
              >Write a Blog</h1>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log(title, content, image);
                    add_blog();
                  }}
                >
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name='title'
                      value={title} onChange={(e) => setTitle(e.target.value)}
                      style={{border: '1px solid #558a2e'}}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Content</label>
                    <textarea
                        className="form-control"
                        id="content"
                        rows={3}
                        defaultValue={""}
                        value={content} onChange={(e) => setContent(e.target.value)}
                        style={{border: '1px solid #558a2e'}}
                    />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlFile1">Image URL</label>
                      <input
                        type="text"
                        className="form-control-file"
                        id="image"
                        name='image'
                        value={image} onChange={(e) => setImage(e.target.value)}
                        style={{border: '1px solid #558a2e'}}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlFile1">Article URL</label>
                      <input
                        type="text"
                        className="form-control-file"
                        id="link"
                        name='link'
                        value={link} onChange={(e) => setLink(e.target.value)}
                        style={{border: '1px solid #558a2e'}}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary"
                    style={{backgroundColor: '#558a2e', border: 'none',textAlign: 'center',alignItems: 'center', alignContent: 'center', justifyContent: 'center', display: 'flex'}}
                    > Submit
                    </button>
              </form>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default BlogWrite
