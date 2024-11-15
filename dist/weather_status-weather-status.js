(()=>{"use strict";var e,r,a,s={20994:(e,r,a)=>{var s=a(21777),n=a(85471),o=a(85168),i=a(19231),u=a(53334),h=a(63814),l=a(24764),d=a(18503),c=a(75625),p=a(44131),g=a(69321),w=a(15502),m=a(73010),v=a(59892),f=a(6695),_=a(65043);const y=async t=>{const e=(0,h.KT)("apps/weather_status/api/v1/favorites");return(await _.Ay.put(e,{favorites:t})).data.ocs.data};var A=a(11459);const x='<svg xmlns="http://www.w3.org/2000/svg" id="mdi-star-outline" viewBox="0 0 24 24"><path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" /></svg>',C={clearsky_day:{text:function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?t("weather_status","{temperature} {unit} clear sky later today",{temperature:e,unit:r}):t("weather_status","{temperature} {unit} clear sky",{temperature:e,unit:r})}},clearsky_night:{text:function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?t("weather_status","{temperature} {unit} clear sky later today",{temperature:e,unit:r}):t("weather_status","{temperature} {unit} clear sky",{temperature:e,unit:r})}},cloudy:{text:function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?t("weather_status","{temperature} {unit} cloudy later today",{temperature:e,unit:r}):t("weather_status","{temperature} {unit} cloudy",{temperature:e,unit:r})}},snowandthunder:{text:function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?t("weather_status","{temperature} {unit} snow and thunder later today",{temperature:e,unit:r}):t("weather_status","{temperature} {unit} snow and thunder",{temperature:e,unit:r})}},snowshowersandthunder_day:{text:function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?t("weather_status","{temperature} {unit} snow showers and thunder later today",{temperature:e,unit:r}):t("weather_status","{temperature} {unit} snow showers and thunder",{temperature:e,unit:r})}},snowshowersandthunder_night:{text:function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?t("weather_status","{temperature} {unit} snow showers and thunder later today",{temperature:e,unit:r}):t("weather_status","{temperature} {unit} snow showers and thunder",{temperature:e,unit:r})}},snowshowersandthunder_polartwilight:{text:function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?t("weather_status","{temperature} {unit} snow showers, thunder and polar twilight later today",{temperature:e,unit:r}):t("weather_status","{temperature} {unit} snow showers, thunder and polar twilight",{temperature:e,unit:r})}},snowshowers_day:{text:function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?t("weather_status","{temperature} {unit} snow showers later today",{temperature:e,unit:r}):t("weather_status","{temperature} {unit} snow showers",{temperature:e,unit:r})}},snowshowers_night:{text:function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?t("weather_status","{temperature} {unit} snow showers later today",{temperature:e,unit:r}):t("weather_status","{temperature} {unit} snow showers",{temperature:e,unit:r})}},snowshowers_polartwilight:{text:function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?t("weather_status","{temperature} {unit} snow showers and polar twilight later today",{temperature:e,unit:r}):t("weather_status","{temperature} {unit} snow showers and polar twilight",{temperature:e,unit:r})}},snow:{text:function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?t("weather_status","{temperature} {unit} snow later today",{temperature:e,unit:r}):t("weather_status","{temperature} {unit} snow",{temperature:e,unit:r})}},fair_day:{text:function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?t("weather_status","{temperature} {unit} fair weather later today",{temperature:e,unit:r}):t("weather_status","{temperature} {unit} fair weather",{temperature:e,unit:r})}},fair_night:{text:function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?t("weather_status","{temperature} {unit} fair weather later today",{temperature:e,unit:r}):t("weather_status","{temperature} {unit} fair weather",{temperature:e,unit:r})}},partlycloudy_day:{text:function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?t("weather_status","{temperature} {unit} partly cloudy later today",{temperature:e,unit:r}):t("weather_status","{temperature} {unit} partly cloudy",{temperature:e,unit:r})}},partlycloudy_night:{text:function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?t("weather_status","{temperature} {unit} partly cloudy later today",{temperature:e,unit:r}):t("weather_status","{temperature} {unit} partly cloudy",{temperature:e,unit:r})}},fog:{text:function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?t("weather_status","{temperature} {unit} foggy later today",{temperature:e,unit:r}):t("weather_status","{temperature} {unit} foggy",{temperature:e,unit:r})}},lightrain:{text:function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?t("weather_status","{temperature} {unit} light rainfall later today",{temperature:e,unit:r}):t("weather_status","{temperature} {unit} light rainfall",{temperature:e,unit:r})}},rain:{text:function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?t("weather_status","{temperature} {unit} rainfall later today",{temperature:e,unit:r}):t("weather_status","{temperature} {unit} rainfall",{temperature:e,unit:r})}},heavyrain:{text:function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?t("weather_status","{temperature} {unit} heavy rainfall later today",{temperature:e,unit:r}):t("weather_status","{temperature} {unit} heavy rainfall",{temperature:e,unit:r})}},rainshowers_day:{text:function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?t("weather_status","{temperature} {unit} rainfall showers later today",{temperature:e,unit:r}):t("weather_status","{temperature} {unit} rainfall showers",{temperature:e,unit:r})}},rainshowers_night:{text:function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?t("weather_status","{temperature} {unit} rainfall showers later today",{temperature:e,unit:r}):t("weather_status","{temperature} {unit} rainfall showers",{temperature:e,unit:r})}},lightrainshowers_day:{text:function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?t("weather_status","{temperature} {unit} light rainfall showers later today",{temperature:e,unit:r}):t("weather_status","{temperature} {unit} light rainfall showers",{temperature:e,unit:r})}},lightrainshowers_night:{text:function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?t("weather_status","{temperature} {unit} light rainfall showers later today",{temperature:e,unit:r}):t("weather_status","{temperature} {unit} light rainfall showers",{temperature:e,unit:r})}},heavyrainshowers_day:{text:function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?t("weather_status","{temperature} {unit} heavy rainfall showers later today",{temperature:e,unit:r}):t("weather_status","{temperature} {unit} heavy rainfall showers",{temperature:e,unit:r})}},heavyrainshowers_night:{text:function(e,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?t("weather_status","{temperature} {unit} heavy rainfall showers later today",{temperature:e,unit:r}):t("weather_status","{temperature} {unit} heavy rainfall showers",{temperature:e,unit:r})}}},L={name:"App",components:{NcActions:l.A,NcActionButton:d.A,NcActionCaption:c.A,NcActionInput:p.A,NcActionLink:g.A,NcActionSeparator:w.A,NcActionText:m.A,NcLoadingIcon:v.A,NcIconSvgWrapper:f.A},data:()=>({crosshairsSvg:'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-crosshairs" viewBox="0 0 24 24"><path d="M3.05,13H1V11H3.05C3.5,6.83 6.83,3.5 11,3.05V1H13V3.05C17.17,3.5 20.5,6.83 20.95,11H23V13H20.95C20.5,17.17 17.17,20.5 13,20.95V23H11V20.95C6.83,20.5 3.5,17.17 3.05,13M12,5A7,7 0 0,0 5,12A7,7 0 0,0 12,19A7,7 0 0,0 19,12A7,7 0 0,0 12,5Z" /></svg>',mapMarkerSvg:'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-map-marker" viewBox="0 0 24 24"><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>',starSvg:A,starOutlineSvg:x,locale:(0,u.JK)(),loading:!0,errorMessage:"",mode:1,address:null,lat:null,lon:null,offset:5,forecasts:[],loop:null,favorites:[]}),computed:{useFahrenheitLocale(){return["en_US","en_MH","en_FM","en_PW","en_KY","en_LR"].includes(this.locale)},temperatureUnit(){return this.useFahrenheitLocale?"°F":"°C"},locationText(){return t("weather_status","More weather for {adr}",{adr:this.address})},temperature(){return this.getTemperature(this.forecasts,0)},futureTemperature(){return this.getTemperature(this.forecasts,this.offset)},weatherCode(){return this.getWeatherCode(this.forecasts,0)},futureWeatherCode(){return this.getWeatherCode(this.forecasts,this.offset)},weatherIconUrl(){return this.getWeatherIconUrl(this.weatherCode)},futureWeatherIconUrl(){return this.getWeatherIconUrl(this.futureWeatherCode)},currentWeatherMessage(){return this.loading?t("weather_status","Loading weather"):this.errorMessage?this.errorMessage:this.gotWeather?this.getWeatherMessage(this.weatherCode,this.temperature):t("weather_status","Set location for weather")},forecastMessage(){return this.loading?t("weather_status","Loading weather"):this.gotWeather?this.getWeatherMessage(this.futureWeatherCode,this.futureTemperature,!0):t("weather_status","Set location for weather")},weatherLinkTarget(){return"https://www.windy.com/-Rain-thunder-rain?rain,"+this.lat+","+this.lon+",11"},gotWeather(){return this.address&&!this.errorMessage},addRemoveFavoriteSvg(){return this.currentAddressIsFavorite?A:x},addRemoveFavoriteText(){return this.currentAddressIsFavorite?t("weather_status","Remove from favorites"):t("weather_status","Add as favorite")},currentAddressIsFavorite(){return this.favorites.find((t=>t===this.address))}},mounted(){this.initWeatherStatus()},methods:{async initWeatherStatus(){try{const t=await(async()=>{const t=(0,h.KT)("apps/weather_status/api/v1/location");return(await _.Ay.get(t)).data.ocs.data})();this.lat=t.lat,this.lon=t.lon,this.address=t.address,this.mode=t.mode,1===this.mode?this.askBrowserLocation():2===this.mode&&this.startLoop();const e=await(async()=>{const t=(0,h.KT)("apps/weather_status/api/v1/favorites");return(await _.Ay.get(t)).data.ocs.data})();this.favorites=e}catch(e){if("ECONNABORTED"===e?.code)return void console.info("The weather status request was cancelled because the user navigates.");e.response&&401===e.response.status?(0,o.Qg)(t("weather_status","You are not logged in.")):(0,o.Qg)(t("weather_status","There was an error getting the weather status information.")),console.error(e)}},startLoop(){clearInterval(this.loop),this.lat&&this.lon?(this.loop=setInterval((()=>this.getForecast()),36e5),this.getForecast()):this.loading=!1},askBrowserLocation(){this.loading=!0,this.errorMessage="",navigator.geolocation&&window.isSecureContext?navigator.geolocation.getCurrentPosition((t=>{console.debug("browser location success"),this.lat=t.coords.latitude,this.lon=t.coords.longitude,this.saveMode(1),this.mode=1,this.saveLocation(this.lat,this.lon)}),(t=>{console.debug("location permission refused"),console.debug(t),this.saveMode(2),this.mode=2,this.lat&&this.lon?this.startLoop():this.usePersonalAddress()})):(console.debug("no secure context!"),this.saveMode(2),this.mode=2,this.startLoop())},async getForecast(){try{this.forecasts=await(async()=>{const t=(0,h.KT)("apps/weather_status/api/v1/forecast");return(await _.Ay.get(t)).data.ocs.data})()}catch(e){this.errorMessage=t("weather_status","No weather information found"),console.debug(e)}this.loading=!1},async setAddress(e){this.loading=!0,this.errorMessage="";try{const r=await(async t=>{const e=(0,h.KT)("apps/weather_status/api/v1/location");return(await _.Ay.put(e,{address:t,lat:null,lon:null})).data.ocs.data})(e);r.success?(this.lat=r.lat,this.lon=r.lon,this.address=r.address,this.mode=2,this.startLoop()):(this.errorMessage=t("weather_status","Location not found"),this.loading=!1)}catch(e){e.response&&401===e.response.status?(0,o.Qg)(t("weather_status","You are not logged in.")):(0,o.Qg)(t("weather_status","There was an error setting the location address.")),this.loading=!1}},async saveLocation(e,r){try{const t=await(async(t,e)=>{const r=(0,h.KT)("apps/weather_status/api/v1/location");return(await _.Ay.put(r,{address:"",lat:t,lon:e})).data.ocs.data})(e,r);this.address=t.address,this.startLoop()}catch(e){e.response&&401===e.response.status?(0,o.Qg)(t("weather_status","You are not logged in.")):(0,o.Qg)(t("weather_status","There was an error setting the location.")),console.debug(e)}},async saveMode(e){try{await(async t=>{const e=(0,h.KT)("apps/weather_status/api/v1/mode");return(await _.Ay.put(e,{mode:t})).data.ocs.data})(e)}catch(e){e.response&&401===e.response.status?(0,o.Qg)(t("weather_status","You are not logged in.")):(0,o.Qg)(t("weather_status","There was an error saving the mode.")),console.debug(e)}},onBrowserLocationClick(){this.askBrowserLocation()},async usePersonalAddress(){this.loading=!0;try{const t=await(async()=>{const t=(0,h.KT)("apps/weather_status/api/v1/use-personal");return(await _.Ay.put(t)).data.ocs.data})();this.lat=t.lat,this.lon=t.lon,this.address=t.address,this.mode=2,this.startLoop()}catch(e){e.response&&401===e.response.status?(0,o.Qg)(t("weather_status","You are not logged in.")):(0,o.Qg)(t("weather_status","There was an error using personal address.")),console.debug(e),this.loading=!1}},onAddressSubmit(){const t=this.$refs.addressInput.$el.querySelector('input[type="text"]').value;this.setAddress(t)},getLocalizedTemperature(t){return this.useFahrenheitLocale?1.8*t+32:t},onAddRemoveFavoriteClick(){const t=this.currentAddressIsFavorite;if(t){const e=this.favorites.indexOf(t);-1!==e&&this.favorites.splice(e,1)}else this.favorites.push(this.address);y(this.favorites)},onFavoriteClick(t,e){if(t.target.classList.contains("action-button__icon")){const t=this.favorites.indexOf(e);-1!==t&&this.favorites.splice(t,1),y(this.favorites)}else e!==this.address&&this.setAddress(e)},formatTime:t=>(0,i.A)(t).format("LT"),getTemperature(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t.length>e?t[e].data.instant.details.air_temperature:""},getWeatherCode(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t.length>e?t[e].data.next_1_hours.summary.symbol_code:""},getWeatherIconUrl:t=>t&&t in C?(0,h.d0)("weather_status","met.no.icons/"+t+".svg"):(0,h.d0)("weather_status","met.no.icons/fair_day.svg"),getWeatherMessage(e,r){let a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e&&e in C?C[e].text(Math.round(this.getLocalizedTemperature(r)),this.temperatureUnit,a):t("weather_status","Unknown weather code")}}};var b=a(85072),k=a.n(b),S=a(97825),T=a.n(S),M=a(77659),I=a.n(M),N=a(55056),W=a.n(N),F=a(10540),O=a.n(F),P=a(41113),B=a.n(P),D=a(56641),E={};E.styleTagTransform=B(),E.setAttributes=W(),E.insert=I().bind(null,"head"),E.domAPI=T(),E.insertStyleElement=O(),k()(D.A,E),D.A&&D.A.locals&&D.A.locals;const j=(0,a(14486).A)(L,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"weather-status-menu-item"}},[e("NcActions",{staticClass:"weather-status-menu-item__subheader",attrs:{"aria-hidden":!0,"aria-label":t.currentWeatherMessage,"menu-name":t.currentWeatherMessage},scopedSlots:t._u([{key:"icon",fn:function(){return[t.loading?e("NcLoadingIcon"):e("img",{staticClass:"weather-image",attrs:{src:t.weatherIconUrl,alt:""}})]},proxy:!0}])},[t._v(" "),t.gotWeather?e("NcActionText",{attrs:{"aria-hidden":!0},scopedSlots:t._u([{key:"icon",fn:function(){return[t.loading?e("NcLoadingIcon"):e("div",{staticClass:"weather-action-image-container"},[e("img",{staticClass:"weather-image",attrs:{src:t.futureWeatherIconUrl,alt:""}})])]},proxy:!0}],null,!1,1876957744)},[t._v("\n\t\t\t"+t._s(t.forecastMessage)+"\n\t\t")]):t._e(),t._v(" "),t.gotWeather?e("NcActionLink",{attrs:{target:"_blank","aria-hidden":!0,href:t.weatherLinkTarget,"close-after-click":!0},scopedSlots:t._u([{key:"icon",fn:function(){return[e("NcIconSvgWrapper",{attrs:{name:"MapMarker",svg:t.mapMarkerSvg,size:20}})]},proxy:!0}],null,!1,2374361976)},[t._v("\n\t\t\t"+t._s(t.locationText)+"\n\t\t")]):t._e(),t._v(" "),t.gotWeather?e("NcActionButton",{attrs:{"aria-hidden":!0},on:{click:t.onAddRemoveFavoriteClick},scopedSlots:t._u([{key:"icon",fn:function(){return[e("NcIconSvgWrapper",{staticClass:"favorite-color",attrs:{name:"Star",svg:t.addRemoveFavoriteSvg,size:20}})]},proxy:!0}],null,!1,2760308411)},[t._v("\n\t\t\t"+t._s(t.addRemoveFavoriteText)+"\n\t\t")]):t._e(),t._v(" "),t.address&&!t.errorMessage?e("NcActionSeparator"):t._e(),t._v(" "),e("NcActionButton",{attrs:{"close-after-click":!0,"aria-hidden":!0},on:{click:t.onBrowserLocationClick},scopedSlots:t._u([{key:"icon",fn:function(){return[e("NcIconSvgWrapper",{attrs:{name:"Crosshairs",svg:t.crosshairsSvg,size:20}})]},proxy:!0}])},[t._v("\n\t\t\t"+t._s(t.t("weather_status","Detect location"))+"\n\t\t")]),t._v(" "),e("NcActionInput",{ref:"addressInput",attrs:{label:t.t("weather_status","Set custom address"),disabled:!1,icon:"icon-rename","aria-hidden":!0,type:"text",value:""},on:{submit:t.onAddressSubmit}}),t._v(" "),t.favorites.length>0?[e("NcActionCaption",{attrs:{name:t.t("weather_status","Favorites")}}),t._v(" "),t._l(t.favorites,(function(r){return e("NcActionButton",{key:r,attrs:{"aria-hidden":!0},on:{click:function(e){return t.onFavoriteClick(e,r)}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("NcIconSvgWrapper",{class:{"favorite-color":t.address===r},attrs:{name:"Star",svg:t.starSvg,size:20}})]},proxy:!0}],null,!0)},[t._v("\n\t\t\t\t"+t._s(r)+"\n\t\t\t")])}))]:t._e()],2)],1)}),[],!1,null,null,null).exports;a.nc=(0,s.aV)(),n.Ay.prototype.t=t,document.addEventListener("DOMContentLoaded",(function(){OCA.Dashboard&&OCA.Dashboard.registerStatus("weather",(t=>(new(n.Ay.extend(j))).$mount(t)))}))},56641:(t,e,r)=>{r.d(e,{A:()=>i});var a=r(71354),s=r.n(a),n=r(76314),o=r.n(n)()(s());o.push([t.id,".weather-action-image-container{width:var(--default-clickable-area);height:var(--default-clickable-area);display:flex;align-items:center;justify-content:center}.weather-image{width:calc(var(--default-clickable-area) - 2*var(--default-grid-baseline))}.favorite-color{color:var(--color-favorite)}","",{version:3,sources:["webpack://./apps/weather_status/src/App.vue"],names:[],mappings:"AACA,gCACC,mCAAA,CACA,oCAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CAED,eACC,0EAAA,CAID,gBACC,2BAAA",sourceRoot:""}]);const i=o},27518:t=>{t.exports="data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M15.4%2016.6L10.8%2012l4.6-4.6L14%206l-6%206%206%206%201.4-1.4z%27/%3e%3c/svg%3e"},27514:t=>{t.exports="data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M18.4%207.4L17%206l-6%206%206%206%201.4-1.4-4.6-4.6%204.6-4.6m-6%200L11%206l-6%206%206%206%201.4-1.4L7.8%2012l4.6-4.6z%27/%3e%3c/svg%3e"},79722:t=>{t.exports="data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M5.6%207.4L7%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6m6%200L13%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6z%27/%3e%3c/svg%3e"},86886:t=>{t.exports="data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M8.6%2016.6l4.6-4.6-4.6-4.6L10%206l6%206-6%206-1.4-1.4z%27/%3e%3c/svg%3e"}},n={};function o(t){var e=n[t];if(void 0!==e)return e.exports;var r=n[t]={id:t,loaded:!1,exports:{}};return s[t].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}o.m=s,e=[],o.O=(t,r,a,s)=>{if(!r){var n=1/0;for(l=0;l<e.length;l++){r=e[l][0],a=e[l][1],s=e[l][2];for(var i=!0,u=0;u<r.length;u++)(!1&s||n>=s)&&Object.keys(o.O).every((t=>o.O[t](r[u])))?r.splice(u--,1):(i=!1,s<n&&(n=s));if(i){e.splice(l--,1);var h=a();void 0!==h&&(t=h)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[r,a,s]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.f={},o.e=t=>Promise.all(Object.keys(o.f).reduce(((e,r)=>(o.f[r](t,e),e)),[])),o.u=t=>t+"-"+t+".js?v="+{5706:"3153330af47fc26a725a",6127:"da37b69cd9ee64a1836b"}[t],o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r={},a="nextcloud:",o.l=(t,e,s,n)=>{if(r[t])r[t].push(e);else{var i,u;if(void 0!==s)for(var h=document.getElementsByTagName("script"),l=0;l<h.length;l++){var d=h[l];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==a+s){i=d;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",a+s),i.src=t),r[t]=[e];var c=(e,a)=>{i.onerror=i.onload=null,clearTimeout(p);var s=r[t];if(delete r[t],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((t=>t(a))),e)return e(a)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=c.bind(null,i.onerror),i.onload=c.bind(null,i.onload),u&&document.head.appendChild(i)}},o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),o.j=1848,(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!t||!/^http(s?):/.test(t));)t=r[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t})(),(()=>{o.b=document.baseURI||self.location.href;var t={1848:0};o.f.j=(e,r)=>{var a=o.o(t,e)?t[e]:void 0;if(0!==a)if(a)r.push(a[2]);else{var s=new Promise(((r,s)=>a=t[e]=[r,s]));r.push(a[2]=s);var n=o.p+o.u(e),i=new Error;o.l(n,(r=>{if(o.o(t,e)&&(0!==(a=t[e])&&(t[e]=void 0),a)){var s=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",i.name="ChunkLoadError",i.type=s,i.request=n,a[1](i)}}),"chunk-"+e,e)}},o.O.j=e=>0===t[e];var e=(e,r)=>{var a,s,n=r[0],i=r[1],u=r[2],h=0;if(n.some((e=>0!==t[e]))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(u)var l=u(o)}for(e&&e(r);h<n.length;h++)s=n[h],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(l)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),o.nc=void 0;var i=o.O(void 0,[4208],(()=>o(20994)));i=o.O(i)})();
//# sourceMappingURL=weather_status-weather-status.js.map?v=29599f2dd955a1cecc2c