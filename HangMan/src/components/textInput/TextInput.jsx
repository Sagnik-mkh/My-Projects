function TextInput({ label, type = "text", value, onChange }) {
	return (
		<label className="flex flex-col justify-center">
			{label && <span className="mb-3">{label}</span>}
			<input
				className="input input-primary input-md"
				onChange={onChange}
				placeholder={label}
				type={type}
				value={value}
			/>
		</label>
	);
}

export default TextInput;
