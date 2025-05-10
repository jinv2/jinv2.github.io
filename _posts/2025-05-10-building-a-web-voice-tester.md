---
layout: post # 或者你博客主题中定义的文章布局名，如 default, page 等
title: "制作一个纯前端的在线英语语音交互测试页面（客户端TTS演示）"
date:   2023-10-27 10:00:00 +0800 # 修改为当前日期和时间
categories: web javascript project # 你可以自定义分类
tags: [javascript, web speech api, tts, frontend, demo, english tutor] # 你可以自定义标签
pin: true # 如果你的主题支持，这可以让博文置顶显示在最新博文列表
---

大家好！最近我一直在探索如何制作一个模拟真人英语对话的软件。在整个探索过程中，我先尝试了Python命令行版本，然后考虑了微信小程序等平台。最终，为了快速验证一个核心的语音输出功能——文本转语音（TTS），并且希望完全在线、无需API Key、纯前端实现，我制作了一个简单的网页版测试工具。

今天，我想和大家分享一下这个小工具的制作过程和它的核心功能。

## 项目初衷与目标

最初的目标是做一个可以练习英语听力的对话软件。核心需求是：用户用英语提问（语音），软件用英语回答（语音）。在考虑了各种平台的复杂性后，我决定先聚焦于核心技术点的验证。其中，**AI的语音回复**是一个关键环节。

为了避免复杂的后端和API Key管理，我想看看能否直接利用浏览器自身的能力来实现文本到语音的转换。

**这个在线测试页面的主要目标：**

1.  **完全在线：** 用户可以直接通过浏览器访问和使用。
2.  **纯前端TTS：** 利用浏览器的 Web Speech API (`SpeechSynthesis`) 实现文本转语音，无需外部服务和API Key。
3.  **模拟交互流程：** 虽然真正的语音识别（ASR）和智能AI回复（NLU）在这个版本中是模拟的，但它能完整展示“接收用户输入 -> AI处理 -> AI语音回复”的流程概念。
4.  **代码简洁，易于理解和部署：** 使用基础的 HTML, CSS, 和 JavaScript。

## 在线演示与源码

你可以通过以下链接访问这个在线测试页面：

*   **在线演示地址：** [https://jinv2.github.io/english-ai-tutor-cli/web_tester_client_tts.html](https://jinv2.github.io/english-ai-tutor-cli/web_tester_client_tts.html)
*   **项目源码 (在 `english-ai-tutor-cli` 仓库中)：** [https://github.com/jinv2/english-ai-tutor-cli/blob/main/web_tester_client_tts.html](https://github.com/jinv2/english-ai-tutor-cli/blob/main/web_tester_client_tts.html)

## 功能简介

这个页面允许你：

1.  **上传一个（任意）音频文件：** 这一步主要是为了模拟一个完整的交互流程，实际上页面并不会真的去分析这个音频文件的内容。
2.  **查看模拟的“语音识别”文本：** 点击“Process Audio”后，页面会显示一段预设的、模拟的语音识别结果。
3.  **查看模拟的“AI回复”文本：** 接着，页面会显示一段预设的、模拟的AI对上述识别结果的回复。
4.  **收听AI的语音回复：** 最核心的功能——浏览器会自动使用其内置的TTS引擎朗读这段AI回复文本。
5.  **选择不同的语音：** 如果你的浏览器和操作系统提供了多种语音选项（特别是英文语音），你可以在下拉框中选择，并点击“Speak AI Response”按钮来试听不同音色的效果。

![测试页面截图](https://i.imgur.com/your_screenshot_url.png)  <!-- 替换为你页面的实际截图URL -->

## 技术实现核心：Web Speech API 之 SpeechSynthesis

实现纯前端TTS的关键在于 Web Speech API 中的 `SpeechSynthesis` 接口。

核心JavaScript代码片段如下：

```javascript
// 获取可用的语音列表
let speechSynthesis = window.speechSynthesis;
let voices = [];

function populateVoiceList() {
    voices = speechSynthesis.getVoices();
    // ... (此处省略填充下拉框的代码)
}

if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}
populateVoiceList(); // 初始化调用

// 朗读文本的函数
function speakText(text) {
    if (!speechSynthesis || !text) return;
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel(); // 如果正在朗读，先取消
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const selectedOption = voiceSelect.selectedOptions[0]; // voiceSelect是语音选择下拉框
    const selectedVoiceName = selectedOption ? selectedOption.getAttribute('data-name') : null;

    if (selectedVoiceName) {
        utterance.voice = voices.find(voice => voice.name === selectedVoiceName);
    }
    // ... (此处省略设置音高、速率和错误处理的代码)

    speechSynthesis.speak(utterance);
}

// 在模拟AI生成回复后调用
// currentAiResponseText = "这是AI的回复文本";
// speakText(currentAiResponseText);
