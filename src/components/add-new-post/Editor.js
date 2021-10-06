import React, {useState} from "react";
import ReactQuill, {Quill} from "react-quill";
import { Card, CardBody, Form, FormInput, Button,FormSelect } from "shards-react";
import data from "../../data/data"
import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";


const Editor = () => {



  const [post, setPost] = useState({
    Name: "",
    MainImage: "no-image.png",
    Category: "Business",
    Info: "Small test info",
    Language: "en",
    News: ""
   })

    const handleChange = (e) => {
      setPost({
        ...post,
        News: e,
      })
      console.log(e)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(post)
      data.post(`/blog/new`, {...post})
      .then(res => console.log(res))
      .catch(error => {
        console.log(error)
      })
      
    }

    const modules = {
      toolbar: [
        [{ 'header': [1, 2,3,4,5,6, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [
        {'list': 'ordered'}, 
        {'list': 'bullet'}, 
        {'indent': '-1'}, 
        {'indent': '+1'}
        ],
        [{ 'align': [] }],
        ['link', 'image'],
        [{ 'color': [] }, { 'background': [] }], 
        [{ 'direction': 'rtl' }],   
        [{ 'script': 'sub'}, { 'script': 'super' }], 
        [{ 'align': '' }, { 'align': 'center' }, { 'align': 'right' }, { 'align': 'justify' }]
        ['clean']
      ]
    }

    const formats = [
      'header',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image', 'font', 'background', 'color', 'code', 'size',
      'script', 'align', 'direction',
      'code-block', 'formula', 'video'
    ]

  return (
    <Card small className="mb-3">
      <CardBody>
        <Form onSubmit={(e) => {handleSubmit(e)}} className="add-new-post">
          <FormInput name="Name" onChange={(e) => setPost({...post, Name:e.target.value})} size="lg" className="mb-3" placeholder="Your Post Title" />
          <div id="editor">
            <ReactQuill
              onChange={(e) => handleChange(e)} 
              className="add-new-post__editor mb-1"
              modules={modules} 
              formats={formats}
              
            />
            
          </div>
           <div className="d-flex justify-content-between align-items-center mb-2 mt-2">
          
              <FormSelect style={{width: "150px"}}>
                <option>News</option>
                <option>Documentation</option>
              </FormSelect>
              <Button>Add Post</Button>
       
          </div>
        </Form>
      </CardBody>
    </Card>
  );
}

export default Editor;
