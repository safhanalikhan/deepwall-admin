"use strict";
exports.id = 316;
exports.ids = [316];
exports.modules = {

/***/ 4316:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6746);
/* harmony import */ var react_sortablejs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8188);
/* harmony import */ var react_sortablejs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_sortablejs__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__]);
axios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function ProductForm({ _id , title: existingTitle , description: existingDescription , price: existingPrice , images: existingImages , category: assignedCategory , properties: assignedProperties  }) {
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(existingTitle || "");
    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(existingDescription || "");
    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(assignedCategory || "");
    const [productProperties, setProductProperties] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(assignedProperties || {});
    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(existingPrice || "");
    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(existingImages || []);
    const [goToProducts, setGoToProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isUploading, setIsUploading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [properties, setProperties] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/api/categories").then((result)=>{
            console.log("result", result);
            setCategories(result.data);
        });
    }, []);
    // useEffect(() => { console.log('----------------------------------', properties) }, [properties])
    async function saveProduct(ev) {
        ev.preventDefault();
        const data = {
            title,
            description,
            price,
            images,
            category,
            properties
        };
        if (_id) {
            //update
            await axios__WEBPACK_IMPORTED_MODULE_3__["default"].put("/api/products", {
                ...data,
                _id
            });
        } else {
            //create
            await axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/api/products", data);
        }
        setGoToProducts(true);
    }
    if (goToProducts) {
        router.push("/products");
    }
    async function uploadImages(ev) {
        const files = ev.target?.files;
        if (files?.length > 0) {
            setIsUploading(true);
            const data = new FormData();
            for (const file of files){
                data.append("file", file);
            }
            const res = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("/api/upload", data);
            console.log("res - - - ", res.data.links);
            setImages((oldImages)=>{
                return [
                    ...oldImages,
                    ...res.data.links
                ];
            });
            setIsUploading(false);
        }
    }
    function updateImagesOrder(images) {
        setImages(images);
    }
    function setProductProp(propName, value) {
        setProductProperties((prev)=>{
            const newProductProps = {
                ...prev
            };
            newProductProps[propName] = value;
            return newProductProps;
        });
    }
    const propertiesToFill = [];
    if (categories.length > 0 && category) {
        let catInfo = categories.find(({ _id  })=>_id === category);
        propertiesToFill.push(...catInfo.properties);
        while(catInfo?.parent?._id){
            const parentCat = categories.find(({ _id  })=>_id === catInfo?.parent?._id);
            propertiesToFill.push(...parentCat.properties);
            catInfo = parentCat;
        }
    }
    function addProperty() {
        setProperties({
            size: true,
            border: true
        });
    }
    function handlePropertyValuesChange(property, key) {
        if (key === "border") {
            setProperties({
                ...properties,
                border: !property
            });
        // setPropertiesBorder(!property)
        } else {
            setProperties({
                ...properties,
                size: !property
            });
        // setPropertiesSize()
        }
        console.log("properties", properties);
    }
    function removeProperty() {
        setProperties();
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: saveProduct,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                children: "Product name"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                placeholder: "product name",
                value: title,
                onChange: (ev)=>setTitle(ev.target.value)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                children: "Category"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                value: category,
                onChange: (ev)=>setCategory(ev.target.value),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "",
                        children: "Uncategorized"
                    }),
                    categories.length > 0 && categories.map((c)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: c._id,
                            children: c.name
                        }, c._id))
                ]
            }),
            propertiesToFill.length > 0 && propertiesToFill.map((p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            children: p.name[0].toUpperCase() + p.name.substring(1)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                value: productProperties[p.name],
                                onChange: (ev)=>setProductProp(p.name, ev.target.value),
                                children: p.values.map((v)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: v,
                                        children: v
                                    }, v))
                            })
                        })
                    ]
                }, p.name)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                children: "Photos"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-2 flex flex-wrap gap-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_sortablejs__WEBPACK_IMPORTED_MODULE_5__.ReactSortable, {
                        list: images,
                        className: "flex flex-wrap gap-1",
                        setList: updateImagesOrder,
                        children: !!images?.length && images.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-24 bg-white p-4 shadow-sm rounded-sm border border-gray-200",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: link,
                                    alt: "",
                                    className: "rounded-lg"
                                })
                            }, link))
                    }),
                    isUploading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-24 flex items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Spinner__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        className: "w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary rounded-sm bg-white shadow-sm border border-primary",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                stroke: "currentColor",
                                className: "w-6 h-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "Add image"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "file",
                                onChange: uploadImages,
                                className: "hidden"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                children: "Description"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                placeholder: "description",
                value: description,
                onChange: (ev)=>setDescription(ev.target.value)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                children: "Price (in USD)"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "number",
                placeholder: "price",
                value: price,
                onChange: (ev)=>setPrice(ev.target.value)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "block",
                        children: "Properties"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: addProperty,
                        type: "button",
                        className: "btn-default text-sm mb-2",
                        children: "Add new property"
                    }),
                    properties && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "properties_checks_container",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "properties_check",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "checkbox",
                                        // className="mb-0"
                                        onChange: (ev)=>handlePropertyValuesChange(properties.size, "size"),
                                        checked: properties.size
                                    }),
                                    "Add Size"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "properties_check",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "checkbox",
                                        // className="mb-0"
                                        onChange: (ev)=>handlePropertyValuesChange(properties.border, "border"),
                                        checked: properties.border
                                    }),
                                    "Add Borders"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>removeProperty(),
                                type: "button",
                                className: "btn-red",
                                children: "Remove"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "submit",
                className: "btn-primary",
                children: "Save"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8176);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_1__);


function Spinner() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_spinners__WEBPACK_IMPORTED_MODULE_1__.BounceLoader, {
        color: "#d9121f",
        speedMultiplier: 2
    });
}


/***/ })

};
;