<template>
    <div>
        <div id="row" v-for="user in filteredUsers"
             :user="user"
             :key="user.id"
             class="list">
            <div class="icon cell"
                 :style=" { 'background-image': 'url('+ user.photoUrl +')' } "></div>
            <div class="nameSurnameOccupation cell">
                {{ user.firstName }}
            </div>
            <div class="nameSurnameOccupation cell">
                {{ user.lastName }}
            </div>
            <div class="nameSurnameOccupation cell">
                {{ user.jobTitle }}
            </div>
            <div class="view cell"
                 id="view"
                 @click="clickOnUser(user)"> View Candidate </div>
        </div>
        <ModalWindow v-if="showModal"
               @close="closeModal"
               :currentUser="currentUser"/>
    </div>
</template>

<script>
import ModalWindow from '@/components/ModalWindow'

export default {
name: 'UserInfo',
components: { ModalWindow },
    props: {
      users: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        showModal: false,
        currentUser: {}
      }
    },
    computed: {
      filteredUsers () {
        return this.users.filter(user => !(user.id % 2));
      }
    },
    methods: {
      clickOnUser (user) {
        this.showModal = true;
        this.currentUser = user;
      },
      closeModal () {
        this.showModal = false;
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

    .cell {
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

    .nameSurnameOccupation {
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