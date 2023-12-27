import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};



const Add = () => {
const [imgInp,setImgInp]=useState()
const [titleInp,setTitleInp]=useState()
const [descInp,SetDescInp]=useState()
const addArticle=()=>{
   
    fetch('http://localhost:3000/', {
        method: 'POST',
        body: JSON.stringify({
          id:Date.now(),
          img:imgInp,
          title:titleInp,
          description:descInp,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
   
  
}
return(
  <div style={{padding:"200px 0"}}>
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
      margin:"auto"
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Img Url"
      name="img"
      rules={[
        {
          required: true,
          message: 'Please input img!',
        },
      ]}
    >
      <Input  onChange={(e)=>setImgInp(e.target.value)} />
    </Form.Item>

    <Form.Item
      label="Title"
      name="title"
      rules={[
        {
          required: true,
          message: 'Please input title!',
        },
      ]}
    >
      <Input onChange={(e)=>setTitleInp(e.target.value)} />
    </Form.Item>
    <Form.Item
      label="Description"
      name="description"
      rules={[
        {
          required: true,
          message: 'Please input description!',
        },
      ]}
    >
      <Input onChange={(e)=>SetDescInp(e.target.value)} />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" onClick={addArticle}>
        Add
      </Button>
    </Form.Item>
  </Form>
  </div>)
};
export default Add;