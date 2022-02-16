"use strict";
(self["webpackChunkEcommerce_vue"] = self["webpackChunkEcommerce_vue"] || []).push([["resources_js_views_app_menu_Types_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/app/menu/Types.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/app/menu/Types.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_xampp_htdocs_ecommerce_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants/config */ "./resources/js/constants/config.js");
/* harmony import */ var _constants_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../constants/menu */ "./resources/js/constants/menu.js");








//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  computed: (0,C_xampp_htdocs_ecommerce_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (0,vuex__WEBPACK_IMPORTED_MODULE_10__.mapGetters)({
    selectedMenuHasSubItems: 'getSelectedMenuHasSubItems'
  })),
  methods: (0,C_xampp_htdocs_ecommerce_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,C_xampp_htdocs_ecommerce_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (0,vuex__WEBPACK_IMPORTED_MODULE_10__.mapMutations)(['changeSideMenuStatus'])), {}, {
    changeDefaultMenuType: function changeDefaultMenuType(containerClassnames) {
      var nextClasses = this.getMenuClassesForResize(containerClassnames);
      this.changeSideMenuStatus({
        step: 0,
        classNames: nextClasses.join(' '),
        selectedMenuHasSubItems: this.selectedMenuHasSubItems
      });
    },
    getMenuClassesForResize: function getMenuClassesForResize(classes) {
      var nextClasses = classes.split(' ').filter(function (x) {
        return x !== '';
      });
      var windowWidth = window.innerWidth;

      if (windowWidth < _constants_config__WEBPACK_IMPORTED_MODULE_8__.menuHiddenBreakpoint) {
        nextClasses.push('menu-mobile');
      } else if (windowWidth < _constants_config__WEBPACK_IMPORTED_MODULE_8__.subHiddenBreakpoint) {
        nextClasses = nextClasses.filter(function (x) {
          return x !== 'menu-mobile';
        });

        if (nextClasses.includes('menu-default') && !nextClasses.includes('menu-sub-hidden')) {
          nextClasses.push('menu-sub-hidden');
        }
      } else {
        nextClasses = nextClasses.filter(function (x) {
          return x !== 'menu-mobile';
        });

        if (nextClasses.includes('menu-default') && nextClasses.includes('menu-sub-hidden')) {
          nextClasses = nextClasses.filter(function (x) {
            return x !== 'menu-sub-hidden';
          });
        }
      }

      return nextClasses;
    }
  })
});

/***/ }),

/***/ "./resources/js/constants/menu.js":
/*!****************************************!*\
  !*** ./resources/js/constants/menu.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./resources/js/constants/config.js");
/* harmony import */ var _utils_auth_roles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/auth.roles */ "./resources/js/utils/auth.roles.js");


