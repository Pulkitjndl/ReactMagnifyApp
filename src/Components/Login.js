import React from 'react'
import GoogleLogin from 'react-google-login'
import {
    Card, CardBody,
    CardTitle
} from 'reactstrap';
import './topbar.css'



const gradient = {
    padding: "20px",
    width: "100%",
    height: "740px",
    background: "linear-gradient(to right, #0083B0, #00B4DB)"
}

export default function Login() {

    const successRes = (res) => {

        localStorage.setItem("loggedIn", "true")
        localStorage.setItem("email", res.profileObj.email)
        localStorage.setItem("name", res.profileObj.givenName)
        console.log(res.profileObj)
        window.location.pathname = '/dashboard'
    }

    const failureRes = (res) => {
        console.log(res)
    }

    return (
        <div style={gradient}>
            <div className="d-flex justify-content-center">
                <Card style={{ padding: "10px" }} className="resDiv">
                    <CardBody>
                        <CardTitle>
                            <h3 style={{ fontWeight: "bold" }}>Authenticate via google</h3>
                        </CardTitle>
                    </CardBody>
                    <img width="80%" className="mx-auto" />
                    <CardBody>
                        <GoogleLogin
                            clientId="361787492267-j07jsgsumi2pejk87vrvkln7h4ndipnb.apps.googleusercontent.com"
                            onSuccess={successRes}
                            onFailure={failureRes}
                            redirectUri="/dashboard"
                            buttonText = {<b> Sign in with Google </b>}
                            className="googlebutton mt-4 rounded-pill"
                        />
                    </CardBody>
                </Card>
            </div>


        </div>
    )
}
