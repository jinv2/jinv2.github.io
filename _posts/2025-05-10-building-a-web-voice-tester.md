---
layout: post # 请确认这是你博客主题中定义的文章布局名，如 default, page 等
title: "制作一个纯前端的在线英语语音交互测试页面（客户端TTS演示）"
date:   2025-05-10 10:00:00 +0800 # 已更新为与文件名匹配的未来日期
categories: [web, javascript, project, tutorial] # 你可以自定义分类
tags: [javascript, web speech api, tts, frontend, demo, english tutor, web development, tutorial] # 你可以自定义标签
pin: false # 如果你的主题支持且你想置顶（即使是未来文章），可以设为 true
---

大家好！最近我一直在探索如何制作一个模拟真人英语对话的软件。在整个探索过程中，我从最初的Python命令行版本，到考虑微信小程序等多种平台，最终为了快速验证一个核心的语音输出功能——文本转语音（TTS），并希望它能完全在线、无需API Key、纯前端实现，我动手制作了一个简单的网页版测试工具。

今天，我想和大家分享一下这个小工具的制作过程、核心功能以及技术实现。

## 项目初衷与目标

最初的目标是做一个可以用来练习英语听力的对话软件。核心需求非常明确：用户通过语音用英语提问，软件能用英语语音进行回答。在深入研究了各种平台的实现复杂性后，我决定先将精力集中在核心技术点的验证上。其中，**AI的语音回复**无疑是一个关键环节。

为了尽可能简化开发流程，避免复杂的后端服务和API Key管理，我萌生了利用浏览器自身能力来实现文本到语音转换的想法。

**这个在线测试页面的主要目标是：**

1.  **完全在线访问：** 用户可以直接通过浏览器访问和使用，无需安装任何软件。
2.  **纯前端TTS实现：** 利用现代浏览器内置的 Web Speech API 中的 `SpeechSynthesis` 接口，实现文本到语音的转换，从而摆脱对外部服务和API Key的依赖。
3.  **模拟交互流程：** 虽然真正的语音识别（ASR）和智能AI回复（NLU）在这个演示版本中是模拟的，但它能够完整地展示“用户输入 -> AI处理 -> AI语音回复”这一核心交互流程的概念。
4.  **代码简洁易懂：** 采用基础的 HTML, CSS, 和 JavaScript 编写，方便理解和后续可能的扩展。
5.  **便捷部署：** 可以轻松部署在像 GitHub Pages 这样的免费静态网站托管平台上。

## 在线演示与源码

欢迎体验这个在线测试页面，并查看其源码：

