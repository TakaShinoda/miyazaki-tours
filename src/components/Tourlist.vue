<template>
  <div id="tourlist">
      <h2>観光スポット</h2>
      <p>
        <router-link to="/aoshima">青島</router-link>
      </p>
      <p>
        <router-link to="/horikiri">堀切峠</router-link>
      </p>
      <table border="1" width="500" align="center" cellspacing="0" cellpadding="1">
        <tr>
          <td>
            <div class="twitter-widget">
              <v-timeline
                :id="twitterId"
                :source-type="'profile'"
                :options="{ 'height': twitterHeight }"
              />
            </div>
          </td>
        </tr>
      </table>
      <p>
        <router-link to="/signout">ログアウト</router-link>
      </p>
  </div>
</template>

<script>
import { Tweet, Moment, Timeline } from 'vue-tweet-embed'

export default {
  name: 'Tourlist',
  components: {
    'v-timeline': Timeline,
  },
  data () {
    return {
      twitterId: 'miyazakipref',
      twitterHeight: '450',
    }
  },
}
</script>
 
<style>
</style>