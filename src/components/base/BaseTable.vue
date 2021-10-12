<template>
  <table class="table">
    <thead>
      <tr class="table__head">
        <th v-for="(col, i) in cols" :key="i" class="table__head__item">
          {{ col.name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(row, i) in rows"
        :key="i"
        @click="$emit('click', row)"
        class="table__row"
      >
        <td v-for="col in cols" :key="col.key" :data-column="col.name">
          <component
            :is="row.url ? 'a' : 'div'"
            class="table__row__item table__text"
            :href="row.url"
            target="_blank"
          >
            <span :class="`table__text__${col.key}`">
              <slot :name="'key-' + col.key" :row="row">
                {{ row[col.key] || defaultEmpty }}
              </slot>
            </span>
          </component>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "BaseTable",
  props: {
    cols: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
    defaultEmpty: {
      type: [String, Number],
      default: "Нет данных",
    },
  },
};
</script>

<style lang="scss"></style>
