<template>
  <div class="card">
    <div class="card-body">
      <div class="text-wrap p-lg-6">
        <div class="row">
          <h2 class="mt-2">{{ article.title }}</h2>
        </div>
        <hr>
        <div class="row">
          <ol class="px-4 mx-3 mb-0">
            <li v-for="item in internalPageAnchorQuery" :key="item.id" :class="item.tab">
              <a class="h6">{{ item.title }}</a>
              <ol class="px-4 mx-3 mb-0">
                <li v-for="sub in item.childs" :key="sub.id" :class="sub.tab">
                  <a class="h6">{{ sub.title }}</a>
                </li>
              </ol>
            </li>
          </ol>
        </div>
        <hr>
        <div class="article-body" v-html="cleanedContent"/>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: "ArticleContentCard",
  props: {
    article: Object
  },
  computed: {
    cleanedContent() {
      return this.article.content.replace(/{:class="center-image"}/g, "", "g");
    },
    internalPageAnchorQuery() {
      if (process.isClient) {
        let parse = new DOMParser();
        let html = parse.parseFromString(this.article.content, "text/html");
        var arr = [];
        Array.from(
          html.documentElement.querySelectorAll("h1, h2, h3, h4, h5, h6")
        ).forEach(function(item, index) {
          if (
            arr.length === 0 ||
            item.tagName === "H1" ||
            item.tagName === "H2" ||
            item.tagName === "H3"
          ) {
            arr.push({
              id: item.id,
              title: item.textContent.replace(/# /g, "", "g"),
              tab: "ml-0",
              childs: []
            });
          } else {
            arr[arr.length - 1].childs.push({
              id: item.id,
              title: item.textContent.replace(/# /g, "", "g"),
              tab: "ml-" + (parseInt(item.tagName.replace("H", "")))
            });
          }
        });
        return arr;
      }
    }
  }
};
</script>


<style>
.article-body {
}

div.article-body > p > img {
  margin: 0 auto;
  display: block;
}
</style>
