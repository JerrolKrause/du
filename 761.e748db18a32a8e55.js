"use strict";(self.webpackChunkangular_starter=self.webpackChunkangular_starter||[]).push([[761],{3761:(w,f,e)=>{e.r(f),e.d(f,{VehicleManualModule:()=>U});var c=e(1449),u=e(177),r=e(4341),M=e(1141),m=e(491),V=e(4314),s=e(6609),h=e(4412),v=e(3543),t=e(4438);let g=(()=>{class i{constructor(){this.manualVehicleVerificationMethodsLoadingState$=new h.t(s.Bj.LoadingState.Unloaded),this.manualVehicleVerificationMethods$=new h.t(void 0),this.manualVehicleVerificationMethodsErrorMessage$=new h.t("")}listManualVehicleVerificationMethods(n){this.manualVehicleVerificationMethodsLoadingState$.next(s.Bj.LoadingState.Loading),this.manualVehicleVerificationMethods$.next([]),this.manualVehicleVerificationMethodsErrorMessage$.next(""),setTimeout(()=>{v.A.find(l=>l.id===n)?(this.manualVehicleVerificationMethods$.next([{id:0,stub:"registration",label:"Vehicle Registration"},{id:1,stub:"insurance",label:"Insurance Card"},{id:2,stub:"vin",label:"Photo of VIN"},{id:3,stub:"odometer",label:"Photo of Odometer"},{id:3,stub:"vehicle",label:"2 Photos of Vehicle"},{id:3,stub:"ownership",label:"Proof of Ownership"}]),this.manualVehicleVerificationMethodsLoadingState$.next(s.Bj.LoadingState.Success)):(this.manualVehicleVerificationMethodsErrorMessage$.next("Loan not found"),this.manualVehicleVerificationMethodsLoadingState$.next(s.Bj.LoadingState.Error))},750)}static#t=this.\u0275fac=function(o){return new(o||i)};static#i=this.\u0275prov=t.jDH({token:i,factory:i.\u0275fac})}return i})();var d=e(1935),x=e(8359),C=e(6354),b=e(2596),y=e(4171),F=e(1727),P=e(9500),T=e(6718),j=e(2214);const k=(i,a)=>a.id;function O(i,a){if(1&i&&(t.j41(0,"app-file-upload",1),t.EFF(1," Take a photo or upload a file "),t.k0s()),2&i){const n=t.XpG();t.Y8G("label",(null==n.verificationMethod?null:n.verificationMethod.label)||"Verify Vehicle Information")("backFunction",n.fileUploadBack)}}function $(i,a){1&i&&t.nrm(0,"app-loading-spinner")}function S(i,a){if(1&i){const n=t.RV6();t.j41(0,"p-card",4),t.bIt("click",function(){const l=t.eBV(n).$implicit,p=t.XpG(3);return t.Njj(p.navigateToVerification(l))}),t.j41(1,"span"),t.EFF(2),t.k0s(),t.nrm(3,"app-icons",5),t.k0s()}if(2&i){const n=a.$implicit;t.R7$(2),t.JRh(n.label)}}function L(i,a){if(1&i&&(t.j41(0,"nav"),t.Z7z(1,S,4,1,"p-card",3,k),t.nI1(3,"async"),t.k0s()),2&i){const n=t.XpG(2);t.R7$(),t.Dyx(t.bMT(3,0,n.manualVehicleRouteApi.manualVehicleVerificationMethods$))}}function R(i,a){if(1&i&&(t.j41(0,"p-card")(1,"h2"),t.EFF(2,"There was an error loading the vehicle verification list."),t.k0s(),t.j41(3,"p"),t.EFF(4),t.nI1(5,"async"),t.k0s()()),2&i){const n=t.XpG(2);t.R7$(4),t.SpI("Details: ",t.bMT(5,1,n.manualVehicleRouteApi.manualVehicleVerificationMethodsErrorMessage$),"")}}function E(i,a){if(1&i&&(t.j41(0,"nav")(1,"a",2),t.EFF(2,"\u2039 Go Back"),t.k0s()(),t.j41(3,"h1"),t.EFF(4,"Verify Vehicle Information"),t.k0s(),t.j41(5,"p"),t.EFF(6,"We need a few documents to verify your vehicle information."),t.k0s(),t.DNE(7,$,1,0),t.nI1(8,"async"),t.DNE(9,L,4,2)(10,R,6,3)),2&i){let n;const o=t.XpG();t.R7$(7),t.vxM(7,(n=t.bMT(8,1,o.manualVehicleRouteApi.manualVehicleVerificationMethodsLoadingState$))===o.LoadingState.Loading?7:n===o.LoadingState.Success?9:n===o.LoadingState.Error?10:-1)}}const I=[{path:"",component:(()=>{class i{constructor(n,o,l,p){this.fb=n,this.route=o,this.vehicleRouteApi=l,this.manualVehicleRouteApi=p,this.subscriptions=new x.yU,this.LoadingState=s.Bj.LoadingState,this.IncomeVerificationMethod=s.Bj.IncomeVerificationMethod,this.verificationMethod=null,this.fileUploader=(0,t.vPA)(!1),this.fileUploadBack=()=>{this.fileUploader.set(!1),this.verificationMethod=null}}navigateToVerification(n){this.verificationMethod=n,this.fileUploader.set(!0)}ngOnInit(){this.subscriptions.add(this.route.params.pipe((0,C.T)(n=>parseInt(n.loanId,10))).subscribe(n=>{this.vehicleRouteApi.listVehicleVerificationMethods(n),this.manualVehicleRouteApi.listManualVehicleVerificationMethods(n)}))}ngOnDestroy(){this.subscriptions.unsubscribe()}static#t=this.\u0275fac=function(o){return new(o||i)(t.rXU(r.FormBuilder),t.rXU(d.nX),t.rXU(b.p),t.rXU(g))};static#i=this.\u0275cmp=t.VBU({type:i,selectors:[["app-vehicle-manual"]],decls:6,vars:1,consts:[[1,"forground"],[3,"label","backFunction"],["routerLink","../"],[1,"verificationTask"],[1,"verificationTask",3,"click"],["icon","chevronRight"]],template:function(o,l){1&o&&(t.j41(0,"app-masterpage")(1,"section",0),t.DNE(2,O,2,2,"app-file-upload",1)(3,E,11,3),t.k0s(),t.j41(4,"section"),t.nrm(5,"app-help-panel"),t.k0s()()),2&o&&(t.R7$(2),t.vxM(2,l.fileUploader()?2:3))},dependencies:[d.Wk,y.z,F.HelpPanelComponent,m.Card,P.N,T.P,j.IconsComponent,u.Jj],styles:["[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]     .p-dropdown{width:100%;max-width:320px;margin-bottom:30px}[_nghost-%COMP%]     .p-dropdown-label{font-size:18px;line-height:25px;padding:15px}[_nghost-%COMP%]     .p-dropdown-items{margin:0;background-color:var(--body-background-color)}[_nghost-%COMP%]     .p-dropdown-item{padding:15px;font-size:18px;line-height:25px}[_nghost-%COMP%]     .p-button{font-size:20px;font-weight:300;line-height:24px;padding:12px 16px;width:100%;max-width:320px}section[_ngcontent-%COMP%]{padding:var(--body-padding)}section.forground[_ngcontent-%COMP%]{background-color:var(--Primary-OMF-White)}nav[_ngcontent-%COMP%]{font-size:15px;line-height:24px;margin-bottom:20px}h1[_ngcontent-%COMP%]{font-size:32px;font-weight:300;line-height:1;margin-bottom:15px}p[_ngcontent-%COMP%]{font-size:18px;line-height:25px;font-weight:400}form[_ngcontent-%COMP%]{margin-bottom:30px}.verificationTask[_ngcontent-%COMP%]{display:block;cursor:pointer;margin-bottom:10px}.verificationTask[_ngcontent-%COMP%]   app-icons[_ngcontent-%COMP%]{color:var(--Primary-OMF-Sky);font-size:20px}.verificationTask[_ngcontent-%COMP%]     .p-card{box-shadow:none;border:1px solid var(--Primary-OMF-Sky-Light, #e0ebf5);width:100%;font-size:20px;font-weight:400;line-height:28px}.verificationTask[_ngcontent-%COMP%]     .p-card-content{display:flex;justify-content:space-between;align-items:center;width:100%}"],changeDetection:0})}return i})(),title:(0,s.Qe)("Verify Income: Manual")}],B=d.iI.forChild(I);let U=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#i=this.\u0275mod=t.$C({type:i});static#n=this.\u0275inj=t.G2t({providers:[g],imports:[u.MD,r.FormsModule,r.ReactiveFormsModule,B,c.YD,c.dJ,M.tm,m.CardModule,V.kr,c.NB,c.eB,c.Gs]})}return i})()}}]);