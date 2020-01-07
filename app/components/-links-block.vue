<template>
  <div class="links-block">
    <h2>Links</h2>
    <ul>
      <li>
        <span class="icon-pdf"></span>
        <a
          target="_blank"
          href="http://www.wizards.com/avalonhill/rules/diplomacy_rulebook.pdf"
          >第五版ルール (PDF)</a
        >
      </li>
      <li>
        <span class="icon-extlink"></span>
        <a target="_blank" href="http://www.wizards.com/avalonhill/"
          >Avalon Hill</a
        >
      </li>
      <li>
        <span class="icon-extlink"></span>
        <a target="_blank" href="http://jdip.sourceforge.net/">jDip</a>
      </li>
    </ul>
  </div>
</template>

<style lang="postcss" scoped>
.links-block {
  & ul {
    & li {
      @apply pb-2;

      & .icon-extlink {
        @apply inline-block w-5 h-5 mx-2 bg-cover align-text-bottom;
        background-image: url('~assets/img/icon-extlink.png');
      }
      & .icon-pdf {
        @apply inline-block w-5 h-5 mx-2 bg-cover align-text-bottom;
        background-image: url('~assets/img/icon-pdf.png');
      }
    }
  }
}
</style>
