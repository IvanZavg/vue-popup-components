const simplePopUpMessage = {
  name: 'simple-pop-up',
  data: () => ({
    show: false,
    styles: {
      styleBG: {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: 'rgba(0,0,0,0.5)',
        zIndex: 1000,
        opacity: 1,
        margin: 0,
        padding: 0,
      },
      modalDialog: {
        position: 'relative',
        width: '60%',
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
  }),
  props: ['config', 'showpopup'],
  template: ` <div :style="styles.styleBG" v-if="show" @click.self="closeOnClickBg">
                <div :style="styles.modalDialog">
                <div :style="styles.modalContent">
                  <div :style="styles.modalHeader">
                    <h4 :style="styles.modalTitle" v-if="config.title">{{config.title}}</h4>
                    <a :style="styles.modalClose" title="close" @click.prevent="closePopUp">×</a>
                  </div>
                  <div :style="styles.modalBody">
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
      this.styles.modalHeader = {
        padding: '5px 15px 0px 0px',
        borderBottom: '1px solid rgba(0,0,0,.2)',
      }
      this.styles.modalBody = { ...this.styles.modalBody, marginTop: '-15px' }
    }

    if (this.config.header === false) {
      this.styles.modalHeader.borderBottom = 'none'
    }

    if (this.config.bodyTextCenter === true) {
      this.styles.modalBody.textAlign = 'center'
    }

    if (this.config.styles) {
      this.setStyles(this.config)
    }
  },
}
