interface ExamOption {
    key: string;
    value: string;
}

interface Exam {
    title: string;
    answer: string;
    type?: string;
    options: ExamOption[];
}

export const radioExam: Exam[] = [
    {
        title: '具有风险分析的软件生命周期模型是（）',
        answer: 'C',
        options: [
            {key: 'A', value: "瀑布模型" },
            {key: 'B', value: "喷泉模型" },
            {key: 'C', value: "螺旋模型" },
            {key: 'D', value: "增量模型" },
        ],
    },

    {
        title: '软件工程的基本要素包括方法、工具和（）',
        answer: 'A',
        options: [
            {key: 'A', value: "过程" },
            {key: 'B', value: "软件系统 " },
            {key: 'C', value: "硬件环境" },
            {key: 'D', value: "人员" },
        ],
    },

    {
        title: '软件的复杂性是（），它引起人员通信困难、开发费用超支、开发时间超时等问题',
        answer: 'A',
        options: [
            {key: 'A', value: "固有的" },
            {key: 'B', value: "人为的" },
            {key: 'C', value: "可消除的" },
            {key: 'D', value: "不可降低的" },
        ],
    },

    {
        title: '在结构化分析方法中，（）表达系统内部数据运动的图形化技术',
        answer: 'C',
        options: [
            {key: 'A', value: "数据字典" },
            {key: 'B', value: "实体关系图" },
            {key: 'C', value: "数据流图" },
            {key: 'D', value: "状态转换图" },
        ],
    },

    {
        title: '“软件危机” 是指（）',
        answer: 'C',
        options: [
            {key: 'A', value: "计算机病毒的出现" },
            {key: 'B', value: "利用计算机进行经济犯罪活动" },
            {key: 'C', value: "软件开发和维护中出现的一系列问题" },
            {key: 'D', value: "人们过分迷恋计算机系统" },
        ],
    },

    {
        title: '随着软硬件环境变化而修改软件的过程是（）',
        answer: 'B',
        options: [
            {key: 'A', value: "校正性维护" },
            {key: 'B', value: "适应性维护" },
            {key: 'C', value: "完善性维护" },
            {key: 'D', value: "预防性维护" },
        ],
    },

    {
        title: '需求分析中开发人员要从用户那里了解（）',
        answer: 'A',
        options: [
            {key: 'A', value: "软件做什么" },
            {key: 'B', value: "用户使用界面" },
            {key: 'C', value: "输入的信息" },
            {key: 'D', value: "软件的规模" },
        ],
    },

    {
        title: '软件详细设计的主要任务是确定每个模块的（）',
        answer: 'A',
        options: [
            {key: 'A', value: "算法和使用的数据结构" },
            {key: 'B', value: "外部接口" },
            {key: 'C', value: "功能" },
            {key: 'D', value: "编程" },
        ],
    },
    
    {
        title: '为了提高模块的独立性，模块内部最好是（）',
        answer: 'C',
        options: [
            {key: 'A', value: "逻辑内聚" },
            {key: 'B', value: "时间内聚" },
            {key: 'C', value: "功能内聚" },
            {key: 'D', value: "通信内聚" },
        ],
    },

    {
        title: '一个模块的（）太大一般是因为缺乏中间层次，应当适当增加中间层次的控制模块',
        answer: 'C',
        options: [
            {key: 'A', value: "深度" },
            {key: 'B', value: "宽度" },
            {key: 'C', value: "扇出" },
            {key: 'D', value: "扇入" },
        ],
    },

    {
        title: '模块的内聚性最高的是（）',
        answer: 'D',
        options: [
            {key: 'A', value: "逻辑内聚" },
            {key: 'B', value: "时间内聚" },
            {key: 'C', value: "偶然内聚" },
            {key: 'D', value: "功能内聚" },
        ],
    },

    {
        title: '需求分析是（）',
        answer: 'A',
        options: [
            {key: 'A', value: "软件开发工作的基础" },
            {key: 'B', value: "软件生存周期的开始" },
            {key: 'C', value: "由系统分析员单独完成的" },
            {key: 'D', value: "由用户自己单独完成的" },
        ],
    },

    {
        title: '在白盒测试技术测试用例的设计中，（）是最强的覆盖标准',
        answer: 'B',
        options: [
            {key: 'A', value: "语句覆盖" },
            {key: 'B', value: "路径覆盖" },
            {key: 'C', value: "条件组合覆盖" },
            {key: 'D', value: "判定覆盖" },
        ],
    },

    {
        title: '软件维护时，对测试阶段未发现的错误进行测试、诊断、定位、纠错，直至修改的回归测试过程称（）',
        answer: 'A',
        options: [
            {key: 'A', value: "改正性维护" },
            {key: 'B', value: "适应性维护" },
            {key: 'C', value: "完善性维护" },
            {key: 'D', value: "预防性维护" },
        ],
    },

    {
        title: '() 是把对象的属性和操作结合在一起，构成一个独立的对象，其内部信息对外界是隐蔽的，外界只能通过有限的接口与对象发生联系',
        answer: 'C',
        options: [
            {key: 'A', value: "多态性" },
            {key: 'B', value: "继承" },
            {key: 'C', value: "封装" },
            {key: 'D', value: "消息" },
        ],
    },

    {
        title: '对象实现了数据和操作的结合，使数据和操作（）于对象的统一体中',
        answer: 'C',
        options: [
            {key: 'A', value: "结合" },
            {key: 'B', value: "隐藏" },
            {key: 'C', value: "封装" },
            {key: 'D', value: "抽象" },
        ],
    },

    {
        title: '面向对象的开发方法中，（）将是面向对象技术领域内占主导地位的标准建模语言',
        answer: 'C',
        options: [
            {key: 'A', value: "Booch方法" },
            {key: 'B', value: "Coad方法" },
            {key: 'C', value: "UML语言" },
            {key: 'D', value: "OMT方法" },
        ],
    },

    {
        title: '（）意味着一个操作在不同的类中可以有不同的实现方式',
        answer: 'A',
        options: [
            {key: 'A', value: "多态性" },
            {key: 'B', value: "多继承" },
            {key: 'C', value: "类的可复用" },
            {key: 'D', value: "信息隐藏" },
        ],
    },

    {
        title: '单元测试的测试用例主要根据（）的结果来设计',
        answer: 'D',
        options: [
            {key: 'A', value: "需求分析" },
            {key: 'B', value: "源程序" },
            {key: 'C', value: "概要设计" },
            {key: 'D', value: "详细设计" },
        ],
    },

    {
        title: '软件测试是为了（）而执行程序的过程',
        answer: 'B',
        options: [
            {key: 'A', value: "纠正错误" },
            {key: 'B', value: "发现错误" },
            {key: 'C', value: "避免错误" },
            {key: 'D', value: "证明正确" },
        ],
    },

    {
        title: '类构件的重用方式有多态重用、继承重用和（）',
        answer: 'A',
        options: [
            {key: 'A', value: "实例重用" },
            {key: 'B', value: "重载重用" },
            {key: 'C', value: "代码重用" },
            {key: 'D', value: "方法重用" },
        ],
    },

    {
        title: '支持面向对象技术的软件生存周期模型是（）',
        answer: 'A',
        options: [
            {key: 'A', value: "喷泉模型" },
            {key: 'B', value: "螺旋模型" },
            {key: 'C', value: "增量模型" },
            {key: 'D', value: "瀑布模型" },
        ],
    },

    {
        title: '在白盒测试技术测试用例的设计中，（）是最弱的覆盖标准',
        answer: 'A',
        options: [
            {key: 'A', value: "语句覆盖" },
            {key: 'B', value: "路径覆盖" },
            {key: 'C', value: "条件组合覆盖" },
            {key: 'D', value: "判定覆盖" },
        ],
    },

    {
        title: '下面哪些测试方法属于白盒测试（）',
        answer: 'AE',
        type: 'CHECKBOX',
        options: [
            {key: 'A', value: "基本路径测试" },
            {key: 'B', value: "等价类划分" },
            {key: 'C', value: "边界值分析" },
            {key: 'D', value: "错误推测" },
            {key: 'E', value: "逻辑覆盖测试" },
        ],
    },

    {
        title: '瀑布模型把软件生命周期划分为八个阶段：问题的定义、可行性研究、软件需求分析、系统总体设计、详细设计、编码、测试和运行、维护。八个阶段又可归纳为三个大的阶段：计划阶段、开发阶段和()',
        answer: 'C',
        options: [
            {key: 'A', value: "详细计划" },
            {key: 'B', value: "可行性分析" },
            {key: 'C', value: "运行阶段" },
            {key: 'D', value: "测试与排错" },
        ],
    },

    {
        title: '从结构化的瀑布模型看，在它的生命周期中的八个阶段中，下面的几个选项中哪个环节出错，对软件的影响最大()',
        answer: 'C',
        options: [
            {key: 'A', value: "详细设计阶段" },
            {key: 'B', value: "概要设计阶段" },
            {key: 'C', value: "需求分析阶段" },
            {key: 'D', value: "测试和运行阶段" },
        ],
    },

    {
        title: '在结构化的瀑布模型中，哪一个阶段定义的标准将成为软件测试中的系统测试阶段的目标()',
        answer: 'A',
        options: [
            {key: 'A', value: "需求分析阶段" },
            {key: 'B', value: "详细设计阶段" },
            {key: 'C', value: "概要设计阶段" },
            {key: 'D', value: "可行性研究阶段" },
        ],
    },

    {
        title: '软件工程的出现主要是由于()',
        answer: 'C',
        options: [
            {key: 'A', value: "程序设计方法学的影响" },
            {key: 'B', value: "其它工程科学的影响" },
            {key: 'C', value: "软件危机的出现" },
            {key: 'D', value: "计算机的发展" },
        ],
    },

    {
        title: '软件工程方法学的目的是：使软件生产规范化和工程化，而软件工程方法得以实施的主要保证是()',
        answer: 'C',
        options: [
            {key: 'A', value: "硬件环境" },
            {key: 'B', value: "软件开发的环境" },
            {key: 'C', value: "软件开发工具和软件开发的环境" },
            {key: 'D', value: "开发人员的素质" },
        ],
    },

    {
        title: '软件开发常使用的两种基本方法是结构化和原型化方法，在实际的应用中，它们之间的关系表现为 ()',
        answer: 'B',
        options: [
            {key: 'A', value: "相互排斥" },
            {key: 'B', value: "相互补充" },
            {key: 'C', value: "独立使用" },
            {key: 'D', value: "交替使用" },
        ],
    },

    {
        title: 'UML是软件开发中的一个重要工具，它主要应用于哪种软件开发方法()',
        answer: 'C',
        options: [
            {key: 'A', value: "基于瀑布模型的结构化方法" },
            {key: 'B', value: "基于需求动态定义的原型化方法" },
            {key: 'C', value: "基于对象的面向对象的方法" },
            {key: 'D', value: "基于数据的数据流开发方法" },
        ],
    },

    {
        title: '软件测试基本方法中，下列 () 不用测试实例',
        answer: 'D',
        options: [
            {key: 'A', value: "白盒测试法" },
            {key: 'B', value: "动态测试法" },
            {key: 'C', value: "黑盒测试法" },
            {key: 'D', value: "静态测试法" },
        ],
    },

    {
        title: '结构化分析方法是一种预先严格定义需求的方法，它在实施时强调的是分析对象的()',
        answer: 'B',
        options: [
            {key: 'A', value: "控制流" },
            {key: 'B', value: "数据流" },
            {key: 'C', value: "程序流" },
            {key: 'D', value: "指令流" },
        ],
    },

    {
        title: '软件开发的结构化生命周期方法将软件生命周期划分成()',
        answer: 'A',
        options: [
            {key: 'A', value: "计划阶段、开发阶段、运行阶段" },
            {key: 'B', value: "计划阶段、编程阶段、测试阶段" },
            {key: 'C', value: "总体设计、详细设计、编程调试" },
            {key: 'D', value: "需求分析、功能定义、系统设计" },
        ],
    },

    {
        title: '可行性研究主要从以下几个方面进行研究：（）',
        answer: 'A',
        options: [
            {key: 'A', value: "技术可行性，经济可行性，操作可行性" },
            {key: 'B', value: "技术可行性，经济可行性，系统可行性" },
            {key: 'C', value: "经济可行性，系统可行性，操作可行性" },
            {key: 'D', value: "经济可行性，系统可行性，时间可行性" },
        ],
    },

    {
        title: '耦合是对软件不同模块之间互连程度的度量。各种耦合按从强到弱排列如下： （）',
        answer: 'C',
        options: [
            {key: 'A', value: "内容耦合，控制耦合，数据耦合，公共环境耦合" },
            {key: 'B', value: "内容耦合，控制耦合，公共环境耦合，数据耦合" },
            {key: 'C', value: "内容耦合，公共环境耦合，控制耦合，数据耦合" },
            {key: 'D', value: "控制耦合，内容耦合，数据耦合，公共环境耦合" },
        ],
    },

    {
        title: '可行性分析研究的目的（）',
        answer: 'B',
        options: [
            {key: 'A', value: "争取项目" },
            {key: 'B', value: "项目值得开发否" },
            {key: 'C', value: "开发项目" },
            {key: 'D', value: "规划项目" },
        ],
    },

    {
        title: '数据字典是用来定义（）中的各个成分的具体含义',
        answer: 'D',
        options: [
            {key: 'A', value: "流程图" },
            {key: 'B', value: "功能结构图" },
            {key: 'C', value: "系统结构图" },
            {key: 'D', value: "数据流图" },
        ],
    },

    {
        title: '程序的三种基本控制结构的共同特点是（）',
        answer: 'C',
        options: [
            {key: 'A', value: "只能用来描述简单程序" },
            {key: 'B', value: "不能嵌套使用" },
            {key: 'C', value: "单入口，单出口" },
            {key: 'D', value: "仅用于自动控制系统   " },
        ],
    },

    {
        title: '为高质量的开发软件项目，在软件结构设计时，必须遵循（）原则',
        answer: 'A',
        options: [
            {key: 'A', value: "信息隐蔽" },
            {key: 'B', value: "质量控制" },
            {key: 'C', value: "程序优化" },
            {key: 'D', value: "数据共享" },
        ],
    },

    {
        title: '黑盒测试在设计测试用例时，主要研究（）',
        answer: 'A',
        options: [
            {key: 'A', value: "需求规格说明于概要设计说明" },
            {key: 'B', value: "详细设计说明" },
            {key: 'C', value: "项目开发计划" },
            {key: 'D', value: "概要设计说明与详细设计说明" },
        ],
    },

    {
        title: '通过 () 可以完成数据流图的细化',
        answer: 'B',
        options: [
            {key: 'A', value: "结构分解" },
            {key: 'B', value: "功能分解" },
            {key: 'C', value: "数据分解" },
            {key: 'D', value: "系统分解" },
        ],
    },

    {
        title: '程序流程图 (PDF) 中的箭头代表的是 ()',
        answer: 'B',
        options: [
            {key: 'A', value: "数据流" },
            {key: 'B', value: "控制流" },
            {key: 'C', value: "调用关系" },
            {key: 'D', value: "组成关系" },
        ],
    },

    {
        title: '软件定义期问题定义阶段涉及的人员有 ( )',
        answer: 'D',
        options: [
            {key: 'A', value: "用户、使用部门负责人" },
            {key: 'B', value: "软件开发人员、用户、使用部门负责人" },
            {key: 'C', value: "系统分析员、软件开发人员" },
            {key: 'D', value: "系统分析员、软件开发人员、用户、使用部门负责人" },
        ],
    },
    
    {
        title: '( )应考虑对模块相联和资源共享问题进行描述和制约',
        answer: 'C',
        options: [
            {key: 'A', value: "系统设计" },
            {key: 'B', value: "详细设计" },
            {key: 'C', value: "接口控制" },
            {key: 'D', value: "结构化编辑工具" },
        ],
    },
    {
        title: '业界存在三种需求分析方法：面向功能分析、面向对象分析和 ( )',
        answer: 'D',
        options: [
            {key: 'A', value: "面向算法分析" },
            {key: 'B', value: "面向数据分析" },
            {key: 'C', value: "面向程序分析" },
            {key: 'D', value: "面向硬件分析" },
        ],
    },
    {
        title: '软件可维护性的特性中相互矛盾的是 （）',
        answer: 'C',
        options: [
            {key: 'A', value: "可修改性和可理解性" },
            {key: 'B', value: "可测试性和可理解性" },
            {key: 'C', value: "效率和可修改性" },
            {key: 'D', value: "可理解性和可读性" },
        ],
    },
    {
        title: '软件测试方法中的 ( ) 属于静态测试方法',
        answer: 'D',
        options: [
            {key: 'A', value: "黑盒法" },
            {key: 'B', value: "路径覆盖" },
            {key: 'C', value: "错误推测" },
            {key: 'D', value: "人工检测" },
        ],
    },
    {
        title: '结构化分析方法采用的基本手段是 ( )',
        answer: 'A',
        options: [
            {key: 'A', value: " 分解与抽象" },
            {key: 'B', value: "分解与综合" },
            {key: 'C', value: "归纳与推导" },
            {key: 'D', value: "试探与回溯" },
        ],
    },
    
    {
        title: '可行性研究要进行一次（ ）需求分析',
        answer: 'D',
        options: [
            {key: 'A', value: "深入的" },
            {key: 'B', value: "详尽的" },
            {key: 'C', value: "彻底的" },
            {key: 'D', value: "简化的、压缩了的" },
        ],
    },
    {
        title: '可维护性的特性中相互促进的是 ( )',
        answer: 'A',
        options: [
            {key: 'A', value: "可理解性和可测试性" },
            {key: 'B', value: "效率和可移植性" },
            {key: 'C', value: "效率和可修改性" },
            {key: 'D', value: "效率和结构好" },
        ],
    },
    {
        title: '（ ）是以提高软件质量为目的的技术活动',
        answer: 'D',
        options: [
            {key: 'A', value: "技术创新" },
            {key: 'B', value: "测试" },
            {key: 'C', value: "技术创造" },
            {key: 'D', value: "技术评审" },
        ],
    },
    {
        title: '软件测试可能发现软件中的（ ），但不能证明软件 ( )',
        answer: 'B',
        options: [
            {key: 'A', value: "所有错误，没有错误" },
            {key: 'B', value: "错误，没有错误" },
            {key: 'C', value: "逻辑错误，没有错误" },
            {key: 'D', value: "设计错误，没有错误" },
        ],
    },
    {
        title: '以下不属于软件维护困难表现的是( )',
        answer: 'C',
        options: [
            {key: 'A', value: "读懂别人的程序是困难的" },
            {key: 'B', value: "文档的不一致性" },
            {key: 'C', value: "源程序及相关文档的错误或丢失" },
            {key: 'D', value: "软件开发和软件维护在人员和时间上的差异" },
            {key: 'E', value: "软件维护不是一项吸引人的工作" },
        ],
    },
    {
        title: '软件设计一般分为总体设计和详细设计，它们之间的关系是 ( )',
        answer: 'A',
        options: [
            {key: 'A', value: "全局和局部" },
            {key: 'B', value: "抽象和具体" },
            {key: 'C', value: "总体和层次" },
            {key: 'D', value: "功能和结构" },
        ],
    },

    {
        title: '一组语句在程序多处出现，为了节省空间，把这些语句放在一个模块中，该模块的内聚度是（  ）的',
        answer: 'C',
        options: [
            {key: 'A', value: "逻辑性" },
            {key: 'B', value: "瞬时性" },
            {key: 'C', value: "偶然性" },
            {key: 'D', value: "通信性" },
        ],
    },

    {
        title: '在一个课程注册系统中，定义了类 CourseSchedule 和类 Course , 并在类 CourseSchedule 中定义了方法 add (c:Course) 和方法 remove (c:Course)，则类 CourseSchedule 和类 Course 之间的关系是（  ）',
        answer: 'C',
        options: [
            {key: 'A', value: "泛化关系" },
            {key: 'B', value: "组合关系" },
            {key: 'C', value: "依赖关系" },
            {key: 'D', value: "包含关系" },
        ],
    },

    {
        title: '软件策划的上游是（  ） 下游是（   ）',
        answer: 'AB',
        type: 'CHECKBOX',
        options: [
            {key: 'A', value: "需求分析" },
            {key: 'B', value: "软件设计" },
            {key: 'C', value: "软件测试" },
            {key: 'D', value: "可行性分析" },
        ],
    },

    {
        title: '概要设计的结果是提供一份 (   )',
        answer: 'A',
        options: [
            {key: 'A', value: "模块说明书" },
            {key: 'B', value: "框图" },
            {key: 'C', value: "程序" },
            {key: 'D', value: "数据流图" },
        ],
    },

    {
        title: '面向数据流软件设计方法一般是把数据流图中的数据流化分为 (B) 两种流，再将数据流图映射为软件结构',
        answer: 'B',
        options: [
            {key: 'A', value: "数据流与事务流" },
            {key: 'B', value: "交换流和事务流" },
            {key: 'C', value: "信息流与控制流" },
            {key: 'D', value: "交换流和数据流" },
        ],
    },
    
];