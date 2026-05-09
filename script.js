const root = document.documentElement;
const themeButton = document.querySelector("[data-theme-toggle]");
const languageButton = document.querySelector("[data-language-toggle]");
const savedTheme = localStorage.getItem("codex-learning-theme");
let currentLang = localStorage.getItem("codex-learning-language") || "zh";

const translations = {
  en: {
    "Codex Learning Hub：从零开始学习 Codex": "Codex Learning Hub: Learn Codex From Zero",
    "新手入门": "Beginner Guide",
    "使用流程": "Workflow",
    "安全指南": "Safety Guide",
    "切换深色或浅色模式": "Toggle dark or light mode",
    "面向大学 IT / Programming 学生的在线课程": "An online course for university IT and programming students",
    "Codex 是 OpenAI 的 AI coding agent：它能阅读项目、解释代码、提出修改、编辑文件、运行命令并检查结果，是帮助你进入真实编程循环的学习搭档。": "Codex is OpenAI's AI coding agent: it can read projects, explain code, suggest changes, edit files, run commands, and check results. Think of it as a learning partner that helps you enter a real programming workflow.",
    "View Prompt Library": "View Prompt Library",
    "Codex 初学者": "Codex beginners",
    "大学 IT 学生": "University IT students",
    "编程新手": "Programming beginners",
    "效率型开发者": "Developers improving productivity",
    "从原文档重组为可自学、可搜索、可复制 prompt 的课程站点。点击图片可放大查看。": "The original document has been reorganized into a self-study course site with search and copyable prompts. Click the image to enlarge it.",
    "点击放大预览": "Click to enlarge",
    "打开课程预览大图": "Open large course preview",
    "课程预览大图": "Large course preview",
    "Codex 入门指南课程页面预览": "Codex guide course preview",
    "Codex 入门指南课程页面完整预览": "Full Codex guide course preview",
    "关闭预览": "Close preview",
    "打开原图": "Open original",
    "关闭": "Close",
    "深色": "Dark",
    "浅色": "Light",
    "网站学习结构": "Site Learning Structure",
    "内容按“认识工具 -> 建立流程 -> 用于作业 -> 复制 prompt -> 安全提交”的顺序组织，适合从零开始自学。": "The content is organized as: understand the tool -> build a workflow -> use it for assignments -> copy prompts -> submit safely.",
    "快速理解 Codex、适合人群和学习入口。": "Quickly understand Codex, who it is for, and where to start.",
    "Codex 是什么、和 ChatGPT/Copilot 的区别、第一次怎么用。": "What Codex is, how it differs from ChatGPT/Copilot, and how to use it for the first time.",
    "ChatGPT、VS Code、Terminal、GitHub、Codex App 的使用流程。": "Workflows for ChatGPT, VS Code, Terminal, GitHub, and the Codex App.",
    "Requirement、rubric、最小修改、诚信边界和答辩准备。": "Requirements, rubrics, minimal changes, academic integrity, and demo preparation.",
    "按场景整理可复制 prompt 卡片。": "Copyable prompt cards organized by use case.",
    "备份、diff、隐私、危险命令、GitHub 协作和常见问题。": "Backups, diffs, privacy, risky commands, GitHub collaboration, and FAQs.",
    "关键词搜索": "Keyword Search",
    "01 新手入门": "01 Beginner Guide",
    "02 使用流程": "02 Workflow",
    "03 作业辅助": "03 Assignment Helper",
    "04 Prompt Library": "04 Prompt Library",
    "05 安全指南": "05 Safety Guide",
    "06 学习路线图": "06 Learning Roadmap",
    "07 Git/GitHub": "07 Git/GitHub",
    "08 实战案例": "08 Practice Cases",
    "09 FAQ": "09 FAQ",
    "10 下一步": "10 Next Steps",
    "Codex 是什么": "What Is Codex",
    "Codex 不是普通代码补全。它是一种能使用工具的 AI coding agent：可以读文件、编辑、运行命令、检查输出，并在得到新信息后继续调整。": "Codex is not ordinary code completion. It is a tool-using AI coding agent that can read files, edit, run commands, inspect output, and keep adjusting as it learns new information.",
    "最好的使用方式：让它解释、检查、定位、提出小修改，然后你自己理解、验证并负责最终提交。": "Best use: ask it to explain, check, locate issues, and suggest small changes, then you understand, verify, and take responsibility for the final submission.",
    "更像会讲解的老师，适合解释概念和分析你粘贴的材料。": "More like a teacher who explains concepts and analyzes the material you paste in.",
    "更像 IDE 中的补全助手，强在实时补全和局部建议。": "More like an IDE completion assistant, strongest at real-time completion and local suggestions.",
    "更像进入项目现场的编程搭档，能读项目、改文件、跑测试、总结 diff。": "More like a programming partner inside your project: it can read the repo, edit files, run tests, and summarize diffs.",
    "Codex 能帮学生做什么": "How Codex Helps Students",
    "解释陌生代码": "Explain unfamiliar code",
    "定位 bug 与 compile error": "Find bugs and compile errors",
    "把 rubric 转成 checklist": "Turn rubrics into checklists",
    "生成测试用例表": "Create test-case tables",
    "检查 README 与 GitHub PR": "Check README files and GitHub PRs",
    "准备老师 viva/demo 问题": "Prepare tutor viva/demo questions",
    "第一次使用 Codex 的步骤": "First-Time Codex Steps",
    "选择一个小项目或课堂练习，不要一开始就用整份 assignment。": "Choose a small project or class exercise; do not begin with the whole assignment.",
    "提供课程语言、你的水平、项目入口文件和运行方式。": "Provide the course language, your skill level, entry file, and run instructions.",
    "先要求 Codex 总结项目结构，不允许修改文件。": "First ask Codex to summarize the project structure without modifying files.",
    "让它解释 50-100 行代码，并用一个输入例子 trace 执行过程。": "Ask it to explain 50-100 lines of code and trace execution with one example input.",
    "再让它检查一个小 bug 或一个 rubric 项，要求最小修改建议。": "Then ask it to check one small bug or rubric item and suggest the minimal fix.",
    "看 diff、运行测试、自己复述逻辑后再提交。": "Read the diff, run tests, and explain the logic yourself before submitting.",
    "ChatGPT 中使用 Codex": "Using Codex in ChatGPT",
    "适合概念学习、解释代码片段、分析 assignment requirement、生成 prompt、准备答辩问题。把相关文件、错误截图、terminal output 和 rubric 放在同一轮对话里，并说明课程语言和你的水平。": "Best for learning concepts, explaining snippets, analyzing assignment requirements, generating prompts, and preparing viva questions. Put related files, error screenshots, terminal output, and the rubric into the same conversation, and state your course language and skill level.",
    "我是一名大学 IT 初学者。请先阅读 assignment requirement 和 rubric，只做检查清单，不要写代码。然后告诉我需要提供哪些文件才能进一步检查。": "I am a beginner university IT student. Please first read the assignment requirement and rubric. Only create a checklist, do not write code. Then tell me which files I should provide for a deeper check.",
    "VS Code 中使用 Codex": "Using Codex in VS Code",
    "适合边写边解释、修复当前文件、检查多个文件关系和 review diff。明确写清“只读/只改当前文件”“禁止重写”“保持 beginner-level style”。": "Best for explaining while coding, fixing the current file, checking relationships across files, and reviewing diffs. Clearly say: only read/edit the current file, do not rewrite, keep a beginner-level style.",
    "请只检查当前文件是否有明显 bug 和 readability 问题。先列出发现，不要修改。只有我确认后，才给最小 diff。": "Please only check the current file for obvious bugs and readability issues. List findings first and do not modify anything. Only provide the smallest diff after I confirm.",
    "Terminal / CLI 中使用 Codex": "Using Codex in Terminal / CLI",
    "适合在项目根目录让 agent 读文件、编辑、运行 compile/test 命令。先让它确认 repo 结构，再运行安全的测试命令。": "Best for letting the agent read files, edit, and run compile/test commands from the project root. Ask it to confirm the repo structure before running safe test commands.",
    "请在当前项目中先运行测试并总结结果。不要修改文件。若测试失败，请指出最可能的 3 个原因和下一步验证命令。": "Please run the existing tests in this project and summarize the results. Do not modify files. If tests fail, list the 3 most likely causes and the next verification commands.",
    "GitHub 联动": "GitHub Integration",
    "Codex 可以基于 repo、issue、PR、diff 和测试结果做检查。它适合总结改动、检查 README、生成 PR 描述、review bug 和 missing tests。": "Codex can review a repo, issue, PR, diff, and test results. It is useful for summarizing changes, checking README files, writing PR descriptions, and reviewing bugs or missing tests.",
    "请 review 这个 PR。请先列出高风险问题，再列出缺失测试，最后给一个简短 summary。不要讨论风格偏好，除非影响可读性或 requirement。": "Please review this PR. First list high-risk issues, then missing tests, then a short summary. Do not discuss style preferences unless they affect readability or requirements.",
    "Codex App 桌面版": "Codex Desktop App",
    "适合管理多个项目、查看 diff、使用 worktree、Git 和更长时间的代码任务。把它当作任务控制中心，而不是一次性问答窗口。": "Best for managing multiple projects, reviewing diffs, using worktrees, working with Git, and running longer coding tasks. Treat it as a task control center rather than a one-off Q&A window.",
    "作业辅助": "Assignment Helper",
    "核心原则": "Core Principle",
    "Codex 应该帮助你理解要求、发现问题、学习修复方法，而不是替你完成全部核心工作。课程作业的最终责任永远在你。": "Codex should help you understand requirements, find issues, and learn fixes, not complete all core work for you. You always remain responsible for course submissions.",
    "提供 requirement": "Provide the Requirement",
    "让 Codex 先总结任务目标、输入输出、限制和提交物。不要在它没理解要求时直接要求写代码。": "Ask Codex to summarize the task goal, inputs/outputs, limits, and deliverables first. Do not ask it to write code before it understands the requirement.",
    "提供 rubric": "Provide the Rubric",
    "让 Codex 把 rubric 转成 checklist，并逐项标注已满足、部分满足、未满足或需要确认。": "Ask Codex to turn the rubric into a checklist and mark each item as met, partially met, unmet, or needs confirmation.",
    "要求最小修改": "Ask for Minimal Changes",
    "限定允许修改的文件和范围，写清“不要重写整体结构、不要引入新库、保持我的风格”。": "Limit the files and scope it may change. Say clearly: do not rewrite the whole structure, do not add new libraries, and keep my style.",
    "避免 academic misconduct": "Avoid Academic Misconduct",
    "不要提交自己不能解释的代码；遵守学校 AI 政策；保留自己的草稿、笔记、测试和修改原因。": "Do not submit code you cannot explain. Follow your school's AI policy and keep your own drafts, notes, tests, and reasons for changes.",
    "准备老师可能问的问题": "Prepare Tutor Questions",
    "让 Codex 根据你的真实代码生成 viva/demo 问题，覆盖逻辑、边界情况和设计选择。": "Ask Codex to generate viva/demo questions from your real code, covering logic, edge cases, and design choices.",
    "最终检查": "Final Check",
    "运行测试、看 diff、检查 README、确认没有隐私文件或临时文件，并确保你能解释每处关键修改。": "Run tests, read diffs, check the README, confirm there are no private or temporary files, and make sure you can explain every key change.",
    "可复制提示词库": "Copyable Prompt Library",
    "每张卡片都包含标题、使用场景和 prompt 内容。点击“复制”可直接复制，然后把课程语言、文件名、错误输出或 rubric 补充进去。": "Each card includes a title, use case, and prompt text. Click Copy, then add your course language, file names, error output, or rubric.",
    "筛选 prompt": "Filter prompts",
    "解释代码 prompt": "Code Explanation Prompt",
    "适合看老师示例、同学项目、旧代码或报错附近代码。": "Use this for teacher examples, group projects, old code, or code near an error.",
    "请用初学者能懂的中文解释这段代码。按：整体目的、每个函数、关键变量、执行流程、可能出错点、我应该复习的语法点来讲。不要改代码。": "Please explain this code in beginner-friendly English. Cover: overall purpose, each function, key variables, execution flow, likely error points, and the syntax I should review. Do not modify the code.",
    "复制": "Copy",
    "Debug prompt": "Debug Prompt",
    "适合程序结果不对、按钮无效、测试失败。": "Use this when output is wrong, a button does not work, or tests fail.",
    "这是预期结果、实际结果和相关代码。请先列出最可能的 3 个原因，以及每个原因如何验证。不要马上修改。": "Here are the expected result, actual result, and related code. First list the 3 most likely causes and how to verify each one. Do not modify the code yet.",
    "Compile error prompt": "Compile Error Prompt",
    "适合 C++、Java、TypeScript 编译失败。": "Use this for C++, Java, or TypeScript compile failures.",
    "请解释这个 compile error 的真正含义，指出最可能的源代码位置，并给 beginner-friendly 的最小修复。请区分根本错误和连锁错误。": "Please explain what this compile error really means, identify the most likely source-code location, and suggest a beginner-friendly minimal fix. Distinguish root errors from cascading errors.",
    "Rubric 检查 prompt": "Rubric Check Prompt",
    "适合提交前对照评分标准自查。": "Use this to self-check before submission against the marking criteria.",
    "请把这个 rubric 转成 checklist，并用我的代码逐项标注：已满足/部分满足/未满足/需要确认。每个问题给证据文件位置，不要直接帮我写缺失功能。": "Please turn this rubric into a checklist and mark each item using my code: met / partially met / unmet / needs confirmation. Give evidence file locations for each issue. Do not directly write missing features.",
    "适合 C++ assignment、menu、function、file I/O 和 input validation。": "Use this for C++ assignments, menus, functions, file I/O, and input validation.",
    "请保持 C++ beginner style，只使用我学过的 if/else、loops、functions、arrays/vector、basic file I/O。重点检查 input validation、menu、file I/O 和 edge cases，不要用高级库或 OOP 重构。": "Please keep a beginner C++ style and only use if/else, loops, functions, arrays/vector, and basic file I/O. Focus on input validation, menus, file I/O, and edge cases. Do not use advanced libraries or OOP refactors.",
    "适合 Python traceback、数据处理和函数拆分。": "Use this for Python tracebacks, data processing, and function splitting.",
    "请帮我 debug 这个 Python error。先解释 traceback 从下往上怎么看，再说明数据流和变量作用，最后给最小修复建议，保持初学者风格。": "Please help me debug this Python error. First explain how to read the traceback from bottom to top, then explain the data flow and variable roles, and finally suggest a minimal fix in a beginner-friendly style.",
    "适合 web assignment 的布局、响应式、无障碍和交互检查。": "Use this for web assignment layout, responsiveness, accessibility, and interaction checks.",
    "请检查这个网页 assignment 的 HTML/CSS/JS：layout、responsive、accessibility 和 JS interaction。先列问题和优先级，不要直接改。若需要修改，请只做最小修改。": "Please check this web assignment's HTML/CSS/JS: layout, responsiveness, accessibility, and JS interactions. First list issues and priorities; do not directly edit. If changes are needed, make only minimal changes.",
    "适合合法授权实验、靶场或 CTF training 的报告学习。": "Use this for legal authorized labs, ranges, or CTF training reports.",
    "这是授权 cybersecurity lab 的 terminal output。请解释每条命令和输出代表什么，说明风险等级、证据和防御建议，并帮我写 report 段落。不要提供非法攻击步骤。": "This is terminal output from an authorized cybersecurity lab. Please explain what each command and output means, state risk level, evidence, and defensive recommendations, and help write report paragraphs. Do not provide illegal attack steps.",
    "适合接手 repo、检查 README 或理解项目结构。": "Use this when taking over a repo, checking a README, or understanding project structure.",
    "请阅读这个 repo 并总结：项目目的、运行方式、主要文件、测试方式、潜在风险。先不要修改。请告诉我应该先看哪些文件。": "Please read this repo and summarize: project purpose, how to run it, main files, test method, and potential risks. Do not modify anything yet. Tell me which files I should read first.",
    "适合团队项目 merge 前检查。": "Use this before merging team project work.",
    "请 review 这个 PR，优先找 bug、regression、missing tests 和 requirement 不符。按 severity 排序，并给出具体文件位置和可执行建议。": "Please review this PR, prioritizing bugs, regressions, missing tests, and requirement mismatches. Sort by severity and give concrete file locations and actionable suggestions.",
    "适合课程项目、GitHub 提交和团队交付。": "Use this for course projects, GitHub submissions, and team deliverables.",
    "请根据项目内容生成 beginner-friendly README：简介、功能、安装、运行、测试、文件结构、已知限制。不要夸大项目功能，所有命令必须来自实际项目配置。": "Please generate a beginner-friendly README from the project: overview, features, installation, run commands, tests, file structure, and known limitations. Do not exaggerate features; every command must come from the real project configuration.",
    "老师提问准备 prompt": "Tutor Question Prep Prompt",
    "适合 demo、口头答辩和代码检查前练习。": "Use this before demos, viva checks, and code interviews with a tutor.",
    "请根据我的代码生成 10 个老师可能问的问题，并给简短参考回答，重点包括核心逻辑、边界情况、我为什么这样设计，以及哪些地方我必须能现场解释。": "Please generate 10 questions a tutor might ask based on my code, with short reference answers. Focus on core logic, edge cases, why I designed it this way, and what I must be able to explain live.",
    "为什么要备份": "Why Backups Matter",
    "Codex 可能误解 requirement、改到无关文件或引入新 bug。最简单的备份方式是 Git commit，也可以复制一份项目文件夹。": "Codex may misunderstand requirements, edit unrelated files, or introduce new bugs. The simplest backup is a Git commit; copying the project folder also works.",
    "如何看 diff": "How to Read Diffs",
    "diff 是修改前后的差异。接受修改前逐文件查看新增、删除、变更行，确认每处都和任务相关。": "A diff shows changes before and after editing. Before accepting changes, inspect additions, deletions, and modified lines file by file, and confirm each change is task-related.",
    "避免乱改文件": "Avoid Uncontrolled File Changes",
    "在 prompt 中写清允许查看和修改的文件范围，例如“只允许改 src/input.cpp 和 tests/input_test.cpp”。": "State exactly which files Codex may view and modify, for example: only edit src/input.cpp and tests/input_test.cpp.",
    "保护隐私": "Protect Privacy",
    "不要在包含护照、银行卡、私人照片、密码、API key 的文件夹运行。公开 repo 前检查 `.env` 和临时文件。": "Do not run Codex in folders containing passports, bank cards, private photos, passwords, or API keys. Before publishing a repo, check `.env` and temporary files.",
    "避免危险命令": "Avoid Risky Commands",
    "不要让它执行删除大量文件、上传隐私、改系统配置或操作真实攻击目标的命令。看不懂命令先要求解释。": "Do not let it delete many files, upload private data, change system settings, or operate against real targets. If you do not understand a command, ask for an explanation first.",
    "我在正确的项目根目录运行 Codex": "I am running Codex in the correct project root",
    "项目已经有 Git commit 或备份": "The project already has a Git commit or backup",
    "prompt 写清楚允许修改的文件范围": "The prompt clearly limits which files may be modified",
    "没有把隐私文件、密码、API key 放进项目": "No private files, passwords, or API keys are inside the project",
    "我会先看 diff，再接受修改": "I will read the diff before accepting changes",
    "我运行了 compile/test/manual test": "I ran compile/test/manual checks",
    "我能解释每一处关键修改": "I can explain every key change",
    "我确认没有违反学校 AI/academic integrity 政策": "I confirmed this follows my school's AI and academic integrity policy",
    "学习路线图": "Learning Roadmap",
    "课程进度": "Course Progress",
    "学习目标": "Learning Goal",
    "会让 Codex 解释代码、找简单 bug、检查 assignment。": "Use Codex to explain code, find simple bugs, and check assignments.",
    "推荐练习": "Recommended Practice",
    "每天选一个函数解释；用 rubric 做 checklist；修一个小 bug。": "Explain one function each day, turn a rubric into a checklist, and fix a small bug.",
    "推荐 prompt": "Recommended Prompt",
    "请解释这段代码，并给我 3 个检查理解的问题。": "Please explain this code and give me 3 questions to check my understanding.",
    "完成后能力": "What You Can Do Afterward",
    "能清楚描述函数目的、输入输出、常见错误和下一步验证方式。": "Clearly describe a function's purpose, inputs/outputs, common errors, and next verification step.",
    "会使用 VS Code 联动、读取整个项目、看 diff、用 Git 保存版本。": "Use VS Code integration, read a whole project, review diffs, and save versions with Git.",
    "打开一个 repo；总结结构；改一处 bug；看 diff；commit。": "Open a repo, summarize its structure, fix one bug, read the diff, and commit.",
    "请阅读项目结构，说明入口、主要模块、测试命令和修改风险。": "Please read the project structure and explain the entry point, main modules, test commands, and modification risks.",
    "能限制修改范围、解释 diff，并用 Git checkpoint 管理风险。": "Limit modification scope, explain diffs, and manage risk with Git checkpoints.",
    "会使用 CLI、GitHub PR、code review、生成测试、改进项目结构。": "Use CLI, GitHub PRs, code review, generated tests, and project-structure improvements.",
    "在分支上让 Codex 修 bug 并跑测试；生成 PR 描述；review 自己 PR。": "Have Codex fix a bug on a branch and run tests; generate a PR description; review your own PR.",
    "请对这个 PR 做高信号 code review，优先找 bug 和 missing tests。": "Please do a high-signal code review for this PR, prioritizing bugs and missing tests.",
    "能把 Codex 纳入完整工程流程：issue、branch、test、PR、review。": "Integrate Codex into the full engineering workflow: issue, branch, test, PR, and review.",
    "Git 与 GitHub 基础": "Git and GitHub Basics",
    "本地版本控制工具，记录文件修改历史。": "A local version-control tool that records file history.",
    "在线托管 Git repository 的平台，适合备份、协作和 PR。": "A platform for hosting Git repositories online, useful for backups, collaboration, and PRs.",
    "一次保存点，包含修改内容和说明。": "A saved checkpoint containing changes and a message.",
    "独立开发线，适合尝试功能或修 bug。": "An independent development line, useful for trying features or fixing bugs.",
    "请求把一个分支的修改合并到另一个分支，并让别人 review。": "A request to merge changes from one branch into another and have others review them.",
    "告诉 Git 哪些文件不要追踪，例如 build output、env 和 cache。": "Tells Git which files not to track, such as build output, env files, and cache.",
    "我对 Git 不熟。请解释当前 git status 和 git diff，告诉我哪些文件被修改、每个修改可能来自什么任务，以及下一步应该 commit、继续改还是回退。": "I am not familiar with Git. Please explain the current git status and git diff: which files changed, what each change may be for, and whether I should commit, keep editing, or revert.",
    "实战案例": "Practice Cases",
    "检查 functions、input validation、menu、file I/O、array/vector 和 edge cases，保持 beginner-level code style。": "Check functions, input validation, menus, file I/O, arrays/vectors, and edge cases while keeping a beginner-level code style.",
    "解释脚本流程、debug traceback、检查 CSV/数据处理流程、建议函数拆分。": "Explain script flow, debug tracebacks, check CSV/data-processing flow, and suggest function splitting.",
    "检查 HTML 语义结构、CSS layout、responsive、accessibility 和 JavaScript interaction。": "Check HTML semantics, CSS layout, responsiveness, accessibility, and JavaScript interactions.",
    "只用于授权 lab：解释命令输出、分析漏洞原理、写防御性报告，不提供非法攻击步骤。": "Only for authorized labs: explain command output, analyze vulnerability concepts, and write defensive reports without illegal attack steps.",
    "总结改动、检查测试、找 regression、生成 PR description 和 reviewer 关注点。": "Summarize changes, check tests, find regressions, and generate PR descriptions and reviewer focus points.",
    "生成 README、system overview、user guide 和 reflection outline，必须和真实功能一致。": "Generate README, system overview, user guide, and reflection outline, all matching real functionality.",
    "常见问题": "Frequently Asked Questions",
    "Codex 会不会帮我代写？": "Will Codex write my assignment for me?",
    "它有能力生成代码，但你不应该把它当代写机器。更安全的用法是让它解释、检查、debug、给提示和最小修改建议；最终代码必须由你理解、验证并负责。": "It can generate code, but you should not treat it as a ghostwriter. Safer uses are explanation, checking, debugging, hints, and minimal change suggestions. You must understand, verify, and take responsibility for the final code.",
    "Codex 和 Copilot 有什么区别？": "What is the difference between Codex and Copilot?",
    "Copilot 强在 IDE 内实时补全和局部建议；Codex 更偏 agent workflow，可以围绕一个目标读项目、改文件、运行测试并总结结果。": "Copilot is strong at real-time IDE completion and local suggestions. Codex is more agentic: it can read a project, edit files, run tests, and summarize results around a goal.",
    "初学者应该先用哪种方式？": "Which mode should beginners start with?",
    "先在 ChatGPT/Codex 里解释代码和 assignment requirement，再在 VS Code 中检查当前文件，最后学习 Git diff/commit 和 CLI/Codex App。": "Start by using ChatGPT/Codex to explain code and assignment requirements, then check current files in VS Code, and later learn Git diff/commit plus CLI/Codex App workflows.",
    "Codex 会不会改坏我的代码？": "Can Codex break my code?",
    "有可能，所以要先备份或 commit，限定修改范围，要求它先分析不修改，并在接受前逐个看 diff、运行测试。": "Yes, it can. Back up or commit first, limit modification scope, ask it to analyze before editing, and read diffs plus run tests before accepting changes.",
    "怎么让 Codex 不要写得太高级？": "How do I stop Codex from writing code that is too advanced?",
    "在 prompt 里说明课程范围，例如“只使用 loops、functions、arrays/vector，不要 class、template、lambda 或外部库”，并要求保持你的原始 coding style。": "State the course scope in the prompt, for example: only use loops, functions, arrays/vector; no classes, templates, lambdas, or external libraries. Ask it to keep your original coding style.",
    "怎么用于 C++ assignment？": "How do I use it for a C++ assignment?",
    "让它重点检查 input validation、menu loop、function responsibilities、file I/O、array/vector 越界和 edge cases。不要让它重写整体结构。": "Ask it to focus on input validation, menu loops, function responsibilities, file I/O, array/vector bounds, and edge cases. Do not let it rewrite the whole structure.",
    "怎么用于 cybersecurity lab？": "How do I use it for a cybersecurity lab?",
    "只在授权环境使用。让它解释命令输出、风险等级、证据和修复建议，并明确要求不要提供真实目标利用、凭证窃取或持久化步骤。": "Use it only in authorized environments. Ask it to explain command output, risk level, evidence, and fixes, and explicitly forbid real-target exploitation, credential theft, or persistence steps.",
    "总结与下一步学习建议": "Summary and Next Steps",
    "Codex 最重要的价值，不是让学生少学代码，而是让学生更快进入真实编程循环：理解需求、阅读代码、定位问题、做小修改、运行测试、看 diff、解释自己的选择。": "The real value of Codex is not learning less code, but entering the real programming loop faster: understand requirements, read code, locate problems, make small changes, run tests, read diffs, and explain your choices.",
    "拿一个小 assignment 或练习项目，用 Beginner 路线走一遍。": "Take a small assignment or practice project and follow the Beginner path once.",
    "每次只做一个小目标：解释、debug、检查、测试、总结。": "Work on one small goal each time: explain, debug, check, test, or summarize.",
    "学会写带背景、目标、范围、限制和输出格式的 prompt。": "Learn to write prompts with background, goal, scope, constraints, and output format.",
    "每次修改前先 checkpoint，每次修改后看 diff 并运行测试。": "Create a checkpoint before each change; after each change, read the diff and run tests.",
    "最终原则：先让 Codex 分析，再让它给最小建议，最后由你亲自理解、修改、运行和提交。": "Final principle: ask Codex to analyze first, then suggest minimal changes, and finally you personally understand, edit, run, and submit.",
    "资料整理日期：2026-05-09。Codex 的界面、模型、权限、额度和集成方式可能更新，实际使用时请以官方页面和你本机版本为准。": "Source date: 2026-05-09. Codex interfaces, models, permissions, limits, and integrations may change. Use the official pages and your local version as the source of truth.",
    "搜索：rubric、C++、GitHub...": "Search: rubric, C++, GitHub...",
    "搜索：debug、README、cybersecurity": "Search: debug, README, cybersecurity"
  }
};

