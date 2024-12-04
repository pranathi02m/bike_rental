import {
  NzToolTipModule,
  NzTooltipDirective
} from "./chunk-CXBC3ENV.js";
import {
  NzI18nService
} from "./chunk-4GN42OCF.js";
import "./chunk-BDD2OQ5X.js";
import "./chunk-E2FC4SMO.js";
import "./chunk-LNGCEFFQ.js";
import {
  ENTER,
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-NIMZG7AX.js";
import "./chunk-LPSEMN26.js";
import {
  NzButtonComponent,
  NzButtonModule
} from "./chunk-TWVCQIY7.js";
import "./chunk-3LDTFWFR.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-GBPQIVU3.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-J4WE65MT.js";
import {
  Directionality,
  InputBoolean,
  InputNumber,
  isNotNil,
  toBoolean,
  warn
} from "./chunk-EN7HZGHX.js";
import {
  Platform
} from "./chunk-32NQEHB4.js";
import "./chunk-IV3KQ6CZ.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-UCKDGZ4V.js";
import {
  NzTransitionPatchDirective
} from "./chunk-BMPNON4C.js";
import "./chunk-XU6KJFTU.js";
import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpRequest,
  HttpResponse
} from "./chunk-NKASZPQJ.js";
import {
  DOCUMENT,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet
} from "./chunk-BM37EVK5.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  Subject,
  Subscription,
  ViewChild,
  ViewEncapsulation$1,
  __decorate,
  __objRest,
  __spreadValues,
  filter,
  fromEvent,
  map,
  of,
  setClassMetadata,
  switchMap,
  takeUntil,
  tap,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassMapInterpolate2,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-F5VXPRTG.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-progress.mjs
