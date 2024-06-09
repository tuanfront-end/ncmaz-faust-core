/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/icon/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/icon/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps}                                 props icon is the SVG component to render
 *                                                          size is a number specifiying the icon size in pixels
 *                                                          Other props will be passed to wrapped SVG component
 * @param {import('react').ForwardedRef<HTMLElement>} ref   The forwarded ref to the SVG element.
 *
 * @return {JSX.Element}  Icon component
 */
function Icon({
  icon,
  size = 24,
  ...props
}, ref) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon, {
    width: size,
    height: size,
    ...props,
    ref
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Icon));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/file.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/file.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const file = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12.848 8a1 1 0 0 1-.914-.594l-.723-1.63a.5.5 0 0 0-.447-.276H5a.5.5 0 0 0-.5.5v11.5a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-9A.5.5 0 0 0 19 8h-6.152Zm.612-1.5a.5.5 0 0 1-.462-.31l-.445-1.084A2 2 0 0 0 10.763 4H5a2 2 0 0 0-2 2v11.5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-5.54Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (file);
//# sourceMappingURL=file.js.map

/***/ }),

/***/ "./src/block-magazine/useLoadPostMessage.ts":
/*!**************************************************!*\
  !*** ./src/block-magazine/useLoadPostMessage.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useLoadPostMessage)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function useLoadPostMessage({
  data,
  clientId,
  type = "ncmazfc-preview-posts-block"
}) {
  const iframeRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [front_uri, setFrontUri] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [iframeHeight, setIframeHeight] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (typeof window === "undefined") {
      return;
    }
    const frontend_uri = window.ncmazfc_frontend_uri?.frontend_uri || "";
    if (frontend_uri.startsWith("http")) {
      setFrontUri(frontend_uri.replace(/\/$/, ""));
    }
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const iframe = iframeRef.current;
    if (!iframe || !front_uri || !clientId) {
      return;
    }
    iframe.onload = () => {
      setTimeout(() => {
        iframeRef?.current?.contentWindow?.postMessage({
          data,
          type,
          clientId
        }, front_uri);
      }, 200);
    };
  }, [iframeRef, data, front_uri, clientId, type]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (typeof window === "undefined" || !front_uri || !clientId) {
      return;
    }
    window.addEventListener("message", event => {
      if (!event.origin.includes(front_uri) && !front_uri.includes(event.origin)) {
        return;
      }
      if (event.data.type !== "ncmaz-preview-iframe-height" || event.data.clientId !== clientId) {
        return;
      }
      if (event.data.height) {
        setIframeHeight(event.data.height);
      }
    });
  }, [front_uri, clientId]);
  return {
    iframeRef,
    front_uri,
    iframeHeight
  };
}

/***/ }),

/***/ "./src/block-terms/DemoTermsList.tsx":
/*!*******************************************!*\
  !*** ./src/block-terms/DemoTermsList.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_magazine_useLoadPostMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-magazine/useLoadPostMessage */ "./src/block-magazine/useLoadPostMessage.ts");



const DemoTermsList = ({
  terms,
  clientId
}) => {
  const {
    front_uri,
    iframeHeight,
    iframeRef
  } = (0,_block_magazine_useLoadPostMessage__WEBPACK_IMPORTED_MODULE_1__["default"])({
    data: terms,
    clientId: clientId || "",
    type: "ncmazfc-preview-terms-block"
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, !front_uri && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "px-8 py-5 bg-slate-100/70 rounded-xl border-2 mt-12"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "To get a live preview of the styles of the different variants, make sure to set", " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://faustjs.org/tutorial/get-started-with-faust#set-your-front-end-site-url",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "underline text-green-600"
  }, "the frontend site URL"), " ", "in the Faust WordPress Plugin Settings.")), !!front_uri && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
    ref: iframeRef,
    className: "w-full min-h-96 overflow-auto hiddenScrollbar",
    title: "ncmaz_for_ncmazfc_preview_blocks",
    src: front_uri + "/ncmaz_for_ncmazfc_preview_blocks/",
    style: {
      height: iframeHeight || undefined,
      opacity: iframeHeight ? 1 : 0
    }
  }), !front_uri && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-wrap gap-3 mt-3"
  }, terms.map(node => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: node.databaseId,
      className: "relative inline-flex items-center justify-between p-2 pr-5 space-x-5 rounded-3xl bg-neutral-100 dark:bg-neutral-800 dark:bg-opacity-30 hover:shadow-xl transition-shadow "
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex items-center space-x-4"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "block flex-shrink-0 w-11 h-11 sm:w-16 sm:h-16 relative rounded-full overflow-hidden shadow-lg"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "nc-NcImage absolute inset-0"
    }, node.ncTaxonomyMeta?.featuredImage?.node?.sourceUrl ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: node.ncTaxonomyMeta?.featuredImage?.node?.sourceUrl,
      className: "object-cover w-full h-full ",
      alt: "DIYer and TV "
    }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex flex-col flex-grow"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "block font-semibold text-lg"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "line-clamp-1"
    }, node.name)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1"
    }, node.count, " articles"))));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DemoTermsList);

