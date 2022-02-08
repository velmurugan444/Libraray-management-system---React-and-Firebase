import React from 'react'
import { Adminnavbar } from '../components/Navbar/admin_navbar'

export const Adminprofile = () => {

    return (
        <div>
            <Adminnavbar />
            <div className="container1">
                <h3>ADMIN PROFILE</h3>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={localStorage.getItem('name')} />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={localStorage.getItem('email')} />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" defaultValue={localStorage.getItem('password')} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Address</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={localStorage.getItem('address')} />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Mobile</label>
                        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={localStorage.getItem('mobile')} />

                    </div>
                </form>
            </div>
        </div>
    )
}
