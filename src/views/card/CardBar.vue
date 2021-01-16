<template>
  <section>
    <!--是否登录-->
    <login-welcome />

    <!--今日赠言-->
    <tip-card />

    <OpenSource />

    <!--资源推介-->
    <PromotionCard />

    <!--友情链接-->
    <links-card />

    <!--赞助-->
    <donate-card />

    <!--站点统计-->
    <count />
  </section>
</template>

<script>
import TipCard from '@/views/card/Tip'
import PromotionCard from '@/views/card/Promotion'
import DonateCard from '@/views/card/Donate'
import LinksCard from '@/views/card/Links'
import Count from '@/views/card/Count'
import OpenSource from '@/views/card/OpenSource'
import LoginWelcome from '@/views/card/LoginWelcome'

export default {
  name: 'CardBar',
  components: { LoginWelcome, OpenSource, Count, LinksCard, DonateCard, PromotionCard, TipCard }
}
</script>

<style scoped>
</style>