/***/ }),

/***/ "./src/block-terms/attributes.ts":
/*!***************************************!*\
  !*** ./src/block-terms/attributes.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const blokcAttrs = {
  uniqueId: {
    type: "string"
    // default: "",
  },
  order: {
    type: "string"
    // default: "DESC",
  },
  orderBy: {
    type: "string"
    // default: "NAME",
  },
  blockVariation: {
    type: "string"
    // default: "grid-1",
  },
  numberOfTags: {
    type: "number"
    // default: 30,
  },
  showTagCounts: {
    type: "boolean"
    // default: true,
  },
  taxonomy: {
    type: "string"
    // default: "TAG",
  },
  hasBackground: {
    type: "boolean"
    // default: "TAG",
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blokcAttrs);

/***/ }),

/***/ "./src/block-terms/deprecated.ts":
/*!***************************************!*\
  !*** ./src/block-terms/deprecated.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const v1 = {};
const v2 = {};
const deprecated = [v2, v1];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecated);

/***/ }),

/***/ "./src/block-terms/edit.tsx":
/*!**********************************!*\
  !*** ./src/block-terms/edit.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _order_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-control */ "./src/block-terms/order-control.tsx");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_BlockLoadingPlaceholder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BlockLoadingPlaceholder */ "./src/components/BlockLoadingPlaceholder.tsx");
/* harmony import */ var _DemoTermsList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DemoTermsList */ "./src/block-terms/DemoTermsList.tsx");
/* harmony import */ var _components_BlockEmptyPlaceholder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/BlockEmptyPlaceholder */ "./src/components/BlockEmptyPlaceholder.tsx");
/* harmony import */ var _frontend_components_BackgroundSection_BackgroundSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../frontend-components/BackgroundSection/BackgroundSection */ "./src/frontend-components/BackgroundSection/BackgroundSection.tsx");
/* harmony import */ var _utils_className__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/className */ "./src/utils/className.tsx");

/**
 * WordPress dependencies
 */











