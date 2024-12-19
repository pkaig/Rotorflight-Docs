"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[4723],{99358:(A,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var t=n(74848),r=n(28453);const s={sidebar_position:10},i="Status tab",a={id:"Wiki/Configurator/Status",title:"Status tab",description:"A place for basic flight controller information. The status tab is the first tab you see when you connect to your flight controller. You can check the gyroscope live preview, view the arming prevention flags and other FC information.",source:"@site/docs/Wiki/Configurator/Status.md",sourceDirName:"Wiki/Configurator",slug:"/Wiki/Configurator/Status",permalink:"/docs/next/Wiki/Configurator/Status",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Wiki/Configurator/Status.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Configurator Tabs",permalink:"/docs/next/category/configurator-tabs"},next:{title:"Setup tab",permalink:"/docs/next/Wiki/Configurator/Setup"}},c={},o=[{value:"Info",id:"info",level:2},{value:"Arming",id:"arming",level:2},{value:"Battery",id:"battery",level:2},{value:"Live Gyro Preview",id:"live-gyro-preview",level:2},{value:"Instruments",id:"instruments",level:2},{value:"Receiver",id:"receiver",level:2}];function d(A){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...A.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"status-tab",children:"Status tab"})}),"\n",(0,t.jsx)(e.p,{children:"A place for basic flight controller information. The status tab is the first tab you see when you connect to your flight controller. You can check the gyroscope live preview, view the arming prevention flags and other FC information."}),"\n",(0,t.jsx)(e.h2,{id:"info",children:"Info"}),"\n",(0,t.jsx)(e.p,{children:"Shows some basic data from the flight controller and model. This includes:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Craft Name"}),"\n",(0,t.jsx)(e.li,{children:"Firmware"}),"\n",(0,t.jsx)(e.li,{children:"Board"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Status Tab",src:n(39010).A+"",width:"423",height:"160"})}),"\n",(0,t.jsx)(e.h2,{id:"arming",children:"Arming"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Status Tab",src:n(40600).A+"",width:"414",height:"160"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Enable Arming:"})," Use this switch to enable arming while the configurator is connected."]}),"\n"]}),"\n",(0,t.jsxs)(e.admonition,{type:"caution",children:[(0,t.jsx)(e.p,{children:"With the arming enabled, the motor can spoolup when the throttle is released."}),(0,t.jsx)(e.p,{children:"Remove blades for safety."})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Arming Disable Flags:"}),' Shows all of the "errors" that prevent the flight controller from arming. This is useful to check if you\'re having issues arming.']}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["You can find out a description of these flags from the ",(0,t.jsx)(e.a,{href:"https://betaflight.com/docs/wiki/guides/current/Arming-Sequence-And-Safety#description-of-arming-prevention-flags",children:"List of Arming prevention flags"})]}),"\n",(0,t.jsx)(e.h2,{id:"battery",children:"Battery"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Status Tab",src:n(55535).A+"",width:"275",height:"159"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Voltage"})," - Shows the current battery voltage if the settings for it are set correctly."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Current"})," - Shows the current drawn from the battery if the settings for it are set correctly."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Capacity"})," - Shows the consumed capacity of the battery in mAh."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Charge Level"})," - Shows remaining battery capacity in percent."]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"live-gyro-preview",children:"Live Gyro Preview"}),"\n",(0,t.jsx)(e.p,{children:"A live preview of the gyroscope data. This is useful to check if the gyroscope is aligned correctly, and if it isn't getting/giving noisy data."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Status Tab",src:n(92452).A+"",width:"1056",height:"687"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Reset Z axis"})," - This button resets the heli heading to 0 degrees."]}),"\n"]}),"\n",(0,t.jsx)(e.admonition,{type:"info",children:(0,t.jsxs)(e.p,{children:["You can set the gyroscope alignment in the ",(0,t.jsx)(e.code,{children:"Configuration"})," tab."]})}),"\n",(0,t.jsx)(e.h2,{id:"instruments",children:"Instruments"}),"\n",(0,t.jsx)(e.p,{children:"A graphic replica of real aircraft instruments."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Status Tab",src:n(30978).A+"",width:"565",height:"161"})}),"\n",(0,t.jsx)(e.h2,{id:"receiver",children:"Receiver"}),"\n",(0,t.jsx)(e.p,{children:"The receiver output preview shows the current state of the receiver channels, both in channel value and graph forms, and how those affect the heli movement."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Status Tab",src:n(71509).A+"",width:"561",height:"561"})})]})}function h(A={}){const{wrapper:e}={...(0,r.R)(),...A.components};return e?(0,t.jsx)(e,{...A,children:(0,t.jsx)(d,{...A})}):d(A)}},40600:(A,e,n)=>{n.d(e,{A:()=>t});const t="data:image/png;base64,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"},55535:(A,e,n)=>{n.d(e,{A:()=>t});const t="data:image/png;base64,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"},39010:(A,e,n)=>{n.d(e,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAacAAACgCAYAAAConaOUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABOHSURBVHhe7d1dbxtXfsfxvpFe9Q3oShcGBAi6MNa+sa5EBDCBABGMmtACIYy1btZCEDFozQoFJKACbSBQEFdOslLjLoUKzGINunGZRgAteKnUWzZ26axTZmVzI3gS0w95+Pf854EcDod6sGTpyP4e4ANxZs7MSIeb85tzZtbzV0KhUCgUimWFcKJQKBSKdYVwolAoFIp1hXCiUCgUinWFcKJQKBSKdaVnOD169Ehu374tq6urUi6XAQDYNc0UzRbNmM1KbDjpTp9evy5Xln4r/zD9j/L2378DAMCuaaZotmjGbBZQseGkqbZ45ePYAwMAsFuaMZo1vUpsOGmiMWICALwomjE6xderxIaTzgvGHQwAgL2iWdOrEE4AgANBOAHAC/S37/5CXvvN38jI4l8jRNtE2yauzRThBAAviHa+cR0z2noFFOEEAC8II6ataRvFtd0LDqeb8kB3atyM2dbDYlm+abqnMuWx1K7G1AGAQyCuM0a3uLazLpx+99Vjs8P38sfFd2Tm8rxcjKkDAIdBXEeMbnFtZ104rTZM/Sc1+V3MNgA4TOI6YjW28p5Um0+0d3TLs8cl+VDXr16Rr5+E1jfLUlg54u/3gXyt6zYuyFhwrNqXZkVJ3tfPfyiZy/pQcdfrPg9l7Q9+/dIFWXv0UJ797Nf58aHUbg+bbZOy9kzk65pfb4tjP3tUkqWSV++q46/0i3uMaP0nX8rKf/W+/xbXdvsbTldr8lh+kAdf/Vke/+AeTuSnx/JN+UOz/V9lrRGs9Mrjr37v7nf585psBN/XTz/I4/tfyPKF6LkAwC5xHfFIYUaqpqt7tvGB5K7qckLer/xaxgoXpPajyPd/uSAzBbP+6q+k8O3DdkBo0PzwRJ7JE6ne8gOrK0C+lKvBeYJ9gnAKzvvdsrz/797+Z0un5G0917bCyT/21axUTd3v13/t1tNw+v7+ZHu/aH39+/7vT+b3vi+r5VCdkLi2O4BwMuXJn+U/8/8kb18wgfStWf7JLPv7dI2c/u22fGdWPb73H/K+CaSZ/BfywDTwD/dvyvtBHQCwUFxHPPI/X5gezXTcbihssf7TZVnXcKnosgman7+Qlfp9LzS03k7C6X9NXbN/IXpe187DaaP+S7feluHk+pWsms4/CLSouLY7kHAKRkTKu8e0IX/80FuOhtPHX+rg0PyZS95yeJ81Rk8ALBbXEXd0+luu13AJQkM/a4dvguSJdvQmEDTQOgIkVJwP/H38cOoKG694wbKzab2NB/7ozmzrnNbzz9UVTj1CzBfXdgcSTg8q7Tpe0LSfyouGk7f9gaz6y3H7AICN4jriXY2c/A5/rKKd/31ZvW1+dgRIZyB0hFPM8duB4YXT+lfB/S0jduR0RJY2nsizhx/I213H8PfrqB+s844fjLai4trO+nBi5ATgsIrriEda95be8+45Lf5C/u7zROw9p6t6sz0IiFA4jZiQ+Je/mG0/hrZvFU6LWe+ek3PFP+8Ruf5dO1iWvjXHerQs77r3wX4p1x2zbEZf7sMX4WOXrsj6z+37XluGk947u3/f9Nl/khX/IYqouLazPpze/vALE0Omxjefy8fccwJwiMR1xMp7Ks90bH7RhxRmWuvbG9yn9VodejicDD/Mth9O3U8J6tN6X3/lj2auZmX10UN/gzls6Im86LFzoftendN6vZ/Wu74aGpVFxLWd/eFkXPz0v+VB8H/M5Wk9AIdEXEeMbnFt94LDCQBeXXEdMbrFtR3hBAAvCP+23tYO6N/WA4BXF/8q+db4V8kB4ABo58sIqpu2Sa9gUoQTAMA6hBMAwDqEEwDAOoQTAMA6hBMAwDrPFU5Pnz4FAOCFIZwAANYhnAAA1iGcAADWIZwAANYhnAAA1iGcAADWIZwAANYhnAAA1jlc4XQ3L+NH+6VvMCPFRsx2AMBLYf/CqVmX0mxahgf7pK+vTwZOpGXhTky9TZSnhmX6hvnc7N4WVl9MSd/JeamG691bkNQUoz4Ah0VdFk57/WWnrJRj6++RZk0WxvoltVj315Ul2+P8zkpOktqnHxmS1LsVcfz12ge3938++xROdcmPDUhypiQ1x1vn1GtS9z9vj35RZsQU7NOsSO5i/O/iNsxYSkYvVdvrCScAh9RedPbb40h5Ji252Yn2+RoFGZ8stoKnxSlJ5kRWSjqL1WxI6fywZK477rbDE05rOTl+Ji+NuG0mNLKLFfOHJaS/b1wKDUdqSxlJ6vRdnwm0yYLUI1cQqX/+rWTc7d5ydqXzmNow2c9M+p9OycLd9nna4RR3Dl1vrhAm81KcTcqAOe7AqTmp3KvI3KkBU69fEm8VpBaMxupFyZ7U9abeyYwU/POUZwdk6GLFPw8A7F60s68vZmXhZkmyI6YPO1swfasj1cvjMnSkcxRTW0xLerHm7bdRlMxITiqbzDw5K9MyYerXwufrdWF/Y1qGw32d6eeHZ7x6hyac6lfMKOYjv4Gi9A8fTMv8WqO9znHEcRvQkeK5hMxX9bMGVGg4u8lIyA0nDay7ps7pBS9QovVjz6HD15T57KV/7XJK+kemW1cGhXPHJbem9RqSP9Ou9/TWnCTd/4HoNgDYW93hlJKBM/NSCe6938xJ8nxRGtqnmb6qODns9VU6RXcmbS7SdV3oYj2Ohtc5rx/rON+deUkODnnBNzgsaT/4GsvjnQGkfexY3r3QPzzhZH7RTcMpPGT0700lukZGzxFO5nP10qhpJHPucP2e5zDh9IYJs+BYK1npC52jfdzoHKx6wfPAAF5Z0c5elzPX/Itjf7mzP+pr118vyPjgQHsEFUdD7K1pKW94y9Hzte7zO1VZGBtw+8GXIpy2mtYLh4z+wccnC617U+Wp3YWTe29qJCX5lXb93ucwoWNGWt4Un7FZOB0zw+OgHgC8QNHOvqOP85fHl0OzT2E6gzSSkNGZcvd9o4D2p5Fw6wi4kNbvEjOtd9zvL6O/7/PYn3AywaIPRKQuVdoPQWw0vGm1SMjoFGDCDBvd5fWSTI/09w6nYMouWOeLfnHaaIkx01hBw/U8x3bDyZHSO8OS+cRv/KYj9fX2VQwA7KVoZ9/Vx+nU2+m59jTfRl0a2tc2qzL/RkaKG/qgw6jZZ3v9VPh8HQ+vNSoyP5aQuVvm80vxQITaMMPByaQ3b2kSeeCE//9Vio6ANtoPIAydzUu59SVEwkkD7+yQ9Jt66aXORuj64kyYlGeG20HT8xzbDSdDj/HmsPvghDsP6w+Z9YGI4SD4AGAPRDv77j7uqdSWg4e8TL/2ut4r134v0Z7+c8oyfcr0of7U3WbC53PW5iTl3wLpP5qUzHJ7etC5GWwbkORUqTU7pvuHR2DPc9tj/8IJAIBtIpwA4BXSPaqJv7d00AgnAIB1CCcAgHUIJwCAdQgnAIB1CCcAgHUIJwCAdfYlnHSfYD9+8pOf/HfBz1fz507oPr0KIycAwIEgnAAA1iGcAADWIZwAANYhnAAA1iGcAADWIZwAANYhnAAA1tmfcIp5P72+xbE8Oyy5GzH1AeBV0KxLaTblvyF8QIbfnJNyQ9/63dlfevRtsmXJms/HZ6Nv23ak9E6/9AVv8m7WpDjVPm5ysiC1ple3cSN4e22/DI3NScV/M27s22tj+m53vb5Vd0Rf/94+f3kqKdM3HPfc+cmk/5bwzjfn7sT+hVP49ecAAHGuZ2T4fEkafnA4d+qtV52r8OvSPSacTmckc9IEhL+Pq1GQ8UmzPuhnN2pSveO/nr3ZkNL545L9TOs6Uvl9SWqOt1/tckoSl6ru5+5zxVjPS/pM3v0dnRvTMjpTFkfXr+Xan++WpHiz4dVvlCR7zISYf76dONBw0sYI3oNfnspKsbog6UFzVXDRXBWYfTLvFSV/dkj6TcIn3jLJf6cgEyPe++pH362YhnCkOHlccmveMZxrGel7bV6q/vGrl5Le8Rtlyb057CZ5/9GUzK35X5o5R3axYr64hDnHuBQa5ne6lpWk+R06rjbq5gs5YrbXveMCwF5oLI+3wiFOfDgtSOnyqGSu+/2Y0VgaN8tFd1vXIMCpysJYQuZuRdar6rwkprw+fTvhVL2kfXZwXjNaO5+U3M2qzI9lpdQaRYVpH52ShXtx2zZnUTgNSOJ8QerB1YDuc8wE1rr57Ca/CZczC15YNCsy95oXJvrleg2qw9q0ZIz5qh5Dh8btxHaChrs1J4nJopfweo5BU3/NT3m9Kjhtws3fp/peUsaX/W0AsNd0CuzMsIxOmcCpdvc1vcKprn3V2YI/yqqZcMhJpelvC+quZP1puIRMfBI/tVa5qBfwXthsGU5OSTJvzEstvG5DR0ZDHUHZYd2M6MZiAnMb9i+cWvOVSudOo+GU8EMltI8Z7gbL0YYrT/lprMmvX5I23EkTLOYLGb1svginKBn/y3NumVHYKW/k5J4/+AL1HEFQqdaXGeJfVQDAi+LcrUh+dlSGT81JJTQF1jOcnjZMqKUlrxfvd+Yl5d6DioRTwKlLyfSv0Qvt2hVzYX9RZ6C8ZT3XZn1fzYzWui7WdTrv9aQkgym9sI2yTI9NSOFuZP02WTRyigz9dJ9Q4/QMp6cVyZkRVumzrCR1eKxXDyapayZovPq6PSVzwRxo+HeJnEPDyZ1SDJYBYB9V30u0+kTVO5xMoF3PmAvxqlRmUzJ/p3Nbu75PL7xDfZ0G07jpL8OB0n2ukKbpR0/q6Cy8LpjO06m7ROv2issNpqwUd3Er5CUIJ/2cNMc3X5A78vKm9ybOBcumkY6Y9G6Yz01HqotpGegVTjr6OpGRQvB7mCuORuw8KgDsXuNeTRrBSCnm3tBm4eRNs43KaGuqLRRcd6tSa/hTbXpbZGpY0kveBXrtowmZiHmCbrNwaiylJakzUqF1tY9S7ZHUvbykzO9R1fBqlGT6rAmyXfadL0U4uQ9CHDON4W+LLteWJyShj1QOJiW3UjSJ3iOcDOfmnKRPDLjD2oETaVnQKxJ9IGKQByIA7K2auVgedh/A0oe1kpJZ6gyATcPJqMweb4VORzittfuxvkETTLMl736+9nnBtF2Y6Qd7hpOOkN4IPzZumDDSp/bCfbqGVeqjmumbY47fF+nft2F/wgkAgB0gnAAA1iGcAADWIZwAANYhnAAA1iGcAADWIZwAANYhnAAA1tmXcNJ9gv34yU9+8t8FP1/Nnzuh+/QqjJwAAAeCcAIAWIdwAgBYh3ACAFiHcAIAWIdwAgBYh3ACAFiHcAIAWGd/winy9kX3jY8xrwneO5u8Sx8AXnH6ttr+yaI44fUr2dabcPWtuJ1vss1KWet09OX9MvR6Rgp328dwbi1I5vUh6dftR4YkObkg1ed8Xfv+hVM4LNaLkj02LoVGqM6eIpwAoJfyVEJSYwnJXHPa6yPhFPvK9khf3riWlePB8l2zbTAl8zf918Y3HakuTUhibEFq+op4f5/tOrhwen1ayo633LgxJ6mj/V4Sj81JJUjaRllybw7LgEnh/qMpmVvzG9IcL7tYkdL5hEloL+RqyxlJ6rv4B3VUZrYH57uRk4GjOanoZwCACaeULNwqSfZkVkpBf/sc4fS0aY7hj6oqF49LeskPphZHiuf6ZfpGeN327F84tYaCxsiE5O/4QdMoyMSIaaB1r27jelYS5wrS8Pd1goa7NSeJYBiqxxtMy/ya3xDreUmfMMfwR2K1xbQMhBsQANDihtM9079+lpXk+ZLXr242rTfl9/uRcKp/kpHhd3T/uiycHpWF0BRfoGfQbeGARk4mbUdSkjeNow2SuFQN1a/K/GteErvzl6e8kZPbQMEx9Hjh+dLoMUzgjRNOABArCCd3ZDOZkOyKGSxsd+QUCq3E+aLU3Sm7lyWcDL0hl10xn3uGU0Vyx1IyF8xfho+hn4MkV9FjOEXJEE4AEKsdTsa6uZgfmZbytR1O6+k9JvM5uJ/Ue1rvuOTWwuu25+BGTieSMn/HfHZKkjmRlWLXtF5Zpo9MeA9N6I218FRdNJwi03r1pXHpJ5wAIFZHOBmN5XFJjKUks5NwMqqXRk09/8nre/nIAxENqSwehgciQkNB76GF9qPkzs34ByJqy+YPO+LVz60UZdr8kbHh5Nb1H4g4kpCJ5bzkzvp19YGIE+aYoboA8CqLhpNOy+XH+jtGTq3+2hV6lDx84d+sSC64RWOWD9+j5AAA7ADhBACwDuEEALAO4QQAsA7hBACwDuEEALAO4QQAsA7hBACwDuEEALAO4QQAsA7hBACwDuEEALAO4QQAsA7hBACwDuEEALAO4QQAsA7hBACwDuEEALAO4QQAsA7hBACwDuEEALAO4QQAsA7hBACwDuEEALAO4QQAsA7hBACwDuEEALAO4QQAsA7hBACwDuEEALAO4QQAsA7hBACwDuEEALAO4QQAsA7hBACwDuEEALAO4QQAsA7hBACwDuEEALAO4QQAsA7hBACwDuEEALAO4QQAsA7hBACwDuEEALAO4QQAsA7hBACwDuEEALAO4QQAsM6Ow2l1dVWazWbswQAA2C3NGM2aXiU2nG7fvi31ej32gAAA7JZmjGZNrxIbTo8ePXITTXdmBAUA2CuaKZotmjGaNb1KbDhp0Z001fQAOi8IAMBuaaZotmwWTFp6hhOFQqFQKAdVCCcKhUKhWFcIJwqFQqFYVwgnCoVCoVhXCCcKhUKhWFcIJwqFQqFYVkT+H8aBswzZVEzPAAAAAElFTkSuQmCC"},30978:(A,e,n)=>{n.d(e,{A:()=>t});const t=n.p+"assets/images/status-instruments-4cd1611c8e2c852cf6bceba5bfc046c8.png"},92452:(A,e,n)=>{n.d(e,{A:()=>t});const t=n.p+"assets/images/status-live-preview-6ab054c51a3d2010f053a31083a14456.png"},71509:(A,e,n)=>{n.d(e,{A:()=>t});const t=n.p+"assets/images/status-receiver-f3f873c361cd5fc3490d0570b15c486c.png"},28453:(A,e,n)=>{n.d(e,{R:()=>i,x:()=>a});var t=n(96540);const r={},s=t.createContext(r);function i(A){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function a(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(r):A.components||r:i(A.components),t.createElement(s.Provider,{value:e},A.children)}}}]);