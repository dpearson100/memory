//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src;if(null!=b&&-1!=b.indexOf("index_hype_generated_script.js")){h=b.substr(0,b.lastIndexOf("/"));break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_538","HYPE_dtl_538",!0==(null!=a&&10>a||false==!0)?"HYPE-538.full.min.js":"HYPE-538.thin.min.js"),false==!0&&(a=a||l("HYPE_w_538","HYPE_wdtl_538","HYPE-538.waypoints.min.js")),a))return;
f=window.HYPE.documents;if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);for(var d=document.getElementsByTagName("div"),b=!1,a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"initializeScene",source:"function(hypeDocument, element, event) {\t\n\twindow.orderedList = new Array(\t\"card0.png\", \"card0.png\", \"card1.png\", \"card1.png\", \"card2.png\", \"card2.png\", \n\t\t\t\t\t\t\t\t\t\"card3.png\", \"card3.png\", \"card4.png\", \"card4.png\", \"card5.png\", \"card5.png\", \n\t\t\t\t\t\t\t\t\t\"card6.png\", \"card6.png\", \"card7.png\", \"card7.png\", \"card8.png\", \"card8.png\", \n\t\t\t\t\t\t\t\t\t\"card9.png\", \"card9.png\");\n\t\n\twindow.shuffledList = new Array();\n\tvar i = 0; \n\tfor (i=0; i < 20; i++) {\n\t\tvar temp1 = Math.floor(Math.random()*(window.orderedList.length));\n\t\twindow.shuffledList[i] = window.orderedList[temp1];\n\t\twindow.orderedList[temp1] = window.orderedList[0];\n\t\twindow.orderedList.shift(); \n\t\n\t}\n\t\n\t// NOTES ABOUT THE gameState variable\n\t// if gameState == 0, Start button has not been clicked\n\t// if gameState == 1, Waiting to click on 1st card of 2 cards\n\t// if gameState == 2, Waiting to click on 2nd card of 2 cards\n\t// if cardClicked occurs when gameState == 2 AND cards match\n\t//    then show both cards AND return to gameState == 1 \n\t// if cardClicked occurs when gameState == 2 AND cards do NOT match\n\t//    then show both cards AND set gameState == 3, \n\t//    then wait 1500 ms, (using SetTimeout function)\n\t//    then hide both cards AND set gameState == 1\n\t// if gameState == 3, waiting to flip over cards during setTimeout\n\t//    do NOT allow other cards to be clicked in this state\n\t\n\twindow.gameState = 0;\n\twindow.match1 = \"\";\n\twindow.match2 = \"\";\n\twindow.position1 = \"\";\n\twindow.position2 = \"\";\n\t\n\twindow.pairsRemaining = 10;\n\t\n}",identifier:"54"},{name:"startTimer",source:"function(hypeDocument, element, event) {\t\n\tif (window.gameState == 0) {\n\t\twindow.gameState = 1;\n\t\tvar i = 0; \n\t\tfor (i=0; i < 20; i++) {\n\t\t\tdisplayCards(i, \"show\");\t\n\t\t}\n\t\tsetTimeout(function() {\n\t\t\tvar i = 0; \n\t\t\tfor (i=0; i < 20; i++) {\n\t\t\t\tdisplayCards(i, \"hide\");\t\n\t\t\t}\n\t\t}, 1500);\n\t\twindow.timerInverval = setInterval(function() { \n\t\t\tvar temp1 = parseInt(hypeDocument.getElementById(\"timerValue\").innerHTML) + 1;\n\t\t\thypeDocument.getElementById(\"timerValue\").innerHTML = temp1;\n\t\t}, 1000);\n\t}\n\t\n\t\n\tfunction displayCards(index, display) {\t\n\t\twindow.temp1 = \"position\" + index;\n\t\tif (display == \"show\") {\n\t\t\twindow.temp2 = \"url('\" + hypeDocument.resourcesFolderURL() + \"/\" + window.window.shuffledList[index] + \"')\";\n\t\t} else {\n\t\t\twindow.temp2 = \"url('\" + hypeDocument.resourcesFolderURL() + \"/cardBack.png')\";\n\t\t}\n\t\thypeDocument.getElementById(window.temp1).style.backgroundImage = window.temp2;\n\t}\n\t\n}",identifier:"55"},{name:"cardClicked",source:"function(hypeDocument, element, event) {\t\n\tvar bgString = hypeDocument.getElementById(element.id).style.backgroundImage.search(\"cardBack\");\n\tif ((window.gameState != 0) && (window.gameState != 3) && (bgString != -1)) {\n\t\tvar temp1 = element.id;\n\t\tvar temp2 = temp1.slice(8);\n\t\tvar temp3 = \"url('\" + hypeDocument.resourcesFolderURL() + \"/\" + window.shuffledList[temp2] + \"')\";\n\t\t\n\t\tif (window.gameState == 1) {\n\t\t\thypeDocument.getElementById(element.id).style.backgroundImage = temp3;\n\t\t\twindow.match1 = window.shuffledList[temp2];\n\t\t\twindow.position1 = element.id;\n\t\t\thypeDocument.startTimelineNamed('match1');\n\t\t\twindow.gameState = 2;\n\t\t} else if (window.gameState == 2) {\n\t\t\twindow.match2 = window.shuffledList[temp2];\n\t\t\tif (window.match1 == window.match2) { // FOUND A MATCH\n\t\t\t\thypeDocument.getElementById(element.id).style.backgroundImage = temp3;\n\t\t\t\twindow.gameState = 1;\n\t\t\t\twindow.pairsRemaining = window.pairsRemaining - 1;\n\t\t\t\tif (window.pairsRemaining == 0) {\n\t\t\t\t\thypeDocument.startTimelineNamed('gameOver');\n\t\t\t\t\tclearInterval(window.timerInverval);\n\t\t\t\t\twindow.finalScore = parseInt(hypeDocument.getElementById(\"timerValue\").innerHTML);\n\t\t\t\t\t//alert(\"Finished in \" + window.finalScore + \" seconds.\");\n\t\t\t\t} else {\n\t\t\t\t\thypeDocument.startTimelineNamed('match2');\n\t\t\t\t}\n\t\t\t} else { // CARDS DID NOT MATCH\n\t\t\t\thypeDocument.getElementById(element.id).style.backgroundImage = temp3;\n\t\t\t\thypeDocument.startTimelineNamed('badMatch');\n\t\t\t\twindow.gameState = 3;\n\t\t\t\twindow.position2 = element.id;\n\t\t\t\twindow.cardBack = \"url('\" + hypeDocument.resourcesFolderURL() + \"/cardBack.png')\";\n\t\t\t\t\n\t\t\t\tsetTimeout(function() { \n\t\t\t\t\thypeDocument.getElementById(window.position1).style.backgroundImage = window.cardBack; \n\t\t\t\t\thypeDocument.getElementById(window.position2).style.backgroundImage = window.cardBack; \n\t\t\t\t\twindow.gameState = 1; \n\t\t\t\t}, 1500);\n\t\t\t}\n\t\t}\n\t}\n\t\n}",identifier:"66"},{name:"initializeCredits",source:"function(hypeDocument, element, event) {\t\n\thypeDocument.getElementById(\"timerValue2\").innerHTML = window.finalScore;\n\t\n\t\n}",identifier:"101"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),
d[b[a].name]=function(){}}a=new HYPE_538(c,e,{"10":{p:1,n:"card5.png",g:"60",t:"@1x"},"2":{p:1,n:"card9.png",g:"56",t:"@1x"},"15":{p:2,n:"background.mp3",g:"75",t:"audio/mpeg"},"3":{p:1,n:"card7.png",g:"58",t:"@1x"},"11":{p:2,n:"match1.mp3",g:"68",t:"audio/mpeg"},"4":{p:1,n:"card6.png",g:"59",t:"@1x"},"16":{p:1,n:"gradient.png",g:"84",t:"@1x"},"5":{p:1,n:"card4.png",g:"61",t:"@1x"},"12":{p:2,n:"match2.mp3",g:"70",t:"audio/mpeg"},"17":{p:1,n:"memoryStencil.png",g:"86",t:"@1x"},"6":{p:1,n:"card3.png",g:"62",t:"@1x"},"13":{p:2,n:"badMatch.mp3",g:"72",t:"audio/mpeg"},"7":{p:1,n:"card2.png",g:"63",t:"@1x"},"0":{p:1,n:"cardBack.png",g:"24",t:"@1x"},"8":{p:1,n:"card1.png",g:"64",t:"@1x"},"14":{p:2,n:"gameOver.mp3",g:"74",t:"audio/mpeg"},"1":{p:1,n:"card8.png",g:"57",t:"@1x"},"9":{p:1,n:"card0.png",g:"65",t:"@1x"}},h,[],d,[{n:"splash",o:"81",X:[0]},{n:"scene1",o:"1",X:[1]},{n:"credits",o:"94",X:[2]}],[{o:"83",p:"600px",x:0,cA:false,Z:600,Y:800,c:"#000000",L:[],bY:1,d:800,U:{},T:{"93_hover":{i:"93_hover",n:"93_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#FFFFFF",o:"112"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#FFFFFF",o:"112"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#FFFFFF",o:"112"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#FFFFFF",o:"112"},{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#FFFFFF",o:"112"},{y:1,i:"G",s:"#FF2600",z:0,o:"112",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"112",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"112",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"112",f:"c"},{y:1,i:"A",s:"#FF2600",z:0,o:"112",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:3,b:[],a:[{f:"b",y:0,z:3,i:"a",e:-470,s:0,o:"111"},{f:"c",p:2,y:3,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"82"}]},o:"kTimelineDefaultIdentifier"},{y:3,i:"a",s:-470,z:0,o:"111",f:"c"}],f:30}},bZ:180,O:["112","109","110","108","111"],v:{"109":{G:"#FFFFFF",aU:8,c:784,aV:8,d:44,r:"inline",s:"'Arial Black',Gadget,Sans-Serif",t:24,Z:"break-word",w:"Match all 20 Flash Cards as quickly as possible",j:"absolute",x:"visible",k:"div",y:"preserve",z:4,aS:8,aT:8,a:0,F:"center",b:370},"111":{h:"84",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",z:1,k:"div",c:1200,d:300,cQ:1,cR:1},"112":{b:460,z:5,K:"Solid",c:178,L:"Solid",d:58,aS:6,M:15,bD:"none",N:15,aT:6,O:15,g:"#000000",aU:6,P:15,aV:6,j:"absolute",aI:30,k:"div",aJ:30,aK:30,aL:30,A:"#FFFFFF",B:"#FFFFFF",aM:"93_hover",Z:"break-word",C:"#FFFFFF",r:"inline",s:"'Arial Black',Gadget,Sans-Serif",D:"#FFFFFF",t:36,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",G:"#FFFFFF",aP:"pointer",w:"START",x:"visible",I:"Solid",a:290,y:"preserve",J:"Solid"},"108":{h:"86",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:800,k:"div",z:2,d:300},"110":{G:"#FFFFFF",aU:8,c:784,aV:8,d:74,r:"inline",s:"'Arial Black',Gadget,Sans-Serif",t:52,Z:"break-word",w:"by Darren Pearson",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:0,F:"center",b:280}}},{A:{a:[{p:4,h:"54"},{p:12,o:"75",q:false}]},o:"3",p:"600px",x:1,cA:false,Z:600,Y:800,c:"#00FDFF",L:[],bY:1,d:800,U:{},T:{"77_hover":{i:"77_hover",n:"77_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"B",e:"#000000",s:"#FF2600",o:"113"},{f:"c",y:0,z:1,i:"C",e:"#000000",s:"#FF2600",o:"113"},{f:"c",y:0,z:1,i:"D",e:"#000000",s:"#FF2600",o:"113"},{f:"c",y:0,z:1,i:"A",e:"#000000",s:"#FF2600",o:"113"},{f:"c",y:0,z:1,i:"G",e:"#000000",s:"#FF2600",o:"113"},{y:1,i:"B",s:"#000000",z:0,o:"113",f:"c"},{y:1,i:"C",s:"#000000",z:0,o:"113",f:"c"},{y:1,i:"D",s:"#000000",z:0,o:"113",f:"c"},{y:1,i:"A",s:"#000000",z:0,o:"113",f:"c"},{y:1,i:"G",s:"#000000",z:0,o:"113",f:"c"}],f:30},"73":{i:"73",n:"gameOver",z:3,b:[],a:[{f:"c",p:2,y:0,z:1,i:"ActionHandler",e:{a:[{p:12,o:"74",q:false}]},s:{a:[{p:13,o:"75",q:false}]},o:"73"},{f:"c",y:0,z:0.01,i:"cY",e:"0",s:"1",o:"123"},{f:"c",y:0,z:3,i:"e",e:1,s:0,o:"139"},{f:"c",y:0,z:3,i:"e",e:1,s:0,o:"123"},{f:"c",y:0,z:0.01,i:"cY",e:"0",s:"1",o:"113"},{f:"c",y:0,z:3,i:"e",e:1,s:0,o:"113"},{f:"c",y:0,z:0.01,i:"cY",e:"0",s:"1",o:"139"},{y:0.01,i:"cY",s:"0",z:0,o:"123",f:"c"},{y:0.01,i:"cY",s:"0",z:0,o:"113",f:"c"},{y:0.01,i:"cY",s:"0",z:0,o:"139",f:"c"},{f:"c",p:2,y:1,z:0,i:"ActionHandler",s:{a:[{p:12,o:"74",q:false}]},o:"73"},{y:3,i:"e",s:1,z:0,o:"139",f:"c"},{y:3,i:"e",s:1,z:0,o:"113",f:"c"},{y:3,i:"e",s:1,z:0,o:"123",f:"c"}],f:30},"71":{i:"71",n:"badMatch",z:0,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"72",q:false}]},o:"71"}],f:30},"80_hover":{i:"80_hover",n:"80_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"G",e:"#000000",s:"#FF2600",o:"123"},{f:"c",y:0,z:1,i:"D",e:"#000000",s:"#FF2600",o:"123"},{f:"c",y:0,z:1,i:"C",e:"#000000",s:"#FF2600",o:"123"},{f:"c",y:0,z:1,i:"B",e:"#000000",s:"#FF2600",o:"123"},{f:"c",y:0,z:1,i:"A",e:"#000000",s:"#FF2600",o:"123"},{y:1,i:"G",s:"#000000",z:0,o:"123",f:"c"},{y:1,i:"D",s:"#000000",z:0,o:"123",f:"c"},{y:1,i:"C",s:"#000000",z:0,o:"123",f:"c"},{y:1,i:"B",s:"#000000",z:0,o:"123",f:"c"},{y:1,i:"A",s:"#000000",z:0,o:"123",f:"c"}],f:30},"69":{i:"69",n:"match2",z:0,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"70",q:false}]},o:"69"}],f:30},"22_hover":{i:"22_hover",n:"22_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#FFFFFF",o:"130"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#FFFFFF",o:"130"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#FFFFFF",o:"130"},{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#FFFFFF",o:"130"},{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#FFFFFF",o:"130"},{y:1,i:"B",s:"#FF2600",z:0,o:"130",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"130",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"130",f:"c"},{y:1,i:"A",s:"#FF2600",z:0,o:"130",f:"c"},{y:1,i:"G",s:"#FF2600",z:0,o:"130",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30},"67":{i:"67",n:"match1",z:0,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"68",q:false}]},o:"67"}],f:30}},bZ:180,O:["123","113","139","136","134","127","122","117","115","140","137","132","128","125","119","118","116","138","133","129","124","120","135","130","126","121","114","131"],v:{"136":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"24",M:0,i:"position19",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"66"}]},j:"absolute",O:0,k:"div",C:"#D8DDE4",z:25,B:"#D8DDE4",D:"#D8DDE4",P:0,a:460,b:455},"128":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"24",M:0,i:"position10",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"66"}]},j:"absolute",O:0,k:"div",C:"#D8DDE4",z:16,B:"#D8DDE4",D:"#D8DDE4",P:0,a:60,b:320},"140":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"24",M:0,i:"position13",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"66"}]},j:"absolute",O:0,k:"div",C:"#D8DDE4",z:19,B:"#D8DDE4",D:"#D8DDE4",P:0,a:360,b:320},"132":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"24",M:0,i:"position11",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"66"}]},j:"absolute",O:0,k:"div",C:"#D8DDE4",z:17,B:"#D8DDE4",D:"#D8DDE4",P:0,a:160,b:320},"124":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"24",M:0,i:"position2",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"66"}]},j:"absolute",O:0,k:"div",C:"#D8DDE4",z:8,B:"#D8DDE4",D:"#D8DDE4",P:0,a:260,b:50},"116":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"24",M:0,i:"position6",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"66"}]},j:"absolute",O:0,k:"div",C:"#D8DDE4",z:12,B:"#D8DDE4",D:"#D8DDE4",P:0,a:160,b:185},"137":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"24",M:0,i:"position12",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"66"}]},j:"absolute",O:0,k:"div",C:"#D8DDE4",z:18,B:"#D8DDE4",D:"#D8DDE4",P:0,a:260,b:320},"129":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"24",M:0,i:"position3",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"66"}]},j:"absolute",O:0,k:"div",C:"#D8DDE4",z:9,B:"#D8DDE4",D:"#D8DDE4",P:0,a:360,b:50},"120":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"24",M:0,i:"position1",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"66"}]},j:"absolute",O:0,k:"div",C:"#D8DDE4",z:7,B:"#D8DDE4",D:"#D8DDE4",P:0,a:160,b:50},"133":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"24",M:0,i:"position4",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"66"}]},j:"absolute",O:0,k:"div",C:"#D8DDE4",z:10,B:"#D8DDE4",D:"#D8DDE4",P:0,a:460,b:50},"125":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"24",M:0,i:"position9",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"66"}]},j:"absolute",O:0,k:"div",C:"#D8DDE4",z:15,B:"#D8DDE4",D:"#D8DDE4",P:0,a:460,b:185},"117":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"24",M:0,i:"position15",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"66"}]},j:"absolute",O:0,k:"div",C:"#D8DDE4",z:21,B:"#D8DDE4",D:"#D8DDE4",P:0,a:60,b:455},"138":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"24",M:0,i:"position5",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"66"}]},j:"absolute",O:0,k:"div",C:"#D8DDE4",z:11,B:"#D8DDE4",D:"#D8DDE4",P:0,a:60,b:185},"121":{G:"#FFFFFF",aU:8,c:184,aV:8,d:44,r:"inline",s:"'Arial Black',Gadget,Sans-Serif",t:32,Z:"break-word",i:"timerTitle",w:"TIME",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:600,F:"center",b:80},"113":{b:407,z:27,K:"Solid",c:198,L:"Solid",d:39,aS:6,M:10,e:0,bD:"none",N:10,aT:6,O:10,g:"rgba(255, 255, 255, 0.750)",aU:6,P:10,i:"playAgainButton",aV:6,j:"absolute",aI:25,k:"div",aJ:25,aK:25,aL:25,A:"#FF2600",B:"#FF2600",aM:"77_hover",Z:"break-word",C:"#FF2600",cY:"1",s:"'Arial Black',Gadget,Sans-Serif",D:"#FF2600",r:"inline",t:24,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"81"}]},F:"center",G:"#FF2600",aP:"pointer",w:"PLAY AGAIN?",x:"visible",I:"Solid",a:60,y:"preserve",J:"Solid"},"134":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"24",M:0,i:"position18",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"66"}]},j:"absolute",O:0,k:"div",C:"#D8DDE4",z:24,B:"#D8DDE4",D:"#D8DDE4",P:0,a:360,b:455},"126":{G:"#FFFFFF",aU:8,c:184,aV:8,d:44,r:"inline",s:"'Arial Black',Gadget,Sans-Serif",t:32,Z:"break-word",i:"timerValue",w:"0\n",j:"absolute",x:"visible",k:"div",y:"preserve",z:4,aS:8,aT:8,a:600,F:"center",b:140},"118":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"24",M:0,i:"position7",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"66"}]},j:"absolute",O:0,k:"div",C:"#D8DDE4",z:13,B:"#D8DDE4",D:"#D8DDE4",P:0,a:260,b:185},"139":{G:"#FF2600",bB:3,aU:8,c:584,d:114,bC:3,cY:"1",e:0,s:"'Arial Black',Gadget,Sans-Serif",aV:8,r:"inline",t:72,Z:"break-word",i:"gameOverText",w:"GAME OVER",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:26,aS:8,aT:8,a:0,bA:"#000000",F:"center",b:110},"130":{b:470,z:5,K:"Solid",c:148,L:"Solid",d:48,aS:6,M:10,bD:"none",N:10,aT:6,O:10,aU:6,P:10,i:"startButton",aV:6,j:"absolute",aI:30,k:"div",aJ:30,aK:30,aL:30,A:"#FFFFFF",B:"#FFFFFF",aM:"22_hover",Z:"break-word",C:"#FFFFFF",r:"inline",s:"'Arial Black',Gadget,Sans-Serif",D:"#FFFFFF",t:32,aA:{a:[{p:4,h:"55"}]},F:"center",G:"#FFFFFF",aP:"pointer",w:"START",x:"visible",I:"Solid",a:610,y:"preserve",J:"Solid"},"122":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"24",M:0,i:"position16",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"66"}]},j:"absolute",O:0,k:"div",C:"#D8DDE4",z:22,B:"#D8DDE4",D:"#D8DDE4",P:0,a:160,b:455},"114":{G:"#FFFFFF",aU:8,c:184,aV:8,d:44,r:"inline",s:"'Arial Black',Gadget,Sans-Serif",t:32,Z:"break-word",i:"title",w:"MEMORY",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:600,F:"center",b:20},"135":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"24",M:0,i:"position0",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"66"}]},j:"absolute",O:0,k:"div",C:"#D8DDE4",z:6,B:"#D8DDE4",D:"#D8DDE4",P:0,a:60,b:50},"127":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"24",M:0,i:"position17",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"66"}]},j:"absolute",O:0,k:"div",C:"#D8DDE4",z:23,B:"#D8DDE4",D:"#D8DDE4",P:0,a:260,b:455},"119":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"24",M:0,i:"position8",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"66"}]},j:"absolute",O:0,k:"div",C:"#D8DDE4",z:14,B:"#D8DDE4",D:"#D8DDE4",P:0,a:360,b:185},"131":{c:200,d:600,I:"None",J:"None",K:"None",g:"#000000",L:"None",M:0,i:"sidebar",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:600,b:0},"123":{b:407,z:28,K:"Solid",c:198,L:"Solid",d:39,aS:6,M:10,e:0,bD:"none",N:10,aT:6,O:10,g:"rgba(255, 255, 255, 0.750)",aU:6,P:10,i:"creditsButton",aV:6,j:"absolute",aI:25,k:"div",aJ:25,aK:25,aL:25,A:"#FF2600",B:"#FF2600",aM:"80_hover",Z:"break-word",C:"#FF2600",cY:"1",s:"'Arial Black',Gadget,Sans-Serif",D:"#FF2600",r:"inline",t:24,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"94"}]},F:"center",G:"#FF2600",aP:"pointer",w:"CREDITS",x:"visible",I:"Solid",a:306,y:"preserve",J:"Solid"},"115":{p:"no-repeat",c:75,q:"100% 100%",d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"24",M:0,i:"position14",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"66"}]},j:"absolute",O:0,k:"div",C:"#D8DDE4",z:20,B:"#D8DDE4",D:"#D8DDE4",P:0,a:460,b:320}}},{A:{a:[{p:4,h:"101"}]},o:"96",p:"600px",x:2,cA:false,Z:600,Y:800,c:"#00FDFF",L:[],bY:1,d:800,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:15,b:[],a:[{f:"b",y:0,z:15,i:"b",e:-600,s:600,o:"141"},{f:"c",p:2,y:15,z:0,i:"ActionHandler",s:{a:[{d:1.1000000000000001,p:1,g:1,e:"81"}]},o:"kTimelineDefaultIdentifier"},{y:15,i:"b",s:-600,z:0,o:"141",f:"c"}],f:30}},bZ:180,O:["141","144","142","143","145"],v:{"143":{G:"#FFFFFF",aU:8,c:184,aV:8,d:44,r:"inline",s:"'Arial Black',Gadget,Sans-Serif",t:32,Z:"break-word",i:"title2",w:"MEMORY",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:600,F:"center",b:20},"144":{G:"#FFFFFF",aU:8,c:184,aV:8,d:44,r:"inline",s:"'Arial Black',Gadget,Sans-Serif",t:32,Z:"break-word",i:"timerValue2",w:"0\n",j:"absolute",x:"visible",k:"div",y:"preserve",z:4,aS:8,aT:8,a:600,F:"center",b:140},"141":{G:"#000000",aU:8,c:584,aV:8,d:584,r:"inline",s:"'Arial Black',Gadget,Sans-Serif",t:24,Z:"break-word",w:"<font size=\"7\">Memory</font><br><br>\n\nGraphics by YOUR NAME<br><br>\n\nJavascript by Darren Pearson<br><br>\n\nBackground Music by RoccoW<br>\nhttps://twitter.com/RoccoWNL<br><br>\n\nOther Audio by ChipTune<br>\nhttp://www.sfbgames.com/chiptone/<br><br>\n\nSPECIAL THANKS TO:<br><br>\nSaint Paul College DGIM Department<br>\nADD FAMILY AND FRIENDS HERE<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:5,aS:8,aT:8,a:0,F:"center",b:600},"145":{c:200,d:600,I:"None",J:"None",K:"None",g:"#000000",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,k:"div",C:"#D8DDE4",z:1,O:0,D:"#D8DDE4",a:600,b:0},"142":{G:"#FFFFFF",aU:8,c:184,aV:8,d:44,r:"inline",s:"'Arial Black',Gadget,Sans-Serif",t:32,Z:"break-word",i:"timerTitle2",w:"TIME",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:600,F:"center",b:80}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