const originalTextNodes = new WeakMap();
const originalAttributes = new WeakMap();

function translateValue(value, lang) {
  if (lang === "zh") return value;
  return translations.en[value] || value;
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("codex-learning-language", lang);
  root.lang = lang === "en" ? "en" : "zh-CN";
  document.title = lang === "en"
    ? "Codex Learning Hub: Learn Codex From Zero"
    : "Codex Learning Hub：从零开始学习 Codex";

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
    const original = originalTextNodes.get(node);
    const trimmed = original.trim();
    if (trimmed) {
      const translated = translateValue(trimmed, lang);
      node.nodeValue = original.replace(trimmed, translated);
    }
    node = walker.nextNode();
  }

  document.querySelectorAll("[placeholder], [aria-label], [alt], meta[name='description']").forEach((element) => {
    ["placeholder", "aria-label", "alt", "content"].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      if (!originalAttributes.has(element)) originalAttributes.set(element, {});
      const originals = originalAttributes.get(element);
      if (!originals[attribute]) originals[attribute] = element.getAttribute(attribute);
      element.setAttribute(attribute, translateValue(originals[attribute], lang));
    });
  });

  languageButton.textContent = lang === "en" ? "中文" : "English";
  updateThemeButton();
  updateProgress();
}

function updateThemeButton() {
  const isDark = root.dataset.theme === "dark";
  if (currentLang === "en") {
    themeButton.textContent = isDark ? "Light" : "Dark";
  } else {
    themeButton.textContent = isDark ? "浅色" : "深色";
  }
}

