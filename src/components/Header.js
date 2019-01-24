import React, { Component } from 'react'

class Header extends Component {

    render () {
        return (
            <div>
                <div class="row m-b-lg m-t-lg">
                    <div class="col-md-8">

                        <div class="profile-image">
                            <img src="img/a10.jpg" class="img-circle circle-border m-b-md" alt="profile" />
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
                    <div class="col-md-3">
                        <h1 class="no-margins pull-right">
                            <img src="img/nuworks-logo.png " alt="NuWorks Interactive Labs Logo" />
                        </h1>
                        <div class="clearfix"></div>                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Header