"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[2068],{66634:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>A,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var n=o(74848),r=o(28453);const i={sidebar_position:106},A="Governor",s={id:"Tutorial-Setup/Governor",title:"Governor",description:"The purpose of the governor is to maintain a constant headspeed regardless of flight inputs, flying conditions, battery voltage, external disturbances, etc. In Rotorflight, the governor also provides other motor related features, like slow spoolup, autorotation control, battery voltage drop compensation, and fault detection and recovery.",source:"@site/versioned_docs/version-2.0.0/Tutorial-Setup/Governor.md",sourceDirName:"Tutorial-Setup",slug:"/Tutorial-Setup/Governor",permalink:"/docs/Tutorial-Setup/Governor",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/versioned_docs/version-2.0.0/Tutorial-Setup/Governor.md",tags:[],version:"2.0.0",sidebarPosition:106,frontMatter:{sidebar_position:106},sidebar:"tutorialSidebar",previous:{title:"RPM Measurement",permalink:"/docs/Tutorial-Setup/Rpm-Measurement"},next:{title:"ESC Telemetry",permalink:"/docs/Tutorial-Setup/ESC-Telemetry"}},l={},a=[{value:"Governor Mode",id:"governor-mode",level:2},{value:"OFF",id:"off",level:3},{value:"PASSTHROUGH",id:"passthrough",level:3},{value:"STANDARD",id:"standard",level:3},{value:"MODE1",id:"mode1",level:3},{value:"MODE2",id:"mode2",level:3},{value:"Governor Basic Settings",id:"governor-basic-settings",level:2},{value:"Handover throttle",id:"handover-throttle",level:3},{value:"Startup time",id:"startup-time",level:3},{value:"Spoolup time",id:"spoolup-time",level:3},{value:"Tracking time",id:"tracking-time",level:3},{value:"Recovery time",id:"recovery-time",level:3},{value:"Autorotation bailout time",id:"autorotation-bailout-time",level:3},{value:"Autorotation timeout",id:"autorotation-timeout",level:3},{value:"Autorotation minimum entry time",id:"autorotation-minimum-entry-time",level:3},{value:"Zero Throttle Timeout",id:"zero-throttle-timeout",level:3},{value:"Headspeed Signal Timeout",id:"headspeed-signal-timeout",level:3},{value:"Headspeed Filter Cutoff [Hz]",id:"headspeed-filter-cutoff-hz",level:3},{value:"Battery Voltage Filter Cutoff [Hz]",id:"battery-voltage-filter-cutoff-hz",level:3},{value:"TTA Bandwidth [Hz]",id:"tta-bandwidth-hz",level:3},{value:"Precomp Bandwidth [Hz]",id:"precomp-bandwidth-hz",level:3},{value:"Governor Profiles Settings",id:"governor-profiles-settings",level:2},{value:"Full Headspeed",id:"full-headspeed",level:3},{value:"Maximum Throttle",id:"maximum-throttle",level:3},{value:"PID Master Gain",id:"pid-master-gain",level:3},{value:"P-Gain",id:"p-gain",level:3},{value:"I-Gain",id:"i-gain",level:3},{value:"D-Gain",id:"d-gain",level:3},{value:"Feedforward-Gain",id:"feedforward-gain",level:3},{value:"Yaw precompensation",id:"yaw-precompensation",level:3},{value:"Cyclic precompensation",id:"cyclic-precompensation",level:3},{value:"Collective precompensation",id:"collective-precompensation",level:3},{value:"Governor throttle input ranges",id:"governor-throttle-input-ranges",level:2},{value:"THROTTLE &lt; <em>0%</em>",id:"throttle--0",level:3},{value:"<em>0%</em> &lt; THROTTLE &lt; <em>5%</em>",id:"0--throttle--5",level:3},{value:"<em>5%</em> &lt; THROTTLE &lt; <em>Handover throttle%</em>",id:"5--throttle--handover-throttle",level:3},{value:"<em>Handover throttle%</em> &lt; THROTTLE &lt; <em>100%</em>",id:"handover-throttle--throttle--100",level:3},{value:"Governor State",id:"governor-state",level:2}];function h(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"governor",children:"Governor"})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"The purpose of the governor is to maintain a constant headspeed regardless of flight inputs, flying conditions, battery voltage, external disturbances, etc. In Rotorflight, the governor also provides other motor related features, like slow spoolup, autorotation control, battery voltage drop compensation, and fault detection and recovery."})}),"\n",(0,n.jsx)(t.h1,{id:"governor-features",children:"Governor Features"}),"\n",(0,n.jsxs)(t.p,{children:["The governor can be turned ON/OFF with the drop down menu within ",(0,n.jsx)(t.strong,{children:"Governor Features"})," from the ",(0,n.jsx)(t.strong,{children:"Motors"})," Tab."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Governor",src:o(32121).A+"",width:"844",height:"98"})}),"\n",(0,n.jsx)(t.p,{children:"If the feature is disabled, all governor functions are disabled, and the throttle output is taken directly from the receiver throttle channel."}),"\n",(0,n.jsx)(t.h2,{id:"governor-mode",children:"Governor Mode"}),"\n",(0,n.jsx)(t.p,{children:"The governor has multiple operating modes, each using a slightly different method for the throttle control in the PID loop. Select a mode from one of the values below."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Governor",src:o(15953).A+"",width:"844",height:"156"})}),"\n",(0,n.jsx)(t.h3,{id:"off",children:"OFF"}),"\n",(0,n.jsx)(t.p,{children:"The governor is disabled, and the stabilized throttle output ST is taken from the receiver throttle channel."}),"\n",(0,n.jsx)(t.h3,{id:"passthrough",children:"PASSTHROUGH"}),"\n",(0,n.jsx)(t.p,{children:"The governor does not control the headspeed, but provides all the aux functions, like slow spool up, autorotation bailout, and error recovery. In the active state, the receiver throttle channel is directly passed through to the stabilized throttle output ST."}),"\n",(0,n.jsx)(t.h3,{id:"standard",children:"STANDARD"}),"\n",(0,n.jsx)(t.p,{children:"The governor is stabilizing the headspeed with a standard PID control, similar to most ESCs. All aux functions are also active."}),"\n",(0,n.jsx)(t.h3,{id:"mode1",children:"MODE1"}),"\n",(0,n.jsx)(t.p,{children:"Like STANDARD, but with collective/cyclic precompensation. This is similar to governors in most FBL systems."}),"\n",(0,n.jsx)(t.h3,{id:"mode2",children:"MODE2"}),"\n",(0,n.jsx)(t.p,{children:"Like MODE1, but with battery voltage compensation. The PID loop does not need to react to battery voltage fluctuations, as it is taken into account outside the PID loop. This is usually the best choice. Can be used only if the battery voltage is connected to the FC."}),"\n",(0,n.jsx)(t.h2,{id:"governor-basic-settings",children:"Governor Basic Settings"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Governor",src:o(3705).A+"",width:"835",height:"586"})}),"\n",(0,n.jsx)(t.p,{children:"In order to use the governor you must first configure the ESC/Motor features. This defines the motor telemetry (for RPM feedback) and gear ratios for your helicopter which lets the flight controller know how fast the rotor is spinning."}),"\n",(0,n.jsx)(t.h3,{id:"handover-throttle",children:"Handover throttle"}),"\n",(0,n.jsx)(t.p,{children:"The throttle level above which the governor is activated. Below this level the input throttle is passed to the ESC, above this level the governor is enabled and the input throttle is used for calculating the target headspeed. The motor must be able to start below this throttle level."}),"\n",(0,n.jsx)(t.h3,{id:"startup-time",children:"Startup time"}),"\n",(0,n.jsx)(t.p,{children:"startup time is applied before the RPM is detected.\nSome ESCs require really slow startup ramp to be gentle.\nSome other ESCs need really rapid start for starting at all."}),"\n",(0,n.jsx)(t.h3,{id:"spoolup-time",children:"Spoolup time"}),"\n",(0,n.jsx)(t.p,{children:"This is an acceleration limit (in seconds) used for spooling up (After a valid rpm signal has been detected). It sets the acceleration limit that is equivalent to total time for spooling up from zero to full headspeed. For example, with a value of 10 and full headspeed of 3000rpm, the main rotor would take 10s to reach 3000rpm."}),"\n",(0,n.jsx)(t.h3,{id:"tracking-time",children:"Tracking time"}),"\n",(0,n.jsx)(t.p,{children:"Acceleration limit (in seconds) for normal operation. This occurs when the requested headspeed command changes while the governor is in the active state. This parameter limits the rpm change speed (acceleration). For example, when set to a value of 10 (which is 10s to ramp 0-100%). If hovering in Normal mode at 1500rpm (50% throttle) and then switching to Idl3 of 3000rpm (100% throttle) the Governor would ramp over 5s. Typical value is 5..20."}),"\n",(0,n.jsx)(t.h3,{id:"recovery-time",children:"Recovery time"}),"\n",(0,n.jsx)(t.p,{children:"Acceleration limit (in seconds) for error recovery. When the governor is recovering from lost headspeed or lost throttle signal, this is the max acceleration for the following (faster) spoolup."}),"\n",(0,n.jsx)(t.h3,{id:"autorotation-bailout-time",children:"Autorotation bailout time"}),"\n",(0,n.jsx)(t.p,{children:"Acceleration limit (in seconds) for autorotation bailout. When the governor is spooling up from autorotation, it is limiting the spoolup speed with this parameter."}),"\n",(0,n.jsx)(t.h3,{id:"autorotation-timeout",children:"Autorotation timeout"}),"\n",(0,n.jsx)(t.p,{children:"In the autorotation state, if high throttle returns before this timeout expires, the spoolup is done with bailout acceleration. After the expiration, the governor enters the idle state, and any subsequent spoolup is slow."}),"\n",(0,n.jsx)(t.h3,{id:"autorotation-minimum-entry-time",children:"Autorotation minimum entry time"}),"\n",(0,n.jsx)(t.p,{children:"Minimum flight time before Autorotation can be engaged."}),"\n",(0,n.jsx)(t.h3,{id:"zero-throttle-timeout",children:"Zero Throttle Timeout"}),"\n",(0,n.jsx)(t.p,{children:"When the throttle input (from receiver) goes to zero, the governor enters an intermediate state where it is waiting for the throttle to return. If the throttle returns before this timeout expires, the spoolup is done with the recovery acceleration. If the timeout expires, the governor enters off state, and any future spoolup will be slow."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"The purpose of this feature is to allow fast spoolup in case the throttle cut (hold) is hit accidentally.\nIf high throttle is returned very soon after, the heli will spool up quickly and hopefully keep on flying. Unit is 0.1s.\nTypical value is 5..50."})}),"\n",(0,n.jsx)(t.h3,{id:"headspeed-signal-timeout",children:"Headspeed Signal Timeout"}),"\n",(0,n.jsx)(t.p,{children:"If the headspeed rpm signal is lost, the governor enters an intermediate state where it is waiting for the rpm signal to return. If the signal returns before this timeout expires, the spoolup is done with the recovery acceleration. If the timeout expires, the governor enters the idle state, and any future spoolup would happen with the default (slow) spoolup acceleration. Unit is 0.1s. Typical value is 5..50."}),"\n",(0,n.jsx)(t.h3,{id:"headspeed-filter-cutoff-hz",children:"Headspeed Filter Cutoff [Hz]"}),"\n",(0,n.jsx)(t.p,{children:"The inputs to the governor must be clean from excess noise. The RPM input is filtered with a BIQUAD filter, with the frequency cutoffs set by these variables."}),"\n",(0,n.jsx)(t.h3,{id:"battery-voltage-filter-cutoff-hz",children:"Battery Voltage Filter Cutoff [Hz]"}),"\n",(0,n.jsx)(t.p,{children:"The inputs to the governor must be clean from excess noise. The Battery voltage input is filtered with a BIQUAD filter, with the frequency cutoffs set by these variables."}),"\n",(0,n.jsx)(t.h3,{id:"tta-bandwidth-hz",children:"TTA Bandwidth [Hz]"}),"\n",(0,n.jsx)(t.p,{children:"Cutoff for the TTA (Torque Tail Assist) lowpass filter."}),"\n",(0,n.jsx)(t.h3,{id:"precomp-bandwidth-hz",children:"Precomp Bandwidth [Hz]"}),"\n",(0,n.jsx)(t.p,{children:"Cutoff for the cyclic/collective precompensation lowpass filter."}),"\n",(0,n.jsx)(t.h2,{id:"governor-profiles-settings",children:"Governor Profiles Settings"}),"\n",(0,n.jsx)(t.p,{children:"These settings are set from the Profiles Tab. If desired, individual Profiles can be configured via the Adjustments Tab. This enables individual flight modes to have separate tuning and configuration set for each flight mode. (similar to 'Bank Switching')."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Governor",src:o(33791).A+"",width:"813",height:"309"})}),"\n",(0,n.jsx)(t.h3,{id:"full-headspeed",children:"Full Headspeed"}),"\n",(0,n.jsx)(t.p,{children:"This is the highest headspeed that the governor would ever try to maintain, when the throttle input is at 100%."}),"\n",(0,n.jsx)(t.h3,{id:"maximum-throttle",children:"Maximum Throttle"}),"\n",(0,n.jsx)(t.p,{children:"Maximum output throttle the governor is allowed to use."}),"\n",(0,n.jsx)(t.h3,{id:"pid-master-gain",children:"PID Master Gain"}),"\n",(0,n.jsx)(t.p,{children:"Master gain multiplier"}),"\n",(0,n.jsx)(t.h3,{id:"p-gain",children:"P-Gain"}),"\n",(0,n.jsx)(t.p,{children:"Governor Proportional gain"}),"\n",(0,n.jsx)(t.h3,{id:"i-gain",children:"I-Gain"}),"\n",(0,n.jsx)(t.p,{children:"Governor Integral gain"}),"\n",(0,n.jsx)(t.h3,{id:"d-gain",children:"D-Gain"}),"\n",(0,n.jsx)(t.p,{children:"Governor Derivative gain"}),"\n",(0,n.jsx)(t.h3,{id:"feedforward-gain",children:"Feedforward-Gain"}),"\n",(0,n.jsx)(t.p,{children:"Governor Feedforward gain"}),"\n",(0,n.jsx)(t.h3,{id:"yaw-precompensation",children:"Yaw precompensation"}),"\n",(0,n.jsx)(t.p,{children:"Yaw precompensation weight. Determines how much yaw is mixed into the feed forward. This helps the governor to maintain the headspeed proactively. Usually 20..100"}),"\n",(0,n.jsx)(t.h3,{id:"cyclic-precompensation",children:"Cyclic precompensation"}),"\n",(0,n.jsx)(t.p,{children:"Cyclic precompensation weight. Increasing the cyclic increases load on the rotor and causes it to slow down. This setting determines how much cyclic is mixed into the governor feedforward. This helps the governor maintain the headspeed proactively (i.e. increase power to the motor so it does not slow down). Usually 20..100"}),"\n",(0,n.jsx)(t.h3,{id:"collective-precompensation",children:"Collective precompensation"}),"\n",(0,n.jsx)(t.p,{children:"Collective precompensation weight. Increasing the collective increases load on the rotor and causes it to slow down. This setting determines how much collective is mixed into the governor feedfoward. This helps the governor maintain the headspeed proactively (i.e. increase power to the motor so it does not slow down). Usually 20..100"}),"\n",(0,n.jsx)(t.h2,{id:"governor-throttle-input-ranges",children:"Governor throttle input ranges"}),"\n",(0,n.jsx)(t.p,{children:"With the governor feature activated, the transmitter throttle channel is controlling the governor, rather than the ESC directly."}),"\n",(0,n.jsx)(t.p,{children:"Depending in which range the throttle value falls into, the governor will function differently."}),"\n",(0,n.jsxs)(t.h3,{id:"throttle--0",children:["THROTTLE < ",(0,n.jsx)(t.em,{children:"0%"})]}),"\n",(0,n.jsx)(t.p,{children:"This throttle value indicates throttle hold (throttle cut) condition. It's guaranteed that all motors are stopped immediately. The throttle output from the governor is guaranteed to be zero."}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsx)(t.p,{children:"Make sure your transmitter is sending a value lower than 0% when throttle hold is activated."}),(0,n.jsx)(t.p,{children:"Throttle hold SHOULD NOT be used for autorotation."})]}),"\n",(0,n.jsxs)(t.h3,{id:"0--throttle--5",children:[(0,n.jsx)(t.em,{children:"0%"})," < THROTTLE < ",(0,n.jsx)(t.em,{children:"5%"})]}),"\n",(0,n.jsx)(t.p,{children:"In this range, the governor is in idle or autorotation state, and the output is zero - the main motor is stopped."}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsx)(t.p,{children:"Motorized tail is fully active in this range."}),(0,n.jsx)(t.p,{children:"If you want to perform autorotation with the main motor stopped, use this range!"})]}),"\n",(0,n.jsxs)(t.h3,{id:"5--throttle--handover-throttle",children:[(0,n.jsx)(t.em,{children:"5%"})," < THROTTLE < ",(0,n.jsx)(t.em,{children:"Handover throttle%"})]}),"\n",(0,n.jsx)(t.p,{children:"In this range, the governor is in idle or autorotation state, and the output is in 0% - H.Thr%, increasing linearly through the range."}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsx)(t.p,{children:"Motorized tail is fully active in this range."}),(0,n.jsx)(t.p,{children:"If you want to perform autorotation with the main motor running, use this range!"})]}),"\n",(0,n.jsxs)(t.h3,{id:"handover-throttle--throttle--100",children:[(0,n.jsx)(t.em,{children:"Handover throttle%"})," < THROTTLE < ",(0,n.jsx)(t.em,{children:"100%"})]}),"\n",(0,n.jsxs)(t.p,{children:["In this range, the governor is in active state, and the requested rpm is ",(0,n.jsx)(t.em,{children:"Handover throttle%..100%"})," of the gov_headspeed."]}),"\n",(0,n.jsx)(t.h2,{id:"governor-state",children:"Governor State"}),"\n",(0,n.jsx)(t.p,{children:"The governor internal state can be observed in the blackbox log. It is a good indication on what the governor is trying to do."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"OFF"})," The governor is disabled and the throttle output is zero."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"IDLE"})," The governor is idle, because the input throttle is in the idle range. The throttle output is as described above - 0..10%."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"SPOOLING_UP"})," The input throttle has transitioned from low to high, and the governor is spooling up slowly."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"ACTIVE"})," The governor has reached the target headspeed and is actively maintaining it."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"LOST_THROTTLE"})," The throttle signal has suddenly dropped from high to low. If the throttle returns quickly, a recovery spoolup is performed. This state is for convenience, when the pilot accidentally hits throttle hold, and then realizes the mistake."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"LOST_HEADSPEED"})," The RPM input signal is lost. The governor will wait for a little while for the signal to return, before spooling down. It the signal returns quickly, a recovery spoolup is performed."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"RECOVERY"})," The governor is performing a recovery spoolup after one of the conditions above."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"AUTOROTATION"})," The throttle has dropped from high to the autorotation range. The governor is expecting the throttle to return once the autorotation has been performed. Once the throttle return, the governor moves to the state below."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"AUTOROTATION_BAILOUT"})," Throttle has returned while in AutoRotation state, and the governor is performing an autorotation bailout."]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},15953:(e,t,o)=>{o.d(t,{A:()=>n});const n="data:image/png;base64,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"},32121:(e,t,o)=>{o.d(t,{A:()=>n});const n="data:image/png;base64,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"},3705:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/governor-features-92cc09677a9b428b350046fc49ff8d64.png"},33791:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/governor-settings-08f93ed336b14ccb57aa986b880fe5b8.png"},28453:(e,t,o)=>{o.d(t,{R:()=>A,x:()=>s});var n=o(96540);const r={},i=n.createContext(r);function A(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:A(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);