Vue.config.devtools = true

const questions = [
  {
    'selector' : 'p.out',
    'proposal': 'p.out',
    'answer': 'yes' 
  },
  {
    'selector' : 'h2 ~ p',
    'proposal': 'h2 + p',
    'answer': 'no' 
  },
  {
    'selector' : 'h2 ~ p',
    'proposal': 'h2 ~ p',
    'answer': 'yes' 
  },
  {
    'selector' : '#section1',
    'proposal': '[id="section1"]',
    'answer': 'yes' 
  },
  {
    'selector' : 'h2 + p',
    'proposal': 'h2 + p',
    'answer': 'yes' 
  },
  {
    'selector' : 'section p:first-of-type',
    'proposal': 'section p:first-child',
    'answer': 'no' 
  },
  {
    'selector' : 'section p:first-of-type',
    'proposal': 'section p:first-of-type',
    'answer': 'yes' 
  },
  {
    'selector' : 'main > *',
    'proposal': 'main *',
    'answer': 'no' 
  },
  {
    'selector' : 'main > *',
    'proposal': 'main > *',
    'answer': 'yes' 
  },
  {
    'selector' : 'main p',
    'proposal': 'h2 ~ p',
    'answer': 'no' 
  },
  {
    'selector' : 'main > p',
    'proposal': 'main p',
    'answer': 'no' 
  },
  {
    'selector' : 'main > p',
    'proposal': 'main > p',
    'answer': 'yes' 
  },
  {
    'selector' : 'footer div',
    'proposal': 'footer div',
    'answer': 'yes' 
  },
  {
    'selector' : 'footer > div',
    'proposal': 'footer > div',
    'answer': 'yes' 
  },
  {
    'selector' : 'footer > :nth-child(n)',
    'proposal': 'footer > :nth-child(n)',
    'answer': 'yes' 
  },
  {
    'selector' : 'footer > div',
    'proposal': 'footer div',
    'answer': 'no' 
  },
  {
    'selector' : 'footer > :nth-child(2n+1)',
    'proposal': 'footer > :nth-child(2n+1)',
    'answer': 'yes' 
  },
  {
    'selector' : 'footer > :nth-child(2n+1)',
    'proposal': 'footer :nth-child(2n+1)',
    'answer': 'no' 
  },
  {
    'selector' : ':empty',
    'proposal': ':empty',
    'answer': 'yes' 
  },
  {
    'selector' : '[class*="widget"]',
    'proposal': '[class*="widget"]',
    'answer': 'yes' 
  },
  {
    'selector' : '.widget > *',
    'proposal': '.widget > *',
    'answer': 'yes' 
  },
  {
    'selector' : '.widget.widget1',
    'proposal': '.widget.widget1',
    'answer': 'yes' 
  },
  {
    'selector' : 'div.widget1',
    'proposal': 'div.widget1',
    'answer': 'yes' 
  },
  {
    'selector' : '[class^="widget"]',
    'proposal': '[class^="widget"]',
    'answer': 'yes' 
  },
  {
    'selector' : 'section :first-of-type',
    'proposal': 'section :first-of-type',
    'answer': 'yes' 
  }
]

Vue.component( 'question', {
  props: ['v', 'q', 'disabled', 'correct'],
  data() {
    return {
      answer: '',
      a: []
    }
  },
  computed: {
    checked: {
      get() {
        return this.v
      },
      set(val) {
        this.a = val
      }
    },
    displaySelector() {
      return `${this.q} {…}`
    }
  },
  template: `<div>
<pre class="code">{{displaySelector}}</pre>
<div :class="['label-ctnr', disabled ? 'disabled': '']"><label :class="[ feedbackClass(item), checkedClass(item)]" v-for="(item, i) in ['yes', 'no']">
<span v-if="disabled && isChecked(item)">
<svg v-if="isCorrectChecked(item)" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">  
  <polyline class="path check" fill="none" stroke="#1698d0" stroke-width="20" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
</svg>
<svg v-else version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">  
  <line class="path line" fill="none" stroke="#ff7058" stroke-width="20" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3"/>
  <line class="path line" fill="none" stroke="#ff7058" stroke-width="20" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2"/>
</svg>
</span>
<input @change="answerChecked" type="radio" :id="item" :value="item" v-model="checked" :disabled="disabled"/>{{item}}</label></div>

<button v-if="answer" type="button" @click="submitAnswer">Answer</button>
</div>`,
  methods: {
    answerChecked() {
      this.$emit('answered', this.a )
    },
    checkedClass(item) {
        return this.isChecked(item) ? 'checked' : 'not-checked'
    },
    isChecked(item) {
      return item === this.checked 
    },
    isCorrectChecked(item) {
      return item === this.checked && item === this.correct
    },
    feedbackClass(item) {
        if (!this.disabled) {
          return
        }
      return item === this.correct ? 'correct' : 'wrong'
    }
  }
}
)

Vue.component('v-style', {
  render: function (createElement) {
    return createElement('style', this.$slots.default)
  }
});

Vue.component( 'finalresults', {
  props: [ 'finalpercentage'],
  template: "#finalresults"
});

Vue.component('pagedoc', {
  template: '#page-doc',
  data() {
		return {}
	}
});

new Vue({
  el: '#app',
  data() {
    return {
      currentIndex: 0,
      checkedAnswers: [],
      v: [],
      score: 0,
      questions: [],
      isIdle: true,
      askedForResults: false
    }
  },
  computed: {
    total() {
      return this.questions.length 
    },
    finalPercentage() {
      return `${Math.round(this.score/this.total*100)}%`
    },
    proposal() {
      return this.questions[this.currentIndex].proposal
    },
    selector() {
      return this.questions[this.currentIndex].selector
    },
    answer() { 
       return this.questions[this.currentIndex].answer
    },
    isAnswered() {
      return this.v.length !== 0
    },
    disabled() {
      return this.v.length !== 0
    },
    isFinished() {
      return this.currentIndex === this.total - 1
    },
    shouldShowNext() {
      return this.isAnswered && !this.isFinished
    },
    allDone() {
      return this.isAnswered && this.isFinished
    }
  },
  methods: {
    start() {
      this.questions = questions.sort(function(a, b){return 0.5 - Math.random()})
      this.isIdle = false
    },
    go(r) {
    this.v = r
      if (this.checkAnswer(r)) {
        this.score++
      }
      this.disabled = true
      this.isAnswered = true
    },
    checkAnswer(r) {
      return r === this.questions[this.currentIndex].answer
    },
    resetStep() {
      this.isAnswered = false
      this.disabled = false
      this.v = []
    },
    displayNext() {
      this.currentIndex++
      this.resetStep()
    },
    playAgain() {
      this.score = 0
      this.start()
      this.currentIndex = 0
      this.askedForResults = false
      this.resetStep()
    },
    showResults() {
      this.askedForResults = true
      this.isIdle = true
    }
  }
})

