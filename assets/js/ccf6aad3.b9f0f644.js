"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[1800],{64256:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"Wiki/Tutorial-Setup/led-strip-quick-start","title":"Getting started with LEDs","description":"Introduction to LED strips","source":"@site/versioned_docs/version-2.0.0/Wiki/Tutorial-Setup/led-strip-quick-start.md","sourceDirName":"Wiki/Tutorial-Setup","slug":"/Wiki/Tutorial-Setup/led-strip-quick-start","permalink":"/docs/2.0.0/Wiki/Tutorial-Setup/led-strip-quick-start","draft":false,"unlisted":false,"editUrl":"https://github.com/pkaig/Rotorflight-Docs/tree/main/versioned_docs/version-2.0.0/Wiki/Tutorial-Setup/led-strip-quick-start.md","tags":[],"version":"2.0.0","sidebarPosition":170,"frontMatter":{"sidebar_position":170},"sidebar":"tutorialSidebar","previous":{"title":"Profile (Bank) switching example","permalink":"/docs/2.0.0/Wiki/Tutorial-Setup/Profile-switching-example"},"next":{"title":"Using Stability Modes","permalink":"/docs/2.0.0/Wiki/Tutorial-Setup/Using-Stability-Modes-Example"}}');var r=t(74848),s=t(28453);const l={sidebar_position:170},o="Getting started with LEDs",a={},d=[{value:"Introduction to LED strips",id:"introduction-to-led-strips",level:2},{value:"Create a LED_STRIP resource",id:"create-a-led_strip-resource",level:2},{value:"Testing hardware",id:"testing-hardware",level:2},{value:"The <em>LED Strip</em> tab",id:"the-led-strip-tab",level:2},{value:"Define the 3 LEDs",id:"define-the-3-leds",level:3},{value:"Create the green navigation light",id:"create-the-green-navigation-light",level:3},{value:"Create the red anti-collision light",id:"create-the-red-anti-collision-light",level:3},{value:"Create the white landing light",id:"create-the-white-landing-light",level:3},{value:"Molex PicoBlade bus",id:"molex-picoblade-bus",level:2},{value:"Building the PicoBlade bus",id:"building-the-picoblade-bus",level:3},{value:"Remapping to LED_STRIP",id:"remapping-to-led_strip",level:2},{value:"Radiomaster Nexus",id:"radiomaster-nexus",level:3},{value:"FlyDragon F722",id:"flydragon-f722",level:3},{value:"1. Remap SCL to LED_STRIP",id:"1-remap-scl-to-led_strip",level:4},{value:"2. Remap SDA to LED_STRIP",id:"2-remap-sda-to-led_strip",level:4},{value:"3. Remap RPM-S to LED_STRIP",id:"3-remap-rpm-s-to-led_strip",level:4},{value:"4. Remap F.Port to LED_STRIP",id:"4-remap-fport-to-led_strip",level:4},{value:"Flywing HELI405",id:"flywing-heli405",level:3}];function h(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"getting-started-with-leds",children:"Getting started with LEDs"})}),"\n",(0,r.jsx)(i.h2,{id:"introduction-to-led-strips",children:"Introduction to LED strips"}),"\n",(0,r.jsx)(i.p,{children:"Rotorflight supports up to 32 individually addressable WS2811/2812 RGB LEDs. You can control them with just one data pin, and set the brightness and color of each LED individually. LEDs can have different functions, for example display a color, visualize warnings or battery state, or just blink. This walk-through will show you how to set up a simple LED strip with some scale lights."}),"\n",(0,r.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/GB6hGU9MKpI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",allowfullscreen:!0}),"\n",(0,r.jsxs)(i.p,{children:["Each LED has 4 pins: 5V, ground, ",(0,r.jsx)(i.em,{children:"data in"})," and ",(0,r.jsx)(i.em,{children:"data out"}),". The FC should be connected to ",(0,r.jsx)(i.em,{children:"data in"})," of the first LED. ",(0,r.jsx)(i.em,{children:"Data out"})," of the first LED should be connected to ",(0,r.jsx)(i.em,{children:"data in"})," of the second LED. And the ",(0,r.jsx)(i.em,{children:"data out"})," of the second LED should again be connected to ",(0,r.jsx)(i.em,{children:"data in"})," of the third LED. And so on."]}),"\n",(0,r.jsx)(i.p,{children:"There are ready made WS2812 strips with 30, 60 or 144 LEDs per meter. That's great for testing or maybe on the boom for some night flying, but there are also more conventional WS2811 5mm and 8mm LEDs available. Those are more suited for scale lighting."}),"\n",(0,r.jsxs)(i.p,{children:["There are quite a lot of tutorials/videos for Betaflight, and Rotorflight supports all the functions of Betaflight 4.3. In addition, Rotorflight supports ",(0,r.jsx)(i.em,{children:"scale lights"}),", with which you can program anti-collision lights, strobe lights or landing lights. Here we'll focus on those scale lights."]}),"\n",(0,r.jsx)(i.h2,{id:"create-a-led_strip-resource",children:"Create a LED_STRIP resource"}),"\n",(0,r.jsx)(i.p,{children:"In order to use a LED strip, you'll need a LED_STRIP resource to which you can connect your LEDs. A LED_STRIP resource requires a timer and DMA should be enabled."}),"\n",(0,r.jsxs)(i.p,{children:["Some FCs might already have a LED_STRIP resource and then you can just use that pin. But if you want to use another pin on your FC, or if your FC doesn't have a LED_STRIP resource, you'll need to do some ",(0,r.jsx)(i.a,{href:"#remapping-to-led_strip",children:"resource remapping"}),". For this walk-through I'm going to use the Radiomaster Nexus, so go to the CLI and ",(0,r.jsx)(i.a,{href:"#radiomaster-nexus",children:"remap TX6 to LED_STRIP"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["Now go to the ",(0,r.jsx)(i.em,{children:"Configuration"})," tab and enable ",(0,r.jsx)(i.em,{children:"LED_STRIP"})," under ",(0,r.jsx)(i.em,{children:"Features"}),". Press ",(0,r.jsx)(i.em,{children:"Save and reboot"}),"."]}),"\n",(0,r.jsx)(i.h2,{id:"testing-hardware",children:"Testing hardware"}),"\n",(0,r.jsx)(i.p,{children:"A piece of LED strip is ideal for testing. I'll be using one with 3 LEDs connected to Port B on the Nexus. Wiring is simple: just connect 5V, ground and LED_STRIP (formerly known as TX6) to the strip."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Wiring",src:t(59004).A+"",width:"3377",height:"1545"})}),"\n",(0,r.jsxs)(i.h2,{id:"the-led-strip-tab",children:["The ",(0,r.jsx)(i.em,{children:"LED Strip"})," tab"]}),"\n",(0,r.jsxs)(i.p,{children:["Now go to the ",(0,r.jsx)(i.em,{children:"LED Strip"})," tab. Note that this tab will only be visible if you have the ",(0,r.jsx)(i.em,{children:"LED_STRIP"})," feature enabled under ",(0,r.jsx)(i.em,{children:"Configuration"}),"."]}),"\n",(0,r.jsx)(i.p,{children:"We're going to define:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"a green navigation light that also functions as a strobe"}),"\n",(0,r.jsx)(i.li,{children:"a red ACL light that slowly blinks"}),"\n",(0,r.jsx)(i.li,{children:"a white landing light that can be operated from the TX."}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Connect the Nexus to the Configurator using USB. 5V will now be available on port A, B and C. If you're using many LEDs, consider using an external 5V power supply."}),"\n",(0,r.jsx)(i.h3,{id:"define-the-3-leds",children:"Define the 3 LEDs"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Click on ",(0,r.jsx)(i.em,{children:"Wire Ordering Mode"}),". The 16x16 matrix will become greenish."]}),"\n",(0,r.jsx)(i.li,{children:"Select a square in the matrix. A '0' should now be displayed in it."}),"\n",(0,r.jsxs)(i.li,{children:["Select ",(0,r.jsx)(i.em,{children:"Color"})," as ",(0,r.jsx)(i.em,{children:"Function"})]}),"\n",(0,r.jsx)(i.li,{children:"Now select another square in the matrix. A '1' should now be displayed in it."}),"\n",(0,r.jsxs)(i.li,{children:["Select ",(0,r.jsx)(i.em,{children:"Color"})," again as ",(0,r.jsx)(i.em,{children:"Function"})]}),"\n",(0,r.jsx)(i.li,{children:"Select yet another square in the matrix. A '2' should now be displayed in it."}),"\n",(0,r.jsxs)(i.li,{children:["Select ",(0,r.jsx)(i.em,{children:"Color"})," as ",(0,r.jsx)(i.em,{children:"Function"})]}),"\n",(0,r.jsxs)(i.li,{children:["Press ",(0,r.jsx)(i.em,{children:"Save"})]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Your screen might now look like this, although the actual position of the three squares will likely be different:"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"LED Profile Adjustments",src:t(81086).A+"",width:"1225",height:"782"})}),"\n",(0,r.jsx)(i.h3,{id:"create-the-green-navigation-light",children:"Create the green navigation light"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Select the square with '0' in it"}),"\n",(0,r.jsx)(i.li,{children:"In the color palette, left-click on green. The LED should now light up."}),"\n",(0,r.jsxs)(i.li,{children:["If you find the LED too bright, adjust the overall LED brightness under ",(0,r.jsx)(i.em,{children:"LED Strip Global Settings"})]}),"\n",(0,r.jsxs)(i.li,{children:["Enable ",(0,r.jsx)(i.em,{children:"Blink"})," and set one checkmark. The LED wil now shortly turn off (=black)."]}),"\n",(0,r.jsx)(i.li,{children:"In the color palette, right-click on white. Now the LED will shortly flash a white light."}),"\n",(0,r.jsxs)(i.li,{children:["Press ",(0,r.jsx)(i.em,{children:"Save"})]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"create-the-red-anti-collision-light",children:"Create the red anti-collision light"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Select the square with '1' in it"}),"\n",(0,r.jsxs)(i.li,{children:["Select ",(0,r.jsx)(i.em,{children:"Blink"})," and set some check marks next to each other"]}),"\n",(0,r.jsx)(i.li,{children:"Right-click the red color. The second LED should now flash red"}),"\n",(0,r.jsxs)(i.li,{children:["Press ",(0,r.jsx)(i.em,{children:"Save"})]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"create-the-white-landing-light",children:"Create the white landing light"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Select the square with '2' in it"}),"\n",(0,r.jsxs)(i.li,{children:["Enable the ",(0,r.jsx)(i.em,{children:"Fade to alt color"})," feature"]}),"\n",(0,r.jsx)(i.li,{children:"Left-click white. The LED should now light up"}),"\n",(0,r.jsxs)(i.li,{children:["Select ",(0,r.jsx)(i.em,{children:"Status Alt"})," next to ",(0,r.jsx)(i.em,{children:"Profile"}),", under ",(0,r.jsx)(i.em,{children:"LED Strip Global Settings"}),". The LED should now dim."]}),"\n",(0,r.jsxs)(i.li,{children:["Set ",(0,r.jsx)(i.em,{children:"Fade rate"})," to 10 to dim slowly"]}),"\n",(0,r.jsxs)(i.li,{children:["Press ",(0,r.jsx)(i.em,{children:"Save"})]}),"\n",(0,r.jsxs)(i.li,{children:["You can use ",(0,r.jsx)(i.em,{children:"Adjustments"})," to switch the LED profile from your transmitter. It might look something like:"]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"LED Profile Adjustments",src:t(57256).A+"",width:"1622",height:"445"})}),"\n",(0,r.jsx)(i.p,{children:"Here's another video showing the techniques used in this Quick Start on a Walkera 4F200LM, for which I used two 3mm and four 5mm LEDs."}),"\n",(0,r.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/72LsrcEJEK0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",allowfullscreen:!0}),"\n",(0,r.jsx)(i.h2,{id:"molex-picoblade-bus",children:"Molex PicoBlade bus"}),"\n",(0,r.jsx)(i.p,{children:"Here's a simple bus system for connecting individual LEDs using 4-pin Molex PicoBlade connectors. It can be used for connecting individual WS2811/2812 LEDs as well as conventional LEDs."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"C189 PicoBlade Bus",src:t(10019).A+"",width:"567",height:"643"})}),"\n",(0,r.jsxs)(i.p,{children:["Conventional LEDs should come after the WS2811/2812 LEDs since they don't support ",(0,r.jsx)(i.em,{children:"data in"})," and ",(0,r.jsx)(i.em,{children:"data out"}),". Also, you can use 2-pin PicoBlade connectors for them."]}),"\n",(0,r.jsx)(i.h3,{id:"building-the-picoblade-bus",children:"Building the PicoBlade bus"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Glue some 4-pin PicoBlade headers together"}),"\n",(0,r.jsx)(i.li,{children:"Bend the pins for 5V and GND so they form two rails"}),"\n",(0,r.jsx)(i.li,{children:"Carefully solder the 5V and GND rails"}),"\n",(0,r.jsxs)(i.li,{children:["Bend the ",(0,r.jsx)(i.em,{children:"data out"})," pin of the first header to the ",(0,r.jsx)(i.em,{children:"data in"})," pin of the second header and repeat"]}),"\n",(0,r.jsxs)(i.li,{children:["Solder the ",(0,r.jsx)(i.em,{children:"data out"})," pins to the next ",(0,r.jsx)(i.em,{children:"data in"})," pins"]}),"\n",(0,r.jsxs)(i.li,{children:["Connect wires for 5V, GND and ",(0,r.jsx)(i.em,{children:"data in"})," to the bus"]}),"\n",(0,r.jsx)(i.li,{children:"Isolate the bottom of the bus with hot glue or epoxy"}),"\n",(0,r.jsx)(i.li,{children:"Connect the bus to the FC"}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Building a PicoBlade Bus",src:t(55903).A+"",width:"2525",height:"2937"})}),"\n",(0,r.jsx)(i.h2,{id:"remapping-to-led_strip",children:"Remapping to LED_STRIP"}),"\n",(0,r.jsx)(i.h3,{id:"radiomaster-nexus",children:"Radiomaster Nexus"}),"\n",(0,r.jsx)(i.p,{children:"On the Nexus Port B is the best choice for creating a LED_STRIP resource. Port B provides RX6 and TX6 by default. To remap TX6 to LED_STRIP, enter the following in the CLI:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"resource SERIAL_TX 6 NONE\nresource LED_STRIP 1 C07\ntimer C07 AF3    # TIM8, default is also AF3\ndma pin C07 0    # default is NONE\nsave\n"})}),"\n",(0,r.jsx)(i.p,{children:"Note that although we remapped TX6, RX6 is still there and functional."}),"\n",(0,r.jsx)(i.p,{children:"Alternatively you can remap RX6 to LED_STRIP:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"resource SERIAL_RX 6 NONE\nresource LED_STRIP 1 C06\ntimer C06 AF3    # TIM8, default is also AF3\ndma pin C06 0    # default is NONE\nsave\n"})}),"\n",(0,r.jsx)(i.h3,{id:"flydragon-f722",children:"FlyDragon F722"}),"\n",(0,r.jsxs)(i.p,{children:["The FlyDragon F722 has a built in LED 'strip' with just one LED. It has the ",(0,r.jsx)(i.a,{href:"/docs/2.0.0/Wiki/Configurator/LED-Strip#warning",children:"Warning overlay"})," enabled by default and is connected to the FC using pin B08. However, the ",(0,r.jsx)(i.em,{children:"data out"})," pin of that LED isn't exposed, so you have to remap some other port to LED_STRIP to make use of your own LEDs. There are several options: SCL, SDA, RPM-S and F.Port. SCL and SDA are located on the GPS port, which also provides 5V. Using SCL or SDA is preferred because they can have their own dedicated timer."]}),"\n",(0,r.jsx)(i.h4,{id:"1-remap-scl-to-led_strip",children:"1. Remap SCL to LED_STRIP"}),"\n",(0,r.jsx)(i.p,{children:"To remap SCL to LED_STRIP, enter the following in the CLI:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"resource I2C_SCL 1 NONE\nresource LED_STRIP 1 B06   # default is B08\ntimer B06 AF2              # TIM4\ndma pin B06 0\nsave\n"})}),"\n",(0,r.jsx)(i.h4,{id:"2-remap-sda-to-led_strip",children:"2. Remap SDA to LED_STRIP"}),"\n",(0,r.jsx)(i.p,{children:"To remap SDA to LED_STRIP, enter the following in the CLI:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"resource I2C_SDA 1 NONE\nresource LED_STRIP 1 B07   # default is B08\ntimer B07 AF2              # TIM4\ndma pin B07 0\nsave\n"})}),"\n",(0,r.jsx)(i.h4,{id:"3-remap-rpm-s-to-led_strip",children:"3. Remap RPM-S to LED_STRIP"}),"\n",(0,r.jsx)(i.p,{children:"RPM-S isn't connected to VBec and supplies 5V, which is all right for a couple of LEDs."}),"\n",(0,r.jsx)(i.p,{children:"To remap RPM-S to LED_STRIP on the FlyDragon V2 or V2.2, enter the following in the CLI:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"resource LED_STRIP 1 A15   # default is B08\ntimer A15 AF1              # TIM1\ndma pin A15 0\nsave\n"})}),"\n",(0,r.jsx)(i.p,{children:"To remap RPM-S to LED_STRIP on the FlyDragon V1, enter the following in the CLI:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"resource LED_STRIP 1 A08   # default is B08\ntimer A08 AF1              # TIM1\ndma pin A08 0\nsave\n"})}),"\n",(0,r.jsx)(i.h4,{id:"4-remap-fport-to-led_strip",children:"4. Remap F.Port to LED_STRIP"}),"\n",(0,r.jsx)(i.p,{children:"Be careful: F.Port uses VBec, which might be too high for your LEDs. Most LEDs require 5V."}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"resource LED_STRIP 1 A02   # default is B08\ntimer A02 AF1              # TIM2\ndma pin A02 0\n# Change motor 1 timer from TIM2 to TIM5\ntimer A00 AF2\nsave\n"})}),"\n",(0,r.jsx)(i.h3,{id:"flywing-heli405",children:"Flywing HELI405"}),"\n",(0,r.jsx)(i.p,{children:"You can remap SBUS to LED_STRIP on the Flywing HELI405. To do this, enter the following in the CLI:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"resource SERIAL_RX 2 NONE\nresource LED_STRIP 1 A03\ntimer A03 AF2\ndma pin A03 1\nsave\n"})})]})}function c(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},57256:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/ledstrip-adjustments-4595f17e8a84421e5fc23f417049eb09.png"},10019:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/ledstrip-c189-044253338cadc996a4c3731638aa6373.jpg"},81086:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/ledstrip-grid-94f8d398f658a24c7776fbc07633894c.png"},55903:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/ledstrip-picobus-e2fef9b4e949d14653426846263a4157.jpg"},59004:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/ledstrip-wiring-cc684e7e35799fac3c28f55937c931c3.jpg"},28453:(e,i,t)=>{t.d(i,{R:()=>l,x:()=>o});var n=t(96540);const r={},s=n.createContext(r);function l(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);