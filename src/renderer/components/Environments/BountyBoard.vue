<template>
  <div class="bounty-board">
    <div v-for="(bounty,bountyIndex) in [1,1,1,1,1,1,1,1,1,1,1,1,1,1]" :key="bountyIndex" class="bounty">
      <span class="label-art">Some New Job</span>
      <p>Job description : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel rhoncus eros. Nulla sodales bibendum posuere. Sed urna nunc, hendrerit in urna vel, placerat sollicitudin elit. Nullam varius molestie lacus, quis lacinia enim convallis vitae. Nulla lacinia consequat interdum. In lorem elit, porttitor non arcu in, congue iaculis ipsum. Morbi eu est vel metus tempus accumsan. Vivamus varius erat consectetur, ullamcorper velit ac, mattis leo. Ut nisi mi, volutpat nec nulla ac, porta vehicula magna. Fusce a leo ut mauris volutpat sollicitudin quis sit amet libero. Praesent aliquet nulla ac ex luctus ultricies. Mauris eu massa ac nulla faucibus molestie.</p>
      <button>Donate</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BountyBoard'
}
</script>

<style lang="scss" scoped>
.bounty-board {
  display: flex;
  flex-direction: column;

  .bounty {
    width: 100%;
    padding: 25px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,0.08);

    p {
      margin-top: 15px;
      max-width: 650px;
    }
  }
}
</style>
