<template>
	<div class="page-content__image-wrapper">
		<img src="../../assets/background.jpg" alt="frontpage image"
		class="page-content__image">
	</div>
	<article class="page-content__kontakt">
		<div class="page-content__kontakt-wrapper">
			<h2 class="page-content__kontakt-title">
				Kontakt os
			</h2>

			<p class="page-content__kontakt-text">Hvis du har spørgsmål, brug for hjælp eller ønsker mere information, er du altid velkommen til at kontakte os.</p>
			<p class="page-content__kontakt-text">Vi står klar til at hjælpe dig hurtigt og professionelt, uanset hvad din henvendelse drejer sig om. Du kan kontakte os via telefon, e-mail eller kontaktformularen her på siden. Vi bestræber os på at besvare alle henvendelser så hurtigt som muligt.</p>
			<p class="page-content__kontakt-text">Hos os er god kundeservice og personlig kontakt en vigtig del af oplevelsen. Tøv derfor ikke med at tage fat i os – vi glæder os til at høre fra dig.</p>
		</div>
		<div class="page-content__kontakt-wrapper">
			<RouterLink to="/kontakt" class="button page-content__kontakt-button">
				Klik for hjælp
			</RouterLink>
		</div>
	</article>
</template>

<style scoped>
.page-content__kontakt {
	gap: 15dvw;
	padding: 25px;
	display: grid;
	margin-top: 10px;
	min-height: 300px;
	grid-template-columns: 3fr 1fr;
}

.page-content__kontakt-text {
	margin-top: 25px;
}

.page-content__kontakt-wrapper:last-of-type {
	height: 100%;
	text-align: center;
	align-content: center;
}

.page-content__image {
	height: fit-content;
}
.page-content__image-wrapper {
	height: 40dvw;
	display: flex;
	overflow: hidden;
	max-height: 500px;
	align-items: center;
}

@media screen and (max-width: 1000px) {
	.page-content__kontakt {
		gap: 25px;
		display: flex;
		align-items: center;
		flex-direction: column;
	}
}
</style>