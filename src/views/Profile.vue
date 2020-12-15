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
                                    <img v-lazy="'img/theme/jb.jpg'" class="rounded-circle">
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <a href="/#/resume.pdf" target="_blank">
                                        <base-button type="warning" size="sm" class="mr-1"><i class="fa fa-file-pdf-o" aria-hidden="true"></i> Resume</base-button>
                                    </a>
                                    <a href="https://www.linkedin.com/in/jaseel-pv" target="_blank">
                                        <base-button type="info" size="sm" class="mr-1"><i class="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn</base-button>
                                    </a>
                                    <a href="https://github.com/jaseelbavu" target="_blank">
                                        <base-button type="default" size="sm" class="mr-1"><i class="fa fa-github-square" aria-hidden="true"></i> Github</base-button>
                                    </a>
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
                                    <span class="font-weight-light">, 25</span>
                                </h3>
                                <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Kerala, India</div>
                                <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>Web Developer - Palmate Solutions Pvt Ltd. Bangalore</div>
                                <p class="text-uppercase">
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
                                </p>
                            </div>
                            <div class="mt-5 py-5 border-top text-center">
                                <div class="row justify-content-center">
                                    <div class="col-lg-9">
                                        <p>Skilled profile in software Base and have a liquidfied experience and various involment in Web developing strategies.</p>
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
                                <div class="col-lg-9 border-bottom-dotted">
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

                                <div class="col-lg-9 border-bottom-dotted mt-5">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <div class="content-image">
                                                <img v-lazy="'img/theme/assabah-logo.png'" class="rounded-circle">
                                            </div>
                                        </div>
                                        <div class="col-md-10 text-left mt--20">
                                            <h6 class="text-primary font-weight-bold">Assabah Arts and Science College Valayamkulam</h6>
                                            <span>2013 to 2016 - Master of Computer Application - Changaramkulam, India</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="m-5">
                                <h6 class="text-left font-weight-bold text-primary">HIGH SCHOOL</h6>
                                <hr>
                            </div>
                            <div class="row justify-content-center p-2">
                                <div class="col-lg-9 border-bottom-dotted">
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

                                <div class="col-lg-9 border-bottom-dotted mt-5">
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
                            <div class="row justify-content-center p-2">
                                <div class="col-lg-9 border-bottom-dotted">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <div class="content-image">
                                                <img v-lazy="'img/theme/pms-logo.jpg'" class="rounded-circle">
                                            </div>
                                        </div>
                                        <div class="col-md-10 text-left mt--20">
                                            <h6 class="text-primary font-weight-bold">PALMATE SOLUTIONS PVT. LTD.</h6>
                                            <span>1st Floor, 463/117/A, Grace Mansion, Horamavu Agara Rd, Bengaluru, 560043</span><br>
                                            <span class="font-weight-bold">WEB DEVELOPER</span><br>
                                            <span>https://palmatesolutions.com/</span><br>
                                            <span>2019 to Present</span><br>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-9 border-bottom-dotted mt-5">
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
            tab: 'profile'
        };
    },

    methods: {
        tabChange: function (tabName) {
            this.tab = tabName;
        }
    }
};
</script>
<style>
</style>
