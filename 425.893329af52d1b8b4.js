"use strict";(self.webpackChunkangular_starter=self.webpackChunkangular_starter||[]).push([[425],{3425:(k,u,e)=>{e.r(u),e.d(u,{IncomeManualModule:()=>X});var m=e(1449),f=e(177),s=e(4341),h=e(1141),g=e(491),M=e(4314),c=e(6609),d=e(1935),n=e(4438),C=e(8359),v=e(6354),x=e(5964),b=e(1117),p=e(4412),y=e(3543);let I=(()=>{class t{constructor(){this.manualIncomeVerificationMethodsLoadingState$=new p.t(c.Bj.LoadingState.Unloaded),this.manualIncomeVerificationMethods$=new p.t(void 0),this.manualIncomeVerificationMethodsErrorMessage$=new p.t("")}listManualIncomeVerificationMethods(o){this.manualIncomeVerificationMethodsLoadingState$.next(c.Bj.LoadingState.Loading),this.manualIncomeVerificationMethods$.next([]),this.manualIncomeVerificationMethodsErrorMessage$.next(""),setTimeout(()=>{y.A.find(a=>a.id===o)?(this.manualIncomeVerificationMethods$.next([{id:0,stub:"paystub",label:"Paystub"},{id:1,stub:"bank-statement",label:"Bank Statement"},{id:2,stub:"tax-return",label:"Tax Return"},{id:3,stub:"w2",label:"W2"}]),this.manualIncomeVerificationMethodsLoadingState$.next(c.Bj.LoadingState.Success)):(this.manualIncomeVerificationMethodsErrorMessage$.next("Loan not found"),this.manualIncomeVerificationMethodsLoadingState$.next(c.Bj.LoadingState.Error))},750)}static#n=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275prov=n.jDH({token:t,factory:t.\u0275fac})}return t})();var V=e(4171),S=e(1727),F=e(570),$=e(538),j=e(5321),P=e(9500),L=e(6718);function R(t,r){if(1&t&&(n.j41(0,"app-file-upload",1),n.EFF(1," Take a photo or upload a file "),n.k0s()),2&t){const o=n.XpG();n.Y8G("label",(null==o.form.controls.dropdown.value?null:o.form.controls.dropdown.value.label)||"Verify Income")("backFunction",o.fileUploadBack)}}function T(t,r){if(1&t){const o=n.RV6();n.j41(0,"nav")(1,"a",2),n.EFF(2,"\u2039 Go Back"),n.k0s()(),n.j41(3,"h1"),n.EFF(4,"Verify Income"),n.k0s(),n.j41(5,"p"),n.EFF(6,"Please select the document you want to provide to verify your income."),n.k0s(),n.j41(7,"form",3),n.bIt("ngSubmit",function(){n.eBV(o);const a=n.XpG();return n.Njj(a.onSubmit())}),n.j41(8,"div"),n.nrm(9,"p-dropdown",4),n.nI1(10,"async"),n.nI1(11,"async"),n.k0s(),n.j41(12,"div"),n.nrm(13,"p-button",5),n.k0s()(),n.nrm(14,"app-secure-message")}if(2&t){const o=n.XpG();n.R7$(7),n.Y8G("formGroup",o.form),n.R7$(2),n.Y8G("loading",n.bMT(10,5,o.manualIncomeRouteApi.manualIncomeVerificationMethodsLoadingState$)===o.LoadingState.Loading)("options",n.bMT(11,7,o.manualIncomeRouteApi.manualIncomeVerificationMethods$)),n.R7$(4),n.Y8G("rounded",!0)("disabled",o.form.invalid)}}function O(t,r){1&t&&n.nrm(0,"app-loading-spinner")}function G(t,r){1&t&&n.nrm(0,"app-plaid-verify-action",7),2&t&&n.Y8G("upsell",!0)}function B(t,r){1&t&&n.nrm(0,"app-irs-verify-action",7),2&t&&n.Y8G("upsell",!0)}function E(t,r){if(1&t&&(n.j41(0,"p-card",6),n.DNE(1,G,1,1)(2,B,1,1),n.k0s()),2&t){let o;const i=r.$implicit,a=n.XpG(2);n.R7$(),n.vxM(1,(o=i)===a.IncomeVerificationMethod.Plaid?1:o===a.IncomeVerificationMethod.IRS?2:-1)}}function N(t,r){if(1&t&&(n.Z7z(0,E,3,1,"p-card",6,n.fX1),n.nI1(2,"async")),2&t){const o=n.XpG();n.Dyx(n.bMT(2,0,o.incomeRouteApi.incomeVerificationMethods$))}}function U(t,r){if(1&t&&(n.j41(0,"p-card")(1,"h2"),n.EFF(2,"There was an error loading your income verification options."),n.k0s(),n.j41(3,"p"),n.EFF(4),n.nI1(5,"async"),n.k0s()()),2&t){const o=n.XpG();n.R7$(4),n.SpI("Details: ",n.bMT(5,1,o.incomeRouteApi.incomeVerificationMethodsErrorMessage$),"")}}const A=[{path:"",component:(()=>{class t{constructor(o,i,a,l){this.fb=o,this.route=i,this.incomeRouteApi=a,this.manualIncomeRouteApi=l,this.subscriptions=new C.yU,this.LoadingState=c.Bj.LoadingState,this.IncomeVerificationMethod=c.Bj.IncomeVerificationMethod,this.form=this.fb.group({dropdown:new s.FormControl(void 0,s.Validators.required)}),this.fileUploader=(0,n.vPA)(!1),this.fileUploadBack=()=>{this.fileUploader.set(!1)}}onSubmit(){this.form.valid&&this.fileUploader.set(!0)}ngOnInit(){this.subscriptions.add(this.route.params.pipe((0,v.T)(o=>parseInt(o.loanId,10))).subscribe(o=>{this.incomeRouteApi.listIncomeVerificationMethods(o),this.manualIncomeRouteApi.listManualIncomeVerificationMethods(o)})),this.subscriptions.add(this.manualIncomeRouteApi.manualIncomeVerificationMethods$.pipe((0,x.p)(o=>!!o&&!!o.length),(0,v.T)(o=>o[0])).subscribe(o=>this.form.controls.dropdown.setValue(o)))}ngOnDestroy(){this.subscriptions.unsubscribe()}static#n=this.\u0275fac=function(i){return new(i||t)(n.rXU(s.FormBuilder),n.rXU(d.nX),n.rXU(b.p),n.rXU(I))};static#t=this.\u0275cmp=n.VBU({type:t,selectors:[["app-income-manual"]],decls:10,vars:4,consts:[[1,"forground"],[3,"label","backFunction"],["routerLink","../"],[3,"ngSubmit","formGroup"],["formControlName","dropdown",3,"loading","options"],["type","submit","label","Continue",3,"rounded","disabled"],[1,"verification-method"],[3,"upsell"]],template:function(i,a){if(1&i&&(n.j41(0,"app-masterpage")(1,"section",0),n.DNE(2,R,2,2,"app-file-upload",1)(3,T,15,9),n.k0s(),n.j41(4,"section"),n.DNE(5,O,1,0),n.nI1(6,"async"),n.DNE(7,N,3,2)(8,U,6,3),n.nrm(9,"app-help-panel"),n.k0s()()),2&i){let l;n.R7$(2),n.vxM(2,a.fileUploader()?2:3),n.R7$(3),n.vxM(5,(l=n.bMT(6,2,a.incomeRouteApi.incomeVerificationMethodsLoadingState$))===a.LoadingState.Loading?5:l===a.LoadingState.Success?7:l===a.LoadingState.Error?8:-1)}},dependencies:[s.\u0275NgNoValidate,s.NgControlStatus,s.NgControlStatusGroup,s.FormGroupDirective,s.FormControlName,d.Wk,V.z,S.HelpPanelComponent,h.$n,g.Card,M.ms,F.j,$.V,j.M,P.N,L.P,f.Jj],styles:["[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]     .p-dropdown{width:100%;max-width:320px;margin-bottom:30px}[_nghost-%COMP%]     .p-dropdown-label{font-size:18px;line-height:25px;padding:15px}[_nghost-%COMP%]     .p-dropdown-items{margin:0;background-color:var(--body-background-color)}[_nghost-%COMP%]     .p-dropdown-item{padding:15px;font-size:18px;line-height:25px}[_nghost-%COMP%]     .p-button{font-size:20px;font-weight:300;line-height:24px;padding:12px 16px;width:100%;max-width:320px}section[_ngcontent-%COMP%]{padding:var(--body-padding)}section.forground[_ngcontent-%COMP%]{background-color:var(--Primary-OMF-White)}nav[_ngcontent-%COMP%]{font-size:15px;line-height:24px;margin-bottom:20px}h1[_ngcontent-%COMP%]{font-size:32px;font-weight:300;line-height:24px;margin-bottom:15px}p[_ngcontent-%COMP%]{font-size:18px;line-height:25px;font-weight:400}p.manual[_ngcontent-%COMP%]{text-align:center}p-card[_ngcontent-%COMP%]{display:block;text-align:center;margin-bottom:30px}p-card[_ngcontent-%COMP%]     .p-card{box-shadow:none;border:1px solid var(--Primary-OMF-Sky-Light, #e0ebf5)}form[_ngcontent-%COMP%]{margin-bottom:30px}"],changeDetection:0})}return t})(),title:(0,c.Qe)("Verify Income: Manual")}],D=d.iI.forChild(A);let X=(()=>{class t{static#n=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=n.$C({type:t});static#o=this.\u0275inj=n.G2t({providers:[I],imports:[f.MD,s.FormsModule,s.ReactiveFormsModule,D,m.YD,m.dJ,h.tm,g.CardModule,M.kr,m.NB,m.eB]})}return t})()}}]);