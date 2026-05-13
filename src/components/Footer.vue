<template>
	<footer class="bottom-content">
		<div class="bottom-content__wrapper">
			<img src="../assets/logo.svg" alt="logo" class="bottom-content__image">
			<h2 class="bottom-content__title">
				FogForn
			</h2>
		</div>
		<div class="bottom-content__wrapper">
			<p class="bottom-content__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto officiis laboriosam illum minus nesciunt harum fugiat officia, asperiores, voluptate tempora eveniet repellendus vitae? Voluptatum ipsum in eius aperiam adipisci tempora?</p>
			<p class="bottom-content__text">Lorem amet consectetur adipisicing elit. Numquam consectetur blanditiis repudiandae nihil iusto natus voluptas ducimus quod illo quasi, quia hic.</p>
			<p class="bottom-content__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit at eaque magnam enim placeat distinctio, neque consequuntur? Dolor nam voluptate eaque nisi eligendi autem. Facilis fugit porro dicta laboriosam excepturi?
			Ipsum laboriosam voluptatum expedita voluptate iure eveniet neque ducimus quibusdam eligendi rem exercitationem veniam vel accusamus, ad officiis praesentium mollitia. Iste pariatur et rem fugit eligendi consectetur enim minima provident.</p>
		</div>
	</footer>
</template>

<style scoped>
.bottom-content {
	gap: 10px;
	display: grid;
	padding: 50px 25px;
	grid-template-columns: 1fr 2fr;
	background: var(--third-background-color);
}

.bottom-content__text {
	margin-bottom: 30px;
}

.bottom-content__image {
	width: 50px;
	height: 50px;
	overflow: visible;
	border-radius: 100px;
	padding: 10px 10px 5px 10px;
	background: var(--primary-background-color);
}

.bottom-content__title {
	color: var(--primary-text-color);
}
</style>