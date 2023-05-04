import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NoteEditor from "../NoteEditor/NoteEditor";
import NoteViewer from "../NoteViewer/NoteViewer";

const Workspace: React.FC = () => {
	const { pathname } = useLocation();
	const [isEditable, setIsEditable] = useState(false);
	useEffect(() => {
		if (pathname === "/edit") {
			setIsEditable(true);
			return;
		}
		setIsEditable(false);
	}, [pathname]);
	return isEditable ? (
		<NoteEditor setIsEditable={setIsEditable} />
	) : (
		<NoteViewer setIsEditable={setIsEditable} />
	);
};

export default Workspace;
