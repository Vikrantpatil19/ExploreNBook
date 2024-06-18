import React , { useEffect , useState } from 'react';
import { Navigate } from 'react-router-dom';
import img1 from './img3.png';
import img2 from './img2.jpg';
import { auth , provider} from "./config";
import { signInWithPopup } from 'firebase/auth';
import axios from 'axios';
import "./Login.css"



function Login() {
    
    //State to store the user's email.
    const [value , setValue] = useState('');

    //State to track if the user is logged in.
    const [loggedIn , setLoggedIn] = useState(false);

    //function to handel the login process
    const handelLogin = () =>{

        //Signs in the user with a google popup and returns user data upon successful login.
        signInWithPopup(auth , provider).then(async (data) =>{
            setValue(data.user.email);

            localStorage.setItem("email" , data.user.email);
            localStorage.setItem("userName" , data.user.displayName);
            localStorage.setItem("userPhoto" , data.user.photoURL);

            setLoggedIn(true);

            //send user data directly in the post request

            const response = await axios.post(`${process.env.REACT_APP_API_URL}/user` ,{
                email: data.user.email,
                userName: data.user.displayName,
                userPhoto: data.user.photoURL
            });

            console.log('User Data Recorded' , response.data);
        });
    };

    useEffect(() => {
        setValue(localStorage.getItem("email"));
    }, []);

    console.log(value);

    if(loggedIn){
        return <Navigate to="/dashboard" replace={true} />;
    }
 
 
 
    return (
    <>
      
      <div className="container col-xl-10 col-xxl-8 px-4 py-5 mb-5">
      <div className="row align-items-center g-lg-5 py-5 mb-5">
        <div className="col-lg-7 text-center text-lg-start mb-4 mb-lg-0">
          <img src={img1} alt='img' className="img-fluid" style={{ maxHeight: "600px" }} />
          <hr className='my-4' />
          <h1 className="fw-bold lh-1 mb-3">Book Your Ride Now</h1>
          <p className="lead">Enjoy your seamless experience by signing up now!</p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 shadow bg-light">
            <img src={img2} alt='img' className="img-fluid mb-4" style={{ maxHeight: "350px" }} />
            <button onClick={handelLogin} className="w-100 btn btn-outline-info btn-lg d-flex align-items-center justify-content-center" type="button">
              <img className="icon me-2" src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="Google Icon" style={{ height: "24px" }} />
              Sign in with Google
            </button>
            <hr className="my-4" />
            <small className="text-muted">By signing in, you agree to the terms of use.</small>
          </form>
        </div>
      </div>
    </div>
    
    
    
    </>
  )
}

export default Login