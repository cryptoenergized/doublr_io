<template>
    <div class="container has-text-centered is-one-third flex-1">
      <div class="section">
        <div class="columns">
          <div class="column is-2">
          </div>
          <div class="column">
            <div class="box">
              <div class="content">
                <h1  style="color:#b631df;"> What is Doublr? </h1>
                <strong  style="color:#b631df;">Following <a href=" https://www.youtube.com/watch?v=tMskEyGxLyo" target="_blank">video</a> will explain you how doublr works.</strong><br>
                 <figure>
                   <iframe width="100%" height="400px" src=" https://www.youtube.com/embed/tMskEyGxLyo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe> <br>
                </figure>
                <h2>Infographics</h2>

                <figure>
                   <img src="../assets/DOUBLR-InfographDRAFT4-WEB-MDpink-glo-float.png">
                   <figcaption>
                     Figure 1: Describing how Doublr works
                   </figcaption>
                </figure>
              </div>
            </div>
          </div>
        <div class="column is-2">
        </div>
      </div>
    </div>
    </div>
</template>

<script>


export default {
  name: 'about',
  data: function () {
    return {}
  }
}
</script>

<style scoped>
.box {
  opacity: 1 !important;
}
.content,
.content > h1,
.content > h2 {
  color:#b631df;
}

</style>
