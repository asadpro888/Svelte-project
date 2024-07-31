<script>
	import { onMount } from 'svelte';
    import Form from './Form.svelte'
	onMount(() => console.log('Mounted posts page'))
</script>




<section>
	<nav class='bg-slate-900 p-5 text-white'>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/posts">Posts</a></li>
        </ul>
		<h1 class="text-white text-4xl capitalize">posts page</h1>
	</nav>
	<Form/>
</section>