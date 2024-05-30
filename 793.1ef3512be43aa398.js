"use strict";(self.webpackChunkangular_starter=self.webpackChunkangular_starter||[]).push([[793],{2596:(v,l,n)=>{n.d(l,{p:()=>g});var s=n(6609),c=n(4412),d=n(3543),p=n(4438);let g=(()=>{class a{constructor(){this.incomeVerificationMethodsLoadingState$=new c.t(s.Bj.LoadingState.Unloaded),this.incomeVerificationMethods$=new c.t([]),this.incomeVerificationMethodsErrorMessage$=new c.t("")}listVehicleVerificationMethods(r){this.incomeVerificationMethodsLoadingState$.next(s.Bj.LoadingState.Loading),this.incomeVerificationMethods$.next([]),this.incomeVerificationMethodsErrorMessage$.next(""),setTimeout(()=>{d.A.find(f=>f.id===r)?(this.incomeVerificationMethods$.next([s.Bj.IncomeVerificationMethod.Plaid,s.Bj.IncomeVerificationMethod.IRS]),this.incomeVerificationMethodsLoadingState$.next(s.Bj.LoadingState.Success)):(this.incomeVerificationMethodsErrorMessage$.next("Loan not found"),this.incomeVerificationMethodsLoadingState$.next(s.Bj.LoadingState.Error))},500)}static#t=this.\u0275fac=function(m){return new(m||a)};static#n=this.\u0275prov=p.jDH({token:a,factory:a.\u0275fac})}return a})()},1174:(v,l,n)=>{n.r(l),n.d(l,{VehicleModule:()=>O});var s=n(1449),c=n(177),d=n(1141),p=n(491),g=n(8542),a=n(2596),h=n(6609),r=n(1935),m=n(8359),f=n(6354),M=n(5964),x=n(274),t=n(4438),C=n(4171),F=n(1727);let V=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#n=this.\u0275cmp=t.VBU({type:e,selectors:[["app-documents-checklist"]],decls:20,vars:0,consts:[["pTooltip","Vehicle Identification Number",1,"tooltip"],["pTooltip","Such as a vehicle title",1,"tooltip"]],template:function(i,u){1&i&&(t.j41(0,"p-card")(1,"h2"),t.EFF(2,"Please gather the following:"),t.k0s(),t.j41(3,"ul")(4,"li"),t.EFF(5,"Vehicle Registration"),t.k0s(),t.j41(6,"li"),t.EFF(7,"Insurance Card"),t.k0s(),t.j41(8,"li"),t.EFF(9,"Photo of "),t.j41(10,"span",0),t.EFF(11,"VIN"),t.k0s()(),t.j41(12,"li"),t.EFF(13,"Photo of Odometer"),t.k0s(),t.j41(14,"li"),t.EFF(15,"2 Photos of Vehicle"),t.k0s(),t.j41(16,"li")(17,"span",1),t.EFF(18,"Proof of Ownership"),t.k0s(),t.EFF(19," (if applicable)"),t.k0s()()())},dependencies:[p.Card,g.m],styles:["[_nghost-%COMP%]{display:block;text-align:center;margin-bottom:30px}[_nghost-%COMP%]     .p-card-content{padding:0}h2[_ngcontent-%COMP%]{font-size:20px;font-weight:500;line-height:25px;margin-bottom:20px}ul[_ngcontent-%COMP%]{font-size:18px;font-weight:400;line-height:28px;margin:0}li[_ngcontent-%COMP%]{list-style-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2215%22%20height%3D%2214%22%20viewBox%3D%220%200%2015%2014%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M1%207.85714L5.28571%2013L13.8571%201%22%20stroke%3D%22%232659D9%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E);text-align:left;text-indent:5px}li[_ngcontent-%COMP%]::marker{color:var(--Primary-OMF-Sky)}p-card[_ngcontent-%COMP%]{display:block;text-align:center}p-card[_ngcontent-%COMP%]     .p-card{box-shadow:none;border:1px solid var(--Primary-OMF-Sky-Light, #e0ebf5)}"],changeDetection:0})}return e})();const P=[{path:"manual",loadChildren:()=>Promise.all([n.e(341),n.e(298),n.e(314),n.e(76),n.e(761)]).then(n.bind(n,3761)).then(e=>e.VehicleManualModule)},{path:"",component:(()=>{class e{constructor(o,i,u){this.route=o,this.router=i,this.routeApi=u,this.subscriptions=new m.yU,this.LoadingState=h.Bj.LoadingState,this.IncomeVerificationMethod=h.Bj.IncomeVerificationMethod}ngOnInit(){this.subscriptions.add(this.route.params.pipe((0,f.T)(o=>parseInt(o.loanId,10))).subscribe(o=>this.routeApi.listVehicleVerificationMethods(o))),this.subscriptions.add(this.routeApi.incomeVerificationMethodsLoadingState$.pipe((0,M.p)(o=>[h.Bj.LoadingState.Success,h.Bj.LoadingState.Error].includes(o)),(0,x.H)(()=>this.routeApi.incomeVerificationMethods$),(0,M.p)(o=>!o.length)).subscribe(()=>this.router.navigate(["manual"],{relativeTo:this.route})))}ngOnDestroy(){this.subscriptions.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||e)(t.rXU(r.nX),t.rXU(r.Ix),t.rXU(a.p))};static#n=this.\u0275cmp=t.VBU({type:e,selectors:[["app-vehicle"]],decls:14,vars:1,consts:[[1,"forground"],["routerLink","../"],[1,"manual"],["label","Continue","routerLink","manual",3,"rounded"]],template:function(i,u){1&i&&(t.j41(0,"app-masterpage")(1,"section",0)(2,"nav")(3,"a",1),t.EFF(4,"\u2039 Go Back"),t.k0s()(),t.j41(5,"h1"),t.EFF(6,"Verify Vehicle Information"),t.k0s(),t.j41(7,"p"),t.EFF(8,"We need a few documents to verify your vehicle information."),t.k0s(),t.nrm(9,"app-documents-checklist"),t.j41(10,"p",2),t.nrm(11,"p-button",3),t.k0s()(),t.j41(12,"section"),t.nrm(13,"app-help-panel"),t.k0s()()),2&i&&(t.R7$(11),t.Y8G("rounded",!0))},dependencies:[r.Wk,C.z,F.HelpPanelComponent,d.$n,V],styles:["[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]     .p-button{font-size:20px;font-weight:300;line-height:24px;padding:12px 16px;width:100%;max-width:320px}section[_ngcontent-%COMP%]{padding:var(--body-padding)}section.forground[_ngcontent-%COMP%]{background-color:var(--Primary-OMF-White)}nav[_ngcontent-%COMP%]{font-size:15px;line-height:24px;margin-bottom:20px}h1[_ngcontent-%COMP%]{font-size:32px;font-weight:300;line-height:1;margin-bottom:15px}p[_ngcontent-%COMP%]{font-size:18px;line-height:25px;font-weight:400}p.manual[_ngcontent-%COMP%]{text-align:center}"],changeDetection:0})}return e})(),title:(0,h.Qe)("Verify Vehicle")}],E=r.iI.forChild(P);let O=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#n=this.\u0275mod=t.$C({type:e});static#e=this.\u0275inj=t.G2t({providers:[a.p],imports:[c.MD,E,s.YD,s.dJ,d.tm,p.CardModule,g.S,s.NB]})}return e})()}}]);