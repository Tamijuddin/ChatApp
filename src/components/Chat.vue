<template>
<div>
    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand class="heading">CHAT-PAGE</b-navbar-brand>
    <router-link to="/" inline exact class="routerlink">Exit Chat</router-link></b-navbar>

    <div class="chat-box">
        <ul style="list-style-type:none" v-chat-scroll >
            <li v-for="message in messages" v-bind:key="message.id">
            <label style="font-size:0.8em;margin-bottom:0.0rem">{{message.name.toUpperCase()}} | </label>
            <label style="font-size:0.7em;margin-bottom: 0.0rem">{{message.time}} </label><br>
            <b-button disabled variant="primary">{{message.content}}</b-button>
            </li>
        </ul>   
    </div>
    <div class="new-msg">
        <NewMessage v-bind:name="name"/>
    </div>
    <p>Made with Vue.Js + Bootstrap 4</p>
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
    margin-right: 5px;
    margin-left: 0px;
}
nav{
background:teal;
font: bolder;
font-style: italic;
font-family: serif;
}
h3{
    color:white;
    font-weight: bold;
    text-align: center;
    padding: 5px auto 5px auto;
    margin-bottom: 10px;
}

p {
    margin-top: 10px;
    font-size: .7em;
    color: black;
}
ul {
    display: block;
    list-style-type:square;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 10px;
}
</style>