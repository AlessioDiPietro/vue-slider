const app = new Vue ({
    el : "#root",

    data : {

        // contatore posizione array img
        contatore : 0,

        raccoltaImg : [
            "img/img-1.jpg",
            "img/img-2.jpg",
            "img/img-3.jpg",
            "img/img-4.jpg"
        ]
    },
    methods : {
        preImg(){

            if (contatore = 0){
                this.contatore = this.contatore.length - 1;
            }else {
                this.contatore--
            }
        }
    }
});