<template>
  <div class="home">
    <base-table :cols="cols" :rows="rows" v-once></base-table>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseTable from "@/components/base/BaseTable";

export default {
  name: "Home",
  components: {
    BaseTable,
  },
  data() {
    return {
      rows: [
        {
          name: "asdasdasd",
          price: "DASDasda",
        },
        {
          name: "adasdsssssssssssssssssssssadddddddddddddddddddddddddddddddddddddddasdasd",
          price: "DASDasda",
        },
        {
          name: "asdasadasssdasd",
          price: "DASDasda",
        },
      ],
      cols: [
        {
          name: "Нименование",
          key: "name",
        },
        {
          name: "Цена",
          key: "price",
        },
      ],
    };
  },
};
</script>
