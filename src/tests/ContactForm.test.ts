import Contact from "@/components/pages/Contact.vue"
import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"

const mountContact = () =>
	mount(Contact)

describe("Testområde for kontaktformular", () => {

	it("viser valideringsfejl for ugyldig e-mail", async () => {
		const wrapper = mountContact()

		await wrapper.find("#mail")
			.setValue("wrong-email")

		await wrapper.find("form")
			.trigger("submit")

		expect(wrapper.text())
			.toContain("Du har ikke skrevet en gyldig e-mail.")
	})

	it("viser valideringsfejl for ugyldigt telefonnummer", async () => {
		const wrapper = mountContact()

		await wrapper.find("#telefon")
			.setValue("wrong-phone")

		await wrapper.find("form")
			.trigger("submit")

		expect(wrapper.text())
			.toContain("Indtasted telefonnummer er ikke gyldigt.")
	})

	it("viser valideringsfejl for tomt navnefelt", async () => {
		const wrapper = mountContact()

		await wrapper.find("#navn")
			.setValue("")

		await wrapper.find("form")
			.trigger("submit")

		expect(wrapper.text())
			.toContain("Du skal udfylde dette felt.")
	})

	it("viser valideringsfejl for tomt beskedfelt", async () => {
		const wrapper = mountContact()

		await wrapper.find("#besked")
			.setValue("")

		await wrapper.find("form")
			.trigger("submit")

		expect(wrapper.text())
			.toContain("Du skal udfylde dette felt.")
	})

	it("accepterer gyldig formular, når den indsendes", async () => {
		const wrapper = mountContact()

		await wrapper.find("#navn")
			.setValue("John Doe")

		await wrapper.find("#mail")
			.setValue("john@test.com")

		await wrapper.find("#besked")
			.setValue("This is a valid message with enough characters.")

		await wrapper.find("form")
			.trigger("submit")

		expect(wrapper.text())
			.toContain("Tak for din besked")
	})

})