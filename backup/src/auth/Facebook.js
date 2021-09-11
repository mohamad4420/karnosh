import React, {Component} from 'react';
import FacebookLogin  from 'react-facebook-login';
export default class Facebook extends Component {

    responseFacebook(response) {
       
         var email = response.profileObj.email;
         var name =response.profileObj.name;
         var googleId = response.profileObj.googleId;
         var img = response.profileObj.imageUrl;
      }
  
    render(){
          return (
            
            <>
              <FacebookLogin
          appId="774501293378309"
          autoLoad={false}
          fields="name,email,picture"
          callback={this.responseFacebook}
          cssClass="my-facebook-button-class"
          icon="fa-facebook"
          textButton="الدخول"
        />
            </>
        );
    }
}