var data = [{
  id: "dashboards",
  icon: "iconsminds-shop-4",
  label: "menu.dashboards",
  to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/dashboards"),
  // roles: [UserRole.Admin, UserRole.Editor],
  subs: [{
    icon: "simple-icon-briefcase",
    label: "menu.default",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/dashboards/default") // roles: [UserRole.Admin],

  }, {
    icon: "simple-icon-pie-chart",
    label: "menu.analytics",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/dashboards/analytics") // roles: [UserRole.Admin],

  }, {
    icon: "simple-icon-basket-loaded",
    label: "menu.ecommerce",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/dashboards/ecommerce") // roles: [UserRole.Editor],

  }, {
    icon: "simple-icon-doc",
    label: "menu.content",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/dashboards/content") // roles: [UserRole.Editor],

  }]
}, {
  id: "pages",
  icon: "iconsminds-digital-drawing",
  label: "menu.pages",
  to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/pages"),
  subs: [{
    id: "pages-authorization",
    label: "menu.authorization",
    to: "/user",
    subs: [{
      icon: "simple-icon-user-following",
      label: "menu.login",
      to: "/user/login",
      newWindow: true
    }, {
      icon: "simple-icon-user-follow",
      label: "menu.register",
      to: "/user/register",
      newWindow: true
    }, {
      icon: "simple-icon-user-following",
      label: "menu.forgot-password",
      to: "/user/forgot-password",
      newWindow: true
    }, {
      icon: "simple-icon-user-following",
      label: "menu.reset-password",
      to: "/user/reset-password",
      newWindow: true
    }]
  }, {
    id: "pages-product",
    label: "menu.product",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/pages/product"),
    subs: [{
      icon: "simple-icon-credit-card",
      label: "menu.data-list",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/pages/product/data-list")
    }, {
      icon: "simple-icon-list",
      label: "menu.thumb-list",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/pages/product/thumb-list")
    }, {
      icon: "simple-icon-grid",
      label: "menu.image-list",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/pages/product/image-list")
    }, {
      icon: "simple-icon-picture",
      label: "menu.details",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/pages/product/details")
    }, {
      icon: "simple-icon-book-open",
      label: "menu.details-alt",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/pages/product/details-alt")
    }]
  }, {
    id: "pages-profile",
    label: "menu.profile",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/pages/profile"),
    subs: [{
      icon: "simple-icon-share",
      label: "menu.social",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/pages/profile/social")
    }, {
      icon: "simple-icon-link",
      label: "menu.portfolio",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/pages/profile/portfolio")
    }]
  }, {
    id: "pages-blog",
    label: "menu.blog",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/pages/blog"),
    subs: [{
      icon: "simple-icon-share",
      label: "menu.blog-list",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/pages/blog/blog-list")
    }, {
      icon: "simple-icon-link",
      label: "menu.blog-detail",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/pages/blog/blog-detail")
    }]
  }, {
    id: "pages-miscellaneous",
    label: "menu.miscellaneous",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/pages/miscellaneous"),
    subs: [{
      icon: "simple-icon-question",
      label: "menu.faq",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/pages/miscellaneous/faq")
    }, {
      icon: "simple-icon-graduation",
      label: "menu.knowledge-base",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/pages/miscellaneous/knowledge-base")
    }, {
      icon: "simple-icon-diamond",
      label: "menu.prices",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/pages/miscellaneous/prices")
    }, {
      icon: "simple-icon-magnifier",
      label: "menu.search",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/pages/miscellaneous/search")
    }, {
      icon: "simple-icon-envelope-open",
      label: "menu.mailing",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/pages/miscellaneous/mailing")
    }, {
      icon: "simple-icon-bag",
      label: "menu.invoice",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/pages/miscellaneous/invoice")
    }, {
      icon: "simple-icon-exclamation",
      label: "menu.error",
      to: "/error",
      newWindow: true
    }]
  }]
}, {
  id: "applications",
  icon: "iconsminds-air-balloon-1",
  label: "menu.applications",
  to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/applications"),
  subs: [{
    icon: "simple-icon-check",
    label: "menu.todo",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/applications/todo")
  }, {
    icon: "simple-icon-calculator",
    label: "menu.survey",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/applications/survey")
  }, {
    icon: "simple-icon-bubbles",
    label: "menu.chat",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/applications/chat")
  }]
}, {
  id: "ui",
  icon: "iconsminds-pantone",
  label: "menu.ui",
  to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui"),
  subs: [{
    id: "ui-forms",
    label: "menu.forms",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/forms"),
    subs: [{
      icon: "simple-icon-notebook",
      label: "menu.layouts",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/forms/layouts")
    }, {
      icon: "simple-icon-puzzle",
      label: "menu.components",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/forms/components")
    }, {
      icon: "simple-icon-check",
      label: "menu.validations",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/forms/validations")
    }, {
      icon: "simple-icon-magic-wand",
      label: "menu.wizard",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/forms/wizard")
    }]
  }, {
    id: "ui-datatables",
    label: "menu.datatables",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/datatables"),
    subs: [{
      icon: "simple-icon-screen-desktop",
      label: "menu.divided-table",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/datatables/divided-table")
    }, {
      icon: "simple-icon-mouse",
      label: "menu.scrollable",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/datatables/scrollable")
    }, {
      icon: "simple-icon-grid",
      label: "menu.default",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/datatables/default")
    }]
  }, {
    id: "ui-components",
    label: "menu.components",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/components"),
    subs: [{
      icon: "simple-icon-bell",
      label: "menu.alerts",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/components/alerts")
    }, {
      icon: "simple-icon-badge",
      label: "menu.badges",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/components/badges")
    }, {
      icon: "simple-icon-control-play",
      label: "menu.buttons",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/components/buttons")
    }, {
      icon: "simple-icon-layers",
      label: "menu.cards",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/components/cards")
    }, {
      icon: "simple-icon-picture",
      label: "menu.carousel",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/components/carousel")
    }, {
      icon: "simple-icon-chart",
      label: "menu.charts",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/components/charts")
    }, {
      icon: "simple-icon-arrow-up",
      label: "menu.collapse",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/components/collapse")
    }, {
      icon: "simple-icon-arrow-down",
      label: "menu.dropdowns",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/components/dropdowns")
    }, {
      icon: "simple-icon-book-open",
      label: "menu.editors",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/components/editors")
    }, {
      icon: "simple-icon-star",
      label: "menu.icons",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/components/icons")
    }, {
      icon: "simple-icon-note",
      label: "menu.input-groups",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/components/input-groups")
    }, {
      icon: "simple-icon-screen-desktop",
      label: "menu.jumbotron",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/components/jumbotron")
    }, {
      icon: "simple-icon-map",
      label: "menu.maps",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/components/maps")
    }, {
      icon: "simple-icon-docs",
      label: "menu.modal",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/components/modal")
    }, {
      icon: "simple-icon-cursor",
      label: "menu.navigation",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/components/navigation")
    }, {
      icon: "simple-icon-pin",
      label: "menu.popover-tooltip",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/components/popover-tooltip")
    }, {
      icon: "simple-icon-shuffle",
      label: "menu.sortable",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/components/sortable")
    }, {
      icon: "simple-icon-grid",
      label: "menu.tables",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/ui/components/tables")
    }]
  }]
}, {
  id: "menu",
  icon: "iconsminds-three-arrow-fork",
  label: "menu.menu",
  to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/menu"),
  subs: [{
    icon: "simple-icon-logout",
    label: "menu.types",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/menu/types")
  }, {
    icon: "simple-icon-layers",
    label: "menu.levels",
    to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/menu/levels"),
    subs: [{
      icon: "simple-icon-arrow-right",
      label: "menu.third-level-1",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/menu/levels/third-level-1")
    }, {
      icon: "simple-icon-arrow-right",
      label: "menu.third-level-2",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/menu/levels/third-level-2")
    }, {
      icon: "simple-icon-arrow-right",
      label: "menu.third-level-3",
      to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/menu/levels/third-level-3")
    }]
  }]
}, {
  id: "blank-page",
  icon: "iconsminds-bucket",
  label: "menu.blank-page",
  to: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__.adminRoot, "/blank-page")
}, {
  id: "docs",
  icon: "iconsminds-library",
  label: "menu.docs",
  to: "https://piaf-vue-docs.coloredstrategies.com/",
  newWindow: true
}];
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./resources/js/views/app/menu/Types.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/app/menu/Types.vue ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Types_vue_vue_type_template_id_4350a8d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types.vue?vue&type=template&id=4350a8d4& */ "./resources/js/views/app/menu/Types.vue?vue&type=template&id=4350a8d4&");
/* harmony import */ var _Types_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Types.vue?vue&type=script&lang=js& */ "./resources/js/views/app/menu/Types.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Types_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Types_vue_vue_type_template_id_4350a8d4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Types_vue_vue_type_template_id_4350a8d4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/menu/Types.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/menu/Types.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/app/menu/Types.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Types_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Types.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/app/menu/Types.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Types_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/menu/Types.vue?vue&type=template&id=4350a8d4&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/app/menu/Types.vue?vue&type=template&id=4350a8d4& ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Types_vue_vue_type_template_id_4350a8d4___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Types_vue_vue_type_template_id_4350a8d4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Types_vue_vue_type_template_id_4350a8d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Types.vue?vue&type=template&id=4350a8d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/app/menu/Types.vue?vue&type=template&id=4350a8d4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/app/menu/Types.vue?vue&type=template&id=4350a8d4&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/app/menu/Types.vue?vue&type=template&id=4350a8d4& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c("piaf-breadcrumb", {
                attrs: { heading: _vm.$t("menu.types") },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "separator mb-5" }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-colxx",
            { attrs: { xxs: "12" } },
            [
              _c(
                "b-button",
                {
                  staticClass: "mb-1",
                  attrs: { variant: "outline-primary" },
                  on: {
                    click: function ($event) {
                      return _vm.changeDefaultMenuType("menu-default")
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.$t("menu.default")))]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "mb-1",
                  attrs: { variant: "outline-primary" },
                  on: {
                    click: function ($event) {
                      return _vm.changeDefaultMenuType("menu-sub-hidden")
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.$t("menu.subhidden")))]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "mb-1",
                  attrs: { variant: "outline-primary" },
                  on: {
                    click: function ($event) {
                      return _vm.changeDefaultMenuType("menu-hidden")
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.$t("menu.hidden")))]
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);