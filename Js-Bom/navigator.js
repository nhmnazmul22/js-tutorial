let output = document.getElementById("output");

let appCodeName = navigator.appCodeName;
let appName = navigator.appName;
let appVersion = navigator.appVersion;
let cookieEnable = navigator.cookieEnabled;
let language = navigator.language;
let userAgent = navigator.userAgent;
let userActivition = navigator.userActivation;
let platform = navigator.platform;
let online = navigator.onLine;

console.log(appCodeName);
console.log(appName);
console.log(appVersion);
console.log(cookieEnable);
console.log(language);
console.log(userAgent);
console.log(userActivition);
console.log(platform);
console.log(online);

output.value = `appCodeName: ${appCodeName}
appName: ${appName}
appVersion: ${appVersion}
cookieEnable: ${cookieEnable} 
langaguage: ${language} 
userAgent: ${userAgent} 
platForm: ${platform} 
online: ${online} 
`;
