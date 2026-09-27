// Lightweight Chinese UI localization. Data-source names and telemetry values
// stay untouched; this translates labels and status copy rendered by the app.
const ZH = new Map(Object.entries({
  "VISUAL PRESETS":"视觉预设","Normal":"标准","MAP SOURCE":"地图来源","Style":"样式","LOCATION":"位置",
  "Landmark: --":"地标：--","📍 Location: --":"📍 位置：--","DISPLAY":"显示","RADIO":"无线电",
  "CONTACTS":"目标","SPACE MISSIONS":"太空任务","SELECT CONTEXT":"选择上下文","COCKPIT":"驾驶舱",
  "SEARCH NEARBY SITES":"搜索附近地点","SELECT CONTACTS TO LOAD OBSERVED / MAPPED PROXIMITY":"选择目标以加载观测/地图邻近信息",
  "AVAILABLE MISSIONS":"可用任务","SELECT A MISSION TO INSPECT":"选择任务查看详情","LOADING 30-DAY MISSION INDEX":"正在加载近 30 天任务索引",
  "TAB PREVIEWS · ENTER / SPACE SELECTS":"Tab 预览 · Enter/空格选择","STATION TAG":"电台标签","All":"全部",
  "NO STATION SELECTED":"未选择电台","Enable Radio, then choose a globe marker or use next.":"启用无线电后选择地球标记，或使用下一个",
  "DIRECTORY BAND":"目录频段","DRAG TO TUNE":"拖动调谐","ALL · DRAG THE NEEDLE":"全部 · 拖动指针","SNAPS TO AVAILABLE STATIONS":"自动吸附到可用电台",
  "PREV":"上一个","NEXT":"下一个","PLAY":"播放","STOP":"停止","Radio off":"无线电已关闭","STATION SITE":"电台位置",
  "CONNECT":"连接","LOCATE":"定位","CHANGE DEVICE":"更换设备","GAIN":"增益","AUTO":"自动","HEARD":"已接收","POSITIONED":"已定位",
  "TUNE":"调谐","SDR VOL":"SDR 音量","Connect an RTL-SDR to begin.":"连接 RTL-SDR 开始使用",
  "Layout":"布局","Tactical":"战术","Operator":"操作员","Minimal":"极简","Cyber":"赛博","Sonar":"声呐",
  "ON":"开","Rings":"环形标记","Range":"范围","Power":"强度","Opacity":"不透明度","Sector":"扇区",
  "DETECT":"检测","Density":"密度","Allocation":"分配","Elastic":"弹性","Weighted":"加权","Fade":"渐隐","Outside":"外部",
  "PARAMETERS":"参数","Models":"模型","Proximity":"邻近","Scope":"范围","Feather":"羽化","Draw":"绘制","Shape":"形状",
  "Area":"区域","Line":"线","Pin":"点","Primary":"主色","Amber":"琥珀","Cyan":"青色","Green":"绿色","Red":"红色","Clear":"清除",
  "Celestial":"天体","Clean UI":"简洁界面","Bloom":"泛光","Sharpen":"锐化","EXIT CLEAN VIEW":"退出简洁视图",
  "DATA LAYERS":"数据图层","CCTV OFF":"摄像头关闭","NEAREST":"最近","FOCUS":"聚焦","COVERAGE OFF":"覆盖范围关闭",
  "AUTO HOP OFF":"自动跳转关闭","PROJECTION ON":"投影开启","CALIBRATION":"校准","ADJUST":"调整","SAVE CAL":"保存校准","RESET CAL":"重置校准",
  "SCENE SUMMARY":"场景摘要","SCENES":"场景","NEW":"新建","DEL":"删除","CAPTURE SHOT":"捕获镜头","UPDATE SHOT":"更新镜头",
  "START":"开始","EXPORT PRESETS":"导出预设","IMPORT":"导入","RUN LOG":"运行日志","Ready":"就绪",
  "POWER UP":"增强功能","GROUND STATION · PROVIDER SETTINGS":"地面站 · 服务商设置","Power up the globe":"增强地球功能","SAVE KEYS":"保存密钥","ESC to close":"按 ESC 关闭",
  "ACTIVE STYLE":"当前样式","LOADING LIVE DATA":"正在加载实时数据","loading frames":"正在加载画面","syncing road network":"正在同步道路网络",
  "MISSION CONTROL · FIRST LAUNCH":"任务控制 · 首次启动","Choose your first view":"选择起始视图","LIVE CONTACTS":"实时目标",
  "Aircraft, vessels and nearby intelligence":"飞机、船舶及附近情报","Launches, spacecraft and orbital context":"发射任务、航天器及轨道信息",
  "ENVIRONMENTAL":"环境","Live earthquakes and active fires, from USGS and NASA":"USGS 与 NASA 的实时地震和活动火灾",
  "EXPLORE MANUALLY":"手动探索","Begin with a clean globe":"从纯净地球开始","Don't show this again":"不再显示",
  "ESC to dismiss":"按 ESC 关闭","GOD'S EYE":"上帝视角","VIEW":"视界","NO PLACE LEFT BEHIND":"不留死角",
  "Initializing photorealistic world...":"正在初始化实景地球…","GROUND SPEED":"地速","ALTITUDE":"高度","CONTACT":"目标",
  "CONTACTS · 250 KM":"目标 · 250 公里","CONTEXT ONLY":"仅上下文","NEAREST OBSERVED / MAPPED":"最近观测/地图目标",
  "NO AVAILABLE EXAMPLE":"暂无可用示例","AVAILABLE INPUTS ONLY · NOT AN ALL-CLEAR":"仅表示已获输入 · 不代表安全",
  "ESTIMATED FLIGHT PLAN":"估算飞行计划","ROUTE DATA UNAVAILABLE":"路线数据不可用","FROM":"起点","TO":"终点",
  "LIVE SIGNALS":"实时信号","OBSERVED / MAPPED PINGS":"观测/地图信号","CYCLE OFF":"循环关闭",
  "ACQUIRING REGIONAL NEWS":"正在获取区域新闻","RESOLVING REGION":"正在解析区域","TEMP":"温度","WIND":"风","SKY":"天空","PRECIP":"降水",
  "SOURCE-BACKED EVENTS · NO SYNTHETIC NEWS":"有来源事件 · 不生成虚构新闻","SIG":"信号","NEWS":"新闻","LOCAL":"本地",
  "ENABLE":"启用","VOLUME":"音量","ESC EXIT":"ESC 退出","C TOGGLE":"C 切换","RESET":"重置","EXIT COCKPIT":"退出驾驶舱",
  "Flying to Austin, TX...":"正在飞往 Austin…","Restoring shared view...":"正在恢复共享视图…","Configuring viewer...":"正在配置查看器…",
  "Initializing systems...":"正在初始化系统…","POSITION UNAVAILABLE":"位置不可用","REGION UNAVAILABLE":"区域不可用","RESOLVING REGION":"正在解析区域",
}));

function translateTextNode(node) {
  const raw = node.nodeValue;
  if (!raw || !raw.trim()) return;
  const leading = raw.match(/^\s*/)?.[0] || '';
  const trailing = raw.match(/\s*$/)?.[0] || '';
  const key = raw.trim();
  const value = ZH.get(key);
  if (value && value !== key) node.nodeValue = `${leading}${value}${trailing}`;
}

function translateElement(root) {
  if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) return;
  root.querySelectorAll?.('[title],[aria-label],[placeholder]').forEach((el) => {
    for (const attr of ['title', 'aria-label', 'placeholder']) {
      const value = el.getAttribute(attr);
      if (value && ZH.has(value)) el.setAttribute(attr, ZH.get(value));
    }
  });
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) translateTextNode(node);
}

export function installChineseLocalization() {
  document.documentElement.lang = 'zh-CN';
  document.title = "上帝视角 · God's Eye View";
  translateElement(document.body);
  const observer = new MutationObserver((records) => {
    for (const record of records) {
      if (record.type === 'characterData') translateTextNode(record.target);
      for (const node of record.addedNodes) translateElement(node);
    }
  });
  observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  return observer;
}
