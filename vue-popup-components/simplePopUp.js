const simplePopUp = {
  name: 'simple-pop-up',
  data: () => ({
    show: false,
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
      width: 'auto',
      margin: '10px',
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
  }),
  props: ['config', 'showpopup'],
  template: ` <div :style="styleBG" v-if="show" @click.self="closeOnClickBg">
                <div :style="modalDialog">
                <div :style="modalContent">
                  <div :style="modalHeader">
                    <h3 :style="modalTitle" v-if="config.title">{{config.title}}</h3>
                    <a :style="modalClose" title="close" @click.prevent="closePopUp">×</a>
                  </div>
                  <div :style="modalBody">
                    <p>{{config.text}}</p>
                  </div>
                </div>
                </div>               
              </div>`,
  methods: {
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
      this.modalHeader = {
        padding: '10px 15px',
        borderBottom: '1px solid rgba(0,0,0,.2)',
      }
    }

    if (this.config.header === false) {
      this.modalHeader.borderBottom = 'none'
    }

    if (this.config.bodyTextCenter === true) {
      this.modalBody.textAlign = 'center'
    }

    if (this.config.styles) {
      let styles = this.config.styles
      Object.keys(styles).forEach((key) => {
        this[key] = { ...this[key], ...styles[key] }
      })
    }
  },
}
