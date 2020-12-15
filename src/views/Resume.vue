<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4 class="card-title text-center text-primary"><b>RESUME</b></h4>
                <div class="row justify-content-center">
                    <div class="input-group mb-3 w-25">
                        <div class="input-group-prepend">
                            <span class="input-group-text form-control-sm" id="page-count">Page :</span>
                        </div>
                        <input v-model.number="page" type="number" class="form-control form-control-sm" min="1" max="2" aria-describedby="page-count">
                    </div>
                    <span class="ml-2"> / {{numPages}}</span>
                    <div class="ml-5">
                        <button class="btn btn-light btn-sm" @click="rotate -= 90"><i class="fa fa-undo" aria-hidden="true"></i></button>
                        <button class="btn btn-light btn-sm" @click="rotate += 90"><i class="fa fa-repeat" aria-hidden="true"></i></button>
                        <a :href="`${publicPath}pdf/JASEELPVRESUME.pdf`" class="btn btn-light btn-sm" download="JASEELPVRESUME"><i class="fa fa-download" aria-hidden="true"></i> Download</a>
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