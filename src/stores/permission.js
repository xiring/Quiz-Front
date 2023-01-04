import { defineStore } from "pinia";
import { constantRoutes } from "../router";

export const usePermissionStore = defineStore("permission", {
  state: () => ({
    routes: [],
    addRoutes: [],
  }),
  actions: {
    canUserAccess({ roles, permissions }) {
      return new Promise((resolve) => {
        let routeCheck;
        if (roles.includes("Teacher")) {
          routeCheck = true;
          this.routes = constantRoutes || [];
        } else {
          routeCheck = this.filterRoutes(constantRoutes, roles, permissions);
          this.routes = this.userRoutes(constantRoutes, roles, permissions);
        }
        resolve(routeCheck);
      });
    },

    filterRoutes(routes, roles, permissions) {
      let res = "";
      routes.forEach((route) => {
        if (!route.hidden) {
          const tmp = { ...route };
          res = this.routeAccessibility(roles, permissions, tmp);
        }
      });
      return res;
    },

    routeAccessibility(roles, permissions, route) {
      if (route.meta) {
        let hasRole = true;
        let hasPermission = true;
        if (route.meta.roles || route.meta.permissions) {
          // If it has meta.roles or meta.permissions, accessible = hasRole || permission
          hasRole = false;
          hasPermission = false;
          if (route.meta.roles) {
            hasRole = roles.some((role) => route.meta.roles.includes(role));
          }

          if (route.meta.permissions) {
            hasPermission = permissions.some((permission) =>
              route.meta.permissions.includes(permission)
            );
          }
        }
        return hasRole || hasPermission;
      }
    },

    /**
     * Find all routes of this role
     * @param routes asyncRoutes
     * @param roles
     */
    userRoutes(routes, roles, permissions) {
      const res = [];

      routes.forEach((route) => {
        const tmp = { ...route };
        if (this.routeAccessibility(roles, permissions, tmp)) {
          if (tmp.children) {
            tmp.children = this.userRoutes(tmp.children, roles, permissions);
          }
          res.push(tmp);
        }
      });
      return res;
    },
  },
});
