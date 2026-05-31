const functions = [
  {
    name: "XLOOKUP",
    tag: "查找匹配",
    desc: "按编号、姓名或商品名查找对应结果，适合替代多数 VLOOKUP 场景。",
    formula: '=XLOOKUP(A2, 员工表[工号], 员工表[姓名], "未找到")',
  },
  {
    name: "VLOOKUP",
    tag: "查找匹配",
    desc: "从区域首列查找值，并返回同一行指定列的结果，适合传统表格匹配。",
    formula: '=VLOOKUP(A2, 商品表!A:D, 4, FALSE)',
  },
  {
    name: "INDEX + MATCH",
    tag: "查找匹配",
    desc: "用 MATCH 找位置，再用 INDEX 返回结果，适合左右方向都可能变化的查找。",
    formula: '=INDEX(价格列, MATCH(A2, 商品列, 0))',
  },
  {
    name: "SUMIFS",
    tag: "条件汇总",
    desc: "按多个条件求和，例如统计某个月、某区域、某产品的销售额。",
    formula: '=SUMIFS(销售额, 月份, "5月", 区域, "华东")',
  },
  {
    name: "COUNTIFS",
    tag: "条件计数",
    desc: "统计满足多个条件的记录数量，常用于考勤、订单和名单分析。",
    formula: '=COUNTIFS(状态, "已完成", 负责人, "小陈")',
  },
  {
    name: "AVERAGEIFS",
    tag: "条件平均",
    desc: "计算满足多个条件的数据平均值，例如某区域某产品的平均客单价。",
    formula: '=AVERAGEIFS(客单价, 区域, "华南", 产品, "会员卡")',
  },
  {
    name: "IF",
    tag: "逻辑判断",
    desc: "根据条件返回不同结果，例如判断是否达标、是否需要补货。",
    formula: '=IF(C2>=80, "达标", "跟进")',
  },
  {
    name: "IFS",
    tag: "逻辑判断",
    desc: "处理多档判断，比嵌套多个 IF 更清楚，例如评级、价格档位、绩效等级。",
    formula: '=IFS(C2>=90, "优秀", C2>=80, "良好", C2>=60, "合格", TRUE, "补考")',
  },
  {
    name: "IFERROR",
    tag: "错误处理",
    desc: "当公式出错时返回备用结果，常用于查找不到数据时显示空白或提示。",
    formula: '=IFERROR(XLOOKUP(A2, 工号列, 姓名列), "未找到")',
  },
  {
    name: "AND / OR",
    tag: "逻辑判断",
    desc: "组合多个条件，用于判断是否同时满足或满足任意一个条件。",
    formula: '=IF(AND(B2="已付款", C2>0), "可发货", "检查")',
  },
  {
    name: "FILTER",
    tag: "动态筛选",
    desc: "自动筛出满足条件的数据，适合做可更新的名单和报表区域。",
    formula: '=FILTER(A2:F200, F2:F200="未处理")',
  },
  {
    name: "SORT",
    tag: "动态数组",
    desc: "按指定列自动排序，源数据变化时结果会跟着更新。",
    formula: '=SORT(A2:D100, 4, -1)',
  },
  {
    name: "UNIQUE",
    tag: "去重提取",
    desc: "从一列或一块区域中提取不重复值，适合制作下拉选项和汇总维度。",
    formula: '=UNIQUE(A2:A200)',
  },
  {
    name: "TEXTSPLIT",
    tag: "文本处理",
    desc: "把一个单元格里的文本按分隔符拆成多列或多行。",
    formula: '=TEXTSPLIT(A2, "-")',
  },
  {
    name: "FIND",
    tag: "文本定位",
    desc: "查找某段文本在单元格中的位置，区分大小写，常用于截取编号、邮箱和备注内容。",
    formula: '=FIND("@", A2)',
  },
  {
    name: "SEARCH",
    tag: "文本定位",
    desc: "查找文本位置但不区分大小写，适合更宽松的关键词定位。",
    formula: '=SEARCH("vip", A2)',
  },
  {
    name: "LEFT / RIGHT / MID",
    tag: "文本截取",
    desc: "从文本左侧、右侧或中间截取指定字符，常和 FIND、SEARCH 搭配使用。",
    formula: '=LEFT(A2, FIND("-", A2)-1)',
  },
  {
    name: "TEXTBEFORE / TEXTAFTER",
    tag: "文本截取",
    desc: "按分隔符取前面或后面的内容，比传统 LEFT + FIND 写法更直观。",
    formula: '=TEXTAFTER(A2, "@")',
  },
  {
    name: "TRIM",
    tag: "数据清洗",
    desc: "去掉文本中多余空格，适合清理从系统导出的姓名、编号和地址。",
    formula: '=TRIM(A2)',
  },
  {
    name: "SUBSTITUTE",
    tag: "文本替换",
    desc: "替换指定文本，例如删除符号、统一部门名称或清理电话号码。",
    formula: '=SUBSTITUTE(A2, " ", "")',
  },
  {
    name: "CONCAT / TEXTJOIN",
    tag: "文本合并",
    desc: "把多个单元格内容合并，TEXTJOIN 可以自动加入分隔符并忽略空值。",
    formula: '=TEXTJOIN("-", TRUE, A2:C2)',
  },
  {
    name: "TODAY / NOW",
    tag: "日期时间",
    desc: "返回今天日期或当前日期时间，用于账龄、倒计时和自动更新时间。",
    formula: '=TODAY()-A2',
  },
  {
    name: "DATEDIF",
    tag: "日期计算",
    desc: "计算两个日期之间相差的年、月或天，适合工龄、账期和年龄计算。",
    formula: '=DATEDIF(A2, TODAY(), "Y")',
  },
  {
    name: "EOMONTH",
    tag: "日期计算",
    desc: "返回某个日期所在月份或未来月份的月末日期，适合账单和月报。",
    formula: '=EOMONTH(A2, 0)',
  },
  {
    name: "ROUND / ROUNDUP / ROUNDDOWN",
    tag: "数字处理",
    desc: "按指定小数位四舍五入、向上取整或向下取整。",
    formula: '=ROUND(B2/C2, 2)',
  },
  {
    name: "MAX / MIN",
    tag: "统计分析",
    desc: "找最大值和最小值，常用于成绩、库存、价格和异常检测。",
    formula: '=MAX(C2:C100)',
  },
  {
    name: "RANK",
    tag: "排名",
    desc: "计算某个数值在一组数据中的名次，适合销售排行和成绩排名。",
    formula: '=RANK.EQ(C2, C$2:C$100, 0)',
  },
];

