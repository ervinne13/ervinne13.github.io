import React, { Component } from 'react'
import profileImage from './p-ervinne.png'

class ProfileCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profileImage
        };
    }

    render () {
        return (
            <div>
               <div class="profile-image">
                    <img src="{this.state.profileImage}" className="img-circle circle-border m-b-md" alt="profile" />
                </div>
                <div class="profile-info">
                    <div class="">
                        <div>
                            <h2 class="no-margins">
                                Ervinne Sodusta
                            </h2>
                            <h4>Backend Developer - <span class="text-navy">NuWorks Interactive Labs</span></h4>
                            <small>
                                Engineer | Full Stack Developer | Mobile Developer | Team Leader | Tutor / Teacher
                            </small>
                            <br />
                            <small>
                                ERP | Accounting | Inventory | Payroll | Mobile Apps | Custom Business Solutions
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileCard