<template>
    <div id="app">
        <div class="title"> Candidates List </div>
        <div class="columns">
            <p> Name </p>
            <p> Surname </p>
            <p> Occupation </p>
        </div>
        <ul>
            <UserInfo :users="users"></UserInfo>
        </ul>
    </div>
</template>

<script>

import axios from 'axios'
import UserInfo from '@/components/UserInfo'

export default {
name: 'app',
components: { UserInfo },
    created () {
      axios.get('https://cors-anywhere.herokuapp.com/https://fakedata.dev/users/v1/get_users', [{ mode: 'no-cors' }])
        .then(responce => {
          this.users = responce.data;
        })
        .catch(e => {
          this.errors.push(e);
        })
    },
    computed: {},
    data () {
      return {
        users: []
      }
    }
}
</script>

<style>
    .title {
        font-size: 40px;
        font-family: 'Montserrat', sans-serif;
    }

    .columns {
        display: grid;
        grid-template-columns: 100px 150px 260px;
        grid-gap: 30px;
        margin-left: 140px;
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
    }

    .columns p {
        justify-self: center;
    }

    ul {
        display: block;
    }
</style>