const practices = [
  {
    level: "基础",
    title: "整理客户名单",
    desc: "删除重复项，统一手机号格式，按城市筛选并标出空缺信息。",
  },
  {
    level: "基础",
    title: "制作月度预算表",
    desc: "设置数据验证、金额格式和条件格式，让超预算项目自动突出。",
  },
  {
    level: "进阶",
    title: "自动匹配员工部门",
    desc: "使用 XLOOKUP 按工号匹配姓名、部门和直属负责人。",
  },
  {
    level: "进阶",
    title: "多条件销售汇总",
    desc: "用 SUMIFS 统计不同月份、渠道和地区的销售额。",
  },
  {
    level: "实战",
    title: "销售数据看板",
    desc: "用透视表、图表和切片器制作一页动态销售仪表盘。",
  },
  {
    level: "实战",
    title: "批量合并报表",
    desc: "用 Power Query 合并多个门店文件，并生成统一汇总表。",
  },
];

const functionList = document.querySelector("#functionList");
const functionSearch = document.querySelector("#functionSearch");
const practiceGrid = document.querySelector("#practiceGrid");
const segmentButtons = document.querySelectorAll(".segment");

function renderFunctions(query = "") {
  const normalizedQuery = query.trim().toLowerCase();
  const visibleFunctions = functions.filter((item) => {
    const haystack = `${item.name} ${item.tag} ${item.desc} ${item.formula}`.toLowerCase();
    return haystack.includes(normalizedQuery);
  });

  functionList.innerHTML = visibleFunctions
    .map(
      (item) => `
        <article class="function-item">
          <header>
            <strong>${item.name}</strong>
            <span class="tag">${item.tag}</span>
          </header>
          <p>${item.desc}</p>
          <div class="formula">${item.formula}</div>
        </article>
      `,
    )
    .join("");
}

function renderPractices(level = "all") {
  const visiblePractices = practices.filter((item) => level === "all" || item.level === level);

  practiceGrid.innerHTML = visiblePractices
    .map(
      (item) => `
        <article class="practice-card" data-level="${item.level}">
          <span class="level">${item.level}</span>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </article>
      `,
    )
    .join("");
}

functionSearch.addEventListener("input", (event) => {
  renderFunctions(event.target.value);
});

segmentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    segmentButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderPractices(button.dataset.level);
  });
});

renderFunctions();
renderPractices();
