<template>
	<header class="top-content">
		<RouterLink class="top-content__wrapper" to="/">
			<img src="../assets/logo.svg" alt="logo"
			class="top-content__logo" />
			<p class="top-content__title">FagForn</p>
		</RouterLink>
		<nav class="top-content__navigation">
			<RouterLink to="/" class="top-content__navigatio-link">
				Hjem
			</RouterLink>
			<RouterLink to="/kontakt" class="top-content__navigatio-link">
				Kontakt
			</RouterLink>
		</nav>
	</header>
</template>

<style scoped>
.top-content {
	padding: 25px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: var(--secondary-background-color);
}

.top-content__logo {
	width: auto;
	height: 25px;
}

.top-content__wrapper {
	border: none;
	display: grid;
	align-items: center;
	grid-template-columns: 1fr 2fr;
}

.top-content__navigation {
	gap: 25px;
	display: flex;
	position: relative;
}

.top-content__title {
	font-size: 18px;
	text-align: left;
	font-weight: bold;
	color: var(--primary-text-color);
}
</style>