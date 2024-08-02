const log = console.log.bind(document);
const colors = {
  gray: 'color: #1B2B34;',
  red: 'color: #EC5f67;',
  orange: 'color: #F99157;',
  yellow: 'color: #FAC863;',
  green: 'color: #99C794;',
  teal: 'color: #5FB3B3;',
  blue: 'color: #6699CC;',
  purple: 'color: #C594C5;',
  brown: 'color: #AB7967;',
  indigo: 'color: indigo;',
};

[].forEach.call(document.querySelectorAll('*'), function (o) {
  o.style.outline = '1px solid #' + (~~(16777216 * Math.random())).toString(16);
}),
  console.groupCollapsed('%cPlatform:', 'padding: 2px 4px; background-color: #7bd235; color: white;'),
  log(`useragent:%c ${navigator.userAgent}`, colors.indigo),
  log(`platform:%c ${navigator.userAgentData.platform}`, colors.indigo),
  log(`экономия данных:%c ${navigator.connection.saveData}`, colors.indigo),
  navigator.connection &&
    navigator.connection.effectiveType &&
    ('4g' === navigator.connection.effectiveType
      ? log('speed:%c 4G', 'color: indigo;')
      : log('speed:%c 3G', 'color: indigo;')),
  log(`количество ядер ЦП:%c ${navigator.hardwareConcurrency}`, 'color: indigo;'),
  log(`память устройства:%c ${navigator.deviceMemory}Gb`, 'color: indigo;'),
  window.matchMedia('(prefers-color-scheme: dark)') ? log('System Theme: dark') : log('System Theme: light'),
  console.groupEnd(),
  console.groupCollapsed('%cLoading time:', 'padding: 2px 4px; background-color: #7bd235; color: white;'),
  document.addEventListener('readystatechange', () => {
    log(`readystatechange %c${document.readyState} ${performance.now().toFixed(0)} ms`, 'color: indigo;');
  });
const observr = new PerformanceObserver((o) => {
  let e = o.getEntries();
  e.forEach((o) => {
    if ('largest-contentful-paint' === o.entryType) {
      let e = o.renderTime || o.loadTime;
      console.log(`Largest Contentful Paint (LCP) time: ${e.toFixed(2)} ms`);
    }
  });
});
observr.observe({ type: 'largest-contentful-paint', buffered: !0 }),
  window.addEventListener('load', () => {
    log(`Load: %c${performance.now().toFixed(0)} ms`, 'color: indigo;'), console.groupEnd();
  });
