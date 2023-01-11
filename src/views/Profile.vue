<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary alpha-4">
                <span class="span-150"></span>
                <span class="span-50"></span>
                <span class="span-50"></span>
                <span class="span-75"></span>
                <span class="span-100"></span>
                <span class="span-75"></span>
                <span class="span-50"></span>
                <span class="span-100"></span>
                <span class="span-50"></span>
                <span class="span-100"></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--400" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <img v-lazy="'img/theme/jb.png'" class="rounded-circle">
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <a href="/resume" target="_blank" title="Resume">
                                        <base-button type="warning" size="sm" class="mr-2"><i class="fa fa-file-pdf-o" aria-hidden="true"></i></base-button>
                                    </a>
                                    <a href="https://www.linkedin.com/in/jaseel-pv" target="_blank" title="LinkedIn">
                                        <base-button type="info" size="sm" class="mr-2"><i class="fa fa-linkedin-square" aria-hidden="true"></i></base-button>
                                    </a>
                                    <!-- <a href="https://www.instagram.com/jaseel_bavu" target="_blank" title="Instagram">
                                        <base-button type="danger" size="sm" class="mr-2"><i class="fa fa-instagram" aria-hidden="true"></i></base-button>
                                    </a> -->
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <a href="#" v-on:click="tabChange('profile')">
                                            <span class="heading"><i class="ni ni-circle-08"></i></span>
                                            <span class="description" :class="tab == 'profile' ? 'text-primary' : ''">Home</span>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#" v-on:click="tabChange('education')">
                                            <span class="heading"><i class="ni ni-hat-3"></i></span>
                                            <span class="description" :class="tab == 'education' ? 'text-primary' : ''">Education</span>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#" v-on:click="tabChange('experience')">
                                            <span class="heading"><i class="ni ni-laptop"></i></span>
                                            <span class="description" :class="tab == 'experience' ? 'text-primary' : ''">Experience</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div v-if="tab == 'profile'">
                            <div class="text-center mt-5">
                                <h3>Jaseel P V
                                    <span class="font-weight-light">, {{age}}</span>
                                </h3>
                                <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Kerala, India</div>
                                <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>Entrepreneur | Startup Enthusiastic | Product Developer | Freelancer | Backend Developer</div>
                            </div>
                            <div class="mt-5 py-5 border-top text-center">
                                <div class="row justify-content-center">
                                    <div class="col-lg-9">
                                        <p>Learn . Grow . Acheive</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="text-center mt-5 py-5" v-else-if="tab == 'education'">
                            <h3 class="mb-5"><i class="ni ni-hat-3"></i> Education</h3>
                            <div class="m-5">
                                <h6 class="text-left font-weight-bold text-primary">COLLEGE</h6>
                                <hr>
                            </div>
                            <div class="row justify-content-center p-2">
                                <div class="col-lg-9 border-dotted">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <div class="content-image">
                                                <img v-lazy="'img/theme/oxford-logo.jpeg'" class="rounded-circle">
                                            </div>
                                        </div>
                                        <div class="col-md-10 text-left mt--20">
                                            <h6 class="text-primary font-weight-bold">TOCE - The Oxford College of Engineering</h6>
                                            <span>2017 to 2019 - Master of Computer Application - Bangalore, India</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-9 border-dotted mt-1">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <div class="content-image">
                                                <img v-lazy="'img/theme/assabah-logo.png'" class="rounded-circle">
                                            </div>
                                        </div>
                                        <div class="col-md-10 text-left mt--20">
                                            <h6 class="text-primary font-weight-bold">Assabah Arts and Science College Valayamkulam</h6>
                                            <span>2013 to 2016 - Bachelor of Computer Application - Changaramkulam, India</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="m-5">
                                <h6 class="text-left font-weight-bold text-primary">HIGH SCHOOL</h6>
                                <hr>
                            </div>
                            <div class="row justify-content-center p-2">
                                <div class="col-lg-9 border-dotted">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <div class="content-image">
                                                <img v-lazy="'img/theme/school-logo.png'" class="rounded-circle">
                                            </div>
                                        </div>
                                        <div class="col-md-10 text-left mt--20">
                                            <h6 class="text-primary font-weight-bold">GHSS Kodumunda</h6>
                                            <span>Class of 2013 - Computer Science - Pattambi, India</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-9 border-dotted mt-1">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <div class="content-image">
                                                <img v-lazy="'img/theme/school-logo.png'" class="rounded-circle">
                                            </div>
                                        </div>
                                        <div class="col-md-10 text-left mt--20">
                                            <h6 class="text-primary font-weight-bold">I.G. English School Karukaputhur</h6>
                                            <span>Class of 2011 - Karukaputhur, India</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="text-center mt-5 py-5" v-else-if="tab == 'experience'">
                            <h3 class="mb-5"><i class="ni ni-laptop"></i> Experience</h3>

                            <p class="text-uppercase m-5 px-5">
                                Skills : 
                                <badge type="primary">PHP</badge>
                                <badge type="primary">Laravel</badge>
                                <badge type="primary">Vue.js</badge>
                                <badge type="primary">Firebase</badge>
                                <badge type="primary">Bootstrap</badge>
                                <badge type="primary">Javascript</badge>
                                <badge type="primary">SQL</badge>
                                <badge type="primary">Linux</badge>
                                <badge type="primary">Rest API</badge>
                                <badge type="primary">MySQL</badge>
                                <badge type="primary">CSS</badge>
                                <badge type="primary">NoSQL</badge>
                                <badge type="primary">JQuery</badge>
                                <badge type="primary">Git</badge>
                                <badge type="primary">Razorpay</badge>
                                <badge type="primary">Bagisto</badge>
                                <badge type="primary">Envoyer</badge>
                                <badge type="primary">Tailwind CSS</badge>
                                <badge type="primary">Postman</badge>
                                <badge type="primary">Cashier</badge>
                                <badge type="primary">Horizon</badge>
                                <badge type="primary">Passport</badge>
                                <badge type="primary">Socialite</badge>
                                <badge type="primary">Windows</badge>
                                <badge type="primary">Bitbucket</badge>
                                <badge type="primary">gitlab</badge>
                                <badge type="primary">github</badge>
                                <badge type="primary">Telescope</badge>
                                <badge type="primary">Project Management</badge>
                            </p>

                            <div class="row justify-content-center p-2">
                                <div class="col-lg-9 border-dotted">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <div class="content-image">
                                                <img v-lazy="'img/theme/hrv-logo.png'" class="rounded-circle">
                                            </div>
                                        </div>
                                        <div class="col-md-10 text-left mt--20">
                                            <h6 class="text-primary font-weight-bold">High Root Ventures LLP</h6>
                                            <span>Chalissery ,Kerala, India</span><br>
                                            <span class="font-weight-bold">CO-FOUNDER AND WEB DEVELOPER</span><br>
                                            <span>December 2021 to Present</span><br>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-9 border-dotted mt-1">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <div class="content-image">
                                                <img v-lazy="'img/theme/company.png'" class="rounded-circle">
                                            </div>
                                        </div>
                                        <div class="col-md-10 text-left mt--20">
                                            <h6 class="text-primary font-weight-bold">Al Zarooni Group of Companies</h6>
                                            <span>Dubai, United Arab Emirates</span><br>
                                            <span class="font-weight-bold">Laravel DEVELOPER</span><br>
                                            <span>January 2021 to March 2021</span><br>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-9 border-dotted mt-1">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <div class="content-image">
                                                <img v-lazy="'img/theme/pms-logo.jpg'" class="rounded-circle">
                                            </div>
                                        </div>
                                        <div class="col-md-10 text-left mt--20">
                                            <h6 class="text-primary font-weight-bold">PALMATE SOLUTIONS PVT. LTD.</h6>
                                            <span>1st Floor, 463/117/A, Grace Mansion, Horamavu Agara Rd, Bengaluru, 560043</span><br>
                                            <span class="font-weight-bold">FULL STACK WEB DEVELOPER</span><br>
                                            <span>https://palmatesolutions.com/</span><br>
                                            <span>September 2019 to December 2020</span><br>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-9 border-dotted mt-1">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <div class="content-image">
                                                <img v-lazy="'img/theme/examsummary-logo.png'" class="rounded-circle">
                                            </div>
                                        </div>
                                        <div class="col-md-10 text-left mt--20">
                                            <h6 class="text-primary font-weight-bold">EXAMSUMMARY</h6>
                                            <span>Nasscom 10,000 startups, Infopark Campus, Kakkanad, Kochi, India, 682030</span><br>
                                            <span class="font-weight-bold">CO-FOUNDER & WEB DEVELOPER</span><br>
                                            <span>www.examsummary.com</span><br>
                                            <span>2015 to 2017</span><br>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tab: 'profile',
            age: ''
        };
    },

    mounted: function() {
        this.updateAge();
    },

    methods: {
        tabChange: function (tabName) {
            this.tab = tabName;
        },

        updateAge: function() {
            var dob = new Date('1995-11-09');
            var today = new Date();
            var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
            this.age = age;
        }
    }
};
</script>
<style>
</style>
