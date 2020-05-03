<template>
    <div>
        <b-form @submit.prevent="addMessage">
                <b-input-group prepend="Message" class="mt-3">
                <b-form-input type="text" v-model="newMsg" placeholder="Enter your message..."></b-form-input>
            </b-input-group>
            <p v-if="feedback" style="color:red">{{ feedback }}</p>
        </b-form>
    </div>
</template> 

<script>

import db from '../firebase/init.js';

export default {

    name: 'NewMessage',

    props:[ 'name' ],

    data(){
        return{
        newMsg:null ,
        feedback:null   
        }
        
    },
    methods:{
        addMessage(){
            if(this.newMsg) {
                db.collection("messages").add({
                    content:this.newMsg,
                    name:this.name,
                    time:Date.now()
                })
                this.newMsg=null;
                this.feedback=null;
            }
            else{
                this.feedback = "Enter your message to send"
            }
        }
    }
}
</script>