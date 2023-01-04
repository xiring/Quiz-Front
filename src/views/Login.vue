<template>
  <section class="section-login">
    <div class="container">
      <div class="row align-center">
        <div class="col-md-6 abs-bg-gray">
          <div class="row flex-center">
            <div class="col-md-10">
              <el-form
                :label-position="labelPosition"
                ref="ruleFormRef"
                :model="ruleForm"
                :rules="rules"
                label-width="120px"
                class="row flex-center"
                status-icon
              >
                <div class="mb-16">
                  <h4 class="text-primary">Login</h4>
                </div>
                <el-form-item label="Email" prop="email">
                  <el-input
                    v-model="ruleForm.email"
                    type="email"
                    autocomplete="off"
                  />
                </el-form-item>
                <el-form-item label="Password" prop="password">
                  <el-input
                    v-model="ruleForm.password"
                    type="password"
                    autocomplete="off"
                  />
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm(ruleFormRef)">
                    Sign In
                  </el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="position-top">
            <div class="row flex-center">
              <div class="col-md-6">
                <div class="flex-between">
                  <p class="flex-shrink-0 text-white">
                    © {{ currentYear }} Quiz.
                  </p>
                  <p class="flex-shrink-0 px-32 text-white">
                    All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row flex-center">
            <div class="col-md-10 offset-md-2">
              <div
                class="d-flex align-items-start py-48 border-top border-bottom"
              >
                <img src="#" alt="" />
                <div class="px-32">
                  <h2 class="text-white pb-8">Welcome to Quiz</h2>
                  <p class="text-white">
                    Manage your Quiz by logging in to the admin portal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useStore } from "../stores/auth";
import { usePermissionStore } from "@/stores/permission";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

const currentYear = new Date().getFullYear();

const labelPosition = ref("top");
const router = useRouter();
//STATE
const eventStore = useStore();
const permissionStore = usePermissionStore();

//API
const ruleFormRef = ref();
const ruleForm = reactive({
  email: "",
  password: "",
});

const rules = reactive({
  email: [
    { required: true, message: "Email is required", trigger: "blur" },
    { type: "email", message: "Must be of type email", trigger: "blur" },
  ],
  password: [
    { required: true, message: "Password is required", trigger: "blur" },
    {
      min: 4,
      message: "Password cannot be less than 4 digits",
      trigger: "blur",
    },
  ],
});

const assignRoles = async () => {
  const { roles, permissions } = await eventStore.getInfo();
  // generate accessible routes map based on roles
  let permission = await permissionStore.canUserAccess({
    roles,
    permissions,
  });
};

const submitForm = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      eventStore
        .login(ruleForm)
        .then(() => {
          // assignRoles();
          router.push("/dashboard");
          ElMessage({
            message: "Welcome back.",
            type: "success",
          });
          // window.location.reload();
        })
        .catch(() => {
          // this.loading = false;
        });
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>
<style scoped>
button.el-button.el-button--primary {
  width: 100%;
}
</style>
