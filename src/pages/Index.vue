<template>
  <Layout title="Trang chủ">
    <div class="mb-6">
      <div class="row row-cards">
        <div class="col-lg-12 col-md-12">
            <ListPostTable :articles="$page.articles"/>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import ListPostTable from "~/components/table/ListPostTable.vue";
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    ListPostTable
  }
}
</script>

<page-query>
  query Article {
    articles : allArticle(perPage: 3){
      edges {
        node {
          id
          date (format: "D MMMM, YYYY")
          title
          timeToRead
          path
        }
      }
    }
  }
</page-query>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
