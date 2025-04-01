import { useState } from "react";

export function MessageList() {
	const [message, setMessage] = useState([
		{ id: "id1", text: "message 1", heading: "Heading 1" },
		{ id: "id2", text: "message 2", heading: "Heading 2" },
		{ id: "id3", text: "message 3", heading: "Heading 3" },
	]);

	return message.map((message) => (
		<>
			<h2>{message.heading}</h2>
			<div key={message.id}>{message.text}</div>
		</>
	));
}

export default MessageList;
