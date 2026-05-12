<script lang="ts">
</script>

<template>
	<header class="top-content">
		<p class="top-content__title">FagForn</p>
		<nav class="top-content__navigation">
			<RouterLink to="/" class="top-content__navigatio-link">
				Hjem
			</RouterLink>
			<RouterLink to="/kontakt" class="top-content__navigatio-link">
				Kontakt Os
			</RouterLink>
		</nav>
	</header>
</template>

<style>

.top-content {
	padding: 25px;
	display: flex;
	color: white;
	align-items: center;
	justify-content: space-between;
	background: rgba(255, 255, 255, 0.05);
}

</style>