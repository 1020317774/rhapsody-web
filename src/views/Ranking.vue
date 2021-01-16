<template>
  <div class="columns is-multiline">
    <div class="column is-12">
      <section class="box hero colors is-small is-success is-bold">
        <div class="hero-body">
          <h1 class="title is-size-4 ">
            热榜
          </h1>
          <h2 class="subtitle is-size-6 mt-1">
            每<strong>30</strong>分钟系统根据用户话题热度生成一次
          </h2>
        </div>
      </section>
    </div>

    <div class="column is-one-quarter">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img class="is-rounded" src='https://via.placeholder.com/48?text=avatar'>
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-5">Siege Media</p>
              <p class="subtitle is-6">Like</p>
            </div>
          </div>
          <div class="content">
            <img src="https://via.placeholder.com/300x200?text=image">
            <br>
            <a class="button is-fullwidth mt-5"
               href="/user/admin" target="_blank">主页</a>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-one-quarter">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img class="is-rounded" src="https://via.placeholder.com/48?text=avatar">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-5">Alfrey Davilla</p>
              <p class="subtitle is-6">Comment</p>
            </div>
          </div>
          <div class="content">
            <img src="https://via.placeholder.com/300x200?text=image">
            <br>
            <a class="button is-fullwidth mt-5"
               href="/user/admin" target="_blank">主页</a>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-one-quarter">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img class="is-rounded" src="https://via.placeholder.com/48?text=avatar">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-5">Dipa Inhouse</p>
              <p class="subtitle is-6">Like</p>
            </div>
          </div>
          <div class="content">
            <img src="https://via.placeholder.com/300x200?text=image">
            <br>
            <a class="button is-fullwidth mt-5"
               href="/user/admin" target="_blank">主页</a>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-one-quarter">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img class="is-rounded" src="https://via.placeholder.com/48?text=avatar">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-5">Anna Hurley</p>
              <p class="subtitle is-6">Follow</p>
            </div>
          </div>
          <div class="content">
            <img src="https://via.placeholder.com/300x200?text=image">
            <br>
            <a class="button is-fullwidth mt-5"
               href="/user/admin" target="_blank">主页</a>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-one-quarter">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img class="is-rounded" src="https://via.placeholder.com/48?text=avatar">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-5">Siege Media</p>
              <p class="subtitle is-6">Views</p>
            </div>
          </div>
          <div class="content">
            <img src="https://via.placeholder.com/300x200?text=image">
            <br>
            <a class="button is-fullwidth mt-5"
               href="/user/admin" target="_blank">主页</a>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-one-quarter">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img class="is-rounded" src="https://via.placeholder.com/48?text=avatar">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-5">Piqo</p>
              <p class="subtitle is-6">Followers</p>
            </div>
          </div>
          <div class="content">
            <img src="https://via.placeholder.com/300x200?text=image">
            <br>
            <a class="button is-fullwidth mt-5"
               href="/user/admin" target="_blank">主页</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ranking"
}
</script>

<style scoped>
@import "../assets/ranking/ranking.css";

.hero.colors.is-success {
  background: #36D1DC;
  background: -webkit-linear-gradient(to right, #5B86E5, #36D1DC);
  background: linear-gradient(to right, #5B86E5, #36D1DC);
}
</style>