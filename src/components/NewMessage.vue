<template>
    <div class="new-msg">
        <b-form @submit.prevent="addMessage">
                <b-input-group class="mt-3">
                <b-form-input type="text" v-model="newMsg" placeholder="Enter your message..."></b-form-input>
                <b-button type="submit" variant="success">Send</b-button>
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

<style>
.new-msg{
    margin-left: 5px;
    margin-right: 5px;
}
</style>