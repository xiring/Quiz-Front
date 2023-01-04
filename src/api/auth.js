import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/login",
    method: "post",
    data: data,
  });
}

export function getInfo() {
  return request({
    url: "/user",
    method: "get",
  });
}

export function logout() {
  return request({
    url: "/logout",
    method: "post",
  });
}

export function csrf() {
  return request({
    url: "/sanctum/csrf-cookie",
    method: "get",
  });
}

export function ajax(urlX) {
  return request({
    url: urlX,
    method: "get",
  });
}
