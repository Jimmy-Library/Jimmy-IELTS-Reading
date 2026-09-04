/**
 * Onboarding Tour - 首次引导流程组件
 * 用于引导新用户了解系统各项功能
 * 兼容 file:// 协议
 */
(function (global) {
  'use strict';

  // 存储键名
  const STORAGE_KEYS = {
    COMPLETED: 'onboardingCompleted_v2',
    CURRENT_STEP: 'onboardingStep_v2',
    LAST_SHOWN: 'onboardingLastShown_v2'
  };

  // 详细使用向导：从组题、套题、单篇练习，到记录导出与个性化设置。
  const DEFAULT_STEPS = [
    {
      id: 'welcome', target: null, position: 'center', activateView: 'overview',
      title: '👋 欢迎来到 Jimmy 的阅读题库',
      content: '向导会在真实页面中带你认识完整流程，但不会自动开始考试或修改答案。你可以点击“开始向导”逐步查看，也可以点击“暂时跳过”；以后随时可从网页抬头下方重新打开。',
      showSkip: true, showPrev: false, nextText: '开始向导'
    },
    {
      id: 'custom-suite-builder', target: '#category-overview [data-action="start-suite-mode"]', position: 'bottom', activateView: 'overview', waitForElement: true,
      title: '1　自选组题：组合 P1、P2、P3',
      content: '<strong>入口：</strong>首页“开启套题模式”。<br><strong>操作：</strong>抽题范围选择“自选套题（P1/P2/P3）”，再分别选择一篇 P1、P2、P3，最后在浮动清单确认。<br><strong>提示：</strong>流程模式可选择模拟、经典或驻足模式。',
      showSkip: true, showPrev: true, nextText: '了解固定套题', lockScroll: true, lockPointer: true, disableHighlightPointer: true
    },
    {
      id: 'suite-catalog', target: '#suite-list', position: 'top', activateView: 'suite', waitForElement: true,
      title: '2　套题模式：每日推荐与固定套题',
      content: '<strong>每日推荐：</strong>页面最上方会根据高频题和练习记录，优先组合一套未做过的 P1、P2、P3；同一天的推荐保持不变。<br><strong>固定套题：</strong>下方每张卡片列出三篇文章、总题数和最好成绩。<br><strong>断点续做：</strong>有未完成记录时，可选择“继续做题”“重新做题”或“删除记录”。',
      showSkip: true, showPrev: true, nextText: '查看开始方式', lockScroll: true, lockPointer: true, disableHighlightPointer: true
    },
    {
      id: 'suite-start', target: '#suite-list .suite-card__start', position: 'left', activateView: 'suite', waitForElement: true,
      title: '3　开始套题与计时方式',
      content: '<strong>操作：</strong>点击套题卡片的“开始”，再选择自由模式或 60 分钟模考模式。<br><strong>保存：</strong>P1、P2 可先提交当前篇，退出后仍能继续下一篇。<br><strong>完成：</strong>三篇结束后统一查看成绩、回顾并导出 PDF。',
      showSkip: true, showPrev: true, nextText: '了解单篇练习', lockScroll: true, lockPointer: true, disableHighlightPointer: true
    },
    {
      id: 'single-practice-search', target: '#browse-view .search-row', position: 'bottom', activateView: 'browse', waitForElement: true,
      title: '4　单篇练习：搜索与筛选',
      content: '<strong>入口：</strong>顶部导航“题库浏览”。<br><strong>查找：</strong>输入文章中英文关键词，或按 P1/P2/P3、月份新增、题型、出题频率筛选。<br><strong>排序：</strong>需要重点练习时，可让高频题优先显示。',
      showSkip: true, showPrev: true, nextText: '查看题目卡片', lockScroll: true, lockPointer: true, disableHighlightPointer: true
    },
    {
      id: 'single-practice-card', target: '#exam-list-container', position: 'top', activateView: 'browse', waitForElement: true,
      title: '5　打开文章并完成单篇练习',
      content: '<strong>操作：</strong>在文章卡片点击“开始练习”。<br><strong>做题：</strong>可计时、标记题号、高亮原文和添加笔记；Reset 清空重做，Submit 提交。<br><strong>提交后：</strong>可继续回顾解析、高亮内容，并从底部导出本次 PDF。',
      showSkip: true, showPrev: true, nextText: '查看练习记录', lockScroll: true, lockPointer: true, disableHighlightPointer: true
    },
    {
      id: 'practice-history', target: '#history-list', position: 'top', activateView: 'practice', waitForElement: true,
      title: '6　练习记录与继续做题',
      content: '<strong>入口：</strong>顶部导航“练习记录”。<br><strong>查看：</strong>点击一条记录可查看用时、正确率、逐题答案、原文标记和回顾内容。<br><strong>继续：</strong>未完成的单篇或套题可从记录中接着做。',
      showSkip: true, showPrev: true, nextText: '学习导出 PDF', lockScroll: true, lockPointer: true, disableHighlightPointer: true
    },
    {
      id: 'practice-pdf', target: '#export-practice-pdf-btn', position: 'bottom', activateView: 'practice', waitForElement: true,
      title: '7　导出练习记录 PDF',
      content: '<strong>操作：</strong>在练习记录页点击“导出 PDF”，勾选要导出的记录后确认。<br><strong>内容：</strong>PDF 包含成绩、答案、回顾信息和已保存标记。<br><strong>另一入口：</strong>单篇做题页底部也可直接导出当前练习。',
      showSkip: true, showPrev: true, nextText: '了解数据备份', lockScroll: true, lockPointer: true, disableHighlightPointer: true
    },
    {
      id: 'data-backup', target: '.data-management-panel', position: 'top', activateView: 'settings', waitForElement: true,
      title: '8　备份、迁移和恢复记录',
      content: '<strong>入口：</strong>设置页“数据管理”。<br><strong>区别：</strong>“创建备份”保存本机快照；“导出数据”下载完整记录文件；“导入数据”用于换电脑或升级后恢复。<br><strong>建议：</strong>定期导出一份文件。',
      showSkip: true, showPrev: true, nextText: '设置页面皮肤', lockScroll: true, lockPointer: true, disableHighlightPointer: true
    },
    {
      id: 'skin-handle', target: '#image-skin-panel .skin-handle', position: 'right', activateView: 'overview', waitForElement: true,
      title: '9　打开皮肤工作台',
      content: '<strong>现在操作：</strong>点击左下角调色板按钮，打开皮肤工作台后向导会自动进入下一步。<br><strong>说明：</strong>皮肤只改变首页和题库浏览外观，阅读题目内部始终保持标准机考样式。',
      showSkip: true, showPrev: true, hideNext: true, waitForClick: true, lockScroll: true
    },
    {
      id: 'skin-gallery', target: '#image-skin-panel .skin-grid', position: 'right', activateView: 'overview', waitForElement: true, action: 'openSkinPanel',
      title: '10　实时切换图片皮肤',
      content: '<strong>操作：</strong>点击任意皮肤卡片即可实时切换。<br><strong>变化：</strong>背景、抬头、首页按钮和题库卡片配色会同步更新。<br><strong>性能：</strong>雨滴、飘雪等氛围动画可独立关闭。',
      showSkip: true, showPrev: true, nextText: '了解自定义皮肤', lockScroll: true, lockPointer: true, disableHighlightPointer: true
    },
    {
      id: 'custom-skin', target: '#image-skin-panel .custom-skin-editor', position: 'right', activateView: 'overview', waitForElement: true, action: 'openCustomSkinEditor',
      title: '11　自定义图片、颜色、字体与形状',
      content: '<strong>操作：</strong>展开“自定义”，上传背景后调整缩放、横向/纵向位置和透明度。<br><strong>设计：</strong>可采用推荐色系，也可自行选择颜色、字体和 UI 形状。<br><strong>保存：</strong>可另存为新名称，或更新已保存皮肤；设置保存在本机。',
      showSkip: true, showPrev: true, nextText: '设置鼠标图标', lockScroll: true, lockPointer: true, disableHighlightPointer: true
    },
    {
      id: 'pointer-style', target: '#image-skin-panel .skin-pointer-workbench', position: 'right', activateView: 'overview', waitForElement: true, action: 'openSkinPanel',
      title: '12　鼠标图标与自定义图片',
      content: '<strong>操作：</strong>先打开“鼠标图标”，再选择柔光、星屑、泡泡、霓虹或猫咪。<br><strong>自定义：</strong>可上传自己的透明图片，并用大小滑块实时调整。<br><strong>说明：</strong>鼠标图标与轨迹动画可分开使用。',
      showSkip: true, showPrev: true, nextText: '了解轨迹动画', lockScroll: true, lockPointer: true, disableHighlightPointer: true
    },
    {
      id: 'pointer-trail', target: '#image-skin-panel [data-pointer-trail-toggle]', position: 'right', activateView: 'overview', waitForElement: true, action: 'openSkinPanel',
      title: '13　轨迹动画与性能提示',
      content: '<strong>操作：</strong>单独打开“轨迹动画”，选择喜欢的轨迹样式。<br><strong>提示：</strong>首次开启会确认可能造成卡顿；低性能设备、多标签页或省电模式下建议保持关闭。<br><strong>关闭后：</strong>动画画布会立即停止并释放资源。',
      showSkip: true, showPrev: true, nextText: '完成向导', lockScroll: true, lockPointer: true, disableHighlightPointer: true
    },
    {
      id: 'completion', target: null, position: 'center', activateView: 'overview', action: 'closeSkinPanel',
      title: '🎉 使用向导完成',
      content: '完整流程已经介绍完毕：自选组题 → 固定套题 → 单篇练习 → 练习回顾与 PDF → 数据备份 → 皮肤与鼠标设置。点击“开始练习”返回首页；以后可随时点击网页抬头下方的“使用向导”再次查看。',
      showSkip: false, showPrev: true, nextText: '开始练习'
    }
  ];

  // 状态管理器
  class TourStateManager {
    constructor() {
      this._storage = this._getStorage();
    }

    _getStorage() {
      try {
        localStorage.setItem('__test__', '1');
        localStorage.removeItem('__test__');
        return localStorage;
      } catch (e) {
        // 降级到内存存储
        const mem = {};
        return {
          getItem: (k) => mem[k] || null,
          setItem: (k, v) => { mem[k] = String(v); },
          removeItem: (k) => { delete mem[k]; }
        };
      }
    }

    isCompleted() {
      return this._storage.getItem(STORAGE_KEYS.COMPLETED) === 'true';
    }

    getCurrentStep() {
      const step = this._storage.getItem(STORAGE_KEYS.CURRENT_STEP);
      return step ? parseInt(step, 10) : 0;
    }

    setStep(step) {
      this._storage.setItem(STORAGE_KEYS.CURRENT_STEP, step);
      this._storage.setItem(STORAGE_KEYS.LAST_SHOWN, Date.now());
    }

    markCompleted() {
      this._storage.setItem(STORAGE_KEYS.COMPLETED, 'true');
      this._storage.removeItem(STORAGE_KEYS.CURRENT_STEP);
    }

    reset() {
      this._storage.removeItem(STORAGE_KEYS.COMPLETED);
      this._storage.removeItem(STORAGE_KEYS.CURRENT_STEP);
      this._storage.removeItem(STORAGE_KEYS.LAST_SHOWN);
    }
  }

  // 渲染器
  class TourRenderer {
    constructor() {
      this._overlay = null;
      this._tooltip = null;
      this._highlightEl = null;
      this._holeEl = null;  // 新增：洞元素
    }

    createOverlay() {
      if (this._overlay) return this._overlay;

      this._overlay = document.createElement('div');
      this._overlay.className = 'onboarding-overlay';
      // 关键：遮罩层不阻止点击事件，允许点击穿透
      this._overlay.style.pointerEvents = 'none';
      document.body.appendChild(this._overlay);

      // 创建洞元素
      this._holeEl = document.createElement('div');
      this._holeEl.className = 'onboarding-hole';
      document.body.appendChild(this._holeEl);

      requestAnimationFrame(() => {
        this._overlay.classList.add('is-active');
      });

      return this._overlay;
    }

    createTooltip() {
      if (this._tooltip) this._tooltip.remove();

      this._tooltip = document.createElement('div');
      this._tooltip.className = 'onboarding-tooltip';
      document.body.appendChild(this._tooltip);

      return this._tooltip;
    }

    highlightElement(el, options = {}) {
      this.clearHighlight();
      if (!el) return;

      this._highlightEl = el;

      // 获取目标元素的位置和大小
      const rect = el.getBoundingClientRect();

      // 设置洞元素的位置和大小
      if (this._holeEl) {
        this._holeEl.style.display = 'block';
        this._holeEl.style.top = rect.top + 'px';
        this._holeEl.style.left = rect.left + 'px';
        this._holeEl.style.width = rect.width + 'px';
        this._holeEl.style.height = rect.height + 'px';
      }

      // 保存原始样式以便恢复
      const originalStyles = {
        position: el.style.position,
        zIndex: el.style.zIndex,
        pointerEvents: el.style.pointerEvents
      };
      el._originalOnboardingStyles = originalStyles;

      const elevatedContainer = el.closest('.modal-container')
        || el.closest('.modal-overlay')
        || el.closest('#image-skin-panel');
      if (elevatedContainer) {
        el._onboardingElevatedContainer = elevatedContainer;
        el._originalModalZIndex = elevatedContainer.style.zIndex;
        el._originalModalPosition = elevatedContainer.style.position;
        elevatedContainer.style.zIndex = '100005';
        if (getComputedStyle(elevatedContainer).position === 'static') {
          elevatedContainer.style.position = 'relative';
        }
      }

      // 强制设置目标元素样式使其在遮罩层之上
      el.style.position = 'relative';
      el.style.zIndex = '100006';
      el.style.pointerEvents = options.disablePointer ? 'none' : 'auto';

      el.classList.add('onboarding-highlight');
      el.classList.toggle('onboarding-highlight--disabled', options.disablePointer === true);
      el.scrollIntoView({ behavior: 'auto', block: 'center' });
    }

    clearHighlight() {
      if (this._highlightEl) {
        const el = this._highlightEl;
        el.classList.remove('onboarding-highlight', 'onboarding-highlight--disabled');

        // 恢复原始样式
        if (el._originalOnboardingStyles) {
          el.style.position = el._originalOnboardingStyles.position;
          el.style.zIndex = el._originalOnboardingStyles.zIndex;
          el.style.pointerEvents = el._originalOnboardingStyles.pointerEvents;
          delete el._originalOnboardingStyles;
        }

        const elevatedContainer = el._onboardingElevatedContainer;
        if (elevatedContainer && el._originalModalZIndex !== undefined) {
          elevatedContainer.style.zIndex = el._originalModalZIndex;
          elevatedContainer.style.position = el._originalModalPosition;
          delete el._onboardingElevatedContainer;
          delete el._originalModalZIndex;
          delete el._originalModalPosition;
        }

        this._highlightEl = null;
      }

      // 隐藏洞元素
      if (this._holeEl) {
        this._holeEl.style.display = 'none';
      }
    }

    positionTooltip(target, position, offsetY = 0) {
      if (!this._tooltip) return;

      // 清除旧箭头
      const oldArrow = this._tooltip.querySelector('.onboarding-tooltip__arrow');
      if (oldArrow) oldArrow.remove();

      if (!target || position === 'center') {
        // 居中显示
        this._tooltip.style.position = 'fixed';
        this._tooltip.style.top = '50%';
        this._tooltip.style.left = '50%';
        this._tooltip.style.transform = 'translate(-50%, -50%)';
        return;
      }

      const rect = target.getBoundingClientRect();
      const tooltipRect = this._tooltip.getBoundingClientRect();

      let top, left;
      const gap = 12;

      switch (position) {
        case 'top':
          top = rect.top - tooltipRect.height - gap - offsetY;
          left = rect.left + (rect.width - tooltipRect.width) / 2;
          this._addArrow('bottom');
          break;
        case 'bottom':
          top = rect.bottom + gap + offsetY;
          left = rect.left + (rect.width - tooltipRect.width) / 2;
          this._addArrow('top');
          break;
        case 'left':
          top = rect.top + (rect.height - tooltipRect.height) / 2;
          left = rect.left - tooltipRect.width - gap - offsetY;
          this._addArrow('right');
          break;
        case 'right':
        default:
          top = rect.top + (rect.height - tooltipRect.height) / 2;
          left = rect.right + gap + offsetY;
          this._addArrow('left');
          break;
      }

      // 边界检查
      left = Math.max(10, Math.min(left, window.innerWidth - tooltipRect.width - 10));
      top = Math.max(10, Math.min(top, window.innerHeight - tooltipRect.height - 10));

      this._tooltip.style.position = 'fixed';
      this._tooltip.style.top = top + 'px';
      this._tooltip.style.left = left + 'px';
      this._tooltip.style.transform = 'none';
    }

    _addArrow(direction) {
      const arrow = document.createElement('div');
      arrow.className = `onboarding-tooltip__arrow onboarding-tooltip__arrow--${direction}`;
      this._tooltip.appendChild(arrow);
    }

    renderTooltipContent(step, current, total, options = {}) {
      if (!this._tooltip) return;

      const progressPercent = ((current + 1) / total) * 100;

      this._tooltip.innerHTML = `
        <div class="onboarding-tooltip__progress">
          <div class="onboarding-tooltip__progress-bar">
            <div class="onboarding-tooltip__progress-fill" style="width: ${progressPercent}%"></div>
          </div>
          <span class="onboarding-tooltip__progress-text">${current + 1} / ${total}</span>
          ${options.mandatory ? '<span class="onboarding-tooltip__required">首次必读</span>' : ''}
        </div>
        <h3 class="onboarding-tooltip__title">${step.title}</h3>
        <p class="onboarding-tooltip__content">${step.content}</p>
        <div class="onboarding-tooltip__actions">
          ${step.showPrev ? '<button class="onboarding-tooltip__btn onboarding-tooltip__btn--secondary" data-action="prev">上一步</button>' : '<div></div>'}
          <div>
            ${step.showSkip && !options.mandatory ? '<button class="onboarding-tooltip__btn onboarding-tooltip__btn--skip" data-action="skip">退出向导</button>' : ''}
            ${step.hideNext ? '' : `<button class="onboarding-tooltip__btn onboarding-tooltip__btn--primary" data-action="next">${step.nextText}</button>`}
          </div>
        </div>
      `;

      requestAnimationFrame(() => {
        this._tooltip.classList.add('is-visible');
      });
    }

    showWelcome(step) {
      if (!this._tooltip) return;

      this._tooltip.innerHTML = `
        <div class="onboarding-welcome">
          <div class="onboarding-welcome__icon">🎓</div>
          <h3 class="onboarding-tooltip__title">${step.title}</h3>
          <p class="onboarding-tooltip__content">${step.content}</p>
          <div class="onboarding-tooltip__actions onboarding-welcome__actions" style="margin-top: 16px;">
            ${step.showSkip ? '<button class="onboarding-tooltip__btn onboarding-tooltip__btn--skip" data-action="skip">暂时跳过</button>' : '<div></div>'}
            <button class="onboarding-tooltip__btn onboarding-tooltip__btn--primary" data-action="next">${step.nextText}</button>
          </div>
        </div>
      `;

      requestAnimationFrame(() => {
        this._tooltip.classList.add('is-visible');
      });
    }

    destroy() {
      this.clearHighlight();
      if (this._overlay) {
        this._overlay.classList.remove('is-active');
        setTimeout(() => this._overlay?.remove(), 300);
        this._overlay = null;
      }
      if (this._holeEl) {
        this._holeEl.remove();
        this._holeEl = null;
      }
      if (this._tooltip) {
        this._tooltip.classList.remove('is-visible');
        setTimeout(() => this._tooltip?.remove(), 300);
        this._tooltip = null;
      }
    }
  }

  // 主类
  class OnboardingTour {
    constructor(config = {}) {
      this._stateManager = new TourStateManager();
      this._renderer = new TourRenderer();
      this._steps = config.steps || DEFAULT_STEPS;
      this._currentStep = 0;
      this._isActive = false;
      this._boundKeyHandler = null;
      // 子步骤状态
      this._currentSubStep = 0;
      this._inSubSteps = false;
      this._forceCompletion = false;
      this._targetClickCleanup = null;
      this._initScheduled = false;
    }

    init() {
      if (this._stateManager.isCompleted() || this._initScheduled) return;
      this._initScheduled = true;
      const startedAt = Date.now();
      const startWhenReady = () => {
        const overlay = document.getElementById('boot-overlay');
        const bootVisible = document.body.classList.contains('boot-active')
          || (overlay && overlay.getAttribute('data-hidden') !== 'true');
        if (bootVisible && Date.now() - startedAt < 12000) {
          setTimeout(startWhenReady, 250);
          return;
        }
        if (this._stateManager.isCompleted() || this._isActive) return;
        this.start(false);
      };
      setTimeout(startWhenReady, 500);
    }

    start(fromBeginning = false, options = {}) {
      if (this._isActive) return;

      this._forceCompletion = options.mandatory === true;
      this._currentStep = fromBeginning ? 0 : this._stateManager.getCurrentStep();
      this._isActive = true;
      document.body.classList.add('onboarding-tour-active');

      // 根据题库内容动态更新引导步骤
      this._refreshDynamicSteps();

      this._renderer.createOverlay();
      this._renderer.createTooltip();

      // 绑定键盘事件
      this._boundKeyHandler = this._handleKeydown.bind(this);
      document.addEventListener('keydown', this._boundKeyHandler);

      // 绑定点击事件
      this._renderer._overlay.addEventListener('click', (e) => {
        // 阻止点击遮罩层关闭
        e.stopPropagation();
      });

      this._showCurrentStep();
    }

    /**
     * 根据实际题库内容动态更新引导步骤
     */
    _refreshDynamicSteps() {
      // 尝试获取题库统计信息
      const stats = this._getExamStats();
      const totalExams = stats.totalExams || '多套';
      const htmlExams = stats.htmlExams || totalExams;
      const pdfExams = stats.pdfExams || totalExams;

      // 动态更新「开始做题」子步骤里的题库规模提示
      const practiceStep = this._steps.find(s => s.id === 'how-to-practice');
      if (practiceStep && Array.isArray(practiceStep.subSteps)) {
        const startSub = practiceStep.subSteps.find(s => s.id === 'practice-start');
        if (startSub) {
          startSub.content = `当前题库共有 ${totalExams} 套题目。点击题目卡片上的「开始练习」，系统会在新窗口打开机考做题界面。`
            + '做题时：选择答案、可长按高亮原文做笔记，全部完成后点「提交」即可查看成绩与解析。';
        }
      }
    }

    /**
     * 获取题库统计信息
     */
    _getExamStats() {
      const result = { totalExams: null, htmlExams: null, pdfExams: null };
      try {
        // 方式 1: 从 readingExamRegistry 获取
        const registry = window.__READING_EXAM_DATA__;
        if (registry && typeof registry.keys === 'function') {
          const keys = registry.keys();
          result.totalExams = keys.length;
          return result;
        }
        // 方式 2: 从页面 DOM 读取
        const totalEl = document.getElementById('total-exams');
        if (totalEl) {
          const val = parseInt(totalEl.textContent, 10);
          if (Number.isFinite(val)) result.totalExams = val;
        }
        const htmlEl = document.getElementById('html-exams');
        if (htmlEl) {
          const val = parseInt(htmlEl.textContent, 10);
          if (Number.isFinite(val)) result.htmlExams = val;
        }
        const pdfEl = document.getElementById('pdf-exams');
        if (pdfEl) {
          const val = parseInt(pdfEl.textContent, 10);
          if (Number.isFinite(val)) result.pdfExams = val;
        }
      } catch (e) {
        console.warn('[Onboarding] 获取题库统计失败:', e);
      }
      return result;
    }

    stop() {
      this._isActive = false;
      document.body.classList.remove('onboarding-tour-active');
      if (this._targetClickCleanup) {
        this._targetClickCleanup();
        this._targetClickCleanup = null;
      }
      this._unlockScroll();
      this._unlockPointer();
      this._closeRecordModal();
      this._renderer.destroy();

      if (this._boundKeyHandler) {
        document.removeEventListener('keydown', this._boundKeyHandler);
        this._boundKeyHandler = null;
      }
    }

    reset() {
      this.stop();
      this._stateManager.reset();
    }

    // ===== 滚动与指针锁定 =====
    _lockScroll() {
      if (!document.body.classList.contains('onboarding-scroll-locked')) {
        this._savedScrollTop = window.scrollY || document.documentElement.scrollTop;
        document.body.classList.add('onboarding-scroll-locked');
        document.body.style.overflow = 'hidden';
      }
    }

    _unlockScroll() {
      if (document.body.classList.contains('onboarding-scroll-locked')) {
        document.body.classList.remove('onboarding-scroll-locked');
        document.body.style.overflow = '';
        const savedTop = this._savedScrollTop || 0;
        window.scrollTo(0, savedTop);
        this._savedScrollTop = 0;
      }
    }

    _lockPointer() {
      // 向导只通过高亮目标本身控制误操作，不再铺设全屏鼠标拦截层。
      // 这样原生鼠标和自定义鼠标在向导期间始终可见、可移动。
      this._unlockPointer();
    }

    _unlockPointer() {
      const intercept = document.getElementById('onboarding-pointer-intercept');
      if (intercept) intercept.remove();
    }

    getStatus() {
      return {
        completed: this._stateManager.isCompleted(),
        currentStep: this._currentStep,
        totalSteps: this._steps.length
      };
    }

    goToStep(step) {
      if (step < 0 || step >= this._steps.length) return;
      this._currentStep = step;
      this._stateManager.setStep(step);
      this._showCurrentStep();
    }

    registerSteps(steps) {
      this._steps = steps;
    }

    _closeRecordModal() {
      try {
        if (window.practiceRecordModal && typeof window.practiceRecordModal.hide === 'function') {
          window.practiceRecordModal.hide();
        }
      } catch (e) {
        // ignore modal close failures
      }
    }

    _performStepAction(action) {
      if (!action) return;
      const panel = document.getElementById('image-skin-panel');
      const setSkinPanelOpen = (open) => {
        if (!panel) return;
        panel.classList.toggle('is-collapsed', !open);
        const handle = panel.querySelector('.skin-handle');
        if (handle) handle.setAttribute('aria-expanded', open ? 'true' : 'false');
      };

      if (action === 'openSkinPanel') {
        setSkinPanelOpen(true);
      } else if (action === 'openCustomSkinEditor') {
        setSkinPanelOpen(true);
        const editor = panel && panel.querySelector('.custom-skin-editor');
        if (editor) editor.open = true;
      } else if (action === 'closeSkinPanel') {
        setSkinPanelOpen(false);
      }
    }

    _activateView(viewId) {
      if (!viewId) return;

      // 离开「练习记录」视图前，关闭演示时打开的记录详情弹窗，避免遮挡后续步骤目标
      if (viewId !== 'practice') {
        this._closeRecordModal();
      }

      // 方法 1: 尝试点击对应的导航按钮
      const navMap = {
        'overview': '[data-view="overview"]',
        'browse': '[data-view="browse"]',
        'suite': '[data-view="suite"]',
        'practice': '[data-view="practice"]',
        'settings': '[data-view="settings"]'
      };

      const selector = navMap[viewId];
      if (selector) {
        const navBtn = document.querySelector(selector);
        if (navBtn) {
          navBtn.click();
          return;
        }
      }

      // 方法 2: 直接显示目标视图（如果导航按钮不存在）
      const viewMap = {
        'overview': '#overview-view',
        'browse': '#browse-view',
        'suite': '#suite-view',
        'practice': '#practice-view',
        'settings': '#settings-view'
      };

      const viewSelector = viewMap[viewId];
      if (viewSelector) {
        const targetView = document.querySelector(viewSelector);
        if (targetView) {
          // 隐藏所有视图
          document.querySelectorAll('.view-container, [id$="-view"]').forEach(v => {
            v.style.display = 'none';
          });
          // 显示目标视图
          targetView.style.display = 'block';
        }
      }
    }

    _showCurrentStep() {
      const step = this._steps[this._currentStep];
      if (!step) {
        this._complete();
        return;
      }

      this._stateManager.setStep(this._currentStep);
      if (this._targetClickCleanup) {
        this._targetClickCleanup();
        this._targetClickCleanup = null;
      }

      // 先激活对应视图
      this._activateView(step.activateView);
      this._performStepAction(step.action);

      // 检查是否有子步骤
      if (step.subSteps && !this._inSubSteps) {
        this._inSubSteps = true;
        this._currentSubStep = 0;
      }

      // 如果当前在子步骤中
      if (this._inSubSteps && step.subSteps) {
        this._showSubStep(step);
        return;
      }

      // 如果需要等待元素出现
      if (step.waitForElement && step.target) {
        // 先触发按钮打开模态框
        if (step.triggerElement) {
          const triggerEl = document.querySelector(step.triggerElement);
          if (triggerEl) {
            triggerEl.click();
          }
        }
        this._waitForElement(step.target, () => {
          this._showStepContent(step);
        });
        return;
      }

      // 应用滚动锁与指针锁
      if (step.lockScroll) {
        this._lockScroll();
      } else {
        this._unlockScroll();
      }

      if (step.lockPointer && !step.waitForClick) {
        this._lockPointer();
      } else {
        this._unlockPointer();
      }

      this._showStepContent(step);
    }

    _showSubStep(parentStep) {
      const subStep = parentStep.subSteps[this._currentSubStep];
      if (!subStep) {
        this._inSubSteps = false;
        this._currentStep++;
        this._showCurrentStep();
        return;
      }

      // 执行子步骤动作
      if (subStep.action === 'injectDemoRecord') {
        this._injectDemoRecord();
      }

      // 等待元素出现
      if (subStep.waitForElement) {
        this._waitForElement(subStep.waitForElement, () => {
          this._showSubStepContent(subStep, parentStep);
        });
        return;
      }

      this._showSubStepContent(subStep, parentStep);
    }

    _showSubStepContent(subStep, parentStep) {
      // inject-demo-record 需要等待 DOM 刷新后再定位
      const delay = (subStep.action === 'injectDemoRecord') ? 800 : 100;
      setTimeout(() => {
        this._renderer._tooltip?.classList.remove('is-visible');

        // 应用滚动锁
        if (subStep.lockScroll) {
          this._lockScroll();
        } else {
          this._unlockScroll();
        }

        // 应用指针锁（不是 waitForClick 步骤才锁，防止误操作）
        if (subStep.lockPointer) {
          this._lockPointer();
        } else {
          this._unlockPointer();
        }

        const targetEl = subStep.target ? document.querySelector(subStep.target) : null;
        this._renderer.highlightElement(targetEl, { disablePointer: subStep.disableHighlightPointer });
        this._renderer.positionTooltip(targetEl, subStep.position, subStep.offsetY);

        const totalSteps = parentStep.subSteps.length;
        this._renderer.renderTooltipContent(subStep, this._currentSubStep, totalSteps, { mandatory: this._forceCompletion });
        requestAnimationFrame(() => this._renderer.positionTooltip(targetEl, subStep.position, subStep.offsetY));

        // 绑定子步骤按钮事件
        this._bindSubStepButtonActions(parentStep);

        // 如果需要等待点击
        if (subStep.waitForClick && targetEl) {
          this._waitForElementClick(targetEl, () => {
            this._unlockScroll();
            this._unlockPointer();
            this._currentSubStep++;
            this._showSubStep(parentStep);
          });
        }
      }, delay);
    }

    _bindSubStepButtonActions(parentStep) {
      const tooltip = this._renderer._tooltip;
      if (!tooltip) return;

      tooltip.querySelectorAll('[data-action]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const action = e.target.dataset.action;

          switch (action) {
            case 'next':
              this._currentSubStep++;
              if (this._currentSubStep >= parentStep.subSteps.length) {
                this._inSubSteps = false;
                this._currentStep++;
              }
              this._showCurrentStep();
              break;
            case 'prev':
              if (this._currentSubStep > 0) {
                this._currentSubStep--;
                this._showSubStep(parentStep);
              }
              break;
            case 'skip':
              this._inSubSteps = false;
              this._currentStep++;
              this._showCurrentStep();
              break;
          }
        });
      });
    }

    _waitForElementClick(element, callback) {
      if (!element) {
        callback();
        return;
      }
      if (this._targetClickCleanup) this._targetClickCleanup();
      let active = true;
      const cleanup = () => {
        if (!active) return;
        active = false;
        element.removeEventListener('click', handler);
        if (this._targetClickCleanup === cleanup) this._targetClickCleanup = null;
      };
      const handler = () => {
        cleanup();
        callback();
      };
      this._targetClickCleanup = cleanup;
      element.addEventListener('click', handler);
    }

    _injectDemoRecord() {
      const demoRecordObj = {
        id: 'demo-onboarding-record',
        type: 'reading',
        title: '示例练习 - 阅读 Passage 1',
        metadata: {
          examTitle: '示例练习 - 阅读 Passage 1',
          category: '官方真题'
        },
        score: 25,
        totalQuestions: 40,
        accuracy: 0.625,
        percentage: 62.5,
        correctAnswers: 25,
        duration: 1200,
        date: new Date().toISOString(),
        questions: []
      };

      // 注意：全局小写形式为 window.dataRepositories
      const repos = window.dataRepositories;
      if (repos && repos.practice) {
        repos.practice.upsert(demoRecordObj).then(() => {
          // 尝试触发界面刷新
          if (typeof window.syncPracticeRecords === 'function') {
            window.syncPracticeRecords({ forceRender: true });
          } else if (window.app && typeof window.app.renderPracticeHistory === 'function') {
            window.app.renderPracticeHistory();
          } else {
            // 广播事件，主应用处监听并重载
            window.dispatchEvent(new CustomEvent('practiceRecordsUpdated', { detail: { source: 'onboarding' } }));
          }
        }).catch(err => {
          console.error('[Onboarding] 注入示例记录失败:', err);
        });
      } else {
        console.warn('[Onboarding] window.dataRepositories.practice 不可用，无法注入示例记录');
      }
    }

    _cleanupDemoRecord() {
      const repos = window.dataRepositories;
      if (repos && repos.practice) {
        repos.practice.removeById('demo-onboarding-record').then(() => {
          if (typeof window.syncPracticeRecords === 'function') {
            window.syncPracticeRecords({ forceRender: true });
          } else if (window.app && typeof window.app.renderPracticeHistory === 'function') {
            window.app.renderPracticeHistory();
          } else {
            window.dispatchEvent(new CustomEvent('practiceRecordsUpdated', { detail: { source: 'onboarding-cleanup' } }));
          }
        }).catch(err => {
          console.warn('[Onboarding] 清理示例记录失败:', err);
        });
      }
    }

    _showStepContent(step) {
      // 等待视图切换完成后再显示提示
      setTimeout(() => {
        // 隐藏提示框以重新定位
        this._renderer._tooltip?.classList.remove('is-visible');

        // 高亮目标元素
        const targetEl = step.target ? document.querySelector(step.target) : null;
        this._renderer.highlightElement(targetEl, { disablePointer: step.disableHighlightPointer });

        // 定位提示框
        this._renderer.positionTooltip(targetEl, step.position, step.offsetY);

        // 渲染内容
        if (step.id === 'welcome') {
          this._renderer.showWelcome(step);
        } else {
          this._renderer.renderTooltipContent(step, this._currentStep, this._steps.length, { mandatory: this._forceCompletion });
        }
        requestAnimationFrame(() => this._renderer.positionTooltip(targetEl, step.position, step.offsetY));

        // 绑定按钮事件
        this._bindButtonActions();

        if (step.waitForClick && targetEl) {
          this._waitForElementClick(targetEl, () => this._next());
        }
      }, 100);
    }

    _waitForElement(selector, callback, maxWait = 10000) {
      const startTime = Date.now();

      const check = () => {
        const el = document.querySelector(selector);
        if (el) {
          callback();
          return;
        }

        if (Date.now() - startTime > maxWait) {
          // 超时后跳过该步骤
          console.warn(`[Onboarding] 等待元素超时: ${selector}`);
          if (this._inSubSteps) {
            this._currentSubStep++;
            const parentStep = this._steps[this._currentStep];
            if (parentStep && parentStep.subSteps) {
              if (this._currentSubStep >= parentStep.subSteps.length) {
                this._inSubSteps = false;
                this._currentStep++;
              }
            }
          } else {
            this._currentStep++;
          }
          this._showCurrentStep();
          return;
        }

        setTimeout(check, 200);
      };

      check();
    }

    _bindButtonActions() {
      const tooltip = this._renderer._tooltip;
      if (!tooltip) return;

      tooltip.querySelectorAll('[data-action]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const action = e.target.dataset.action;

          switch (action) {
            case 'next':
              this._next();
              break;
            case 'prev':
              this._prev();
              break;
            case 'skip':
              this._skip();
              break;
          }
        });
      });
    }

    _next() {
      // 如果当前在子步骤中
      if (this._inSubSteps) {
        const parentStep = this._steps[this._currentStep];
        if (parentStep && parentStep.subSteps) {
          this._currentSubStep++;
          if (this._currentSubStep >= parentStep.subSteps.length) {
            this._inSubSteps = false;
            this._currentStep++;
          }
          this._showCurrentStep();
          return;
        }
      }

      if (this._currentStep >= this._steps.length - 1) {
        this._complete();
        return;
      }
      this._currentStep++;
      this._showCurrentStep();
    }

    _prev() {
      // 如果当前在子步骤中
      if (this._inSubSteps) {
        if (this._currentSubStep > 0) {
          this._currentSubStep--;
          const parentStep = this._steps[this._currentStep];
          if (parentStep && parentStep.subSteps) {
            this._showSubStep(parentStep);
          }
          return;
        }
        // 如果已经在第一个子步骤，返回到上一个主步骤
        this._inSubSteps = false;
      }

      if (this._currentStep <= 0) return;
      this._currentStep--;
      this._showCurrentStep();
    }

    _skip() {
      if (this._forceCompletion) {
        this._renderer._tooltip?.classList.add('is-required-pulse');
        setTimeout(() => this._renderer._tooltip?.classList.remove('is-required-pulse'), 420);
        return;
      }
      this._cleanupDemoRecord();
      this._complete();
    }

    _complete() {
      this._cleanupDemoRecord();
      this._stateManager.markCompleted();
      this._forceCompletion = false;
      this.stop();
    }

    _handleKeydown(e) {
      switch (e.key) {
        case 'Escape':
          this._skip();
          break;
        case 'ArrowRight':
          this._next();
          break;
        case 'ArrowLeft':
          this._prev();
          break;
      }
    }
  }

  // 全局暴露
  const tour = new OnboardingTour();

  global.OnboardingTour = {
    init: () => tour.init(),
    start: (fromBeginning) => tour.start(fromBeginning),
    stop: () => tour.stop(),
    reset: () => tour.reset(),
    getStatus: () => tour.getStatus(),
    goToStep: (step) => tour.goToStep(step),
    registerSteps: (steps) => tour.registerSteps(steps)
  };

})(typeof window !== 'undefined' ? window : globalThis);
