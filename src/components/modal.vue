<template>
    <transition name="modal-fade">
        <div class="modal-backdrop" role="dialog">
            <div class="modal" ref="modal">
                <header class="modal-header">
                    <slot name="header">
                        <div class="iconModal cellModal"
                             :style="{'background-image': 'url('+ currentUser.photoUrl +')'}"></div>
                    </slot>
                </header>

                <section class="modal-body">
                    <slot name="body">
                        <div class="userData cellModal">
                            Candidate ID: {{currentUser.id}}
                        </div>
                        <div class="userData cellModal">
                            Name: {{currentUser.firstName}}
                        </div>
                        <div class="userData cellModal">
                            Surname: {{currentUser.lastName}}
                        </div>
                        <div class="userData cellModal">
                            Occupation: {{currentUser.jobTitle}}
                        </div>
                    </slot>
                </section>


                <footer class="modal-footer">
                    <slot name="footer">
                        <button type="button" class="btn btn-green"
                                @click="$emit('close')"
                                aria-label="Close modal">
                            Close
                        </button>
                    </slot>
                </footer>
            </div>
        </div>
    </transition>
</template>

<script>
  export default {
    name: 'modal',
    props: {
      currentUser: {
        type: Object,
        required: false,
      }
    },
  }
</script>

<style scoped>
    .btn {
        padding: 8px 16px;
        border-radius: 25px;
        font-size: 14px;
        cursor: pointer;
    }

    .modal-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal {
        background: #ffffff;
        box-shadow: 2px 2px 20px 1px;
        width: 600px;
        height: 400px;
        overflow-x: auto;
        display: grid;
        border-radius: 10px;
    }

    .modal-header,
    .modal-footer {
        padding: 15px;
        display: grid;
    }

    .modal-header {
        border-bottom: 1px solid #eeeeee;
        color: #4aae9b;
    }

    .modal-footer {
        border-top: 1px solid #eeeeee;
    }

    .modal-body {
        position: relative;
        padding: 20px 10px;
    }

    .iconModal {
        width: 100px;
        height: 100px;
        border-radius: 50px;
        border: 1px solid #4aae9b;
    }

    .cellModal {
        justify-self: center;

        align-self: center;
    }

    .userData {
        width: max-content;
        padding: 5px;
    }

    .btn {
        color: white;
        background: #4aae9b;
        border: 1px solid #4aae9b;
        border-radius: 15px;
        width: 100px;
        height: 40px;
        justify-self: center;
        align-self: center;
    }

    .modal-fade-enter,
    .modal-fade-leave-active {
        opacity: 0;
    }

    .modal-fade-enter-active,
    .modal-fade-leave-active {
        transition: opacity 0.5s ease;
    }

</style>