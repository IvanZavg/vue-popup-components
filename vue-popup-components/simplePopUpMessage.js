const simplePopUpMessage = {
  name: 'simple-pop-up',
  data: () => ({
    show: false,
    styles: {
      modalBg: {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: 'rgba(0,0,0,0.5)',
        zIndex: 1000,
        opacity: 1,
        margin: 0,
        padding: '10px',
      },
      modalDialog: {
        position: 'relative',
        width: '50%',
        margin: '10px auto',
      },
      modalContent: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: ' #fff',
        backgroundClip: 'padding-box',
        border: '1px solid rgba(0,0,0,.2)',
        borderRadius: '.3rem',
        outline: 0,
      },
      modalHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: ' space-between',
        padding: '15px',
        borderBottom: '1px solid #eceeef',
      },
      modalBody: {
        position: 'relative',
        flex: '1 1 auto',
        padding: '15px',
        overflow: 'auto',
      },
      modalTitle: {
        marginTop: 0,
        marginBottom: 0,
        lineHeight: 1.5,
        fontSize: '1.25rem',
        fontWeight: 500,
      },
      modalClose: {
        float: 'right',
        cursor: 'pointer',
        fontFamily: 'sans-serif',
        fontSize: '24px',
        fontWeight: 700,
        lineHeight: 1,
        color: '#000',
        textShadow: '0 1px 0 #fff',
        opacity: 0.5,
        textDecoration: 'none',
      },
    },
    classes: {
      modalBg: [],
      modalDialog: [],
      modalContent: [],
      modalHeader: [],
      modalBody: [],
      modalTitle: [],
      modalClose: [],
    },
  }),
  props: ['config', 'showpopup'],
  template: ` <div :style="styles.modalBg" :class="classes.modalBg" v-if="show" @click.self="closeOnClickBg">
                <div :style="styles.modalDialog" :class="classes.modalDialog">
                <div :style="styles.modalContent" :class="classes.modalContent">
                  <div :style="styles.modalHeader" :class="classes.modalHeader">
                    <h4 :style="styles.modalTitle" :class="classes.modalTitle" v-if="config.title">{{config.title}}</h4>
                    <a :style="styles.modalClose" :class="classes.modalClose" title="close" @click.prevent="closePopUp">×</a>
                  </div>
                  <div :style="styles.modalBody" :class="classes.modalBody">
                    <p>{{config.text}}</p>
                  </div>
                </div>
                </div>               
              </div>`,
  methods: {
    setStyles(config) {
      let styles = config.styles
      let mode = config.changeStyleMode

      if (!mode || mode === 'def') {
        Object.keys(styles).forEach((key) => {
          this.styles[key] = { ...this.styles[key], ...styles[key] }
        })
      } else if (mode === 'full') {
        Object.keys(styles).forEach((key) => {
          this.styles[key] = styles[key]
        })
      } else if (mode === 'clearAll') {
        Object.keys(this.styles).forEach((key) => {
          this.styles[key] = {}
        })
      } else {
        console.error(
          `Was seted uncorrect sign for changeStyleMode: ${mode}. Correct signs for changeStyleMode is: 'def'(or null), 'full', 'clearAll'`
        )
      }
    },
    setClasses(config) {
      let classes = config.classes
      Object.keys(classes).forEach((key) => {
        this.classes[key] = classes[key]
      })
    },
    resetStylesWithoutTitle() {
      this.styles.modalHeader = { padding: '0', borderBottom: '1px solid #eceeef' }
      this.styles.modalClose['margin'] = '15px'
      this.styles.modalBody['marginBottom'] = '15px'
    },
    resetStylesWithoutHeader() {
      this.styles.modalHeader.borderBottom = 'none'
    },
    setMainTextCenter() {
      this.styles.modalBody.textAlign = 'center'
    },
    closePopUp() {
      this.show = false
      this.$emit('closepopup')
    },
    closeOnClickBg() {
      if (this.config.closeOnClickBg) {
        this.show = false
        this.$emit('closepopup')
      }
    },
  },
  mounted() {
    if (this.showpopup) {
      this.show = this.showpopup
    }

    if (!this.config.title) {
      this.resetStylesWithoutTitle()
    }

    if (this.config.header === false) {
      this.resetStylesWithoutHeader()
    }

    if (this.config.bodyTextCenter === true) {
      this.setMainTextCenter()
    }

    if (this.config.styles) {
      this.setStyles(this.config)
    }

    if (this.config.classes) {
      this.setClasses(this.config)
    }
  },
}
