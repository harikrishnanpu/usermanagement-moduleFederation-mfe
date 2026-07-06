"use strict";
(self["webpackChunkprofile"] = self["webpackChunkprofile"] || []).push([["src_pages_ProfileApp_tsx"],{

/***/ "./src/api.ts"
/*!********************!*\
  !*** ./src/api.ts ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProfile: () => (/* binding */ getProfile),
/* harmony export */   logout: () => (/* binding */ logout)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../../node_modules/.pnpm/axios@1.18.1/node_modules/axios/lib/axios.js");

const api = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "http://localhost:4000/api",
    withCredentials: true
});
async function getProfile() {
    const { data } = await api.get("/profile");
    return data;
}
async function logout() {
    await api.post("/logout");
}


/***/ },

/***/ "./src/pages/ProfileApp.tsx"
/*!**********************************!*\
  !*** ./src/pages/ProfileApp.tsx ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/.pnpm/react@19.2.7/node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a85c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./src/api.ts");
/* harmony import */ var host_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! host/store */ "webpack/container/remote/host/store");
/* harmony import */ var host_store__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(host_store__WEBPACK_IMPORTED_MODULE_4__);





function ProfileApp() {
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(host_store__WEBPACK_IMPORTED_MODULE_4__.authStore.getUser());
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return host_store__WEBPACK_IMPORTED_MODULE_4__.authStore.subscribe(()=>setUser(host_store__WEBPACK_IMPORTED_MODULE_4__.authStore.getUser()));
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_api__WEBPACK_IMPORTED_MODULE_3__.getProfile)().then((data)=>host_store__WEBPACK_IMPORTED_MODULE_4__.authStore.setUser(data.user)).catch(()=>host_store__WEBPACK_IMPORTED_MODULE_4__.authStore.setUser(null)).finally(()=>setLoading(false));
    }, []);
    async function handleLogout() {
        await (0,_api__WEBPACK_IMPORTED_MODULE_3__.logout)();
        host_store__WEBPACK_IMPORTED_MODULE_4__.authStore.setUser(null);
        navigate("/auth/login");
    }
    if (loading) {
        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Loading profile..."
        }, void 0, false, {
            fileName: "/Users/harikrishnan/Desktop/h/BROTOTYPE/BROCAMP/Week40/user-management-mfe/apps/profile/src/pages/ProfileApp.tsx",
            lineNumber: 29,
            columnNumber: 12
        }, this);
    }
    if (!user) {
        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Navigate, {
            to: "/auth/login",
            replace: true
        }, void 0, false, {
            fileName: "/Users/harikrishnan/Desktop/h/BROTOTYPE/BROCAMP/Week40/user-management-mfe/apps/profile/src/pages/ProfileApp.tsx",
            lineNumber: 33,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                children: "Profile"
            }, void 0, false, {
                fileName: "/Users/harikrishnan/Desktop/h/BROTOTYPE/BROCAMP/Week40/user-management-mfe/apps/profile/src/pages/ProfileApp.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: [
                    "Name: ",
                    user.name
                ]
            }, void 0, true, {
                fileName: "/Users/harikrishnan/Desktop/h/BROTOTYPE/BROCAMP/Week40/user-management-mfe/apps/profile/src/pages/ProfileApp.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: [
                    "Email: ",
                    user.email
                ]
            }, void 0, true, {
                fileName: "/Users/harikrishnan/Desktop/h/BROTOTYPE/BROCAMP/Week40/user-management-mfe/apps/profile/src/pages/ProfileApp.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: [
                    "ID: ",
                    user.id
                ]
            }, void 0, true, {
                fileName: "/Users/harikrishnan/Desktop/h/BROTOTYPE/BROCAMP/Week40/user-management-mfe/apps/profile/src/pages/ProfileApp.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: handleLogout,
                children: "Logout"
            }, void 0, false, {
                fileName: "/Users/harikrishnan/Desktop/h/BROTOTYPE/BROCAMP/Week40/user-management-mfe/apps/profile/src/pages/ProfileApp.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/Users/harikrishnan/Desktop/h/BROTOTYPE/BROCAMP/Week40/user-management-mfe/apps/profile/src/pages/ProfileApp.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileApp);


/***/ }

}]);
//# sourceMappingURL=src_pages_ProfileApp_tsx.6401c0accd09a06f068d.js.map