import Home from "@/components/pages/Home.vue"
import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"

const mountHome = () =>
	mount(Home, {
		global: {
			stubs: {
				RouterLink: true,
			},
		},
	})

describe("Testområde for forsiden", () => {

	it("viser hjemmesiden forside billede", () => {
		const wrapper = mountHome()

		expect(wrapper.find(".page-content__image").exists()).toBe(true)
	})

	it("viser hjemmesiden artiklen for kontakt os?", () => {
		const wrapper = mountHome()

		expect(wrapper.find(".page-content__kontakt").exists()).toBe(true)
	})

	it("indeholder artiklen en knap?", () => {
		const wrapper = mountHome()

		expect(wrapper.find(".page-content__kontakt").exists()).toBe(true)

		expect(wrapper.find(".page-content__kontakt-button").exists()).toBe(true)
	})
})