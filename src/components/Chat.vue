<template>
<div><nav>
    <h3> Chat Page </h3>
    <p><router-link to="/" inline exact class="routerlink">Exit Chat</router-link></p></nav>
    <b-card>
    <div class="chat-box">
        <ul v-chat-scroll style="list-style-type:none;">
            <li v-for="message in messages" v-bind:key="message.id">
            <label style="font-size:0.9em">{{message.name.toUpperCase()}} | </label>
            <label style="font-size:0.7em">{{message.time}} </label><br>
            <b-button variant="primary" >{{message.content}}</b-button>
            
            </li>
        </ul>
    </div>
    </b-card>
    <div class="new-msg">
        <NewMessage v-bind:name="name"/>
    </div>
</div>    
</template> 

<script>

import NewMessage from "./NewMessage.vue";
import db from '../firebase/init.js';
import moment from 'moment';
export default {
    name: 'Chat',
    props:['name'],
    components:{ NewMessage },
    data(){
        return{
            messages:[]
        }
    },
    created(){
        let ref = db.collection('messages').orderBy('time')
        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                    if(change.type == 'added'){
                            let doc=change.doc
                            this.messages.push({
                                id:doc.id,
                                name:doc.data().name,
                                content:doc.data().content,
                                time:moment(doc.data().time).format('lll')
                            })
                    }                
            });
        })
    }
}
</script>

<style>
.routerlink{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
.chat-box{
    max-width: initial;
    max-height: 450px;
    overflow: auto;
    text-align: left;
    background-color:white;
}
nav{
    background:teal;
    padding: 10px 0;
    font-family:Georgia, 'Times New Roman', Times, serif
}
h3{
    color:white;
    font-weight: bold;
    text-align: center;
    padding: 5px auto 5px auto;
    margin-bottom: 10px;
}
</style>