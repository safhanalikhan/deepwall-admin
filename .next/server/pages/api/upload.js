"use strict";
(() => {
var exports = {};
exports.id = 39;
exports.ids = [39,748];
exports.modules = {

/***/ 1841:
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ 166:
/***/ ((module) => {

module.exports = require("@next-auth/mongodb-adapter");

/***/ }),

/***/ 9514:
/***/ ((module) => {

module.exports = require("mime-types");

/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 165:
/***/ ((module) => {

module.exports = require("multiparty");

/***/ }),

/***/ 3227:
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ 3598:
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ 4701:
/***/ ((module) => {

module.exports = require("sweetalert");

/***/ }),

/***/ 271:
/***/ ((module) => {

module.exports = require("sweetalert2");

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ 3773:
/***/ ((module) => {

module.exports = import("firebase/compat/app");;

/***/ }),

/***/ 4826:
/***/ ((module) => {

module.exports = import("firebase/compat/auth");;

/***/ }),

/***/ 2344:
/***/ ((module) => {

module.exports = import("firebase/compat/database");;

/***/ }),

/***/ 741:
/***/ ((module) => {

module.exports = import("firebase/compat/firestore");;

/***/ }),

/***/ 451:
/***/ ((module) => {

module.exports = import("firebase/compat/storage");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ 3392:
/***/ ((module) => {

module.exports = import("firebase/storage");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 7611:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony exports userRegister, SignIn, logOut, auth, uploadImage */
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3773);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3745);
/* harmony import */ var firebase_compat_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2344);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4826);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(741);
/* harmony import */ var firebase_compat_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(451);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(401);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1492);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3392);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4701);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_app__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_database__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_4__, firebase_compat_storage__WEBPACK_IMPORTED_MODULE_5__, firebase_auth__WEBPACK_IMPORTED_MODULE_6__, firebase_firestore__WEBPACK_IMPORTED_MODULE_7__, firebase_storage__WEBPACK_IMPORTED_MODULE_8__]);
([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_app__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_database__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_4__, firebase_compat_storage__WEBPACK_IMPORTED_MODULE_5__, firebase_auth__WEBPACK_IMPORTED_MODULE_6__, firebase_firestore__WEBPACK_IMPORTED_MODULE_7__, firebase_storage__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const firebaseConfig = {
    apiKey: "AIzaSyD9jVJFwKNlCsW-COdP6cndnvShKEBSG0g",
    authDomain: "deepwall-6a8d0.firebaseapp.com",
    projectId: "deepwall-6a8d0",
    storageBucket: "deepwall-6a8d0.appspot.com",
    messagingSenderId: "354115952389",
    appId: "1:354115952389:web:9f830fba7495324278616c",
    measurementId: "G-ZPV86PPBER"
};
if (!firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].apps.length) {
    firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig);
}
;
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_1__.initializeApp)(firebaseConfig);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.getAuth)(app); //Auth
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getFirestore)(app) //DB
;
const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_8__.getStorage)();
const rdb = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].database();
const userRegister = async (form)=>{
    const { firstName , lastName , organization , email , password  } = form;
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const uid = result.user.uid;
    const date = new Date().toLocaleDateString({
        year: "numeric",
        month: "numeric",
        day: "numeric"
    });
    var verify = sendEmailVerification(result.user);
    const selected = false;
    await setDoc(doc(db, "users", uid), {
        firstName,
        lastName,
        organization,
        email,
        date,
        uid,
        selected
    });
// console.log('result ==========>>> ' , result)
};
// ================================== User LogIn ==================================== \\
async function SignIn(email, password) {
    await signInWithEmailAndPassword(auth, email, password);
}
// ================================== User Log Out ==================================== \\
const logOut = async (popup = "")=>{
    // console.log('logOut', auth.currentUser)
    await signOut(auth).then(()=>{
        if (!popup) {
            swal({
                title: "Log Out!",
                text: "Log Out your account",
                icon: "warning",
                button: "OK"
            });
        }
    }).catch((error)=>{
        alert("Signout Error ", error.message);
    });
};
async function uploadImage({ file , fileName  }) {
    // console.log('file', fileName)
    const imageRef = ref(storage, "productImages/" + fileName);
    const uploadedImage = await uploadBytes(imageRef, file);
    const url = await getDownloadURL(uploadedImage.ref);
    return url;
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ mongooseConnect)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

function mongooseConnect() {
    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) === 1) {
        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();
    } else {
        const uri = process.env.MONGODB_URI;
        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);
    }
}


/***/ }),

/***/ 1180:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ handle)
/* harmony export */ });
/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);
/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multiparty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1841);
/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mime_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9514);
/* harmony import */ var mime_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mime_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6029);
/* harmony import */ var _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8556);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7611);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config__WEBPACK_IMPORTED_MODULE_6__]);
_config__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const bucketName = "deepwallec2";
async function handle(req, res) {
    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_4__/* .mongooseConnect */ .I)();
    await (0,_pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_5__.isAdminRequest)(req, res);
    const form = new (multiparty__WEBPACK_IMPORTED_MODULE_0___default().Form)();
    const { files  } = await new Promise((resolve, reject)=>{
        form.parse(req, (err, fields, files)=>{
            if (err) reject(err);
            resolve({
                fields,
                files
            });
        });
    });
    console.log("length:", files.file.length);
    const client = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__.S3Client({
        region: "us-east-2",
        credentials: {
            accessKeyId: "AKIAQ3EGTQPA5Z4BDBOX",
            secretAccessKey: "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"
        }
    });
    const links = [];
    for (const file of files.file){
        const ext = file.originalFilename.split(".");
        const fileName = ext[0] + Date.now() + "." + ext[1];
        // files.length?.map((fileItem) => {
        //   console.log(fileItem)
        // })
        // let link =  await uploadImage({file , fileName})
        console.log("file - - - - - >", fileName);
        await client.send(new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__.PutObjectCommand({
            Bucket: bucketName,
            Key: fileName,
            Body: fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(file.path),
            ContentType: mime_types__WEBPACK_IMPORTED_MODULE_3___default().lookup(file.path)
        }));
        const link = `https://${bucketName}.s3.amazonaws.com/${fileName}`;
        console.log("file - - - - - >", link);
        links.push(link);
    }
    return res.json({
        links
    });
}
const config = {
    api: {
        bodyParser: false
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [556], () => (__webpack_exec__(1180)));
module.exports = __webpack_exports__;

})();