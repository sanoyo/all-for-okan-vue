<template>
  <div class="task-item-dates">
    <p class="task-item-dates-expires-at">
      <span> 両親への感謝をアウトプットしましょう </span>
    </p>
    両親への感謝はいつでも言えると思ってませんか？
    なにかあったときに後悔しないように日々感謝することを習慣づけましょう。
    そうすればしぜんと感謝を伝えられるようになるはずです
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["login"]),
  },
};
</script>

<style>
.task-item-dates {
  position: absolute;
  width: 900px;
  height: 205px;
}
.task-item-dates-expires-at {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 47px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
}
</style>
