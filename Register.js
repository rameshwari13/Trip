import React from 'react';

export default function Register(){
    return (

        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>

            <div className="form-group text-left">
                <label htmlFor="exampleInput">First Name</label>
                <input type="text" 
                       className="form-control" 
                       id="name" 
                       aria-describedby="text" 
                       placeholder="Enter Name" required
                />
               
                </div>

                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Last Name</label>
                <input type="text" 
                       className="form-control" 
                       id="lname" 
                       aria-describedby="text" 
                       placeholder="Enter Last name" required
                />
               
                </div>

                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" required
                />
               
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password" required
                    />
                </div>
               
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Register
                </button>
                
            </form>
        </div>
    
    )
}