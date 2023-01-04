import { defineStore } from "pinia";
import { login, logout, getInfo } from "@/api/auth";
import { removeToken } from "../utils/auth";

export const useStore = defineStore("auth", {
  state: () => ({
    id: "",
    token: "",
    user: "",
    roles: [],
  }),
  actions: {
    getInfo() {
      return new Promise((resolve, reject) => {
        getInfo()
          .then((response) => {
            const { data } = response;

            if (!data) {
              reject("Verification failed, please Login again.");
            }

            const { roles, name, permissions, id } = data;
            // roles must be a non-empty array
            if (!roles || roles.length <= 0) {
              reject("getInfo: roles must be a non-null array!");
            }
            this.id = id;
            this.user = name;
            this.permissions = permissions;
            this.roles = roles;
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    login(userInfo) {
      const { email, password } = userInfo;
      return new Promise((resolve, reject) => {
        login({ email: email.trim(), password: password })
          .then((response) => {
            let { token, user, permissions } = response;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("permissions", JSON.stringify(permissions));
            resolve();
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
      });
    },

    // remove token
    resetToken() {
      return new Promise((resolve) => {
        this.resetAuthState();
        removeToken();
        resolve();
      });
    },

    resetAuthState() {
      this.id = "";
      this.token = "";
      this.user = "";
      this.permissions = [];
      this.roles = [];
    },
    // user logout
    logOut() {
      return new Promise((resolve, reject) => {
        logout()
          .then(() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            localStorage.removeItem("permissions");
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    // If User Role is "Teacher","Student"
    hasAccessToView() {
      if (this.roles.includes("Teacher")) {
        return true;
      } else {
        return false;
      }
    },
    checkStudentRole() {
      if (this.roles.includes("Student")) {
        return true;
      } else {
        return false;
      }
    },
  },
});
