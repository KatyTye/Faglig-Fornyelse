<script lang="ts">

export default {
	methods: {
		handleSubmit(event: Event) {
			event.preventDefault()
		}
	}
}

</script>

<template>
	<form v-on:submit="evt => handleSubmit(evt)" class="page-content__form">
		<label for="navn" class="page-content__form-label">
			<span class="page-content__form-label-text">
				Dit navn:
			</span>
			<input type="text" name="navn" id="navn" autocomplete="given-name"
			placeholder="John Doe" required="true" class="page-content__form-input">
		</label>

		<label for="telefon" class="page-content__form-label">
			<span class="page-content__form-label-text">
				Dit telefonnummer:
			</span>
			<input type="text" name="telefon" id="telefon" autocomplete="tel"
			placeholder="+4512345678" class="page-content__form-input">
		</label>

		<label for="mail" class="page-content__form-label">
			<span class="page-content__form-label-text">
				Din e-mail:
			</span>
			<input type="email" name="mail" id="mail" autocomplete="email"
			placeholder="youremail@anymail.com" required="true" class="page-content__form-input">
		</label>

		<label for="besked" class="page-content__form-label">
			<span class="page-content__form-label-text">
				Din besked:
			</span>
			<textarea name="besked" id="besked" required="true" class="page-content__form-input besked"
			placeholder="Skriv din besked til os her."></textarea>
		</label>

		<button class="page-content__form-submit button">
			Indsend kontakt formular
		</button>
	</form>
</template>

<style scoped>
.page-content__form {
	display: flex;
	padding: 10dvw;
	flex-direction: column;
}

.page-content__form-label-text {
	font-weight: bold;
	color: var(--primary-text-color);
}

.page-content__form-input {
	width: 100%;
	outline: none;
	padding: 10px;
	display: block;
	margin: 10px 0 25px 0;
	border-radius: 5px;
	border: 2px solid transparent;
	color: var(--primary-text-color);
	background: var(--secondary-background-color);
	transition: border 0.3s linear, color 0.3s linear;
}

.page-content__form-input.besked {
	resize: none;
	height: 150px;
}

.page-content__form-input:focus,
.page-content__form-input:hover {
	color: var(--third-text-color);
	border-color: var(--third-text-color);
}
</style>