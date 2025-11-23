import { create } from "zustand";

// zustand gives us a create function which takes a callback
// The callback takes a parameter "set"
// In the callback we make out state variables as an object
export const formValueStore = create((set) => ({
	formValue: {
		email: "",
		password: "",
	},
	// The setter function takes a callback which takes the new value as a parameter and calls "set"
	setFormValue: (newFormValue) =>
		// The "set" parameter takes a callback which takes the current "state" as argument and returns the updated state with new values.
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
