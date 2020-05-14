<template>
  <Layout title="Document">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <ArticleContentCard :article="$page.article"/>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-lg-9">
          any FB COMMENT
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import ArticleContentCard from "~/components/article/ArticleContentCard.vue";

export default {
  metaInfo() {
    return {
      title: this.$page.article.title,
      description: this.$page.article.description,
      meta: [
        { property: "og:type", content: "article" },
      ]
    };
  },
  components: {
    ArticleContentCard,
  }
};
</script>

<page-query>
  query Article ($path: String!) {
    article (path: $path) {
      title
      date (format: "D MMMM, YYYY")
      content
      timeToRead
      path
    }
  }
</page-query>
