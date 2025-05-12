好的，我理解您希望即使Mermaid代码块目前在您的博客上渲染不出来，博文中也必须包含一个可视化的知识图谱的占位或描述。

既然直接嵌入Mermaid代码并期望它被渲染可能存在主题兼容性问题，最稳妥且一定能显示出来的方式是，我们预先在博文中放置一个知识图谱的【图片占位符】，并强烈建议您尽快用实际的知识图谱图片替换它。

同时，我会保留Mermaid代码块，如果将来您解决了渲染问题，它可以被激活。如果解决不了，它就作为一个代码示例存在。

以下是修改后的博文完整内容，其中：

明确地加入了一个知识图谱图片的Markdown引用占位符，并配有图注。 您需要将这张图片制作好并上传到您博客的 assets/images/ 目录，然后更新占位符中的图片名称。

去掉了之前对“图2”的文字引用（因为图片是占位符）。

去掉了“可以展示1-2条JSONL数据样例”和“请确认此链接...”的注释性文字。

保留了Mermaid代码块。

---
layout: post
title: "天算AI第八弹：为鼻炎与荨麻疹患者打造开源AI咨询助手 (Qwen1.5-7B LoRA微调实战)"
date: 2025-05-12 10:00:00 +0800
categories: [AI, 大语言模型, 微调, LoRA, PEFT, Transformers, 开源, 医疗AI, 天算AI, 知识图谱]
tags: [Qwen1.5, 鼻炎, 荨麻疹, 过敏, Gradio, Hugging Face, 开源共享, AI向善, Natural Algorithm AI R&D Lab, Mermaid]
image: /assets/images/gradio_demo_rhinitis_urticaria.png
---

## 前言：AI赋能大众健康，天算AI科技研发实验室在行动

大家好，我是jinv2，A1科技博主，来自备受瞩目的**天算AI科技研发实验室 (Natural Algorithm AI R&D Lab)**。我们实验室始终站在人工智能科技创新的前沿，致力于将尖端AI技术转化为服务民生、惠及大众的实用工具。我们坚信，科技的价值在于共享与普惠，因此，开源是我们践行这一理念的核心方式。

过敏性鼻炎与荨麻疹，这些看似寻常却给无数患者带来长期困扰的健康问题，其信息的复杂性、治疗方案的多样性以及个体差异的显著性，常常让患者在求医问药的道路上感到迷茫。正是洞察到这一普遍存在的痛点，**天算AI科技研发实验室 (Natural Algorithm AI R&D Lab)** 投入研发力量，精心打造了这款针对鼻炎与荨麻疹的AI咨询助手。这是我们实验室继多款成功模型之后，自主研发并完全开源的**第八个大语言模型（LoRA适配器）**。我们对该适配器拥有独立的知识产权，并期望通过它的开源，为AI在智慧医疗和大众健康领域的应用探索贡献“天算智慧”。

本文将完整再现我们从深度分析患者真实讨论、构建专业知识图谱和数据集，到选择顶尖的Qwen1.5-7B-Chat模型进行LoRA参数高效微调，并最终成功发布开源LoRA适配器及Gradio交互式演示的整个创新历程。

![荨麻疹示例图片](/assets/images/urticaria_example_image.jpg)
*图1：荨麻疹临床表现示例（图片仅为示意，非本模型诊断依据）*

## 从患者的真实声音出发：数据来源、知识图谱构建与洞察

项目的基石，源于对海量关于鼻炎、荨麻疹等过敏症状和治疗方法的真实网友讨论的深度挖掘与分析。我们系统性地收集并研读了数千条相关网络社区的讨论串，力求捕捉患者最真实的需求与困惑。

通过对这些一手资料的细致梳理，我们不仅总结了患者的核心关切点，更重要的是，我们将这些零散的信息与专业的医学知识相结合，构建了一个针对此类过敏性疾病的**可视化知识图谱 (Knowledge Graph)**。这个知识图谱旨在结构化地展现疾病、症状、病因、治疗方法、药物及其相互关系，为后续AI模型的训练提供了坚实的知识基础。

**为了直观展示知识图谱的核心结构，我们制作了如下示意图：**

