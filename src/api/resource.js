import request from "@/utils/request";

/**
 * Simple RESTful resource class
 */
class Resource {
  constructor(uri) {
    this.uri = uri;
  }

  list(query = "") {
    return request({
      url: this.uri,
      method: "get",
      params: query,
    });
  }

  get(id) {
    return request({
      url: this.uri + "/" + id,
      method: "get",
    });
  }

  store(resource) {
    return request({
      url: this.uri,
      method: "post",
      data: resource,
    });
  }

  update(id, resource, optional = "") {
    let newUrl = "";
    if (optional) {
      newUrl = this.uri + "/" + id + "/" + optional;
    } else {
      newUrl = this.uri + "/" + id;
    }
    return request({
      url: newUrl,
      method: "patch",
      data: resource,
    });
  }

  destroy(id) {
    return request({
      url: this.uri + "/" + id,
      method: "delete",
    });
  }

  getDataWithParam(param = "") {
    return request({
      url: this.uri,
      method: "get",
      params: param,
    });
  }
}
export { Resource as default };
