"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[4750],{90109:(M,N,D)=>{D.r(N),D.d(N,{assets:()=>e,contentTitle:()=>I,default:()=>A,frontMatter:()=>g,metadata:()=>j,toc:()=>x});const j=JSON.parse('{"id":"configurator/tabs/servos","title":"Servos","description":"Open the Servos tab and confirm that you have the correct number of servos. If this is not the case, please confirm you have installed the correct firmware (either \'M\' motorized or servo tail) or if you are using a drone FC that your Remapping  is correct.","source":"@site/docs/configurator/tabs/servos.mdx","sourceDirName":"configurator/tabs","slug":"/configurator/tabs/servos","permalink":"/docs/next/configurator/tabs/servos","draft":false,"unlisted":false,"editUrl":"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/configurator/tabs/servos.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Motors","permalink":"/docs/next/configurator/tabs/motors"},"next":{"title":"Mixer","permalink":"/docs/next/configurator/tabs/mixer"}}');var z=D(74848),T=D(28453);const g={},I="Servos",e={},x=[{value:"Servo Numbering",id:"servo-numbering",level:2},{value:"Direct",id:"direct",level:3},{value:"CCPM",id:"ccpm",level:3},{value:"Fixed pitch",id:"fixed-pitch",level:3},{value:"90deg L",id:"90deg-l",level:4},{value:"90deg V",id:"90deg-v",level:4},{value:"Servo Override",id:"servo-override",level:2},{value:"Servo Configuration parameters",id:"servo-configuration-parameters",level:2},{value:"Center",id:"center",level:3},{value:"Min and Max",id:"min-and-max",level:3},{value:"Scale Neg and Scale Pos",id:"scale-neg-and-scale-pos",level:3},{value:"Rate",id:"rate",level:3},{value:"Speed",id:"speed",level:3},{value:"Reverse",id:"reverse",level:3},{value:"Geo Cor",id:"geo-cor",level:3}];function i(M){const N={a:"a",admonition:"admonition",br:"br",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",p:"p",...(0,T.R)(),...M.components};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(N.header,{children:(0,z.jsx)(N.h1,{id:"servos",children:"Servos"})}),"\n",(0,z.jsxs)(N.p,{children:["Open the Servos tab and confirm that you have the correct number of servos. If this is not the case, please confirm you have installed the correct firmware (either 'M' motorized or servo tail) or if you are using a drone FC that your ",(0,z.jsx)(N.a,{href:"../setup/Remapping.mdx",children:"Remapping"}),"  is correct."]}),"\n",(0,z.jsx)(N.p,{children:(0,z.jsx)(N.img,{alt:"Servo Tab",src:D(6937).A+"",width:"959",height:"335"})}),"\n",(0,z.jsx)(N.h2,{id:"servo-numbering",children:"Servo Numbering"}),"\n",(0,z.jsx)(N.h3,{id:"direct",children:"Direct"}),"\n",(0,z.jsxs)(N.p,{children:["For helicopters that uses mechanical mixing, where the ",(0,z.jsx)(N.em,{children:"Pitch"}),", ",(0,z.jsx)(N.em,{children:"Roll"}),", and ",(0,z.jsx)(N.em,{children:"Collective"})," movements are each controlled by a dedicated servo by means of a complex series of linkages and levers from the servos up to the swashplate."]}),"\n",(0,z.jsxs)(N.p,{children:["Servo 1 - Pitch",(0,z.jsx)(N.br,{}),"\n","Servo 2 - Roll",(0,z.jsx)(N.br,{}),"\n","Servo 3 - Collective",(0,z.jsx)(N.br,{}),"\n","Servo 4 - Rudder"]}),"\n",(0,z.jsx)(N.h3,{id:"ccpm",children:"CCPM"}),"\n",(0,z.jsx)(N.p,{children:"For 120, 135 and 140 deg CCPM swashplates.\nLooking from the tail towards the nose of the helicopter:"}),"\n",(0,z.jsxs)(N.p,{children:["Servo 1 - Pitch (inline with the centerline of the helicopter)",(0,z.jsx)(N.br,{}),"\n","Servo 2 - Left side",(0,z.jsx)(N.br,{}),"\n","Servo 3 - Right side",(0,z.jsx)(N.br,{}),"\n","Servo 4 - Rudder"]}),"\n",(0,z.jsx)(N.p,{children:(0,z.jsx)(N.img,{alt:"Servo Tab",src:D(78594).A+"",width:"480",height:"420"})}),"\n",(0,z.jsx)(N.h3,{id:"fixed-pitch",children:"Fixed pitch"}),"\n",(0,z.jsx)(N.h4,{id:"90deg-l",children:"90deg L"}),"\n",(0,z.jsxs)(N.p,{children:["Servo 1 - Pitch (inline with the centerline of the helicopter)",(0,z.jsx)(N.br,{}),"\n","Servo 2 - Side servo",(0,z.jsx)(N.br,{}),"\n","Servo 3 - Rudder"]}),"\n",(0,z.jsx)(N.p,{children:(0,z.jsx)(N.img,{alt:"Servo Tab",src:D(92425).A+"",width:"240",height:"420"})}),"\n",(0,z.jsx)(N.h4,{id:"90deg-v",children:"90deg V"}),"\n",(0,z.jsxs)(N.p,{children:["Servo 1 - Left side",(0,z.jsx)(N.br,{}),"\n","Servo 2 - Right side",(0,z.jsx)(N.br,{}),"\n","Servo 3 - Rudder"]}),"\n",(0,z.jsx)(N.p,{children:(0,z.jsx)(N.img,{alt:"Servo Tab",src:D(72963).A+"",width:"240",height:"420"})}),"\n",(0,z.jsx)(N.h2,{id:"servo-override",children:"Servo Override"}),"\n",(0,z.jsx)(N.p,{children:"The toggle at the bottom of this page enables the servo overrides. The purpose of this is so that each servo can be driven by the slider to calibrate the range and center points. Beside each servo is an individual override."}),"\n",(0,z.jsx)(N.p,{children:"The servo override slider scale is in degrees"}),"\n",(0,z.jsx)(N.p,{children:(0,z.jsx)(N.img,{alt:"Servo Tab",src:D(56587).A+"",width:"1609",height:"433"})}),"\n",(0,z.jsx)(N.h2,{id:"servo-configuration-parameters",children:"Servo Configuration parameters"}),"\n",(0,z.jsx)(N.p,{children:(0,z.jsx)(N.img,{alt:"Servo Tab",src:D(64596).A+"",width:"999",height:"140"})}),"\n",(0,z.jsx)(N.h3,{id:"center",children:"Center"}),"\n",(0,z.jsx)(N.p,{children:"In general this will be 1520us for cyclic servos and 760us for tail servos."}),"\n",(0,z.jsx)(N.h3,{id:"min-and-max",children:"Min and Max"}),"\n",(0,z.jsx)(N.p,{children:"These are hard limits to prevent servos binding or moving outside of their mechanical limits. If a servo is commanded to a point that is greater or less than it is capable it will buzz and likely burn out. These settings should be used to limit the command."}),"\n",(0,z.jsx)(N.h3,{id:"scale-neg-and-scale-pos",children:"Scale Neg and Scale Pos"}),"\n",(0,z.jsx)(N.p,{children:"Scales the negative and positive direction of the servo to match the commanded angle."}),"\n",(0,z.jsx)(N.h3,{id:"rate",children:"Rate"}),"\n",(0,z.jsx)(N.p,{children:"This is the servo frequency. This will be specified by the manufacturer. A large proportion of servos suitable for cyclic operate at 333Hz."}),"\n",(0,z.jsxs)(N.admonition,{type:"note",children:[(0,z.jsxs)(N.p,{children:["For Rotorflight 2 it is recommended that tail servos are assigned to a different timer than cyclic servos (see ",(0,z.jsx)(N.a,{href:"../setup/Remapping.mdx",children:"Remapping"}),")."]}),(0,z.jsx)(N.p,{children:"This means that tail servos can be set to a different frequency (i.e. faster)."})]}),"\n",(0,z.jsx)(N.h3,{id:"speed",children:"Speed"}),"\n",(0,z.jsx)(N.p,{children:'Servo Speed Equalization. The aim of this parameter is to remove the collective "bobbing" when fast elevator changes are applied.'}),"\n",(0,z.jsx)(N.p,{children:"The bobbing happens because the elevator servo has to move double distance vs. the aileron servos, when elevator position is changed.\nIf the change is faster than the servos can go, the aileron servos will reach the target sooner than the elevator servo, causing the swash to jump slightly in the process."}),"\n",(0,z.jsx)(N.p,{children:"To tune this value increase the speed value (it's actually ms/60\xb0, like in the servo datasheet) until the bobbing is not visible any more. It should be always ok to use the value from the servo datasheet if unsure."}),"\n",(0,z.jsx)(N.h3,{id:"reverse",children:"Reverse"}),"\n",(0,z.jsx)(N.p,{children:"Toggle for forward or reverse servo direction."}),"\n",(0,z.jsx)(N.h3,{id:"geo-cor",children:"Geo Cor"}),"\n",(0,z.jsx)(N.p,{children:"Geometry Correction. Servos are rotary, so at high angles this results in smaller swashplate movement for each degree of servo movement. Geometry correction accounts for this and provides better control at high angles (e.g. 3D flight)."}),"\n",(0,z.jsx)(N.p,{children:"In order to use this feature it is important to set the servo arm at 90\xb0 (with servo center) and calibrating the servo scale."})]})}function A(M={}){const{wrapper:N}={...(0,T.R)(),...M.components};return N?(0,z.jsx)(N,{...M,children:(0,z.jsx)(i,{...M})}):i(M)}},92425:(M,N,D)=>{D.d(N,{A:()=>j});const j="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjQyMCIgdmlld0JveD0iMCAwIDI0MCA0MjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNDAiIGhlaWdodD0iNDIwIiBmaWxsPSJ3aGl0ZSIvPgo8ZyBvcGFjaXR5PSIwLjIiPgo8cGF0aCBkPSJNMTMwLjQzNSAyMDcuODkxQzEzNC41ODkgMjA3Ljg5MSAxMzguNDQ0IDIwNS43OTUgMTQwLjczOCAyMDIuMzI5QzE1NC4yMDEgMTgxLjk5NSAxNjcuMzg3IDE0OC4xOTQgMTY3LjM4NyAxMTUuMDU4QzE2Ny4zOTUgNjIuNzI2OCAxMzAuMzIzIDggMTE5LjU3OSA4QzEwOC44MzYgOCA3MS43NjQyIDYyLjcyNjggNzEuNzY0MiAxMTUuMDU4QzcxLjc2NDIgMTQ4LjIwMSA4NC45NTA3IDE4Mi4wMDMgOTguNDEzNyAyMDIuMzI5QzEwMC43MDcgMjA1Ljc5NSAxMDQuNTcgMjA3Ljg5MSAxMDguNzE2IDIwNy44OTFIMTMwLjQyOEgxMzAuNDM1WiIgZmlsbD0iIzFGOTZDMiIvPgo8L2c+CjxwYXRoIGQ9Ik0xMTcuOTQ0IDExMC45N0wxMDYuNTk1IDEzOS43NzFDMTA1LjkxNSAxNDEuNDkzIDEwOC4wMTQgMTQyLjk2OCAxMDkuMzk3IDE0MS43MzNMMTE4LjQxNCAxMzMuNzE1QzExOS4wNzkgMTMzLjEyMyAxMjAuMDggMTMzLjEyMyAxMjAuNzQ1IDEzMy43MTVMMTI5Ljc2MyAxNDEuNzMzQzEzMS4xNDUgMTQyLjk2IDEzMy4yNDQgMTQxLjQ5MyAxMzIuNTY1IDEzOS43NzFMMTIxLjIxNiAxMTAuOTdDMTIwLjYzMyAxMDkuNDg4IDExOC41MzQgMTA5LjQ4OCAxMTcuOTQ0IDExMC45N1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMTkuNTggMTc3Ljk0NUM5MS41NjI5IDE3Ny45NDUgNjguNzc1OSAxNTUuMTExIDY4Ljc3NTkgMTI3LjAzNkM2OC43NzU5IDk4Ljk2MTggOTEuNTYyOSA3Ni4xMjc4IDExOS41OCA3Ni4xMjc4QzE0Ny41OTYgNzYuMTI3OCAxNzAuMzgzIDk4Ljk2MTggMTcwLjM4MyAxMjcuMDM2QzE3MC4zODMgMTU1LjExMSAxNDcuNTk2IDE3Ny45NDUgMTE5LjU4IDE3Ny45NDVaTTExOS41OCA4My42MTQzQzk1LjY4NjkgODMuNjE0MyA3Ni4yNDcgMTAzLjA5NCA3Ni4yNDcgMTI3LjAzNkM3Ni4yNDcgMTUwLjk3OSA5NS42ODY5IDE3MC40NTkgMTE5LjU4IDE3MC40NTlDMTQzLjQ3MiAxNzAuNDU5IDE2Mi45MTIgMTUwLjk3OSAxNjIuOTEyIDEyNy4wMzZDMTYyLjkxMiAxMDMuMDk0IDE0My40NzIgODMuNjE0MyAxMTkuNTggODMuNjE0M1oiIGZpbGw9IiMxRjk2QzIiLz4KPGcgb3BhY2l0eT0iMC4yIj4KPHBhdGggZD0iTTEzOC4yNTggMzA2LjcxNEMxMzYuNjA2IDMwNi43MTQgMTM1LjI2OSAzMDguMDU0IDEzNS4yNjkgMzA5LjcwOVYzNTAuMTM2SDEyNS41NTdWMjA3Ljg5MUgxMTMuNjAzVjM3Mi41OTZDMTEzLjYwMyAzNzUuOTA1IDExNi4yNzcgMzc4LjU4NSAxMTkuNTggMzc4LjU4NUMxMjIuODgyIDM3OC41ODUgMTI1LjU1NyAzNzUuOTA1IDEyNS41NTcgMzcyLjU5NlYzNjguODUzSDEzNS4yNjlWNDA4LjUzMkMxMzUuMjY5IDQxMC4xODYgMTM2LjYwNiA0MTEuNTI2IDEzOC4yNTggNDExLjUyNkMxMzkuOTA5IDQxMS41MjYgMTQxLjI0NiA0MTAuMTg2IDE0MS4yNDYgNDA4LjUzMlYzMDkuNzA5QzE0MS4yNDYgMzA4LjA1NCAxMzkuOTA5IDMwNi43MTQgMTM4LjI1OCAzMDYuNzE0WiIgZmlsbD0iIzFGOTZDMiIvPgo8L2c+CjxwYXRoIGQ9Ik0xMzAuODEgOTIuNjgyMkwxMzAuODEgNTkuNDIwNkMxMzAuODEgNTguMDgzOCAxMjkuNzI0IDU3IDEyOC4zODUgNTdMMTEwLjAyOCA1N0MxMDguNjg4IDU3IDEwNy42MDIgNTguMDgzOCAxMDcuNjAyIDU5LjQyMDZMMTA3LjYwMiA5Mi42ODIyQzEwNy42MDIgOTQuMDE5MSAxMDguNjg4IDk1LjEwMjggMTEwLjAyOCA5NS4xMDI4TDEyOC4zODUgOTUuMTAyOEMxMjkuNzI0IDk1LjEwMjggMTMwLjgxIDk0LjAxOTEgMTMwLjgxIDkyLjY4MjJaIiBmaWxsPSIjMUExQTQwIi8+CjxwYXRoIGQ9Ik01NC45NzM2IDEzOC42NTZMODguMjM1MSAxMzguNjU2Qzg5LjU3MiAxMzguNjU2IDkwLjY1NTggMTM3LjU3IDkwLjY1NTggMTM2LjIzTDkwLjY1NTggMTE3Ljg3M0M5MC42NTU4IDExNi41MzMgODkuNTcyIDExNS40NDcgODguMjM1MSAxMTUuNDQ3TDU0Ljk3MzYgMTE1LjQ0N0M1My42MzY3IDExNS40NDcgNTIuNTUyOSAxMTYuNTMzIDUyLjU1MjkgMTE3Ljg3M0w1Mi41NTI5IDEzNi4yM0M1Mi41NTI5IDEzNy41NyA1My42MzY3IDEzOC42NTYgNTQuOTczNiAxMzguNjU2WiIgZmlsbD0iIzFBMUE0MCIvPgo8cGF0aCBkPSJNMTE0LjcyOCA4M1Y4MC4xNDRIMTE4LjU0NFY2OC45MTJIMTE1LjMyOFY2Ni43MjhDMTE3LjEwNCA2Ni4zOTIgMTE4LjMyOCA2NS45MzYgMTE5LjQ1NiA2NS4yNEgxMjIuMDcyVjgwLjE0NEgxMjUuNDA4VjgzSDExNC43MjhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNjUuMTk2MSAxMzQuMjQ2VjEzMi4yMDZDNzAuMDIwMSAxMjcuODg2IDcyLjg3NjEgMTI0LjU1IDcyLjg3NjEgMTIxLjgxNEM3Mi44NzYxIDEyMC4wMTQgNzEuODkyMSAxMTguOTM0IDcwLjIxMjEgMTE4LjkzNEM2OC45MTYxIDExOC45MzQgNjcuODM2MSAxMTkuNzc0IDY2Ljk0ODEgMTIwLjc1OEw2NS4wMjgxIDExOC44MzhDNjYuNjYwMSAxMTcuMTEgNjguMjQ0MSAxMTYuMTUgNzAuNjY4MSAxMTYuMTVDNzQuMDI4MSAxMTYuMTUgNzYuMjYwMSAxMTguMzEgNzYuMjYwMSAxMjEuNjIyQzc2LjI2MDEgMTI0LjgzOCA3My41OTYxIDEyOC4yOTQgNzAuMzU2MSAxMzEuNDYyQzcxLjI0NDEgMTMxLjM2NiA3Mi40MjAxIDEzMS4yNyA3My4yMzYxIDEzMS4yN0g3Ny4xMDAxVjEzNC4yNDZINjUuMTk2MVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="},72963:(M,N,D)=>{D.d(N,{A:()=>j});const j="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjQyMCIgdmlld0JveD0iMCAwIDI0MCA0MjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNDAiIGhlaWdodD0iNDIwIiBmaWxsPSJ3aGl0ZSIvPgo8ZyBvcGFjaXR5PSIwLjIiPgo8cGF0aCBkPSJNMTMwLjQzNSAyMDcuODkxQzEzNC41ODkgMjA3Ljg5MSAxMzguNDQ0IDIwNS43OTUgMTQwLjczOCAyMDIuMzI5QzE1NC4yMDEgMTgxLjk5NSAxNjcuMzg3IDE0OC4xOTQgMTY3LjM4NyAxMTUuMDU4QzE2Ny4zOTUgNjIuNzI2OCAxMzAuMzIzIDggMTE5LjU3OSA4QzEwOC44MzYgOCA3MS43NjQyIDYyLjcyNjggNzEuNzY0MiAxMTUuMDU4QzcxLjc2NDIgMTQ4LjIwMSA4NC45NTA3IDE4Mi4wMDMgOTguNDEzNyAyMDIuMzI5QzEwMC43MDcgMjA1Ljc5NSAxMDQuNTcgMjA3Ljg5MSAxMDguNzE2IDIwNy44OTFIMTMwLjQyOEgxMzAuNDM1WiIgZmlsbD0iIzFGOTZDMiIvPgo8L2c+CjxwYXRoIGQ9Ik0xMTcuOTQ0IDExMC45N0wxMDYuNTk1IDEzOS43NzFDMTA1LjkxNSAxNDEuNDkzIDEwOC4wMTQgMTQyLjk2OCAxMDkuMzk3IDE0MS43MzNMMTE4LjQxNCAxMzMuNzE1QzExOS4wNzkgMTMzLjEyMyAxMjAuMDggMTMzLjEyMyAxMjAuNzQ1IDEzMy43MTVMMTI5Ljc2MyAxNDEuNzMzQzEzMS4xNDUgMTQyLjk2IDEzMy4yNDQgMTQxLjQ5MyAxMzIuNTY1IDEzOS43NzFMMTIxLjIxNiAxMTAuOTdDMTIwLjYzMyAxMDkuNDg4IDExOC41MzQgMTA5LjQ4OCAxMTcuOTQ0IDExMC45N1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMTkuNTggMTc3Ljk0NUM5MS41NjI5IDE3Ny45NDUgNjguNzc1OSAxNTUuMTExIDY4Ljc3NTkgMTI3LjAzNkM2OC43NzU5IDk4Ljk2MTggOTEuNTYyOSA3Ni4xMjc4IDExOS41OCA3Ni4xMjc4QzE0Ny41OTYgNzYuMTI3OCAxNzAuMzgzIDk4Ljk2MTggMTcwLjM4MyAxMjcuMDM2QzE3MC4zODMgMTU1LjExMSAxNDcuNTk2IDE3Ny45NDUgMTE5LjU4IDE3Ny45NDVaTTExOS41OCA4My42MTQzQzk1LjY4NjkgODMuNjE0MyA3Ni4yNDcgMTAzLjA5NCA3Ni4yNDcgMTI3LjAzNkM3Ni4yNDcgMTUwLjk3OSA5NS42ODY5IDE3MC40NTkgMTE5LjU4IDE3MC40NTlDMTQzLjQ3MiAxNzAuNDU5IDE2Mi45MTIgMTUwLjk3OSAxNjIuOTEyIDEyNy4wMzZDMTYyLjkxMiAxMDMuMDk0IDE0My40NzIgODMuNjE0MyAxMTkuNTggODMuNjE0M1oiIGZpbGw9IiMxRjk2QzIiLz4KPGcgb3BhY2l0eT0iMC4yIj4KPHBhdGggZD0iTTEzOC4yNTggMzA2LjcxNEMxMzYuNjA2IDMwNi43MTQgMTM1LjI2OSAzMDguMDU0IDEzNS4yNjkgMzA5LjcwOVYzNTAuMTM2SDEyNS41NTdWMjA3Ljg5MUgxMTMuNjAzVjM3Mi41OTZDMTEzLjYwMyAzNzUuOTA1IDExNi4yNzcgMzc4LjU4NSAxMTkuNTggMzc4LjU4NUMxMjIuODgyIDM3OC41ODUgMTI1LjU1NyAzNzUuOTA1IDEyNS41NTcgMzcyLjU5NlYzNjguODUzSDEzNS4yNjlWNDA4LjUzMkMxMzUuMjY5IDQxMC4xODYgMTM2LjYwNiA0MTEuNTI2IDEzOC4yNTggNDExLjUyNkMxMzkuOTA5IDQxMS41MjYgMTQxLjI0NiA0MTAuMTg2IDE0MS4yNDYgNDA4LjUzMlYzMDkuNzA5QzE0MS4yNDYgMzA4LjA1NCAxMzkuOTA5IDMwNi43MTQgMTM4LjI1OCAzMDYuNzE0WiIgZmlsbD0iIzFGOTZDMiIvPgo8L2c+CjxwYXRoIGQ9Ik05OC42NDIgMTAwLjIzMUw3NS4xMjI1IDc2LjcxMTdDNzQuMTc3MiA3NS43NjYzIDcyLjY0MyA3NS43Njc5IDcxLjY5NTcgNzYuNzE1Mkw1OC43MTUzIDg5LjY5NTZDNTcuNzY4IDkwLjY0MjkgNTcuNzY2NCA5Mi4xNzcxIDU4LjcxMTcgOTMuMTIyNUw4Mi4yMzEyIDExNi42NDJDODMuMTc2NSAxMTcuNTg3IDg0LjcxMDggMTE3LjU4NiA4NS42NTggMTE2LjYzOEw5OC42Mzg1IDEwMy42NThDOTkuNTg1NyAxMDIuNzExIDk5LjU4NzMgMTAxLjE3NiA5OC42NDIgMTAwLjIzMVoiIGZpbGw9IiMxQTFBNDAiLz4KPHBhdGggZD0iTTE1OC40NTMgMTE3LjE5M0wxODEuOTcyIDkzLjY3MzVDMTgyLjkxOCA5Mi43MjgyIDE4Mi45MTYgOTEuMTkzOSAxODEuOTY5IDkwLjI0NjZMMTY4Ljk4OCA3Ny4yNjYyQzE2OC4wNDEgNzYuMzE5IDE2Ni41MDcgNzYuMzE3NCAxNjUuNTYyIDc3LjI2MjdMMTQyLjA0MiAxMDAuNzgyQzE0MS4wOTcgMTAxLjcyNyAxNDEuMDk4IDEwMy4yNjIgMTQyLjA0NiAxMDQuMjA5TDE1NS4wMjYgMTE3LjE4OUMxNTUuOTczIDExOC4xMzcgMTU3LjUwOCAxMTguMTM4IDE1OC40NTMgMTE3LjE5M1oiIGZpbGw9IiMxQTFBNDAiLz4KPHBhdGggZD0iTTc0LjIyNjggMTA1VjEwMi4xNDRINzguMDQyOFY5MC45MTJINzQuODI2OFY4OC43MjhDNzYuNjAyOCA4OC4zOTIgNzcuODI2OCA4Ny45MzYgNzguOTU0OCA4Ny4yNEg4MS41NzA4VjEwMi4xNDRIODQuOTA2OFYxMDVINzQuMjI2OFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNTYuMjkxIDEwNVYxMDIuOTZDMTYxLjExNSA5OC42NCAxNjMuOTcxIDk1LjMwNCAxNjMuOTcxIDkyLjU2OEMxNjMuOTcxIDkwLjc2OCAxNjIuOTg3IDg5LjY4OCAxNjEuMzA3IDg5LjY4OEMxNjAuMDExIDg5LjY4OCAxNTguOTMxIDkwLjUyOCAxNTguMDQzIDkxLjUxMkwxNTYuMTIzIDg5LjU5MkMxNTcuNzU1IDg3Ljg2NCAxNTkuMzM5IDg2LjkwNCAxNjEuNzYzIDg2LjkwNEMxNjUuMTIzIDg2LjkwNCAxNjcuMzU1IDg5LjA2NCAxNjcuMzU1IDkyLjM3NkMxNjcuMzU1IDk1LjU5MiAxNjQuNjkxIDk5LjA0OCAxNjEuNDUxIDEwMi4yMTZDMTYyLjMzOSAxMDIuMTIgMTYzLjUxNSAxMDIuMDI0IDE2NC4zMzEgMTAyLjAyNEgxNjguMTk1VjEwNUgxNTYuMjkxWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="},78594:(M,N,D)=>{D.d(N,{A:()=>j});const j="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgwIiBoZWlnaHQ9IjQyMCIgdmlld0JveD0iMCAwIDQ4MCA0MjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0ODAiIGhlaWdodD0iNDIwIiBmaWxsPSJ3aGl0ZSIvPgo8ZyBvcGFjaXR5PSIwLjIiPgo8cGF0aCBkPSJNMTA1LjkzNCAyMDcuODkxQzExMC4wODggMjA3Ljg5MSAxMTMuOTQzIDIwNS43OTUgMTE2LjIzNyAyMDIuMzI5QzEyOS43IDE4MS45OTUgMTQyLjg4NyAxNDguMTk0IDE0Mi44ODcgMTE1LjA1OEMxNDIuODk0IDYyLjcyNjggMTA1LjgyMiA4IDk1LjA3ODkgOEM4NC4zMzU0IDggNDcuMjYzNSA2Mi43MjY4IDQ3LjI2MzUgMTE1LjA1OEM0Ny4yNjM1IDE0OC4yMDEgNjAuNDUwMSAxODIuMDAzIDczLjkxMzEgMjAyLjMyOUM3Ni4yMDY4IDIwNS43OTUgODAuMDY5MyAyMDcuODkxIDg0LjIxNTggMjA3Ljg5MUgxMDUuOTI3SDEwNS45MzRaIiBmaWxsPSIjMUY5NkMyIi8+CjwvZz4KPHBhdGggZD0iTTkzLjQ0MjcgMTEwLjk3TDgyLjA5NCAxMzkuNzcxQzgxLjQxNDIgMTQxLjQ5MyA4My41MTM2IDE0Mi45NjggODQuODk1NyAxNDEuNzMzTDkzLjkxMzQgMTMzLjcxNUM5NC41NzgzIDEzMy4xMjMgOTUuNTc5NSAxMzMuMTIzIDk2LjI0NDQgMTMzLjcxNUwxMDUuMjYyIDE0MS43MzNDMTA2LjY0NCAxNDIuOTYgMTA4Ljc0NCAxNDEuNDkzIDEwOC4wNjQgMTM5Ljc3MUw5Ni43MTUxIDExMC45N0M5Ni4xMzIzIDEwOS40ODggOTQuMDMyOSAxMDkuNDg4IDkzLjQ0MjcgMTEwLjk3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTk1LjA3ODkgMTc3Ljk0NUM2Ny4wNjIxIDE3Ny45NDUgNDQuMjc1MSAxNTUuMTExIDQ0LjI3NTEgMTI3LjAzNkM0NC4yNzUxIDk4Ljk2MTggNjcuMDYyMSA3Ni4xMjc4IDk1LjA3ODkgNzYuMTI3OEMxMjMuMDk2IDc2LjEyNzggMTQ1Ljg4MyA5OC45NjE4IDE0NS44ODMgMTI3LjAzNkMxNDUuODgzIDE1NS4xMTEgMTIzLjA5NiAxNzcuOTQ1IDk1LjA3ODkgMTc3Ljk0NVpNOTUuMDc4OSA4My42MTQzQzcxLjE4NjIgODMuNjE0MyA1MS43NDYzIDEwMy4wOTQgNTEuNzQ2MyAxMjcuMDM2QzUxLjc0NjMgMTUwLjk3OSA3MS4xODYyIDE3MC40NTkgOTUuMDc4OSAxNzAuNDU5QzExOC45NzIgMTcwLjQ1OSAxMzguNDEyIDE1MC45NzkgMTM4LjQxMiAxMjcuMDM2QzEzOC40MTIgMTAzLjA5NCAxMTguOTcyIDgzLjYxNDMgOTUuMDc4OSA4My42MTQzWiIgZmlsbD0iIzFGOTZDMiIvPgo8ZyBvcGFjaXR5PSIwLjIiPgo8cGF0aCBkPSJNMTEzLjc1NyAzMDYuNzE0QzExMi4xMDYgMzA2LjcxNCAxMTAuNzY4IDMwOC4wNTQgMTEwLjc2OCAzMDkuNzA5VjM1MC4xMzZIMTAxLjA1NlYyMDcuODkxSDg5LjEwMTlWMzcyLjU5NkM4OS4xMDE5IDM3NS45MDUgOTEuNzc2NiAzNzguNTg1IDk1LjA3ODggMzc4LjU4NUM5OC4zODExIDM3OC41ODUgMTAxLjA1NiAzNzUuOTA1IDEwMS4wNTYgMzcyLjU5NlYzNjguODUzSDExMC43NjhWNDA4LjUzMkMxMTAuNzY4IDQxMC4xODYgMTEyLjEwNiA0MTEuNTI2IDExMy43NTcgNDExLjUyNkMxMTUuNDA4IDQxMS41MjYgMTE2Ljc0NSA0MTAuMTg2IDExNi43NDUgNDA4LjUzMlYzMDkuNzA5QzExNi43NDUgMzA4LjA1NCAxMTUuNDA4IDMwNi43MTQgMTEzLjc1NyAzMDYuNzE0WiIgZmlsbD0iIzFGOTZDMiIvPgo8L2c+CjxwYXRoIGQ9Ik0xMDYuMzEgOTIuNjgyMkwxMDYuMzEgNTkuNDIwNkMxMDYuMzEgNTguMDgzOCAxMDUuMjI0IDU3IDEwMy44ODQgNTdMODUuNTI2OCA1N0M4NC4xODcyIDU3IDgzLjEwMTIgNTguMDgzOCA4My4xMDEyIDU5LjQyMDZMODMuMTAxMiA5Mi42ODIyQzgzLjEwMTIgOTQuMDE5MSA4NC4xODcyIDk1LjEwMjggODUuNTI2OCA5NS4xMDI4TDEwMy44ODQgOTUuMTAyOEMxMDUuMjI0IDk1LjEwMjggMTA2LjMxIDk0LjAxOTEgMTA2LjMxIDkyLjY4MjJaIiBmaWxsPSIjMUExQTQwIi8+CjxwYXRoIGQ9Ik0xMzMuNzYxIDEyOC43MzNMMTE3LjEzIDE1Ny41OThDMTE2LjQ2MiAxNTguNzU4IDExNi44NTkgMTYwLjI0MiAxMTguMDE3IDE2MC45MTFMMTMzLjg4MSAxNzAuMDlDMTM1LjAzOSAxNzAuNzYgMTM2LjUyIDE3MC4zNjIgMTM3LjE4OCAxNjkuMjAyTDE1My44MTkgMTQwLjMzN0MxNTQuNDg3IDEzOS4xNzcgMTU0LjA5MSAxMzcuNjk0IDE1Mi45MzMgMTM3LjAyNEwxMzcuMDY4IDEyNy44NDVDMTM1LjkxIDEyNy4xNzYgMTM0LjQzIDEyNy41NzMgMTMzLjc2MSAxMjguNzMzWiIgZmlsbD0iIzFBMUE0MCIvPgo8cGF0aCBkPSJNNTMuNDYwNSAxMjguNDg5TDM3LjU5NTYgMTM3LjY2N0MzNi40Mzc4IDEzOC4zMzcgMzYuMDQxMiAxMzkuODIxIDM2LjcwOTYgMTQwLjk4MUw1My4zNDA0IDE2OS44NDZDNTQuMDA4OCAxNzEuMDA2IDU1LjQ4OTIgMTcxLjQwMyA1Ni42NDcgMTcwLjczNEw3Mi41MTIgMTYxLjU1NUM3My42Njk3IDE2MC44ODUgNzQuMDY2NCAxNTkuNDAyIDczLjM5OCAxNTguMjQyTDU2Ljc2NzIgMTI5LjM3N0M1Ni4wOTg4IDEyOC4yMTcgNTQuNjE4MyAxMjcuODE5IDUzLjQ2MDUgMTI4LjQ4OVoiIGZpbGw9IiMxQTFBNDAiLz4KPGcgb3BhY2l0eT0iMC4yIj4KPHBhdGggZD0iTTQwNS41MjcgMjA3Ljg5MUM0MDkuNjgxIDIwNy44OTEgNDEzLjUzNiAyMDUuNzk1IDQxNS44MyAyMDIuMzI5QzQyOS4yOTMgMTgxLjk5NSA0NDIuNDggMTQ4LjE5NCA0NDIuNDggMTE1LjA1OEM0NDIuNDg3IDYyLjcyNjggNDA1LjQxNSA4IDM5NC42NzIgOEMzODMuOTI4IDggMzQ2Ljg1NiA2Mi43MjY4IDM0Ni44NTYgMTE1LjA1OEMzNDYuODU2IDE0OC4yMDEgMzYwLjA0MyAxODIuMDAzIDM3My41MDYgMjAyLjMyOUMzNzUuOCAyMDUuNzk1IDM3OS42NjIgMjA3Ljg5MSAzODMuODA5IDIwNy44OTFINDA1LjUySDQwNS41MjdaIiBmaWxsPSIjMUY5NkMyIi8+CjwvZz4KPHBhdGggZD0iTTM5My4wMzYgMTEwLjk3TDM4MS42ODcgMTM5Ljc3MUMzODEuMDA3IDE0MS40OTMgMzgzLjEwNiAxNDIuOTY4IDM4NC40ODkgMTQxLjczM0wzOTMuNTA2IDEzMy43MTVDMzk0LjE3MSAxMzMuMTIzIDM5NS4xNzIgMTMzLjEyMyAzOTUuODM3IDEzMy43MTVMNDA0Ljg1NSAxNDEuNzMzQzQwNi4yMzcgMTQyLjk2IDQwOC4zMzcgMTQxLjQ5MyA0MDcuNjU3IDEzOS43NzFMMzk2LjMwOCAxMTAuOTdDMzk1LjcyNSAxMDkuNDg4IDM5My42MjYgMTA5LjQ4OCAzOTMuMDM2IDExMC45N1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zOTUuNDE5IDc2LjEyNzhDNDIzLjQzNiA3Ni4xMjc4IDQ0Ni4yMjMgOTguOTYxOCA0NDYuMjIzIDEyNy4wMzZDNDQ2LjIyMyAxNTUuMTExIDQyMy40MzYgMTc3Ljk0NSAzOTUuNDE5IDE3Ny45NDVDMzY3LjQwMiAxNzcuOTQ1IDM0NC42MTUgMTU1LjExMSAzNDQuNjE1IDEyNy4wMzZDMzQ0LjYxNSA5OC45NjE4IDM2Ny40MDIgNzYuMTI3OCAzOTUuNDE5IDc2LjEyNzhaTTM5NS40MTkgMTcwLjQ1OUM0MTkuMzEyIDE3MC40NTkgNDM4Ljc1MiAxNTAuOTc5IDQzOC43NTIgMTI3LjAzNkM0MzguNzUyIDEwMy4wOTQgNDE5LjMxMiA4My42MTQzIDM5NS40MTkgODMuNjE0M0MzNzEuNTI2IDgzLjYxNDMgMzUyLjA4NiAxMDMuMDk0IDM1Mi4wODYgMTI3LjAzNkMzNTIuMDg2IDE1MC45NzkgMzcxLjUyNiAxNzAuNDU5IDM5NS40MTkgMTcwLjQ1OVoiIGZpbGw9IiMxRjk2QzIiLz4KPGcgb3BhY2l0eT0iMC4yIj4KPHBhdGggZD0iTTQxMy4zNSAzMDYuNzE0QzQxMS42OTggMzA2LjcxNCA0MTAuMzYxIDMwOC4wNTQgNDEwLjM2MSAzMDkuNzA5VjM1MC4xMzZINDAwLjY0OVYyMDcuODkxSDM4OC42OTVWMzcyLjU5NkMzODguNjk1IDM3NS45MDUgMzkxLjM2OSAzNzguNTg1IDM5NC42NzIgMzc4LjU4NUMzOTcuOTc0IDM3OC41ODUgNDAwLjY0OSAzNzUuOTA1IDQwMC42NDkgMzcyLjU5NlYzNjguODUzSDQxMC4zNjFWNDA4LjUzMkM0MTAuMzYxIDQxMC4xODYgNDExLjY5OCA0MTEuNTI2IDQxMy4zNSA0MTEuNTI2QzQxNS4wMDEgNDExLjUyNiA0MTYuMzM4IDQxMC4xODYgNDE2LjMzOCA0MDguNTMyVjMwOS43MDlDNDE2LjMzOCAzMDguMDU0IDQxNS4wMDEgMzA2LjcxNCA0MTMuMzUgMzA2LjcxNFoiIGZpbGw9IiMxRjk2QzIiLz4KPC9nPgo8cGF0aCBkPSJNNDA3LjM5NiAxOTQuNjgyTDQwNy4zOTYgMTYxLjQyMUM0MDcuMzk2IDE2MC4wODQgNDA2LjMxIDE1OSA0MDQuOTcxIDE1OUwzODYuNjE0IDE1OUMzODUuMjc0IDE1OSAzODQuMTg4IDE2MC4wODQgMzg0LjE4OCAxNjEuNDIxTDM4NC4xODggMTk0LjY4MkMzODQuMTg4IDE5Ni4wMTkgMzg1LjI3NCAxOTcuMTAzIDM4Ni42MTQgMTk3LjEwM0w0MDQuOTcxIDE5Ny4xMDNDNDA2LjMxIDE5Ny4xMDMgNDA3LjM5NiAxOTYuMDE5IDQwNy4zOTYgMTk0LjY4MloiIGZpbGw9IiMxQTFBNDAiLz4KPHBhdGggZD0iTTM1My4zMDcgODQuODc2N0wzMzYuNjc2IDExMy43NDFDMzM2LjAwOCAxMTQuOTAyIDMzNi40MDQgMTE2LjM4NSAzMzcuNTYyIDExNy4wNTVMMzUzLjQyNyAxMjYuMjM0QzM1NC41ODUgMTI2LjkwMyAzNTYuMDY1IDEyNi41MDYgMzU2LjczNCAxMjUuMzQ2TDM3My4zNjQgOTYuNDgwOUMzNzQuMDMzIDk1LjMyMDcgMzczLjYzNiA5My44MzcyIDM3Mi40NzggOTMuMTY3NEwzNTYuNjEzIDgzLjk4ODhDMzU1LjQ1NiA4My4zMTkgMzUzLjk3NSA4My43MTY1IDM1My4zMDcgODQuODc2N1oiIGZpbGw9IiMxQTFBNDAiLz4KPHBhdGggZD0iTTQzMy44NTIgODMuMzQzOUw0MTcuOTg3IDkyLjUyMjRDNDE2LjgyOSA5My4xOTIzIDQxNi40MzMgOTQuNjc1OCA0MTcuMTAxIDk1LjgzNTlMNDMzLjczMiAxMjQuNzAxQzQzNC40IDEyNS44NjEgNDM1Ljg4MSAxMjYuMjU4IDQzNy4wMzkgMTI1LjU4OUw0NTIuOTA0IDExNi40MUM0NTQuMDYxIDExNS43NCA0NTQuNDU4IDExNC4yNTcgNDUzLjc5IDExMy4wOTdMNDM3LjE1OSA4NC4yMzE3QzQzNi40OSA4My4wNzE2IDQzNS4wMSA4Mi42NzQxIDQzMy44NTIgODMuMzQzOVoiIGZpbGw9IiMxQTFBNDAiLz4KPHBhdGggZD0iTTkwLjIyNjcgODNWODAuMTQ0SDk0LjA0MjdWNjguOTEySDkwLjgyNjdWNjYuNzI4QzkyLjYwMjcgNjYuMzkyIDkzLjgyNjcgNjUuOTM2IDk0Ljk1NDcgNjUuMjRIOTcuNTcwN1Y4MC4xNDRIMTAwLjkwN1Y4M0g5MC4yMjY3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTM5MS4yMjcgMTg4LjQ3NVYxODUuNjE5SDM5NS4wNDNWMTc0LjM4N0gzOTEuODI3VjE3Mi4yMDNDMzkzLjYwMyAxNzEuODY3IDM5NC44MjcgMTcxLjQxMSAzOTUuOTU1IDE3MC43MTVIMzk4LjU3MVYxODUuNjE5SDQwMS45MDdWMTg4LjQ3NUgzOTEuMjI3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTQ4LjY5MzMgMTU3LjE3VjE1NS4xM0M1My41MTczIDE1MC44MSA1Ni4zNzMzIDE0Ny40NzQgNTYuMzczMyAxNDQuNzM4QzU2LjM3MzMgMTQyLjkzOCA1NS4zODkzIDE0MS44NTggNTMuNzA5MyAxNDEuODU4QzUyLjQxMzMgMTQxLjg1OCA1MS4zMzMzIDE0Mi42OTggNTAuNDQ1MyAxNDMuNjgyTDQ4LjUyNTMgMTQxLjc2MkM1MC4xNTczIDE0MC4wMzQgNTEuNzQxMyAxMzkuMDc0IDU0LjE2NTMgMTM5LjA3NEM1Ny41MjUzIDEzOS4wNzQgNTkuNzU3MyAxNDEuMjM0IDU5Ljc1NzMgMTQ0LjU0NkM1OS43NTczIDE0Ny43NjIgNTcuMDkzMyAxNTEuMjE4IDUzLjg1MzMgMTU0LjM4NkM1NC43NDEzIDE1NC4yOSA1NS45MTczIDE1NC4xOTQgNTYuNzMzMyAxNTQuMTk0SDYwLjU5NzNWMTU3LjE3SDQ4LjY5MzNaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ3LjY5MzMgMTU4LjE3VjE1NC42ODNMNDguMDI2MiAxNTQuMzg1QzUwLjQyNTQgMTUyLjIzNiA1Mi4yODk3IDE1MC4zNzIgNTMuNTQ5IDE0OC43MzFDNTQuODIzOSAxNDcuMDcgNTUuMzczMyAxNDUuNzcxIDU1LjM3MzMgMTQ0LjczOEM1NS4zNzMzIDE0NC4wMTMgNTUuMTc2OCAxNDMuNTYyIDU0LjkzNTggMTQzLjNDNTQuNzA1IDE0My4wNSA1NC4zMjc2IDE0Mi44NTggNTMuNzA5MyAxNDIuODU4QzUyLjg1OTYgMTQyLjg1OCA1Mi4wMzM2IDE0My40MTQgNTEuMTg3NyAxNDQuMzUyTDUwLjQ4MjUgMTQ1LjEzM0w0Ny4xMzEgMTQxLjc4Mkw0Ny43OTgzIDE0MS4wNzVDNDkuNTU0NSAxMzkuMjE2IDUxLjM4NDMgMTM4LjA3NCA1NC4xNjUzIDEzOC4wNzRDNTYuMDYyMiAxMzguMDc0IDU3LjcyNTUgMTM4LjY4NyA1OC45MTk1IDEzOS44NTJDNjAuMTE2MiAxNDEuMDE5IDYwLjc1NzMgMTQyLjY1OCA2MC43NTczIDE0NC41NDZDNjAuNzU3MyAxNDYuNDI0IDU5Ljk4MzggMTQ4LjI4MyA1OC44NjA5IDE1MC4wMjVDNTguMTY3MSAxNTEuMTAyIDU3LjMxOTggMTUyLjE2NSA1Ni4zODc1IDE1My4xOThDNTYuNTA3NCAxNTMuMTk1IDU2LjYyMzEgMTUzLjE5NCA1Ni43MzMzIDE1My4xOTRINjEuNTk3M1YxNTguMTdINDcuNjkzM1pNNTUuNDAzMyAxNTQuMjQ4QzU0Ljg2OTkgMTU0LjI4NCA1NC4zMjE1IDE1NC4zMzUgNTMuODUzMyAxNTQuMzg2QzU0LjIyNyAxNTQuMDIgNTQuNTkzIDE1My42NTEgNTQuOTQ4MiAxNTMuMjc5QzU3LjY3MjQgMTUwLjQyNCA1OS43NTczIDE0Ny4zOTEgNTkuNzU3MyAxNDQuNTQ2QzU5Ljc1NzMgMTQxLjIzNCA1Ny41MjUzIDEzOS4wNzQgNTQuMTY1MyAxMzkuMDc0QzUyLjA5MzMgMTM5LjA3NCA1MC42MzUgMTM5Ljc3NSA0OS4yMzU5IDE0MS4wNThDNDkuMjAzNiAxNDEuMDg4IDQ5LjE3MTMgMTQxLjExOCA0OS4xMzkgMTQxLjE0OEM0OC45MzQgMTQxLjM0IDQ4LjczIDE0MS41NDUgNDguNTI1MyAxNDEuNzYyTDUwLjQ0NTMgMTQzLjY4MkM1MC42NjE0IDE0My40NDIgNTAuODg4OSAxNDMuMjExIDUxLjEyODIgMTQyLjk5OUM1MS44NzE4IDE0Mi4zMzkgNTIuNzI4NyAxNDEuODU4IDUzLjcwOTMgMTQxLjg1OEM1NS4zODkzIDE0MS44NTggNTYuMzczMyAxNDIuOTM4IDU2LjM3MzMgMTQ0LjczOEM1Ni4zNzMzIDE0Ny40NzQgNTMuNTE3MyAxNTAuODEgNDguNjkzMyAxNTUuMTNWMTU3LjE3SDYwLjU5NzNWMTU0LjE5NEg1Ni43MzMzQzU2LjM0NzYgMTU0LjE5NCA1NS44ODE0IDE1NC4yMTUgNTUuNDAzMyAxNTQuMjQ4WiIgZmlsbD0iIzFBMUE0MCIvPgo8cGF0aCBkPSJNMzQ4LjA4NCAxMTNWMTEwLjk2QzM1Mi45MDggMTA2LjY0IDM1NS43NjQgMTAzLjMwNCAzNTUuNzY0IDEwMC41NjhDMzU1Ljc2NCA5OC43NjggMzU0Ljc4IDk3LjY4OCAzNTMuMSA5Ny42ODhDMzUxLjgwNCA5Ny42ODggMzUwLjcyNCA5OC41MjggMzQ5LjgzNiA5OS41MTJMMzQ3LjkxNiA5Ny41OTJDMzQ5LjU0OCA5NS44NjQgMzUxLjEzMiA5NC45MDQgMzUzLjU1NiA5NC45MDRDMzU2LjkxNiA5NC45MDQgMzU5LjE0OCA5Ny4wNjQgMzU5LjE0OCAxMDAuMzc2QzM1OS4xNDggMTAzLjU5MiAzNTYuNDg0IDEwNy4wNDggMzUzLjI0NCAxMTAuMjE2QzM1NC4xMzIgMTEwLjEyIDM1NS4zMDggMTEwLjAyNCAzNTYuMTI0IDExMC4wMjRIMzU5Ljk4OFYxMTNIMzQ4LjA4NFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMzQuNzA2IDE1Ny41MDZDMTMxLjg5OCAxNTcuNTA2IDEzMC4wMDIgMTU2LjQ1IDEyOC43NTQgMTU1LjAzNEwxMzAuNDEgMTUyLjgwMkMxMzEuNDY2IDE1My44MzQgMTMyLjc2MiAxNTQuNjI2IDEzNC4zNyAxNTQuNjI2QzEzNi4xNyAxNTQuNjI2IDEzNy4zOTQgMTUzLjczOCAxMzcuMzk0IDE1Mi4xNTRDMTM3LjM5NCAxNTAuNDAyIDEzNi4zNjIgMTQ5LjMyMiAxMzIuNDk4IDE0OS4zMjJWMTQ2Ljc3OEMxMzUuNzYyIDE0Ni43NzggMTM2LjgxOCAxNDUuNjUgMTM2LjgxOCAxNDQuMDY2QzEzNi44MTggMTQyLjY3NCAxMzUuOTU0IDE0MS44NTggMTM0LjQ0MiAxNDEuODM0QzEzMy4xNyAxNDEuODU4IDEzMi4xMzggMTQyLjQ1OCAxMzEuMDgyIDE0My40MThMMTI5LjI4MiAxNDEuMjU4QzEzMC44MTggMTM5LjkxNCAxMzIuNTIyIDEzOS4wNzQgMTM0LjYxIDEzOS4wNzRDMTM4LjA0MiAxMzkuMDc0IDE0MC4zNyAxNDAuNzU0IDE0MC4zNyAxNDMuODAyQzE0MC4zNyAxNDUuNzIyIDEzOS4yOSAxNDcuMTE0IDEzNy4zOTQgMTQ3Ljg1OFYxNDcuOTc4QzEzOS40MSAxNDguNTMgMTQwLjk0NiAxNTAuMDE4IDE0MC45NDYgMTUyLjM0NkMxNDAuOTQ2IDE1NS42MSAxMzguMDkgMTU3LjUwNiAxMzQuNzA2IDE1Ny41MDZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDM2LjQ2MyAxMTMuMzM2QzQzMy42NTUgMTEzLjMzNiA0MzEuNzU5IDExMi4yOCA0MzAuNTExIDExMC44NjRMNDMyLjE2NyAxMDguNjMyQzQzMy4yMjMgMTA5LjY2NCA0MzQuNTE5IDExMC40NTYgNDM2LjEyNyAxMTAuNDU2QzQzNy45MjcgMTEwLjQ1NiA0MzkuMTUxIDEwOS41NjggNDM5LjE1MSAxMDcuOTg0QzQzOS4xNTEgMTA2LjIzMiA0MzguMTE5IDEwNS4xNTIgNDM0LjI1NSAxMDUuMTUyVjEwMi42MDhDNDM3LjUxOSAxMDIuNjA4IDQzOC41NzUgMTAxLjQ4IDQzOC41NzUgOTkuODk2QzQzOC41NzUgOTguNTA0IDQzNy43MTEgOTcuNjg4IDQzNi4xOTkgOTcuNjY0QzQzNC45MjcgOTcuNjg4IDQzMy44OTUgOTguMjg4IDQzMi44MzkgOTkuMjQ4TDQzMS4wMzkgOTcuMDg4QzQzMi41NzUgOTUuNzQ0IDQzNC4yNzkgOTQuOTA0IDQzNi4zNjcgOTQuOTA0QzQzOS43OTkgOTQuOTA0IDQ0Mi4xMjcgOTYuNTg0IDQ0Mi4xMjcgOTkuNjMyQzQ0Mi4xMjcgMTAxLjU1MiA0NDEuMDQ3IDEwMi45NDQgNDM5LjE1MSAxMDMuNjg4VjEwMy44MDhDNDQxLjE2NyAxMDQuMzYgNDQyLjcwMyAxMDUuODQ4IDQ0Mi43MDMgMTA4LjE3NkM0NDIuNzAzIDExMS40NCA0MzkuODQ3IDExMy4zMzYgNDM2LjQ2MyAxMTMuMzM2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="},6937:(M,N,D)=>{D.d(N,{A:()=>j});const j=D.p+"assets/images/servo-1-a6408dc2dc7aadbc01bb58cae552d58b.png"},56587:(M,N,D)=>{D.d(N,{A:()=>j});const j=D.p+"assets/images/servo-3-51968afaa0d88e24f90bf472e1a58e94.png"},64596:(M,N,D)=>{D.d(N,{A:()=>j});const j=D.p+"assets/images/servo-4-694fd14838b674b4fedfcdae11186457.png"},28453:(M,N,D)=>{D.d(N,{R:()=>g,x:()=>I});var j=D(96540);const z={},T=j.createContext(z);function g(M){const N=j.useContext(T);return j.useMemo((function(){return"function"==typeof M?M(N):{...N,...M}}),[N,M])}function I(M){let N;return N=M.disableParentContext?"function"==typeof M.components?M.components(z):M.components||z:g(M.components),j.createElement(T.Provider,{value:N},M.children)}}}]);