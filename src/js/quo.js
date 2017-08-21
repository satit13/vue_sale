import $ from 'jquery'
export default {
  name: 'Qtd',
  data () {
    return {
      msg: 'Link to quo.js'
    }
  },
  methods: {
  	SearchItem () {
  		$('#Sitem').addClass('is-active')
  	},
  	closeSitem () {
  	
  		$('#Sitem').removeClass('is-active')
  	}
  }
}