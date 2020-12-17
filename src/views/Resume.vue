<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <div class="row justify-content-center">
                    <h4 class="card-title text-center text-primary"><b>RESUME</b></h4>
                    <div class="ml-5">
                        <span class="mr-4">Page {{page}} / {{numPages}}</span>
                        <button class="btn btn-light btn-sm" @click="page = 1" :disabled="page == 1"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>
                        <button class="btn btn-light btn-sm" @click="page = 2" :disabled="page == 2"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>
                        <a :href="`${publicPath}pdf/JASEELPVRESUME.pdf`" class="btn btn-light btn-sm" download="JASEELPVRESUME" title="Download"><i class="fa fa-download" aria-hidden="true"></i></a>
                    </div>
                </div>

            </div>
            <div class="card-body">
                <div class="m-3">
                    <pdf v-if="show" ref="pdf" :src="src" :page="page" :rotate="rotate" @error="error" @num-pages="numPages = $event" @link-clicked="page = $event"></pdf>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import pdf from 'vue-pdf'
 
export default {
    components: {
        pdf: pdf
    },
    data () {
        return {
            show: true,
            src:'./pdf/JASEELPVRESUME.pdf',
            page: 1,
            numPages: 0,
            rotate: 0,
            publicPath: process.env.BASE_URL
        }
    },
    methods: {
        error: function(err) {
            console.log(err);
        }
    }
}
</script>