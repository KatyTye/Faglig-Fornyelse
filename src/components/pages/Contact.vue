<script lang="ts">
export default {
  data() {
    return {
      form: {
        navn: '',
        telefon: '',
        mail: '',
        besked: ''
      },

      errors: {
        navn: [] as string[],
        telefon: [] as string[],
        mail: [] as string[],
        besked: [] as string[]
      },

      submitted: false
    }
  },

  methods: {
    validateField(field: string) {
      this.errors[field as keyof typeof this.errors] = []

      switch (field) {
        case 'navn':
          if (!this.form.navn.trim()) {
            this.errors.navn.push('Du skal udfylde dette felt.')
          }
          break

        case 'mail':
          if (!this.form.mail.trim()) {
            this.errors.mail.push('Du skal udfylde dette felt.')
          } else if (!/\S+@\S+\.\S+/.test(this.form.mail)) {
            this.errors.mail.push(
              'Du har ikke skrevet en gyldig e-mail.'
            )
          }
          break

        case 'telefon':
          if (
            this.form.telefon &&
            !/^\+?\d[\d\s-]{6,}\d$/.test(this.form.telefon)
          ) {
            this.errors.telefon.push(
              'Indtasted telefonnummer er ikke gyldigt.'
            )
          }
          break

        case 'besked':
          if (!this.form.besked.trim()) {
            this.errors.besked.push(
              'Du skal udfylde dette felt.'
            )
          } else if (this.form.besked.length < 25) {
            this.errors.besked.push(
              'Din besked skal være på mindst 25 tegn.'
            )
          }
          break
      }
    },

    validateForm() {
      const fields = ['navn', 'telefon', 'mail', 'besked']

      fields.forEach(field => this.validateField(field))

      return fields.every(
        field =>
          this.errors[field as keyof typeof this.errors].length === 0
      )
    },

    handleSubmit() {
      const isValid = this.validateForm()

      if (!isValid) return

      localStorage.setItem(
        'fagforn_submitted',
        JSON.stringify(this.form)
      )

      this.submitted = true
    }
  }
}
</script>

<template>
  <div
    v-if="submitted"
    class="page-content__output showed"
  >
    <h2 class="page-content__output-title">
      Tak for din besked,
      <span>{{ form.navn }}</span>!
    </h2>

    <p class="page-content__output-text">
      Dette er kun lavet som eksempel,
      så din besked er kun gemt lokalt.
    </p>
  </div>

  <form
    v-else
    @submit.prevent="handleSubmit"
    class="page-content__form"
  >
    <!-- NAVN -->
    <label for="navn" class="page-content__form-label">
      <span class="page-content__form-label-text">
        Dit navn:
        <span class="required">*</span>
      </span>

      <input
        id="navn"
        v-model="form.navn"
        type="text"
		placeholder="John Doe"
        class="page-content__form-input"
        @input="validateField('navn')"
      >
    </label>

    <ul
      class="page-content__list"
      :class="{ active: errors.navn.length }"
    >
      <li
        v-for="error in errors.navn"
        :key="error"
        class="page-content__list-item"
      >
        {{ error }}
      </li>
    </ul>

    <!-- TELEFON -->
    <label for="telefon" class="page-content__form-label">
      <span class="page-content__form-label-text">
        Dit telefonnummer:
      </span>

      <input
        id="telefon"
        v-model="form.telefon"
        type="text"
		placeholder="+4512345678"
        class="page-content__form-input"
        @input="validateField('telefon')"
      >
    </label>

    <ul
      class="page-content__list"
      :class="{ active: errors.telefon.length }"
    >
      <li
        v-for="error in errors.telefon"
        :key="error"
        class="page-content__list-item"
      >
        {{ error }}
      </li>
    </ul>

    <!-- MAIL -->
    <label for="mail" class="page-content__form-label">
      <span class="page-content__form-label-text">
        Din e-mail:
        <span class="required">*</span>
      </span>

      <input
        id="mail"
        v-model="form.mail"
        type="email"
		placeholder="youremail@mail.com"
        class="page-content__form-input"
        @input="validateField('mail')"
      >
    </label>

    <ul
      class="page-content__list"
      :class="{ active: errors.mail.length }"
    >
      <li
        v-for="error in errors.mail"
        :key="error"
        class="page-content__list-item"
      >
        {{ error }}
      </li>
    </ul>

    <!-- BESKED -->
    <label for="besked" class="page-content__form-label">
      <span class="page-content__form-label-text">
        Din besked:
        <span class="required">*</span>
      </span>

      <textarea
        id="besked"
        v-model="form.besked"
		placeholder="Indtast din besked her"
        class="page-content__form-input besked"
        @input="validateField('besked')"
      />
    </label>

    <ul
      class="page-content__list"
      :class="{ active: errors.besked.length }"
    >
      <li
        v-for="error in errors.besked"
        :key="error"
        class="page-content__list-item"
      >
        {{ error }}
      </li>
    </ul>

    <button
      class="page-content__form-submit button"
    >
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