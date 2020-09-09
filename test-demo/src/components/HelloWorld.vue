<template>
	<h1>{{ msg }}</h1>
	<button @click="count++">count is: {{ count }}</button>
	<p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
	<a-button type="primary">
		Primary
	</a-button>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: String
	},
	data() {
		return {
			count: 0
		}
	}
}
</script>