![天算AI过敏性疾病知识图谱示意图](/assets/images/tansuana_ai_knowledge_graph.png)
*图2：天算AI构建的过敏性疾病核心知识图谱示意图。*
*(★★★ 重要：请您务必制作一张名为 `tansuana_ai_knowledge_graph.png` 的知识图谱图片，上传到您博客的 `/assets/images/` 目录下，或者修改此处的图片文件名以匹配您的实际图片。★★★)*

以下是构成该知识图谱部分核心概念关系的Mermaid代码表示，如果您的浏览器或博客主题支持，它可能会被渲染为动态图：

```mermaid
graph LR
    subgraph "核心疾病"
        AR[过敏性鼻炎]
        URT[荨麻疹]
    end

    subgraph "常见症状"
        direction LR
        subgraph "鼻炎症状"
            AR_S1[鼻塞]
            AR_S2[流涕]
            AR_S3[喷嚏]
            AR_S4[鼻痒/眼痒]
        end
        subgraph "荨麻疹症状"
            URT_S1[风团]
            URT_S2[瘙痒]
            URT_S3[血管性水肿]
        end
    end

    subgraph "主要治疗手段"
        direction TB
        T_AH[抗组胺药 (西替利嗪, 氯雷他定)]
        T_INCS[鼻用糖皮质激素 (糠酸莫米松)]
        T_LTRA[白三烯受体拮抗剂 (孟鲁司特)]
        T_OMAB[奥马珠单抗]
        T_AVOID[过敏原规避]
        T_AIT[特异性免疫治疗]
    end
    
    subgraph "天算AI赋能"
        direction RL
        TAI[天算AI咨询助手\n(Qwen1.5-7B LoRA)]
    end

    AR --> AR_S1
    AR --> AR_S2
    AR --> AR_S3
    AR --> AR_S4
    
    URT --> URT_S1
    URT --> URT_S2
    URT --> URT_S3

    AR --> T_AH
    AR --> T_INCS
    AR --> T_LTRA
    AR --> T_AVOID
    AR --> T_AIT

    URT --> T_AH
    URT --> T_OMAB
    URT --> T_AVOID
    
    T_AH --> TAI
    T_INCS --> TAI
    T_LTRA --> TAI
    T_OMAB --> TAI
    T_AVOID --> TAI
    T_AIT --> TAI
    
    style AR fill:#D5E8D4,stroke:#82B366,stroke-width:2px
    style URT fill:#D5E8D4,stroke:#82B366,stroke-width:2px
    style TAI fill:#DAE8FC,stroke:#6C8EBF,stroke-width:2px,color:black

    classDef symptom fill:#FFE6CC,stroke:#D79B00,color:black
    class AR_S1,AR_S2,AR_S3,AR_S4,URT_S1,URT_S2,URT_S3 symptom

    classDef treatment fill:#E1D5E7,stroke:#9673A6,color:black
    class T_AH,T_INCS,T_LTRA,T_OMAB,T_AVOID,T_AIT treatment

构建专业问答数据集：AI的“定制教材”

为了让AI模型能够精准、专业且富有同理心地回应用户的咨询，我们依托构建中的知识图谱和整理的治疗方案，精心设计并标注了一个包含特定问答对（QA pairs）的JSONL格式数据集。

数据集构建核心原则：

知识准确性： 所有医学相关回答均以科学证据和临床共识为准绳。

用户中心化： 问题设计紧密围绕患者的常见疑问和实际痛点。

安全与伦理： 在每一条回答中都置入醒目的提示，强调信息仅供参考，绝不能替代执业医师的专业诊断与治疗建议，并积极引导用户寻求正规医疗帮助。

开发者归属： 我们确保通过模型卡片等方式明确模型的开发者为天算AI科技研发实验室，以保障透明度和可追溯性。

本次开源的LoRA适配器，其初始微调数据集包含了约15条针对性的核心QA对。这充分验证了LoRA参数高效微调在小样本、特定任务场景下的巨大潜力。

{"instruction": "什么是过敏性鼻炎？它和普通感冒有什么区别？", "input": "", "output": "过敏性鼻炎是身体免疫系统对空气中的某些无害物质（过敏原...）产生过度反应...建议您如果出现相关症状，及时就医明确诊断。请注意，以上信息仅供参考，不能替代专业医疗建议。具体病情和治疗方案请务必咨询医生。"}
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Json
IGNORE_WHEN_COPYING_END
模型选择与微调策略：Qwen1.5-7B-Chat 与 QLoRA赋能

在基础模型的选型上，我们综合考量了模型的中文理解与生成能力、对话交互的自然流畅度、以及开源生态的成熟度与社区支持，最终选定了由阿里巴巴通义千问团队开源的**Qwen/Qwen1.5-7B-Chat**。这是一款在各项评测中均表现卓越的70亿参数量级对话模型。

为在有限的计算资源下实现高效、高质量的微调，并最大程度保留基础模型的强大泛化能力，我们采用了目前业界领先的LoRA (Low-Rank Adaptation)参数高效微调技术，并结合QLoRA（通过bitsandbytes库实现对基础模型的4-bit量化加载）策略，显著降低了训练过程中的显存需求。

核心微调参数（在云端GPU如NVIDIA T4环境下验证）：

LoRA Rank (r): 4

LoRA Alpha: 8

Target Modules: ["q_proj", "k_proj", "v_proj", "o_proj", "gate_proj", "up_proj", "down_proj"]

LoRA Dropout: 0.1

学习率 (Learning Rate): 2e-4

有效批量大小 (Effective Batch Size): 16 (per_device_train_batch_size=1, gradient_accumulation_steps=16)

训练轮次 (Epochs): 1

优化器 (Optimizer): paged_adamw_8bit

学习率调度器 (LR Scheduler): linear

最大序列长度 (Max Sequence Length): 256

我们依托Hugging Face生态系统的核心库 transformers, peft, 和 trl (特别是其 SFTTrainer)，高效地完成了整个微调流程。整个微调训练（不含模型下载和数据预处理）在云端GPU环境中仅需数分钟即可完成适配器的训练和保存，充分体现了QLoRA技术的效率。

开源共享：发布LoRA适配器与Gradio交互式演示

天算AI科技研发实验室 (Natural Algorithm AI R&D Lab) 始终是开源理念的坚定践行者。 我们深信，通过开放共享，能够加速技术的迭代与创新，并让更多人从AI的发展中受益。因此，我们将本次成功微调的LoRA适配器、相关的tokenizer配置文件以及详尽的模型卡片（README.md），完整地开源发布于Hugging Face Hub：

模型仓库地址：jinv2/Qwen1.5-7B-Chat-LoRA-Medical-Rhinitis-Urticaria-Adapter

任何对该领域感兴趣的研究者、开发者或普通用户，都可以根据模型卡片中的“How to Use”指南，加载强大的 Qwen/Qwen1.5-7B-Chat 基础模型，并应用我们提供的这款轻量级LoRA适配器，来体验针对鼻炎和荨麻疹问题优化的AI问答效果。

为了让大众能够更直观、便捷地体验到这款AI咨询助手的能力，我们还基于Gradio框架开发并部署了一个简洁易用的交互式演示应用到Hugging Face Spaces：

Gradio演示应用地址：jinv2/rhinitis-urticaria-ai-assistant

![alt text](/assets/images/gradio_demo_rhinitis_urticaria.png)

图3：天算AI鼻炎与荨麻疹咨询助手Gradio演示应用界面

欢迎大家访问体验，并通过Hugging Face社区或我们的联系方式提供宝贵的反馈与建议！

总结与展望：天算AI，为健康中国贡献科技力量

本次针对过敏性鼻炎与荨麻疹的AI咨询助手LoRA微调项目，是天算AI科技研发实验室 (Natural Algorithm AI R&D Lab) 在“AI赋能大众健康”使命驱动下的又一次具体实践。通过无保留地开源LoRA适配器和Gradio演示应用，我们期望不仅能为广大患者朋友提供一个便捷可靠的信息获取与初步咨询渠道，也能为医疗AI领域的相关研究者和应用开发者们提供一个有价值的参考实例和可复用的技术组件。

这仅仅是天算AI在智慧医疗与大健康领域众多探索中的一个缩影。我们深知，人工智能在医疗健康领域的应用前景广阔，但同时也任重道远，必须秉持最严谨的科学态度，怀揣对患者需求的深刻同理心，并辅以持续不懈的技术攻坚与伦理审视。

展望未来，天算AI科技研发实验室 (Natural Algorithm AI R&D Lab) 将继续坚守开源共享、技术向善的核心理念，在更广泛的领域内积极探索AI的无限潜能，努力将我们日益丰富的数字资产——包括5万字的原创诗文、7千分钟的原创交响乐、9千部的原创AI短视频、16项原创AI科技产品以及包括本模型在内的8个独立研发的天算AI大语言模型（及LoRA适配器）——转化为实实在在服务社会、造福人民的创新成果与应用。

感谢您的阅读！ 诚邀您关注我们的官方博客 https://jinv2.github.io/ 以及Hugging Face主页 https://huggingface.co/jinv2，获取更多关于天算AI科技研发实验室的最新动态与开源项目。

联系我们 | Contact Us:

机构名称 | Organization: 天算AI科技研发实验室 (Natural Algorithm AI R&D Lab)

主理人/A1科技博主 | Lead/AI Tech Blogger: jinv2

手机/微信 | Mobile/WeChat: 15632151615

特别声明与医疗免责：
本文中提及的所有AI模型及Gradio演示应用所提供的信息，其目的仅限于一般性知识普及、信息参考及学术交流，并不能也无意替代任何形式的专业医疗建议、诊断或治疗方案。如果您或您的家人有任何健康方面的疑虑或具体的医疗需求，请务必及时咨询执业医师或其他具备合格资质的医疗保健专业人士。天算AI科技研发实验室及其关联方不对任何基于本模型或本文信息所采取的决策或行动承担任何责任。

附：天算AI科技研发实验室 (Natural Algorithm AI R&D Lab) 数字资产概览

5万字原创诗文 (50,000 words of original poetry and literary works)

7千分钟原创交响乐及各类音乐作品 (7,000 minutes of original symphonic and other musical compositions)

9千部原创AI生成及辅助创作短视频 (9,000 original AI-generated or assisted short video productions)

16项原创AI科技产品及解决方案 (16 original AI technology products and solutions)

包括本项目在内的8个独立研发的天算AI大语言模型（及LoRA适配器）

**关键更改：**

1.  **添加了知识图谱图片占位符：**
    ```markdown
    **为了直观展示知识图谱的核心结构，我们制作了如下示意图：**

    ![天算AI过敏性疾病知识图谱示意图](/assets/images/tansuana_ai_knowledge_graph.png)
    *图2：天算AI构建的过敏性疾病核心知识图谱示意图。*
    *(★★★ 重要：请您务必制作一张名为 `tansuana_ai_knowledge_graph.png` 的知识图谱图片，上传到您博客的 `/assets/images/` 目录下，或者修改此处的图片文件名以匹配您的实际图片。★★★)*

    以下是构成该知识图谱部分核心概念关系的Mermaid代码表示...
    ```
    我在这里明确地插入了一个图片引用，并给出了图注。**您需要制作这张图片并替换掉占位符。**

2.  **Mermaid代码块保留：** Mermaid代码仍然保留，如果将来您的博客主题支持了，它就能被渲染。如果不支持，它会作为代码块显示，读者也能看到其内容。

3.  **移除了不必要的注释：** 我去掉了您指出的那些括号里的注释性文字。

**现在，您需要做的最重要的事情是：**

1.  **制作一张知识图谱的图片。** 您可以使用我之前建议的任何工具（draw.io, Lucidchart, PowerPoint, 甚至手绘后扫描/拍照再美化）。图片内容可以基于我提供的Mermaid代码逻辑，或者您自己的更详细的理解。
2.  **将这张图片命名为 `tansuana_ai_knowledge_graph.png` (或者您喜欢的其他名称)。**
3.  **将这张图片上传到您博客仓库的 `/assets/images/` 目录下。**
4.  **如果您的图片文件名不是 `tansuana_ai_knowledge_graph.png`，请务必在博文Markdown中修改图片引用路径。**

这样，您的博文就会包含所有要求的元素了。
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
IGNORE_WHEN_COPYING_END