const MIN_TAGS = 1;
const MAX_TAGS = 80;
const Edit = props => {
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  const {
    blockVariation,
    numberOfTags,
    showTagCounts,
    taxonomy,
    uniqueId,
    order,
    orderBy,
    hasBackground
  } = attributes;
  const [initTermsFromSSR, setInitTermsFromSSR] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [initErrorFromSSR, setInitErrorFromSSR] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const SERVER_SIDE_ID = "ncmazfcSSR-block-" + clientId;
  const observerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // ---- SAVE uniqueId ----
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setAttributes({
      uniqueId: clientId
    });
  }, []);
  const getTermsDataFromSeverSideRenderNode = wrapNode => {
    const node = wrapNode.querySelector("div[data-block-json-wrap]");
    const dataObject = JSON.parse(node?.textContent || "{}");
    return {
      initTerms: dataObject?.block_terms || null,
      initErrors: dataObject?.errors || null
    };
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const targetNode = document.getElementById(SERVER_SIDE_ID);
    if (!targetNode) return;

    // Options for the observer (which mutations to observe)
    const config = {
      childList: true
    };

    // Callback function to execute when mutations are observed
    const callback = (mutationList, observer) => {
      for (const mutation of mutationList) {
        if (mutation.type === "childList") {
          const {
            initErrors,
            initTerms
          } = getTermsDataFromSeverSideRenderNode(mutation.target);
          setInitErrorFromSSR(initErrors);
          setInitTermsFromSSR(initTerms);
          if (!!initErrors || !!initTerms) {
            observer.disconnect();
            observerRef.current = null;
          }
        }
      }
    };
    if (!observerRef.current) {
      observerRef.current = new MutationObserver(callback);
      observerRef.current.observe(targetNode, config);
    }
  }, [numberOfTags, showTagCounts, taxonomy, uniqueId, order, orderBy]);
  const renderLayoutType = () => {
    const dataLists = initTermsFromSSR;
    if (!dataLists) {
      return null;
    }
    if (!dataLists?.length) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BlockEmptyPlaceholder__WEBPACK_IMPORTED_MODULE_8__["default"], null);
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DemoTermsList__WEBPACK_IMPORTED_MODULE_7__["default"], {
      terms: dataLists || [],
      clientId: clientId
    });
  };

  // render
  const inspectorControls = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Layout"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-2.5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Select block's variation", "ncmazfc"),
    value: blockVariation,
    help: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "To get a live preview of the styles of the different variants, make sure to set", " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://faustjs.org/tutorial/get-started-with-faust#set-your-front-end-site-url",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "underline text-green-600"
    }, "the frontend site URL"), " ", "in the Faust WordPress Plugin Settings. ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), "Or you can check out the", " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://ncmaz-faust.chisnghiax.com/block-term-variations-preview",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "underline text-blue-400"
    }, "styling of the variations here")),
    onChange: blockVariation => setAttributes({
      blockVariation
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("optgroup", {
    label: "Grid"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "grid-1"
  }, "Grid 1"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "grid-2"
  }, "Grid 2"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "grid-3"
  }, "Grid 3"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "grid-4"
  }, "Grid 4"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "grid-5"
  }, "Grid 5")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("optgroup", {
    label: "Slider"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "slider-1"
  }, "Slider 1"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "slider-2"
  }, "Slider 2"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "slider-3"
  }, "Slider 3"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "slider-4"
  }, "Slider 4"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "slider-5"
  }, "Slider 5"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-full space-x-3 flex "
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormToggle, {
    checked: hasBackground,
    onChange: () => setAttributes({
      hasBackground: !hasBackground
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Enable Background", "ncmazfc"))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Settings")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Taxonomy"),
    options: [{
      label: "CATEGORY",
      value: "CATEGORY"
    }, {
      label: "POSTFORMAT",
      value: "POSTFORMAT"
    }, {
      label: "TAG",
      value: "TAG"
    }],
    value: taxonomy,
    onChange: selectedTaxonomy => setAttributes({
      taxonomy: selectedTaxonomy
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_order_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    order,
    orderBy,
    onChange: ({
      order,
      orderBy
    }) => {
      setAttributes({
        order,
        orderBy
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Show post counts"),
    checked: showTagCounts,
    onChange: () => setAttributes({
      showTagCounts: !showTagCounts
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Number of tags"),
    value: numberOfTags,
    onChange: value => setAttributes({
      numberOfTags: value
    }),
    min: MIN_TAGS,
    max: MAX_TAGS,
    required: true
  })));
  const renderContent = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "relative"
    }, initErrorFromSSR && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "text-red-500 text-sm p-10 bg-slate-100"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Error when fetching posts data from SSR", "ncmazfc")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("pre", {
      className: "text-xs"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", null, JSON.stringify(initErrorFromSSR, null, 2)))), initTermsFromSSR && renderLayoutType(), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: SERVER_SIDE_ID
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default()), {
      block: "ncmaz-faust/block-terms",
      attributes: attributes,
      httpMethod: "POST",
      LoadingResponsePlaceholder: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "absolute bg-black/10 -inset-2.5 flex items-center justify-center"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BlockLoadingPlaceholder__WEBPACK_IMPORTED_MODULE_6__["default"], null)),
      EmptyResponsePlaceholder: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null)
    })));
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, inspectorControls, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
      className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_10__["default"])("not-prose", hasBackground ? "relative py-16" : "")
    })
  }, hasBackground ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_BackgroundSection_BackgroundSection__WEBPACK_IMPORTED_MODULE_9__["default"], null) : null, renderContent()));
};

