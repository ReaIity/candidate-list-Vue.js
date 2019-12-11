<template>
    <div>
        <div id="row" v-for="user in filteredUsers" :user="user" :key="user.id" class="list">
            <div  class="icon cell" :style="{'background-image': 'url('+ user.photoUrl +')'}"></div>
            <div  class="name cell">{{user.firstName}}</div>
            <div  class="surname cell">{{user.lastName}}</div>
            <div  class="occupation cell">{{user.jobTitle}}</div>
            <div  class="view cell" id="view" @click="clickOnUser(user)">View Candidate</div>
        </div>
        <modal v-if="showModal" @close="showModal = false" :currentUser="currentUser"/>
    </div>
</template>

<script>
    import modal from "@/components/modal";
    export default {
        name: "UserInfo",
        components: {modal},
        props: {
            users : {
                type: Array,
                required: true,
            }
        },
        data () {
            return {
                showModal: false,
                currentUser: {}
            }
        },
        mounted() {

        },
        computed: {
            filteredUsers: function() {
            var sortUsers = this.users.filter(user => !(user.id%2) && user.id != 0);
            return sortUsers;
            }
        },
        methods: {
            clickOnUser: function(user) {
                this.showModal = true;
                this.currentUser = user;
            }
        }
    }
</script>

<style scoped>
    #row {
        display: grid;
        width: auto;
        min-height: 25px;
        grid-template-rows: 1fr;
        grid-gap: 30px;
        grid-template-columns: 62px 100px 150px 260px 130px;
        margin: 10px;

    }
    .cell{
        align-self: center;
        width: max-content;
        padding: 5px;
        height: 20px;
        border-radius: 5px;
    }
    .icon {
        height: 50px;
        width: 50px;
        border-radius: 50px;
        border: 1px solid #4aae9b;
    }
    .name {
        margin: auto;
        min-width: 50px;
        width: max-content;
        height: 25px;
    }
    .surname {
        margin: auto;
        min-width: 50px;
        width: max-content;
        height: 25px;
    }
    .occupation {
        margin: auto;
        min-width: 50px;
        width: max-content;
        height: 25px;
    }
    .view {
        width: 120px;
        color: #FFF;
        border-radius: 10px;
        text-align: center;
        cursor: pointer;
        background: #4aae9b;
    }

</style>