if (savedTheme) {
  root.dataset.theme = savedTheme;
}

themeButton.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("codex-learning-theme", nextTheme);
  updateThemeButton();
});

languageButton.addEventListener("click", () => {
  applyLanguage(currentLang === "en" ? "zh" : "en");
});

document.querySelectorAll(".copy-btn").forEach((button) => {
  button.addEventListener("click", async () => {
    const card = button.closest(".prompt-card");
    const text = card.querySelector("code").innerText.trim();
    const fallbackCopy = () => {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    };
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        fallbackCopy();
      }
    } catch {
      fallbackCopy();
    }
    button.textContent = currentLang === "en" ? "Copied" : "已复制";
    button.classList.add("copied");
    setTimeout(() => {
      button.textContent = currentLang === "en" ? "Copy" : "复制";
      button.classList.remove("copied");
    }, 1500);
  });
});

const promptSearch = document.querySelector("#promptSearch");
const promptCards = [...document.querySelectorAll(".prompt-card")];

promptSearch.addEventListener("input", () => {
  const query = promptSearch.value.trim().toLowerCase();
  promptCards.forEach((card) => {
    const haystack = `${card.innerText} ${card.dataset.tags}`.toLowerCase();
    card.classList.toggle("hidden-by-search", query && !haystack.includes(query));
  });
});