// @ts-ignore
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/block-terms/index.js":
/*!**********************************!*\
  !*** ./src/block-terms/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/block-terms/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/block-terms/edit.tsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/block-terms/save.tsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/block-terms/block.json");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deprecated */ "./src/block-terms/deprecated.ts");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./attributes */ "./src/block-terms/attributes.ts");




/**
 * Internal dependencies
 */





//

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  // attributes,
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_6__["default"],
  example: {},
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "wcb-editor-block-icons fill-none ",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))
});

/***/ }),

/***/ "./src/block-terms/order-control.tsx":
/*!*******************************************!*\
  !*** ./src/block-terms/order-control.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */



const orderOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Item count/desc"),
  value: "COUNT/DESC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Item count/asc"),
  value: "COUNT/ASC"
}, {
  /* translators: label for ordering posts by title in ascending order */
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("A → Z"),
  value: "NAME/ASC"
}, {
  /* translators: label for ordering posts by title in descending order */
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Z → A"),
  value: "NAME/DESC"
}, {
  /* translators: label for ordering posts by title in ascending order */
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Term group/asc"),
  value: "TERM_GROUP/ASC"
}, {
  /* translators: label for ordering posts by title in descending order */
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Term group/desc"),
  value: "TERM_GROUP/DESC"
}, {
  /* translators: label for ordering posts by title in ascending order */
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Term order/asc"),
  value: "TERM_ORDER/ASC"
}, {
  /* translators: label for ordering posts by title in descending order */
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Term order/desc"),
  value: "TERM_ORDER/DESC"
}];
function TermOrderControl({
  order,
  orderBy,
  onChange
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Order by"),
    value: `${orderBy}/${order}`,
    options: orderOptions,
    onChange: value => {
      const [newOrderBy, newOrder] = value.split("/");
      // @ts-ignore
      onChange({
        order: newOrder,
        orderBy: newOrderBy
      });
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TermOrderControl);

/***/ }),

/***/ "./src/block-terms/save.tsx":
/*!**********************************!*\
  !*** ./src/block-terms/save.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



function save() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, "Todo List – hello from the saved content!");
}

/***/ }),

/***/ "./src/components/BlockEmptyPlaceholder.tsx":
/*!**************************************************!*\
  !*** ./src/components/BlockEmptyPlaceholder.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/file.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);





const BlockEmptyPlaceholder = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Placeholder, {
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"]
  }),
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Ncmaz faust block!", "wcb"),
  className: ""
}, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("No results found! Please try another selection.", "ncmazfc"));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockEmptyPlaceholder);

/***/ }),

/***/ "./src/components/BlockLoadingPlaceholder.tsx":
/*!****************************************************!*\
  !*** ./src/components/BlockLoadingPlaceholder.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const BlockLoadingPlaceholder = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
  className: "container flex items-center justify-center py-7"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockLoadingPlaceholder);

/***/ }),

/***/ "./src/frontend-components/BackgroundSection/BackgroundSection.tsx":
/*!*************************************************************************!*\
  !*** ./src/frontend-components/BackgroundSection/BackgroundSection.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const BackgroundSection = ({
  className = "bg-neutral-100 dark:bg-black/20 "
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0  ${className}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sr-only hidden"
  }, "bg"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackgroundSection);

/***/ }),

/***/ "./src/utils/className.tsx":
/*!*********************************!*\
  !*** ./src/utils/className.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ classNames)
/* harmony export */ });
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

/***/ }),

/***/ "./src/block-terms/style.scss":
/*!************************************!*\
  !*** ./src/block-terms/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ ((module) => {

module.exports = window["wp"]["serverSideRender"];

/***/ }),

/***/ "./src/block-terms/block.json":
/*!************************************!*\
  !*** ./src/block-terms/block.json ***!
  \************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ncmaz-faust/block-terms","version":"0.1.0","title":"NcmazFc Terms","category":"ncmazfc-blocks","icon":"smiley","description":"Example static block scaffolded with Create Block tool.","supports":{"html":false,"align":["wide","full"],"className":true},"textdomain":"ncmazfc","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"block-terms/index": 0,
/******/ 			"block-terms/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkncmaz_faust_core"] = globalThis["webpackChunkncmaz_faust_core"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["block-terms/style-index"], () => (__webpack_require__("./src/block-terms/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map