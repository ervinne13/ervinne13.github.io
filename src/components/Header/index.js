import React, { Component } from 'react'
import ProfileCard from 'components/ProfileCard'

class Header extends Component {

    render () {
        return (
            <div>
                <div class="row m-b-lg m-t-lg">
                    <div class="col-md-8">
                        <ProfileCard />                        
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