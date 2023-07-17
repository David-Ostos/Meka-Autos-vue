<template>
    <div class="md:container">

<div class="card o-hidden border-0 shadow-lg my-5">
    <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="flex flex-wrap mx-3">
            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div class="col-lg-7">
                <div class="p-5">
                    <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                    </div>
                    <form class="user">
                        <div class="form-group row">
                            <div class="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" class="form-control form-control-user" id="exampleFirstName"
                                    placeholder="First Name"
                                    v-model="nombre">
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control form-control-user" id="exampleLastName"
                                    placeholder="Last Name"
                                    v-model="apellido">
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                                placeholder="Email Address"
                                v-model="email">
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-6 mb-3 mb-sm-0">
                                <input type="password" class="form-control form-control-user"
                                    id="exampleInputPassword" placeholder="Password"
                                    v-model="password">
                            </div>
                            <div class="col-sm-6">
                                <input type="password" class="form-control form-control-user"
                                    id="exampleRepeatPassword" placeholder="Repeat Password"
                                    v-model="rePassword">
                            </div>
                        </div>
                        <a href="login.html" class="btn btn-primary btn-user btn-block"
                          @click.prevent="createUser">
                            Register Account
                        </a>
                        <hr>
                        <a href="index.html" class="btn btn-google btn-user btn-block">
                            <i class="fab fa-google fa-fw"></i> Register with Google
                        </a>
                        <a href="index.html" class="btn btn-facebook btn-user btn-block">
                            <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                        </a>
                    </form>
                    <hr>
                    <div class="text-center">
                        <RouterLink to="/auth" class="small">¿Tienes cuenta?</RouterLink>
                    </div>
                    <div class="text-center">
                      <RouterLink to="/registrar" class="small"> ¡Crear cuenta! </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</div>
</template>
<style scoped>
</style>

<script setup lang="ts">
import { ref } from 'vue';
import useAuthStore from '@/store/auth';
import router from '@/router';
import '../../style/sb-admin-2.min.scss';

const store = useAuthStore();

const nombre = ref('');
const apellido = ref('');
const email = ref('');
const password = ref('');
const rePassword = ref('');


const createUser = async () => {
  const name = ref(nombre.value + ' ' + apellido.value);

  if (password.value !== rePassword.value) {
    alert('Las contraseñas no coinciden');
    return false

  }else if (rePassword.value === "" || password.value === "") {
    alert("ingrese la contraseña")
    return false;
  }
  const response = await store.register(name.value, email.value, password.value);

  if (!response) {
    const errors = store.errors
    for(const error in errors ){
            console.log(errors[error])
            alert(errors[error])
        }
  } else {
    router.push({ name: 'home' });
    router.push({ name: 'home' });
  }
};
</script>
