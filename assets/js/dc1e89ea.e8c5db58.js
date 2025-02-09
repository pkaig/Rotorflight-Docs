"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[1369],{55427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>A,frontMatter:()=>a,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"configurator/tabs/rates","title":"Rates","description":"The purpose of rates are to change in flight sensitivity and rotation rates. The aim is usually to have several \'rates\' that you can switch between during flight to change flight performance. Please see the profile switching example","source":"@site/docs/configurator/tabs/rates.md","sourceDirName":"configurator/tabs","slug":"/configurator/tabs/rates","permalink":"/docs/next/configurator/tabs/rates","draft":false,"unlisted":false,"editUrl":"https://github.com/rotorflight/rotorflight-docs/tree/main/docs/configurator/tabs/rates.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Gyro","permalink":"/docs/next/configurator/tabs/gyro"},"next":{"title":"Profiles","permalink":"/docs/next/configurator/tabs/profiles"}}');var i=n(74848),o=n(28453);const a={},r="Rates",l={},h=[{value:"Understanding Actual Rates",id:"understanding-actual-rates",level:2},{value:"Center Sensitivity",id:"center-sensitivity",level:3},{value:"Max Rate",id:"max-rate",level:3},{value:"Expo",id:"expo",level:3},{value:"Understanding Raceflight Rates",id:"understanding-raceflight-rates",level:2},{value:"Rate",id:"rate",level:3},{value:"Acro+",id:"acro",level:3},{value:"Expo",id:"expo-1",level:3},{value:"Dynamics",id:"dynamics",level:2},{value:"Copy Rate Profile",id:"copy-rate-profile",level:2}];function c(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"rates",children:"Rates"})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["The purpose of rates are to change in flight sensitivity and rotation rates. The aim is usually to have several 'rates' that you can switch between during flight to change flight performance. Please see the ",(0,i.jsx)(t.a,{href:"/docs/next/setup/profile-switching-example",children:"profile switching example"})]})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Rates",src:n(55247).A+"",width:"1690",height:"588"})}),"\n",(0,i.jsx)(t.p,{children:"Rotorflight offers a total of five rate systems:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Actual Rates"}),"\n",(0,i.jsx)(t.li,{children:"Betaflight Rates"}),"\n",(0,i.jsx)(t.li,{children:"Raceflight Rates"}),"\n",(0,i.jsx)(t.li,{children:"KISS Rates"}),"\n",(0,i.jsx)(t.li,{children:"Quick Rates"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"However, the most widely adopted is Actual Rates."}),"\n",(0,i.jsx)(t.h2,{id:"understanding-actual-rates",children:"Understanding Actual Rates"}),"\n",(0,i.jsx)(t.p,{children:"\u201cActual Rates\u201d are the default rates in Rotorflight, providing a straightforward approach to setting maximum rotational velocity (e.g., entering 1000 corresponds to 1000deg/sec) and center sensitivity values."}),"\n",(0,i.jsx)(t.p,{children:"There are 3 values in Actual Rates: Center Sensitivity, Max Rate, Expo."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Rates",src:n(54226).A+"",width:"837",height:"528"})}),"\n",(0,i.jsx)(t.h3,{id:"center-sensitivity",children:"Center Sensitivity"}),"\n",(0,i.jsx)(t.p,{children:"Center Sensitivity relates to the responsiveness around the center stick position. A lower value offers finer, smoother control, while a higher value results in a more reactive heli to stick movement."}),"\n",(0,i.jsx)(t.h3,{id:"max-rate",children:"Max Rate"}),"\n",(0,i.jsx)(t.p,{children:"Max Rate defines the heli's rotation speed at full stick deflection. The value entered represents the exact maximum rotational velocity. For example, entering 300 means your heli will attempt to rotate at 300 degrees/sec at full stick."}),"\n",(0,i.jsx)(t.p,{children:"However, keep in mind that the maximum angular velocity can be limited by your heli mechanics. When the heli reaches its physical limitation and cannot flip any faster, the maximum angular velocity is capped, regardless of the higher value set in Rotorflight."}),"\n",(0,i.jsx)(t.h3,{id:"expo",children:"Expo"}),"\n",(0,i.jsx)(t.p,{children:"Expo flattens the curve between center stick and full stick. To achieve a more linear rate, keep Expo low. For a broader center stick region with finer control, increase Expo. Keep in mind that increasing Expo also reduces center sensitivity."}),"\n",(0,i.jsx)(t.p,{children:"While Expo can be as high as 1.0, excessive Expo might cause decreased center stick sensitivity and make the heli\u2019s response more unpredictable towards full stick (more jumpy)."}),"\n",(0,i.jsx)(t.h2,{id:"understanding-raceflight-rates",children:"Understanding Raceflight Rates"}),"\n",(0,i.jsx)(t.p,{children:"Actual Rates can be a little bit tricky for someone that does not have Betaflight knowledge and experience. So if you are coming from a different FBL system then Raceflight Rates might make more sense for you."}),"\n",(0,i.jsx)(t.p,{children:"There are 3 values in Raceflight Rates: Rate, Acro+, Expo."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Rates",src:n(47405).A+"",width:"836",height:"528"})}),"\n",(0,i.jsx)(t.h3,{id:"rate",children:"Rate"}),"\n",(0,i.jsx)(t.p,{children:"Rate defines the heli's rotation speed at full stick deflection. The value entered represents the exact maximum rotational velocity. For example, entering 300 means your heli will attempt to rotate at 300 degrees/sec at full stick."}),"\n",(0,i.jsx)(t.h3,{id:"acro",children:"Acro+"}),"\n",(0,i.jsx)(t.p,{children:"For the sake of simplicity, always keep Acro+ at 0."}),"\n",(0,i.jsx)(t.h3,{id:"expo-1",children:"Expo"}),"\n",(0,i.jsx)(t.p,{children:"Expo flattens the curve between center stick and full stick. To achieve a more linear rate, keep Expo low. For a broader center stick region with finer control, increase Expo."}),"\n",(0,i.jsx)(t.p,{children:"While Expo can be as high as 100, excessive Expo might cause decreased center stick sensitivity and make the heli\u2019s response more unpredictable towards full stick (more jumpy)."}),"\n",(0,i.jsx)(t.h2,{id:"dynamics",children:"Dynamics"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Rates",src:n(44210).A+"",width:"829",height:"133"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Response Time"})," - corresponds the smoothness of the reaction to stick inputs, also called  time constant of the input filter."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"High response times smooths out the input but too high could cause significant input delay."})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Max Acceleration"})," - is the input acceleration limiter. Zero represents off. Low value reduces the load on the machine and could be desired for scale flying, not useful for 3D normally."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"copy-rate-profile",children:"Copy Rate Profile"}),"\n",(0,i.jsxs)(t.p,{children:["You can use the ",(0,i.jsx)(t.em,{children:"Copy rateprofile"})," button at the upper right corner to copy the values of the current profile to another one."]})]})}function A(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},54226:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/rates-actual-fb10eaacc7745a7e45fdecf2579f2868.png"},44210:(e,t,n)=>{n.d(t,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAz0AAACFCAYAAABxGZbwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACEzSURBVHhe7Z19bBzXee4ZNCgSJEjRvwIUAYIUDWrkj4AwGhu1I1zbgSHAFm4kQkKstGGqwsmFrmWBqa5vZOsKFgQmuheFGlzdGoXsoE3VkiBa11IlWXEcxRbCWPSHIEi1XPJaSQWCSiiHhqnQivXBGG/POzNn9+zhO8vZ0XK1Gv6eg1+887nDjebZ95lzZrbn6tWrAgAAAAAAUFUIPQAAAAAAUGkIPQAAAAAAUGkIPQAAAAAAUGkIPQAAAAAAUGlyQ8/Fixfl38f/XV555RU5ceIEAAAAAABAV3Hy5El58803k+xiZRqPGXp0Iw07z/zrAdn5v78FANASx44dM+cDACwG/gEArfB//uov5en9zyThp1nwMUOP9vAQeACgLBQtAFAW/AMAyqDBR3t8rGyjmKFHe3msnQEAFIGiBQDKgn8AQBm0x0d7e6xso5ihR8fHWTsDACgCRQsAlAX/AICyaIaxso1C6AGAtkPRAgBlwT8AoCyEHgDoKBQtAFAW/AMAykLoAYCOQtECAGXBPwCgLIQeAOgoFC0AUBb8AwDKQugBgI5C0QIAZcE/AKAs7Q09/zYjDZq/LLOTL8sze411bwCHfnZJ3v3ZYXMZAHSG/KLllDQ4yPupfwyb696cPD95OfvjIl05J89//6fy7qWfyiFju7bwo3OSvLu+l7W8ZY7KuSu6w8ty7kfWcoD2s6h/vHNG9sXLsn/7lyePNs6/TvacuCBy9byMGsvawcm3RWb+zV7WNpbAd7zP+c972H1Ol993M+Zn5eyLTzSsu++NWZl/6+WGeXVG5LXpdF/z7v/XQ3gOXCftDz1vn8qmn5B93z8h5+bmZd7Nq1LhAgDlaV60zMjJbPrJZ0/ItPuCmz7R+CVZDfTLu8Nf3Fr4tS3weG7A3wHLmqb+ceWSvHt1VsZHGpe9MHXZ/dufb3PoecKFkssuMMwvmUctSeh51oWcWp22NGjoqX/Wz8m5d2bktaddSDw4IbPuvffU1h2S199xn9+r9W0bOSxjJ56TJ134GZ9zPvNDnYfnQHmWMPRk7P2JTF2dl6kfpz0t8z//SbBc//Gmy/Tknj6TFjmJnHHVrgiMvCxT7h+81+XpE7UQlWw3fkZmrqbL5i/+VJ4/GOznyoXkZNN1G0/E9ArCvF59cJr/5Sn5W2diR8Zn0isSyUx3YrljS9cHgHZQNPQoDefs3ufk9V9mPvD+ZVdojNTmj7viw2v+vXPygs7XIv/SOXl96lK64P15mT17tPaFu+cHzjfeSxc17M/RzI+GXz4v785n8912M2cO1I7DPD4T44s7DCXZsZ+c9Meu+zsgz5+dlfStm/wt79U9r4E49LTyHnmfMQUIdJjF/GNqal7ePZudkwlag8zK1M8DL8mrKZ52+5i/JGefzbbVc2T+goxZo1VGzsjslfPywkvn5fJbJ4JC3rH3qJy9GOz/XHrMSY+H945553X/qOuPyNikO+e07og8qiH05PqLO+ar5+U19SXdx8UJ2efCxJjzvVot4z3BreNrHlXyeUS+MPzyOZnN6qmGOkzf5/0L8rrvtXFK6i3jsykcekbctO8py/UY5bCcvTQrrydhFs+B8ix96HGM/jwzIf0H7k6a1/xJ8mN3AmYnm57cagKvP/tdt+y7yZWZWje1M5CxE4dln9tuz0FnNO6ETxN/tt1752XsoDsx9x6Q8Ytu+mq2Hzf9+jvZie3WDU9E7VIVd1KNDut2QzKs/9WTet6dWLqvpKfqqByJrhgBwPVRvKfnlExnF0x0Ws/f+bfPJMNln3zW+YCeq3p+nppJhj4kw2jduXzoxedS39Avcy3c/79eKUy3mZn3+zuWXIyZOXM4XfZD501BsZPvR+4L/L3Lbh8632339DE5km2Te3xu2UIKhJ7w2F++kBQr707+JPHBJ513urglJ/Vvzi4eafja4471kA4XyRviE4eeou+R9xlTgECHWdQ/tK4Ih2u96v5du1DSeAElv6YYdnXMvAsOw0mh7c6rU0PZ/ht55qwfLu+85Erjuf6CC17qBYe+56a/NyLD+l8NSfo+Lw2589TVF0/rf10tou+nBb5bZ8+wC2jZhWDdTxh68v1F/273fhfTfaTH8IQ8/+oJOZTUN1kddO65dFlcp4W+EB3jM+6zq4c+fR9ni7/0f5f+3SKzbyz8fBo+a0fe8Db9DOensv8/cz3GhcKpWfc5+JCH50B5OhJ66idA1pWZdQWrMfgTQ0/u8CRZ8AVd44nkBJ45lU7H2yXGEPYmBccUHoeGI7+POi/LtCuKZs4cTcywcRkAtIPmRUug9y/JuVe1kNdl+kXnQsmh+vq1gkCLdb3Q8WJaRNT2lxT19RCl1DzgpbQweiZYphdnfGGQ70cHZHxu3gUDV1DUCgylyfHV1gkxvrhDz1tw7PrZhMN2gu113Ya/JSv+atMZ4f79dNH3yPuMrb8DYAlZ/KKJhhX/b/IJee2ttOaIC/E6jTWFFtlap8y+4wryX55aePEgQd+jfpFE9z077ot/7Vly75+FKM++8VkRt79wnr73ybcbh3eFx1n3kGb+on+3e78X68ti9pwJ3rtJ6EmOseH+mrBWyt4nONfzPtP8zzokDZU+4Nke8115YXIm6NVS8BwoT0dCz9hbUutu1hv/9B6fPcmV1sYrqw0FQnAipkM3fJ9wKr9uvN2Ck80MPU1OmqePyfi0MzsXft6dPiNHCD8AbaVQT8/e9AJE7QsxWbZQ/twf/vGETOv9g85Tps88l35pxkW+o+YBhleF3tHMj3QYxmvui/iyO77Lb/9UxpKhZM2PbyGGB4XvseDYg88mIdhe/5YFKhh6ir6HmzY/YwoQ6DBF/CMZSq89CHvdvGz4VHh+N6spErQAbxYktDcp266mWu9SfB6lLKhNEvT8ybYPtNCHdJ8LVV8WvV82FC4cylbzuyahxzrGxmNofB/7b8qf34DeW9TgP4bH6LFlh59KvQbPgfIsfejZe0KmtbvU/wPVaR3Lml1p9V3Q+UVGagqzb6Rd0d4k/LrlQk969SL/5jlH3CUMAG2hUOhxDOtVx2SYiU67EPT+whuUYxqGqiRfmI1f0klvjnqA+k/0hRv39Nh+FMzzw96SK6jFjq+O8cUdvseC94sLjmD7Vy9k4/j9shzifbbyHrV50Wecsw7AUlHIPw65glrvc3ljVi5nw6fq3/9pDZFXUyTTLhDNTPthbn5+HT3vG4d16T78RVzt6WnslVEW9qIoByTp7XgpnFen7kPN/MUOIzocNxne5qcLhJ7kGN2yek9L3NOz8H2scJM3P0TXyXuabjzksBE8B8qzhKHnuzJ87JRMX9IxoI1dxGoY715yBDcb5hcZaVdxOoZex5imN+v5dcuFnm/JobPuwLJxtMmxPq37PywvjGVGuHdIXpuuF0EA0B6Khh7/EJTpV9N77MbeCsbJu+l9Bw7LM1oEPHtMRr+fDonYM3xCpv3QEvUQEffFWr+nZ/b94vf02H40JM+/dCwdo6/3z6iPJKGnyfH5fTRgfHGHISR8ndAkkGS9Yv5vUe/6p+8fWBiC4n228h55nzEFCHSYYv6RDqXXG/79v83693/zmkLP6bRmyYa5jUcPJEku3C68X6/WuxR4gb8/JblnWHs29Hhq9wOOJOerr0WS+4uT+c/JoexBJHUfauYvC8NIcgHHHYvuf8/BlyV5louvzU65mujSuWQUy5697j1DH1j0np7G98kLN3nz66hv1P02IddjYvAcKE/7Q0+o+csy8zPjdzaSruHGKyH5RYYzhTdmat20+pSVMXdC+XXLhp7w+e+q+Z/rFZhjyRUer7wnkwBAeQqHHkfywBH/hbz3aMPTffSJRCfVQ37svMKftuHTjxIPuSDjJZ/eZvvRAXk9Oobak9Lyjs/vowHjizssPsLXCU0CiZve8+JE/W9xuvzWqYb7lRLifbbyHnmfMQUIdJii/pF4RzCaJPz+z60pNJjoSBQfaJ52IcAFnHF/jjuSIfrWg0J029qTyPTpbfVaYnY8vcBbu6Ff5dYdS7Z1tYjzqNpQNO0lMh5kkO8vC31zpz60xT+BTT3qVXf++tDj9nMus0S9IBT7QNOnt0XvUzr0ZA+baPCoXI+JwXOgPO0NPQVJftCryHAMAKgc+UVLm1lQ1C9zluTzoACBztIx/4DSLBp6rgs8B8rT+dDzPe1NsR9zCADVh9Bzg9DPQ6+itu0z0eJDd0gBAp2D0NP9aOhJnKHtwQfPgeujo6GndiIEPy4KAMsLQg8AlIXQAwBl6XxPDwAsayhaAKAs+AcAlIXQAwAdhaIFAMqCfwBAWQg9ANBRKFoAoCz4BwCUhdADAB2FogUAyoJ/AEBZCD0A0FEoWgCgLPgHAJSlVOiRHTsAAEph+QoAAADAUkLoAYCOYvmKMjExIaOjo8mVXABY3qgXqCdYXmGBfwCAJ88/CD0A0FEsX1FzUq5du5b8lhdCqDr61a9+1TJzc3MyOTlZKPjgHwhVV5Y/LEaefxB6AKCjWL6iV2UoWBCqpqyipAhauKg3WJ4Rgn8gVF1Z3lAEyz8IPQDQUSxf0e5ohFA1ZRUkRVFvsDwjBP9AqLqyfKEosX8QegCgo1i+QtGCUHVlFSNFIfQgtLxl+UJRCD0AcEOxfIWiBaEu09SQ9PX0SI9n5/FsQaZw+bohmc5mW7KKEc/q1avN+R5CD0LV0/RwX81b+oabuUd7/YPQAwAdxfIVihaEuknHZdAVI4Nj2WQ2XS9OpmVonZ8OX9uyihFFCxaPtVwh9CBUMSUXTPpkaCp6nSPLF5Qy/tHe0PPwWunt7c24Vb7whT7Z/xfb68sf3yanv7pK+v/41mSd2/74Htm1YYtcCfYxs2GlbNqwtb6NR/e9bvPC+QBwU2H5CkULQt2t4zuD3p64UBkbbNrbYxUjYcHSrHAh9CBULSW9PIFfqLe0etGkrH+0P/QEwWRu4E9l0x3rZfxxnd4up7+0Qtb0bZTz/ytb/7EB2f/Fu1zIeaS2DaEHoNpYvkLRglB3qyH0aMjpGZTagLd4OlJciFgFiydel9CDULXU4CVO8XSs2BMs3/DE63Y09MiOR2T/vStl/zfd621fl0drAShg+0Oy67Y+eWV7Ok3oAag2lq9QtCDUxcru36kNd4t7dpLlxUNPKxB6EKqW4p6dpOenhdDTCh0NPXMPr5f+u/vlvLGsznYZXXOnPPWNdJrQA1BtLF+haEGoW5Xez9NQlBB6EEIlVa3QU7unp1fuX7VBxrcFy3JCy+l1vbL74fQ1oQeg2li+QtGCUDfKCDyq6xze1gqEHoSqpesd3tYKSx96fDD5xnpZ43t54mUN0NMDsJywfIWiBaFuU/zEtkBxz07c8xPJKkaKQuhBqFqKe3binp9Yli8UpXOhJwkzn5NdG7Ont3FPDwA4LF+haEGom5Q+hjr/6mt7HlldBEIPQhVT+PTH8HWOLF8oSgdDj2NLv/R/nqe3AUAdy1coWhDqIiWFiAs9MQvu4zHmG4oLEeupS554XUIPQtXT9fw4qeUbnnjdzoYeF3Re6bu1HmIK/k5PeF+Qktzvo/uO5pvhCAC6GstXKFoQqq7iQkQpUrAohB6ElrcsXyjrH+0NPQAAi2D5CkULQtWVVYwoixUsCqEHoeUtyxeUMv5B6AGAjmL5CkULQtWVVYx4mhUsCqEHoeUtyxc8rfoHoQcAOorlKxQtCFVXVjFSFEIPQstbli8UhdADADcUy1dGR0fl2rVrmcUhhKokqxgpwtzcXOINlmeE4B8IVVeWNxTB8g9CDwB0FMtXJiYmEihcEKqerIJkMbRgmZycTHzB8owQ/AOh6sryh8XI8w9CDwB0FMtXFDUnvSqj3dEAsLxRLygSeDz4BwB48vyD0AMAHcXyFQAAAIClpFTo2UGj0Wglm+UrAAAAAEsJoYdGo3W0Wb6iMDwFADwMbwOAsrR1eFtYwNBoNForzfIVNSeFG5ERqp6sG40XgwcZIIRUlj8sRlsfZBAWMDQajdZKs3xFr8pQsCBUTVlFSRGsR85a4B8IVVeWNxTB8g9CD41G62izfEW7oxFC1ZRVkBRFvcHyjBD8A6HqyvKFosT+Qeih0WgdbZavULQgVF1ZxUhRCD0ILW9ZvlAUQg+NRruhzfIVihaEukxTQ9LX0yM9np3HswWZwuXrhmQ6m23JKkY8q1evNud7CD0IVU/Tw301b+kbbuYe7fUPQg+NRutos3yFogWhbtJxGXTFyOBYNplN14uTaRla56fD17asYkTRgsVjLVcIPQhVTMkFkz4Zmope58jyBaWMf7Q39JxcK729vRmfkxV/sV4emvFLN8va3rXuf7fKhof8Oo2sPLA1XffXW+TB79wnK+5K539u9b3Sd0yX6bYrZcMFv8+s6ft+Z3M4h0ajdWmzfIWiBaHu1vGdQW9PXKiMDTbt7bGKkbBgaVa4EHoQqpaSXp7AL9RbWr1oUtY/2h96fPj4zXZ55Ed9cudX+uWRZI4PPcnStF3YICsf2uCiTDDvNwOyfvWtsnJ4QLZeSedtn9kij8zqK0IPjXazN8tXKFoQ6m41hB4NOT2DUhvwFk9HigsRq2DxxOsSehCqlhq8xCmejhV7guUbnnjdzoWepG2R/i+vlAeT3p5ioWfb86vk1m9tlO3BvHoj9NBoN3uzfIWiBaEuVnb/Tm24W9yzkywvHnpagdCDULUU9+wkPT8thJ5W6HDoGZD19/XJxqTHpljo2fydXln7an26sRF6aLSbvVm+QtGCULcqvZ+noSgh9CCESqqaoec322RgeKV8buvXZVsyp4XQc7I+3djy7wci9NBoN0ezfIWiBaFulBF4VNc5vK0VCD0IVUvXO7ytFZY+9PgQcsftcs+3NsiWX/ul9PTQaDRCD0I3h+IntgWKe3binp9IVjFSFEIPQtVS3LMT9/zEsnyhKEsfenLDR/F7eu50++CeHhqtms3yFYoWhLpJ6WOo86++tueR1UUg9CBUMYVPfwxf58jyhaJ0fejZcWWzfGn1CvnigQHZ9pts3q+3yrakx4jQQ6Pd7M3yFYoWhLpISSHiQk/Mgvt4jPmG4kLEeuqSJ16X0INQ9XQ9P05q+YYnXrf7Q4+2uc3Sv+0euf2OdKic/k5P/1ldQuih0W72ZvkKRQtC1VVciChFChaF0IPQ8pblC2X9o72hh0aj0RZplq9QtCBUXVnFiLJYwaIQehBa3rJ8QSnjH4QeGo3W0Wb5CkULQtWVVYx4mhUsCqEHoeUtyxc8rfoHoYdGo3W0Wb5C0YJQdWUVI0Uh9CC0vGX5QlEIPTQa7YY2y1dGR0fl2rVrmcUhhKokqxgpwtzcXOINlmeE4B8IVVeWNxTB8g9CD41G62izfGViYiKBwgWh6skqSBZDC5bJycnEFyzPCME/EKquLH9YjDz/IPTQaLSONstXFDUnvSqj3dEAsLxRLygSeDz4BwB48vyD0EOj0TraLF8BAAAAWErKhZ4dAgBQCstXAAAAAJYSQg8AdBTLVxSGpwCAh+FtAFCW9g5vMwoZAIAiWL6i5qRwIzJC1ZN1o/Fi8CADhJDK8ofFaO+DDIxCBgCgCJav6FUZChaEqimrKCmC9chZC/wDoerK8oYiWP5B6AGAjmL5inZHI4SqKasgKYp6g+UZIfgHQtWV5QtFif2D0AMAHcXyFYoWhKorqxgpCqEHoeUtyxeKQugBgBuK5SsULQh1q6ZlaF2PDI5lk15TQ9LX0yM9yroht1a+rGLEs3r1anO+h9CDUPU0PdyXeoejb7iZe7TXPwg9ANBRLF+haEGoG5UGHi1MGkNPOj8tVsLXtqxiRNGCxWMtVwg9CFVMyQWTPhmail7nyPIFpYx/tC/0bBmRe+4ekUfCeY8dlVWff0oGHs+mB56SO+8akS1++Tf3y8qV+2Wrn3ZsXneb3Pnl8dr0jh1XZOOa+2X9N+rrAMDNi+UrFC0IdZl8T87OQRmMQ09cqIwNNu3tsYqRsGBpVrgQehCqlpJensAvju9s/aJJWf9oY0+PhpMV0vffr9TmDXz5AVn1tbna9OZ1m2TVqn5ZP+C3+Q/pv2uXbNzup8dl/edvk1vvcEEp22bHjtPypdt2y2YfnADgpsbyFYoWhLpMU8fleBJqji8MPRpyegbdkkzxdKS4ELEKFk+8LqEHoWpJQ07PzrpbxNOxYk+wfMMTr7uEocfxSNDbo708/yXo5dn+ivTd65ZtGZGVD9R7cjavWyFrH87WccvuWrNfNqx6QPq3BPNWHZVt2foAcHNj+QpFC0LdqpzQE/bsJD0/xUNPKxB6EKqW4p6dpOenhdDTCksbenZccSFmTdLbE/fybPvao3Lfgzp9Xvrv3SUPZb072zfuqg1n2/rnm2TlhhnZumGT3PWV/6htp/P8fgDg5sbyFYoWhLpVhB6EUPtUodDj0Pt0Pr9GVtw9IltqQ9Lm5MH7t8iDj6XTGmr6NmbD4LYdlVXJfT06PC7r4Qnu9XloLffzAFQJy1coWhDqVrV/eFsrEHoQqpaud3hbKyx96EnCS6988b/V7+1Jhr319kpvyP1HsiFrM7Jh5aPy9cdOy1p96EEyT+/12SQbvun+ezf38wBUCctXKFoQ6lYZoSfu2Yl7fiJZxUhRCD0IVUtxz07c8xPL8oWidCD06H06vfX7dByPfPXrDQ84SINOvedn4MtrZO1X9sk9607X1tnylQdk1Z/sk5XczwNQKSxfoWhBqFtlhB4Xb9rxyOoiEHoQqpjCpz/GT4I0ZPlCUTofeh7XJ7LV7+HxbHtwi9zz1fPp9MO7ZcUd99eHvCnfeEpW/NFt3M8DUDEsX6FoQahbZYUep6RY6Ul+w6dZL48qLkSspy554nUJPQhVT9fz46SWb3jidTsfegZceOl7RbZH6+x47Ijc53+zZ/uo9PXqcLZg+eOnZe0fcT8PQNWwfIWiBaHqKi5ElCIFi0LoQWh5y/KFsv6xJKEHACAPy1coWhCqrqxiRFmsYFEIPQgtb1m+oJTxD0IPAHQUy1coWhCqrqxixNOsYFEIPQgtb1m+4GnVPwg9ANBRLF+haEGourKKkaIQehBa3rJ8oSiEHgC4oVi+Mjo6KteuXcssDiFUJVnFSBHm5uYSb7A8IwT/QKi6sryhCJZ/EHoAoKNYvjIxMZFA4YJQ9WQVJIuhBcvk5GTiC5ZnhOAfCFVXlj8sRp5/EHoAoKNYvqKoOelVGe2OBoDljXpBkcDjwT8AwJPnH4QeAOgolq8AAAAALCWlQo/8sAcAoBSWrwAAAAAsJYQeAOgolq8oDE8BAA/D2wCgLG0d3mYVMgAARbB8Rc1J4UZkhKon60bjxeBBBgghleUPi9HWBxlYhQwAQBEsX9GrMhQsCFVTVlFSBOuRsxb4B0LVleUNRbD8g9ADAB3F8hXtjkYIVVNWQVIU9QbLM0LwD4SqK8sXihL7B6EHADqK5SsULQhVV1YxUhRCD0LLW5YvFIXQAwA3FMtXKFoQ6jJNDUlfT4/0eHYezxZkCpevG5LpbLYlqxjxrF692pzvIfQgVD1ND/fVvKVvuJl7tNc/CD0A0FEsX6FoQaibdFwGXTEyOJZNZtP14mRahtb56fC1LasYUbRg8VjLFUIPQhVTcsGkT4amotc5snxBKeMf7Q89hz8kRwY+JWvu7JXe3l5Zce8fyK7/+8F02Q9+S07v/KT03/XZZNltd31adn37Q3Kltv0HZf8Dvy/7/9lP15n59u/Lpm9n+wl58veSfYU0rPcvH5V9f/5p+cLtuuyz8oX7PiUj//BR2R1t49n9ZLbPgY+44/2I7L79EzJ6JNuX5+8/Lvf3/67MJccb7+P35HS4LgA0YPkKRQtC3a3jO4PenrhQGRts2ttjFSNhwdKscCH0IFQtJb08gV+ot7R60aSsf7Q39Pzgw/LUvZ+VTY9/WGayoHDlXz4k5w/o6w/I6f9xi6x56GNy/nC2/oEPy/6v/aELKb+d7aNk6NGAEs9XDvyOPHr7LS50/bZc+UE678qIO54wxFjbB/NOD3xWdv2/DzQsH3/0M7LlL3/Lvc4/XgCwsXyFogWh7lZD6NGQ0zMotQFv8XSkuBCxChZPvC6hB6FqqcFLnOLpWLEnWL7hiddd0tAzt/uTctvGjwU9NwEHXQC5++MynoWPGkc+Krvu/IS8kgSR9oYeDSf9j3/IXFZjkdAjf/dxub/hb3LB7u5PyZEkyBF6AFrF8hWKFoS6WNn9O7XhbnHPTrK8eOhpBUIPQtVS3LOT9Py0EHpaYUlDz+mBXtn9N/ay/HDyARnd+Bl56u/1dTtDj+7rD2T/P8XzIxYLPdp7dXcwxE2Htv3Z78hcsi6hB6BVLF+haEGoW5Xez9NQlBB6EEIlVa3Qo/fEGMvyw0m4XcnQ03BPjd++YCBZLPQ4xv/nZ2pD3PT1o7t1aJsu0/cI39uR8zcCQIrlKxQtCHWjjMCjus7hba1A6EGoWrre4W2tsPShp2o9PYoOcdPenaTX55Ny9KBft2CwAoAalq9QtCDUbYqf2BYo7tmJe34iWcVIUQg9CFVLcc9O3PMTy/KFoixp6NF7eu53YaGb7ukxtwkpEnqS+3g+IaNPhkPbFEIPQKtYvkLRglA3KX0Mdf7V1/Y8sroIhB6EKqbw6Y/h6xxZvlCUJQ09cuQj8tf33iI7vv1hmfPh5vAHZS55WtsNeHrbP/+ubLrz0/LXTwRPbzvojqeFp7d5xh+9Rfr/6x9GT3Ij9AC0iuUrFC0IdZGSQsSFnpgF9/EY8w3FhYj11CVPvC6hB6Hq6Xp+nNTyDU+87tKGHuXgR2Sk9rs46e/0jPxDtqzQ7/RE98hkv3ujoadxfvCbOtH8hnA08jHZ/ae3yIpkmf5OzydktDY8Ldu+QOhJHmDQG/9mT/7xNmwLADUsX6FoQai6igsRpUjBohB6EFresnyhrH+0P/QAADTB8hWKFoSqK6sYURYrWBRCD0LLW5YvKGX8g9ADAB3F8hWKFoSqK6sY8TQrWBRCD0LLW5YveFr1D0IPAHQUy1coWhCqrqxipCiEHoSWtyxfKAqhBwBuKJavjI6OyrVr1zKLQwhVSVYxUoS5ubnEGyzPCME/EKquLG8oguUfLYeekydPmoUMAEARLF+ZmJhIoHBBqHqyCpLF0IJlcnIy8QXLM0LwD4SqK8sfFsPyj/feey/JMKF3hJih58033zQLGQCAIli+oqg56VUZ7Y4GgOWNekGRwOPBPwDAY/nHL37xiyTDhPNCzNBz8eJFs5ABACiC5SsAAAAA7UZ7eDTwaC+PZhhrHcUMPYpupGlJd6Dj4wAAAAAAALoJzSqaWZoFHiU39AAAAAAAAFQBQg8AAAAAAFQaQg8AAAAAAFQaQg8AAAAAAFSYq/KfDAHQxIvbhzgAAAAASUVORK5CYII="},55247:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/rates-main-9097a3765f55fe6da05245882fa43f6c.png"},47405:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/rates-raceflight-8dd6038a2fb2ade7c373f8fecbc6d964.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(96540);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);