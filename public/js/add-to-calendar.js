const atcbVersion = '1.13.2',
  isBrowser = Function(
    'try { return this===window; } catch(e) { return false; }'
  ),
  isiOS = isBrowser()
    ? Function(
        'if ((/iPad|iPhone|iPod/i.test(navigator.userAgent || navigator.vendor || window.opera) && !window.MSStream) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) { return true; } else { return false; }'
      )
    : Function('return false;'),
  isAndroid = isBrowser()
    ? Function(
        'if (/android/i.test(navigator.userAgent || navigator.vendor || window.opera) && !window.MSStream) { return true; } else { return false; }'
      )
    : Function('return false;'),
  isWebView = isBrowser()
    ? Function(
        'if (/(; ?wv|(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari))/i.test(navigator.userAgent || navigator.vendor)) { return true; } else { return false; }'
      )
    : Function('return false;'),
  isProblematicWebView = isBrowser()
    ? Function(
        'if (/(Instagram)/i.test(navigator.userAgent || navigator.vendor || window.opera)) { return true; } else { return false; }'
      )
    : Function('return false;');
let atcbDefaultTarget = '_blank';
isWebView() && (atcbDefaultTarget = '_system');
const atcbIcon = {
  trigger:
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122.88 122.88'><path d='M81.61 4.73c0-2.61 2.58-4.73 5.77-4.73s5.77 2.12 5.77 4.73v20.72c0 2.61-2.58 4.73-5.77 4.73s-5.77-2.12-5.77-4.73V4.73h0zm-3.65 76.03c1.83 0 3.32 1.49 3.32 3.32s-1.49 3.32-3.32 3.32l-12.95-.04-.04 12.93c0 1.83-1.49 3.32-3.32 3.32s-3.32-1.49-3.32-3.32l.04-12.94-12.93-.05c-1.83 0-3.32-1.49-3.32-3.32s1.49-3.32 3.32-3.32l12.94.04.04-12.93c0-1.83 1.49-3.32 3.32-3.32s3.32 1.49 3.32 3.32l-.04 12.95 12.94.04h0zM29.61 4.73c0-2.61 2.58-4.73 5.77-4.73s5.77 2.12 5.77 4.73v20.72c0 2.61-2.58 4.73-5.77 4.73s-5.77-2.12-5.77-4.73V4.73h0zM6.4 45.32h110.08V21.47c0-.8-.33-1.53-.86-2.07-.53-.53-1.26-.86-2.07-.86H103c-1.77 0-3.2-1.43-3.2-3.2s1.43-3.2 3.2-3.2h10.55c2.57 0 4.9 1.05 6.59 2.74s2.74 4.02 2.74 6.59v27.06 65.03c0 2.57-1.05 4.9-2.74 6.59s-4.02 2.74-6.59 2.74H9.33c-2.57 0-4.9-1.05-6.59-2.74-1.69-1.7-2.74-4.03-2.74-6.6V48.53 21.47c0-2.57 1.05-4.9 2.74-6.59s4.02-2.74 6.59-2.74H20.6c1.77 0 3.2 1.43 3.2 3.2s-1.43 3.2-3.2 3.2H9.33c-.8 0-1.53.33-2.07.86-.53.53-.86 1.26-.86 2.07v23.85h0zm110.08 6.41H6.4v61.82c0 .8.33 1.53.86 2.07.53.53 1.26.86 2.07.86h104.22c.8 0 1.53-.33 2.07-.86.53-.53.86-1.26.86-2.07V51.73h0zM50.43 18.54c-1.77 0-3.2-1.43-3.2-3.2s1.43-3.2 3.2-3.2h21.49c1.77 0 3.2 1.43 3.2 3.2s-1.43 3.2-3.2 3.2H50.43h0z'/></svg>",
  apple:
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 640' shape-rendering='geometricPrecision' image-rendering='optimizeQuality' fill-rule='evenodd'><path fill='#777' d='M494.782 340.02c-.803-81.025 66.084-119.907 69.072-121.832-37.595-54.993-96.167-62.552-117.037-63.402-49.843-5.032-97.242 29.362-122.565 29.362-25.253 0-64.277-28.607-105.604-27.85-54.32.803-104.4 31.594-132.403 80.245C29.81 334.457 71.81 479.58 126.816 558.976c26.87 38.882 58.914 82.56 100.997 81 40.512-1.594 55.843-26.244 104.848-26.244 48.993 0 62.753 26.245 105.64 25.406 43.606-.803 71.232-39.638 97.925-78.65 30.887-45.12 43.548-88.75 44.316-90.994-.969-.437-85.029-32.634-85.879-129.439l.118-.035zM414.23 102.178C436.553 75.095 451.636 37.5 447.514-.024c-32.162 1.311-71.163 21.437-94.253 48.485-20.729 24.012-38.836 62.28-33.993 99.036 35.918 2.8 72.591-18.248 94.926-45.272l.036-.047z'/></svg>",
  google:
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122.88 122.88'><path d='M93.78 29.1H29.1v64.68h64.68V29.1z' fill='#fff'/><path d='M93.78 122.88l29.1-29.1h-29.1v29.1z' fill='#f72a25'/><path d='M122.88 29.1h-29.1v64.68h29.1V29.1z' fill='#fbbc04'/><path d='M93.78 93.78H29.1v29.1h64.68v-29.1z' fill='#34a853'/><path d='M0 93.78v19.4c0 5.36 4.34 9.7 9.7 9.7h19.4v-29.1H0h0z' fill='#188038'/><path d='M122.88 29.1V9.7c0-5.36-4.34-9.7-9.7-9.7h-19.4v29.1h29.1 0z' fill='#1967d2'/><path d='M93.78 0H9.7C4.34 0 0 4.34 0 9.7v84.08h29.1V29.1h64.67V0h.01z' fill='#4285f4'/><path d='M42.37 79.27c-2.42-1.63-4.09-4.02-5-7.17l5.61-2.31c.51 1.94 1.4 3.44 2.67 4.51 1.26 1.07 2.8 1.59 4.59 1.59 1.84 0 3.41-.56 4.73-1.67 1.32-1.12 1.98-2.54 1.98-4.26 0-1.76-.7-3.2-2.09-4.32s-3.14-1.67-5.22-1.67H46.4v-5.55h2.91c1.79 0 3.31-.48 4.54-1.46 1.23-.97 1.84-2.3 1.84-3.99 0-1.5-.55-2.7-1.65-3.6s-2.49-1.35-4.18-1.35c-1.65 0-2.96.44-3.93 1.32s-1.7 2-2.12 3.24l-5.55-2.31c.74-2.09 2.09-3.93 4.07-5.52s4.51-2.39 7.58-2.39c2.27 0 4.32.44 6.13 1.32s3.23 2.1 4.26 3.65c1.03 1.56 1.54 3.31 1.54 5.25 0 1.98-.48 3.65-1.43 5.03-.95 1.37-2.13 2.43-3.52 3.16v.33c1.79.74 3.36 1.96 4.51 3.52 1.17 1.58 1.76 3.46 1.76 5.66s-.56 4.16-1.67 5.88c-1.12 1.72-2.66 3.08-4.62 4.07s-4.17 1.49-6.62 1.49c-2.84 0-5.46-.81-7.88-2.45h0 0zm34.46-27.84l-6.16 4.45-3.08-4.67 11.05-7.97h4.24v37.6h-6.05V51.43h0z' fill='#1a73e8'/></svg>",
  ical: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122.88 122.88'><path d='M81.61 4.73c0-2.61 2.58-4.73 5.77-4.73s5.77 2.12 5.77 4.73v20.72c0 2.61-2.58 4.73-5.77 4.73s-5.77-2.12-5.77-4.73V4.73h0zm-15.5 99.08c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2H81.9c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2H66.11h0zM15.85 67.09c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2h15.79c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2H15.85h0zm25.13 0c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2h15.79c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2H40.98h0zm25.13 0c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2H81.9c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2H66.11h0zm25.14 0c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2h15.79c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2H91.25h0zm-75.4 18.36c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2h15.79c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2H15.85h0zm25.13 0c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2h15.79c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2H40.98h0zm25.13 0c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2H81.9c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2H66.11h0zm25.14 0c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2h15.79c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2H91.25h0zm-75.4 18.36c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2h15.79c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2H15.85h0zm25.13 0c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2h15.79c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2H40.98h0zM29.61 4.73c0-2.61 2.58-4.73 5.77-4.73s5.77 2.12 5.77 4.73v20.72c0 2.61-2.58 4.73-5.77 4.73s-5.77-2.12-5.77-4.73V4.73h0zM6.4 45.32h110.07V21.47c0-.8-.33-1.53-.86-2.07-.53-.53-1.26-.86-2.07-.86H103c-1.77 0-3.2-1.43-3.2-3.2s1.43-3.2 3.2-3.2h10.55c2.57 0 4.9 1.05 6.59 2.74s2.74 4.02 2.74 6.59v27.06 65.03c0 2.57-1.05 4.9-2.74 6.59s-4.02 2.74-6.59 2.74H9.33c-2.57 0-4.9-1.05-6.59-2.74-1.69-1.7-2.74-4.03-2.74-6.6V48.52 21.47c0-2.57 1.05-4.9 2.74-6.59s4.02-2.74 6.59-2.74H20.6c1.77 0 3.2 1.43 3.2 3.2s-1.43 3.2-3.2 3.2H9.33c-.8 0-1.53.33-2.07.86-.53.53-.86 1.26-.86 2.07v23.85h0zm110.08 6.41H6.4v61.82c0 .8.33 1.53.86 2.07.53.53 1.26.86 2.07.86h104.22c.8 0 1.53-.33 2.07-.86.53-.53.86-1.26.86-2.07V51.73h0zM50.43 18.54c-1.77 0-3.2-1.43-3.2-3.2s1.43-3.2 3.2-3.2h21.49c1.77 0 3.2 1.43 3.2 3.2s-1.43 3.2-3.2 3.2H50.43h0z'/></svg>",
  msteams:
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2228.833 2073.333'><g fill='#5059c9'><path d='M1554.637 777.5h575.713c54.391 0 98.483 44.092 98.483 98.483v524.398c0 199.901-162.051 361.952-361.952 361.952h0-1.711c-199.901.028-361.975-162-362.004-361.901v-.052-571.409c.001-28.427 23.045-51.471 51.471-51.471h0z'/><circle cx='1943.75' cy='440.583' r='233.25'/></g><g fill='#7b83eb'><circle cx='1218.083' cy='336.917' r='336.917'/><path d='M1667.323 777.5H717.01c-53.743 1.33-96.257 45.931-95.01 99.676v598.105c-7.505 322.519 247.657 590.16 570.167 598.053 322.51-7.893 577.671-275.534 570.167-598.053V877.176c1.245-53.745-41.268-98.346-95.011-99.676z'/></g><path opacity='.1' d='M1244 777.5v838.145c-.258 38.435-23.549 72.964-59.09 87.598-11.316 4.787-23.478 7.254-35.765 7.257H667.613c-6.738-17.105-12.958-34.21-18.142-51.833-18.144-59.477-27.402-121.307-27.472-183.49V877.02c-1.246-53.659 41.198-98.19 94.855-99.52H1244z'/><path opacity='.2' d='M1192.167 777.5v889.978a91.84 91.84 0 0 1-7.257 35.765c-14.634 35.541-49.163 58.833-87.598 59.09H691.975c-8.812-17.105-17.105-34.21-24.362-51.833s-12.958-34.21-18.142-51.833a631.28 631.28 0 0 1-27.472-183.49V877.02c-1.246-53.659 41.198-98.19 94.855-99.52h475.313z'/><path opacity='.2' d='M1192.167 777.5v786.312c-.395 52.223-42.632 94.46-94.855 94.855h-447.84A631.28 631.28 0 0 1 622 1475.177V877.02c-1.246-53.659 41.198-98.19 94.855-99.52h475.312z'/><path opacity='.2' d='M1140.333 777.5v786.312c-.395 52.223-42.632 94.46-94.855 94.855H649.472A631.28 631.28 0 0 1 622 1475.177V877.02c-1.246-53.659 41.198-98.19 94.855-99.52h423.478z'/><path opacity='.1' d='M1244 509.522v163.275c-8.812.518-17.105 1.037-25.917 1.037s-17.105-.518-25.917-1.037c-17.496-1.161-34.848-3.937-51.833-8.293a336.92 336.92 0 0 1-233.25-198.003 288.02 288.02 0 0 1-16.587-51.833h258.648c52.305.198 94.657 42.549 94.856 94.854z'/><use xlink:href='#C' opacity='.2'/><use xlink:href='#C' opacity='.2'/><path opacity='.2' d='M1140.333 561.355v103.148A336.92 336.92 0 0 1 907.083 466.5h138.395c52.305.199 94.656 42.551 94.855 94.855z'/><linearGradient id='A' gradientUnits='userSpaceOnUse' x1='198.099' y1='392.261' x2='942.234' y2='1681.073'><stop offset='0' stop-color='#5a62c3'/><stop offset='.5' stop-color='#4d55bd'/><stop offset='1' stop-color='#3940ab'/></linearGradient><path fill='url(#A)' d='M95.01 466.5h950.312c52.473 0 95.01 42.538 95.01 95.01v950.312c0 52.473-42.538 95.01-95.01 95.01H95.01c-52.473 0-95.01-42.538-95.01-95.01V561.51c0-52.472 42.538-95.01 95.01-95.01z'/><path fill='#fff' d='M820.211,828.193H630.241v517.297H509.211V828.193H320.123V727.844h500.088V828.193z'/><defs ><path id='C' d='M1192.167 561.355v111.442c-17.496-1.161-34.848-3.937-51.833-8.293a336.92 336.92 0 0 1-233.25-198.003h190.228c52.304.198 94.656 42.55 94.855 94.854z'/></defs></svg>",
  ms365:
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 278050 333334' shape-rendering='geometricPrecision' image-rendering='optimizeQuality' fill-rule='evenodd'><path fill='#ea3e23' d='M278050 305556l-29-16V28627L178807 0 448 66971l-448 87 22 200227 60865-23821V80555l117920-28193-17 239519L122 267285l178668 65976v73l99231-27462v-316z'/></svg>",
  outlookcom:
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='-0.129793726981 0 33.251996719421 32' width='2500' height='2397'><path d='M28.596 2H11.404A1.404 1.404 0 0 0 10 3.404V5l9.69 3L30 5V3.404A1.404 1.404 0 0 0 28.596 2z' fill='#0364b8'/><path d='M31.65 17.405A11.341 11.341 0 0 0 32 16a.666.666 0 0 0-.333-.576l-.013-.008-.004-.002L20.812 9.24a1.499 1.499 0 0 0-1.479-.083 1.49 1.49 0 0 0-.145.082L8.35 15.415l-.004.002-.012.007A.666.666 0 0 0 8 16a11.344 11.344 0 0 0 .35 1.405l11.492 8.405z' fill='#0a2767'/><path d='M24 5h-7l-2.021 3L17 11l7 6h6v-6z' fill='#28a8ea'/><path d='M10 5h7v6h-7z' fill='#0078d4'/><path d='M24 5h6v6h-6z' fill='#50d9ff'/><path d='M24 17l-7-6h-7v6l7 6 10.832 1.768z' fill='#0364b8'/><path d='M17 11h7v6h-7z' fill='#0078d4'/><path d='M10 17h7v6h-7z' fill='#064a8c'/><path d='M24 17h6v6h-6z' fill='#0078d4'/><path d='M20.19 25.218l-11.793-8.6.495-.87 10.909 6.212a.528.528 0 0 0 .42-.012l10.933-6.23.496.869z' fill='#0a2767' opacity='.5'/><path d='M31.667 16.577l-.014.008-.003.002-10.838 6.174a1.497 1.497 0 0 1-1.46.091l3.774 5.061 8.254 1.797v.004A1.498 1.498 0 0 0 32 28.5V16a.666.666 0 0 1-.333.577z' fill='#1490df'/><path d='M32 28.5v-.738l-9.983-5.688-1.205.687a1.497 1.497 0 0 1-1.46.091l3.774 5.061 8.254 1.797v.004A1.498 1.498 0 0 0 32 28.5z' opacity='.05'/><path d='M31.95 28.883L21.007 22.65l-.195.11a1.497 1.497 0 0 1-1.46.092l3.774 5.061 8.254 1.797v.004a1.501 1.501 0 0 0 .57-.83z' opacity='.1'/><path d='M8.35 16.59v-.01h-.01l-.03-.02A.65.65 0 0 1 8 16v12.5A1.498 1.498 0 0 0 9.5 30h21a1.503 1.503 0 0 0 .37-.05.637.637 0 0 0 .18-.06.142.142 0 0 0 .06-.02 1.048 1.048 0 0 0 .23-.13c.02-.01.03-.01.04-.03z' fill='#28a8ea'/><path d='M18 24.667V8.333A1.337 1.337 0 0 0 16.667 7H10.03v7.456l-1.68.958-.005.002-.012.007A.666.666 0 0 0 8 16v.005V16v10h8.667A1.337 1.337 0 0 0 18 24.667z' opacity='.1'/><path d='M17 25.667V9.333A1.337 1.337 0 0 0 15.667 8H10.03v6.456l-1.68.958-.005.002-.012.007A.666.666 0 0 0 8 16v.005V16v11h7.667A1.337 1.337 0 0 0 17 25.667z' opacity='.2'/><path d='M17 23.667V9.333A1.337 1.337 0 0 0 15.667 8H10.03v6.456l-1.68.958-.005.002-.012.007A.666.666 0 0 0 8 16v.005V16v9h7.667A1.337 1.337 0 0 0 17 23.667z' opacity='.2'/><path d='M16 23.667V9.333A1.337 1.337 0 0 0 14.667 8H10.03v6.456l-1.68.958-.005.002-.012.007A.666.666 0 0 0 8 16v.005V16v9h6.667A1.337 1.337 0 0 0 16 23.667z' opacity='.2'/><path d='M1.333 8h13.334A1.333 1.333 0 0 1 16 9.333v13.334A1.333 1.333 0 0 1 14.667 24H1.333A1.333 1.333 0 0 1 0 22.667V9.333A1.333 1.333 0 0 1 1.333 8z' fill='#0078d4'/><path d='M3.867 13.468a4.181 4.181 0 0 1 1.642-1.814A4.965 4.965 0 0 1 8.119 11a4.617 4.617 0 0 1 2.413.62 4.14 4.14 0 0 1 1.598 1.733 5.597 5.597 0 0 1 .56 2.55 5.901 5.901 0 0 1-.577 2.666 4.239 4.239 0 0 1-1.645 1.794A4.8 4.8 0 0 1 7.963 21a4.729 4.729 0 0 1-2.468-.627 4.204 4.204 0 0 1-1.618-1.736 5.459 5.459 0 0 1-.567-2.519 6.055 6.055 0 0 1 .557-2.65zm1.75 4.258a2.716 2.716 0 0 0 .923 1.194 2.411 2.411 0 0 0 1.443.435 2.533 2.533 0 0 0 1.541-.449 2.603 2.603 0 0 0 .897-1.197 4.626 4.626 0 0 0 .286-1.665 5.063 5.063 0 0 0-.27-1.686 2.669 2.669 0 0 0-.866-1.24 2.387 2.387 0 0 0-1.527-.473 2.493 2.493 0 0 0-1.477.439 2.741 2.741 0 0 0-.944 1.203 4.776 4.776 0 0 0-.007 3.44z' fill='#fff'/></svg>",
  yahoo:
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3386.34 3010.5' shape-rendering='geometricPrecision' image-rendering='optimizeQuality' fill-rule='evenodd'><path d='M0 732.88h645.84l376.07 962.1 380.96-962.1h628.76l-946.8 2277.62H451.98l259.19-603.53L.02 732.88zm2763.84 768.75h-704.26L2684.65 0l701.69.03-622.5 1501.6zm-519.78 143.72c216.09 0 391.25 175.17 391.25 391.22 0 216.06-175.16 391.23-391.25 391.23-216.06 0-391.19-175.17-391.19-391.23 0-216.05 175.16-391.22 391.19-391.22z' fill='#5f01d1' fill-rule='nonzero'/></svg>",
  close:
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122.878 122.88'><path d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/></svg>",
  browser:
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122.88 113.6'><path d='M71.89 100.56q-3.86 3.82-8.37 7.63l3.74-.62a49.38 49.38 0 0 0 7.08-2l.43.64 1 1.27h0 0a16.4 16.4 0 0 0 2.13 2 55.29 55.29 0 0 1-9.73 2.92 58.73 58.73 0 0 1-22.83 0 53.48 53.48 0 0 1-10.6-3.27.26.26 0 0 1-.14-.07 62.1 62.1 0 0 1-9.6-5.17A54.41 54.41 0 0 1 16.6 97a52.69 52.69 0 0 1-6.89-8.38A59.79 59.79 0 0 1 4.46 79a55.79 55.79 0 0 1-3.34-10.78 58.73 58.73 0 0 1 0-22.83 52.86 52.86 0 0 1 3.28-10.6.33.33 0 0 1 .06-.14A60.34 60.34 0 0 1 9.71 25a54 54 0 0 1 6.89-8.39 52.19 52.19 0 0 1 8.4-6.9 59.7 59.7 0 0 1 9.67-5.25 54.52 54.52 0 0 1 10.72-3.34 58.73 58.73 0 0 1 22.83 0 53.89 53.89 0 0 1 10.6 3.27.28.28 0 0 1 .13.07 61.75 61.75 0 0 1 9.68 5.25A54.41 54.41 0 0 1 97 16.59a52.27 52.27 0 0 1 6.89 8.41 58.19 58.19 0 0 1 5.25 9.67 54.52 54.52 0 0 1 3.34 10.74l.12.6-5.42-1.53a47 47 0 0 0-2.6-7.83 54.22 54.22 0 0 0-2.87-5.76H85.08a65.47 65.47 0 0 1 4.2 8.49l-6.16-1.66a65.73 65.73 0 0 0-3.86-6.83h-20v3.41l-.61.22a13.48 13.48 0 0 0-4.36 2.68v-6.33h-20q-7.67 11.91-8.62 23.44h25.57q1 2.47 2.09 5H25.62c.31 7.87 3 15.67 7.88 23.44h20.82V61.56l5 11v10.17h4.76l2.29 5h-7.08v17.51a123.84 123.84 0 0 0 10.53-9.65q1.05 2.49 2.07 5zM114.75 98a4.64 4.64 0 0 1-1.17.79h-.08a4.14 4.14 0 0 1-4.36-.6l-11.6-9.84-4 9.77a12.93 12.93 0 0 1-1.19 2.25 9.1 9.1 0 0 1-1.51 1.76 4.78 4.78 0 0 1-7.5-.82 9.28 9.28 0 0 1-.92-1.63c-6.9-17.49-16.26-34.9-23.26-52.4A3.11 3.11 0 0 1 62.65 43c16.77 3.1 38.5 10.19 55.55 14.71 5.3 1.4 6.16 6.07 2.25 9.69a12.21 12.21 0 0 1-2 1.52c-3 1.7-6 3.67-9 5.47l11.55 9.9a4.25 4.25 0 0 1 1 1.26v.08a4.28 4.28 0 0 1 .39 1.47h0a4.26 4.26 0 0 1-.16 1.54 4.39 4.39 0 0 1-.72 1.39 94.55 94.55 0 0 1-6.76 7.97zm-3-3.84l5.59-6.56c-2.46-2.11-13-10.29-14.09-12.26a2.41 2.41 0 0 1 .83-3.25c3.66-2 8.36-4.86 11.83-7.17a8.38 8.38 0 0 0 1.22-.89 4.42 4.42 0 0 0 .75-.87l.16-.3-.31-.18a3.92 3.92 0 0 0-.76-.26L65 48.6l21.83 49.14a4.8 4.8 0 0 0 .38.7l.22.29.28-.2a4.51 4.51 0 0 0 .73-.89 7.51 7.51 0 0 0 .68-1.33c1.63-4 3.49-9.47 5.4-13.17l.23-.32a2.4 2.4 0 0 1 3.37-.27l13.64 11.57zm-61.62 14.03a105.56 105.56 0 0 1-19.26-20.48H15.16a51.5 51.5 0 0 0 12.61 12 52.81 52.81 0 0 0 8.89 4.8s.07 0 .11.07a49.13 49.13 0 0 0 9.64 3 65.13 65.13 0 0 0 3.75.62zM11.89 82.73H27.7a50.6 50.6 0 0 1-7-23.44H5a55.75 55.75 0 0 0 1 7.94A48.27 48.27 0 0 0 9 77a54.16 54.16 0 0 0 2.86 5.76zM5 54.31h15.75a54.38 54.38 0 0 1 7.77-23.44H11.89A54.16 54.16 0 0 0 9 36.63s0 .07-.07.1a49.91 49.91 0 0 0-3 9.65 51.46 51.46 0 0 0-1 7.93zM15.13 25.9h16.59A117.72 117.72 0 0 1 50.46 5.35c-1.39.17-2.76.37-4.08.65a48.36 48.36 0 0 0-9.75 3 55.24 55.24 0 0 0-8.89 4.8 51.5 51.5 0 0 0-12.61 12h0zm48-20.55A114.63 114.63 0 0 1 81.88 25.9h16.6a48.63 48.63 0 0 0-5-5.76 49.81 49.81 0 0 0-7.63-6.27A53.27 53.27 0 0 0 77 9.06s-.06 0-.1-.06a49.15 49.15 0 0 0-9.64-3c-1.36-.27-2.73-.48-4.09-.65h0zm-3.84 3.24V25.9h16.49A115.68 115.68 0 0 0 59.29 8.59zm-5 96.63V87.71H37a105.67 105.67 0 0 0 17.35 17.51zm0-79.32V8.59A116.3 116.3 0 0 0 37.82 25.9z'/></svg>",
};
function atcb_init() {
  /* eslint-disable */
  console.log(
    ...oo_oo(
      `27931521_1_17240_1_17319_4`,
      'add-to-calendar button initialized (version ' + atcbVersion + ')'
    )
  ),
    /* eslint-disable */
    console.log(
      ...oo_oo(
        `27931521_1_17321_1_17401_4`,
        'See https://github.com/add2cal/add-to-calendar-button for details'
      )
    );
  let e = document.querySelectorAll('.atcb');
  if (0 < e.length) {
    var t = document.querySelectorAll('.atcb-initialized');
    for (let a = 0; a < e.length; a++)
      if (!e[parseInt(a)].classList.contains('atcb-initialized')) {
        let _ = JSON.parse(
          atcb_seure_content(
            e[parseInt(a)].innerHTML.replace(/(\r\n|\n|\r)/g, ''),
            !1
          )
        );
        atcb_check_required((_ = atcb_patch_config(_))) &&
          atcb_validate((_ = atcb_decorate_data(_))) &&
          ((null != _.identifier && '' != _.identifier) ||
            (_.identifier = 'atcb-btn-' + (a + t.length + 1)),
          atcb_generate(e[parseInt(a)], _));
      }
  }
}
function atcb_patch_config(e) {
  null != e.event &&
    (Object.keys(e.event).forEach((t) => {
      '@' !== t.charAt(0) && (e['' + t] = e.event['' + t]);
    }),
    delete e.event);
  let t = {
    title: 'name',
    dateStart: 'startDate',
    dateEnd: 'endDate',
    timeStart: 'startTime',
    timeEnd: 'endTime',
  };
  return (
    Object.keys(t).forEach((a) => {
      null == e[t['' + a]] && null != e['' + a] && (e[t['' + a]] = e['' + a]);
    }),
    e
  );
}
function atcb_decorate_data(e) {
  for (let t = 0; t < e.options.length; t++) {
    let a = e.options['' + t].split('|');
    e.options['' + t] = a[0]
      .toLowerCase()
      .replace('microsoft', 'ms')
      .replace('.', '');
  }
  if (
    (((e = atcb_date_cleanup(e)).startDate = atcb_date_calculation(
      e.startDate
    )),
    (e.endDate = atcb_date_calculation(e.endDate)),
    'modal' === e.listStyle && (e.trigger = 'click'),
    null == e.lightMode || '' == e.lightMode)
  )
    e.lightMode = 'light';
  else if (null != e.lightMode && '' != e.lightMode) {
    var _ = window.matchMedia('(prefers-color-scheme: dark)');
    switch (e.lightMode) {
      case 'system':
        _.matches ? (e.lightMode = 'dark') : (e.lightMode = 'light');
        break;
      case 'bodyScheme':
      case 'dark':
        break;
      default:
        e.lightMode = 'light';
    }
  }
  if (
    ((null != e.language && '' != e.language) || (e.language = 'en'),
    null != e.recurrence &&
      '' != e.recurrence &&
      (e.recurrence = e.recurrence.replace(/\s+/g, '')),
    !e.description || e.descriptionHtmlFree)
  )
    return e;
  let l = Object.assign({}, e);
  return (
    (l.descriptionHtmlFree = atcb_rewrite_html_elements(l.description, !0)),
    (l.description = atcb_rewrite_html_elements(l.description)),
    l
  );
}
function atcb_check_required(e) {
  return null == e.options || e.options.length < 1
    ? (console.error(
        'add-to-calendar button generation failed: no options set'
      ),
      !1)
    : ['name', 'startDate'].every(function (t) {
        return (
          (null != e['' + t] && '' != e['' + t]) ||
          (console.error(
            'add-to-calendar button generation failed: required setting missing [' +
              t +
              ']'
          ),
          !1)
        );
      });
}
function atcb_date_cleanup(e) {
  return (
    (null != e.endDate && '' != e.endDate) ||
      null == e.startDate ||
      (e.endDate = e.startDate),
    ['start', 'end'].forEach(function (t) {
      var a;
      if (
        (null != e[t + 'Date'] &&
          ((e[t + 'Date'] = e[t + 'Date']
            .replace(/\.\d{3}/, '')
            .replace('Z', '')),
          null != (a = e[t + 'Date'].split('T'))[1] &&
            ((e[t + 'Date'] = a[0]), (e[t + 'Time'] = a[1]))),
        null != e[t + 'Time'] && 8 === e[t + 'Time'].length)
      ) {
        let _ = e[t + 'Time'];
        e[t + 'Time'] = _.substring(0, _.length - 3);
      }
    }),
    e
  );
}
function atcb_date_calculation(e) {
  let t = new Date();
  var a = t.getUTCMonth() + 1 + '-' + t.getUTCDate() + '-' + t.getUTCFullYear();
  let _ = (e = e.replace(/today/gi, a)).split('+');
  a = _[0].split('-');
  let l = new Date(a[0], a[1] - 1, a[2]);
  return (
    a[0].length < 4 && (l = new Date(a[2], a[0] - 1, a[1])),
    null != _[1] && 0 < _[1] && l.setDate(l.getDate() + parseInt(_[1])),
    l.getFullYear() +
      '-' +
      (l.getMonth() + 1 < 10 ? '0' : '') +
      (l.getMonth() + 1) +
      '-' +
      (10 > l.getDate() ? '0' : '') +
      l.getDate()
  );
}
function atcb_validate(e) {
  if (
    (null != e.identifier &&
      '' != e.identifier &&
      (/^[\w-]+$/.test(e.identifier) ||
        ((e.identifier = ''),
        console.error(
          'add-to-calendar button generation: identifier invalid - using auto numbers instead'
        ))),
    !(
      null == e.icsFile ||
      '' == e.icsFile ||
      (atcb_secure_url(e.icsFile, !1) && /\.ics$/.test(e.icsFile))
    ))
  )
    return (
      console.error(
        'add-to-calendar button generation failed: explicit ics file path not valid'
      ),
      !1
    );
  let t = [
      'apple',
      'google',
      'ical',
      'ms365',
      'outlookcom',
      'msteams',
      'yahoo',
    ],
    a = ['apple', 'google', 'ical'];
  if (
    !e.options.every(function (e) {
      return (
        (e = e.split('|')),
        !!t.includes(e[0]) ||
          (console.error(
            'add-to-calendar button generation failed: invalid option [' +
              e[0] +
              ']'
          ),
          !1)
      );
    })
  )
    return !1;
  if ((null != e.recurrence) & ('' != e.recurrence)) {
    let _ = !1;
    if (
      (e.options.forEach(function (e) {
        (e = e.split('|')), a.includes(e[0]) && (_ = !0);
      }),
      !_)
    )
      return (
        console.error(
          'add-to-calendar button generation failed: no supported valid option for recurring events'
        ),
        !1
      );
  }
  let l = ['startDate', 'endDate'],
    $ = l;
  return (
    !!l.every(function (t) {
      if (10 !== e['' + t].length)
        return (
          console.error(
            'add-to-calendar button generation failed: date misspelled [-> YYYY-MM-DD]'
          ),
          !1
        );
      var a = e['' + t].split('-');
      return a.length < 3 || 3 < a.length
        ? (console.error(
            'add-to-calendar button generation failed: date misspelled [' +
              t +
              ': ' +
              e['' + t] +
              ']'
          ),
          !1)
        : (($['' + t] = new Date(a[0], a[1] - 1, a[2])), !0);
    }) &&
    !!['startTime', 'endTime'].every(function (t) {
      if (null != e['' + t]) {
        if (5 !== e['' + t].length)
          return (
            console.error(
              'add-to-calendar button generation failed: time misspelled [-> HH:MM]'
            ),
            !1
          );
        var a = e['' + t].split(':');
        if (a.length < 2 || 2 < a.length)
          return (
            console.error(
              'add-to-calendar button generation failed: time misspelled [' +
                t +
                ': ' +
                e['' + t] +
                ']'
            ),
            !1
          );
        if (23 < a[0])
          return (
            console.error(
              'add-to-calendar button generation failed: time misspelled - hours number too high [' +
                t +
                ': ' +
                a[0] +
                ']'
            ),
            !1
          );
        if (59 < a[1])
          return (
            console.error(
              'add-to-calendar button generation failed: time misspelled - minutes number too high [' +
                t +
                ': ' +
                a[1] +
                ']'
            ),
            !1
          );
        'startTime' == t &&
          ($.startDate = new Date(
            $.startDate.getTime() + 36e5 * a[0] + 6e4 * a[1]
          )),
          'endTime' == t &&
            ($.endDate = new Date(
              $.endDate.getTime() + 36e5 * a[0] + 6e4 * a[1]
            ));
      }
      return !0;
    }) &&
    ((null != e.startTime && null == e.endTime) ||
    (null == e.startTime && null != e.endTime)
      ? (console.error(
          'add-to-calendar button generation failed: if you set a starting time, you also need to define an end time'
        ),
        !1)
      : $.endDate < $.startDate
        ? (console.error(
            'add-to-calendar button generation failed: end date before start date'
          ),
          !1)
        : !(
            null != e.recurrence &&
            '' != e.recurrence &&
            !/^[\w=;:*+-/\\]+$/.test(e.recurrence)
          ) ||
          (console.error(
            'add-to-calendar button generation failed: RRULE data misspelled'
          ),
          !1))
  );
}
function atcb_generate_label(e, t, a, _ = !1, l = '', $ = !1) {
  if (
    null == e.recurrence ||
    '' == e.recurrence ||
    ('msteams' != a && 'ms365' != a && 'outlookcom' != a && 'yahoo' != a)
  ) {
    var n = atcb_translate_hook('Add to Calendar', e.language, e);
    switch (($ && '' == l && (l = n), a)) {
      case 'trigger':
      default:
        'click' === e.trigger
          ? t.addEventListener(
              'click',
              atcb_debounce_leading(() => atcb_toggle(e, t, !1, !0))
            )
          : (t.addEventListener(
              'touchstart',
              atcb_debounce_leading(() => atcb_toggle(e, t, !1, !0)),
              {
                passive: !0,
              }
            ),
            t.addEventListener(
              'mouseenter',
              atcb_debounce_leading(() => atcb_open(e, t, !1, !0))
            )),
          t.setAttribute('id', e.identifier),
          (l = l || n);
        break;
      case 'apple':
        t.addEventListener(
          'click',
          atcb_debounce(() => {
            $ ? t.blur() : atcb_close(), atcb_generate_ical(e);
          })
        ),
          t.setAttribute('id', e.identifier + '-apple'),
          (l = l || 'Apple');
        break;
      case 'google':
        t.addEventListener(
          'click',
          atcb_debounce(() => {
            $ ? t.blur() : atcb_close(), atcb_generate_google(e);
          })
        ),
          t.setAttribute('id', e.identifier + '-google'),
          (l = l || 'Google');
        break;
      case 'ical':
        t.addEventListener(
          'click',
          atcb_debounce(() => {
            $ ? t.blur() : atcb_close(), atcb_generate_ical(e);
          })
        ),
          t.setAttribute('id', e.identifier + '-ical'),
          (l = l || atcb_translate_hook('iCal File', e.language, e));
        break;
      case 'msteams':
        t.addEventListener(
          'click',
          atcb_debounce(() => {
            $ ? t.blur() : atcb_close(), atcb_generate_teams(e);
          })
        ),
          t.setAttribute('id', e.identifier + '-msteams'),
          (l = l || 'Microsoft Teams');
        break;
      case 'ms365':
        t.addEventListener(
          'click',
          atcb_debounce(() => {
            $ ? t.blur() : atcb_close(), atcb_generate_microsoft(e, '365');
          })
        ),
          t.setAttribute('id', e.identifier + '-ms365'),
          (l = l || 'Microsoft 365');
        break;
      case 'outlookcom':
        t.addEventListener(
          'click',
          atcb_debounce(() => {
            $ ? t.blur() : atcb_close(), atcb_generate_microsoft(e, 'outlook');
          })
        ),
          t.setAttribute('id', e.identifier + '-outlook'),
          (l = l || 'Outlook.com');
        break;
      case 'yahoo':
        t.addEventListener(
          'click',
          atcb_debounce(() => {
            $ ? t.blur() : atcb_close(), atcb_generate_yahoo(e);
          })
        ),
          t.setAttribute('id', e.identifier + '-yahoo'),
          (l = l || 'Yahoo');
        break;
      case 'close':
        t.addEventListener(
          'click',
          atcb_debounce(() => {
            $ ? t.blur() : atcb_close();
          })
        ),
          t.addEventListener(
            'focus',
            atcb_debounce(() => atcb_close(!1))
          ),
          t.setAttribute('id', e.identifier + '-close'),
          (l = atcb_translate_hook('Close', e.language, e));
    }
    if (
      ($ && t.setAttribute('id', e.identifier),
      $ || 'trigger' !== a
        ? t.addEventListener(
            'keydown',
            atcb_debounce_leading((e) => {
              'Enter' == e.key && (e.preventDefault(), t.click());
            })
          )
        : t.addEventListener(
            'keydown',
            atcb_debounce_leading((a) => {
              'Enter' == a.key &&
                (a.preventDefault(), atcb_toggle(e, t, !0, !0));
            })
          ),
      _)
    ) {
      let i = document.createElement('span');
      i.classList.add('atcb-icon'),
        (i.innerHTML = atcbIcon['' + a]),
        t.appendChild(i);
    }
    let c = document.createElement('span');
    c.classList.add('atcb-text'), (c.textContent = l), t.appendChild(c);
  } else t.remove();
}
function atcb_generate(e, t) {
  if (((e.textContent = ''), t.name && t.location && t.startDate)) {
    let a = document.createElement('script');
    a.setAttribute('type', 'application/ld+json'),
      (a.textContent =
        '{ "event": { "@context":"https://schema.org", "@type":"Event", '),
      (a.textContent += '"name":"' + t.name + '", '),
      t.descriptionHtmlFree &&
        (a.textContent += '"description":"' + t.descriptionHtmlFree + '", ');
    var _ = atcb_generate_time(t, 'delimiters', 'general', !0);
    (a.textContent += '"startDate":"' + _.start + '", '),
      (a.textContent += '"endDate":"' + _.end + '", '),
      t.location.startsWith('http')
        ? ((a.textContent +=
            '"eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode", '),
          (a.textContent +=
            '"location": { "@type":"VirtualLocation", "url":"' +
            t.location +
            '" } '))
        : (a.textContent += '"location":"' + t.location + '" '),
      (a.textContent += '} }'),
      e.appendChild(a);
  }
  let l = document.createElement('div'),
    $ =
      (l.classList.add('atcb-button-wrapper'),
      l.classList.add('atcb-' + t.lightMode),
      e.appendChild(l),
      document.createElement('button'));
  if (
    ($.classList.add('atcb-button'),
    $.setAttribute('type', 'button'),
    l.appendChild($),
    1 === t.options.length)
  )
    (_ = t.options[0].split('|')),
      atcb_generate_label(t, $, _[0], !0, t.label, !0);
  else {
    atcb_generate_label(t, $, 'trigger', !0, t.label);
    let n = document.createElement('div');
    n.classList.add('atcb-dropdown-anchor'), l.appendChild(n);
  }
  e.classList.remove('atcb'),
    e.classList.add('atcb-initialized'),
    t.inline ? (e.style.display = 'inline-block') : (e.style.display = 'block'),
    /* eslint-disable */
    console.log(
      ...oo_oo(
        `27931521_1_28198_1_28266_4`,
        'add-to-calendar button "' + t.identifier + '" created'
      )
    );
}
function atcb_generate_dropdown_list(e) {
  let t = document.createElement('div');
  if (
    (t.classList.add('atcb-list'),
    t.classList.add('atcb-' + e.lightMode),
    e.options.forEach(function (a) {
      a = a.split('|');
      let _ = document.createElement('div');
      _.classList.add('atcb-list-item'),
        (_.tabIndex = 0),
        t.appendChild(_),
        atcb_generate_label(e, _, a[0], !0, a[1]);
    }),
    'modal' === e.listStyle)
  ) {
    let a = document.createElement('div');
    a.classList.add('atcb-list-item', 'atcb-list-item-close'),
      (a.tabIndex = 0),
      t.appendChild(a),
      atcb_generate_label(e, a, 'close', !0);
  }
  return t;
}
function atcb_generate_bg_overlay(e = 'dropdown', t = '', a = !0) {
  let _ = document.createElement('div');
  _.setAttribute('id', 'atcb-bgoverlay'),
    'modal' !== e && a && _.classList.add('atcb-animate-bg'),
    a || _.classList.add('atcb-no-bg'),
    (_.tabIndex = 0),
    _.addEventListener(
      'click',
      atcb_debounce((e) => {
        e.target === e.currentTarget && atcb_close(!0);
      })
    );
  let l = !1;
  return (
    _.addEventListener(
      'touchstart',
      atcb_debounce_leading(() => (l = !1)),
      {
        passive: !0,
      }
    ),
    _.addEventListener(
      'touchmove',
      atcb_debounce_leading(() => (l = !0)),
      {
        passive: !0,
      }
    ),
    _.addEventListener(
      'touchend',
      atcb_debounce((e) => {
        !1 === l && e.target === e.currentTarget && atcb_close(!0);
      }),
      {
        passive: !0,
      }
    ),
    _.addEventListener(
      'focus',
      atcb_debounce_leading((e) => {
        e.target === e.currentTarget && atcb_close();
      })
    ),
    'click' !== t
      ? _.addEventListener(
          'mousemove',
          atcb_debounce_leading((e) => {
            e.target === e.currentTarget && atcb_close(!0);
          })
        )
      : _.classList.add('atcb-click'),
    _
  );
}
function atcb_toggle(e, t, a = !1, _ = !1) {
  t.classList.contains('atcb-active') ||
  document.querySelector('.atcb-active-modal')
    ? atcb_close()
    : atcb_open(e, t, a, _);
}
function atcb_open(e, t, a = !1, _ = !1) {
  if (
    !document.querySelector('.atcb-list') &&
    !document.querySelector('.atcb-modal')
  ) {
    let l = atcb_generate_dropdown_list(e),
      $ = document.createElement('div'),
      n =
        ($.classList.add('atcb-list-wrapper'),
        t
          ? (t.classList.add('atcb-active'),
            'modal' === e.listStyle
              ? (t.classList.add('atcb-modal-style'),
                l.classList.add('atcb-modal'))
              : ($.appendChild(l), $.classList.add('atcb-dropdown')),
            _ && l.classList.add('atcb-generated-button'))
          : l.classList.add('atcb-modal'),
        atcb_generate_bg_overlay(e.listStyle, e.trigger, e.background));
    l.classList.add('fade-in');
    let i = l.querySelectorAll('.atcb-list-item');
    i.forEach((e, t) => {
      let a = e.querySelector('.atcb-icon'),
        _ = e.querySelector('.atcb-text');
      (a.style.opacity = 0), (_.style.opacity = 0);
      let l = 100 * t;
      (a.style.animation = `slideUpAnimation ease 125ms ${l}ms forwards`),
        (_.style.animation = `slideUpTextAnimation ease 125ms ${l + 50}ms forwards`);
    }),
      'modal' === e.listStyle
        ? (document.body.appendChild(n),
          n.appendChild(l),
          document.body.classList.add('atcb-modal-no-scroll'))
        : (document.body.appendChild($),
          $.appendChild(l),
          atcb_position_list(t, $),
          document.body.appendChild(n)),
      atcb_set_fullsize(n),
      a ? l.firstChild.focus() : (l.firstChild.focus(), l.firstChild.blur());
  }
}
function atcb_close(e = !1) {
  if (!e) {
    let t = document.querySelector('.atcb-active, .atcb-active-modal');
    t && t.focus();
  }
  Array.from(document.querySelectorAll('.atcb-active')).forEach((e) => {
    e.classList.remove('atcb-active');
  }),
    Array.from(document.querySelectorAll('.atcb-active-modal')).forEach((e) => {
      e.classList.remove('atcb-active-modal');
    }),
    document.body.classList.remove('atcb-modal-no-scroll'),
    Array.from(document.querySelectorAll('.atcb-list-wrapper'))
      .concat(Array.from(document.querySelectorAll('.atcb-list')))
      .concat(Array.from(document.querySelectorAll('.atcb-info-modal')))
      .concat(Array.from(document.querySelectorAll('#atcb-bgoverlay')))
      .forEach((e) => e.remove());
}
function atcb_action(e, t, a = !0) {
  if (!atcb_check_required((e = atcb_seure_content(e))))
    throw Error('data missing; see logs');
  if (!atcb_validate((e = atcb_decorate_data(e))))
    throw Error('Invalid data; see logs');
  t
    ? (e.identifier = t.id)
    : ((e.identifier = 'atcb-btn-custom'),
      (e.listStyle = 'modal'),
      (e.trigger = 'click')),
    atcb_open(e, t, a);
}
function atcb_generate_google(e) {
  let t = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
  var a = atcb_generate_time(e, 'clean', 'google');
  (t += '&dates=' + a.start + '%2F' + a.end),
    null != e.name &&
      '' != e.name &&
      (t += '&text=' + encodeURIComponent(e.name));
  let _ = '';
  null != e.description && '' != e.description && (_ = e.description),
    null != e.location &&
      '' != e.location &&
      ((t += '&location=' + encodeURIComponent(e.location)),
      isiOS() &&
        ('' != _ && (_ += '<br><br>'), (_ += '&#128205;: ' + e.location))),
    '' != _ && (t += '&details=' + encodeURIComponent(_)),
    null != e.recurrence &&
      '' != e.recurrence &&
      (t += '&recur=' + encodeURIComponent(e.recurrence)),
    atcb_secure_url(t) && window.open(t, atcbDefaultTarget).focus();
}
function atcb_generate_yahoo(e) {
  let t = 'https://calendar.yahoo.com/?v=60';
  var a = atcb_generate_time(e, 'clean');
  (t += '&st=' + a.start + '&et=' + a.end),
    a.allday && (t += '&dur=allday'),
    null != e.name &&
      '' != e.name &&
      (t += '&title=' + encodeURIComponent(e.name)),
    null != e.location &&
      '' != e.location &&
      (t += '&in_loc=' + encodeURIComponent(e.location)),
    null != e.descriptionHtmlFree &&
      '' != e.descriptionHtmlFree &&
      (t += '&desc=' + encodeURIComponent(e.descriptionHtmlFree)),
    atcb_secure_url(t) && window.open(t, atcbDefaultTarget).focus();
}
function atcb_generate_microsoft(e, t = '365') {
  let a = 'https://';
  (a += 'outlook' == t ? 'outlook.live.com' : 'outlook.office.com'),
    (a +=
      '/calendar/0/deeplink/compose?path=%2Fcalendar%2Faction%2Fcompose&rru=addevent'),
    (a +=
      '&startdt=' +
      (t = atcb_generate_time(e, 'delimiters', 'microsoft')).start +
      '&enddt=' +
      t.end),
    t.allday && (a += '&allday=true'),
    null != e.name &&
      '' != e.name &&
      (a += '&subject=' + encodeURIComponent(e.name)),
    null != e.location &&
      '' != e.location &&
      (a += '&location=' + encodeURIComponent(e.location)),
    null != e.description &&
      '' != e.description &&
      (a +=
        '&body=' + encodeURIComponent(e.description.replace(/\n/g, '<br>'))),
    atcb_secure_url(a) && window.open(a, atcbDefaultTarget).focus();
}
function atcb_generate_teams(e) {
  let t = 'https://teams.microsoft.com/l/meeting/new?';
  var a = atcb_generate_time(e, 'delimiters', 'microsoft');
  t += '&startTime=' + a.start + '&endTime=' + a.end;
  let _ = '';
  null != e.name &&
    '' != e.name &&
    (t += '&subject=' + encodeURIComponent(e.name)),
    null != e.location &&
      '' != e.location &&
      ((t += '&location=' + (_ = encodeURIComponent(e.location))),
      (_ += ' // ')),
    null != e.descriptionHtmlFree &&
      '' != e.descriptionHtmlFree &&
      (t += '&content=' + _ + encodeURIComponent(e.descriptionHtmlFree)),
    atcb_secure_url(t) && window.open(t, atcbDefaultTarget).focus();
}
function atcb_generate_ical(e) {
  if (
    null == e.icsFile ||
    '' == e.icsFile ||
    !atcb_secure_url(e.icsFile) ||
    !e.icsFile.startsWith('https://') ||
    (isiOS() && isWebView())
  ) {
    let t = new Date();
    t = t.toISOString();
    var a = atcb_generate_time(e, 'clean', 'ical');
    let _ = '';
    a.allday && (_ = ';VALUE=DATE');
    let l = ['BEGIN:VCALENDAR', 'VERSION:2.0'];
    l.push(
      'PRODID:-// github.com/add2cal/add-to-calendar-button // atcb v' +
        atcbVersion +
        ' //EN'
    ),
      l.push('CALSCALE:GREGORIAN'),
      l.push('BEGIN:VEVENT'),
      l.push('UID:' + t + '@add-to-calendar-button'),
      l.push(
        'DTSTAMP:' + a.start,
        'DTSTART' + _ + ':' + a.start,
        'DTEND' + _ + ':' + a.end,
        'SUMMARY:' + e.name.replace(/.{65}/g, '$&\r\n ')
      ),
      null != e.descriptionHtmlFree &&
        '' != e.descriptionHtmlFree &&
        l.push(
          'DESCRIPTION:' +
            e.descriptionHtmlFree
              .replace(/\n/g, '\\n')
              .replace(/.{60}/g, '$&\r\n ')
        ),
      null != e.description &&
        '' != e.description &&
        l.push(
          'X-ALT-DESC;FMTTYPE=text/html:\r\n <!DOCTYPE HTML PUBLIC ""-//W3C//DTD HTML 3.2//EN"">\r\n <HTML><BODY>\r\n ' +
            e.description.replace(/\n/g, '<br>').replace(/.{60}/g, '$&\r\n ') +
            '\r\n </BODY></HTML>'
        ),
      null != e.location &&
        '' != e.location &&
        l.push('LOCATION:' + e.location),
      null != e.recurrence && '' != e.recurrence && l.push(e.recurrence),
      l.push(
        'STATUS:CONFIRMED',
        'LAST-MODIFIED:' +
          (t = t.replace(/\.\d{3}/g, '').replace(/[^a-z\d]/gi, '')),
        'SEQUENCE:0',
        'END:VEVENT',
        'END:VCALENDAR'
      );
    let $ =
      'data:text/calendar;charset=utf-8,' + encodeURIComponent(l.join('\r\n'));
    if (
      ((a = e.iCalFileName || 'event-to-save-in-my-calendar'),
      null != e.icsFile &&
        '' != e.icsFile &&
        atcb_secure_url(e.icsFile) &&
        e.icsFile.startsWith('https://') &&
        ($ = e.icsFile),
      isWebView() && (isiOS() || (isAndroid() && isProblematicWebView())))
    ) {
      let n = document.createElement('input');
      document.body.appendChild(n);
      var i,
        c,
        r = n.contentEditable,
        o = n.readOnly;
      (n.value = $),
        (n.contentEditable = !0),
        (n.readOnly = !1),
        isiOS()
          ? ((i = document.createRange()).selectNodeContents(n),
            (c = window.getSelection()).removeAllRanges(),
            c.addRange(i),
            n.setSelectionRange(0, 999999))
          : (navigator.clipboard.writeText($), n.select()),
        (n.contentEditable = r),
        (n.readOnly = o),
        document.execCommand('copy'),
        n.remove(),
        atcb_create_modal(
          e,
          'browser',
          atcb_translate_hook('WebView iCal', e.language, e),
          atcb_translate_hook('WebView info description', e.language, e)
        );
    } else
      try {
        if (window.ActiveXObject) {
          if (window.ActiveXObject && document.execCommand) {
            let s = window.open($, atcbDefaultTarget);
            s.document.close(),
              s.document.execCommand('SaveAs', !0, a || $),
              s.close();
          }
        } else {
          let d = document.createElement('a');
          (d.href = $), (d.target = atcbDefaultTarget), (d.download = a);
          var u = new MouseEvent('click', {
            view: window,
            button: 0,
            bubbles: !0,
            cancelable: !1,
          });
          d.dispatchEvent(u),
            (window.URL || window.webkitURL).revokeObjectURL(d.href);
        }
      } catch (b) {
        console.error(b);
      }
  } else window.open(e.icsFile, atcbDefaultTarget);
}
function atcb_generate_time(e, t = 'delimiters', a = 'general', _ = !1) {
  var l = e.startDate.split('-'),
    $ = e.endDate.split('-');
  let n = '',
    i = '',
    c = !1;
  if (null != e.startTime && null != e.endTime) {
    if (null != e.timeZoneOffset && '' != e.timeZoneOffset)
      (n = new Date(
        l[0] +
          '-' +
          l[1] +
          '-' +
          l[2] +
          'T' +
          e.startTime +
          ':00.000' +
          e.timeZoneOffset
      )),
        (i = new Date(
          $[0] +
            '-' +
            $[1] +
            '-' +
            $[2] +
            'T' +
            e.endTime +
            ':00.000' +
            e.timeZoneOffset
        ));
    else if (
      ((n = new Date(
        l[0] + '-' + l[1] + '-' + l[2] + 'T' + e.startTime + ':00.000+00:00'
      )),
      (i = new Date(
        $[0] + '-' + $[1] + '-' + $[2] + 'T' + e.endTime + ':00.000+00:00'
      )),
      null != e.timeZone && '' != e.timeZone)
    ) {
      let r = new Date(
          n.toLocaleString('en-US', {
            timeZone: 'UTC',
          })
        ),
        o =
          ('currentBrowser' == e.timeZone &&
            (e.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone),
          new Date(
            n.toLocaleString('en-US', {
              timeZone: e.timeZone,
            })
          ));
      var s = r.getTime() - o.getTime();
      n.setTime(n.getTime() + s), i.setTime(i.getTime() + s);
    }
    if (
      ((n = n.toISOString().replace('.000', '')),
      (i = i.toISOString().replace('.000', '')),
      'clean' == t &&
        ((n = n.replace(/-/g, '').replace(/:/g, '')),
        (i = i.replace(/-/g, '').replace(/:/g, ''))),
      _)
    ) {
      let d = '',
        u = '';
      null != e.timeZoneOffset && '' != e.timeZoneOffset
        ? ((d = e.timeZoneOffset), (u = e.timeZoneOffset))
        : null != e.timeZone &&
          '' != e.timeZone &&
          (u = ((d = new Date(
            n.toLocaleString('sv', {
              timeZone: e.timeZone,
            })
          )
            .toString()
            .match(/GMT(.{5})/g)[0]
            .replace(/GMT(.{3})(.{2})/g, '$1:$2')),
          new Date(
            i.toLocaleString('sv', {
              timeZone: e.timeZone,
            })
          ))
            .toString()
            .match(/GMT(.{5})/g)[0]
            .replace(/GMT(.{3})(.{2})/g, '$1:$2')),
        (n = n.slice(0, -1) + d),
        (i = i.slice(0, -1) + u);
    }
  } else {
    c = !0;
    let b = (n = new Date(Date.UTC(l[0], l[1] - 1, l[2])))
        .toISOString()
        .replace(/T(.+)Z/g, ''),
      h =
        ((i = new Date(Date.UTC($[0], $[1] - 1, $[2]))),
        ('google' != a && 'microsoft' != a && 'ical' != a) ||
          i.setDate(i.getDate() + 1),
        i.toISOString().replace(/T(.+)Z/g, ''));
    'clean' == t && ((b = b.replace(/-/g, '')), (h = h.replace(/-/g, ''))),
      (n = b),
      (i = h);
  }
  return {
    start: n,
    end: i,
    allday: c,
  };
}
function atcb_seure_content(e, t = !0) {
  let a;
  return (
    (a = (a = t ? JSON.stringify(e) : e).replace(/(<(?!br)([^>]+)>)/gi, '')),
    t ? JSON.parse(a) : a
  );
}
function atcb_secure_url(e, t = !0) {
  return (
    !e.match(
      /((\.\.\/)|(\.\.\\)|(%2e%2e%2f)|(%252e%252e%252f)|(%2e%2e\/)|(%252e%252e\/)|(\.\.%2f)|(\.\.%252f)|(%2e%2e%5c)|(%252e%252e%255c)|(%2e%2e\\)|(%252e%252e\\)|(\.\.%5c)|(\.\.%255c)|(\.\.%c0%af)|(\.\.%25c0%25af)|(\.\.%c1%9c)|(\.\.%25c1%259c))/gi
    ) ||
    (t &&
      console.error(
        'Seems like the generated URL includes at least one security issue and got blocked. Please check the calendar button parameters!'
      ),
    !1)
  );
}
function atcb_rewrite_html_elements(e, t = !1) {
  return (
    (e = e.replace(/<br\s*\/?>/gi, '\n')),
    (e = t
      ? e.replace(
          /\[(|\/)(url|br|hr|p|b|strong|u|i|em|li|ul|ol|h\d)\]|((\|.*)\[\/url\])/gi,
          ''
        )
      : (e = e.replace(
          /\[(\/|)(br|hr|p|b|strong|u|i|em|li|ul|ol|h\d)\]/gi,
          '<$1$2>'
        )).replace(
          /\[url\]([\w&$+.,:;=~!*'?@^%#|\s\-()/]*)\[\/url\]/gi,
          function (e, t) {
            let a =
              '<a href="' +
              (t = t.split('|'))[0] +
              '" target="' +
              atcbDefaultTarget +
              '" rel="noopener">';
            return (
              1 < t.length && '' != t[1] ? (a += t[1]) : (a += t[0]), a + '</a>'
            );
          }
        ))
  );
}
function atcb_create_modal(e, t = '', a, _, l) {
  let $ = atcb_generate_bg_overlay('modal', 'click'),
    n = document.createElement('div'),
    i =
      (n.classList.add('atcb-modal', 'atcb-info-modal'),
      (n.tabIndex = 0),
      $.appendChild(n),
      document.body.appendChild($),
      document.body.classList.add('atcb-modal-no-scroll'),
      document.getElementById(e.identifier)),
    c =
      (null != i && i.classList.add('atcb-active-modal'),
      document.createElement('div')),
    r =
      (c.classList.add('atcb-modal-box'),
      c.classList.add('atcb-' + e.lightMode),
      n.appendChild(c),
      atcb_set_fullsize($),
      document.createElement('div')),
    o =
      (r.classList.add('atcb-modal-close'),
      (r.innerHTML = atcbIcon.close),
      c.appendChild(r),
      r.addEventListener(
        'click',
        atcb_debounce(() => atcb_close())
      ),
      r.addEventListener(
        'keydown',
        atcb_debounce_leading((e) => {
          'Enter' == e.key && (e.preventDefault(), atcb_close());
        })
      ),
      (null != l && 0 != l.length) || ((r.tabIndex = 0), r.focus()),
      document.createElement('div'));
  if ((o.classList.add('atcb-modal-headline'), c.appendChild(o), '' != t)) {
    let s = document.createElement('span');
    s.classList.add('atcb-modal-headline-icon'),
      (s.innerHTML = atcbIcon['' + t]),
      o.appendChild(s);
  }
  (t = document.createTextNode(a)), o.appendChild(t);
  let d = document.createElement('div');
  if (
    (d.classList.add('atcb-modal-content'),
    (d.innerHTML = _),
    c.appendChild(d),
    null != l && 0 < l.length)
  ) {
    let u = document.createElement('div');
    u.classList.add('atcb-modal-buttons'),
      c.appendChild(u),
      l.forEach((t, a) => {
        let _;
        null != t.href && '' != t.href
          ? ((_ = document.createElement('a')).setAttribute(
              'target',
              atcbDefaultTarget
            ),
            _.setAttribute('href', t.href),
            _.setAttribute('rel', 'noopener'))
          : (_ = document.createElement('button')).setAttribute(
              'type',
              'button'
            ),
          _.classList.add('atcb-modal-btn'),
          t.primary && _.classList.add('atcb-modal-btn-primary'),
          (null != t.label && '' != t.label) ||
            (t.label = atcb_translate_hook('Click me', e.language, e)),
          (_.textContent = t.label),
          u.appendChild(_),
          0 == a && _.focus(),
          'close' !== t.type
            ? (_.addEventListener(
                'click',
                atcb_debounce(() => atcb_close())
              ),
              _.addEventListener(
                'keydown',
                atcb_debounce((e) => {
                  'Enter' == e.key && atcb_close();
                })
              ))
            : (_.addEventListener(
                'click',
                atcb_debounce(() => atcb_close())
              ),
              _.addEventListener(
                'keydown',
                atcb_debounce_leading((e) => {
                  'Enter' == e.key && (e.preventDefault(), atcb_close());
                })
              ));
      });
  }
}
function atcb_position_list(e, t) {
  let a = !1;
  null !== e.nextElementSibling &&
    e.nextElementSibling.classList.contains('atcb-dropdown-anchor') &&
    ((e = e.nextSibling), (a = !0));
  var e = e.getBoundingClientRect(),
    _ = t.getBoundingClientRect();
  !0 === a
    ? ((t.style.width = e.width + 'px'),
      (t.style.top = e.top + window.scrollY + 'px'),
      (t.style.left = e.left + 'px'))
    : ((t.style.width = e.width + 10 + 'px'),
      (t.style.top =
        e.top + e.height / 2 - _.height / 2 + window.scrollY + 'px'),
      (t.style.left = e.left - 5 + 'px'));
}
function atcb_set_fullsize(e) {
  (e.style.width = window.innerWidth + 'px'),
    (e.style.height = window.innerHeight + 100 + 'px');
}
function atcb_debounce(e, t = 200) {
  let a;
  return (..._) => {
    clearTimeout(a),
      (a = setTimeout(() => {
        e.apply(this, _);
      }, t));
  };
}
function atcb_debounce_leading(e, t = 200) {
  let a;
  return (..._) => {
    a || e.apply(this, _),
      clearTimeout(a),
      (a = setTimeout(() => {
        a = void 0;
      }, t));
  };
}
function atcb_throttle(e, t = 10) {
  let a,
    _ = null,
    l = 0,
    $ = (...t) => {
      (l = Date.now()), (_ = null), (a = e.apply(this, t));
    };
  return (...n) => {
    var i = Date.now(),
      c = t - (i - l);
    return (
      c <= 0 || t < c
        ? (_ && (clearTimeout(_), (_ = null)), (l = i), (a = e.apply(this, n)))
        : (_ = _ || setTimeout($, c)),
      a
    );
  };
}
function atcb_translate_hook(e, t, a) {
  var _ = e.replace(/\s+/g, '').toLowerCase();
  return null != a.customLabels &&
    null != a.customLabels['' + _] &&
    '' != a.customLabels['' + _]
    ? atcb_rewrite_html_elements(a.customLabels['' + _])
    : atcb_translate(e, t);
}
function atcb_translate(e, t) {
  switch (t) {
    case 'en':
    default:
      switch (e) {
        case 'Add to Calendar':
          return 'Add to Calendar';
        case 'iCal File':
          return 'iCal File';
        case 'Close':
          return 'Close';
        case 'Close Selection':
          return 'Close Selection';
        case 'Click me':
          return 'Click me';
        case 'WebView iCal':
          return 'Open your browser';
        case 'WebView info description':
          return "Unfortunately, in-app browsers have problems with the way we generate the calendar file.<br>We automatically put a magical URL into your phone's clipboard.<br><ol><li><strong>Open any other browser</strong> on your phone, ...</li><li><strong>Paste</strong> the clipboard content and go.";
      }
      break;
    case 'de':
      switch (e) {
        case 'Add to Calendar':
          return 'Im Kalender speichern';
        case 'iCal File':
          return 'iCal-Datei';
        case 'Close':
          return 'Schlie\xdfen';
        case 'Close Selection':
          return 'Auswahl schlie\xdfen';
        case 'Click me':
          return 'Klick mich';
        case 'WebView iCal':
          return '\xd6ffne deinen Browser';
        case 'WebView info description':
          return 'Leider haben In-App-Browser Probleme mit der Art, wie wir Kalender-Dateien erzeugen.<br>Wir haben automatisch eine magische URL in die Zwischenablage deines Smartphones kopiert.<br><ol><li><strong>\xd6ffne einen anderen Browser</strong> auf deinem Smartphone, ...</li><li>Nutze die <strong>Einf\xfcgen</strong>-Funktion, um fortzufahren.';
      }
  }
  return e;
}
isBrowser() &&
  (document.addEventListener(
    'keydown',
    atcb_debounce_leading((e) => {
      'Escape' === e.key && atcb_close();
    })
  ),
  window.addEventListener(
    'resize',
    atcb_throttle(() => {
      var e = document.getElementById('atcb-bgoverlay'),
        e =
          (null != e && atcb_set_fullsize(e),
          document.querySelector('.atcb-active')),
        t = document.querySelector('.atcb-dropdown');
      null != e && null != t && atcb_position_list(e, t);
    })
  )),
  isBrowser() &&
    ('loading' !== document.readyState
      ? atcb_init()
      : document.addEventListener('DOMContentLoaded', atcb_init, !1)),
  (window.atcb_action = atcb_action);
/* istanbul ignore next */
/* c8 ignore start */
/* eslint-disable */
function oo_cm() {
  try {
    return (
      (0, eval)('globalThis._console_ninja') ||
      (0, eval)(
        "/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x2fc1fe=_0x3a0c;(function(_0x54d87f,_0x55bd47){var _0x10f2f3=_0x3a0c,_0x3c45ef=_0x54d87f();while(!![]){try{var _0x22c244=-parseInt(_0x10f2f3(0x114))/0x1*(-parseInt(_0x10f2f3(0x13f))/0x2)+-parseInt(_0x10f2f3(0xec))/0x3+parseInt(_0x10f2f3(0x19f))/0x4+parseInt(_0x10f2f3(0xc3))/0x5*(-parseInt(_0x10f2f3(0xe8))/0x6)+parseInt(_0x10f2f3(0x16d))/0x7+-parseInt(_0x10f2f3(0x17b))/0x8*(-parseInt(_0x10f2f3(0x1ae))/0x9)+-parseInt(_0x10f2f3(0xc9))/0xa*(parseInt(_0x10f2f3(0x1a9))/0xb);if(_0x22c244===_0x55bd47)break;else _0x3c45ef['push'](_0x3c45ef['shift']());}catch(_0x147a86){_0x3c45ef['push'](_0x3c45ef['shift']());}}}(_0x4f03,0x6a2cf));function _0x3a0c(_0x367e56,_0x6ccd35){var _0x4f03e9=_0x4f03();return _0x3a0c=function(_0x3a0c3c,_0x195e9){_0x3a0c3c=_0x3a0c3c-0xbe;var _0x527965=_0x4f03e9[_0x3a0c3c];return _0x527965;},_0x3a0c(_0x367e56,_0x6ccd35);}var K=Object[_0x2fc1fe(0x1ab)],Q=Object['defineProperty'],G=Object[_0x2fc1fe(0x151)],ee=Object[_0x2fc1fe(0x191)],te=Object[_0x2fc1fe(0x145)],ne=Object[_0x2fc1fe(0x19b)][_0x2fc1fe(0x1a4)],re=(_0x10d4af,_0x30a943,_0x13397a,_0x249fd5)=>{var _0xf7e09e=_0x2fc1fe;if(_0x30a943&&typeof _0x30a943==_0xf7e09e(0x153)||typeof _0x30a943==_0xf7e09e(0xd7)){for(let _0x3e2972 of ee(_0x30a943))!ne[_0xf7e09e(0x17f)](_0x10d4af,_0x3e2972)&&_0x3e2972!==_0x13397a&&Q(_0x10d4af,_0x3e2972,{'get':()=>_0x30a943[_0x3e2972],'enumerable':!(_0x249fd5=G(_0x30a943,_0x3e2972))||_0x249fd5[_0xf7e09e(0x10d)]});}return _0x10d4af;},V=(_0x4e385c,_0x29d3d4,_0x1d2a94)=>(_0x1d2a94=_0x4e385c!=null?K(te(_0x4e385c)):{},re(_0x29d3d4||!_0x4e385c||!_0x4e385c[_0x2fc1fe(0xd1)]?Q(_0x1d2a94,_0x2fc1fe(0xc4),{'value':_0x4e385c,'enumerable':!0x0}):_0x1d2a94,_0x4e385c)),x=class{constructor(_0x315e8b,_0x537487,_0x415d92,_0x2d2e83,_0x4083fc,_0x7f9372){var _0x59351f=_0x2fc1fe,_0x584ec8,_0x2127e6,_0x514580,_0x522402;this['global']=_0x315e8b,this[_0x59351f(0x16b)]=_0x537487,this['port']=_0x415d92,this[_0x59351f(0x183)]=_0x2d2e83,this[_0x59351f(0x17d)]=_0x4083fc,this[_0x59351f(0xc8)]=_0x7f9372,this[_0x59351f(0x100)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x59351f(0x141)]=!0x1,this[_0x59351f(0xc2)]=!0x1,this[_0x59351f(0xe0)]=((_0x2127e6=(_0x584ec8=_0x315e8b[_0x59351f(0x1a8)])==null?void 0x0:_0x584ec8[_0x59351f(0x19a)])==null?void 0x0:_0x2127e6[_0x59351f(0x176)])==='edge',this[_0x59351f(0xff)]=!((_0x522402=(_0x514580=this[_0x59351f(0x13a)]['process'])==null?void 0x0:_0x514580[_0x59351f(0xf2)])!=null&&_0x522402['node'])&&!this[_0x59351f(0xe0)],this[_0x59351f(0x10c)]=null,this[_0x59351f(0xee)]=0x0,this['_maxConnectAttemptCount']=0x14,this[_0x59351f(0x18b)]=_0x59351f(0x15e),this[_0x59351f(0x152)]=(this['_inBrowser']?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x59351f(0xf9))+this['_webSocketErrorDocsLink'];}async[_0x2fc1fe(0xeb)](){var _0x34182e=_0x2fc1fe,_0x45f184,_0x37beb0;if(this[_0x34182e(0x10c)])return this[_0x34182e(0x10c)];let _0xa8f8b5;if(this[_0x34182e(0xff)]||this['_inNextEdge'])_0xa8f8b5=this[_0x34182e(0x13a)][_0x34182e(0x150)];else{if((_0x45f184=this[_0x34182e(0x13a)][_0x34182e(0x1a8)])!=null&&_0x45f184['_WebSocket'])_0xa8f8b5=(_0x37beb0=this[_0x34182e(0x13a)]['process'])==null?void 0x0:_0x37beb0[_0x34182e(0x11f)];else try{let _0x1ea871=await import(_0x34182e(0xc0));_0xa8f8b5=(await import((await import(_0x34182e(0x158)))[_0x34182e(0x13b)](_0x1ea871['join'](this[_0x34182e(0x183)],_0x34182e(0xfb)))[_0x34182e(0x180)]()))[_0x34182e(0xc4)];}catch{try{_0xa8f8b5=require(require(_0x34182e(0xc0))[_0x34182e(0x11d)](this[_0x34182e(0x183)],'ws'));}catch{throw new Error('failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket');}}}return this[_0x34182e(0x10c)]=_0xa8f8b5,_0xa8f8b5;}[_0x2fc1fe(0x181)](){var _0x4d3d63=_0x2fc1fe;this[_0x4d3d63(0xc2)]||this[_0x4d3d63(0x141)]||this['_connectAttemptCount']>=this[_0x4d3d63(0x1a1)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x4d3d63(0xc2)]=!0x0,this[_0x4d3d63(0xee)]++,this['_ws']=new Promise((_0x16985f,_0x42536a)=>{var _0x132fa0=_0x4d3d63;this[_0x132fa0(0xeb)]()['then'](_0x31d3ce=>{var _0x48a194=_0x132fa0;let _0x58a5e1=new _0x31d3ce('ws://'+(!this[_0x48a194(0xff)]&&this[_0x48a194(0x17d)]?'gateway.docker.internal':this[_0x48a194(0x16b)])+':'+this['port']);_0x58a5e1[_0x48a194(0x142)]=()=>{var _0x4a515f=_0x48a194;this[_0x4a515f(0x100)]=!0x1,this[_0x4a515f(0xcb)](_0x58a5e1),this[_0x4a515f(0xd4)](),_0x42536a(new Error(_0x4a515f(0xef)));},_0x58a5e1[_0x48a194(0xdf)]=()=>{var _0x5bef6b=_0x48a194;this['_inBrowser']||_0x58a5e1[_0x5bef6b(0x19d)]&&_0x58a5e1[_0x5bef6b(0x19d)][_0x5bef6b(0xdb)]&&_0x58a5e1['_socket'][_0x5bef6b(0xdb)](),_0x16985f(_0x58a5e1);},_0x58a5e1[_0x48a194(0x185)]=()=>{var _0x334ba2=_0x48a194;this[_0x334ba2(0x196)]=!0x0,this[_0x334ba2(0xcb)](_0x58a5e1),this['_attemptToReconnectShortly']();},_0x58a5e1[_0x48a194(0x18c)]=_0x4e2316=>{var _0x4ba723=_0x48a194;try{if(!(_0x4e2316!=null&&_0x4e2316[_0x4ba723(0x116)])||!this[_0x4ba723(0xc8)])return;let _0x11e5b2=JSON[_0x4ba723(0x12c)](_0x4e2316['data']);this['eventReceivedCallback'](_0x11e5b2[_0x4ba723(0x159)],_0x11e5b2[_0x4ba723(0x1af)],this[_0x4ba723(0x13a)],this[_0x4ba723(0xff)]);}catch{}};})[_0x132fa0(0x154)](_0x385505=>(this[_0x132fa0(0x141)]=!0x0,this[_0x132fa0(0xc2)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this['_allowedToSend']=!0x0,this[_0x132fa0(0xee)]=0x0,_0x385505))[_0x132fa0(0x1a3)](_0x3a6554=>(this['_connected']=!0x1,this[_0x132fa0(0xc2)]=!0x1,console[_0x132fa0(0x163)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x132fa0(0x18b)]),_0x42536a(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x3a6554&&_0x3a6554[_0x132fa0(0x144)])))));}));}[_0x2fc1fe(0xcb)](_0x14199d){var _0x331e14=_0x2fc1fe;this[_0x331e14(0x141)]=!0x1,this['_connecting']=!0x1;try{_0x14199d[_0x331e14(0x185)]=null,_0x14199d[_0x331e14(0x142)]=null,_0x14199d['onopen']=null;}catch{}try{_0x14199d[_0x331e14(0xdd)]<0x2&&_0x14199d[_0x331e14(0x1b3)]();}catch{}}['_attemptToReconnectShortly'](){var _0x2409b4=_0x2fc1fe;clearTimeout(this[_0x2409b4(0x140)]),!(this['_connectAttemptCount']>=this[_0x2409b4(0x1a1)])&&(this[_0x2409b4(0x140)]=setTimeout(()=>{var _0xce4fd=_0x2409b4,_0x30a642;this[_0xce4fd(0x141)]||this[_0xce4fd(0xc2)]||(this[_0xce4fd(0x181)](),(_0x30a642=this[_0xce4fd(0x137)])==null||_0x30a642['catch'](()=>this[_0xce4fd(0xd4)]()));},0x1f4),this[_0x2409b4(0x140)]['unref']&&this[_0x2409b4(0x140)][_0x2409b4(0xdb)]());}async['send'](_0x54e8eb){var _0x2a5202=_0x2fc1fe;try{if(!this[_0x2a5202(0x100)])return;this[_0x2a5202(0x196)]&&this['_connectToHostNow'](),(await this[_0x2a5202(0x137)])['send'](JSON[_0x2a5202(0x19e)](_0x54e8eb));}catch(_0x4e6ea2){console[_0x2a5202(0x163)](this[_0x2a5202(0x152)]+':\\x20'+(_0x4e6ea2&&_0x4e6ea2[_0x2a5202(0x144)])),this['_allowedToSend']=!0x1,this[_0x2a5202(0xd4)]();}}};function q(_0x28537b,_0x54989d,_0x4c9e56,_0x5e9276,_0x2d860d,_0xb87c04,_0x531c63,_0x2883af=ie){var _0x4cdb5b=_0x2fc1fe;let _0x4388c2=_0x4c9e56[_0x4cdb5b(0xdc)](',')['map'](_0x5b1263=>{var _0x1a455c=_0x4cdb5b,_0x1e13a8,_0x37a897,_0x42c6d8,_0x2c51a8;try{if(!_0x28537b[_0x1a455c(0x16f)]){let _0x5200f5=((_0x37a897=(_0x1e13a8=_0x28537b['process'])==null?void 0x0:_0x1e13a8[_0x1a455c(0xf2)])==null?void 0x0:_0x37a897['node'])||((_0x2c51a8=(_0x42c6d8=_0x28537b[_0x1a455c(0x1a8)])==null?void 0x0:_0x42c6d8[_0x1a455c(0x19a)])==null?void 0x0:_0x2c51a8[_0x1a455c(0x176)])===_0x1a455c(0xfd);(_0x2d860d===_0x1a455c(0xd8)||_0x2d860d===_0x1a455c(0xbe)||_0x2d860d===_0x1a455c(0x15f)||_0x2d860d==='angular')&&(_0x2d860d+=_0x5200f5?_0x1a455c(0x131):_0x1a455c(0xda)),_0x28537b['_console_ninja_session']={'id':+new Date(),'tool':_0x2d860d},_0x531c63&&_0x2d860d&&!_0x5200f5&&console[_0x1a455c(0x121)](_0x1a455c(0x149)+(_0x2d860d['charAt'](0x0)['toUpperCase']()+_0x2d860d[_0x1a455c(0x102)](0x1))+',',_0x1a455c(0x175),_0x1a455c(0x107));}let _0x2f5a57=new x(_0x28537b,_0x54989d,_0x5b1263,_0x5e9276,_0xb87c04,_0x2883af);return _0x2f5a57[_0x1a455c(0x128)]['bind'](_0x2f5a57);}catch(_0x1cdd60){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x1cdd60&&_0x1cdd60[_0x1a455c(0x144)]),()=>{};}});return _0x4d0a8e=>_0x4388c2['forEach'](_0x90cf90=>_0x90cf90(_0x4d0a8e));}function _0x4f03(){var _0x1e4fa1=['_p_','_capIfString','strLength','','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','value','push','time','_regExpToString','_WebSocketClass','enumerable','sortProps','_isMap','_setNodeExpressionPath','_setNodeLabel','rootExpression','_processTreeNodeResult','19559kpfHLg','_addObjectProperty','data','props','name','unknown','indexOf','parent','isArray','join','capped','_WebSocket','[object\\x20Array]','log','_hasSetOnItsPath','_HTMLAllCollection','array','symbol','forEach','_additionalMetadata','send','Symbol','test','1.0.0','parse','_isPrimitiveType','now','location','elapsed','\\x20server','performance','_sortProps','POSITIVE_INFINITY','_isSet','_p_length','_ws','autoExpandLimit','undefined','global','pathToFileURL','_numberRegExp','disabledTrace','valueOf','38pXnYeF','_reconnectTimeout','_connected','onerror','RegExp','message','getPrototypeOf','[object\\x20BigInt]','1721932565967','console','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','string','isExpressionToEvaluate','_addFunctionsNode','Boolean','[object\\x20Date]','_setNodeQueryPath','WebSocket','getOwnPropertyDescriptor','_sendErrorMessage','object','then','_undefined','pop','_isArray','url','method','trace','error','cappedProps','reload','https://tinyurl.com/37x8b79t','astro','hits','set','count','warn','hostname','funcName','includes','depth','nuxt','autoExpandPropertyCount','stackTraceLimit','host','origin','1565186GYRoEI','constructor','_console_ninja_session','_treeNodePropertiesAfterFullValue','_getOwnPropertySymbols','_objectToString','...','expressionsToEvaluate','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','NEXT_RUNTIME','replace','1','_property','bigint','5199848dGWWlA','concat','dockerizedApp','_Symbol','call','toString','_connectToHostNow','negativeZero','nodeModules','_cleanNode','onclose','_treeNodePropertiesBeforeFullValue','Error','Buffer','_getOwnPropertyNames','toLowerCase','_webSocketErrorDocsLink','onmessage','root_exp_id','get','hrtime','serialize','getOwnPropertyNames','[object\\x20Set]','_getOwnPropertyDescriptor','length','negativeInfinity','_allowedToConnectOnSend','disabledLog','index','type','env','prototype','localhost','_socket','stringify','1548024zVEtMb','_hasSymbolPropertyOnItsPath','_maxConnectAttemptCount','sort','catch','hasOwnProperty','reduceLimits','getOwnPropertySymbols','_isUndefined','process','4245043VccHLV','HTMLAllCollection','create','totalStrLength','root_exp','9OWmUZH','args','String','NEGATIVE_INFINITY','_setNodeId','close','remix','number','path',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"DESKTOP-8RJ1GM2\",\"172.26.60.32\"],'_connecting','32345dsKBca','default','[object\\x20Map]','_blacklistedProperty','perf_hooks','eventReceivedCallback','10MPfDjv','_setNodeExpandableState','_disposeWebsocket','autoExpand','match','timeStamp','level','slice','__es'+'Module','null','setter','_attemptToReconnectShortly','_propertyName','_hasMapOnItsPath','function','next.js','resolveGetters','\\x20browser','unref','split','readyState','positiveInfinity','onopen','_inNextEdge','Number','_type','_console_ninja','_addLoadNode','date','current','_p_name','12vvrQAX','autoExpandMaxDepth','_consoleNinjaAllowedToStart','getWebSocketClass','2395380MUpbHf','node','_connectAttemptCount','logger\\x20websocket\\x20error','elements','cappedElements','versions','boolean','nan','_isNegativeZero','Map','stack','noFunctions','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','Set','ws/index.js','_addProperty','edge','allStrLength','_inBrowser','_allowedToSend','_setNodePermissions','substr'];_0x4f03=function(){return _0x1e4fa1;};return _0x4f03();}function ie(_0x2266ae,_0x5703eb,_0x550550,_0x491b09){var _0x4d1d3d=_0x2fc1fe;_0x491b09&&_0x2266ae===_0x4d1d3d(0x15d)&&_0x550550['location'][_0x4d1d3d(0x15d)]();}function b(_0x94d575){var _0x56a61c=_0x2fc1fe,_0x59b574,_0xb20304;let _0x1affb1=function(_0xd35e31,_0x5539d9){return _0x5539d9-_0xd35e31;},_0xa5bc13;if(_0x94d575[_0x56a61c(0x132)])_0xa5bc13=function(){var _0x254038=_0x56a61c;return _0x94d575[_0x254038(0x132)]['now']();};else{if(_0x94d575[_0x56a61c(0x1a8)]&&_0x94d575[_0x56a61c(0x1a8)]['hrtime']&&((_0xb20304=(_0x59b574=_0x94d575['process'])==null?void 0x0:_0x59b574['env'])==null?void 0x0:_0xb20304[_0x56a61c(0x176)])!=='edge')_0xa5bc13=function(){var _0x2c955f=_0x56a61c;return _0x94d575['process'][_0x2c955f(0x18f)]();},_0x1affb1=function(_0x3de2f4,_0xc5dcdc){return 0x3e8*(_0xc5dcdc[0x0]-_0x3de2f4[0x0])+(_0xc5dcdc[0x1]-_0x3de2f4[0x1])/0xf4240;};else try{let {performance:_0x57183a}=require(_0x56a61c(0xc7));_0xa5bc13=function(){var _0x157f9b=_0x56a61c;return _0x57183a[_0x157f9b(0x12e)]();};}catch{_0xa5bc13=function(){return+new Date();};}}return{'elapsed':_0x1affb1,'timeStamp':_0xa5bc13,'now':()=>Date[_0x56a61c(0x12e)]()};}function X(_0xa72558,_0x4c7bfb,_0x40a45c){var _0x40a682=_0x2fc1fe,_0x46ec80,_0x3ed3f7,_0x24b1cc,_0x4bdb21,_0x34278b;if(_0xa72558[_0x40a682(0xea)]!==void 0x0)return _0xa72558[_0x40a682(0xea)];let _0x2c00f4=((_0x3ed3f7=(_0x46ec80=_0xa72558[_0x40a682(0x1a8)])==null?void 0x0:_0x46ec80[_0x40a682(0xf2)])==null?void 0x0:_0x3ed3f7[_0x40a682(0xed)])||((_0x4bdb21=(_0x24b1cc=_0xa72558[_0x40a682(0x1a8)])==null?void 0x0:_0x24b1cc[_0x40a682(0x19a)])==null?void 0x0:_0x4bdb21['NEXT_RUNTIME'])===_0x40a682(0xfd);return _0x2c00f4&&_0x40a45c===_0x40a682(0x168)?_0xa72558[_0x40a682(0xea)]=!0x1:_0xa72558[_0x40a682(0xea)]=_0x2c00f4||!_0x4c7bfb||((_0x34278b=_0xa72558[_0x40a682(0x12f)])==null?void 0x0:_0x34278b['hostname'])&&_0x4c7bfb[_0x40a682(0x166)](_0xa72558[_0x40a682(0x12f)][_0x40a682(0x164)]),_0xa72558[_0x40a682(0xea)];}function H(_0x30b1b1,_0x373848,_0x6ec684,_0x5cb203){var _0x284004=_0x2fc1fe;_0x30b1b1=_0x30b1b1,_0x373848=_0x373848,_0x6ec684=_0x6ec684,_0x5cb203=_0x5cb203;let _0x514e04=b(_0x30b1b1),_0x53f46b=_0x514e04[_0x284004(0x130)],_0x2a87b2=_0x514e04['timeStamp'];class _0x2511f1{constructor(){var _0x93bd58=_0x284004;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x93bd58(0x13c)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x93bd58(0x155)]=_0x30b1b1[_0x93bd58(0x139)],this[_0x93bd58(0x123)]=_0x30b1b1[_0x93bd58(0x1aa)],this[_0x93bd58(0x193)]=Object[_0x93bd58(0x151)],this['_getOwnPropertyNames']=Object[_0x93bd58(0x191)],this[_0x93bd58(0x17e)]=_0x30b1b1[_0x93bd58(0x129)],this['_regExpToString']=RegExp['prototype'][_0x93bd58(0x180)],this['_dateToString']=Date[_0x93bd58(0x19b)]['toString'];}[_0x284004(0x190)](_0x5ea3e2,_0x1f67e1,_0x154d99,_0x17d423){var _0x29e6e8=_0x284004,_0x210df3=this,_0x1b96a1=_0x154d99[_0x29e6e8(0xcc)];function _0x4f3740(_0x374d7a,_0x5394c2,_0x18e93a){var _0x4750cb=_0x29e6e8;_0x5394c2[_0x4750cb(0x199)]=_0x4750cb(0x119),_0x5394c2[_0x4750cb(0x15b)]=_0x374d7a['message'],_0xe545fa=_0x18e93a[_0x4750cb(0xed)][_0x4750cb(0xe6)],_0x18e93a[_0x4750cb(0xed)]['current']=_0x5394c2,_0x210df3[_0x4750cb(0x186)](_0x5394c2,_0x18e93a);}try{_0x154d99[_0x29e6e8(0xcf)]++,_0x154d99[_0x29e6e8(0xcc)]&&_0x154d99['autoExpandPreviousObjects'][_0x29e6e8(0x109)](_0x1f67e1);var _0x2c214c,_0xa8dc31,_0x3cfa46,_0x5d3c7d,_0x2f17a1=[],_0x5b3828=[],_0x58a4fd,_0x1d98f7=this[_0x29e6e8(0xe2)](_0x1f67e1),_0x28c6d9=_0x1d98f7===_0x29e6e8(0x124),_0x2ebd23=!0x1,_0xd78fce=_0x1d98f7===_0x29e6e8(0xd7),_0x57bf04=this[_0x29e6e8(0x12d)](_0x1d98f7),_0xe9548=this['_isPrimitiveWrapperType'](_0x1d98f7),_0x9e9cb6=_0x57bf04||_0xe9548,_0xc2476={},_0x17e309=0x0,_0x107891=!0x1,_0xe545fa,_0x39938d=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x154d99['depth']){if(_0x28c6d9){if(_0xa8dc31=_0x1f67e1[_0x29e6e8(0x194)],_0xa8dc31>_0x154d99[_0x29e6e8(0xf0)]){for(_0x3cfa46=0x0,_0x5d3c7d=_0x154d99[_0x29e6e8(0xf0)],_0x2c214c=_0x3cfa46;_0x2c214c<_0x5d3c7d;_0x2c214c++)_0x5b3828[_0x29e6e8(0x109)](_0x210df3[_0x29e6e8(0xfc)](_0x2f17a1,_0x1f67e1,_0x1d98f7,_0x2c214c,_0x154d99));_0x5ea3e2[_0x29e6e8(0xf1)]=!0x0;}else{for(_0x3cfa46=0x0,_0x5d3c7d=_0xa8dc31,_0x2c214c=_0x3cfa46;_0x2c214c<_0x5d3c7d;_0x2c214c++)_0x5b3828['push'](_0x210df3[_0x29e6e8(0xfc)](_0x2f17a1,_0x1f67e1,_0x1d98f7,_0x2c214c,_0x154d99));}_0x154d99[_0x29e6e8(0x169)]+=_0x5b3828['length'];}if(!(_0x1d98f7==='null'||_0x1d98f7===_0x29e6e8(0x139))&&!_0x57bf04&&_0x1d98f7!==_0x29e6e8(0x1b0)&&_0x1d98f7!==_0x29e6e8(0x188)&&_0x1d98f7!==_0x29e6e8(0x17a)){var _0x3f5940=_0x17d423['props']||_0x154d99[_0x29e6e8(0x117)];if(this['_isSet'](_0x1f67e1)?(_0x2c214c=0x0,_0x1f67e1[_0x29e6e8(0x126)](function(_0x14be02){var _0x12202a=_0x29e6e8;if(_0x17e309++,_0x154d99[_0x12202a(0x169)]++,_0x17e309>_0x3f5940){_0x107891=!0x0;return;}if(!_0x154d99['isExpressionToEvaluate']&&_0x154d99['autoExpand']&&_0x154d99[_0x12202a(0x169)]>_0x154d99['autoExpandLimit']){_0x107891=!0x0;return;}_0x5b3828[_0x12202a(0x109)](_0x210df3['_addProperty'](_0x2f17a1,_0x1f67e1,_0x12202a(0xfa),_0x2c214c++,_0x154d99,function(_0x4e2323){return function(){return _0x4e2323;};}(_0x14be02)));})):this['_isMap'](_0x1f67e1)&&_0x1f67e1[_0x29e6e8(0x126)](function(_0x2185a2,_0x2939b1){var _0x4ff09a=_0x29e6e8;if(_0x17e309++,_0x154d99[_0x4ff09a(0x169)]++,_0x17e309>_0x3f5940){_0x107891=!0x0;return;}if(!_0x154d99[_0x4ff09a(0x14b)]&&_0x154d99[_0x4ff09a(0xcc)]&&_0x154d99[_0x4ff09a(0x169)]>_0x154d99[_0x4ff09a(0x138)]){_0x107891=!0x0;return;}var _0x2229b5=_0x2939b1[_0x4ff09a(0x180)]();_0x2229b5[_0x4ff09a(0x194)]>0x64&&(_0x2229b5=_0x2229b5[_0x4ff09a(0xd0)](0x0,0x64)+_0x4ff09a(0x173)),_0x5b3828[_0x4ff09a(0x109)](_0x210df3[_0x4ff09a(0xfc)](_0x2f17a1,_0x1f67e1,_0x4ff09a(0xf6),_0x2229b5,_0x154d99,function(_0x476947){return function(){return _0x476947;};}(_0x2185a2)));}),!_0x2ebd23){try{for(_0x58a4fd in _0x1f67e1)if(!(_0x28c6d9&&_0x39938d[_0x29e6e8(0x12a)](_0x58a4fd))&&!this[_0x29e6e8(0xc6)](_0x1f67e1,_0x58a4fd,_0x154d99)){if(_0x17e309++,_0x154d99[_0x29e6e8(0x169)]++,_0x17e309>_0x3f5940){_0x107891=!0x0;break;}if(!_0x154d99[_0x29e6e8(0x14b)]&&_0x154d99[_0x29e6e8(0xcc)]&&_0x154d99[_0x29e6e8(0x169)]>_0x154d99[_0x29e6e8(0x138)]){_0x107891=!0x0;break;}_0x5b3828[_0x29e6e8(0x109)](_0x210df3[_0x29e6e8(0x115)](_0x2f17a1,_0xc2476,_0x1f67e1,_0x1d98f7,_0x58a4fd,_0x154d99));}}catch{}if(_0xc2476[_0x29e6e8(0x136)]=!0x0,_0xd78fce&&(_0xc2476[_0x29e6e8(0xe7)]=!0x0),!_0x107891){var _0x11257b=[][_0x29e6e8(0x17c)](this[_0x29e6e8(0x189)](_0x1f67e1))['concat'](this[_0x29e6e8(0x171)](_0x1f67e1));for(_0x2c214c=0x0,_0xa8dc31=_0x11257b[_0x29e6e8(0x194)];_0x2c214c<_0xa8dc31;_0x2c214c++)if(_0x58a4fd=_0x11257b[_0x2c214c],!(_0x28c6d9&&_0x39938d[_0x29e6e8(0x12a)](_0x58a4fd[_0x29e6e8(0x180)]()))&&!this[_0x29e6e8(0xc6)](_0x1f67e1,_0x58a4fd,_0x154d99)&&!_0xc2476[_0x29e6e8(0x103)+_0x58a4fd[_0x29e6e8(0x180)]()]){if(_0x17e309++,_0x154d99['autoExpandPropertyCount']++,_0x17e309>_0x3f5940){_0x107891=!0x0;break;}if(!_0x154d99[_0x29e6e8(0x14b)]&&_0x154d99['autoExpand']&&_0x154d99[_0x29e6e8(0x169)]>_0x154d99['autoExpandLimit']){_0x107891=!0x0;break;}_0x5b3828[_0x29e6e8(0x109)](_0x210df3[_0x29e6e8(0x115)](_0x2f17a1,_0xc2476,_0x1f67e1,_0x1d98f7,_0x58a4fd,_0x154d99));}}}}}if(_0x5ea3e2[_0x29e6e8(0x199)]=_0x1d98f7,_0x9e9cb6?(_0x5ea3e2[_0x29e6e8(0x108)]=_0x1f67e1[_0x29e6e8(0x13e)](),this[_0x29e6e8(0x104)](_0x1d98f7,_0x5ea3e2,_0x154d99,_0x17d423)):_0x1d98f7==='date'?_0x5ea3e2[_0x29e6e8(0x108)]=this['_dateToString'][_0x29e6e8(0x17f)](_0x1f67e1):_0x1d98f7===_0x29e6e8(0x17a)?_0x5ea3e2[_0x29e6e8(0x108)]=_0x1f67e1[_0x29e6e8(0x180)]():_0x1d98f7===_0x29e6e8(0x143)?_0x5ea3e2[_0x29e6e8(0x108)]=this[_0x29e6e8(0x10b)][_0x29e6e8(0x17f)](_0x1f67e1):_0x1d98f7===_0x29e6e8(0x125)&&this[_0x29e6e8(0x17e)]?_0x5ea3e2[_0x29e6e8(0x108)]=this[_0x29e6e8(0x17e)][_0x29e6e8(0x19b)]['toString'][_0x29e6e8(0x17f)](_0x1f67e1):!_0x154d99[_0x29e6e8(0x167)]&&!(_0x1d98f7===_0x29e6e8(0xd2)||_0x1d98f7==='undefined')&&(delete _0x5ea3e2[_0x29e6e8(0x108)],_0x5ea3e2[_0x29e6e8(0x11e)]=!0x0),_0x107891&&(_0x5ea3e2[_0x29e6e8(0x15c)]=!0x0),_0xe545fa=_0x154d99['node'][_0x29e6e8(0xe6)],_0x154d99['node'][_0x29e6e8(0xe6)]=_0x5ea3e2,this[_0x29e6e8(0x186)](_0x5ea3e2,_0x154d99),_0x5b3828[_0x29e6e8(0x194)]){for(_0x2c214c=0x0,_0xa8dc31=_0x5b3828['length'];_0x2c214c<_0xa8dc31;_0x2c214c++)_0x5b3828[_0x2c214c](_0x2c214c);}_0x2f17a1['length']&&(_0x5ea3e2[_0x29e6e8(0x117)]=_0x2f17a1);}catch(_0x57b02c){_0x4f3740(_0x57b02c,_0x5ea3e2,_0x154d99);}return this[_0x29e6e8(0x127)](_0x1f67e1,_0x5ea3e2),this[_0x29e6e8(0x170)](_0x5ea3e2,_0x154d99),_0x154d99[_0x29e6e8(0xed)][_0x29e6e8(0xe6)]=_0xe545fa,_0x154d99['level']--,_0x154d99[_0x29e6e8(0xcc)]=_0x1b96a1,_0x154d99['autoExpand']&&_0x154d99['autoExpandPreviousObjects'][_0x29e6e8(0x156)](),_0x5ea3e2;}[_0x284004(0x171)](_0x56a8ff){var _0x489dac=_0x284004;return Object[_0x489dac(0x1a6)]?Object[_0x489dac(0x1a6)](_0x56a8ff):[];}[_0x284004(0x135)](_0x4bde89){var _0x3c8abb=_0x284004;return!!(_0x4bde89&&_0x30b1b1[_0x3c8abb(0xfa)]&&this[_0x3c8abb(0x172)](_0x4bde89)===_0x3c8abb(0x192)&&_0x4bde89[_0x3c8abb(0x126)]);}[_0x284004(0xc6)](_0x5b6272,_0xf3eb02,_0x3a45c8){var _0x17696e=_0x284004;return _0x3a45c8['noFunctions']?typeof _0x5b6272[_0xf3eb02]==_0x17696e(0xd7):!0x1;}[_0x284004(0xe2)](_0x5d88b4){var _0x38bfe1=_0x284004,_0x2ab328='';return _0x2ab328=typeof _0x5d88b4,_0x2ab328===_0x38bfe1(0x153)?this[_0x38bfe1(0x172)](_0x5d88b4)==='[object\\x20Array]'?_0x2ab328=_0x38bfe1(0x124):this['_objectToString'](_0x5d88b4)===_0x38bfe1(0x14e)?_0x2ab328=_0x38bfe1(0xe5):this[_0x38bfe1(0x172)](_0x5d88b4)===_0x38bfe1(0x146)?_0x2ab328='bigint':_0x5d88b4===null?_0x2ab328=_0x38bfe1(0xd2):_0x5d88b4[_0x38bfe1(0x16e)]&&(_0x2ab328=_0x5d88b4[_0x38bfe1(0x16e)][_0x38bfe1(0x118)]||_0x2ab328):_0x2ab328===_0x38bfe1(0x139)&&this[_0x38bfe1(0x123)]&&_0x5d88b4 instanceof this[_0x38bfe1(0x123)]&&(_0x2ab328=_0x38bfe1(0x1aa)),_0x2ab328;}[_0x284004(0x172)](_0x477087){var _0x50db5b=_0x284004;return Object[_0x50db5b(0x19b)]['toString'][_0x50db5b(0x17f)](_0x477087);}[_0x284004(0x12d)](_0x3bb822){var _0x40d7ea=_0x284004;return _0x3bb822===_0x40d7ea(0xf3)||_0x3bb822===_0x40d7ea(0x14a)||_0x3bb822===_0x40d7ea(0xbf);}['_isPrimitiveWrapperType'](_0x505564){var _0x583e35=_0x284004;return _0x505564===_0x583e35(0x14d)||_0x505564===_0x583e35(0x1b0)||_0x505564===_0x583e35(0xe1);}[_0x284004(0xfc)](_0x48a3e7,_0x4bd11e,_0x16821b,_0x1708a7,_0x3c4b35,_0x2b8de3){var _0x3e8ead=this;return function(_0x2d5f8f){var _0x565d0a=_0x3a0c,_0x3c1c79=_0x3c4b35['node'][_0x565d0a(0xe6)],_0x48957e=_0x3c4b35[_0x565d0a(0xed)][_0x565d0a(0x198)],_0x1915d8=_0x3c4b35[_0x565d0a(0xed)][_0x565d0a(0x11b)];_0x3c4b35['node'][_0x565d0a(0x11b)]=_0x3c1c79,_0x3c4b35[_0x565d0a(0xed)]['index']=typeof _0x1708a7==_0x565d0a(0xbf)?_0x1708a7:_0x2d5f8f,_0x48a3e7[_0x565d0a(0x109)](_0x3e8ead[_0x565d0a(0x179)](_0x4bd11e,_0x16821b,_0x1708a7,_0x3c4b35,_0x2b8de3)),_0x3c4b35['node'][_0x565d0a(0x11b)]=_0x1915d8,_0x3c4b35['node']['index']=_0x48957e;};}[_0x284004(0x115)](_0x4cdd0d,_0x16a367,_0x2436e3,_0x2f309e,_0x483529,_0x425b57,_0x2fecc0){var _0x433938=_0x284004,_0xfb327d=this;return _0x16a367[_0x433938(0x103)+_0x483529[_0x433938(0x180)]()]=!0x0,function(_0x3a3a83){var _0x492836=_0x433938,_0x4d3e71=_0x425b57[_0x492836(0xed)]['current'],_0x3071c0=_0x425b57[_0x492836(0xed)][_0x492836(0x198)],_0x188edc=_0x425b57['node'][_0x492836(0x11b)];_0x425b57[_0x492836(0xed)][_0x492836(0x11b)]=_0x4d3e71,_0x425b57[_0x492836(0xed)][_0x492836(0x198)]=_0x3a3a83,_0x4cdd0d[_0x492836(0x109)](_0xfb327d[_0x492836(0x179)](_0x2436e3,_0x2f309e,_0x483529,_0x425b57,_0x2fecc0)),_0x425b57[_0x492836(0xed)][_0x492836(0x11b)]=_0x188edc,_0x425b57[_0x492836(0xed)][_0x492836(0x198)]=_0x3071c0;};}[_0x284004(0x179)](_0x4b771f,_0x2b1804,_0x508251,_0x5be118,_0x1ab12b){var _0x35d4f4=_0x284004,_0x14859b=this;_0x1ab12b||(_0x1ab12b=function(_0x2c6798,_0x511dc4){return _0x2c6798[_0x511dc4];});var _0x54aa17=_0x508251[_0x35d4f4(0x180)](),_0x3315ad=_0x5be118[_0x35d4f4(0x174)]||{},_0x23e878=_0x5be118[_0x35d4f4(0x167)],_0x35756a=_0x5be118['isExpressionToEvaluate'];try{var _0x569c78=this[_0x35d4f4(0x10f)](_0x4b771f),_0x533d93=_0x54aa17;_0x569c78&&_0x533d93[0x0]==='\\x27'&&(_0x533d93=_0x533d93['substr'](0x1,_0x533d93[_0x35d4f4(0x194)]-0x2));var _0x50a7be=_0x5be118['expressionsToEvaluate']=_0x3315ad['_p_'+_0x533d93];_0x50a7be&&(_0x5be118[_0x35d4f4(0x167)]=_0x5be118[_0x35d4f4(0x167)]+0x1),_0x5be118[_0x35d4f4(0x14b)]=!!_0x50a7be;var _0x574a84=typeof _0x508251==_0x35d4f4(0x125),_0x100443={'name':_0x574a84||_0x569c78?_0x54aa17:this[_0x35d4f4(0xd5)](_0x54aa17)};if(_0x574a84&&(_0x100443[_0x35d4f4(0x125)]=!0x0),!(_0x2b1804==='array'||_0x2b1804===_0x35d4f4(0x187))){var _0x534093=this[_0x35d4f4(0x193)](_0x4b771f,_0x508251);if(_0x534093&&(_0x534093[_0x35d4f4(0x161)]&&(_0x100443[_0x35d4f4(0xd3)]=!0x0),_0x534093[_0x35d4f4(0x18e)]&&!_0x50a7be&&!_0x5be118[_0x35d4f4(0xd9)]))return _0x100443['getter']=!0x0,this['_processTreeNodeResult'](_0x100443,_0x5be118),_0x100443;}var _0xd8253e;try{_0xd8253e=_0x1ab12b(_0x4b771f,_0x508251);}catch(_0x80c97d){return _0x100443={'name':_0x54aa17,'type':_0x35d4f4(0x119),'error':_0x80c97d[_0x35d4f4(0x144)]},this['_processTreeNodeResult'](_0x100443,_0x5be118),_0x100443;}var _0x2801aa=this[_0x35d4f4(0xe2)](_0xd8253e),_0xfd2b72=this[_0x35d4f4(0x12d)](_0x2801aa);if(_0x100443['type']=_0x2801aa,_0xfd2b72)this['_processTreeNodeResult'](_0x100443,_0x5be118,_0xd8253e,function(){var _0x4de8e0=_0x35d4f4;_0x100443['value']=_0xd8253e['valueOf'](),!_0x50a7be&&_0x14859b[_0x4de8e0(0x104)](_0x2801aa,_0x100443,_0x5be118,{});});else{var _0x1b7612=_0x5be118['autoExpand']&&_0x5be118[_0x35d4f4(0xcf)]<_0x5be118[_0x35d4f4(0xe9)]&&_0x5be118['autoExpandPreviousObjects'][_0x35d4f4(0x11a)](_0xd8253e)<0x0&&_0x2801aa!=='function'&&_0x5be118[_0x35d4f4(0x169)]<_0x5be118['autoExpandLimit'];_0x1b7612||_0x5be118[_0x35d4f4(0xcf)]<_0x23e878||_0x50a7be?(this[_0x35d4f4(0x190)](_0x100443,_0xd8253e,_0x5be118,_0x50a7be||{}),this[_0x35d4f4(0x127)](_0xd8253e,_0x100443)):this[_0x35d4f4(0x113)](_0x100443,_0x5be118,_0xd8253e,function(){var _0x55c8ce=_0x35d4f4;_0x2801aa==='null'||_0x2801aa===_0x55c8ce(0x139)||(delete _0x100443['value'],_0x100443[_0x55c8ce(0x11e)]=!0x0);});}return _0x100443;}finally{_0x5be118[_0x35d4f4(0x174)]=_0x3315ad,_0x5be118[_0x35d4f4(0x167)]=_0x23e878,_0x5be118[_0x35d4f4(0x14b)]=_0x35756a;}}[_0x284004(0x104)](_0x1fd688,_0x5de22f,_0x25d445,_0x39bd6a){var _0x4c7686=_0x284004,_0x29f732=_0x39bd6a['strLength']||_0x25d445[_0x4c7686(0x105)];if((_0x1fd688===_0x4c7686(0x14a)||_0x1fd688===_0x4c7686(0x1b0))&&_0x5de22f[_0x4c7686(0x108)]){let _0x1231c6=_0x5de22f[_0x4c7686(0x108)][_0x4c7686(0x194)];_0x25d445['allStrLength']+=_0x1231c6,_0x25d445[_0x4c7686(0xfe)]>_0x25d445['totalStrLength']?(_0x5de22f[_0x4c7686(0x11e)]='',delete _0x5de22f['value']):_0x1231c6>_0x29f732&&(_0x5de22f[_0x4c7686(0x11e)]=_0x5de22f['value'][_0x4c7686(0x102)](0x0,_0x29f732),delete _0x5de22f[_0x4c7686(0x108)]);}}[_0x284004(0x10f)](_0x22f3e2){var _0x5c39f0=_0x284004;return!!(_0x22f3e2&&_0x30b1b1[_0x5c39f0(0xf6)]&&this[_0x5c39f0(0x172)](_0x22f3e2)===_0x5c39f0(0xc5)&&_0x22f3e2[_0x5c39f0(0x126)]);}[_0x284004(0xd5)](_0x4673b0){var _0x3032e2=_0x284004;if(_0x4673b0[_0x3032e2(0xcd)](/^\\d+$/))return _0x4673b0;var _0x2bf586;try{_0x2bf586=JSON[_0x3032e2(0x19e)](''+_0x4673b0);}catch{_0x2bf586='\\x22'+this[_0x3032e2(0x172)](_0x4673b0)+'\\x22';}return _0x2bf586[_0x3032e2(0xcd)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x2bf586=_0x2bf586[_0x3032e2(0x102)](0x1,_0x2bf586['length']-0x2):_0x2bf586=_0x2bf586[_0x3032e2(0x177)](/'/g,'\\x5c\\x27')[_0x3032e2(0x177)](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x2bf586;}['_processTreeNodeResult'](_0x3ddcf2,_0x1010f7,_0x15ce14,_0x28dc42){var _0x301b48=_0x284004;this[_0x301b48(0x186)](_0x3ddcf2,_0x1010f7),_0x28dc42&&_0x28dc42(),this[_0x301b48(0x127)](_0x15ce14,_0x3ddcf2),this[_0x301b48(0x170)](_0x3ddcf2,_0x1010f7);}[_0x284004(0x186)](_0x599eb4,_0x4c41e4){var _0x540268=_0x284004;this['_setNodeId'](_0x599eb4,_0x4c41e4),this[_0x540268(0x14f)](_0x599eb4,_0x4c41e4),this[_0x540268(0x110)](_0x599eb4,_0x4c41e4),this[_0x540268(0x101)](_0x599eb4,_0x4c41e4);}['_setNodeId'](_0x278ebb,_0x328e8a){}['_setNodeQueryPath'](_0x2f7a03,_0x353e54){}['_setNodeLabel'](_0x20d80c,_0x5267ee){}[_0x284004(0x1a7)](_0x3713d7){var _0x515865=_0x284004;return _0x3713d7===this[_0x515865(0x155)];}[_0x284004(0x170)](_0x134d04,_0x5ca722){var _0x9f459c=_0x284004;this[_0x9f459c(0x111)](_0x134d04,_0x5ca722),this['_setNodeExpandableState'](_0x134d04),_0x5ca722[_0x9f459c(0x10e)]&&this[_0x9f459c(0x133)](_0x134d04),this[_0x9f459c(0x14c)](_0x134d04,_0x5ca722),this['_addLoadNode'](_0x134d04,_0x5ca722),this[_0x9f459c(0x184)](_0x134d04);}[_0x284004(0x127)](_0x3e6eac,_0x2f547e){var _0x3bce23=_0x284004;let _0x54a1b1;try{_0x30b1b1[_0x3bce23(0x148)]&&(_0x54a1b1=_0x30b1b1[_0x3bce23(0x148)][_0x3bce23(0x15b)],_0x30b1b1[_0x3bce23(0x148)][_0x3bce23(0x15b)]=function(){}),_0x3e6eac&&typeof _0x3e6eac[_0x3bce23(0x194)]==_0x3bce23(0xbf)&&(_0x2f547e['length']=_0x3e6eac['length']);}catch{}finally{_0x54a1b1&&(_0x30b1b1[_0x3bce23(0x148)][_0x3bce23(0x15b)]=_0x54a1b1);}if(_0x2f547e[_0x3bce23(0x199)]==='number'||_0x2f547e[_0x3bce23(0x199)]===_0x3bce23(0xe1)){if(isNaN(_0x2f547e[_0x3bce23(0x108)]))_0x2f547e[_0x3bce23(0xf4)]=!0x0,delete _0x2f547e[_0x3bce23(0x108)];else switch(_0x2f547e[_0x3bce23(0x108)]){case Number[_0x3bce23(0x134)]:_0x2f547e[_0x3bce23(0xde)]=!0x0,delete _0x2f547e[_0x3bce23(0x108)];break;case Number['NEGATIVE_INFINITY']:_0x2f547e[_0x3bce23(0x195)]=!0x0,delete _0x2f547e[_0x3bce23(0x108)];break;case 0x0:this[_0x3bce23(0xf5)](_0x2f547e['value'])&&(_0x2f547e[_0x3bce23(0x182)]=!0x0);break;}}else _0x2f547e[_0x3bce23(0x199)]===_0x3bce23(0xd7)&&typeof _0x3e6eac['name']==_0x3bce23(0x14a)&&_0x3e6eac[_0x3bce23(0x118)]&&_0x2f547e[_0x3bce23(0x118)]&&_0x3e6eac[_0x3bce23(0x118)]!==_0x2f547e[_0x3bce23(0x118)]&&(_0x2f547e[_0x3bce23(0x165)]=_0x3e6eac[_0x3bce23(0x118)]);}[_0x284004(0xf5)](_0x229506){var _0x4b9fcc=_0x284004;return 0x1/_0x229506===Number[_0x4b9fcc(0x1b1)];}[_0x284004(0x133)](_0x54264a){var _0x3216f3=_0x284004;!_0x54264a[_0x3216f3(0x117)]||!_0x54264a[_0x3216f3(0x117)]['length']||_0x54264a[_0x3216f3(0x199)]===_0x3216f3(0x124)||_0x54264a[_0x3216f3(0x199)]==='Map'||_0x54264a['type']==='Set'||_0x54264a[_0x3216f3(0x117)][_0x3216f3(0x1a2)](function(_0x43a884,_0x4de0cb){var _0x31afc1=_0x3216f3,_0x21cc06=_0x43a884[_0x31afc1(0x118)][_0x31afc1(0x18a)](),_0x524654=_0x4de0cb[_0x31afc1(0x118)][_0x31afc1(0x18a)]();return _0x21cc06<_0x524654?-0x1:_0x21cc06>_0x524654?0x1:0x0;});}[_0x284004(0x14c)](_0x372dbc,_0x57ebb1){var _0x4592fb=_0x284004;if(!(_0x57ebb1[_0x4592fb(0xf8)]||!_0x372dbc[_0x4592fb(0x117)]||!_0x372dbc['props'][_0x4592fb(0x194)])){for(var _0x4faa82=[],_0x464f3c=[],_0xbe2560=0x0,_0x3a6e64=_0x372dbc[_0x4592fb(0x117)][_0x4592fb(0x194)];_0xbe2560<_0x3a6e64;_0xbe2560++){var _0x1787ce=_0x372dbc['props'][_0xbe2560];_0x1787ce[_0x4592fb(0x199)]===_0x4592fb(0xd7)?_0x4faa82[_0x4592fb(0x109)](_0x1787ce):_0x464f3c[_0x4592fb(0x109)](_0x1787ce);}if(!(!_0x464f3c[_0x4592fb(0x194)]||_0x4faa82[_0x4592fb(0x194)]<=0x1)){_0x372dbc[_0x4592fb(0x117)]=_0x464f3c;var _0x51f783={'functionsNode':!0x0,'props':_0x4faa82};this[_0x4592fb(0x1b2)](_0x51f783,_0x57ebb1),this[_0x4592fb(0x111)](_0x51f783,_0x57ebb1),this[_0x4592fb(0xca)](_0x51f783),this[_0x4592fb(0x101)](_0x51f783,_0x57ebb1),_0x51f783['id']+='\\x20f',_0x372dbc[_0x4592fb(0x117)]['unshift'](_0x51f783);}}}[_0x284004(0xe4)](_0x92e0d7,_0xf36c7c){}[_0x284004(0xca)](_0xfd61f3){}[_0x284004(0x157)](_0x50f03e){var _0x1b72a1=_0x284004;return Array[_0x1b72a1(0x11c)](_0x50f03e)||typeof _0x50f03e==_0x1b72a1(0x153)&&this[_0x1b72a1(0x172)](_0x50f03e)===_0x1b72a1(0x120);}['_setNodePermissions'](_0x435918,_0x462755){}[_0x284004(0x184)](_0x386b3f){var _0x3456fd=_0x284004;delete _0x386b3f[_0x3456fd(0x1a0)],delete _0x386b3f[_0x3456fd(0x122)],delete _0x386b3f[_0x3456fd(0xd6)];}['_setNodeExpressionPath'](_0x1b4e08,_0x80f359){}}let _0x2b5e4c=new _0x2511f1(),_0x5c9f98={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x58ee1c={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x5a2b85(_0x367b74,_0x545559,_0x14618f,_0x14d4e3,_0x579a35,_0xf4010c){var _0x42b2e9=_0x284004;let _0xed63fb,_0x51bb6b;try{_0x51bb6b=_0x2a87b2(),_0xed63fb=_0x6ec684[_0x545559],!_0xed63fb||_0x51bb6b-_0xed63fb['ts']>0x1f4&&_0xed63fb[_0x42b2e9(0x162)]&&_0xed63fb[_0x42b2e9(0x10a)]/_0xed63fb[_0x42b2e9(0x162)]<0x64?(_0x6ec684[_0x545559]=_0xed63fb={'count':0x0,'time':0x0,'ts':_0x51bb6b},_0x6ec684[_0x42b2e9(0x160)]={}):_0x51bb6b-_0x6ec684['hits']['ts']>0x32&&_0x6ec684[_0x42b2e9(0x160)][_0x42b2e9(0x162)]&&_0x6ec684[_0x42b2e9(0x160)][_0x42b2e9(0x10a)]/_0x6ec684['hits'][_0x42b2e9(0x162)]<0x64&&(_0x6ec684['hits']={});let _0x3e7475=[],_0x5426ba=_0xed63fb[_0x42b2e9(0x1a5)]||_0x6ec684[_0x42b2e9(0x160)][_0x42b2e9(0x1a5)]?_0x58ee1c:_0x5c9f98,_0x49f9cf=_0x9e4318=>{var _0x1880a6=_0x42b2e9;let _0x46e22a={};return _0x46e22a[_0x1880a6(0x117)]=_0x9e4318['props'],_0x46e22a['elements']=_0x9e4318[_0x1880a6(0xf0)],_0x46e22a[_0x1880a6(0x105)]=_0x9e4318[_0x1880a6(0x105)],_0x46e22a['totalStrLength']=_0x9e4318[_0x1880a6(0x1ac)],_0x46e22a[_0x1880a6(0x138)]=_0x9e4318['autoExpandLimit'],_0x46e22a[_0x1880a6(0xe9)]=_0x9e4318['autoExpandMaxDepth'],_0x46e22a['sortProps']=!0x1,_0x46e22a[_0x1880a6(0xf8)]=!_0x373848,_0x46e22a[_0x1880a6(0x167)]=0x1,_0x46e22a[_0x1880a6(0xcf)]=0x0,_0x46e22a['expId']=_0x1880a6(0x18d),_0x46e22a[_0x1880a6(0x112)]=_0x1880a6(0x1ad),_0x46e22a[_0x1880a6(0xcc)]=!0x0,_0x46e22a['autoExpandPreviousObjects']=[],_0x46e22a[_0x1880a6(0x169)]=0x0,_0x46e22a[_0x1880a6(0xd9)]=!0x0,_0x46e22a[_0x1880a6(0xfe)]=0x0,_0x46e22a[_0x1880a6(0xed)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x46e22a;};for(var _0x28883c=0x0;_0x28883c<_0x579a35['length'];_0x28883c++)_0x3e7475[_0x42b2e9(0x109)](_0x2b5e4c['serialize']({'timeNode':_0x367b74===_0x42b2e9(0x10a)||void 0x0},_0x579a35[_0x28883c],_0x49f9cf(_0x5426ba),{}));if(_0x367b74===_0x42b2e9(0x15a)){let _0x525302=Error['stackTraceLimit'];try{Error['stackTraceLimit']=0x1/0x0,_0x3e7475[_0x42b2e9(0x109)](_0x2b5e4c[_0x42b2e9(0x190)]({'stackNode':!0x0},new Error()[_0x42b2e9(0xf7)],_0x49f9cf(_0x5426ba),{'strLength':0x1/0x0}));}finally{Error[_0x42b2e9(0x16a)]=_0x525302;}}return{'method':_0x42b2e9(0x121),'version':_0x5cb203,'args':[{'ts':_0x14618f,'session':_0x14d4e3,'args':_0x3e7475,'id':_0x545559,'context':_0xf4010c}]};}catch(_0x5cd2a4){return{'method':_0x42b2e9(0x121),'version':_0x5cb203,'args':[{'ts':_0x14618f,'session':_0x14d4e3,'args':[{'type':_0x42b2e9(0x119),'error':_0x5cd2a4&&_0x5cd2a4['message']}],'id':_0x545559,'context':_0xf4010c}]};}finally{try{if(_0xed63fb&&_0x51bb6b){let _0x12a6a7=_0x2a87b2();_0xed63fb[_0x42b2e9(0x162)]++,_0xed63fb[_0x42b2e9(0x10a)]+=_0x53f46b(_0x51bb6b,_0x12a6a7),_0xed63fb['ts']=_0x12a6a7,_0x6ec684[_0x42b2e9(0x160)][_0x42b2e9(0x162)]++,_0x6ec684['hits'][_0x42b2e9(0x10a)]+=_0x53f46b(_0x51bb6b,_0x12a6a7),_0x6ec684['hits']['ts']=_0x12a6a7,(_0xed63fb[_0x42b2e9(0x162)]>0x32||_0xed63fb[_0x42b2e9(0x10a)]>0x64)&&(_0xed63fb[_0x42b2e9(0x1a5)]=!0x0),(_0x6ec684[_0x42b2e9(0x160)][_0x42b2e9(0x162)]>0x3e8||_0x6ec684['hits']['time']>0x12c)&&(_0x6ec684['hits']['reduceLimits']=!0x0);}}catch{}}}return _0x5a2b85;}((_0x5bcb14,_0x2aae84,_0xb8c56,_0x2d6e2d,_0xd4659e,_0x2644ef,_0x236889,_0x58ba1c,_0x4d73d1,_0x1cb32d,_0x21e45e)=>{var _0x5b23aa=_0x2fc1fe;if(_0x5bcb14['_console_ninja'])return _0x5bcb14[_0x5b23aa(0xe3)];if(!X(_0x5bcb14,_0x58ba1c,_0xd4659e))return _0x5bcb14[_0x5b23aa(0xe3)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x5bcb14[_0x5b23aa(0xe3)];let _0x562ef1=b(_0x5bcb14),_0x3581b7=_0x562ef1[_0x5b23aa(0x130)],_0x4ce459=_0x562ef1[_0x5b23aa(0xce)],_0x21eed3=_0x562ef1[_0x5b23aa(0x12e)],_0x5cb1d3={'hits':{},'ts':{}},_0x85469b=H(_0x5bcb14,_0x4d73d1,_0x5cb1d3,_0x2644ef),_0x367de0=_0x527d5e=>{_0x5cb1d3['ts'][_0x527d5e]=_0x4ce459();},_0x5e6aa1=(_0xe9078b,_0x1f2f18)=>{let _0x4e7fd1=_0x5cb1d3['ts'][_0x1f2f18];if(delete _0x5cb1d3['ts'][_0x1f2f18],_0x4e7fd1){let _0x943002=_0x3581b7(_0x4e7fd1,_0x4ce459());_0x159fce(_0x85469b('time',_0xe9078b,_0x21eed3(),_0x4f1d30,[_0x943002],_0x1f2f18));}},_0x455e63=_0x80de4c=>{var _0x33b436=_0x5b23aa,_0x592686;return _0xd4659e===_0x33b436(0xd8)&&_0x5bcb14[_0x33b436(0x16c)]&&((_0x592686=_0x80de4c==null?void 0x0:_0x80de4c[_0x33b436(0x1af)])==null?void 0x0:_0x592686[_0x33b436(0x194)])&&(_0x80de4c[_0x33b436(0x1af)][0x0][_0x33b436(0x16c)]=_0x5bcb14['origin']),_0x80de4c;};_0x5bcb14[_0x5b23aa(0xe3)]={'consoleLog':(_0x4c1843,_0x5396ff)=>{var _0x5a39ac=_0x5b23aa;_0x5bcb14[_0x5a39ac(0x148)][_0x5a39ac(0x121)][_0x5a39ac(0x118)]!==_0x5a39ac(0x197)&&_0x159fce(_0x85469b(_0x5a39ac(0x121),_0x4c1843,_0x21eed3(),_0x4f1d30,_0x5396ff));},'consoleTrace':(_0x1508e4,_0x320dfe)=>{var _0x5185bc=_0x5b23aa;_0x5bcb14[_0x5185bc(0x148)][_0x5185bc(0x121)][_0x5185bc(0x118)]!==_0x5185bc(0x13d)&&_0x159fce(_0x455e63(_0x85469b(_0x5185bc(0x15a),_0x1508e4,_0x21eed3(),_0x4f1d30,_0x320dfe)));},'consoleTime':_0x178af2=>{_0x367de0(_0x178af2);},'consoleTimeEnd':(_0x43956a,_0x524e07)=>{_0x5e6aa1(_0x524e07,_0x43956a);},'autoLog':(_0x5d5b60,_0x1a1221)=>{var _0x2e0cb4=_0x5b23aa;_0x159fce(_0x85469b(_0x2e0cb4(0x121),_0x1a1221,_0x21eed3(),_0x4f1d30,[_0x5d5b60]));},'autoLogMany':(_0x31b7ca,_0x35bce4)=>{var _0x108090=_0x5b23aa;_0x159fce(_0x85469b(_0x108090(0x121),_0x31b7ca,_0x21eed3(),_0x4f1d30,_0x35bce4));},'autoTrace':(_0x465285,_0x492122)=>{var _0x52744a=_0x5b23aa;_0x159fce(_0x455e63(_0x85469b(_0x52744a(0x15a),_0x492122,_0x21eed3(),_0x4f1d30,[_0x465285])));},'autoTraceMany':(_0x3ee62d,_0x97d13f)=>{_0x159fce(_0x455e63(_0x85469b('trace',_0x3ee62d,_0x21eed3(),_0x4f1d30,_0x97d13f)));},'autoTime':(_0x5c684c,_0x3d8782,_0x33a635)=>{_0x367de0(_0x33a635);},'autoTimeEnd':(_0x435a57,_0x1e0339,_0x5cd53d)=>{_0x5e6aa1(_0x1e0339,_0x5cd53d);},'coverage':_0x10f609=>{_0x159fce({'method':'coverage','version':_0x2644ef,'args':[{'id':_0x10f609}]});}};let _0x159fce=q(_0x5bcb14,_0x2aae84,_0xb8c56,_0x2d6e2d,_0xd4659e,_0x1cb32d,_0x21e45e),_0x4f1d30=_0x5bcb14[_0x5b23aa(0x16f)];return _0x5bcb14[_0x5b23aa(0xe3)];})(globalThis,_0x2fc1fe(0x19c),'35537',\"/home/joaquinvesapa/.vscode-server/extensions/wallabyjs.console-ninja-1.0.332/node_modules\",'astro',_0x2fc1fe(0x12b),_0x2fc1fe(0x147),_0x2fc1fe(0xc1),_0x2fc1fe(0x106),'',_0x2fc1fe(0x178));"
      )
    );
  } catch (e) {}
} /* istanbul ignore next */
function oo_oo(i, ...v) {
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}
  return v;
} /* istanbul ignore next */
function oo_tr(i, ...v) {
  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}
  return v;
} /* istanbul ignore next */
function oo_ts(v) {
  try {
    oo_cm().consoleTime(v);
  } catch (e) {}
  return v;
} /* istanbul ignore next */
function oo_te(v, i) {
  try {
    oo_cm().consoleTimeEnd(v, i);
  } catch (e) {}
  return v;
} /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/
