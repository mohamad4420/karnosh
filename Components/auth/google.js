  
import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import axios from 'axios'
export class Google extends Component {




  responseGoogle= async (response)=> {
var email = response.profileObj.email;
var name =response.profileObj.name;
var googleId = response.profileObj.googleId;
var img = response.profileObj.imageUrl;
var ac = response.accessToken;
const data = {
            "email":email,
            "name":name,
            "idAcount":googleId,
            "im":img,
            "accessToken":ac,
            "social":"google"
            }
axios.post(process.env.domains+'/users/add',data).then(()=>{}).catch((err)=>{})

let res= await axios.post(process.env.domains+'/users/getlists',data);
  localStorage.setItem('list',res.data.data.split(','))


localStorage.setItem('da', JSON.stringify(data))

location.reload();
  }

 
  render() {

    return (
      <div>
        
        <GoogleLogin 
        className="google"
        clientId="796944884012-7fnc2vgb6bc7ili6u0jufna9ko4u2ui1.apps.googleusercontent.com"
        buttonText="الدخول"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        
        />
      </div>
    )
  }
}

export default Google;