*   **在线演示地址：** [https://jinv2.github.io/english-ai-tutor-cli/web_tester_client_tts.html](https://jinv2.github.io/english-ai-tutor-cli/web_tester_client_tts.html)
*   **项目源码 (位于 `english-ai-tutor-cli` 仓库中)：** [https://github.com/jinv2/english-ai-tutor-cli/blob/main/web_tester_client_tts.html](https://github.com/jinv2/english-ai-tutor-cli/blob/main/web_tester_client_tts.html)

## 功能简介

这个小巧的网页工具能让你体验以下功能：

1.  **上传音频文件：** 用户可以上传一个本地的音频文件。请注意，这一步主要是为了模拟一个完整的交互流程，当前版本的页面并**不会**真正分析这个音频文件的内容。
2.  **查看模拟的“语音识别”文本：** 点击“Process Audio”按钮后，页面会显示一段预设的、模拟的语音识别结果。
3.  **查看模拟的“AI回复”文本：** 紧接着，页面会根据模拟的识别结果，显示一段预设的、模拟的AI回复文本。
4.  **收听AI的语音回复：** 这是核心功能！浏览器会自动使用其内置的TTS引擎朗读这段AI回复文本，让你能直观地听到效果。
5.  **选择不同的语音（如果可用）：** 如果你的浏览器和操作系统提供了多种语音选项（特别是英文语音），你可以在页面的下拉框中进行选择。选择后，可以点击“Speak AI Response”按钮来试听不同音色的语音效果。

![在线英语语音测试页面截图](/assets/images/web-voice-tester-screenshot.png)
*上图：在线英语语音测试页面的界面*

## 技术实现核心：Web Speech API 之 `SpeechSynthesis`

实现纯前端文本转语音（TTS）的关键技术在于现代浏览器提供的 Web Speech API，具体来说是其中的 `SpeechSynthesis` 接口。

以下是实现TTS功能的核心JavaScript代码片段：

```javascript
// 获取 SpeechSynthesis 接口
let speechSynthesis = window.speechSynthesis;
// 用于存储可用语音的数组
let voices = [];
// 语音选择的下拉列表元素
const voiceSelect = document.getElementById('voiceSelect'); // 假设HTML中存在此元素

// 填充语音列表的函数
function populateVoiceList() {
    if(typeof speechSynthesis === 'undefined') {
        // 如果浏览器不支持，给出提示
        console.warn('Browser does not support text-to-speech.');
        return;
    }
    voices = speechSynthesis.getVoices(); // 获取所有可用语音
    if (voiceSelect) voiceSelect.innerHTML = ''; // 清空之前的选项

    // 筛选英文语音，或列出所有语音
    const englishVoices = voices.filter(voice => voice.lang.toLowerCase().startsWith('en'));
    const voicesToList = englishVoices.length > 0 ? englishVoices : voices;

    voicesToList.forEach(voice => {
        if (voiceSelect) {
            const option = document.createElement('option');
            option.textContent = `${voice.name} (${voice.lang})`;
            // 标记默认语音
            if(voice.default && voice.lang.toLowerCase().startsWith('en')) {
                option.selected = true;
            }
            option.setAttribute('data-lang', voice.lang);
            option.setAttribute('data-name', voice.name);
            voiceSelect.appendChild(option);
        }
    });
}

// 监听语音列表变化事件，或在页面加载时直接调用
if (typeof speechSynthesis !== 'undefined') {
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }
    // 某些浏览器可能不会立即触发 onvoiceschanged，或者在初始加载时 voices 列表为空
    // 所以最好在页面加载后也尝试调用一次，或设置一个小的延时
    setTimeout(populateVoiceList, 100); // 确保列表被填充
}

// 朗读指定文本的函数
function speakText(textToSpeak) {
    if (!speechSynthesis || !textToSpeak) {
        console.error("Speech synthesis not available or no text to speak.");
        return;
    }
    // 如果当前正在朗读，则先取消，避免语音重叠
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
        // 短暂延迟后再开始新的朗读，提高某些浏览器的稳定性
        setTimeout(() => startSpeakingActual(textToSpeak), 100);
        return;
    }
    startSpeakingActual(textToSpeak);
}

function startSpeakingActual(textToSpeak) {
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    if (voiceSelect && voiceSelect.selectedOptions.length > 0) {
        const selectedOption = voiceSelect.selectedOptions[0];
        const selectedVoiceName = selectedOption ? selectedOption.getAttribute('data-name') : null;

        // 设置选定的语音
        if (selectedVoiceName) {
            utterance.voice = voices.find(voice => voice.name === selectedVoiceName);
        }
    } else {
        // 如果未选择或下拉框不存在，尝试使用默认的英文语音
        let defaultEnglishVoice = voices.find(voice => voice.lang.toLowerCase().startsWith('en') && voice.default);
        if (!defaultEnglishVoice) { // 若无默认英文，则使用第一个可用的英文语音
            defaultEnglishVoice = voices.find(voice => voice.lang.toLowerCase().startsWith('en'));
        }
        if (defaultEnglishVoice) utterance.voice = defaultEnglishVoice;
        // 若仍未找到英文语音，浏览器将使用其全局默认语音
    }


    // 可以设置音高、速率、音量等参数
    utterance.pitch = 1;    // 范围 0-2
    utterance.rate = 1;     // 范围 0.1-10
    utterance.volume = 1;   // 范围 0-1

    // 监听朗读结束和错误事件
    utterance.onend = () => { console.log("Speech finished."); };
    utterance.onerror = (event) => { console.error("SpeechSynthesisUtterance.onerror", event); };

    speechSynthesis.speak(utterance); // 开始朗读
}

// 使用示例：在模拟AI生成回复文本后调用
// let currentAiResponseText = "This is the AI's response text.";
// speakText(currentAiResponseText);
