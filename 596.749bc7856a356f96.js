"use strict";(self.webpackChunkangular_starter=self.webpackChunkangular_starter||[]).push([[596],{538:(M,p,o)=>{o.d(p,{V:()=>c});var t=o(4438);let c=(()=>{class s{constructor(){this.upsell=(0,t.hFB)(!1)}static#t=this.\u0275fac=function(a){return new(a||s)};static#n=this.\u0275cmp=t.VBU({type:s,selectors:[["app-irs-verify-action"]],inputs:{upsell:[t.Mj6.SignalBased,"upsell"]},standalone:!0,features:[t.aNF],decls:12,vars:1,consts:[[1,"logo"],["src","assets/logos/irs-logo.svg","alt","IRS.gov"],[1,"cta"],["routerLink","irs",1,"cta"],["src","assets/icons/ui/lock.svg","alt","Secure"]],template:function(a,h){1&a&&(t.j41(0,"div",0),t.nrm(1,"img",1),t.k0s(),t.j41(2,"h2"),t.EFF(3),t.k0s(),t.j41(4,"p"),t.EFF(5,"Use your irs.gov Tax Return Transcript to verify quickly."),t.nrm(6,"br"),t.EFF(7,"(FAKE)"),t.k0s(),t.j41(8,"div",2)(9,"a",3),t.nrm(10,"img",4),t.EFF(11," Get Started"),t.k0s()()),2&a&&(t.R7$(3),t.SpI("Verify with IRS.gov ",h.upsell()?"Instead":"",""))},styles:["[_nghost-%COMP%]{display:block}.logo[_ngcontent-%COMP%]{margin-bottom:20px}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:39px;width:auto}h2[_ngcontent-%COMP%]{font-size:20px;font-weight:500;line-height:20px;margin-bottom:15px}.cta[_ngcontent-%COMP%]{font-size:20px;line-height:20px;vertical-align:middle}.cta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;align-content:center;gap:8px}"],changeDetection:0})}return s})()},570:(M,p,o)=>{o.d(p,{j:()=>c});var t=o(4438);let c=(()=>{class s{constructor(){this.upsell=(0,t.hFB)(!1)}static#t=this.\u0275fac=function(a){return new(a||s)};static#n=this.\u0275cmp=t.VBU({type:s,selectors:[["app-plaid-verify-action"]],inputs:{upsell:[t.Mj6.SignalBased,"upsell"]},standalone:!0,features:[t.aNF],decls:13,vars:1,consts:[[1,"logo"],["src","assets/logos/plaid-logo.png","alt","Plaid"],["href","#"],[1,"cta"],["routerLink","plaid"],["src","assets/icons/ui/lock.svg","alt","Secure"]],template:function(a,h){1&a&&(t.j41(0,"div",0),t.nrm(1,"img",1),t.k0s(),t.j41(2,"h2"),t.EFF(3),t.k0s(),t.j41(4,"p"),t.EFF(5,"We use Plaid to "),t.j41(6,"a",2),t.EFF(7,"securely connect"),t.k0s(),t.EFF(8," to the bank account where you get paid to verify your income in seconds."),t.k0s(),t.j41(9,"div",3)(10,"a",4),t.nrm(11,"img",5),t.EFF(12," Get Started"),t.k0s()()),2&a&&(t.R7$(3),t.SpI("Verify with Plaid ",h.upsell()?"Instead":"",""))},styles:["[_nghost-%COMP%]{display:block}.logo[_ngcontent-%COMP%]{margin-bottom:20px}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:39px;width:auto}h2[_ngcontent-%COMP%]{font-size:20px;font-weight:500;line-height:20px;margin-bottom:15px}.cta[_ngcontent-%COMP%]{font-size:20px;line-height:20px;vertical-align:middle}.cta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;align-content:center;gap:8px}"],changeDetection:0})}return s})()},5596:(M,p,o)=>{o.r(p),o.d(p,{IncomeModule:()=>T});var t=o(1449),c=o(177),s=o(491),m=o(6609),r=o(1935),a=o(8359),h=o(6354),f=o(5964),u=o(274),n=o(4438),C=o(1117),y=o(4171),x=o(1727),P=o(570),I=o(538),F=o(9500);function E(e,g){1&e&&n.nrm(0,"app-loading-spinner")}function O(e,g){1&e&&n.nrm(0,"app-plaid-verify-action")}function j(e,g){1&e&&n.nrm(0,"app-irs-verify-action")}function V(e,g){if(1&e&&(n.j41(0,"p-card",4),n.DNE(1,O,1,0)(2,j,1,0),n.k0s()),2&e){let i;const l=g.$implicit,d=n.XpG(2);n.R7$(),n.vxM(1,(i=l)===d.IncomeVerificationMethod.Plaid?1:i===d.IncomeVerificationMethod.IRS?2:-1)}}function S(e,g){if(1&e&&(n.Z7z(0,V,3,1,"p-card",4,n.fX1),n.nI1(2,"async")),2&e){const i=n.XpG();n.Dyx(n.bMT(2,0,i.routeApi.incomeVerificationMethods$))}}function L(e,g){if(1&e&&(n.j41(0,"p-card")(1,"h2"),n.EFF(2,"There was an error loading your income verification options."),n.k0s(),n.j41(3,"p"),n.EFF(4),n.nI1(5,"async"),n.k0s()()),2&e){const i=n.XpG();n.R7$(4),n.SpI("Details: ",n.bMT(5,1,i.routeApi.incomeVerificationMethodsErrorMessage$),"")}}const B=[{path:"manual",loadChildren:()=>Promise.all([o.e(341),o.e(298),o.e(314),o.e(542),o.e(76),o.e(425)]).then(o.bind(o,3425)).then(e=>e.IncomeManualModule)},{path:"",component:(()=>{class e{constructor(i,l,d){this.route=i,this.router=l,this.routeApi=d,this.subscriptions=new a.yU,this.LoadingState=m.Bj.LoadingState,this.IncomeVerificationMethod=m.Bj.IncomeVerificationMethod}ngOnInit(){this.subscriptions.add(this.route.params.pipe((0,h.T)(i=>parseInt(i.loanId,10))).subscribe(i=>this.routeApi.listIncomeVerificationMethods(i))),this.subscriptions.add(this.routeApi.incomeVerificationMethodsLoadingState$.pipe((0,f.p)(i=>[m.Bj.LoadingState.Success,m.Bj.LoadingState.Error].includes(i)),(0,u.H)(()=>this.routeApi.incomeVerificationMethods$),(0,f.p)(i=>!i.length)).subscribe(()=>this.router.navigate(["manual"],{relativeTo:this.route})))}ngOnDestroy(){this.subscriptions.unsubscribe()}static#t=this.\u0275fac=function(l){return new(l||e)(n.rXU(r.nX),n.rXU(r.Ix),n.rXU(C.p))};static#n=this.\u0275cmp=n.VBU({type:e,selectors:[["app-income"]],decls:18,vars:3,consts:[[1,"forground"],["routerLink","../"],[1,"manual"],["routerLink","manual"],[1,"verification-method"]],template:function(l,d){if(1&l&&(n.j41(0,"app-masterpage")(1,"section",0)(2,"nav")(3,"a",1),n.EFF(4,"\u2039 Go Back"),n.k0s()(),n.j41(5,"h1"),n.EFF(6,"Verify Income"),n.k0s(),n.j41(7,"p"),n.EFF(8,"Please select how you would like to verify your income."),n.k0s(),n.DNE(9,E,1,0),n.nI1(10,"async"),n.DNE(11,S,3,2)(12,L,6,3),n.j41(13,"p",2)(14,"a",3),n.EFF(15,"Manually verify income"),n.k0s()()(),n.j41(16,"section"),n.nrm(17,"app-help-panel"),n.k0s()()),2&l){let v;n.R7$(9),n.vxM(9,(v=n.bMT(10,1,d.routeApi.incomeVerificationMethodsLoadingState$))===d.LoadingState.Loading?9:v===d.LoadingState.Success?11:v===d.LoadingState.Error?12:-1)}},dependencies:[r.Wk,y.z,x.HelpPanelComponent,s.Card,P.j,I.V,F.N,c.Jj],styles:["[_nghost-%COMP%]{display:block;width:100%}section[_ngcontent-%COMP%]{padding:var(--body-padding)}section.forground[_ngcontent-%COMP%]{background-color:var(--Primary-OMF-White)}nav[_ngcontent-%COMP%]{font-size:15px;line-height:24px;margin-bottom:20px}h1[_ngcontent-%COMP%]{font-size:32px;font-weight:300;line-height:24px;margin-bottom:15px}p[_ngcontent-%COMP%]{font-size:18px;line-height:25px;font-weight:400}p.manual[_ngcontent-%COMP%]{text-align:center}.verification-method[_ngcontent-%COMP%]{display:block;text-align:center;margin-bottom:30px}.verification-method[_ngcontent-%COMP%]     .p-card{box-shadow:none;border:1px solid var(--Primary-OMF-Sky-Light, #e0ebf5)}"],changeDetection:0})}return e})(),title:(0,m.Qe)("Verify Income")}],D=r.iI.forChild(B);let T=(()=>{class e{static#t=this.\u0275fac=function(l){return new(l||e)};static#n=this.\u0275mod=n.$C({type:e});static#o=this.\u0275inj=n.G2t({providers:[C.p],imports:[c.MD,D,t.YD,t.dJ,s.CardModule,t.NB]})}return e})()},1117:(M,p,o)=>{o.d(p,{p:()=>r});var t=o(6609),c=o(4412),s=o(3543),m=o(4438);let r=(()=>{class a{constructor(){this.incomeVerificationMethodsLoadingState$=new c.t(t.Bj.LoadingState.Unloaded),this.incomeVerificationMethods$=new c.t([]),this.incomeVerificationMethodsErrorMessage$=new c.t("")}listIncomeVerificationMethods(f){this.incomeVerificationMethodsLoadingState$.next(t.Bj.LoadingState.Loading),this.incomeVerificationMethods$.next([]),this.incomeVerificationMethodsErrorMessage$.next(""),setTimeout(()=>{s.A.find(n=>n.id===f)?(this.incomeVerificationMethods$.next([t.Bj.IncomeVerificationMethod.Plaid,t.Bj.IncomeVerificationMethod.IRS]),this.incomeVerificationMethodsLoadingState$.next(t.Bj.LoadingState.Success)):(this.incomeVerificationMethodsErrorMessage$.next("Loan not found"),this.incomeVerificationMethodsLoadingState$.next(t.Bj.LoadingState.Error))},500)}static#t=this.\u0275fac=function(u){return new(u||a)};static#n=this.\u0275prov=m.jDH({token:a,factory:a.\u0275fac})}return a})()}}]);