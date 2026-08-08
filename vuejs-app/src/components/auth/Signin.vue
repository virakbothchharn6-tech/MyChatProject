<template>
  <div class="login-page">
    <video
      class="bg-video"
      autoplay
      muted
      loop
      playsinline
      :src="bgVideoSrc"
    ></video>
    <div class="login-box">
      <div class="card card-outline card-primary">
        <div class="card-header text-center">
          <router-link to="/" class="h1"><b>Admin</b>LTE</router-link>
        </div>
        <div class="card-body">
          <p class="login-box-msg">Sign in to start your session</p>
          <form @submit.prevent="signIn">
            <div class="input-group mb-3">
              <input
                type="email"
                v-model="user.email"
                class="form-control"
                placeholder="Email"
                :class="{ 'is-invalid': !!userError.email }"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
              <div class="invalid-feedback">
                {{ userError.email }}
              </div>
            </div>
            <div class="input-group mb-3">
              <input
                type="password"
                v-model="user.password"
                class="form-control"
                placeholder="Password"
                autocomplete="current-password"
                :class="{ 'is-invalid': !!userError.password }"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
              <div class="invalid-feedback">
                {{ userError.password }}
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-8">
                <div class="icheck-primary">
                  <input
                    type="checkbox"
                    id="remember"
                    v-model="user.remember"
                  />
                  <label for="remember"> Remember Me </label>
                </div>
              </div>
              <div class="col-4">
                <button type="submit" class="btn btn-primary btn-block">
                  Sign In
                </button>
              </div>
            </div>
          </form>

          <div class="social-auth-links text-center mt-2 mb-3">
            <button
              @click="facebookSignIn()"
              class="btn btn-block btn-primary mb-2"
            >
              <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
            </button>
            <button
              @click="googleSignIn()"
              class="btn btn-block btn-danger mb-2"
            >
              <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
            </button>
            <button @click="tiktokSignIn()" class="btn btn-block btn-dark mb-2">
              <i class="fab fa-tiktok mr-2"></i> Sign in with TikTok
            </button>
            <button @click="phoneSignIn()" class="btn btn-block btn-secondary">
              <i class="fas fa-phone mr-2"></i> Sign in with Phone Number
            </button>
          </div>

          <p class="mb-1">
            <router-link
              :to="{ name: 'auth.reset-password' }"
              class="text-center"
              >Forgot your password?</router-link
            >
          </p>
          <p class="mb-0">
            <router-link :to="{ name: 'auth.signup' }" class="text-center"
              >Register a new membership</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { reactive } from "vue";
import { apiSignIn } from "@/functions/api/auth";
import { LoadingModal, MessageModal, CloseModal } from "@/functions/swal";
import { useUserStore } from "@/stores/user";
import { apiGoogleOAuthRedirect } from "@/functions/api/google-oauth";

const router = useRouter();
const userStore = useUserStore();

const bgVideoSrc = "/big-video.mp4";

const user = reactive({
  email: "",
  password: "",
  remember: false,
});

const userError = reactive({
  email: "",
  password: "",
});

const defaultUser = JSON.parse(JSON.stringify(user));
const defaultUserError = JSON.parse(JSON.stringify(userError));

function resetAllState() {
  Object.assign(user, defaultUser);
  Object.assign(userError, defaultUserError);
}

async function signIn() {
  try {
    LoadingModal("Signing In...");
    const response = await apiSignIn(user);
    const { data } = response;
    userStore.setState(data.user);
    userStore.setSanctumToken(data.token);
    resetAllState();
    router.replace({ name: "dashboard" });
    return CloseModal();
  } catch (error) {
    const { response } = error;
    if (!response) {
      return MessageModal({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
    const { status, data } = response;
    if (status === 422) {
      Object.keys(userError).forEach((key) => {
        userError[key] = data.errors[key] ? data.errors[key][0] : "";
      });
      return CloseModal();
    }
    return MessageModal({ icon: "error", title: "Error", text: data.message });
  }
}

const facebookSignIn = async () => {
  console.log("Facebook sign in clicked");
};

const googleSignIn = async () => {
  try {
    LoadingModal();
    const response = await apiGoogleOAuthRedirect();
    window.location.href = response.data.redirect_url;
  } catch (error) {
    return MessageModal({
      icon: "error",
      title: "Error",
      text: error.message || error.response.data.message,
    });
  }
};

const tiktokSignIn = async () => {
  console.log("TikTok sign in clicked");
};

const phoneSignIn = async () => {
  console.log("Phone sign in clicked");
};
</script>

<style scoped>
.login-page {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background: transparent;
}

.bg-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.login-box {
  position: relative;
  z-index: 1;
}
</style>
