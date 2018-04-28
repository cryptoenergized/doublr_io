<template>
    <div class="container has-text-centered is-one-third flex-1">
      <div class="has-text-centered warning-box">

        <div class="box is-half">
          <h1 class="subtitle is-size-4">Takes about a minute to load.</h1>
          <vuetable ref="vuetable"
            api-url="https://vuetable.ratiw.net/api/users"
            :fields="fields"
            :css="css"
            :per-page="15"
            :api-mode="false"
            :data="participants"
            :data-manager="dataManager"
            :data-total="dataTotal"
            pagination-path=""
            @vuetable:pagination-data="onPaginationData"
            ></vuetable>
            <bulma-pagination ref="pagination"
              @vuetable-pagination:change-page="onChangePage"
            ></bulma-pagination>
        </div>
      </div>
    </div>
</template>

<script>

import Vuetable from 'vuetable-2/src/components/Vuetable'
import BulmaPagination from './BulmaPagination'
import { mapState }  from 'vuex'
import moment from 'moment'

export default {
  name: 'participans',
  components: {
   Vuetable,
   BulmaPagination
  },
  data: function () {
    return {
      amount: 0.01,
      css: {
         tableClass: 'table is-bordered is-striped',
         ascendingIcon: 'fa fa-chevron-up',
         descendingIcon: 'fa fa-chevron-down',
         sortHandleIcon: 'fa fa-bars',
       },
    fields: [
      'order', 'address',
      {
        name: 'payout',
        title: 'Payout',
        callback: 'showEther'
      },
      {
        name: 'beforeMe',
        title: "ETH Before",
        callback: 'showEther'
      }
        // {
        //   name: 'birthdate',
        //   titleClass: 'has-text-centered',
        //   dataClass: 'has-text-centered',
        //   callback: 'formatDate|DD-MM-YYYY'
        // },
        // {
        //   name: 'nickname',
        //   callback: 'allcap'
        // },
        // {
        //   name: 'gender',
        //   titleClass: 'has-text-centered',
        //   dataClass: 'has-text-centered',
        //    callback: 'genderLabel'
        // },
        // {
        //   name: 'salary',
        //   titleClass: 'has-text-centered',
        //   dataClass: 'has-text-right'
        // }
      ]
    }
  },
  computed: {
    dataTotal: function() {
      return this.participants.length
    },
    ...mapState({
      participants: state => state.ironHands.participants
    })
  },
  methods: {
    showEther (value) {
      return value + ' ETH'
    },
    formatDate (value, fmt = 'D MMM YYYY') {
      return (value == null)
        ? ''
        : moment(value, 'YYYY-MM-DD').format(fmt)
    },
    genderLabel (value) {
      return value === 'M'
        ? '<span class="tag is-primary is-medium"><span class="icon"><i class="fa fa-mars"></i></span>&nbsp;Male</span>'
        : '<span class="tag is-danger is-medium"><span class="icon"><i class="fa fa-venus"></i></span>&nbsp;Female</span>'
    },
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    }
  }
}
</script>

<style scoped>
.warning-box {
  margin-left: auto;
  margin-right: auto;
}
.button.is-danger,
.button.is-danger:hover  {
  background-color: #b631df !important;
  opacity: 0.8 !important;
}
.vuetable {
  margin-left: auto;
  margin-right: auto;
}
</style>
