"use strict";
exports.id = 151;
exports.ids = [151];
exports.modules = {

/***/ 4151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Logo.js


function Logo() {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: "/",
        className: "flex gap-1",
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: "deewall_logp",
            children: "Deepwall"
        })
    });
}

;// CONCATENATED MODULE: ./components/Nav.js





function Nav({ show  }) {
    const inactiveLink = "flex gap-1 p-1";
    const activeLink = inactiveLink + " bg-deepshadow text-danger rounded-sm";
    const inactiveIcon = "w-6 h-6";
    const activeIcon = inactiveIcon + " text-danger";
    const router = (0,router_.useRouter)();
    const { pathname  } = router;
    async function logout() {
        await router.push("/");
        await (0,react_.signOut)();
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
        className: (show ? "left-0" : "-left-full") + " top-0 text-gray-500 p-4 fixed w-full bg-bgGray h-full md:static md:w-auto transition-all sideBar_container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-4 mr-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: " flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: "/",
                        className: pathname === "/" ? activeLink : inactiveLink,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                stroke: "currentColor",
                                className: pathname === "/" ? activeIcon : inactiveIcon,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                })
                            }),
                            "Dashboard"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: "/products",
                        className: pathname.includes("/products") ? activeLink : inactiveLink,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                stroke: "currentColor",
                                className: pathname.includes("/products") ? activeIcon : inactiveIcon,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                })
                            }),
                            "Products"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: "/categories",
                        className: pathname.includes("/categories") ? activeLink : inactiveLink,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                stroke: "currentColor",
                                className: pathname.includes("/categories") ? activeIcon : inactiveIcon,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                })
                            }),
                            "Categories"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: "/orders",
                        className: pathname.includes("/orders") ? activeLink : inactiveLink,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                stroke: "currentColor",
                                className: pathname.includes("/orders") ? activeIcon : inactiveIcon,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                                })
                            }),
                            "Orders"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        onClick: logout,
                        className: inactiveLink,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                stroke: "currentColor",
                                className: "w-6 h-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                                })
                            }),
                            "Logout"
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Layout.js





function Layout({ children  }) {
    const [showNav, setShowNav] = (0,external_react_.useState)(false);
    const { data: session  } = (0,react_.useSession)();
    if (!session) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "bg-bgGray w-screen h-screen flex items-center SingInSec",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "head",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-center w-full SingInSec-container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "SingInSec-box",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "deewall_logp",
                                children: "LogIn"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logInBtn-con",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    onClick: ()=>(0,react_.signIn)("google"),
                                    className: "bg-white p-2 px-4 rounded-lg logInBtn",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            x: "0px",
                                            y: "0px",
                                            width: "30",
                                            height: "30",
                                            viewBox: "0 0 48 48",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fill: "#FFC107",
                                                    d: "M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fill: "#FF3D00",
                                                    d: "M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fill: "#4CAF50",
                                                    d: "M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fill: "#1976D2",
                                                    d: "M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                                })
                                            ]
                                        }),
                                        "Login with Google"
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-bgGray min-h-screen ",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "block md:hidden flex items-center p-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>setShowNav(true),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            className: "w-6 h-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fillRule: "evenodd",
                                d: "M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z",
                                clipRule: "evenodd"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex grow justify-center mr-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Nav, {
                        show: showNav
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex-grow p-4",
                        children: children
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;