function NzProgressComponent_ng_template_0_span_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("nzType", ctx_r5.icon);
  }
}
function NzProgressComponent_ng_template_0_span_0_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const formatter_r9 = ctx.$implicit;
    const ctx_r8 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", formatter_r9(ctx_r8.nzPercent), " ");
  }
}
var _c0 = (a0) => ({
  $implicit: a0
});
function NzProgressComponent_ng_template_0_span_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzProgressComponent_ng_template_0_span_0_ng_template_2_ng_container_0_Template, 2, 1, "ng-container", 9);
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(3);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r6.formatter)("nzStringTemplateOutletContext", ɵɵpureFunction1(2, _c0, ctx_r6.nzPercent));
  }
}
function NzProgressComponent_ng_template_0_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtemplate(1, NzProgressComponent_ng_template_0_span_0_ng_container_1_Template, 2, 1, "ng-container", 6)(2, NzProgressComponent_ng_template_0_span_0_ng_template_2_Template, 1, 4, "ng-template", null, 7, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const _r7 = ɵɵreference(3);
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", (ctx_r4.status === "exception" || ctx_r4.status === "success") && !ctx_r4.nzFormat)("ngIfElse", _r7);
  }
}
function NzProgressComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzProgressComponent_ng_template_0_span_0_Template, 4, 2, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.nzShowInfo);
  }
}
function NzProgressComponent_div_3_ng_container_1_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 17);
  }
  if (rf & 2) {
    const ctx_r14 = ɵɵnextContext(4);
    ɵɵstyleProp("width", ctx_r14.nzSuccessPercent, "%")("border-radius", ctx_r14.nzStrokeLinecap === "round" ? "100px" : "0")("height", ctx_r14.strokeWidth, "px");
  }
}
function NzProgressComponent_div_3_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13)(1, "div", 14);
    ɵɵelement(2, "div", 15);
    ɵɵtemplate(3, NzProgressComponent_div_3_ng_container_1_div_1_div_3_Template, 1, 6, "div", 16);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵstyleProp("width", ctx_r12.nzPercent, "%")("border-radius", ctx_r12.nzStrokeLinecap === "round" ? "100px" : "0")("background", !ctx_r12.isGradient ? ctx_r12.nzStrokeColor : null)("background-image", ctx_r12.isGradient ? ctx_r12.lineGradient : null)("height", ctx_r12.strokeWidth, "px");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r12.nzSuccessPercent || ctx_r12.nzSuccessPercent === 0);
  }
}
function NzProgressComponent_div_3_ng_container_1_ng_template_2_Template(rf, ctx) {
}
function NzProgressComponent_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzProgressComponent_div_3_ng_container_1_div_1_Template, 4, 11, "div", 11)(2, NzProgressComponent_div_3_ng_container_1_ng_template_2_Template, 0, 0, "ng-template", 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    const _r1 = ɵɵreference(1);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r10.isSteps);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r1);
  }
}
function NzProgressComponent_div_3_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 20);
  }
  if (rf & 2) {
    const step_r17 = ctx.$implicit;
    ɵɵproperty("ngStyle", step_r17);
  }
}
function NzProgressComponent_div_3_div_2_ng_template_2_Template(rf, ctx) {
}
function NzProgressComponent_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵtemplate(1, NzProgressComponent_div_3_div_2_div_1_Template, 1, 1, "div", 19)(2, NzProgressComponent_div_3_div_2_ng_template_2_Template, 0, 0, "ng-template", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(2);
    const _r1 = ɵɵreference(1);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r11.steps);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r1);
  }
}
function NzProgressComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, NzProgressComponent_div_3_ng_container_1_Template, 3, 2, "ng-container", 2)(2, NzProgressComponent_div_3_div_2_Template, 3, 2, "div", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.isSteps);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isSteps);
  }
}
function NzProgressComponent_div_4__svg_defs_2__svg_stop_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "stop");
  }
  if (rf & 2) {
    const i_r23 = ctx.$implicit;
    ɵɵattribute("offset", i_r23.offset)("stop-color", i_r23.color);
  }
}
function NzProgressComponent_div_4__svg_defs_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "defs")(1, "linearGradient", 24);
    ɵɵtemplate(2, NzProgressComponent_div_4__svg_defs_2__svg_stop_2_Template, 1, 2, "stop", 25);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r19 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("id", "gradient-" + ctx_r19.gradientId);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r19.circleGradient);
  }
}
function NzProgressComponent_div_4__svg_path_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "path", 26);
  }
  if (rf & 2) {
    const p_r24 = ctx.$implicit;
    const ctx_r20 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", p_r24.strokePathStyle);
    ɵɵattribute("d", ctx_r20.pathString)("stroke-linecap", ctx_r20.nzStrokeLinecap)("stroke", p_r24.stroke)("stroke-width", ctx_r20.nzPercent ? ctx_r20.strokeWidth : 0);
  }
}
function NzProgressComponent_div_4_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
  }
}
function NzProgressComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 21);
    ɵɵtemplate(2, NzProgressComponent_div_4__svg_defs_2_Template, 3, 2, "defs", 2);
    ɵɵelement(3, "path", 22);
    ɵɵtemplate(4, NzProgressComponent_div_4__svg_path_4_Template, 1, 5, "path", 23);
    ɵɵelementEnd();
    ɵɵtemplate(5, NzProgressComponent_div_4_ng_template_5_Template, 0, 0, "ng-template", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    const _r1 = ɵɵreference(1);
    ɵɵstyleProp("width", ctx_r3.nzWidth, "px")("height", ctx_r3.nzWidth, "px")("font-size", ctx_r3.nzWidth * 0.15 + 6, "px");
    ɵɵclassProp("ant-progress-circle-gradient", ctx_r3.isGradient);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r3.isGradient);
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r3.trailPathStyle);
    ɵɵattribute("stroke-width", ctx_r3.strokeWidth)("d", ctx_r3.pathString);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r3.progressCirclePath)("ngForTrackBy", ctx_r3.trackByFn);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r1);
  }
}
function stripPercentToNumber(percent) {
  return +percent.replace("%", "");
}
var sortGradient = (gradients) => {
  let tempArr = [];
  Object.keys(gradients).forEach((key) => {
    const value = gradients[key];
    const formatKey = stripPercentToNumber(key);
    if (!isNaN(formatKey)) {
      tempArr.push({
        key: formatKey,
        value
      });
    }
  });
  tempArr = tempArr.sort((a, b) => a.key - b.key);
  return tempArr;
};
var handleCircleGradient = (strokeColor) => sortGradient(strokeColor).map(({
  key,
  value
}) => ({
  offset: `${key}%`,
  color: value
}));
var handleLinearGradient = (strokeColor) => {
  const _a = strokeColor, {
    from = "#1890ff",
    to = "#1890ff",
    direction = "to right"
  } = _a, rest = __objRest(_a, [
    "from",
    "to",
    "direction"
  ]);
  if (Object.keys(rest).length !== 0) {
    const sortedGradients = sortGradient(rest).map(({
      key,
      value
    }) => `${value} ${key}%`).join(", ");
    return `linear-gradient(${direction}, ${sortedGradients})`;
  }
  return `linear-gradient(${direction}, ${from}, ${to})`;
};
var gradientIdSeed = 0;
var NZ_CONFIG_MODULE_NAME = "progress";
var statusIconNameMap = /* @__PURE__ */ new Map([["success", "check"], ["exception", "close"]]);
var statusColorMap = /* @__PURE__ */ new Map([["normal", "#108ee9"], ["exception", "#ff5500"], ["success", "#87d068"]]);
var defaultFormatter = (p) => `${p}%`;
var _NzProgressComponent = class _NzProgressComponent {
  get formatter() {
    return this.nzFormat || defaultFormatter;
  }
  get status() {
    return this.nzStatus || this.inferredStatus;
  }
  get strokeWidth() {
    return this.nzStrokeWidth || (this.nzType === "line" && this.nzSize !== "small" ? 8 : 6);
  }
  get isCircleStyle() {
    return this.nzType === "circle" || this.nzType === "dashboard";
  }
  constructor(cdr, nzConfigService, directionality) {
    this.cdr = cdr;
    this.nzConfigService = nzConfigService;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzShowInfo = true;
    this.nzWidth = 132;
    this.nzStrokeColor = void 0;
    this.nzSize = "default";
    this.nzPercent = 0;
    this.nzStrokeWidth = void 0;
    this.nzGapDegree = void 0;
    this.nzType = "line";
    this.nzGapPosition = "top";
    this.nzStrokeLinecap = "round";
    this.nzSteps = 0;
    this.steps = [];
    this.lineGradient = null;
    this.isGradient = false;
    this.isSteps = false;
    this.gradientId = gradientIdSeed++;
    this.progressCirclePath = [];
    this.trailPathStyle = null;
    this.dir = "ltr";
    this.trackByFn = (index) => `${index}`;
    this.cachedStatus = "normal";
    this.inferredStatus = "normal";
    this.destroy$ = new Subject();
  }
  ngOnChanges(changes) {
    const {
      nzSteps,
      nzGapPosition,
      nzStrokeLinecap,
      nzStrokeColor,
      nzGapDegree,
      nzType,
      nzStatus,
      nzPercent,
      nzSuccessPercent,
      nzStrokeWidth
    } = changes;
    if (nzStatus) {
      this.cachedStatus = this.nzStatus || this.cachedStatus;
    }
    if (nzPercent || nzSuccessPercent) {
      const fillAll = parseInt(this.nzPercent.toString(), 10) >= 100;
      if (fillAll) {
        if (isNotNil(this.nzSuccessPercent) && this.nzSuccessPercent >= 100 || this.nzSuccessPercent === void 0) {
          this.inferredStatus = "success";
        }
      } else {
        this.inferredStatus = this.cachedStatus;
      }
    }
    if (nzStatus || nzPercent || nzSuccessPercent || nzStrokeColor) {
      this.updateIcon();
    }
    if (nzStrokeColor) {
      this.setStrokeColor();
    }
    if (nzGapPosition || nzStrokeLinecap || nzGapDegree || nzType || nzPercent || nzStrokeColor || nzStrokeColor) {
      this.getCirclePaths();
    }
    if (nzPercent || nzSteps || nzStrokeWidth) {
      this.isSteps = this.nzSteps > 0;
      if (this.isSteps) {
        this.getSteps();
      }
    }
  }
  ngOnInit() {
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.updateIcon();
      this.setStrokeColor();
      this.getCirclePaths();
    });
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  updateIcon() {
    const ret = statusIconNameMap.get(this.status);
    this.icon = ret ? ret + (this.isCircleStyle ? "-o" : "-circle-fill") : "";
  }
  /**
   * Calculate step render configs.
   */
  getSteps() {
    const current = Math.floor(this.nzSteps * (this.nzPercent / 100));
    const stepWidth = this.nzSize === "small" ? 2 : 14;
    const steps = [];
    for (let i = 0; i < this.nzSteps; i++) {
      let color;
      if (i <= current - 1) {
        color = this.nzStrokeColor;
      }
      const stepStyle = {
        backgroundColor: `${color}`,
        width: `${stepWidth}px`,
        height: `${this.strokeWidth}px`
      };
      steps.push(stepStyle);
    }
    this.steps = steps;
  }
  /**
   * Calculate paths when the type is circle or dashboard.
   */
  getCirclePaths() {
    if (!this.isCircleStyle) {
      return;
    }
    const values = isNotNil(this.nzSuccessPercent) ? [this.nzSuccessPercent, this.nzPercent] : [this.nzPercent];
    const radius = 50 - this.strokeWidth / 2;
    const gapPosition = this.nzGapPosition || (this.nzType === "circle" ? "top" : "bottom");
    const len = Math.PI * 2 * radius;
    const gapDegree = this.nzGapDegree || (this.nzType === "circle" ? 0 : 75);
    let beginPositionX = 0;
    let beginPositionY = -radius;
    let endPositionX = 0;
    let endPositionY = radius * -2;
    switch (gapPosition) {
      case "left":
        beginPositionX = -radius;
        beginPositionY = 0;
        endPositionX = radius * 2;
        endPositionY = 0;
        break;
      case "right":
        beginPositionX = radius;
        beginPositionY = 0;
        endPositionX = radius * -2;
        endPositionY = 0;
        break;
      case "bottom":
        beginPositionY = radius;
        endPositionY = radius * 2;
        break;
      default:
    }
    this.pathString = `M 50,50 m ${beginPositionX},${beginPositionY}
       a ${radius},${radius} 0 1 1 ${endPositionX},${-endPositionY}
       a ${radius},${radius} 0 1 1 ${-endPositionX},${endPositionY}`;
    this.trailPathStyle = {
      strokeDasharray: `${len - gapDegree}px ${len}px`,
      strokeDashoffset: `-${gapDegree / 2}px`,
      transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s"
    };
    this.progressCirclePath = values.map((value, index) => {
      const isSuccessPercent = values.length === 2 && index === 0;
      return {
        stroke: this.isGradient && !isSuccessPercent ? `url(#gradient-${this.gradientId})` : null,
        strokePathStyle: {
          stroke: !this.isGradient ? isSuccessPercent ? statusColorMap.get("success") : this.nzStrokeColor : null,
          transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s",
          strokeDasharray: `${(value || 0) / 100 * (len - gapDegree)}px ${len}px`,
          strokeDashoffset: `-${gapDegree / 2}px`
        }
      };
    }).reverse();
  }
  setStrokeColor() {
    const color = this.nzStrokeColor;
    const isGradient = this.isGradient = !!color && typeof color !== "string";
    if (isGradient && !this.isCircleStyle) {
      this.lineGradient = handleLinearGradient(color);
    } else if (isGradient && this.isCircleStyle) {
      this.circleGradient = handleCircleGradient(this.nzStrokeColor);
    } else {
      this.lineGradient = null;
      this.circleGradient = [];
    }
  }
};
_NzProgressComponent.ɵfac = function NzProgressComponent_Factory(t) {
  return new (t || _NzProgressComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Directionality, 8));
};
_NzProgressComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzProgressComponent,
  selectors: [["nz-progress"]],
  inputs: {
    nzShowInfo: "nzShowInfo",
    nzWidth: "nzWidth",
    nzStrokeColor: "nzStrokeColor",
    nzSize: "nzSize",
    nzFormat: "nzFormat",
    nzSuccessPercent: "nzSuccessPercent",
    nzPercent: "nzPercent",
    nzStrokeWidth: "nzStrokeWidth",
    nzGapDegree: "nzGapDegree",
    nzStatus: "nzStatus",
    nzType: "nzType",
    nzGapPosition: "nzGapPosition",
    nzStrokeLinecap: "nzStrokeLinecap",
    nzSteps: "nzSteps"
  },
  exportAs: ["nzProgress"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 5,
  vars: 17,
  consts: [["progressInfoTemplate", ""], [3, "ngClass"], [4, "ngIf"], ["class", "ant-progress-inner", 3, "width", "height", "fontSize", "ant-progress-circle-gradient", 4, "ngIf"], ["class", "ant-progress-text", 4, "ngIf"], [1, "ant-progress-text"], [4, "ngIf", "ngIfElse"], ["formatTemplate", ""], ["nz-icon", "", 3, "nzType"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["class", "ant-progress-steps-outer", 4, "ngIf"], ["class", "ant-progress-outer", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "ant-progress-outer"], [1, "ant-progress-inner"], [1, "ant-progress-bg"], ["class", "ant-progress-success-bg", 3, "width", "border-radius", "height", 4, "ngIf"], [1, "ant-progress-success-bg"], [1, "ant-progress-steps-outer"], ["class", "ant-progress-steps-item", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "ant-progress-steps-item", 3, "ngStyle"], ["viewBox", "0 0 100 100", 1, "ant-progress-circle"], ["stroke", "#f3f3f3", "fill-opacity", "0", 1, "ant-progress-circle-trail", 3, "ngStyle"], ["class", "ant-progress-circle-path", "fill-opacity", "0", 3, "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["x1", "100%", "y1", "0%", "x2", "0%", "y2", "0%", 3, "id"], [4, "ngFor", "ngForOf"], ["fill-opacity", "0", 1, "ant-progress-circle-path", 3, "ngStyle"]],
  template: function NzProgressComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzProgressComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      ɵɵelementStart(2, "div", 1);
      ɵɵtemplate(3, NzProgressComponent_div_3_Template, 3, 2, "div", 2)(4, NzProgressComponent_div_4_Template, 6, 15, "div", 3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵclassProp("ant-progress-line", ctx.nzType === "line")("ant-progress-small", ctx.nzSize === "small")("ant-progress-default", ctx.nzSize === "default")("ant-progress-show-info", ctx.nzShowInfo)("ant-progress-circle", ctx.isCircleStyle)("ant-progress-steps", ctx.isSteps)("ant-progress-rtl", ctx.dir === "rtl");
      ɵɵproperty("ngClass", "ant-progress ant-progress-status-" + ctx.status);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.nzType === "line");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.isCircleStyle);
    }
  },
  dependencies: [NgIf, NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective, NgClass, NgTemplateOutlet, NgForOf, NgStyle],
  encapsulation: 2,
  changeDetection: 0
});
var NzProgressComponent = _NzProgressComponent;
__decorate([WithConfig()], NzProgressComponent.prototype, "nzShowInfo", void 0);
__decorate([WithConfig()], NzProgressComponent.prototype, "nzStrokeColor", void 0);
__decorate([WithConfig()], NzProgressComponent.prototype, "nzSize", void 0);
__decorate([InputNumber()], NzProgressComponent.prototype, "nzSuccessPercent", void 0);
__decorate([InputNumber()], NzProgressComponent.prototype, "nzPercent", void 0);
__decorate([WithConfig(), InputNumber()], NzProgressComponent.prototype, "nzStrokeWidth", void 0);
__decorate([WithConfig(), InputNumber()], NzProgressComponent.prototype, "nzGapDegree", void 0);
__decorate([WithConfig()], NzProgressComponent.prototype, "nzGapPosition", void 0);
__decorate([WithConfig()], NzProgressComponent.prototype, "nzStrokeLinecap", void 0);
__decorate([InputNumber()], NzProgressComponent.prototype, "nzSteps", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzProgressComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-progress",
      exportAs: "nzProgress",
      preserveWhitespaces: false,
      standalone: true,
      imports: [NgIf, NzIconModule, NzOutletModule, NgClass, NgTemplateOutlet, NgForOf, NgStyle],
      template: `
    <ng-template #progressInfoTemplate>
      <span class="ant-progress-text" *ngIf="nzShowInfo">
        <ng-container *ngIf="(status === 'exception' || status === 'success') && !nzFormat; else formatTemplate">
          <span nz-icon [nzType]="icon"></span>
        </ng-container>
        <ng-template #formatTemplate>
          <ng-container *nzStringTemplateOutlet="formatter; context: { $implicit: nzPercent }; let formatter">
            {{ formatter(nzPercent) }}
          </ng-container>
        </ng-template>
      </span>
    </ng-template>

    <div
      [ngClass]="'ant-progress ant-progress-status-' + status"
      [class.ant-progress-line]="nzType === 'line'"
      [class.ant-progress-small]="nzSize === 'small'"
      [class.ant-progress-default]="nzSize === 'default'"
      [class.ant-progress-show-info]="nzShowInfo"
      [class.ant-progress-circle]="isCircleStyle"
      [class.ant-progress-steps]="isSteps"
      [class.ant-progress-rtl]="dir === 'rtl'"
    >
      <!-- line progress -->
      <div *ngIf="nzType === 'line'">
        <!-- normal line style -->
        <ng-container *ngIf="!isSteps">
          <div class="ant-progress-outer" *ngIf="!isSteps">
            <div class="ant-progress-inner">
              <div
                class="ant-progress-bg"
                [style.width.%]="nzPercent"
                [style.border-radius]="nzStrokeLinecap === 'round' ? '100px' : '0'"
                [style.background]="!isGradient ? nzStrokeColor : null"
                [style.background-image]="isGradient ? lineGradient : null"
                [style.height.px]="strokeWidth"
              ></div>
              <div
                *ngIf="nzSuccessPercent || nzSuccessPercent === 0"
                class="ant-progress-success-bg"
                [style.width.%]="nzSuccessPercent"
                [style.border-radius]="nzStrokeLinecap === 'round' ? '100px' : '0'"
                [style.height.px]="strokeWidth"
              ></div>
            </div>
          </div>
          <ng-template [ngTemplateOutlet]="progressInfoTemplate"></ng-template>
        </ng-container>
        <!-- step style -->
        <div class="ant-progress-steps-outer" *ngIf="isSteps">
          <div *ngFor="let step of steps; let i = index" class="ant-progress-steps-item" [ngStyle]="step"></div>
          <ng-template [ngTemplateOutlet]="progressInfoTemplate"></ng-template>
        </div>
      </div>

      <!-- circle / dashboard progress -->
      <div
        [style.width.px]="this.nzWidth"
        [style.height.px]="this.nzWidth"
        [style.fontSize.px]="this.nzWidth * 0.15 + 6"
        class="ant-progress-inner"
        [class.ant-progress-circle-gradient]="isGradient"
        *ngIf="isCircleStyle"
      >
        <svg class="ant-progress-circle " viewBox="0 0 100 100">
          <defs *ngIf="isGradient">
            <linearGradient [id]="'gradient-' + gradientId" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop *ngFor="let i of circleGradient" [attr.offset]="i.offset" [attr.stop-color]="i.color"></stop>
            </linearGradient>
          </defs>
          <path
            class="ant-progress-circle-trail"
            stroke="#f3f3f3"
            fill-opacity="0"
            [attr.stroke-width]="strokeWidth"
            [attr.d]="pathString"
            [ngStyle]="trailPathStyle"
          ></path>
          <path
            *ngFor="let p of progressCirclePath; trackBy: trackByFn"
            class="ant-progress-circle-path"
            fill-opacity="0"
            [attr.d]="pathString"
            [attr.stroke-linecap]="nzStrokeLinecap"
            [attr.stroke]="p.stroke"
            [attr.stroke-width]="nzPercent ? strokeWidth : 0"
            [ngStyle]="p.strokePathStyle"
          ></path>
        </svg>
        <ng-template [ngTemplateOutlet]="progressInfoTemplate"></ng-template>
      </div>
    </div>
  `
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NzConfigService
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzShowInfo: [{
      type: Input
    }],
    nzWidth: [{
      type: Input
    }],
    nzStrokeColor: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzFormat: [{
      type: Input
    }],
    nzSuccessPercent: [{
      type: Input
    }],
    nzPercent: [{
      type: Input
    }],
    nzStrokeWidth: [{
      type: Input
    }],
    nzGapDegree: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzGapPosition: [{
      type: Input
    }],
    nzStrokeLinecap: [{
      type: Input
    }],
    nzSteps: [{
      type: Input
    }]
  });
})();
var _NzProgressModule = class _NzProgressModule {
};
_NzProgressModule.ɵfac = function NzProgressModule_Factory(t) {
  return new (t || _NzProgressModule)();
};
_NzProgressModule.ɵmod = ɵɵdefineNgModule({
  type: _NzProgressModule,
  imports: [NzProgressComponent],
  exports: [NzProgressComponent]
});
_NzProgressModule.ɵinj = ɵɵdefineInjector({
  imports: [NzProgressComponent]
});
var NzProgressModule = _NzProgressModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzProgressModule, [{
    type: NgModule,
    args: [{
      imports: [NzProgressComponent],
      exports: [NzProgressComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-upload.mjs
var _c02 = ["file"];
var _c1 = ["nz-upload-btn", ""];
var _c2 = ["*"];
function NzUploadListComponent_div_0_ng_template_2_div_1_ng_template_1_Template(rf, ctx) {
}
var _c3 = (a0) => ({
  $implicit: a0
});
function NzUploadListComponent_div_0_ng_template_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_2_div_1_ng_template_1_Template, 0, 0, "ng-template", 19);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext(2).$implicit;
    const _r5 = ɵɵreference(5);
    ɵɵclassProp("ant-upload-list-item-file", !file_r1.isUploading);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r5)("ngTemplateOutletContext", ɵɵpureFunction1(4, _c3, file_r1));
  }
}
function NzUploadListComponent_div_0_ng_template_2_a_2_img_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 22);
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("src", file_r1.thumbUrl || file_r1.url, ɵɵsanitizeUrl);
    ɵɵattribute("alt", file_r1.name);
  }
}
function NzUploadListComponent_div_0_ng_template_2_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 20);
    ɵɵlistener("click", function NzUploadListComponent_div_0_ng_template_2_a_2_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r29);
      const file_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r27 = ɵɵnextContext();
      return ɵɵresetView(ctx_r27.handlePreview(file_r1, $event));
    });
    ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_2_a_2_img_1_Template, 1, 2, "img", 21);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r22 = ɵɵreference(5);
    const file_r1 = ɵɵnextContext().$implicit;
    ɵɵclassProp("ant-upload-list-item-file", !file_r1.isImageUrl);
    ɵɵproperty("href", file_r1.url || file_r1.thumbUrl, ɵɵsanitizeUrl);
    ɵɵadvance();
    ɵɵproperty("ngIf", file_r1.isImageUrl)("ngIfElse", _r22);
  }
}
function NzUploadListComponent_div_0_ng_template_2_div_3_ng_template_1_Template(rf, ctx) {
}
function NzUploadListComponent_div_0_ng_template_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 23);
    ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_2_div_3_ng_template_1_Template, 0, 0, "ng-template", 19);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext(2).$implicit;
    const _r5 = ɵɵreference(5);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r5)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, file_r1));
  }
}
function NzUploadListComponent_div_0_ng_template_2_ng_template_4_ng_template_0_Template(rf, ctx) {
}
function NzUploadListComponent_div_0_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_2_ng_template_4_ng_template_0_Template, 0, 0, "ng-template", 19);
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext(2).$implicit;
    const _r5 = ɵɵreference(5);
    ɵɵproperty("ngTemplateOutlet", _r5)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, file_r1));
  }
}
function NzUploadListComponent_div_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 13);
    ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_2_div_1_Template, 2, 6, "div", 14)(2, NzUploadListComponent_div_0_ng_template_2_a_2_Template, 2, 5, "a", 15)(3, NzUploadListComponent_div_0_ng_template_2_div_3_Template, 2, 4, "div", 16);
    ɵɵelementContainerEnd();
    ɵɵtemplate(4, NzUploadListComponent_div_0_ng_template_2_ng_template_4_Template, 1, 4, "ng-template", null, 17, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngSwitch", file_r1.iconType);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "uploading");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "thumbnail");
  }
}
function NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 29);
    ɵɵelementContainerEnd();
  }
}
function NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_2_ng_container_1_Template, 2, 0, "ng-container", 24);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const file_r36 = ɵɵnextContext(2).$implicit;
    const _r41 = ɵɵreference(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", file_r36.isUploading)("ngIfElse", _r41);
  }
}
function NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r47 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r47.locale.uploading, " ");
  }
}
function NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 24);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const file_r36 = ɵɵnextContext(2).$implicit;
    const _r41 = ɵɵreference(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", file_r36.isUploading)("ngIfElse", _r41);
  }
}
function NzUploadListComponent_div_0_ng_template_4_ng_container_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 30);
  }
  if (rf & 2) {
    const file_r36 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("nzType", file_r36.isUploading ? "loading" : "paper-clip");
  }
}
function NzUploadListComponent_div_0_ng_template_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0)(1, 13);
    ɵɵtemplate(2, NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_2_Template, 2, 2, "ng-container", 27)(3, NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_3_Template, 2, 2, "ng-container", 27)(4, NzUploadListComponent_div_0_ng_template_4_ng_container_0_span_4_Template, 1, 1, "span", 28);
    ɵɵelementContainerEnd()();
  }
  if (rf & 2) {
    const ctx_r37 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngSwitch", ctx_r37.listType);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "picture");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "picture-card");
  }
}
function NzUploadListComponent_div_0_ng_template_4_ng_template_1_Template(rf, ctx) {
}
function NzUploadListComponent_div_0_ng_template_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 31);
  }
  if (rf & 2) {
    const file_r36 = ɵɵnextContext().$implicit;
    ɵɵproperty("nzType", file_r36.isImageUrl ? "picture" : "file");
  }
}
function NzUploadListComponent_div_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_4_ng_container_0_Template, 5, 3, "ng-container", 24)(1, NzUploadListComponent_div_0_ng_template_4_ng_template_1_Template, 0, 0, "ng-template", 19, 25, ɵɵtemplateRefExtractor)(3, NzUploadListComponent_div_0_ng_template_4_ng_template_3_Template, 1, 1, "ng-template", null, 26, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const file_r36 = ctx.$implicit;
    const _r39 = ɵɵreference(2);
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", !ctx_r4.iconRender)("ngIfElse", _r39);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r4.iconRender)("ngTemplateOutletContext", ɵɵpureFunction1(4, _c3, file_r36));
  }
}
function NzUploadListComponent_div_0_ng_template_6_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 33);
    ɵɵlistener("click", function NzUploadListComponent_div_0_ng_template_6_button_0_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r54);
      const file_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r52 = ɵɵnextContext();
      return ɵɵresetView(ctx_r52.handleRemove(file_r1, $event));
    });
    ɵɵelement(1, "span", 34);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r51 = ɵɵnextContext(3);
    ɵɵattribute("title", ctx_r51.locale.removeFile);
  }
}
function NzUploadListComponent_div_0_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_6_button_0_Template, 2, 1, "button", 32);
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r6.icons.showRemoveIcon);
  }
}
function NzUploadListComponent_div_0_ng_template_8_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 33);
    ɵɵlistener("click", function NzUploadListComponent_div_0_ng_template_8_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r58);
      const file_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r56 = ɵɵnextContext();
      return ɵɵresetView(ctx_r56.handleDownload(file_r1));
    });
    ɵɵelement(1, "span", 35);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r55 = ɵɵnextContext(3);
    ɵɵattribute("title", ctx_r55.locale.downloadFile);
  }
}
function NzUploadListComponent_div_0_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_8_button_0_Template, 2, 1, "button", 32);
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngIf", file_r1.showDownload);
  }
}
function NzUploadListComponent_div_0_ng_template_10_span_0_ng_template_1_Template(rf, ctx) {
}
function NzUploadListComponent_div_0_ng_template_10_span_0_ng_template_2_Template(rf, ctx) {
}
function NzUploadListComponent_div_0_ng_template_10_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, NzUploadListComponent_div_0_ng_template_10_span_0_ng_template_1_Template, 0, 0, "ng-template", 10)(2, NzUploadListComponent_div_0_ng_template_10_span_0_ng_template_2_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const _r9 = ɵɵreference(9);
    const _r7 = ɵɵreference(7);
    const ctx_r60 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("ant-upload-list-item-card-actions ", ctx_r60.listType === "picture" ? "picture" : "", "");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r9);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r7);
  }
}
function NzUploadListComponent_div_0_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_10_span_0_Template, 3, 5, "span", 36);
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r10.listType !== "picture-card");
  }
}
function NzUploadListComponent_div_0_ng_template_12_a_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 39);
    ɵɵlistener("click", function NzUploadListComponent_div_0_ng_template_12_a_0_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r68);
      const file_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r66 = ɵɵnextContext();
      return ɵɵresetView(ctx_r66.handlePreview(file_r1, $event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("href", file_r1.url, ɵɵsanitizeUrl);
    ɵɵattribute("title", file_r1.name)("download", file_r1.linkProps && file_r1.linkProps.download);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", file_r1.name, " ");
  }
}
function NzUploadListComponent_div_0_ng_template_12_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 40);
    ɵɵlistener("click", function NzUploadListComponent_div_0_ng_template_12_span_1_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r72);
      const file_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r70 = ɵɵnextContext();
      return ɵɵresetView(ctx_r70.handlePreview(file_r1, $event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext(2).$implicit;
    ɵɵattribute("title", file_r1.name);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", file_r1.name, " ");
  }
}
function NzUploadListComponent_div_0_ng_template_12_ng_template_2_Template(rf, ctx) {
}
function NzUploadListComponent_div_0_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_div_0_ng_template_12_a_0_Template, 2, 4, "a", 37)(1, NzUploadListComponent_div_0_ng_template_12_span_1_Template, 2, 2, "span", 38)(2, NzUploadListComponent_div_0_ng_template_12_ng_template_2_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext().$implicit;
    const _r11 = ɵɵreference(11);
    ɵɵproperty("ngIf", file_r1.url);
    ɵɵadvance();
    ɵɵproperty("ngIf", !file_r1.url);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r11);
  }
}
function NzUploadListComponent_div_0_ng_template_16_Template(rf, ctx) {
}
function NzUploadListComponent_div_0_ng_template_17_Template(rf, ctx) {
}
var _c4 = () => ({
  opacity: 0.5,
  "pointer-events": "none"
});
function NzUploadListComponent_div_0_span_18_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 44);
    ɵɵlistener("click", function NzUploadListComponent_div_0_span_18_a_1_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r80);
      const file_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r78 = ɵɵnextContext();
      return ɵɵresetView(ctx_r78.handlePreview(file_r1, $event));
    });
    ɵɵelement(1, "span", 45);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext(2).$implicit;
    const ctx_r75 = ɵɵnextContext();
    ɵɵproperty("href", file_r1.url || file_r1.thumbUrl, ɵɵsanitizeUrl)("ngStyle", !(file_r1.url || file_r1.thumbUrl) ? ɵɵpureFunction0(3, _c4) : null);
    ɵɵattribute("title", ctx_r75.locale.previewFile);
  }
}
function NzUploadListComponent_div_0_span_18_ng_container_2_ng_template_1_Template(rf, ctx) {
}
function NzUploadListComponent_div_0_span_18_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzUploadListComponent_div_0_span_18_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const _r9 = ɵɵreference(9);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r9);
  }
}
function NzUploadListComponent_div_0_span_18_ng_template_3_Template(rf, ctx) {
}
function NzUploadListComponent_div_0_span_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 41);
    ɵɵtemplate(1, NzUploadListComponent_div_0_span_18_a_1_Template, 2, 4, "a", 42)(2, NzUploadListComponent_div_0_span_18_ng_container_2_Template, 2, 1, "ng-container", 43)(3, NzUploadListComponent_div_0_span_18_ng_template_3_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext().$implicit;
    const _r7 = ɵɵreference(7);
    const ctx_r16 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r16.icons.showPreviewIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", file_r1.status === "done");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r7);
  }
}
function NzUploadListComponent_div_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 46);
    ɵɵelement(1, "nz-progress", 47);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("nzPercent", file_r1.percent)("nzShowInfo", false)("nzStrokeWidth", 2);
  }
}
function NzUploadListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div", 1);
    ɵɵtemplate(2, NzUploadListComponent_div_0_ng_template_2_Template, 6, 3, "ng-template", null, 2, ɵɵtemplateRefExtractor)(4, NzUploadListComponent_div_0_ng_template_4_Template, 5, 6, "ng-template", null, 3, ɵɵtemplateRefExtractor)(6, NzUploadListComponent_div_0_ng_template_6_Template, 1, 1, "ng-template", null, 4, ɵɵtemplateRefExtractor)(8, NzUploadListComponent_div_0_ng_template_8_Template, 1, 1, "ng-template", null, 5, ɵɵtemplateRefExtractor)(10, NzUploadListComponent_div_0_ng_template_10_Template, 1, 1, "ng-template", null, 6, ɵɵtemplateRefExtractor)(12, NzUploadListComponent_div_0_ng_template_12_Template, 3, 3, "ng-template", null, 7, ɵɵtemplateRefExtractor);
    ɵɵelementStart(14, "div", 8)(15, "span", 9);
    ɵɵtemplate(16, NzUploadListComponent_div_0_ng_template_16_Template, 0, 0, "ng-template", 10)(17, NzUploadListComponent_div_0_ng_template_17_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd()();
    ɵɵtemplate(18, NzUploadListComponent_div_0_span_18_Template, 4, 3, "span", 11)(19, NzUploadListComponent_div_0_div_19_Template, 2, 3, "div", 12);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const file_r1 = ctx.$implicit;
    const _r3 = ɵɵreference(3);
    const _r13 = ɵɵreference(13);
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("ant-upload-list-", ctx_r0.listType, "-container");
    ɵɵadvance();
    ɵɵclassMapInterpolate2("ant-upload-list-item ant-upload-list-item-", file_r1.status, " ant-upload-list-item-list-type-", ctx_r0.listType, "");
    ɵɵproperty("@itemState", void 0)("nzTooltipTitle", file_r1.status === "error" ? file_r1.message : null);
    ɵɵattribute("data-key", file_r1.key);
    ɵɵadvance(15);
    ɵɵproperty("ngTemplateOutlet", _r3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r13);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.listType === "picture-card" && !file_r1.isUploading);
    ɵɵadvance();
    ɵɵproperty("ngIf", file_r1.isUploading);
  }
}
var _c5 = ["uploadComp"];
var _c6 = ["listComp"];
var _c7 = () => [];
function NzUploadComponent_ng_template_0_nz_upload_list_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-upload-list", 8, 9);
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵstyleProp("display", ctx_r11.nzShowUploadList ? "" : "none");
    ɵɵproperty("locale", ctx_r11.locale)("listType", ctx_r11.nzListType)("items", ctx_r11.nzFileList || ɵɵpureFunction0(13, _c7))("icons", ctx_r11.nzShowUploadList)("iconRender", ctx_r11.nzIconRender)("previewFile", ctx_r11.nzPreviewFile)("previewIsImage", ctx_r11.nzPreviewIsImage)("onPreview", ctx_r11.nzPreview)("onRemove", ctx_r11.onRemove)("onDownload", ctx_r11.nzDownload)("dir", ctx_r11.dir);
  }
}
function NzUploadComponent_ng_template_0_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NzUploadComponent_ng_template_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzUploadComponent_ng_template_0_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r12.nzFileListRender)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, ctx_r12.nzFileList));
  }
}
function NzUploadComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadComponent_ng_template_0_nz_upload_list_0_Template, 2, 14, "nz-upload-list", 6)(1, NzUploadComponent_ng_template_0_ng_container_1_Template, 2, 4, "ng-container", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.locale && !ctx_r0.nzFileListRender);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.nzFileListRender);
  }
}
function NzUploadComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function NzUploadComponent_ng_template_4_ng_template_3_Template(rf, ctx) {
}
function NzUploadComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11)(1, "div", 12, 13);
    ɵɵtemplate(3, NzUploadComponent_ng_template_4_ng_template_3_Template, 0, 0, "ng-template", 14);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    const _r3 = ɵɵreference(3);
    ɵɵstyleProp("display", ctx_r4.nzShowButton ? "" : "none");
    ɵɵproperty("ngClass", ctx_r4.classList);
    ɵɵadvance();
    ɵɵproperty("options", ctx_r4._btnOptions);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r3);
  }
}
function NzUploadComponent_ng_container_6_ng_template_5_Template(rf, ctx) {
}
function NzUploadComponent_ng_container_6_ng_template_6_Template(rf, ctx) {
}
function NzUploadComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 15);
    ɵɵlistener("drop", function NzUploadComponent_ng_container_6_Template_div_drop_1_listener($event) {
      ɵɵrestoreView(_r21);
      const ctx_r20 = ɵɵnextContext();
      return ɵɵresetView(ctx_r20.fileDrop($event));
    })("dragover", function NzUploadComponent_ng_container_6_Template_div_dragover_1_listener($event) {
      ɵɵrestoreView(_r21);
      const ctx_r22 = ɵɵnextContext();
      return ɵɵresetView(ctx_r22.fileDrop($event));
    })("dragleave", function NzUploadComponent_ng_container_6_Template_div_dragleave_1_listener($event) {
      ɵɵrestoreView(_r21);
      const ctx_r23 = ɵɵnextContext();
      return ɵɵresetView(ctx_r23.fileDrop($event));
    });
    ɵɵelementStart(2, "div", 16, 13)(4, "div", 17);
    ɵɵtemplate(5, NzUploadComponent_ng_container_6_ng_template_5_Template, 0, 0, "ng-template", 14);
    ɵɵelementEnd()()();
    ɵɵtemplate(6, NzUploadComponent_ng_container_6_ng_template_6_Template, 0, 0, "ng-template", 14);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    const _r3 = ɵɵreference(3);
    const _r1 = ɵɵreference(1);
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r6.classList);
    ɵɵadvance();
    ɵɵproperty("options", ctx_r6._btnOptions);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", _r3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r1);
  }
}
function NzUploadComponent_ng_template_7_ng_container_0_ng_template_1_Template(rf, ctx) {
}
function NzUploadComponent_ng_template_7_ng_container_0_ng_template_2_Template(rf, ctx) {
}
function NzUploadComponent_ng_template_7_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzUploadComponent_ng_template_7_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 14)(2, NzUploadComponent_ng_template_7_ng_container_0_ng_template_2_Template, 0, 0, "ng-template", 14);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const _r1 = ɵɵreference(1);
    const _r5 = ɵɵreference(5);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r5);
  }
}
function NzUploadComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadComponent_ng_template_7_ng_container_0_Template, 3, 2, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    const _r10 = ɵɵreference(10);
    ɵɵproperty("ngIf", ctx_r7.nzListType === "picture-card")("ngIfElse", _r10);
  }
}
function NzUploadComponent_ng_template_9_ng_template_0_Template(rf, ctx) {
}
function NzUploadComponent_ng_template_9_ng_template_1_Template(rf, ctx) {
}
function NzUploadComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadComponent_ng_template_9_ng_template_0_Template, 0, 0, "ng-template", 14)(1, NzUploadComponent_ng_template_9_ng_template_1_Template, 0, 0, "ng-template", 14);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r5 = ɵɵreference(5);
    const _r1 = ɵɵreference(1);
    ɵɵproperty("ngTemplateOutlet", _r5);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r1);
  }
}
var _NzUploadBtnComponent = class _NzUploadBtnComponent {
  onClick() {
    if (this.options.disabled || !this.options.openFileDialogOnClick) {
      return;
    }
    this.file.nativeElement.click();
  }
  // skip safari bug
  onFileDrop(e) {
    if (this.options.disabled || e.type === "dragover") {
      e.preventDefault();
      return;
    }
    if (this.options.directory) {
      this.traverseFileTree(e.dataTransfer.items);
    } else {
      const files = Array.prototype.slice.call(e.dataTransfer.files).filter((file) => this.attrAccept(file, this.options.accept));
      if (files.length) {
        this.uploadFiles(files);
      }
    }
    e.preventDefault();
  }
  onChange(e) {
    if (this.options.disabled) {
      return;
    }
    const hie = e.target;
    this.uploadFiles(hie.files);
    hie.value = "";
  }
  traverseFileTree(files) {
    const _traverseFileTree = (item, path) => {
      if (item.isFile) {
        item.file((file) => {
          if (this.attrAccept(file, this.options.accept)) {
            this.uploadFiles([file]);
          }
        });
      } else if (item.isDirectory) {
        const dirReader = item.createReader();
        dirReader.readEntries((entries) => {
          for (const entrieItem of entries) {
            _traverseFileTree(entrieItem, `${path}${item.name}/`);
          }
        });
      }
    };
    for (const file of files) {
      _traverseFileTree(file.webkitGetAsEntry(), "");
    }
  }
  attrAccept(file, acceptedFiles) {
    if (file && acceptedFiles) {
      const acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(",");
      const fileName = `${file.name}`;
      const mimeType = `${file.type}`;
      const baseMimeType = mimeType.replace(/\/.*$/, "");
      return acceptedFilesArray.some((type) => {
        const validType = type.trim();
        if (validType.charAt(0) === ".") {
          return fileName.toLowerCase().indexOf(validType.toLowerCase(), fileName.toLowerCase().length - validType.toLowerCase().length) !== -1;
        } else if (/\/\*$/.test(validType)) {
          return baseMimeType === validType.replace(/\/.*$/, "");
        }
        return mimeType === validType;
      });
    }
    return true;
  }
  attachUid(file) {
    if (!file.uid) {
      file.uid = Math.random().toString(36).substring(2);
    }
    return file;
  }
  uploadFiles(fileList) {
    let filters$ = of(Array.prototype.slice.call(fileList));
    if (this.options.filters) {
      this.options.filters.forEach((f) => {
        filters$ = filters$.pipe(switchMap((list) => {
          const fnRes = f.fn(list);
          return fnRes instanceof Observable ? fnRes : of(fnRes);
        }));
      });
    }
    filters$.subscribe((list) => {
      list.forEach((file) => {
        this.attachUid(file);
        this.upload(file, list);
      });
    }, (e) => {
      warn(`Unhandled upload filter error`, e);
    });
  }
  upload(file, fileList) {
    if (!this.options.beforeUpload) {
      return this.post(file);
    }
    const before = this.options.beforeUpload(file, fileList);
    if (before instanceof Observable) {
      before.subscribe((processedFile) => {
        const processedFileType = Object.prototype.toString.call(processedFile);
        if (processedFileType === "[object File]" || processedFileType === "[object Blob]") {
          this.attachUid(processedFile);
          this.post(processedFile);
        } else if (typeof processedFile === "boolean" && processedFile !== false) {
          this.post(file);
        }
      }, (e) => {
        warn(`Unhandled upload beforeUpload error`, e);
      });
    } else if (before !== false) {
      return this.post(file);
    }
  }
  post(file) {
    if (this.destroy) {
      return;
    }
    let process$ = of(file);
    let transformedFile;
    const opt = this.options;
    const {
      uid
    } = file;
    const {
      action,
      data,
      headers,
      transformFile
    } = opt;
    const args = {
      action: typeof action === "string" ? action : "",
      name: opt.name,
      headers,
      file,
      postFile: file,
      data,
      withCredentials: opt.withCredentials,
      onProgress: opt.onProgress ? (e) => {
        opt.onProgress(e, file);
      } : void 0,
      onSuccess: (ret, xhr) => {
        this.clean(uid);
        opt.onSuccess(ret, file, xhr);
      },
      onError: (xhr) => {
        this.clean(uid);
        opt.onError(xhr, file);
      }
    };
    if (typeof action === "function") {
      const actionResult = action(file);
      if (actionResult instanceof Observable) {
        process$ = process$.pipe(switchMap(() => actionResult), map((res) => {
          args.action = res;
          return file;
        }));
      } else {
        args.action = actionResult;
      }
    }
    if (typeof transformFile === "function") {
      const transformResult = transformFile(file);
      process$ = process$.pipe(switchMap(() => transformResult instanceof Observable ? transformResult : of(transformResult)), tap((newFile) => transformedFile = newFile));
    }
    if (typeof data === "function") {
      const dataResult = data(file);
      if (dataResult instanceof Observable) {
        process$ = process$.pipe(switchMap(() => dataResult), map((res) => {
          args.data = res;
          return transformedFile ?? file;
        }));
      } else {
        args.data = dataResult;
      }
    }
    if (typeof headers === "function") {
      const headersResult = headers(file);
      if (headersResult instanceof Observable) {
        process$ = process$.pipe(switchMap(() => headersResult), map((res) => {
          args.headers = res;
          return transformedFile ?? file;
        }));
      } else {
        args.headers = headersResult;
      }
    }
    process$.subscribe((newFile) => {
      args.postFile = newFile;
      const req$ = (opt.customRequest || this.xhr).call(this, args);
      if (!(req$ instanceof Subscription)) {
        warn(`Must return Subscription type in '[nzCustomRequest]' property`);
      }
      this.reqs[uid] = req$;
      opt.onStart(file);
    });
  }
  xhr(args) {
    const formData = new FormData();
    if (args.data) {
      Object.keys(args.data).map((key) => {
        formData.append(key, args.data[key]);
      });
    }
    formData.append(args.name, args.postFile);
    if (!args.headers) {
      args.headers = {};
    }
    if (args.headers["X-Requested-With"] !== null) {
      args.headers["X-Requested-With"] = `XMLHttpRequest`;
    } else {
      delete args.headers["X-Requested-With"];
    }
    const req = new HttpRequest("POST", args.action, formData, {
      reportProgress: true,
      withCredentials: args.withCredentials,
      headers: new HttpHeaders(args.headers)
    });
    return this.http.request(req).subscribe((event) => {
      if (event.type === HttpEventType.UploadProgress) {
        if (event.total > 0) {
          event.percent = event.loaded / event.total * 100;
        }
        args.onProgress(event, args.file);
      } else if (event instanceof HttpResponse) {
        args.onSuccess(event.body, args.file, event);
      }
    }, (err) => {
      this.abort(args.file);
      args.onError(err, args.file);
    });
  }
  clean(uid) {
    const req$ = this.reqs[uid];
    if (req$ instanceof Subscription) {
      req$.unsubscribe();
    }
    delete this.reqs[uid];
  }
  abort(file) {
    if (file) {
      this.clean(file && file.uid);
    } else {
      Object.keys(this.reqs).forEach((uid) => this.clean(uid));
    }
  }
  constructor(ngZone, http, elementRef) {
    this.ngZone = ngZone;
    this.http = http;
    this.elementRef = elementRef;
    this.reqs = {};
    this.destroy = false;
    this.destroy$ = new Subject();
    if (!http) {
      throw new Error(`Not found 'HttpClient', You can import 'HttpClientModule' in your root module.`);
    }
  }
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.elementRef.nativeElement, "click").pipe(takeUntil(this.destroy$)).subscribe(() => this.onClick());
      fromEvent(this.elementRef.nativeElement, "keydown").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        if (this.options.disabled) {
          return;
        }
        if (event.key === "Enter" || event.keyCode === ENTER) {
          this.onClick();
        }
      });
    });
  }
  ngOnDestroy() {
    this.destroy = true;
    this.destroy$.next();
    this.abort();
  }
};
_NzUploadBtnComponent.ɵfac = function NzUploadBtnComponent_Factory(t) {
  return new (t || _NzUploadBtnComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(HttpClient, 8), ɵɵdirectiveInject(ElementRef));
};
_NzUploadBtnComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzUploadBtnComponent,
  selectors: [["", "nz-upload-btn", ""]],
  viewQuery: function NzUploadBtnComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c02, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.file = _t.first);
    }
  },
  hostAttrs: [1, "ant-upload"],
  hostVars: 4,
  hostBindings: function NzUploadBtnComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("drop", function NzUploadBtnComponent_drop_HostBindingHandler($event) {
        return ctx.onFileDrop($event);
      })("dragover", function NzUploadBtnComponent_dragover_HostBindingHandler($event) {
        return ctx.onFileDrop($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("tabindex", "0")("role", "button");
      ɵɵclassProp("ant-upload-disabled", ctx.options.disabled);
    }
  },
  inputs: {
    options: "options"
  },
  exportAs: ["nzUploadBtn"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  attrs: _c1,
  ngContentSelectors: _c2,
  decls: 3,
  vars: 4,
  consts: [["type", "file", 2, "display", "none", 3, "multiple", "change"], ["file", ""]],
  template: function NzUploadBtnComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "input", 0, 1);
      ɵɵlistener("change", function NzUploadBtnComponent_Template_input_change_0_listener($event) {
        return ctx.onChange($event);
      });
      ɵɵelementEnd();
      ɵɵprojection(2);
    }
    if (rf & 2) {
      ɵɵproperty("multiple", ctx.options.multiple);
      ɵɵattribute("accept", ctx.options.accept)("directory", ctx.options.directory ? "directory" : null)("webkitdirectory", ctx.options.directory ? "webkitdirectory" : null);
    }
  },
  encapsulation: 2
});
var NzUploadBtnComponent = _NzUploadBtnComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzUploadBtnComponent, [{
    type: Component,
    args: [{
      selector: "[nz-upload-btn]",
      exportAs: "nzUploadBtn",
      host: {
        class: "ant-upload",
        "[attr.tabindex]": '"0"',
        "[attr.role]": '"button"',
        "[class.ant-upload-disabled]": "options.disabled",
        "(drop)": "onFileDrop($event)",
        "(dragover)": "onFileDrop($event)"
      },
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      template: `<input
  type="file"
  #file
  (change)="onChange($event)"
  [attr.accept]="options.accept"
  [attr.directory]="options.directory ? 'directory' : null"
  [attr.webkitdirectory]="options.directory ? 'webkitdirectory' : null"
  [multiple]="options.multiple"
  style="display: none"
/>
<ng-content></ng-content>
`
    }]
  }], () => [{
    type: NgZone
  }, {
    type: HttpClient,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ElementRef
  }], {
    file: [{
      type: ViewChild,
      args: ["file", {
        static: true
      }]
    }],
    options: [{
      type: Input
    }]
  });
})();
var isImageFileType = (type) => !!type && type.indexOf("image/") === 0;
var MEASURE_SIZE = 200;
var _NzUploadListComponent = class _NzUploadListComponent {
  get showPic() {
    return this.listType === "picture" || this.listType === "picture-card";
  }
  set items(list) {
    this.list = list;
  }
  genErr(file) {
    if (file.response && typeof file.response === "string") {
      return file.response;
    }
    return file.error && file.error.statusText || this.locale.uploadError;
  }
  extname(url) {
    const temp = url.split("/");
    const filename = temp[temp.length - 1];
    const filenameWithoutSuffix = filename.split(/#|\?/)[0];
    return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [""])[0];
  }
  isImageUrl(file) {
    if (isImageFileType(file.type)) {
      return true;
    }
    const url = file.thumbUrl || file.url || "";
    if (!url) {
      return false;
    }
    const extension = this.extname(url);
    if (/^data:image\//.test(url) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg)$/i.test(extension)) {
      return true;
    } else if (/^data:/.test(url)) {
      return false;
    } else if (extension) {
      return false;
    }
    return true;
  }
  getIconType(file) {
    if (!this.showPic) {
      return "";
    }
    if (file.isUploading || !file.thumbUrl && !file.url) {
      return "uploading";
    } else {
      return "thumbnail";
    }
  }
  previewImage(file) {
    if (!isImageFileType(file.type) || !this.platform.isBrowser) {
      return of("");
    }
    const canvas = this.doc.createElement("canvas");
    canvas.width = MEASURE_SIZE;
    canvas.height = MEASURE_SIZE;
    canvas.style.cssText = `position: fixed; left: 0; top: 0; width: ${MEASURE_SIZE}px; height: ${MEASURE_SIZE}px; z-index: 9999; display: none;`;
    this.doc.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);
    img.src = objectUrl;
    return fromEvent(img, "load").pipe(map(() => {
      const {
        width,
        height
      } = img;
      let drawWidth = MEASURE_SIZE;
      let drawHeight = MEASURE_SIZE;
      let offsetX = 0;
      let offsetY = 0;
      if (width < height) {
        drawHeight = height * (MEASURE_SIZE / width);
        offsetY = -(drawHeight - drawWidth) / 2;
      } else {
        drawWidth = width * (MEASURE_SIZE / height);
        offsetX = -(drawWidth - drawHeight) / 2;
      }
      try {
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      } catch {
      }
      const dataURL = canvas.toDataURL();
      this.doc.body.removeChild(canvas);
      URL.revokeObjectURL(objectUrl);
      return dataURL;
    }));
  }
  genThumb() {
    if (!this.platform.isBrowser) {
      return;
    }
    const win = window;
    if (!this.showPic || typeof document === "undefined" || typeof win === "undefined" || !win.FileReader || !win.File) {
      return;
    }
    this.list.filter((file) => file.originFileObj instanceof File && file.thumbUrl === void 0).forEach((file) => {
      file.thumbUrl = "";
      const dataUrl$ = (this.previewFile ? this.previewFile(file) : this.previewImage(file.originFileObj)).pipe(takeUntil(this.destroy$));
      this.ngZone.runOutsideAngular(() => {
        dataUrl$.subscribe((dataUrl) => {
          this.ngZone.run(() => {
            file.thumbUrl = dataUrl;
            this.detectChanges();
          });
        });
      });
    });
  }
  showDownload(file) {
    return !!(this.icons.showDownloadIcon && file.status === "done");
  }
  fixData() {
    this.list.forEach((file) => {
      file.isUploading = file.status === "uploading";
      file.message = this.genErr(file);
      file.linkProps = typeof file.linkProps === "string" ? JSON.parse(file.linkProps) : file.linkProps;
      file.isImageUrl = this.previewIsImage ? this.previewIsImage(file) : this.isImageUrl(file);
      file.iconType = this.getIconType(file);
      file.showDownload = this.showDownload(file);
    });
  }
  handlePreview(file, e) {
    if (!this.onPreview) {
      return;
    }
    e.preventDefault();
    return this.onPreview(file);
  }
  handleRemove(file, e) {
    e.preventDefault();
    if (this.onRemove) {
      this.onRemove(file);
    }
    return;
  }
  handleDownload(file) {
    if (typeof this.onDownload === "function") {
      this.onDownload(file);
    } else if (file.url) {
      window.open(file.url);
    }
  }
  // #endregion
  constructor(cdr, doc, ngZone, platform) {
    this.cdr = cdr;
    this.doc = doc;
    this.ngZone = ngZone;
    this.platform = platform;
    this.list = [];
    this.locale = {};
    this.iconRender = null;
    this.dir = "ltr";
    this.destroy$ = new Subject();
  }
  detectChanges() {
    this.fixData();
    this.cdr.detectChanges();
  }
  ngOnChanges() {
    this.fixData();
    this.genThumb();
  }
  ngOnDestroy() {
    this.destroy$.next();
  }
};
_NzUploadListComponent.ɵfac = function NzUploadListComponent_Factory(t) {
  return new (t || _NzUploadListComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform));
};
_NzUploadListComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzUploadListComponent,
  selectors: [["nz-upload-list"]],
  hostAttrs: [1, "ant-upload-list"],
  hostVars: 8,
  hostBindings: function NzUploadListComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-upload-list-rtl", ctx.dir === "rtl")("ant-upload-list-text", ctx.listType === "text")("ant-upload-list-picture", ctx.listType === "picture")("ant-upload-list-picture-card", ctx.listType === "picture-card");
    }
  },
  inputs: {
    locale: "locale",
    listType: "listType",
    items: "items",
    icons: "icons",
    onPreview: "onPreview",
    onRemove: "onRemove",
    onDownload: "onDownload",
    previewFile: "previewFile",
    previewIsImage: "previewIsImage",
    iconRender: "iconRender",
    dir: "dir"
  },
  exportAs: ["nzUploadList"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 1,
  vars: 1,
  consts: [[3, "class", 4, "ngFor", "ngForOf"], ["nz-tooltip", "", 3, "nzTooltipTitle"], ["icon", ""], ["iconNode", ""], ["removeIcon", ""], ["downloadIcon", ""], ["downloadOrDelete", ""], ["preview", ""], [1, "ant-upload-list-item-info"], [1, "ant-upload-span"], [3, "ngTemplateOutlet"], ["class", "ant-upload-list-item-actions", 4, "ngIf"], ["class", "ant-upload-list-item-progress", 4, "ngIf"], [3, "ngSwitch"], ["class", "ant-upload-list-item-thumbnail", 3, "ant-upload-list-item-file", 4, "ngSwitchCase"], ["class", "ant-upload-list-item-thumbnail", "target", "_blank", "rel", "noopener noreferrer", 3, "ant-upload-list-item-file", "href", "click", 4, "ngSwitchCase"], ["class", "ant-upload-text-icon", 4, "ngSwitchDefault"], ["noImageThumbTpl", ""], [1, "ant-upload-list-item-thumbnail"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["target", "_blank", "rel", "noopener noreferrer", 1, "ant-upload-list-item-thumbnail", 3, "href", "click"], ["class", "ant-upload-list-item-image", 3, "src", 4, "ngIf", "ngIfElse"], [1, "ant-upload-list-item-image", 3, "src"], [1, "ant-upload-text-icon"], [4, "ngIf", "ngIfElse"], ["customIconRender", ""], ["iconNodeFileIcon", ""], [4, "ngSwitchCase"], ["nz-icon", "", 3, "nzType", 4, "ngSwitchDefault"], ["nz-icon", "", "nzType", "loading"], ["nz-icon", "", 3, "nzType"], ["nz-icon", "", "nzTheme", "twotone", 3, "nzType"], ["type", "button", "nz-button", "", "nzType", "text", "nzSize", "small", "class", "ant-upload-list-item-card-actions-btn", 3, "click", 4, "ngIf"], ["type", "button", "nz-button", "", "nzType", "text", "nzSize", "small", 1, "ant-upload-list-item-card-actions-btn", 3, "click"], ["nz-icon", "", "nzType", "delete"], ["nz-icon", "", "nzType", "download"], [3, "class", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", "class", "ant-upload-list-item-name", 3, "href", "click", 4, "ngIf"], ["class", "ant-upload-list-item-name", 3, "click", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 1, "ant-upload-list-item-name", 3, "href", "click"], [1, "ant-upload-list-item-name", 3, "click"], [1, "ant-upload-list-item-actions"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", "ngStyle", "click", 4, "ngIf"], [4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", "ngStyle", "click"], ["nz-icon", "", "nzType", "eye"], [1, "ant-upload-list-item-progress"], ["nzType", "line", 3, "nzPercent", "nzShowInfo", "nzStrokeWidth"]],
  template: function NzUploadListComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzUploadListComponent_div_0_Template, 20, 14, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.list);
    }
  },
  dependencies: [NgForOf, NzToolTipModule, NzTooltipDirective, NgSwitch, NgTemplateOutlet, NgIf, NgSwitchDefault, NgSwitchCase, NzIconModule, NzIconDirective, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NgStyle, NzProgressModule, NzProgressComponent],
  encapsulation: 2,
  data: {
    animation: [trigger("itemState", [transition(":enter", [style({
      height: "0",
      width: "0",
      opacity: 0
    }), animate(150, style({
      height: "*",
      width: "*",
      opacity: 1
    }))]), transition(":leave", [animate(150, style({
      height: "0",
      width: "0",
      opacity: 0
    }))])])]
  },
  changeDetection: 0
});
var NzUploadListComponent = _NzUploadListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzUploadListComponent, [{
    type: Component,
    args: [{
      selector: "nz-upload-list",
      exportAs: "nzUploadList",
      animations: [trigger("itemState", [transition(":enter", [style({
        height: "0",
        width: "0",
        opacity: 0
      }), animate(150, style({
        height: "*",
        width: "*",
        opacity: 1
      }))]), transition(":leave", [animate(150, style({
        height: "0",
        width: "0",
        opacity: 0
      }))])])],
      host: {
        class: "ant-upload-list",
        "[class.ant-upload-list-rtl]": `dir === 'rtl'`,
        "[class.ant-upload-list-text]": `listType === 'text'`,
        "[class.ant-upload-list-picture]": `listType === 'picture'`,
        "[class.ant-upload-list-picture-card]": `listType === 'picture-card'`
      },
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NgForOf, NzToolTipModule, NgSwitch, NgTemplateOutlet, NgIf, NgSwitchDefault, NgSwitchCase, NzIconModule, NzButtonModule, NgStyle, NzProgressModule],
      standalone: true,
      template: `<div *ngFor="let file of list" class="ant-upload-list-{{ listType }}-container">
  <div
    class="ant-upload-list-item ant-upload-list-item-{{ file.status }} ant-upload-list-item-list-type-{{ listType }}"
    [attr.data-key]="file.key"
    @itemState
    nz-tooltip
    [nzTooltipTitle]="file.status === 'error' ? file.message : null"
  >
    <ng-template #icon>
      <ng-container [ngSwitch]="file.iconType">
        <div
          *ngSwitchCase="'uploading'"
          class="ant-upload-list-item-thumbnail"
          [class.ant-upload-list-item-file]="!file.isUploading"
        >
          <ng-template [ngTemplateOutlet]="iconNode" [ngTemplateOutletContext]="{ $implicit: file }"></ng-template>
        </div>
        <a
          *ngSwitchCase="'thumbnail'"
          class="ant-upload-list-item-thumbnail"
          [class.ant-upload-list-item-file]="!file.isImageUrl"
          target="_blank"
          rel="noopener noreferrer"
          [href]="file.url || file.thumbUrl"
          (click)="handlePreview(file, $event)"
        >
          <img
            *ngIf="file.isImageUrl; else noImageThumbTpl"
            class="ant-upload-list-item-image"
            [src]="file.thumbUrl || file.url"
            [attr.alt]="file.name"
          />
        </a>
        <div *ngSwitchDefault class="ant-upload-text-icon">
          <ng-template [ngTemplateOutlet]="iconNode" [ngTemplateOutletContext]="{ $implicit: file }"></ng-template>
        </div>
      </ng-container>
      <ng-template #noImageThumbTpl>
        <ng-template [ngTemplateOutlet]="iconNode" [ngTemplateOutletContext]="{ $implicit: file }"></ng-template>
      </ng-template>
    </ng-template>
    <ng-template #iconNode let-file>
      <ng-container *ngIf="!iconRender; else customIconRender">
        <ng-container [ngSwitch]="listType">
          <ng-container *ngSwitchCase="'picture'">
            <ng-container *ngIf="file.isUploading; else iconNodeFileIcon">
              <span nz-icon nzType="loading"></span>
            </ng-container>
          </ng-container>
          <ng-container *ngSwitchCase="'picture-card'">
            <ng-container *ngIf="file.isUploading; else iconNodeFileIcon">
              {{ locale.uploading }}
            </ng-container>
          </ng-container>
          <span *ngSwitchDefault nz-icon [nzType]="file.isUploading ? 'loading' : 'paper-clip'"></span>
        </ng-container>
      </ng-container>
      <ng-template
        #customIconRender
        [ngTemplateOutlet]="iconRender"
        [ngTemplateOutletContext]="{ $implicit: file }"
      ></ng-template>
      <ng-template #iconNodeFileIcon>
        <span nz-icon [nzType]="file.isImageUrl ? 'picture' : 'file'" nzTheme="twotone"></span>
      </ng-template>
    </ng-template>
    <ng-template #removeIcon>
      <button
        *ngIf="icons.showRemoveIcon"
        type="button"
        nz-button
        nzType="text"
        nzSize="small"
        (click)="handleRemove(file, $event)"
        [attr.title]="locale.removeFile"
        class="ant-upload-list-item-card-actions-btn"
      >
        <span nz-icon nzType="delete"></span>
      </button>
    </ng-template>
    <ng-template #downloadIcon>
      <button
        *ngIf="file.showDownload"
        type="button"
        nz-button
        nzType="text"
        nzSize="small"
        (click)="handleDownload(file)"
        [attr.title]="locale.downloadFile"
        class="ant-upload-list-item-card-actions-btn"
      >
        <span nz-icon nzType="download"></span>
      </button>
    </ng-template>
    <ng-template #downloadOrDelete>
      <span
        *ngIf="listType !== 'picture-card'"
        class="ant-upload-list-item-card-actions {{ listType === 'picture' ? 'picture' : '' }}"
      >
        <ng-template [ngTemplateOutlet]="downloadIcon"></ng-template>
        <ng-template [ngTemplateOutlet]="removeIcon"></ng-template>
      </span>
    </ng-template>
    <ng-template #preview>
      <a
        *ngIf="file.url"
        target="_blank"
        rel="noopener noreferrer"
        class="ant-upload-list-item-name"
        [attr.title]="file.name"
        [href]="file.url"
        [attr.download]="file.linkProps && file.linkProps.download"
        (click)="handlePreview(file, $event)"
      >
        {{ file.name }}
      </a>
      <span
        *ngIf="!file.url"
        class="ant-upload-list-item-name"
        [attr.title]="file.name"
        (click)="handlePreview(file, $event)"
      >
        {{ file.name }}
      </span>
      <ng-template [ngTemplateOutlet]="downloadOrDelete"></ng-template>
    </ng-template>
    <div class="ant-upload-list-item-info">
      <span class="ant-upload-span">
        <ng-template [ngTemplateOutlet]="icon"></ng-template>
        <ng-template [ngTemplateOutlet]="preview"></ng-template>
      </span>
    </div>
    <span *ngIf="listType === 'picture-card' && !file.isUploading" class="ant-upload-list-item-actions">
      <a
        *ngIf="icons.showPreviewIcon"
        [href]="file.url || file.thumbUrl"
        target="_blank"
        rel="noopener noreferrer"
        [attr.title]="locale.previewFile"
        [ngStyle]="!(file.url || file.thumbUrl) ? { opacity: 0.5, 'pointer-events': 'none' } : null"
        (click)="handlePreview(file, $event)"
      >
        <span nz-icon nzType="eye"></span>
      </a>
      <ng-container *ngIf="file.status === 'done'">
        <ng-template [ngTemplateOutlet]="downloadIcon"></ng-template>
      </ng-container>
      <ng-template [ngTemplateOutlet]="removeIcon"></ng-template>
    </span>
    <div *ngIf="file.isUploading" class="ant-upload-list-item-progress">
      <nz-progress [nzPercent]="file.percent!" nzType="line" [nzShowInfo]="false" [nzStrokeWidth]="2"></nz-progress>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NgZone
  }, {
    type: Platform
  }], {
    locale: [{
      type: Input
    }],
    listType: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    icons: [{
      type: Input
    }],
    onPreview: [{
      type: Input
    }],
    onRemove: [{
      type: Input
    }],
    onDownload: [{
      type: Input
    }],
    previewFile: [{
      type: Input
    }],
    previewIsImage: [{
      type: Input
    }],
    iconRender: [{
      type: Input
    }],
    dir: [{
      type: Input
    }]
  });
})();
var _NzUploadComponent = class _NzUploadComponent {
  set nzShowUploadList(value) {
    this._showUploadList = typeof value === "boolean" ? toBoolean(value) : value;
  }
  get nzShowUploadList() {
    return this._showUploadList;
  }
  zipOptions() {
    if (typeof this.nzShowUploadList === "boolean" && this.nzShowUploadList) {
      this.nzShowUploadList = {
        showPreviewIcon: true,
        showRemoveIcon: true,
        showDownloadIcon: true
      };
    }
    const filters = this.nzFilter.slice();
    if (this.nzMultiple && this.nzLimit > 0 && filters.findIndex((w) => w.name === "limit") === -1) {
      filters.push({
        name: "limit",
        fn: (fileList) => fileList.slice(-this.nzLimit)
      });
    }
    if (this.nzSize > 0 && filters.findIndex((w) => w.name === "size") === -1) {
      filters.push({
        name: "size",
        fn: (fileList) => fileList.filter((w) => w.size / 1024 <= this.nzSize)
      });
    }
    if (this.nzFileType && this.nzFileType.length > 0 && filters.findIndex((w) => w.name === "type") === -1) {
      const types = this.nzFileType.split(",");
      filters.push({
        name: "type",
        fn: (fileList) => fileList.filter((w) => ~types.indexOf(w.type))
      });
    }
    this._btnOptions = {
      disabled: this.nzDisabled,
      accept: this.nzAccept,
      action: this.nzAction,
      directory: this.nzDirectory,
      openFileDialogOnClick: this.nzOpenFileDialogOnClick,
      beforeUpload: this.nzBeforeUpload,
      customRequest: this.nzCustomRequest,
      data: this.nzData,
      headers: this.nzHeaders,
      name: this.nzName,
      multiple: this.nzMultiple,
      withCredentials: this.nzWithCredentials,
      filters,
      transformFile: this.nzTransformFile,
      onStart: this.onStart,
      onProgress: this.onProgress,
      onSuccess: this.onSuccess,
      onError: this.onError
    };
    return this;
  }
  // #endregion
  constructor(ngZone, document2, cdr, i18n, directionality) {
    this.ngZone = ngZone;
    this.document = document2;
    this.cdr = cdr;
    this.i18n = i18n;
    this.directionality = directionality;
    this.destroy$ = new Subject();
    this.dir = "ltr";
    this.nzType = "select";
    this.nzLimit = 0;
    this.nzSize = 0;
    this.nzDirectory = false;
    this.nzOpenFileDialogOnClick = true;
    this.nzFilter = [];
    this.nzFileList = [];
    this.nzDisabled = false;
    this.nzListType = "text";
    this.nzMultiple = false;
    this.nzName = "file";
    this._showUploadList = true;
    this.nzShowButton = true;
    this.nzWithCredentials = false;
    this.nzIconRender = null;
    this.nzFileListRender = null;
    this.nzChange = new EventEmitter();
    this.nzFileListChange = new EventEmitter();
    this.onStart = (file) => {
      if (!this.nzFileList) {
        this.nzFileList = [];
      }
      const targetItem = this.fileToObject(file);
      targetItem.status = "uploading";
      this.nzFileList = this.nzFileList.concat(targetItem);
      this.nzFileListChange.emit(this.nzFileList);
      this.nzChange.emit({
        file: targetItem,
        fileList: this.nzFileList,
        type: "start"
      });
      this.detectChangesList();
    };
    this.onProgress = (e, file) => {
      const fileList = this.nzFileList;
      const targetItem = this.getFileItem(file, fileList);
      targetItem.percent = e.percent;
      this.nzChange.emit({
        event: e,
        file: __spreadValues({}, targetItem),
        fileList: this.nzFileList,
        type: "progress"
      });
      this.detectChangesList();
    };
    this.onSuccess = (res, file) => {
      const fileList = this.nzFileList;
      const targetItem = this.getFileItem(file, fileList);
      targetItem.status = "done";
      targetItem.response = res;
      this.nzChange.emit({
        file: __spreadValues({}, targetItem),
        fileList,
        type: "success"
      });
      this.detectChangesList();
    };
    this.onError = (err, file) => {
      const fileList = this.nzFileList;
      const targetItem = this.getFileItem(file, fileList);
      targetItem.error = err;
      targetItem.status = "error";
      this.nzChange.emit({
        file: __spreadValues({}, targetItem),
        fileList,
        type: "error"
      });
      this.detectChangesList();
    };
    this.onRemove = (file) => {
      this.uploadComp.abort(file);
      file.status = "removed";
      const fnRes = typeof this.nzRemove === "function" ? this.nzRemove(file) : this.nzRemove == null ? true : this.nzRemove;
      (fnRes instanceof Observable ? fnRes : of(fnRes)).pipe(filter((res) => res)).subscribe(() => {
        this.nzFileList = this.removeFileItem(file, this.nzFileList);
        this.nzChange.emit({
          file,
          fileList: this.nzFileList,
          type: "removed"
        });
        this.nzFileListChange.emit(this.nzFileList);
        this.cdr.detectChanges();
      });
    };
    this.prefixCls = "ant-upload";
    this.classList = [];
  }
  // #region upload
  fileToObject(file) {
    return {
      lastModified: file.lastModified,
      lastModifiedDate: file.lastModifiedDate,
      name: file.filename || file.name,
      size: file.size,
      type: file.type,
      uid: file.uid,
      response: file.response,
      error: file.error,
      percent: 0,
      originFileObj: file
    };
  }
  getFileItem(file, fileList) {
    return fileList.filter((item) => item.uid === file.uid)[0];
  }
  removeFileItem(file, fileList) {
    return fileList.filter((item) => item.uid !== file.uid);
  }
  // skip safari bug
  fileDrop(e) {
    if (e.type === this.dragState) {
      return;
    }
    this.dragState = e.type;
    this.setClassMap();
  }
  // #endregion
  // #region list
  detectChangesList() {
    this.cdr.detectChanges();
    this.listComp?.detectChanges();
  }
  setClassMap() {
    let subCls = [];
    if (this.nzType === "drag") {
      if (this.nzFileList.some((file) => file.status === "uploading")) {
        subCls.push(`${this.prefixCls}-drag-uploading`);
      }
      if (this.dragState === "dragover") {
        subCls.push(`${this.prefixCls}-drag-hover`);
      }
    } else {
      subCls = [`${this.prefixCls}-select-${this.nzListType}`];
    }
    this.classList = [this.prefixCls, `${this.prefixCls}-${this.nzType}`, ...subCls, this.nzDisabled && `${this.prefixCls}-disabled` || "", this.dir === "rtl" && `${this.prefixCls}-rtl` || ""].filter((item) => !!item);
    this.cdr.detectChanges();
  }
  // #endregion
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.setClassMap();
      this.cdr.detectChanges();
    });
    this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Upload");
      this.detectChangesList();
    });
  }
  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => fromEvent(this.document.body, "drop").pipe(takeUntil(this.destroy$)).subscribe((event) => {
      event.preventDefault();
      event.stopPropagation();
    }));
  }
  ngOnChanges() {
    this.zipOptions().setClassMap();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzUploadComponent.ɵfac = function NzUploadComponent_Factory(t) {
  return new (t || _NzUploadComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(Directionality, 8));
};
_NzUploadComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzUploadComponent,
  selectors: [["nz-upload"]],
  viewQuery: function NzUploadComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c5, 5);
      ɵɵviewQuery(_c6, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.uploadComp = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listComp = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function NzUploadComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-upload-picture-card-wrapper", ctx.nzListType === "picture-card");
    }
  },
  inputs: {
    nzType: "nzType",
    nzLimit: "nzLimit",
    nzSize: "nzSize",
    nzFileType: "nzFileType",
    nzAccept: "nzAccept",
    nzAction: "nzAction",
    nzDirectory: "nzDirectory",
    nzOpenFileDialogOnClick: "nzOpenFileDialogOnClick",
    nzBeforeUpload: "nzBeforeUpload",
    nzCustomRequest: "nzCustomRequest",
    nzData: "nzData",
    nzFilter: "nzFilter",
    nzFileList: "nzFileList",
    nzDisabled: "nzDisabled",
    nzHeaders: "nzHeaders",
    nzListType: "nzListType",
    nzMultiple: "nzMultiple",
    nzName: "nzName",
    nzShowUploadList: "nzShowUploadList",
    nzShowButton: "nzShowButton",
    nzWithCredentials: "nzWithCredentials",
    nzRemove: "nzRemove",
    nzPreview: "nzPreview",
    nzPreviewFile: "nzPreviewFile",
    nzPreviewIsImage: "nzPreviewIsImage",
    nzTransformFile: "nzTransformFile",
    nzDownload: "nzDownload",
    nzIconRender: "nzIconRender",
    nzFileListRender: "nzFileListRender"
  },
  outputs: {
    nzChange: "nzChange",
    nzFileListChange: "nzFileListChange"
  },
  exportAs: ["nzUpload"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c2,
  decls: 11,
  vars: 2,
  consts: [["list", ""], ["con", ""], ["btn", ""], [4, "ngIf", "ngIfElse"], ["select", ""], ["pic", ""], [3, "display", "locale", "listType", "items", "icons", "iconRender", "previewFile", "previewIsImage", "onPreview", "onRemove", "onDownload", "dir", 4, "ngIf"], [4, "ngIf"], [3, "locale", "listType", "items", "icons", "iconRender", "previewFile", "previewIsImage", "onPreview", "onRemove", "onDownload", "dir"], ["listComp", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], ["nz-upload-btn", "", 3, "options"], ["uploadComp", ""], [3, "ngTemplateOutlet"], [3, "ngClass", "drop", "dragover", "dragleave"], ["nz-upload-btn", "", 1, "ant-upload-btn", 3, "options"], [1, "ant-upload-drag-container"]],
  template: function NzUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzUploadComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, NzUploadComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor)(4, NzUploadComponent_ng_template_4_Template, 4, 5, "ng-template", null, 2, ɵɵtemplateRefExtractor)(6, NzUploadComponent_ng_container_6_Template, 7, 4, "ng-container", 3)(7, NzUploadComponent_ng_template_7_Template, 1, 2, "ng-template", null, 4, ɵɵtemplateRefExtractor)(9, NzUploadComponent_ng_template_9_Template, 2, 2, "ng-template", null, 5, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const _r8 = ɵɵreference(8);
      ɵɵadvance(6);
      ɵɵproperty("ngIf", ctx.nzType === "drag")("ngIfElse", _r8);
    }
  },
  dependencies: [NzUploadListComponent, NgIf, NgTemplateOutlet, NgClass, NzUploadBtnComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzUploadComponent = _NzUploadComponent;
__decorate([InputNumber()], NzUploadComponent.prototype, "nzLimit", void 0);
__decorate([InputNumber()], NzUploadComponent.prototype, "nzSize", void 0);
__decorate([InputBoolean()], NzUploadComponent.prototype, "nzDirectory", void 0);
__decorate([InputBoolean()], NzUploadComponent.prototype, "nzOpenFileDialogOnClick", void 0);
__decorate([InputBoolean()], NzUploadComponent.prototype, "nzDisabled", void 0);
__decorate([InputBoolean()], NzUploadComponent.prototype, "nzMultiple", void 0);
__decorate([InputBoolean()], NzUploadComponent.prototype, "nzShowButton", void 0);
__decorate([InputBoolean()], NzUploadComponent.prototype, "nzWithCredentials", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzUploadComponent, [{
    type: Component,
    args: [{
      selector: "nz-upload",
      exportAs: "nzUpload",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class.ant-upload-picture-card-wrapper]": 'nzListType === "picture-card"'
      },
      imports: [NzUploadListComponent, NgIf, NgTemplateOutlet, NgClass, NzUploadBtnComponent],
      standalone: true,
      template: `<ng-template #list>
  <nz-upload-list
    *ngIf="locale && !nzFileListRender"
    #listComp
    [style.display]="nzShowUploadList ? '' : 'none'"
    [locale]="locale"
    [listType]="nzListType"
    [items]="nzFileList || []"
    [icons]="$any(nzShowUploadList)"
    [iconRender]="nzIconRender"
    [previewFile]="nzPreviewFile"
    [previewIsImage]="nzPreviewIsImage"
    [onPreview]="nzPreview"
    [onRemove]="onRemove"
    [onDownload]="nzDownload"
    [dir]="dir"
  ></nz-upload-list>
  <ng-container *ngIf="nzFileListRender">
    <ng-container *ngTemplateOutlet="nzFileListRender; context: { $implicit: nzFileList }"></ng-container>
  </ng-container>
</ng-template>
<ng-template #con><ng-content></ng-content></ng-template>
<ng-template #btn>
  <div [ngClass]="classList" [style.display]="nzShowButton ? '' : 'none'">
    <div nz-upload-btn #uploadComp [options]="_btnOptions!">
      <ng-template [ngTemplateOutlet]="con"></ng-template>
    </div>
  </div>
</ng-template>
<ng-container *ngIf="nzType === 'drag'; else select">
  <div [ngClass]="classList" (drop)="fileDrop($event)" (dragover)="fileDrop($event)" (dragleave)="fileDrop($event)">
    <div nz-upload-btn #uploadComp [options]="_btnOptions!" class="ant-upload-btn">
      <div class="ant-upload-drag-container">
        <ng-template [ngTemplateOutlet]="con"></ng-template>
      </div>
    </div>
  </div>
  <ng-template [ngTemplateOutlet]="list"></ng-template>
</ng-container>
<ng-template #select>
  <ng-container *ngIf="nzListType === 'picture-card'; else pic">
    <ng-template [ngTemplateOutlet]="list"></ng-template>
    <ng-template [ngTemplateOutlet]="btn"></ng-template>
  </ng-container>
</ng-template>
<ng-template #pic>
  <ng-template [ngTemplateOutlet]="btn"></ng-template>
  <ng-template [ngTemplateOutlet]="list"></ng-template>
</ng-template>
`
    }]
  }], () => [{
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzI18nService
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    uploadComp: [{
      type: ViewChild,
      args: ["uploadComp", {
        static: false
      }]
    }],
    listComp: [{
      type: ViewChild,
      args: ["listComp", {
        static: false
      }]
    }],
    nzType: [{
      type: Input
    }],
    nzLimit: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzFileType: [{
      type: Input
    }],
    nzAccept: [{
      type: Input
    }],
    nzAction: [{
      type: Input
    }],
    nzDirectory: [{
      type: Input
    }],
    nzOpenFileDialogOnClick: [{
      type: Input
    }],
    nzBeforeUpload: [{
      type: Input
    }],
    nzCustomRequest: [{
      type: Input
    }],
    nzData: [{
      type: Input
    }],
    nzFilter: [{
      type: Input
    }],
    nzFileList: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzHeaders: [{
      type: Input
    }],
    nzListType: [{
      type: Input
    }],
    nzMultiple: [{
      type: Input
    }],
    nzName: [{
      type: Input
    }],
    nzShowUploadList: [{
      type: Input
    }],
    nzShowButton: [{
      type: Input
    }],
    nzWithCredentials: [{
      type: Input
    }],
    nzRemove: [{
      type: Input
    }],
    nzPreview: [{
      type: Input
    }],
    nzPreviewFile: [{
      type: Input
    }],
    nzPreviewIsImage: [{
      type: Input
    }],
    nzTransformFile: [{
      type: Input
    }],
    nzDownload: [{
      type: Input
    }],
    nzIconRender: [{
      type: Input
    }],
    nzFileListRender: [{
      type: Input
    }],
    nzChange: [{
      type: Output
    }],
    nzFileListChange: [{
      type: Output
    }]
  });
})();
var _NzUploadModule = class _NzUploadModule {
};
_NzUploadModule.ɵfac = function NzUploadModule_Factory(t) {
  return new (t || _NzUploadModule)();
};
_NzUploadModule.ɵmod = ɵɵdefineNgModule({
  type: _NzUploadModule,
  imports: [NzUploadComponent, NzUploadBtnComponent, NzUploadListComponent],
  exports: [NzUploadComponent]
});
_NzUploadModule.ɵinj = ɵɵdefineInjector({
  imports: [NzUploadComponent, NzUploadListComponent]
});
var NzUploadModule = _NzUploadModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzUploadModule, [{
    type: NgModule,
    args: [{
      imports: [NzUploadComponent, NzUploadBtnComponent, NzUploadListComponent],
      exports: [NzUploadComponent]
    }]
  }], null, null);
})();
export {
  NzUploadBtnComponent,
  NzUploadComponent,
  NzUploadListComponent,
  NzUploadModule
};
//# sourceMappingURL=ng-zorro-antd_upload.js.map
