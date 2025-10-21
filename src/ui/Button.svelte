<script lang="ts">
  interface Props {
    label: string;
  }

  let { label }: Props = $props();
</script>

<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  {label}
</button>
