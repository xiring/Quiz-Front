import router from "./router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { isUserLogged } from "@/utils/auth";
import { ElMessage } from "element-plus";
import { useStore } from "@/stores/auth";
import { usePermissionStore } from "@/stores/permission";

NProgress.configure({ showSpinner: true }); // NProgress Configuration
const whiteList = ["/", "/auth-redirect"]; // no redirect whitelist
router.beforeEach(async (to, from, next) => {
  const authStore = useStore();
  const permissionStore = usePermissionStore();
  if (to.matched.some((record) => !record.meta.guest)) {
    if (isUserLogged()) {
      if (to.path === "/") {
        // if is logged in, redirect to the dashboard page.
        next({ path: "/dashboard" });
      } else {
        // determine whether the user has obtained his permission roles through getInfo
        const hasRoles = authStore.roles && authStore.roles.length > 0;
        if (hasRoles) {
          next();
        } else {
          try {
            const { roles, permissions } = await authStore.getInfo();
            // generate accessible routes map based on roles
            let permission = await permissionStore.canUserAccess({
              roles,
              permissions,
            });
            // let permission = false
            if (to.path !== "/dashboard" && !permission) {
              next({ path: "/dashboard" });
              ElMessage.error("You are not authorized!!!");
            } else {
              console.log(2);
              next();
            }
          } catch (error) {
            await authStore.resetToken();
            ElMessage.error(error.message || "Has Error");
            next(`/login?redirect=${to.path}`);
            NProgress.done();
          }
        }
      }
    } else {
      /* has no token*/
      if (isUserLogged()) {
        // in the free login whitelist, go directly
        next();
      } else {
        // other pages that do not have permission to access are redirected to the login page.
        ElMessage.error("Oops, looks like your session is out.");
        next(`/?redirect=${to.path}`);
        NProgress.done();
      }
    }
  } else {
    if (isUserLogged()) next({ path: "/dashboard" });
    else next();
  }
});

router.afterEach(() => {
  setTimeout(() => NProgress.done(), 100);
});
