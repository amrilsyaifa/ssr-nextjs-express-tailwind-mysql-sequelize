import { NextPageContext } from "next";
import fetch from "isomorphic-unfetch";
import Router from "next/router";

export const APIURL = "http://localhost:3000/api/v1/di-ingat";

export const getApiSSR = async (url: string, ctx: NextPageContext) => {
  const cookie = ctx.req?.headers.cookie;
  const resp = await fetch(APIURL + url, {
    headers: {
      cookie: cookie!,
    },
  });
  if (resp.status === 401 && !ctx.req) {
    Router.replace("/login");
    return {};
  }

  if (resp.status === 401 && ctx.req) {
    ctx.res?.writeHead(302, {
      Location: "http://localhost:3000/login",
    });
    ctx.res?.end();
    return;
  }

  const respJson = await resp.json();
  return respJson;
};

export const postApi = (url: string, data: object) => {
  return new Promise((resolve, reject) => {
    fetch(APIURL + url, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      const response = res;
      const responsePromise = res.json();
      responsePromise
        .then((data) => {
          if (response.status === 401) {
            Router.replace("/login");
            return {};
          } else if (
            response.status >= 400 &&
            response.status < 600 &&
            data.status === "error"
          ) {
            reject(data.data);
          } else if (response.status < 400 && data.status === "success") {
            resolve(data.data);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

export const putApi = (url: string, data: object) => {
  return new Promise((resolve, reject) => {
    fetch(APIURL + url, {
      method: "put",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      const response = res;
      const responsePromise = res.json();
      responsePromise
        .then((data) => {
          if (response.status === 401) {
            Router.replace("/login");
            return {};
          } else if (
            response.status >= 400 &&
            response.status < 600 &&
            data.status === "error"
          ) {
            reject(data.data);
          } else if (response.status < 400 && data.status === "success") {
            resolve(data.data);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

export const deleteApi = (url: string, data: object) => {
  return new Promise((resolve, reject) => {
    fetch(APIURL + url, {
      method: "delete",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      const response = res;
      const responsePromise = res.json();
      responsePromise
        .then((data) => {
          if (response.status === 401) {
            Router.replace("/login");
            return {};
          } else if (
            response.status >= 400 &&
            response.status < 600 &&
            data.status === "error"
          ) {
            reject(data.data);
          } else if (response.status < 400 && data.status === "success") {
            resolve(data.data);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};
