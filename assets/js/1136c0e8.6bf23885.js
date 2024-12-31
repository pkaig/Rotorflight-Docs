"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[4408],{78585:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"configurator/tabs/mixer","title":"Mixer","description":"This section will describe the configuration of the mixer and calibrate the rotor blade angles.","source":"@site/docs/configurator/tabs/mixer.md","sourceDirName":"configurator/tabs","slug":"/configurator/tabs/mixer","permalink":"/docs/next/configurator/tabs/mixer","draft":false,"unlisted":false,"editUrl":"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/configurator/tabs/mixer.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Servos","permalink":"/docs/next/configurator/tabs/servos"},"next":{"title":"Gyro","permalink":"/docs/next/configurator/tabs/gyro"}}');var l=i(74848),r=i(28453);const n={},c="Mixer",s={},a=[{value:"Main Rotor Settings",id:"main-rotor-settings",level:3},{value:"Swashplate type",id:"swashplate-type",level:4},{value:"Rotor direction",id:"rotor-direction",level:4},{value:"Elevator Control direction",id:"elevator-control-direction",level:4},{value:"Aileron Control direction",id:"aileron-control-direction",level:4},{value:"Collective Control direction",id:"collective-control-direction",level:4},{value:"Swashplate Link Trims",id:"swashplate-link-trims",level:2},{value:"Main Rotor Geometry",id:"main-rotor-geometry",level:2},{value:"Cyclic and Collective calibration",id:"cyclic-and-collective-calibration",level:4},{value:"Collective geometry correction",id:"collective-geometry-correction",level:4},{value:"Collective blade pitch limit",id:"collective-blade-pitch-limit",level:4},{value:"Cyclic blade pitch limit",id:"cyclic-blade-pitch-limit",level:4},{value:"Total blade pitch limit",id:"total-blade-pitch-limit",level:4},{value:"Swashplate phase angle",id:"swashplate-phase-angle",level:4},{value:"Tail Rotor Settings",id:"tail-rotor-settings",level:2},{value:"Tail rotor type",id:"tail-rotor-type",level:3},{value:"Variable Pitch",id:"variable-pitch",level:4},{value:"Motorized",id:"motorized",level:4},{value:"Bidirectional",id:"bidirectional",level:4},{value:"Yaw Control Direction",id:"yaw-control-direction",level:3},{value:"Center Trim For Tail Rotor [\xb0]",id:"center-trim-for-tail-rotor-",level:3}];function h(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"mixer",children:"Mixer"})}),"\n",(0,l.jsx)(t.p,{children:"This section will describe the configuration of the mixer and calibrate the rotor blade angles."}),"\n",(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsxs)(t.p,{children:["Before proceeding with setting up the mixer, make sure that ",(0,l.jsx)(t.a,{href:"/docs/next/configurator/tabs/configuration#board-and-sensor-alignment",children:"gyro sensor alignment"})," is correct."]})}),"\n",(0,l.jsx)(t.h3,{id:"main-rotor-settings",children:"Main Rotor Settings"}),"\n",(0,l.jsx)(t.h4,{id:"swashplate-type",children:"Swashplate type"}),"\n",(0,l.jsx)(t.p,{children:"Choose the swash type that suits your helicopter."}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Mixer Tab",src:i(15282).A+"",width:"842",height:"201"})}),"\n",(0,l.jsx)(t.h4,{id:"rotor-direction",children:"Rotor direction"}),"\n",(0,l.jsx)(t.p,{children:"Choose the direction of rotation for the main rotor. This is looking down from on the top of the rotor."}),"\n",(0,l.jsx)(t.h4,{id:"elevator-control-direction",children:"Elevator Control direction"}),"\n",(0,l.jsxs)(t.p,{children:["With the helicopter servos powered, tilt the heli forward (pitch down). The swash should now pitch up towards the tail of the helicopter. If this is not the case, change the control direction from ",(0,l.jsx)(t.strong,{children:"[NORMAL]"})," to ",(0,l.jsx)(t.strong,{children:"[REVERSE]"}),"."]}),"\n",(0,l.jsx)(t.h4,{id:"aileron-control-direction",children:"Aileron Control direction"}),"\n",(0,l.jsxs)(t.p,{children:["Roll the heli to the right (right Aileron). The swash should pitch towards the left. If this is not the case, change the control direction from ",(0,l.jsx)(t.strong,{children:"[NORMAL]"})," to ",(0,l.jsx)(t.strong,{children:"[REVERSE]"}),"."]}),"\n",(0,l.jsx)(t.h4,{id:"collective-control-direction",children:"Collective Control direction"}),"\n",(0,l.jsxs)(t.p,{children:["Push the collective stick forward (Increasing collective). The swash should now rise up towards the rotor head (to increase collective). If the swash goes down change the control direction from ",(0,l.jsx)(t.strong,{children:"[NORMAL]"})," to ",(0,l.jsx)(t.strong,{children:"[REVERSE]"}),"."]}),"\n",(0,l.jsx)(t.h2,{id:"swashplate-link-trims",children:"Swashplate Link Trims"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Mixer Tab",src:i(46911).A+"",width:"801",height:"170"})}),"\n",(0,l.jsx)(t.p,{children:"Ideally the swashplate should be set with all 3 Collective servos at 90 deg while the blade angle is at 0 degrees. Some helicopters have fixed length swash links which means in order to get 0 degrees for blade centre the servo arms need to be raised or lowered. Use these link trims to provide that function."}),"\n",(0,l.jsx)(t.p,{children:"For helicopters with adjustable swash links this should remain at 0 and the links adjusted to get a 0 degree blade angle."}),"\n",(0,l.jsx)(t.h2,{id:"main-rotor-geometry",children:"Main Rotor Geometry"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Mixer Tab",src:i(86677).A+"",width:"840",height:"259"})}),"\n",(0,l.jsx)(t.h4,{id:"cyclic-and-collective-calibration",children:"Cyclic and Collective calibration"}),"\n",(0,l.jsxs)(t.p,{children:["These settings are used to calibrate the mixer so that the blade angle matches the commanded angle for both the cyclic and collective. See the ",(0,l.jsx)(t.a,{href:"../setup/setup-mixer.mdx#calibrating-the-mixer",children:"calibration procedure"})," for details."]}),"\n",(0,l.jsx)(t.h4,{id:"collective-geometry-correction",children:"Collective geometry correction"}),"\n",(0,l.jsx)(t.p,{children:"Adjust until the collective positive and negative deflections are equal."}),"\n",(0,l.jsx)(t.h4,{id:"collective-blade-pitch-limit",children:"Collective blade pitch limit"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:'Ideally, one should use this option to set the maximum allowed collective blade pitch. Therefore, if the person wants to change the collective pitch down the line, they should be able to adjust in the "rates" page confidently without worrying about servos binding.'}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Practically, for most 3D helicopters, this is set to the maximum collective you will ever need (15-16deg) if the helicopter is physically capable of doing it"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.h4,{id:"cyclic-blade-pitch-limit",children:"Cyclic blade pitch limit"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"This is NOT the same as the cyclic calibration on other FBLs (it's NOT the 8 deg cyclic on vbar for example)"}),"\n",(0,l.jsx)(t.li,{children:"This is designed to let the FBL know how much cyclic travel the helicopter is PHYSICALLY capable of"}),"\n",(0,l.jsx)(t.li,{children:"Usually adjust it so that around zero collective there is no physical interference anywhere. You might want to temporally increase the I gains (to around 200) on cyclic and move the cyclic stick to find the limits. MAKE SURE TO TURN THEM BACK"}),"\n",(0,l.jsx)(t.li,{children:"Some 550+ size helicopter might be able to achieve 16+ degree of cyclic pitch, you could set it to the absolutely maximum but it is advised to limit around 16degree since practically it should never hit that much cyclic."}),"\n"]}),"\n",(0,l.jsx)(t.h4,{id:"total-blade-pitch-limit",children:"Total blade pitch limit"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"This is probably the most difficult limit to understand and setup properly"}),"\n",(0,l.jsx)(t.li,{children:"To find the total blade pitch limit, make sure the collective blade pitch limit and cyclic blade pitch limit are set up correctly. You might want to use the I-gain trick mentioned above"}),"\n",(0,l.jsx)(t.li,{children:"Set the collective pitch to max, then move the cyclic. Increase the limit until either there is a physical limit or the fish-eye bearing (the ball) in the center of the swash drops at the max cyclic due to one servo reaching its limit."}),"\n",(0,l.jsx)(t.li,{children:"Repeat at lowest collective pitch"}),"\n",(0,l.jsx)(t.li,{children:"You could also increase cyclic servo travels to gain more total blade pitch. However, nothing should be interfering"}),"\n",(0,l.jsx)(t.li,{children:"Double check that theres NO binding or interference at ANY combination of collective and cyclic in their whole range."}),"\n",(0,l.jsx)(t.li,{children:"Make sure to turn the I-gains back to default in the end if the I-gain trick is used."}),"\n"]}),"\n",(0,l.jsx)(t.h4,{id:"swashplate-phase-angle",children:"Swashplate phase angle"}),"\n",(0,l.jsx)(t.p,{children:"Usually set it per manufacture recommendation. One could consider if theres bobbling that could not be resolved from changing the cross coupling gains or it is known that the rotor head design requires a non-zero phase angle."}),"\n",(0,l.jsx)(t.h2,{id:"tail-rotor-settings",children:"Tail Rotor Settings"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Mixer Tab",src:i(87745).A+"",width:"844",height:"236"})}),"\n",(0,l.jsx)(t.h3,{id:"tail-rotor-type",children:"Tail rotor type"}),"\n",(0,l.jsx)(t.h4,{id:"variable-pitch",children:"Variable Pitch"}),"\n",(0,l.jsx)(t.p,{children:"This is a variable pitch tail controlled by a servo (Servo#4)."}),"\n",(0,l.jsx)(t.h4,{id:"motorized",children:"Motorized"}),"\n",(0,l.jsx)(t.p,{children:"The tail has separate motor(M2) for controlling the yaw."}),"\n",(0,l.jsx)(t.h4,{id:"bidirectional",children:"Bidirectional"}),"\n",(0,l.jsx)(t.p,{children:"Motorized tail operating in bi-directional mode."}),"\n",(0,l.jsx)(t.h3,{id:"yaw-control-direction",children:"Yaw Control Direction"}),"\n",(0,l.jsxs)(t.p,{children:["With the helicopter tail servo powered, move Rudder stick to the right. The tail slider should move to the inside (toward the tail case). If this is not the case, change the control direction from ",(0,l.jsx)(t.strong,{children:"[NORMAL]"})," to ",(0,l.jsx)(t.strong,{children:"[REVERSE]"}),"."]}),"\n",(0,l.jsx)(t.h3,{id:"center-trim-for-tail-rotor-",children:"Center Trim For Tail Rotor [\xb0]"}),"\n",(0,l.jsx)(t.p,{children:"Set tail rotor trim for zero yaw command."})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},86677:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/mixer-main-rotor-geometry-bc36b8d8663c3f23982020de6c5662ab.png"},15282:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/mixer-main-rotor-settings-880ad842dc90ce7327a264c5b617cbdb.png"},46911:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/mixer-swashplate-link-trims-c1b640fb1c2173d674bdf743031e5f04.png"},87745:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/mixer-tail-rotor-settings-81501a3a65d5402828e2ef9b2c0dcc6a.png"},28453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>c});var o=i(96540);const l={},r=o.createContext(l);function n(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:n(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);