<script>
  // Import sanitize css
  import '../css/sanitize/assets.css'
  import '../css/sanitize/forms.css'
  import '../css/sanitize/reduce-motion.css'
  import '../css/sanitize/sanitize.css'
  import '../css/sanitize/system-ui.css'
  import '../css/sanitize/typography.css'
  import '../css/sanitize/ui-monospace.css'

  // Import fonts
  import '../css/fonts/Bellota_Text.css'
  import '../css/fonts/Rubik.css'
  import '../css/fonts/Montserrat.css'

  // Import components
  import Header from '$components/Header.svelte'
  import Footer from '$components/Footer.svelte'

  // TODO: create components:
  // 1 Cite or Cites
  // 2 Chapter / Section
</script>

<Header />

<main>
  <slot />
</main>

<Footer />

<style lang="sass" global>
main
	padding: 4rem 0
	flex-grow: 1
</style>