const siteSearch = document.querySelector("#siteSearch");
const searchableSections = [...document.querySelectorAll(".searchable")];

siteSearch.addEventListener("input", () => {
  const query = siteSearch.value.trim().toLowerCase();
  searchableSections.forEach((section) => {
    const matches = section.innerText.toLowerCase().includes(query);
    section.classList.toggle("hidden-by-search", query && !matches);
  });
});

const roadmapChecks = [...document.querySelectorAll(".roadmap-check")];
const progressLabel = document.querySelector("#progressLabel");
const progressBar = document.querySelector("#progressBar");

function updateProgress() {
  const completed = roadmapChecks.filter((box) => box.checked).length;
  const total = roadmapChecks.length;
  progressLabel.textContent = currentLang === "en"
    ? `${completed} / ${total} stages completed`
    : `已完成 ${completed} / ${total} 个阶段`;
  progressBar.style.width = `${(completed / total) * 100}%`;
}

roadmapChecks.forEach((box) => box.addEventListener("change", updateProgress));

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 640);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const previewModal = document.querySelector("[data-preview-modal]");
const previewOpen = document.querySelector("[data-preview-open]");
const previewCloseButtons = document.querySelectorAll("[data-preview-close]");

function openPreviewModal() {
  previewModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closePreviewModal() {
  previewModal.hidden = true;
  document.body.style.overflow = "";
}

previewOpen.addEventListener("click", openPreviewModal);
previewCloseButtons.forEach((button) => button.addEventListener("click", closePreviewModal));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !previewModal.hidden) closePreviewModal();
});

const tocLinks = [...document.querySelectorAll(".toc a")];
const observedSections = tocLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      tocLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-30% 0px -60% 0px", threshold: 0.01 }
);

observedSections.forEach((section) => observer.observe(section));
applyLanguage(currentLang);
