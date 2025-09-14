import { create } from "zustand";

export const formValueStore = create((set) => ({
	formValue: {
		email: "",
		password: "",
	},
	setFormValue: (newFormValue) =>
		set((state) => {
			return {
				...state,
				formValue: {
					...state.formValue,
					...newFormValue,
				},
			};
		}),
}));
