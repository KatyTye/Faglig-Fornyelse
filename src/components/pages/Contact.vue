<script lang="ts">

function checkForFormErrors() {
	const name = (document.querySelector<HTMLInputElement>('#navn')?.value || '').trim()
	const mail = (document.querySelector<HTMLInputElement>('#mail')?.value || '').trim()
	const phone = (document.querySelector<HTMLInputElement>('#telefon')?.value || '').trim()
	const message = (document.querySelector<HTMLTextAreaElement>('#besked')?.value || '').trim()

	const fieldErrors: Record<string, string[]> = {
		"navn": [],
		"mail": [],
		"telefon": [],
		"besked": [],
	}

	if (!name) {
		fieldErrors?.navn?.push('Du skal udfylde dette felt.')
	}

	if (!mail) {
		fieldErrors?.mail?.push('Du skal udfylde dette felt.')
	}

	if (mail && !/\S+@\S+\.\S+/.test(mail)) {
		fieldErrors?.mail?.push('Du har ikke skrevet en gyldig e-mail.')
	}

	if (!message) {
		fieldErrors?.besked?.push('Du skal udfylde dette felt.')
	}

	if (message && message.length < 25) {
		fieldErrors?.besked?.push('Din besked skal være på mindst 25 tegn.')
	}

	if (phone && !/^\+?\d[\d\s-]{6,}\d$/.test(phone)) {
		fieldErrors?.telefon?.push('Indtasted telefonnummer er ikke gyldigt.')
	}
	
	return fieldErrors
}

export default {
	methods: {
		handleSubmit(event: Event) {
			event.preventDefault()

			const fields = ['navn', 'telefon', 'mail', 'besked']
			this.handleChange(fields)

			const allErrors = checkForFormErrors()

			if ((allErrors["navn"]?.length || 0) === 0 &&
			(allErrors["telefon"]?.length || 0) === 0 &&
			(allErrors["mail"]?.length || 0) === 0 &&
			(allErrors["besked"]?.length || 0) === 0) {
				const form = event.currentTarget as HTMLFormElement
				localStorage.setItem("fagforn_submitted", JSON.stringify({
					name: form.querySelector<HTMLInputElement>('#navn')?.value,
					telefon: form.querySelector<HTMLInputElement>('#telefon')?.value,
					mail: form.querySelector<HTMLInputElement>('#mail')?.value,
					besked: form.querySelector<HTMLTextAreaElement>('#besked')?.value
				}))

				form.classList = "page-content__form hidden"
				const outputText = document.querySelector('#output-text')
				const outputElm = document.querySelector<HTMLElement>('#output')

				if (outputElm) {
					outputElm.classList = "page-content__output showed"
				}
				outputText?.insertAdjacentText("afterbegin", form.querySelector<HTMLInputElement>('#navn')?.value || "")
			}
		},

		handleChange(fields: string[]) {
			const allErrors = checkForFormErrors()
			for (const field of fields) {
				const list = document.querySelector(`#${field}-list`)
				if (list) {
					list.innerHTML = ''
					const errors = allErrors[field] || []
					for (const error of errors) {
						const li = document.createElement('li')
						li.classList = "page-content__list-item"
						li.textContent = error
						list.appendChild(li)
					}
				}

				if (list) {

					if ((allErrors?.[field]?.length || 0) >= 1) {
						list.classList = "page-content__list active"
					} else {
						list.classList = "page-content__list"
					}
				}
			}
		}
	}
}

</script>

<template>

	<div class="page-content__output" id="output">
		<h2 class="page-content__output-title">Tak for din besked, <span id="output-text">
		</span>!</h2>

		<p class="page-content__output-text">Dette er kun lavet som eksempel, så din besked er kun gemt lokalt.</p>
	</div>

	<form v-on:submit="evt => handleSubmit(evt)" class="page-content__form">
		<label for="navn" class="page-content__form-label">
			<span class="page-content__form-label-text">
				Dit navn: <span class="required">
					*
				</span>
			</span>
			<input type="text" name="navn" id="navn" autocomplete="given-name"
			placeholder="John Doe" class="page-content__form-input" v-on:input="handleChange(['navn'])">
		</label>

		<ul class="page-content__list" id="navn-list"></ul>

		<label for="telefon" class="page-content__form-label">
			<span class="page-content__form-label-text">
				Dit telefonnummer: <span class="optional">
					*
				</span>
			</span>
			<input type="text" name="telefon" id="telefon" autocomplete="tel"
			placeholder="+4512345678" class="page-content__form-input" v-on:input="handleChange(['telefon'])">
		</label>

		<ul class="page-content__list" id="telefon-list"></ul>

		<label for="mail" class="page-content__form-label">
			<span class="page-content__form-label-text">
				Din e-mail: <span class="required">
					*
				</span>
			</span>
			<input type="email" name="mail" id="mail" autocomplete="email"
			placeholder="youremail@anymail.com" class="page-content__form-input" v-on:input="handleChange(['mail'])">
		</label>

		<ul class="page-content__list" id="mail-list"></ul>

		<label for="besked" class="page-content__form-label">
			<span class="page-content__form-label-text">
				Din besked: <span class="required">
					*
				</span>
			</span>
			<textarea name="besked" id="besked" class="page-content__form-input besked"
			placeholder="Skriv din besked til os her." v-on:input="handleChange(['besked'])"></textarea>
		</label>

		<ul class="page-content__list" id="besked-list"></ul>

		<button class="page-content__form-submit button">
			Indsend kontakt formular
		</button>
	</form>
</template>

<style scoped>
.page-content__output {
	display: none;
	padding: 10dvw;
}

.page-content__output.showed {
	display: block;
}

.page-content__output-title {
	margin-bottom: 10px;
}

.page-content__form {
	display: flex;
	padding: 10dvw;
	flex-direction: column;
}

.page-content__form.hidden {
	display: none;
}

.page-content__form-label {
	cursor: pointer;
}

.page-content__list {
	height: 0;
	font-size: 14px;
	overflow: hidden;
	font-style: italic;
	margin-bottom: 25px;
	letter-spacing: 1.5px;
	transition: height 0.3s linear;
	color: var(--error-text-color);
}

.page-content__list.active {
	height: 17px;
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
	margin: 10px 0;
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