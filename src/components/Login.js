import React, { Component } from 'react'
import  Grid  from '@material-ui/core/Grid'
import { Card, CardContent, TextField, Button } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Swal from 'sweetalert2'


const bigAvatar = {
      width: 60,
      height: 60,
    
  };

class Login extends Component{
    constructor(){
        super()
        this.state = {
            username:'',
            password:'',
        }

        this.loginController = this.loginController.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    loginController(e){
        e.preventDefault()
        console.log(this.state.username)
        console.log(this.state.password)
        if(this.state.username === 'admin' && this.state.password === 'secret'){
            Swal.fire({
                title: 'Welcome!',
                text: 'Heres your data',
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                animation: false
              })
        } else {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href>Please cheack your username and password</a>'
              })
        }
    }

    onChangeHandler(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }


  render() {
    return (
        <Grid container alignItems="center" justify="center" id="login">
            <Card id="card">
                <CardContent>
                    <form onSubmit={this.loginController}>
                        <Grid item xs={12} container alignItems="center" justify="center">
                            <Avatar style={bigAvatar}>
                                <Avatar alt="Remy Sharp" 
                                style={bigAvatar}
                                src="https://storage.pixteller.com/designs/designs-images/2018-07-28/11/icon-graphic-simpleicon-iconelement-frontal-1-5b5cd1250a171.png" />
                            </Avatar>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                defaultValue="Username:admin password:secret"
                                id="outlined-read-only-input"
                                margin="normal"
                                variant="outlined"
                                InputProps={{
                                    readOnly: true,
                                  }}
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                label="Username/Email"
                                id="outlined-required"
                                name="username"
                                defaultValue={this.state.username}
                                margin="normal"
                                variant="outlined"
                                onChange={this.onChangeHandler}
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Password"
                                name="password"
                                defaultValue={this.state.password}
                                margin="normal"
                                variant="outlined"
                                type="password"
                                onChange={this.onChangeHandler}
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" size="large" type="submit">
                                Login
                            </Button>
                        </Grid>
                    </form>
                </CardContent>
            </Card>           
        </Grid>
    )
  }
}


export default Login