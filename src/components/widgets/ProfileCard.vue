<template>
    <div>
        <div class="profile-image">
            <img 
                :src="profileImg"
                alt="Ervinne Sodusta Profile" 
                class="img-circle circle-border m-b-md" >
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
                    <br>
                    <small>
                            ERP | Accounting | Inventory | Payroll | Mobile Apps | Custom Business Solutions
                        </small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'ProfileCard',
		props: {
			profileImg: String
		}
	}
</script>