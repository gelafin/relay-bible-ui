(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{160:function(e,t,u){"use strict";u.d(t,"a",(function(){return fe}));var i=u(0),s=u(2),n=u(4),a=u(217),r=u(218),l=u(89),o=u(5),m=u.n(o),c=u(219),d="#FFF",p="#DADADA",h="#EEE",b="#FCF2D8",g="red",j="blue",f=s.a.create({page:{flex:1,backgroundColor:d},pageMargins:{marginLeft:"20px",marginRight:"20px",flex:1},horizontalContainer:{flexDirection:"row"},centerAlign:{alignItems:"center"},centerJustify:{justifyContent:"center"},absolute:{position:"absolute"},appBar:{backgroundColor:h},appBarBold:{backgroundColor:p},appBarSmall:{height:"fit-content",paddingTop:"10px",paddingBottom:"10px"},appBarSmallText:{fontSize:"1rem"},readingPage:{backgroundColor:b},listSelectOption:{padding:20,cursor:"pointer"},listSelectOptionSelected:{backgroundColor:b},modalContainerStyle:{backgroundColor:d,padding:20,width:"80vw",marginLeft:"auto",marginRight:"auto",height:"100%"},inline:{display:"inline"},drawer:{position:"fixed",bottom:0,width:"100vw",height:"250px",backgroundColor:d,padding:"10px 30px",zIndex:100,boxShadow:"rgb(0 0 0 / 60%) 0px -4px 4px 2px"},fullHeight:{height:"100vh"}}),x=(f.horizontalContainer,f.centerJustify,f.absolute,u(1)),C=function(e){var t=e.headingText;return Object(x.jsx)(c.a.Header,{style:f.appBarBold,children:Object(x.jsx)(c.a.Content,{title:t})})},P=u(163),v=u(19),O=function(e){var t=e.label;return Object(x.jsx)(v.a,{children:Object(x.jsx)("b",{children:t})})};function q(e){var t=e.label,u=e.onSubmit,s=e.initialValue,a=e.inputComponent,r=e.inputComponentProps,l=Object(i.useState)("edit"),o=m()(l,2),c=o[0],d=o[1],p=Object(i.useState)({}),h=m()(p,2),b=h[0],g=h[1],j=Object(i.useState)(s),f=m()(j,2),C=f[0],v=f[1];Object(i.useEffect)((function(){d("edit")}),[]),Object(i.useEffect)((function(){g({icon:q[c],onPress:S[c]})}),[c]);var q={edit:"pencil",save:"content-save"},S={edit:null,save:w},w=function(){u(C),d("edit")},N=a;return Object(x.jsxs)(n.a,{children:[Object(x.jsx)(O,{label:t}),Object(x.jsxs)(n.a,{style:[D.container,D.verticalCenter],children:[Object(x.jsx)(N,{handleChange:function(e){v(e),d("save")},currentValue:C,otherProps:r}),Object(x.jsx)(P.a,{icon:b.icon,mode:"text",onPress:w,style:D.iconButton})]})]})}var D=s.a.create({container:{flex:1,flexFlow:"row wrap",justifyContent:"flex-start"},verticalCenter:{alignItems:"center"},iconButton:{height:"fit-content",width:"fit-content"}}),S=u(151),w=s.a.create({default:{padding:"5px",backgroundColor:"#eee",borderRadius:"5px"}}),N=function(e){var t=e.handleChange,u=e.currentValue;return Object(x.jsx)(S.a,{onChangeText:t,value:u,style:w.default})},y=u(112),L=function(e){var t=e.handleChange,u=e.currentValue,i=e.otherProps,s=m()(i,1)[0];return Object(x.jsx)(y.a,{onValueChange:function(e){t(e)},selectedValue:u,style:w.default,children:s.map((function(e){return Object(x.jsx)(y.a.Item,{label:e.label,value:e.value},e.value)}))})},V=function(e){var t=e.label,u=e.children;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(O,{label:t}),Object(x.jsx)(n.a,{style:[E.border,E.padding],children:u})]})},E=s.a.create({border:{borderColor:"#e5e5e5",borderLeftWidth:"1px"},padding:{paddingLeft:"10px"}}),M=function(e){var t=e.children,u=e.customPageStyle;return Object(x.jsx)(n.a,{style:[f.page,u],children:Object(x.jsx)(n.a,{style:f.pageMargins,children:t})})},k=u(222),T=s.a.create({default:{padding:"5px",backgroundColor:j,borderRadius:"5px",width:"fit-content",cursor:"pointer"},defaultLabel:{color:d},warningLabel:{color:g},warning:{backgroundColor:d,borderColor:g},chip:{padding:0,borderRadius:"20px"},transparent:{backgroundColor:""}}),A=function(e){var t=e.onPress,u=e.children;return Object(x.jsx)(k.a,{icon:"delete",mode:"outlined",style:[T.default,T.warning],labelStyle:T.warningLabel,onPress:t,children:u})},G=u(221),B=u(223),R=u(220),I=u(216),H=function(e){var t=e.title,u=e.description,i=e.shouldShowDialog,s=e.setShouldShowDialog,n=e.onConfirm,a=e.onCancel,r=function(){return s(!1)};return Object(x.jsx)(G.a,{children:Object(x.jsx)(B.a,{children:Object(x.jsxs)(R.a,{visible:i,onDismiss:r,children:[Object(x.jsx)(R.a.Title,{children:t}),Object(x.jsx)(R.a.Content,{children:Object(x.jsx)(I.a,{children:u})}),Object(x.jsxs)(R.a.Actions,{children:[Object(x.jsx)(k.a,{onPress:function(){r(),n()},children:"Confirm"}),Object(x.jsx)(k.a,{onPress:function(){r(),a&&a()},children:"Cancel"})]})]})})})},z=function(e){var t=e.headingText,u=e.customHeadingComponent;return Object(x.jsx)(c.a.Header,{style:[f.appBar,f.appBarSmall],children:u||Object(x.jsx)(c.a.Content,{title:t,titleStyle:f.appBarSmallText})})},J=u(36),F=s.a.create({superscript:{fontSize:"0.7rem"},plain:{color:"black"},listSelectOption:{fontSize:32},selectedVerse:{borderBottomColor:j,borderBottomWidth:"2px"}}),_=function(e){var t=e.onPress,u=e.label;return Object(x.jsx)(k.a,{mode:"outlined",uppercase:!1,style:[T.default,T.chip,T.transparent],labelStyle:F.plain,onPress:t,children:u})},U=u(18),W=u.n(U),Y=u(152),K=u(84),Z={Genesis:{chapterCount:50,order:1},Exodus:{chapterCount:40,order:2},Leviticus:{chapterCount:27,order:3},Numbers:{chapterCount:36,order:4},Deuteronomy:{chapterCount:34,order:5},Joshua:{chapterCount:24,order:6},Judges:{chapterCount:21,order:7},Ruth:{chapterCount:4,order:8},"1 Samuel":{chapterCount:31,order:9},"2 Samuel":{chapterCount:24,order:10},"1 Kings":{chapterCount:22,order:11},"2 Kings":{chapterCount:25,order:12},"1 Chronicles":{chapterCount:29,order:13},"2 Chronicles":{chapterCount:36,order:14},Ezra:{chapterCount:10,order:15},Nehemiah:{chapterCount:13,order:16},Esther:{chapterCount:10,order:17},Job:{chapterCount:42,order:18},Psalms:{chapterCount:150,order:19},Proverbs:{chapterCount:31,order:20},Ecclesiastes:{chapterCount:12,order:21},"Song of Solomon":{chapterCount:8,order:22},Isaiah:{chapterCount:66,order:23},Jeremiah:{chapterCount:52,order:24},Lamentations:{chapterCount:5,order:25},Ezekiel:{chapterCount:48,order:26},Daniel:{chapterCount:12,order:27},Hosea:{chapterCount:14,order:28},Joel:{chapterCount:3,order:29},Amos:{chapterCount:9,order:30},Obadiah:{chapterCount:1,order:31},Jonah:{chapterCount:4,order:32},Micah:{chapterCount:7,order:33},Nahum:{chapterCount:3,order:34},Habakkuk:{chapterCount:3,order:35},Zephaniah:{chapterCount:3,order:36},Haggai:{chapterCount:2,order:37},Zechariah:{chapterCount:14,order:38},Malachi:{chapterCount:4,order:39},Matthew:{chapterCount:28,order:40},Mark:{chapterCount:16,order:41},Luke:{chapterCount:24,order:42},John:{chapterCount:21,order:43},Acts:{chapterCount:28,order:44},Romans:{chapterCount:16,order:45},"1 Corinthians":{chapterCount:16,order:46},"2 Corinthians":{chapterCount:13,order:47},Galatians:{chapterCount:6,order:48},Ephesians:{chapterCount:6,order:49},Philippians:{chapterCount:4,order:50},Colossians:{chapterCount:4,order:51},"1 Thessalonians":{chapterCount:5,order:52},"2 Thessalonians":{chapterCount:3,order:53},"1 Timothy":{chapterCount:6,order:54},"2 Timothy":{chapterCount:4,order:55},Titus:{chapterCount:3,order:56},Philemon:{chapterCount:1,order:57},Hebrews:{chapterCount:13,order:58},James:{chapterCount:5,order:59},"1 Peter":{chapterCount:5,order:60},"2 Peter":{chapterCount:3,order:61},"1 John":{chapterCount:5,order:62},"2 John":{chapterCount:1,order:63},"3 John":{chapterCount:1,order:64},Jude:{chapterCount:1,order:65},Revelation:{chapterCount:22,order:66}},Q=u(153),X=function(e){var t=e.label,u=e.onPress,i=e.isSelected;return Object(x.jsx)(Q.a,{style:[f.listSelectOption,i&&f.listSelectOptionSelected],onPress:u,children:Object(x.jsx)(v.a,{style:F.listSelectOption,children:t})})},$=function(e){var t=e.visible,u=e.setVisible,s=e.onChapterSelect,a=e.initialBookName,r=e.initialChapterNumber,l=Object(i.useState)(a),o=m()(l,2),c=o[0],d=o[1],p=Object(i.useState)(r),h=m()(p,2),b=h[0],g=h[1],j=Object(i.useState)(0),C=m()(j,2),P=C[0],v=C[1],O=Object(i.useState)(),q=m()(O,2),D=q[0],S=q[1],w=function(){b||(d(a),g(r)),u(!1)},N=Object.keys(Z).map((function(e){return{bookName:e}})),y=P&&W()(Array(P).keys()).map((function(e){return{chapterNumber:++e}}));Object(i.useEffect)((function(){var e;v(null==(e=Z[c])?void 0:e.chapterCount),c===a?S(r):(g(null),S(null))}),[c]),Object(i.useEffect)((function(){b!==r&&S(b),b&&(w(),s({book:c,chapter:b}))}),[b]);return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(B.a,{children:Object(x.jsx)(Y.a,{visible:t,onDismiss:w,contentContainerStyle:f.modalContainerStyle,children:Object(x.jsxs)(n.a,{style:[f.page,f.horizontalContainer],children:[Object(x.jsx)(K.a,{data:N,renderItem:function(e){var t=e.item;return Object(x.jsx)(X,{label:t.bookName,onPress:function(){return d(t.bookName)},isSelected:t.bookName===c})},keyExtractor:function(e){return e.bookName}}),Object(x.jsx)(K.a,{data:y,renderItem:function(e){var t=e.item;return Object(x.jsx)(X,{label:t.chapterNumber,onPress:function(){return g(t.chapterNumber)},isSelected:t.chapterNumber===D})},keyExtractor:function(e){return e.chapterNumber}})]})})})})},ee=u(161),te=function(e){var t=e.verseText,u=e.verseNumber,i=e.onVersePress,s=e.isSelected;return Object(x.jsx)(ee.a,{style:f.inline,onPress:function(){i({text:t,number:u})},children:Object(x.jsxs)(v.a,{style:[F,s&&F.selectedVerse],children:[Object(x.jsx)(v.a,{style:F.superscript,children:u}),Object(x.jsx)(v.a,{children:" "+t+" "})]})})},ue=function(e){var t=e.isOpen,u=e.children,i=e.minimize;return Object(x.jsx)(x.Fragment,{children:t&&Object(x.jsx)(n.a,{style:[f.drawer,!i&&f.fullHeight],children:u})})},ie=function(e){var t=e.onPress,u=e.children;return Object(x.jsx)(k.a,{mode:"contained",style:T.default,labelStyle:T.defaultLabel,onPress:t,children:u})},se="chevron-up",ne="chevron-down",ae={HIDDEN:"transparent",DEFAULT:T.default.backgroundColor},re=function(e){var t=e.onPress,u=e.isInitiallyUp,s=e.hide,n=Object(i.useState)(u),a=m()(n,2),r=a[0],l=a[1],o=Object(i.useState)(),c=m()(o,2),d=c[0],p=c[1],h=Object(i.useState)(!0),b=m()(h,2),g=b[0],j=b[1];return Object(i.useEffect)((function(){j(s),p(s?ae.HIDDEN:ae.DEFAULT)}),[s]),Object(x.jsx)(P.a,{icon:r?se:ne,size:20,onPress:function(){l(!r),t()},color:d,iconColor:d,disabled:g,style:s&&{pointerEvents:"none"}})},le=function(e){var t=e.onPress;return Object(x.jsx)(P.a,{icon:"close",size:20,onPress:t})},oe=function(e){var t=e.contextHeaderText,u=e.onClosePress,i=e.onExpandPress,s=Object(x.jsx)(le,{onPress:u,style:!u&&{visibility:"hidden"}}),a=Object(x.jsx)(re,{onPress:i,isInitiallyUp:!0,hide:!i});return Object(x.jsxs)(n.a,{style:[f.horizontalContainer,{justifyContent:"space-between",marginLeft:"10px",marginRight:"10px"}],children:[Object(x.jsx)(v.a,{children:t}),s,a]})},me=function(e){var t=e.currentBook,u=e.currentChapter,s=e.selectedVerses,a=e.onClosePress,r=e.onRelatedNotesPress,l=e.onRelatedCommentaryPress,o=Object(i.useState)(),c=m()(o,2),d=c[0],p=c[1];return Object(i.useEffect)((function(){var e=t+" "+u+":"+s.slice(0,1);e+=(null==s?void 0:s.length)>1?" etc":"",p(e)}),[t,u,s]),Object(x.jsxs)(n.a,{children:[Object(x.jsx)(oe,{contextHeaderText:d,onClosePress:a}),Object(x.jsxs)(n.a,{style:[f.horizontalContainer,{alignSelf:"flex-end"}],children:[Object(x.jsx)(ie,{onPress:r,children:"Related Notes"}),Object(x.jsx)(ie,{onPress:l,children:"Related Commentary"})]})]})},ce=function(e){var t=e.contextHeaderText,u=e.onClosePress,i=e.onExpandPress,s=e.children;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(oe,{contextHeaderText:t,onClosePress:u,onExpandPress:i}),s]})},de=function(e){var t=e.initialSelectedVerses,u=Object(i.useState)(t),s=m()(u,2),n=s[0];s[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(z,{children:n}),Object(x.jsx)(C,{headingText:"My Notes"}),Object(x.jsx)(M,{children:Object(x.jsx)(J.a,{scrollEnabled:"true",children:Object(x.jsx)(v.a,{children:"Test"})})})]})},pe=function(e){var t=e.initialSelectedVerses,u=Object(i.useState)(t),s=m()(u,2),n=s[0];s[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(z,{children:n}),Object(x.jsx)(C,{headingText:"Commentary"}),Object(x.jsx)(M,{children:Object(x.jsx)(J.a,{scrollEnabled:"true"})})]})},he={Genesis:[["In the beginning, God created the heavens and the earth.","The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters.","And God said, \u201cLet there be light,\u201d and there was light.","And God saw that the light was good. And God separated the light from the darkness.","God called the light Day, and the darkness he called Night. And there was evening and there was morning, the first day.","And God said, \u201cLet there be an expanse in the midst of the waters, and let it separate the waters from the waters.\u201d And God made the expanse and eseparated the waters that were under the expanse from the waters that were fabove the expanse. And it was so.","And God called the expanse Heaven. And there was evening and there was morning, the second day.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue"],["Wilkommen sa Genesis 2.","In the beningging.","In the benig...","In the binignit--","In the beginging."],["Sample long chapter","In the beginning, God created the heavens and the earth.","The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters.","And God said, \u201cLet there be light,\u201d and there was light.","And God saw that the light was good. And God separated the light from the darkness.","God called the light Day, and the darkness he called Night. And there was evening and there was morning, the first day.","And God said, \u201cLet there be an expanse in the midst of the waters, and let it separate the waters from the waters.\u201d And God made the expanse and eseparated the waters that were under the expanse from the waters that were fabove the expanse. And it was so.","And God called the expanse Heaven. And there was evening and there was morning, the second day.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis in leo sit amet aliquet. Praesent ullamcorper cursus nunc id rutrum. Vestibulum sit amet nulla sem. Proin turpis quam, dignissim vitae nulla eu, tincidunt fermentum justo. Curabitur sed fermentum tellus. Duis ac massa semper ligula pellentesque mattis eu sit amet dolor. Donec eu dui nisi. Mauris non mauris ut nulla maximus convallis eu eu urna. Phasellus congue"]],Revelation:[["Scary scary scary.","Big scary apocalypse.","Then happy forever after!"],["Abueno adios, Master.","Revelation chapter 2 is the scolding.","Nothing to see here..."]]},be=Object(r.a)(),ge=[{name:"Profile",component:function(){var e=Object(i.useState)(!1),t=m()(e,2),u=t[0],s=t[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(z,{headingText:"Top o' the profile page to you, laddies"}),Object(x.jsx)(C,{headingText:"Profile"}),Object(x.jsxs)(M,{children:[Object(x.jsx)(q,{label:"Username",onSubmit:function(e){console.log("Profile page submitting new username:",e)},initialValue:"Cheeseyman",inputComponent:N}),Object(x.jsxs)(V,{label:"Personas",children:[Object(x.jsx)(q,{label:"Gospel Doctrine",onSubmit:function(e){console.log("Profile page submitting new gospel persona:",e)},initialValue:"undecided",inputComponent:L,inputComponentProps:[[{label:"Undecided",value:"undecided"},{label:"Grace",value:"grace"},{label:"Grace Plus Response",value:"gracePlusResponse"},{label:"Not Listed",value:"notListed"}]]}),Object(x.jsx)(q,{label:"Affiliation",onSubmit:function(e){console.log("Profile page submitting new affiliation:",e)},initialValue:"mormon",inputComponent:L,inputComponentProps:[[{label:"Undecided",value:"undecided"},{label:"Church of Jesus Christ (Mormon)",value:"mormon"},{label:"Protestant",value:"protestant"},{label:"Not Listed",value:"notListed"}]]})]}),Object(x.jsx)(A,{onPress:function(){s(!0)},children:"Delete Profile"})]}),u&&Object(x.jsx)(H,{title:"Delete Profile?",description:"Your public notes will remain. There's nothing you can do about this. Mwahaha <3",shouldShowDialog:u,setShouldShowDialog:s,onConfirm:function(){alert("Profile deleted! This will be a toast snack in the future")}})]})},tabBarLabel:"Profile",icon:"account"},{name:"Reading",component:function(){var e=Object(i.useState)("Genesis"),t=m()(e,2),u=t[0],s=t[1],n=Object(i.useState)(1),a=m()(n,2),r=a[0],l=a[1],o=Object(i.useState)([]),c=m()(o,2),d=c[0],p=c[1],h=Object(i.useState)(new Set),b=m()(h,2),g=b[0],j=b[1],C=Object(i.useState)(!1),P=m()(C,2),O=P[0],q=P[1],D=Object(i.useState)(""),S=m()(D,2),w=S[0],N=S[1],y=Object(i.useState)(!0),L=m()(y,2),V=L[0],E=L[1],k=Object(i.useState)(),T=m()(k,2),A=T[0],B=T[1],R=function(){E(!0),Y(),B(K.VERSE_SELECTED_OPTIONS)},I=function(){return E((function(e){return!e}))};Object(i.useEffect)((function(){try{var e=u&&r?he[u][r-1]:null;e&&(p(e),N(u+" "+r))}catch(t){console.error("Selection "+u+" "+r+" is not part of the current data set")}}),[u,r]);var H=function(e){return g.has(e)},F=function(e){H(e.number)?W(e.number):U(e.number)},U=function(e){var t=new Set(g);t.add(e),j(t)},W=function(e){var t=new Set(g);t.delete(e),j(t)},Y=function(){j(new Set)},K={NOTES_PAGE:Object(x.jsx)(ce,{onExpandPress:I,onClosePress:R,children:Object(x.jsx)(de,{initialSelectedVerses:g})}),VERSE_SELECTED_OPTIONS:Object(x.jsx)(me,{currentBook:u,currentChapter:r,selectedVerses:Array.from(g).sort(),onClosePress:R,onRelatedCommentaryPress:function(){B(K.COMMENTARY_PAGE)},onRelatedNotesPress:function(){B(K.NOTES_PAGE)}}),COMMENTARY_PAGE:Object(x.jsx)(ce,{onExpandPress:I,onClosePress:R,children:Object(x.jsx)(pe,{initialSelectedVerses:g})})};return Object(i.useEffect)((function(){B(K.VERSE_SELECTED_OPTIONS)}),[]),Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(G.a,{children:[Object(x.jsx)(z,{customHeadingComponent:Object(x.jsx)(_,{label:w,onPress:function(){return q(!0)}})}),Object(x.jsx)($,{visible:O,setVisible:q,onChapterSelect:function(e){var t=e.book,u=e.chapter;s(t),l(u),Y()},initialBookName:u,initialChapterNumber:r}),Object(x.jsx)(M,{customPageStyle:f.readingPage,children:Object(x.jsx)(J.a,{scrollEnabled:"true",children:Object(x.jsx)(v.a,{children:null==d?void 0:d.map((function(e,t){return Object(x.jsx)(te,{verseNumber:t+1,verseText:e,isSelected:H(t+1),onVersePress:F},"v"+t)}))})})}),Object(x.jsx)(ue,{isOpen:g.size>0,minimize:V,children:A})]})})},tabBarLabel:"Bible",icon:"book"},{name:"Notes",component:de,tabBarLabel:"Notes",icon:"pencil"},{name:"Commentary",component:pe,tabBarLabel:"Commentary",icon:"comment"}],je=function(){return Object(x.jsx)(be.Navigator,{initialRouteName:"Reading",barStyle:{backgroundColor:"#eee"},children:ge.map((function(e){return Object(x.jsx)(be.Screen,{name:e.name,component:e.component,options:{tabBarLabel:e.tabBarLabel,tabBarIcon:function(t){var u=t.color;return Object(x.jsx)(l.default,{name:e.icon,color:u,size:26})}}},e.name)}))})};function fe(){return Object(x.jsx)(a.a,{children:Object(x.jsx)(n.a,{style:xe.container,children:Object(x.jsx)(je,{})})})}var xe=s.a.create({container:{flex:1}})},166:function(e,t,u){e.exports=u(207)}},[[166,1,2]]]);
//# sourceMappingURL=app.2425d364.chunk.js.map